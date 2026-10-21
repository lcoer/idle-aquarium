import * as THREE from 'three';
import {fullVertex,backgroundFragment,copyFragment,glassVertex,glassFragment} from './optics-shaders';

const capacity=640;
const addOutput=code=>code.replace(/}\s*$/,'\n#include <colorspace_fragment>\n}');
const selectors=['.brand-mark','.header-nav','.water-label','.fish-total','.actions','.actions button','.pause-badge','.editor-card','.stock-specimen','.card-icon','.manual-net','.catch-preview','.primary-button','.secondary-button','.icon-button','.appearance-panel','.preset-grid button','.glass-mode-picker button','.color-row input[type="color"]','.background-upload','.background-thumbnail','.optical-pattern-label','.appearance-footer button','.reset-confirmation','.reset-confirmation button','#background-remove','#reset-button','#undo-catch','.optical-field-shell'];

export class OpticalCompositor {
  constructor(){
    this.failed=false;this.dirty=true;this.ratio=1;this.hosts=[];this.lastPhoto=null;
    this.study=new URLSearchParams(window.location.search).get('study')==='glass';
    this.renderer=new THREE.WebGLRenderer({alpha:false,antialias:false,powerPreference:'high-performance'});
    this.renderer.autoClear=false;
    this.renderer.debug.onShaderError=(gl,program,vs,fs)=>{
      console.error('Optical shader:',gl.getShaderInfoLog(vs),gl.getShaderInfoLog(fs));this.fail();
    };
    this.renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();this.fail();});
    this.camera=new THREE.Camera();this.quad=new THREE.PlaneGeometry(2,2);
    this.white=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1);this.white.needsUpdate=true;
    this.waterTexture=new THREE.CanvasTexture(document.getElementById('c'));this.waterTexture.colorSpace=THREE.SRGBColorSpace;
    this.paintComposerRT=this.target();this.natureRT=this.target();
    this.bgUniforms={waterMap:{value:this.waterTexture},photoMap:{value:this.white},viewport:{value:new THREE.Vector2()},tank:{value:new THREE.Vector4()},environment:{value:new THREE.Color()},waterTint:{value:new THREE.Color()},hasPhoto:{value:0},photoAspect:{value:1},photoAnchor:{value:.5},shade:{value:.35},pattern:{value:0}};
    this.backgroundScene=this.scene(new THREE.ShaderMaterial({vertexShader:fullVertex,fragmentShader:addOutput(backgroundFragment),uniforms:this.bgUniforms,depthTest:false,depthWrite:false}));
    this.copyUniforms={source:{value:this.paintComposerRT.texture}};
    this.copyScene=this.scene(new THREE.ShaderMaterial({vertexShader:fullVertex,fragmentShader:addOutput(copyFragment),uniforms:this.copyUniforms,depthTest:false,depthWrite:false}));
    this.nature=this.batch();this.ui=this.batch();
    this.pageCanvas=document.createElement('canvas');this.pageCanvas.className='optical-page-background';this.pageCanvas.setAttribute('aria-hidden','true');
    document.body.prepend(this.pageCanvas);this.pageContext=this.pageCanvas.getContext('2d');
    if(!this.pageContext)throw Error('2D compositor unavailable');
    // Put the canvas underneath controls, never inside a native input/select.
    for(const input of document.querySelectorAll('input[type="number"],select')){
      const shell=document.createElement('div');shell.className='optical-field-shell';input.before(shell);shell.append(input);
    }
    this.refreshHosts();
    const invalidate=()=>{this.dirty=true;};
    window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true);
    this.resizeObserver=new ResizeObserver(invalidate);for(const {host} of this.hosts)this.resizeObserver.observe(host);
    this.mutationObserver=new MutationObserver(invalidate);
    this.mutationObserver.observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','open']});
    const panel=document.getElementById('appearance-panel');panel.addEventListener('toggle',invalidate);
    document.documentElement.dataset.opticsReady='true';
  }
  target(){return new THREE.WebGLRenderTarget(1,1,{minFilter:THREE.LinearMipmapLinearFilter,magFilter:THREE.LinearFilter,generateMipmaps:true,depthBuffer:false,stencilBuffer:false});}
  scene(material){const scene=new THREE.Scene();const mesh=new THREE.Mesh(this.quad,material);mesh.frustumCulled=false;scene.add(mesh);return scene;}
  batch(){
    const geometry=new THREE.InstancedBufferGeometry();geometry.index=this.quad.index;geometry.attributes.position=this.quad.attributes.position;geometry.attributes.uv=this.quad.attributes.uv;
    const arrays={rect:new Float32Array(capacity*4),shape:new Float32Array(capacity*4),optics:new Float32Array(capacity*4),pigment:new Float32Array(capacity*4)};
    for(const [name,data] of Object.entries(arrays))geometry.setAttribute(name,new THREE.InstancedBufferAttribute(data,4).setUsage(THREE.DynamicDrawUsage));
    geometry.instanceCount=0;
    const uniforms={background:{value:this.paintComposerRT.texture},viewport:{value:new THREE.Vector2()},strength:{value:1},clock:{value:0}};
    const material=new THREE.ShaderMaterial({vertexShader:glassVertex,fragmentShader:addOutput(glassFragment),uniforms,transparent:true,depthTest:false,depthWrite:false,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(geometry,material);mesh.frustumCulled=false;const scene=new THREE.Scene();scene.add(mesh);
    return {scene,material,geometry,uniforms,arrays,count:0};
  }
  get active(){return !this.failed&&document.documentElement.dataset.glassMode==='plus';}
  fail(){
    if(this.failed)return;this.failed=true;document.documentElement.dataset.opticsReady='false';
    for(const {host} of this.hosts)host.removeAttribute('data-optical-surface');
    window.dispatchEvent(new Event('optics-unavailable'));
  }
  refreshHosts(){
    const unique=new Set(document.querySelectorAll(selectors.join(',')));
    for(const host of unique){
      const canvas=document.createElement('canvas');canvas.className='optical-surface-canvas';canvas.setAttribute('aria-hidden','true');
      host.prepend(canvas);host.dataset.opticalSurface='true';
      this.hosts.push({host,canvas,context:canvas.getContext('2d'),box:null,visible:false});
    }
  }
  resize(){
    const w=document.documentElement.clientWidth,h=window.innerHeight;
    this.ratio=Math.min(window.devicePixelRatio||1,1.25);
    if(this.width!==w||this.height!==h){
      this.width=w;this.height=h;this.renderer.setPixelRatio(this.ratio);this.renderer.setSize(w,h,false);
      const pw=this.renderer.domElement.width,ph=this.renderer.domElement.height;
      this.paintComposerRT.setSize(pw,ph);this.natureRT.setSize(pw,ph);
      this.pageCanvas.width=pw;this.pageCanvas.height=ph;
      this.bgUniforms.viewport.value.set(w,h);this.nature.uniforms.viewport.value.set(w,h);this.ui.uniforms.viewport.value.set(w,h);this.dirty=true;
    }
    if(!this.dirty)return;
    this.tank=document.getElementById('c').getBoundingClientRect();
    for(const item of this.hosts){
      const {host}=item;
      const hidden=host.closest('[hidden]')||host.closest('#appearance-panel')&&!document.getElementById('appearance-panel').matches(':popover-open');
      if(hidden){item.visible=false;continue;}
      const r=host.getBoundingClientRect();item.box=r;
      item.visible=r.width>2&&r.height>2&&r.bottom>0&&r.top<h&&r.right>0&&r.left<w;
      if(!item.visible)continue;
      item.radius=parseFloat(getComputedStyle(host).borderTopLeftRadius)||12;
      if(item.canvas.width!==Math.ceil(r.width*this.ratio))item.canvas.width=Math.ceil(r.width*this.ratio);
      if(item.canvas.height!==Math.ceil(r.height*this.ratio))item.canvas.height=Math.ceil(r.height*this.ratio);
    }
    this.dirty=false;
  }
  add(batch,cx,cy,hw,hh,type=0,radius=10,angle=0,{thickness,bezel,tint=.03,lod=.45,color=null,colorStrength=.48}={}){
    if(batch.count>=capacity||hw<=0||hh<=0)return;
    const b=Math.min(hw,hh);if(cx+hw+10<0||cx-hw-10>this.width||cy+hh+10<0||cy-hh-10>this.height)return;
    const i=batch.count++*4;
    batch.arrays.pigment.set(color?[color.r,color.g,color.b,colorStrength]:[1,1,1,0],i);
    batch.arrays.rect.set([cx,cy,hw,hh],i);batch.arrays.shape.set([radius,type,angle,lod],i);
    batch.arrays.optics.set([bezel??Math.max(2,Math.min(b*.43,14)),thickness??Math.max(3,Math.min(b*.8,24)),tint,Math.max(3,Math.min(b*.9,24))],i);
  }
  populate(data){
    this.nature.count=0;this.ui.count=0;
    if(this.study){
      const scale=Math.min(this.tank.height*.46,195);
      this.add(this.nature,this.tank.left+this.tank.width*.5,this.tank.top+this.tank.height*.51,scale*.63,scale,4,0,0,{bezel:18,thickness:30,lod:.55});
    }
    for(const item of this.hosts){
      if(!item.visible)continue;const r=item.box;const panel=item.host.id==='appearance-panel';
      const button=item.host.tagName==='BUTTON'||item.host.classList.contains('optical-field-shell');
      this.add(this.ui,r.left+r.width/2,r.top+r.height/2,r.width/2,r.height/2,0,item.radius,0,{tint:panel?.69:button?.32:.14,bezel:panel?23:undefined,thickness:panel?34:undefined,lod:panel?1.5:.65});
    }
    for(const batch of [this.nature,this.ui]){
      batch.geometry.instanceCount=batch.count;for(const attr of Object.values(batch.geometry.attributes))if(attr.isInstancedBufferAttribute)attr.needsUpdate=true;
      batch.uniforms.strength.value=Number(document.getElementById('glass-strength').value)/65;
      batch.uniforms.clock.value=data.time;
    }
  }
  photo(){
    const photo=window.AquariumBackdrop?.getPage?.();
    if((photo?.image||null)!==this.lastPhoto){
      this.photoTexture?.dispose();this.lastPhoto=photo?.image||null;
      this.photoTexture=photo?new THREE.Texture(photo.image):null;
      if(this.photoTexture){this.photoTexture.colorSpace=THREE.SRGBColorSpace;this.photoTexture.needsUpdate=true;}
      this.bgUniforms.photoMap.value=this.photoTexture||this.white;
    }
    this.bgUniforms.hasPhoto.value=photo?1:0;
    if(photo){this.bgUniforms.photoAspect.value=photo.image.naturalWidth/photo.image.naturalHeight;this.bgUniforms.photoAnchor.value=photo.position==='top'?0:photo.position==='bottom'?1:.5;this.bgUniforms.shade.value=photo.shade/100;}
  }
  render(data){
    if(!this.active)return false;
    const now=performance.now();
    if(!this.sampleStart){this.sampleStart=now;this.sampleFrames=0;}
    if(++this.sampleFrames===30){document.documentElement.dataset.opticsFps=(30000/Math.max(1,now-this.sampleStart)).toFixed(1);this.sampleStart=now;this.sampleFrames=0;}
    this.resize();this.populate(data);this.photo();
    const appearance=window.AquariumAppearance?.get();
    this.bgUniforms.environment.value.set(appearance?.page||'#173b43');this.bgUniforms.waterTint.value.set(appearance?.top||'#4c858a');
    const tank=this.tank;this.bgUniforms.tank.value.set(tank.left,tank.top,tank.width,tank.height);
    this.bgUniforms.pattern.value=document.documentElement.dataset.opticalPattern==='true'?1:0;
    this.waterTexture.needsUpdate=true;
    const renderer=this.renderer;
    // Stage 1: actual painted background, with mipmaps for textureLod sampling.
    renderer.setRenderTarget(this.paintComposerRT);renderer.clear();renderer.render(this.backgroundScene,this.camera);
    // Stage 2a: preserve the completed natural scene (or the optional optical study).
    renderer.setRenderTarget(this.natureRT);renderer.clear();this.copyUniforms.source.value=this.paintComposerRT.texture;renderer.render(this.copyScene,this.camera);renderer.render(this.nature.scene,this.camera);
    // Stage 2b: UI glass reads the nature layer, so fish remain visible through it.
    renderer.setRenderTarget(null);renderer.clear();this.copyUniforms.source.value=this.natureRT.texture;renderer.render(this.copyScene,this.camera);
    this.pageContext.drawImage(renderer.domElement,0,0);
    this.ui.uniforms.background.value=this.natureRT.texture;renderer.render(this.ui.scene,this.camera);
    if(this.failed)return false;
    const output=renderer.domElement,rx=output.width/this.width,ry=output.height/this.height;
    const copy=(context,r,destWidth,destHeight)=>{
      const left=Math.max(0,r.left),top=Math.max(0,r.top),right=Math.min(this.width,r.right),bottom=Math.min(this.height,r.bottom);
      if(right<=left||bottom<=top)return;
      context.drawImage(output,left*rx,top*ry,(right-left)*rx,(bottom-top)*ry,(left-r.left)*destWidth/r.width,(top-r.top)*destHeight/r.height,(right-left)*destWidth/r.width,(bottom-top)*destHeight/r.height);
    };
    data.ctx.save();data.ctx.setTransform(1,0,0,1,0,0);copy(data.ctx,tank,data.cv.width,data.cv.height);data.ctx.restore();
    for(const item of this.hosts)if(item.visible&&item.context){item.context.clearRect(0,0,item.canvas.width,item.canvas.height);copy(item.context,item.box,item.canvas.width,item.canvas.height);}
    return true;
  }
  dispose(){this.resizeObserver?.disconnect();this.mutationObserver?.disconnect();this.paintComposerRT.dispose();this.natureRT.dispose();this.waterTexture.dispose();this.photoTexture?.dispose();this.white.dispose();for(const b of [this.nature,this.ui]){b.geometry.dispose();b.material.dispose();}this.renderer.dispose();this.pageCanvas.remove();for(const h of this.hosts)h.canvas.remove();}
}
