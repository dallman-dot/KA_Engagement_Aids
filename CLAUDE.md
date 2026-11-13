# KA Engagement Aids

Guide for Claude Code sessions. The owner is **Dave** (Knowledge-Advantage, Inc., KA). Record each new decision here in a line or two: Dave's words, the date, the files. Replace a superseded rule instead of adding beside it.

## Purpose

KA licenses standards (mind-set, skill-set, tool-set) for better decisions in sales, marketing and product. Its engagement aids were interactive Adobe PDFs (2015–2016). This product rebuilds them for the web (Dave, November 13, 2026: "recreate a set of existing interactive engagement PDFs… add real-time assistance to help users fill them out and then make them interactive to use with their prospects and clients"; "This is a separate Knowledge Advantage product!"). It is not Worthwhile Today and shares no code, data or accounts with it.

## Rules

- **The originals are the source.** Keep each aid's structure, the guide's words and the configurator's rules as found (`docs/original-pdfs.md`, `data/configurator-original.json`); fix only plain slips, and list each fix. `tests/data.test.mjs` fails if the catalog, the rules and the prototype drift apart.
- **The assistant helps, never invents.** It never states facts about a client that the user didn't give; anything unknown comes back as a question or a marked assumption. Every draft is shown for review before it changes the aid (fill the empty boxes, replace everything, or discard).
- **Use with a client** hides the assistant and coaching and enlarges the aid.
- **No KA PDFs in git while the repository is public** (`.gitignore`).
- Phone and computer, light and dark; nothing widens the page sideways.

## Now (November 13, 2026)

- `prototype/index.html`: one self-contained page, published privately at https://claude.ai/artifact/NuW3xuJ7QVoTN8ytH7R47L with the `sample` capability (Claude on the viewer's own account). Built: Aids Configurator, Alignment of Priorities, 4 Box Grid, 9 Box Grid, 4D Matrix (3 or 4 items). Work is saved in the browser only (`ka-aids-v1`).
- When the prototype's rules change, change `data/configurator.json` with them; run `npm test`.

- **Alignment of Priorities, brought to life** (Dave, November 13: "I want to see how you bring the Alignment of Priorities to life before you do anything else"): `prototype/alignment-of-priorities.html`, published at https://claude.ai/artifact/1K8gASRTunm2UJxM6Nqbyr. Page 1, the guide: outcomes and steps to tick, the five gaps with notes, We are in the Problem / Solution Space, each step showing live progress from the aid. Page 2, the aid as in the PDF (2 goals, 5 strategies, 5 processes, 3 initiatives, 3 solutions, each with details; external factors; the 5 column notes; the three color tags teal/orange/pink from the original, with a key you name); new: each box says what it serves in the column before, lines draw it, tapping a box lights its whole chain and reads it out, the alignment check lists what isn't tied in, Walk the chain steps through the columns, Copy summary; the assistant suggests a box, drafts the aid, suggests connections, challenges the alignment, writes client questions. Saved in the browser (`ka-aop-v1`). **The standards are the forced choices** (Dave, November 13: "key to the Alignment of Priorities is using the choices (4 goals, etc.) as the lead in to the descriptions that support the choices. The standards are the forced choices!"): Goals, Strategies, Processes and Initiatives are picked only from KA's lists in the PDF (4, 14, 13, 6; `CHOICES`; abbreviations written out), each choice once per column, and the description then says what supports that choice; Solutions stay free text; the assistant may only use the standard choices. The other PDFs' forced lists (Decision Criteria Map, Decision-Making Standards, KA Mapping Aid, Quad Analysis, Three Column, Four Column, Quadrant Dialog, Multi-Tool) apply the same rule when those aids are built. This page is the pattern for the other aids.

## Open for Dave

- The rest of the PDFs; first the configurator's most recommended: Session Plan, Assessment Roadmap, Assessment Questions, Fast Path/Gap, Solution Snapshot, Criteria Proposition.
- Public or private repository (it was created public).
- Sharing with clients: a link the client fills in while the advisor watches (needs sign-in and shared saving), or screen-sharing only for now.
- The configurator's slips: Assessment Roadmap twice, Outcomes Map's missing description, 531 with no optional aids.
- The app's stack once more aids exist (the prototype is one page on purpose).
