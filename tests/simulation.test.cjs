const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const State = require('../state.js');
const Manager = require('../fish-manager.js');

function aquarium(saved) {
  const timers = new Map(); let nextTimer = 1;
  let bounds = { width: 960, height: 480, left: 0, top: 0 };
  const gradient = { addColorStop() {} };
  const ctx = new Proxy({}, { get: (target, key) => target[key] || (key.startsWith('create') ? () => gradient : () => {}), set: (t, k, v) => (t[k] = v, true) });
  const elements = {};
  function element(id) {
    return elements[id] ||= { textContent: '', value: '', dataset: {}, hidden: false, style: {}, attributes: {}, handlers: {}, classList: { toggle() {}, add() {}, remove() {} },
      addEventListener(k, fn) { this.handlers[k] = fn; }, setAttribute(k, v) { this.attributes[k] = v; }, focus() {}, scrollIntoView() {},
      getBoundingClientRect: () => bounds, getContext: () => ctx, setPointerCapture() {}, hasPointerCapture: () => false, releasePointerCapture() {} };
  }
  const data = new Map();
  const storage = { getItem: k => data.get(k) ?? null, setItem: (k, v) => data.set(k, v), removeItem: k => data.delete(k) };
  if (saved) State.save(storage, saved);
  const document = { createElement: tag=>element('created-'+tag), getElementById: element, documentElement: element('root'), hidden: false, visibilityState: 'visible', addEventListener() {}, activeElement: null };
  const context = vm.createContext({ document, AquariumState: State, FishManager: Manager, console, Math, performance: { now: () => 0 }, requestAnimationFrame() {}, setInterval() {}, setTimeout(fn) { const id = nextTimer++; timers.set(id, fn); return id; }, clearTimeout(id) { timers.delete(id); },
    window: { devicePixelRatio: 1, localStorage: storage, addEventListener() {}, matchMedia: () => ({ matches: false }) } });
  vm.runInContext(fs.readFileSync(require.resolve('../aquarium.js'), 'utf8'), context);
  return { run: code => vm.runInContext(code, context), storage, elements, expireUndo() { for (const fn of [...timers.values()]) fn(); }, resize(w, h) { bounds = { ...bounds, width: w, height: h }; vm.runInContext('resize()', context); } };
}

