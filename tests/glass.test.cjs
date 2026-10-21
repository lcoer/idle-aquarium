const test=require('node:test');
const assert=require('node:assert/strict');
const G=require('../glass-settings.js');
const {buildSync}=require('esbuild');
const vm=require('node:vm');
const compiled=buildSync({entryPoints:[require.resolve('../vendor/liquid-glass-react/liquid-glass-maps.ts')],bundle:true,platform:'node',format:'cjs',write:false}).outputFiles[0].text;
const sandbox={module:{exports:{}},exports:{},Float32Array,Uint8ClampedArray,Math,Number,RangeError};
vm.runInNewContext(compiled,sandbox);
const optics=sandbox.module.exports;
test('glass preference sanitization and automatic fallback',()=>{
  assert.deepEqual(G.sanitize({mode:'evil',strength:999}),{mode:'auto',strength:100,pattern:false});
  assert.equal(G.resolve({mode:'auto'},{narrow:true}),'lite');
  assert.equal(G.resolve({mode:'plus'},{narrow:true}),'plus');
  assert.equal(G.resolve({mode:'plus'},{supported:false}),'lite');
  assert.equal(G.resolve({mode:'plus'},{reduced:true}),'lite');
  assert.equal(G.resolve({mode:'plus'},{transparent:false}),'solid');
});
test('glass preferences roundtrip independently and tolerate blocked storage',()=>{
  const data=new Map([['idle-aquarium:v1','fish']]);
  const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
  assert.equal(G.save(storage,{mode:'lite',strength:40,pattern:true}),true);
  assert.deepEqual(G.load(storage),{mode:'lite',strength:40,pattern:true});
  assert.equal(data.get('idle-aquarium:v1'),'fish');
  assert.equal(G.save({setItem(){throw Error();}},{}),false);
  assert.deepEqual(G.load({getItem(){throw Error();}}),{mode:'auto',strength:65,pattern:false});
});
test('reference pattern can be disabled durably without changing optical mode',()=>{
  let raw=null;const storage={getItem:()=>raw,setItem:(key,value)=>{raw=value;}};
  G.save(storage,{mode:'plus',strength:72,pattern:false});
  assert.deepEqual(G.load(storage),{mode:'plus',strength:72,pattern:false});
});
test('physical map leaves center neutral and refracts opposing rims symmetrically',()=>{
  const map=optics.buildDisplacementMap({width:120,height:64,radius:24},{bezel:12,thickness:24,ior:1.5,profile:'squircle'});
  const pixel=(x,y)=>Array.from(map.data.slice((y*120+x)*4,(y*120+x)*4+4));
  assert.deepEqual(pixel(60,32),[128,128,128,255]);
  assert.ok(pixel(3,32)[0]>128);
  assert.ok(pixel(116,32)[0]<128);
  assert.ok(Math.abs(pixel(3,32)[0]+pixel(116,32)[0]-256)<=1);
  assert.ok(map.scale>0&&Number.isFinite(map.scale));
  assert.deepEqual(pixel(0,0),[128,128,128,255]);
});
test('flat zero-thickness glass has zero rim displacement; invalid optics fail clearly',()=>{
  const profile=optics.refractionProfile({bezel:10,thickness:0,ior:1.5,profile:'squircle'});
  assert.ok(Array.from(profile).every(x=>x===0));
  assert.throws(()=>optics.refractionProfile({bezel:0,thickness:10,ior:1.5,profile:'squircle'}),/finite positive/);
});


test('natural scene migration disables legacy stripes once and preserves other data',()=>{
  const data=new Map([[G.KEY,JSON.stringify({mode:'plus',strength:72,pattern:true})],['idle-aquarium:v1','existing-fish'],['idle-aquarium:background:v1','custom-photo']]);
  const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
  const migrated=G.naturalize(storage,G.load(storage));
  assert.deepEqual(migrated,{mode:'plus',strength:72,pattern:false});
  assert.equal(data.get('idle-aquarium:v1'),'existing-fish');
  assert.equal(data.get('idle-aquarium:background:v1'),'custom-photo');
  G.save(storage,{...migrated,pattern:true});
  assert.equal(G.naturalize(storage,G.load(storage)).pattern,true);
});
