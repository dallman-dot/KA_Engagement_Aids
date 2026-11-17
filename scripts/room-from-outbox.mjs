// Turns a "Set up a shared KA Engagement Room" request into a room page and its seed.
// 1. Read the outbox from the personal app's store:  ArtifactData list, url = the app, collection "outbox", out_dir = <dir>
// 2. node scripts/room-from-outbox.mjs <dir> <outboxId> <slug>
//    → prototype/rooms/<slug>.html (built from the app), <dir>/seed/seed-<i>.json, and the ArtifactData batch writes to print.
// 3. Publish the room as a NEW artifact (capabilities in build-room.mjs), then ArtifactData batch the printed writes to the ROOM's url,
//    then delete the outbox documents from the app's store. The owner opens the room; it loads the seed by itself and deletes it.
import {readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync} from "node:fs";
import {join} from "node:path";
import {execFileSync} from "node:child_process";
const [dir,id,slug]=process.argv.slice(2); if(!dir||!id||!slug){ console.error("usage: room-from-outbox.mjs <dir> <outboxId> <slug>"); process.exit(1); }
const odir=existsSync(join(dir,"outbox"))?join(dir,"outbox"):dir;
const parts=readdirSync(odir).filter(f=>f.startsWith(id+"~")&&f.endsWith(".json")).map(f=>{ const j=JSON.parse(readFileSync(join(odir,f),"utf8")); return j.data&&j.data.d!=null?j.data:j; }).sort((a,b)=>a.i-b.i);
if(!parts.length) throw new Error("no outbox parts for "+id); if(parts.length!==parts[0].n) throw new Error(`have ${parts.length} of ${parts[0].n} parts`);
const text=parts.map(p=>p.d).join(""), eng=JSON.parse(text); if(eng.format!=="ka-engagement") throw new Error("not an engagement");
execFileSync("node",[new URL("./build-room.mjs",import.meta.url).pathname,slug],{stdio:"inherit"});
const CH=180000, n=Math.ceil(text.length/CH), sdir=join(dir,"seed"); mkdirSync(sdir,{recursive:true}); const writes=[];
for(let i=0;i<n;i++){ const f=join(sdir,`seed-${i}.json`); writeFileSync(f,JSON.stringify({name:eng.name,i,n,d:text.slice(i*CH,(i+1)*CH),at:Date.now()})); writes.push({op:"set",collection:"seed",doc_id:`p${i}`,file_path:f}); }
console.log(JSON.stringify({engagement:eng.name,title:`${eng.name} · KA Engagement Room`,room:`prototype/rooms/${slug}.html`,writes,outboxDocs:parts.map((_,i)=>`${id}~${i}`)},null,1));
