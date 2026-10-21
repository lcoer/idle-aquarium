(function(root,factory){
  const api=factory();
  if(typeof module==='object' && module.exports)module.exports=api;
  if(root)root.AquariumAppearance=api;
})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const KEY='idle-aquarium:appearance:v1';
  const presets={
    forest:{page:'#112b25',top:'#527a65',bottom:'#122f2b',light:100},
    lagoon:{page:'#173b43',top:'#4c858a',bottom:'#193f4c',light:100},
    ocean:{page:'#182d53',top:'#497fba',bottom:'#192e56',light:100},
    dusk:{page:'#3d304f',top:'#917aab',bottom:'#3b3558',light:100},
    sand:{page:'#423a2c',top:'#a29470',bottom:'#424b46',light:100}
  };
  function sanitize(value){
    const result={...presets.lagoon};
    for(const key of ['page','top','bottom'])if(/^#[0-9a-f]{6}$/i.test(value?.[key]))result[key]=value[key].toLowerCase();
    if(Number.isFinite(value?.light))result.light=Math.round(Math.max(60,Math.min(130,value.light)));
    return result;
  }
  let current=sanitize(null);
  function get(){return {...current};}
  function set(value){current=sanitize(value);return get();}
  function load(storage){try{set(JSON.parse(storage.getItem(KEY)));}catch{set(null);}return get();}
  function save(storage){try{storage.setItem(KEY,JSON.stringify(current));return true;}catch{return false;}}
  function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));}
  function water(theme){
    const factor=current.light/100*(theme==='night'?.57:1);
    const top=rgb(current.top),bottom=rgb(current.bottom);
    return [top,top.map((v,i)=>(v+bottom[i])/2),bottom].map(color=>'rgb('+color.map(v=>Math.round(Math.min(255,v*factor))).join(',')+')');
  }
  return {KEY,presets,sanitize,get,set,load,save,water};
});
