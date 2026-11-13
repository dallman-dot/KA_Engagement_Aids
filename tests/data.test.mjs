import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), 'utf8'));
const { aids } = read('data/aids.json');
const cfg = read('data/configurator.json');
const names = new Set(aids.map((a) => a.name));

test('every aid the configurator recommends is in the catalog', () => {
  for (const [code, set] of Object.entries(cfg.sets)) {
    for (const band of ['A', 'O', 'B']) {
      for (const n of set[band]) assert.ok(names.has(n), `${code} ${band}: "${n}" is not in data/aids.json`);
    }
  }
});

test('every location and scenario combination has a set, for Yes and No', () => {
  for (const [loc, scens] of Object.entries(cfg.scenariosForLocation)) {
    for (const s of scens) for (const w of [1, 2]) {
      assert.ok(cfg.sets[`${loc}${s}${w}`], `missing set ${loc}${s}${w}`);
    }
  }
  assert.equal(Object.keys(cfg.sets).length, 18);
});

test('the cleaned sets keep the original order of the aids', () => {
  const orig = read('data/configurator-original.json');
  const fix = { 'Understanding Postions': 'Understanding Positions', 'Options Snapshot': 'Option Snapshot', 'Requirements BluePrint': 'Requirements Blueprint' };
  for (const [code, set] of Object.entries(orig)) {
    for (const band of ['A', 'O', 'B']) {
      assert.deepEqual(cfg.sets[code][band], set[band].map((n) => fix[n] ?? n), `${code} ${band}`);
    }
  }
});

test('the prototype carries the same rules as data/configurator.json', () => {
  const html = readFileSync(new URL('../prototype/index.html', import.meta.url), 'utf8');
  const m = html.match(/const CONFIG = (\{[\s\S]*?\n\});/);
  assert.ok(m, 'CONFIG not found in prototype');
  const proto = JSON.parse(m[1].replace(/\b([ABO]):/g, '"$1":'));
  assert.deepEqual(proto, cfg.sets);
});

test('every built aid has a route, and only built aids do', () => {
  for (const a of aids) assert.equal(Boolean(a.route), a.built, a.name);
});
