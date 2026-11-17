// Builds a shared engagement's own page from the personal app.
// Usage: node scripts/build-room.mjs <slug>   → prototype/rooms/<slug>.html (git-ignored: room files name clients)
// Publish it as a NEW artifact with capabilities {sample:{}, downloads:true, dictation:{}, tts:{}, db:{}, user:{scopes:["profile"]}, room:{}}.
import {readFileSync, writeFileSync, mkdirSync} from "node:fs";
const slug=(process.argv[2]||"").replace(/[^a-z0-9-]/gi,"-").toLowerCase();
if(!slug){ console.error("Give the room a slug, e.g. advocate-health"); process.exit(1); }
const src=new URL("../prototype/alignment-of-priorities.html",import.meta.url);
let t=readFileSync(src,"utf8");
const flag="const KA_ROOM=false;"; if(!t.includes(flag)) throw new Error("KA_ROOM flag not found");
t=t.replace(flag,"const KA_ROOM=true;").replace(/<title>[^<]*<\/title>/,"<title>KA Engagement Room</title>");
mkdirSync(new URL("../prototype/rooms/",import.meta.url),{recursive:true});
const out=new URL(`../prototype/rooms/${slug}.html`,import.meta.url); writeFileSync(out,t); console.log(out.pathname);
