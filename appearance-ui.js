/* Native Popover gives this parallel inspector Escape/light-dismiss and focus return. */
(() => {
  'use strict';
  const api=AquariumAppearance, byId=id=>document.getElementById(id);
  const panel=byId('appearance-panel'),trigger=byId('appearance-button');
  let saveTimer;
  function render(){
    const value=api.get();
    document.documentElement.style.setProperty('--environment',value.page);
    document.documentElement.style.setProperty('--water-tint',value.top);
    for(const key of ['page','top','bottom']){
      byId('color-'+key).value=value[key];
      byId('value-'+key).textContent=value[key].toUpperCase();
    }
    byId('water-light').value=value.light;
    byId('light-value').textContent=value.light+'%';
    for(const button of panel.querySelectorAll('[data-preset]')){
      button.setAttribute('aria-pressed',String(JSON.stringify(value)===JSON.stringify(api.presets[button.dataset.preset])));
    }
  }
  function persist(){
    let saved=false;
    try{saved=api.save(window.localStorage);}catch{/* Storage getter can be blocked. */}
    byId('appearance-status').textContent=saved?'外观已保存到这个浏览器':'无法保存 · 当前预览仍然可用';
  }
  function update(value){
    api.set(value);render();
    clearTimeout(saveTimer);saveTimer=setTimeout(persist,180);
  }
  try{api.load(window.localStorage);}catch{api.set(null);}
  render();
  trigger.setAttribute('popovertarget','appearance-panel');
  panel.addEventListener('toggle',event=>trigger.setAttribute('aria-expanded',String(event.newState==='open')));
  byId('appearance-close').addEventListener('click',()=>{panel.hidePopover();trigger.focus({preventScroll:true});});
  for(const button of panel.querySelectorAll('[data-preset]'))button.addEventListener('click',()=>update(api.presets[button.dataset.preset]));
  for(const key of ['page','top','bottom'])byId('color-'+key).addEventListener('input',event=>update({...api.get(),[key]:event.target.value}));
  byId('water-light').addEventListener('input',event=>update({...api.get(),light:Number(event.target.value)}));
  byId('appearance-reset').addEventListener('click',()=>update(api.presets.lagoon));
  window.addEventListener('pagehide',persist);
})();
