# KA Engagement Aids

Knowledge-Advantage's engagement aids (the visual aids KA licenses as standards for better business decisions) rebuilt from the interactive PDFs as a web app: fill them in with real-time help, then use them with prospects and clients.

A separate Knowledge-Advantage product, not part of Worthwhile Today.

## What's here

| | |
| --- | --- |
| `prototype/index.html` | The working prototype: the Aids Configurator, Alignment of Priorities, 4 Box Grid, 9 Box Grid and 4D Matrix, with an assistant and a "Use with a client" mode. One self-contained page. |
| `data/aids.json` | The catalog: every aid's name and one-line description from the configurator, and whether it's rebuilt yet. |
| `data/configurator.json` | The configurator's rules: locations, scenarios, willingness and the 18 recommended sets. |
| `data/configurator-original.json` | The same 18 sets exactly as found in the PDF. |
| `docs/original-pdfs.md` | What each original PDF holds: fields, callouts and guide text. |

## Try it

The prototype is published privately at https://claude.ai/artifact/NuW3xuJ7QVoTN8ytH7R47L. The assistant runs when the page is opened in Claude, on the viewer's own Claude account; the aids work by hand anywhere (open `prototype/index.html` in a browser). Work is kept in that browser only.

## Check it

```sh
npm test
```
