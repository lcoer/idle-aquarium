const test = require('node:test');
const assert = require('node:assert/strict');
const Manager = require('../fish-manager.js');

const stock = overrides => ({ count: 2, kind: 'jade', maxSize: 22, baseSpeed: 28, stage: 'juvenile', ...overrides });
const rule = overrides => ({ kind: 'all', stage: 'all', count: 2, order: 'oldest', ...overrides });
const fish = [
  { kind: 'amber', hue: 30, age: 1500 },
  { kind: 'jade', hue: 170, age: 400 },
  { hue: 48, age: 1500 },
  { kind: 'jade', hue: 170, age: 1200 },
  { kind: 'jade', hue: 170, age: 200 }
];

test('manager exposes browser API and three stylistic species', () => {
  const vm = require('node:vm');
  const fs = require('node:fs');
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(require.resolve('../fish-manager.js'), 'utf8'), context);
  assert.equal(context.window.FishManager.LIMIT, 24);
  assert.deepEqual(Object.keys(Manager.SPECIES), ['amber', 'jade', 'pearl']);
  assert.equal(Manager.SPECIES.amber.name, '琥珀锦鱼');
  assert.equal(Manager.SPECIES.jade.name, '碧玉灯鱼');
  assert.equal(Manager.SPECIES.pearl.name, '月白银鱼');
  assert.equal(Manager.inferKind(170), 'jade');
  assert.equal(Manager.inferKind(48), 'pearl');
  assert.equal(Manager.inferKind(360), 'amber');
});

test('stock planning validates whole request and returns actual parameters', () => {
  assert.deepEqual(Manager.planStock(22, stock()), {
    ok: true, error: '', count: 2,
    options: { kind: 'jade', hue: 170, maxSize: 22, baseSpeed: 28, fry: true }
  });
  assert.equal(Manager.planStock(0, stock({ stage: 'adult' })).options.fry, false);
  const rejected = Manager.planStock(23, stock());
  assert.equal(rejected.ok, false);
  assert.equal(rejected.count, 0);
  assert.ok(rejected.error.length > 0);
  for (const [field, values] of Object.entries({
    count: [0, 9, 1.5, '2', NaN], kind: ['unknown', '__proto__'],
    maxSize: [13, 33, Infinity, '22'], baseSpeed: [11, 41, NaN, '28'], stage: ['all', null]
  })) {
    for (const value of values) assert.equal(Manager.planStock(0, stock({ [field]: value })).ok, false, `${field}: ${value}`);
  }
  assert.equal(Manager.planStock(0, null).ok, false);
});

test('catch selection filters species and stages with exact adult boundary', () => {
  assert.deepEqual(Manager.selectCatch(fish, rule({ kind: 'jade', stage: 'adult' })), [fish[3]]);
  assert.deepEqual(Manager.selectCatch(fish, rule({ kind: 'jade', stage: 'juvenile' })), [fish[1], fish[4]]);
  assert.deepEqual(Manager.selectCatch(fish, rule({ kind: 'pearl' })), [fish[2]]);
  assert.equal(Manager.matchingCount(fish, { kind: 'jade', stage: 'all' }), 3);
  assert.equal(Manager.matchingCount(fish, rule({ kind: 'jade', count: 1, order: 'bogus' })), 3);
  assert.deepEqual(Manager.selectCatch(fish, rule({ stage: 'adult' }), 2000), []);
});

test('catch is stable, returns original references and never mutates source', () => {
  const frozen = Object.freeze(fish.map(item => Object.freeze({ ...item })));
  assert.deepEqual(Manager.selectCatch(frozen, rule()), [frozen[0], frozen[2]]);
  assert.strictEqual(Manager.selectCatch(frozen, rule())[0], frozen[0]);
  assert.deepEqual(Manager.selectCatch(frozen, rule({ order: 'youngest' })), [frozen[4], frozen[1]]);
  assert.deepEqual(frozen.map(item => item.age), [1500, 400, 1500, 1200, 200]);
  for (const invalid of [null, rule({ kind: 'bad' }), rule({ stage: 'bad' }), rule({ count: 0 }), rule({ count: 25 }), rule({ count: 1.5 }), rule({ order: 'bad' })]) {
    assert.deepEqual(Manager.selectCatch(frozen, invalid), []);
  }
});

test('undo appends original fish without duplicates and respects current capacity', () => {
  const current = fish.slice(0, 2);
  const result = Manager.restoreCatch(current, [fish[0], fish[2], fish[2]]);
  assert.deepEqual(result, [fish[0], fish[1], fish[2]]);
  assert.notStrictEqual(result, current);
  const full = Array.from({ length: 23 }, () => ({ age: 0 }));
  const capped = Manager.restoreCatch(full, [fish[0], fish[1]]);
  assert.equal(capped.length, 24);
  assert.strictEqual(capped[23], fish[0]);
  const oversized = [...full, fish[2], fish[3]];
  assert.deepEqual(Manager.restoreCatch(oversized, fish), oversized);
  assert.deepEqual(Manager.restoreCatch([], []), []);
});
