(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.BackgroundModel=api;})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const KEY='idle-aquarium:background:v1';
  const MAX_DATA_LENGTH=1600000;
  function sanitize(value){
    const source=value?.image;
    const image=typeof source==='string'&&source.length<=MAX_DATA_LENGTH&&/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(source)?source:null;
    return {image,name:image&&typeof value?.name==='string'?value.name.slice(0,120):'',position:['center','top','bottom'].includes(value?.position)?value.position:'center',shade:Number.isFinite(value?.shade)?Math.round(Math.min(80,Math.max(0,value.shade))):35,inWater:value?.inWater!==false};
  }
  function load(storage){try{return sanitize(JSON.parse(storage.getItem(KEY)));}catch{return sanitize(null);}}
  function save(storage,value){try{storage.setItem(KEY,JSON.stringify(sanitize(value)));return true;}catch{return false;}}
  function cover(iw,ih,w,h,position='center'){
    const scale=Math.max(w/iw,h/ih),sw=w/scale,sh=h/scale;
    return {sx:Math.max(0,(iw-sw)/2),sy:Math.max(0,(ih-sh)*(position==='top'?0:position==='bottom'?1:.5)),sw,sh};
  }
  return {KEY,MAX_DATA_LENGTH,sanitize,load,save,cover};
});
