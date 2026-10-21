import React, {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LiquidGlass} from './vendor/liquid-glass-react/LiquidGlass';
import {OpticalCompositor} from './optics-renderer';

// React owns only the optical background. Existing controls and fish stay native.
const panel=document.getElementById('appearance-panel');
const surfaces=[document.querySelector('.actions'),panel];
const media={narrow:matchMedia('(max-width: 540px)'),reduced:matchMedia('(prefers-reduced-motion: reduce)'),solid:matchMedia('(prefers-reduced-transparency: reduce)'),contrast:matchMedia('(prefers-contrast: more)')};
let supported=true;
let settings;
try{settings=GlassSettings.naturalize(localStorage,GlassSettings.load(localStorage));}catch{settings=GlassSettings.sanitize(null);}
let saveTimer;
const listeners=new Set();
function effective(){return GlassSettings.resolve(settings,{narrow:media.narrow.matches,reduced:media.reduced.matches,transparent:!media.solid.matches&&!media.contrast.matches,supported});}
function notify(){
  const mode=effective();
  document.documentElement.dataset.glassMode=mode;
  document.documentElement.dataset.opticalPattern=String(settings.pattern);
  document.getElementById('optical-pattern').checked=settings.pattern;
  for(const button of document.querySelectorAll('[data-glass-mode]'))button.setAttribute('aria-pressed',String(button.dataset.glassMode===settings.mode));
  document.getElementById('glass-strength').value=settings.strength;
  document.getElementById('glass-strength-value').textContent=settings.strength+'%';
  document.getElementById('glass-strength').disabled=mode!=='plus';
  document.getElementById('glass-render-status').textContent=mode==='plus'?'Plus · 通透厚玻璃与边缘折射':mode==='solid'?'已遵循系统偏好 · 实色显示':'轻量磨砂 · '+(!supported?'当前浏览器兼容模式':media.reduced.matches?'已遵循减少动态效果偏好':'更低渲染开销');
  listeners.forEach(fn=>fn({mode,strength:settings.strength}));
}
function persist(){try{const ok=GlassSettings.save(localStorage,settings);document.getElementById('glass-save-status').textContent=ok?'质感设置已保存':'无法保存 · 当前设置仍然生效';}catch{document.getElementById('glass-save-status').textContent='无法保存 · 当前设置仍然生效';}}
function update(patch){settings=GlassSettings.sanitize({...settings,...patch});notify();clearTimeout(saveTimer);saveTimer=setTimeout(persist,180);}
function OpticalSurface({host,index}){
  const [state,setState]=useState({mode:effective(),strength:settings.strength});
  const [panelOpen,setPanelOpen]=useState(panel.matches(':popover-open'));
  useEffect(()=>{
    listeners.add(setState);host.dataset.reactGlass='ready';
    const toggle=event=>setPanelOpen(event.newState==='open');
    panel.addEventListener('toggle',toggle);
    return ()=>{listeners.delete(setState);delete host.dataset.reactGlass;panel.removeEventListener('toggle',toggle);};
  },[]);
  // Only one refracting surface at a time: inspector when open, toolbar otherwise.
  if(state.mode==='plus'&&document.documentElement.dataset.opticsReady==='true')return null;
  const plus=state.mode==='plus'&&(index===1?panelOpen:!panelOpen);
  if(!plus)return <div className={'glass-optical-fallback '+(state.mode==='solid'?'is-solid':'')}/>;
  return <LiquidGlass className="glass-optics" radius={index?30:24} bezel={index?20:14} thickness={index?35:24} refraction={state.strength/65} dispersion={.035} blur={index?5:1.2} saturation={1.35} tint={index?'rgba(8, 24, 37, .55)':'rgba(9, 34, 41, .24)'} specular={.85} style={{width:'100%',height:'100%'}}/>;
}
for(const [index,host] of surfaces.entries()){
  const mount=document.createElement('div');mount.className='glass-react-mount';mount.setAttribute('aria-hidden','true');host.prepend(mount);
  createRoot(mount).render(<OpticalSurface host={host} index={index}/>);
  // Feedback follows the pointer; no idle animation or geometry changes.
  let bounds;
  host.addEventListener('pointerenter',()=>{bounds=host.getBoundingClientRect();});
  host.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch'||media.reduced.matches||!bounds)return;
    host.style.setProperty('--specular-x',Math.round((event.clientX-bounds.left)/bounds.width*100)+'%');
    host.style.setProperty('--specular-y',Math.round((event.clientY-bounds.top)/bounds.height*100)+'%');
  });
}
for(const query of Object.values(media))query.addEventListener('change',notify);
for(const button of document.querySelectorAll('[data-glass-mode]'))button.addEventListener('click',()=>update({mode:button.dataset.glassMode}));
document.getElementById('glass-strength').addEventListener('input',event=>update({strength:Number(event.target.value)}));
document.getElementById('optical-pattern').addEventListener('change',event=>update({pattern:event.target.checked}));
window.addEventListener('background-photo-selected',()=>update({pattern:false}));
window.addEventListener('optics-unavailable',()=>{supported=false;notify();});
window.addEventListener('pagehide',persist);
try{window.AquariumOptics=new OpticalCompositor();}catch(error){supported=false;document.documentElement.dataset.opticsReady='false';console.warn('WebGL optical layer unavailable; using lightweight material.',error.message);}
try{if(BackgroundModel.load(localStorage).image&&JSON.parse(localStorage.getItem(GlassSettings.KEY))?.pattern!==true)settings.pattern=false;}catch{/* Unavailable storage keeps current-session defaults. */}
notify();
