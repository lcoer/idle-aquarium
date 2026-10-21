const test=require('node:test');
const assert=require('node:assert/strict');
const A=require('../appearance.js');
test('appearance validates colors and bounds without accepting CSS injection',()=>{
  const clean=A.sanitize({page:'url(https://example.org)',top:'#ABCDEF',bottom:'#123',light:500});
  assert.equal(clean.page,A.presets.lagoon.page);
  assert.equal(clean.top,'#abcdef');
  assert.equal(clean.bottom,A.presets.lagoon.bottom);
  assert.equal(clean.light,130);
  assert.equal(A.sanitize({light:NaN}).light,100);
});
test('appearance roundtrip uses its own key and preserves fish storage',()=>{
  const data=new Map([['idle-aquarium:v1','fish-save']]);
  const storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
  A.set(A.presets.dusk);assert.equal(A.save(storage),true);
  A.set(null);assert.deepEqual(A.load(storage),A.presets.dusk);
  assert.equal(data.get('idle-aquarium:v1'),'fish-save');
  A.set(null);A.save(storage);
  assert.equal(data.get('idle-aquarium:v1'),'fish-save');
});
test('invalid or blocked storage falls back safely and water follows color and theme',()=>{
  assert.deepEqual(A.load({getItem(){throw Error();}}),A.presets.lagoon);
  assert.equal(A.save({setItem(){throw Error();}}),false);
  A.set({top:'#ffffff',bottom:'#000000',light:100});
  assert.deepEqual(A.water('day'),['rgb(255,255,255)','rgb(128,128,128)','rgb(0,0,0)']);
  assert.equal(A.water('night')[0],'rgb(145,145,145)');
  const copy=A.get();copy.top='#000000';assert.equal(A.get().top,'#ffffff');
});
