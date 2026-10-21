(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.GlassSettings=api;})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const KEY='idle-aquarium:glass:v1';
  function sanitize(value){return {mode:['auto','plus','lite'].includes(value?.mode)?value.mode:'auto',strength:Number.isFinite(value?.strength)?Math.round(Math.max(0,Math.min(100,value.strength))):65,pattern:value?.pattern===true};}
  function load(storage){try{return sanitize(JSON.parse(storage.getItem(KEY)));}catch{return sanitize(null);}}
  function save(storage,value){try{storage.setItem(KEY,JSON.stringify(sanitize(value)));return true;}catch{return false;}}
  // Apply the new natural scene once. Later explicit stripe choices remain durable.
  function naturalize(storage,value){
    const settings=sanitize(value);
    try{if(storage.getItem('idle-aquarium:natural-scene:v1')!=='1'){
      settings.pattern=false;
      if(save(storage,settings))storage.setItem('idle-aquarium:natural-scene:v1','1');
    }}catch{settings.pattern=false;}
    return settings;
  }
  function resolve(value,{narrow=false,reduced=false,transparent=true,supported=true}={}){return !transparent?'solid':reduced||!supported||value.mode==='lite'||(value.mode==='auto'&&narrow)?'lite':'plus';}
  return {KEY,sanitize,load,save,resolve,naturalize};
});
