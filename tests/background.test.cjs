const test=require('node:test');
const assert=require('node:assert/strict');
const B=require('../background.js');
test('background only accepts bounded local raster data, not URLs or SVG',()=>{
  for(const image of ['https://example.org/a.jpg','data:image/svg+xml;base64,AAAA','data:image/jpeg;base64,AAA")','data:image/jpeg;base64,'+'A'.repeat(B.MAX_DATA_LENGTH)])assert.equal(B.sanitize({image}).image,null);
  const clean=B.sanitize({image:'data:image/jpeg;base64,AAAA',name:'image.jpg',position:'left',shade:999,inWater:false});
  assert.equal(clean.image,'data:image/jpeg;base64,AAAA');
  assert.equal(clean.position,'center');assert.equal(clean.shade,80);assert.equal(clean.inWater,false);
});
test('background save is independent of fish, water color and glass settings',()=>{
  const data=new Map([['idle-aquarium:v1','fish'],['idle-aquarium:appearance:v1','colors'],['idle-aquarium:glass:v1','glass']]);
  const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
  assert.equal(B.save(storage,{image:'data:image/jpeg;base64,AAAA',position:'top',shade:42}),true);
  assert.equal(B.load(storage).shade,42);
  B.save(storage,{image:null});assert.equal(B.load(storage).image,null);
  for(const [key,value] of [['idle-aquarium:v1','fish'],['idle-aquarium:appearance:v1','colors'],['idle-aquarium:glass:v1','glass']])assert.equal(data.get(key),value);
  assert.equal(B.save({setItem(){throw Error('quota');}},{}),false);
  assert.equal(B.load({getItem(){throw Error();}}).image,null);
});
test('cover crop fills a frame with correct aspect ratio and vertical anchor',()=>{
  for(const [iw,ih,w,h] of [[1600,900,400,600],[800,1200,1200,600],[960,540,960,540]])for(const position of ['top','center','bottom']){
    const c=B.cover(iw,ih,w,h,position);
    assert.ok(c.sx>=0&&c.sy>=0&&c.sx+c.sw<=iw+.001&&c.sy+c.sh<=ih+.001);
    assert.ok(Math.abs(c.sw/c.sh-w/h)<.0001);
    if(position==='top')assert.equal(c.sy,0);
    if(position==='bottom')assert.ok(Math.abs(c.sy+c.sh-ih)<.001);
  }
});
