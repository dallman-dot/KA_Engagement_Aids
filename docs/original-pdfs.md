# The original KA PDFs

What each interactive PDF holds, read from the files themselves (Adobe XFA forms, about 2015–2016) on November 13, 2026. The PDFs aren't kept in this repository while it is public.

All of them share one frame: the aid's name large in the top left with a QR code and an ⓘ, a "Title" line above it, the **ka** mark and "Knowledge-Advantage, Inc." top right, page dots, "© Copyright 2015/2016" bottom left, and a hidden date range in the footer (`2020-12-22:2021-12-31`, the licence window). Most add a "How to attach file" button, a "Still need help? Send this document to our support staff for evaluation and review · SEND" box and a ☰ menu for more options. The assistant replaces Send and Attach.

## Alignment of Priorities (guide, 2 pages)

Page 1, the guide:
1. "A visual aid to align priorities of key stakeholders." **Why is it important for us?** "We will accelerate agreement by illustrating how initiatives and solutions contribute to the goals of the business and the top of mind priorities for key stakeholders." **Expected outcomes**: confirm that organizational alignment is of importance to stakeholders; initial "draft" of the priorities for stakeholders across the organization; clarification of business goals and strategies; executive clarity as to how solutions address top of mind business initiatives.
2. "A clear sense of threats to scope, time and resources is required before solving any business problem." **Potential gaps/challenges** (tick boxes): Position (Relevance), People (Decision Makers), Policies (Budget), Procedures (Sign-offs), Politics (Agendas).
3. "Best used in the Problem Space during the Awareness Phase (1.1) to 'Gain Business Clarity'. It's also useful in the Solution Space to confirm alignment." The six A's on a line: Awareness, Analysis | Alternatives, Answer, Acceptance, Actions (Problem Space | Solution Space). In the Problem Space: review structure and use of colors within visual; review and refine what is known for each of the columns; understand the relationships within and across columns; challenge the relevance of initiatives or solutions under consideration; document any ambiguity that creates gaps to success. In the Solution Space: confirm how an initiative or solution aligns to the business priorities of key stakeholders; test the importance of an initiative or solution based on the business priorities; identify potential "gaps" in business priorities.

Page 2, the aid: "Aligning Priorities from Organization to Operational to Infrastructure". External factors Economy, Industry, Financials ("Factor in 'external' factors."); bands Organizational, Operational, Infrastructure ("Align to the roles and responsibilities of key executives."); columns stepping down a diagonal arrow, Goals → Strategies → Processes → Initiatives → Solutions, each band/column with a ▾ list. "Solutions ENHANCE Initiatives to IMPROVE Processes to EXECUTE Strategies to OBTAIN Goals." "View or add additional details."

## 4 Box Grid

Fields: Title, Header ("4 Box Grid"), VerticalHeader ("VALUE REALIZATION"), HorizontalHeader ("ABILITY TO EXECUTE"), VerticalLow/High, HorizontalLow/High. Four boxes, each with ▷ for details. Callouts: "Identifies the vertical axis headers." "Identifies the horizontal axis headers." "Contains content relative to the intersection of axis headers."

## 9 Box Grid

As the 4 Box Grid with Medium on both axes (VerticalMedium, HorizontalMedium) and nine boxes. Callouts the same, plus "View or add additional details."

## 4D Matrix (3 and 4)

A center ellipse (Title2 "TITLE GOES HERE", BodyText "Body Text": "Labels and describes the situation.") with four groupings around it, top blue, left plum, right orange, bottom purple, arrows pointing in. Each grouping has a heading (Question1–4, placeholder "Question #4 - Mission/Culture") and three (4D Matrix - 3) or four (4D Matrix - 4) items (Question1A–D, placeholder "To Be Determined / Second Line"). Callouts: "Allows you to visually see the relationships (similarities, differences) between groupings of items." "Titles for groupings and items can be changed based on the situation."

## Aids Configurator (2 pages)

Three numbered choices: **1 Customer Location** (Awareness 100, Analysis 200, Alternatives 300, Answer 400, Acceptance 500, Actions 600), **2 Engagement Scenario** (filtered by location: Demand Creation 10, Demand Development 20, Demand Reaction 30, Demand Management 40), **3 Customer Willingness to Participate** (Yes 1, No 2). Their sum is the configuration number (e.g. 111); a 190 KB script then fills up to 12 recommended aids on page 1 and up to 10 **Optional** and 10 **Backup** aids on page 2, each with a thumbnail, its name, a one-line description and a ▷ for more. The 18 sets are in `data/configurator-original.json` exactly as found; `data/configurator.json` is the same with three spellings fixed.

Found in the original, worth deciding rather than copying:
- Assessment Roadmap appears twice in most sequences (early and last). The prototype shows the second as "revisit".
- "Understanding Postions", "Options Snapshot" and "Requirements BluePrint" (fixed in `configurator.json`).
- Outcomes Map has no description.
- 531 (Acceptance · Demand Reaction · Yes) has no optional or backup aids, while 532 (No) has one.
- The catalog also describes aids no configuration recommends: 4D Matrix, Code of Decisions (CoD), CXO Selection (CS), Decision-Making Standards (DMS), FC, Make-up of Business Decisions (MBD), Process Model, QA, QD, SWOT, Venn (two).
