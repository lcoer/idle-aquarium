(() => {
  'use strict';
  const byId=id=>document.getElementById(id),api=BackgroundModel;
  let value,image=null,request=0,timer;
  try{value=api.load(localStorage);}catch{value=api.sanitize(null);}
  const status=byId('background-status');
  function render(){
    document.documentElement.dataset.imageBackground=String(Boolean(image));
    document.documentElement.style.setProperty('--background-image',image?'url("'+value.image+'")':'none');
    document.documentElement.style.setProperty('--background-position',value.position);
    document.documentElement.style.setProperty('--background-shade',value.shade/100);
    byId('background-name').textContent=image?value.name:'还没有背景图片';
    if(image)byId('background-preview').src=value.image;
    else byId('background-preview').removeAttribute('src');
    byId('background-preview').hidden=!image;
    byId('background-position').value=value.position;
    byId('background-shade').value=value.shade;
    byId('background-shade-value').textContent=value.shade+'%';
    byId('background-water').checked=value.inWater;
    byId('background-remove').disabled=!image;
    for(const id of ['background-position','background-shade','background-water'])byId(id).disabled=!image;
  }
  function persist(){
    let saved=false;try{saved=api.save(localStorage,value);}catch{/* blocked storage */}
    status.textContent=saved?(image?'图片已保存在此浏览器 · 不会上传':'已恢复纯色背景'):'当前预览可用，但浏览器空间不足或不允许保存';
  }
  function update(patch){value=api.sanitize({...value,...patch});render();clearTimeout(timer);timer=setTimeout(persist,180);}
  function decode(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(Error('无法读取这张图片，请换一张 JPG、PNG 或 WebP。'));img.src=src;});}
  async function compact(file){
    if(!['image/jpeg','image/png','image/webp','image/avif','image/gif'].includes(file.type))throw Error('请选择 JPG、PNG、WebP、AVIF 或 GIF 图片。');
    if(file.size>20*1024*1024)throw Error('图片超过 20 MB，请先缩小后重试。');
    const url=URL.createObjectURL(file);
    try{
      const source=await decode(url),scale=Math.min(1,1600/Math.max(source.naturalWidth,source.naturalHeight));
      const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(source.naturalWidth*scale));canvas.height=Math.max(1,Math.round(source.naturalHeight*scale));
      const context=canvas.getContext('2d');if(!context)throw Error('浏览器无法处理图片，请稍后重试。');
      context.fillStyle='#102330';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(source,0,0,canvas.width,canvas.height);
      for(const quality of [.86,.72,.56,.4]){const data=canvas.toDataURL('image/jpeg',quality);if(data.length<=api.MAX_DATA_LENGTH)return data;}
      throw Error('图片内容过于复杂，请缩小尺寸后重试。');
    }finally{URL.revokeObjectURL(url);}
  }
  byId('background-file').addEventListener('change',async event=>{
    const file=event.target.files?.[0];if(!file)return;
    const id=++request;status.textContent='正在处理图片…';
    try{const data=await compact(file),next=await decode(data);if(id!==request)return;image=next;value=api.sanitize({...value,image:data,name:file.name});render();persist();window.dispatchEvent(new Event('background-photo-selected'));}
    catch(error){if(id===request)status.textContent=error.message||'处理失败，请换一张图片。';}
    finally{event.target.value='';}
  });
  byId('background-remove').addEventListener('click',()=>{++request;image=null;update({image:null,name:''});persist();byId('background-file').focus({preventScroll:true});});
  byId('background-position').addEventListener('change',event=>update({position:event.target.value}));
  byId('background-shade').addEventListener('input',event=>update({shade:Number(event.target.value)}));
  byId('background-water').addEventListener('change',event=>update({inWater:event.target.checked}));
  window.AquariumBackdrop={get:()=>image&&value.inWater?{image,position:value.position,shade:value.shade}:null,getPage:()=>image?{image,position:value.position,shade:value.shade}:null};
  window.addEventListener('pagehide',persist);
  render();
  if(value.image){const id=request;decode(value.image).then(img=>{if(request===id){image=img;render();status.textContent='已恢复上次的背景图片';}}).catch(()=>{if(request===id){value=api.sanitize(null);render();status.textContent='上次的图片无法读取，请重新选择。';}});}
})();
