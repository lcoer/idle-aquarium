const test = require('node:test');
const assert = require('node:assert/strict');
const State = require('../state.js');

test('classic browser script exposes AquariumState without module tooling', () => {
  const vm = require('node:vm');
  const fs = require('node:fs');
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(require.resolve('../state.js'), 'utf8'), context);
  assert.equal(context.window.AquariumState.STORAGE_KEY, State.STORAGE_KEY);
  assert.equal(typeof context.window.AquariumState.save, 'function');
});

function fixture() {
  return { version: 1, theme: 'night', born: 3, fish: [
    { kind: 'jade', hue: 120, maxSize: 24, baseSpeed: 30, sex: 'f', age: 90, sat: 72, breedCd: 5 }
  ] };
}
function storage() {
  const entries = new Map();
  return { getItem: key => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, value), removeItem: key => entries.delete(key) };
}

test('roundtrip stores only the schema and clear removes the saved aquarium', () => {
  const store = storage();
  const value = fixture();
  value.fish[0].x = 100;
  value.savedAt = 123456;
  assert.equal(State.STORAGE_KEY, 'idle-aquarium:v1');
  assert.equal(State.load(store), null);
  assert.equal(State.save(store, value), true);
  assert.deepEqual(State.load(store), fixture());
  assert.equal(State.clear(store), true);
  assert.equal(State.load(store), null);
});

test('invalid versions, shapes and corrupted JSON are ignored', () => {
  for (const invalid of [null, [], {}, { ...fixture(), version: 2 },
    { ...fixture(), fish: {} },
    { ...fixture(), fish: [null] }]) {
    assert.equal(State.sanitize(invalid), null);
    assert.equal(State.save(storage(), invalid), false);
  }
  const store = storage();
  store.setItem(State.STORAGE_KEY, '{broken');
  assert.equal(State.load(store), null);
});

test('finite numeric values clamp, count truncates and invalid enum values default', () => {
  const value = fixture();
  value.theme = 'bogus';
  value.born = -2.5;
  value.fish = Array.from({ length: 28 }, () => ({
    hue: 1000, maxSize: 0, baseSpeed: 100, sex: 'unknown', age: -1,
    sat: 150, breedCd: 2e9
  }));
  const result = State.sanitize(value);
  assert.equal(result.theme, 'day');
  assert.equal(result.born, 0);
  assert.equal(result.fish.length, 24);
  assert.deepEqual(result.fish[0], {
    kind: 'amber', hue: 360, maxSize: 14, baseSpeed: 60, sex: 'm', age: 0, sat: 100, breedCd: 1e9
  });
  value.born = 4.9;
  assert.equal(State.sanitize(value).born, 4);
});

test('missing, nonfinite and nonnumeric fish fields invalidate a save', () => {
  for (const field of ['hue', 'maxSize', 'baseSpeed', 'age', 'sat', 'breedCd']) {
    for (const invalid of [undefined, NaN, Infinity, -Infinity, '12', null]) {
      const value = fixture();
      value.fish[0][field] = invalid;
      assert.equal(State.sanitize(value), null, `${field}: ${invalid}`);
    }
  }
});

test('storage access errors never escape and failed save preserves an existing save', () => {
  const blocked = { getItem() { throw Error('blocked'); },
    setItem() { throw Error('quota'); }, removeItem() { throw Error('blocked'); } };
  assert.equal(State.load(blocked), null);
  assert.equal(State.save(blocked, fixture()), false);
  assert.equal(State.clear(blocked), false);
  assert.equal(State.load(null), null);
  assert.equal(State.save(null, fixture()), false);
  const store = storage();
  State.save(store, fixture());
  assert.equal(State.save(store, {}), false);
  assert.deepEqual(State.load(store), fixture());
});

test('sanitization and saved state have independent fish objects', () => {
  const value = fixture();
  const result = State.sanitize(value);
  result.fish[0].age = 1000;
  assert.equal(value.fish[0].age, 90);
  const store = storage();
  State.save(store, value);
  const first = State.load(store);
  first.fish[0].age = 2000;
  assert.deepEqual(State.load(store), fixture());
});

test('empty aquarium survives save and reload without creating default fish', () => {
  const value = { ...fixture(), fish: [] };
  const store = storage();
  assert.equal(State.save(store, value), true);
  assert.deepEqual(State.load(store), value);
});

test('legacy fish infer their kind and explicit valid kinds remain durable', () => {
  for (const [hue, expected] of [[30, 'amber'], [170, 'jade'], [48, 'pearl'], [360, 'amber']]) {
    const value = fixture();
    delete value.fish[0].kind;
    value.fish[0].hue = hue;
    assert.equal(State.sanitize(value).fish[0].kind, expected);
    value.fish[0].kind = 'invalid';
    assert.equal(State.sanitize(value).fish[0].kind, expected);
  }
  const value = fixture();
  value.fish[0].kind = 'pearl';
  const store = storage();
  State.save(store, value);
  assert.equal(State.load(store).fish[0].kind, 'pearl');
});