test('new tank has ten fish in three palettes', () => {
  const a = aquarium();
  assert.equal(a.run('fishes.length'), 10);
  assert.equal(a.run('new Set(fishes.map(f => f.hue)).size'), 3);
});
test('feeding respects pause and food limit', () => {
  const a = aquarium();
  a.run('setPaused(true); feedAt(200, 200)');
  assert.equal(a.run('foods.length'), 0);
  a.run('setPaused(false); for(let i=0;i<200;i++) feedAt(200,200)');
  assert.ok(a.run('foods.length <= CFG.foodMax && foods.length > 0'));
});
test('unattended tank stays alive and population stays bounded', () => {
  const a = aquarium();
  a.run('for(let i=0;i<3600;i++) { time += 1; update(1); }');
  assert.ok(a.run('fishes.length >= 10 && fishes.length <= CFG.absCap'));
  assert.ok(a.run('fishes.every(f => !f.dead && Number.isFinite(f.x) && Number.isFinite(f.y))'));
});
test('saved growth and theme restore without offline ageing or coordinates', () => {
  const a = aquarium();
  a.run("fishes[0].age=42; theme='night'; saveTank()");
  const save = State.load(a.storage);
  const b = aquarium(save);
  assert.equal(b.run('theme'), 'night');
  assert.equal(b.run('fishes[0].age'), 42);
  assert.equal(save.fish[0].x, undefined);
});
test('resizing keeps every fish inside the water', () => {
  const a = aquarium();
  a.resize(320, 420);
  assert.ok(a.run('fishes.every(f => f.x >= 6 && f.x <= W-6 && f.y >= 6 && f.y <= H-6)'));
});
test('reset restores the default population and clears transient food', () => {
  const a = aquarium();
  a.run('feedAt(200,200); fishes.pop(); resetTank()');
  assert.equal(a.run('fishes.length'), 10);
  assert.equal(a.run('foods.length'), 0);
  assert.equal(State.load(a.storage).fish.length, 10);
});
test('reset while paused also clears the visible birth count', () => {
  const a = aquarium();
  a.run('stats.born=3; setPaused(true); resetTank()');
  assert.equal(a.elements['growth-note'].textContent, '慢慢长大，不急');
});
test('stocked fish retain configured species, stage, size and speed after reload', () => {
  const a = aquarium();
  a.run("stockFish({kind:'jade',count:3,maxSize:18,baseSpeed:35,stage:'juvenile'})");
  assert.equal(a.run('fishes.length'), 13);
  assert.ok(a.run("fishes.slice(-3).every(f => f.kind==='jade' && f.age===0 && f.maxSize===18 && f.baseSpeed===35)"));
  const b = aquarium(State.load(a.storage));
  assert.ok(b.run("fishes.slice(-3).every(f => f.kind==='jade' && f.age===0 && f.maxSize===18 && f.baseSpeed===35)"));
});
test('catch all persists an empty tank and undo restores original fish', () => {
  const a = aquarium();
  assert.equal(a.run("catchByRule({kind:'all',stage:'all',count:24,order:'oldest'})"), 10);
  assert.equal(State.load(a.storage).fish.length, 0);
  const b = aquarium(State.load(a.storage));
  assert.equal(b.run('fishes.length'), 0);
  assert.equal(b.elements['empty-state'].hidden, false);
  assert.equal(a.run('undoCatch()'), 10);
  assert.equal(a.run('fishes.length'), 10);
});
test('manual net mode removes a selected fish without producing food', () => {
  const a = aquarium();
  a.run("setTool('net'); paused=true; catchFishAt(fishes[0].x,fishes[0].y)");
  assert.equal(a.run('fishes.length'), 9);
  assert.equal(a.run('foods.length'), 0);
  assert.equal(a.run('undoCatch()'), 1);
});
test('over-capacity stocking changes nothing', () => {
  const a = aquarium();
  a.run("stockFish({kind:'amber',count:8,maxSize:30,baseSpeed:20,stage:'adult'})");
  a.run("stockFish({kind:'amber',count:8,maxSize:30,baseSpeed:20,stage:'adult'})");
  assert.equal(a.run('fishes.length'), 18);
});
test('stocking cannot consume capacity needed to undo a recent catch', () => {
  const a = aquarium();
  a.run("stockFish({kind:'amber',count:8,maxSize:30,baseSpeed:20,stage:'adult'});stockFish({kind:'pearl',count:6,maxSize:26,baseSpeed:16,stage:'adult'})");
  assert.equal(a.run('fishes.length'), 24);
  a.run("catchByRule({kind:'all',stage:'all',count:1,order:'oldest'})");
  assert.equal(a.run("stockFish({kind:'jade',count:1,maxSize:22,baseSpeed:28,stage:'adult'})"), 0);
  assert.equal(a.run('undoCatch()'), 1);
  assert.equal(a.run('fishes.length'), 24);
});
test('undo expiry frees reserved capacity and refreshes controls while paused', () => {
  const a = aquarium();
  a.run("stockFish({kind:'amber',count:8,maxSize:30,baseSpeed:20,stage:'adult'});stockFish({kind:'pearl',count:6,maxSize:26,baseSpeed:16,stage:'adult'});setPaused(true);catchByRule({kind:'all',stage:'all',count:1,order:'oldest'})");
  assert.equal(a.elements['capacity-left'].textContent, '余量 0 尾');
  a.expireUndo();
  assert.equal(a.elements['capacity-left'].textContent, '余量 1 尾');
  assert.equal(a.run('undoCatch()'), 0);
  assert.equal(a.run("stockFish({kind:'jade',count:1,maxSize:22,baseSpeed:28,stage:'adult'})"), 1);
});


test('natural habitat renders across day, night and resize without changing fish state',()=>{
  const a=aquarium();
  const original=a.run('JSON.stringify(fishes)');
  a.run('draw(); theme="night"; draw();');
  assert.equal(a.run('JSON.stringify(fishes)'),original);
  a.resize(390,420);
  a.run('draw(); theme="day"; draw();');
  assert.ok(a.run('fishes.every(f=>Number.isFinite(f.x)&&Number.isFinite(f.y))'));
});
