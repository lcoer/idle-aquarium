// The reference is implemented as Background RT -> Glass -> native DOM content.
export const fullVertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
export const backgroundFragment=`
uniform sampler2D waterMap;uniform sampler2D photoMap;uniform vec2 viewport;
uniform vec4 tank;uniform vec3 environment;uniform vec3 waterTint;
uniform float hasPhoto;uniform float photoAspect;uniform float photoAnchor;uniform float shade;uniform float pattern;
varying vec2 vUv;
float rounded(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return min(max(q.x,q.y),0.)+length(max(q,0.))-r;}
void main(){
 vec2 px=vec2(vUv.x,1.-vUv.y)*viewport;
 vec3 col=environment*.72+vec3(.015,.025,.04);
 col+=waterTint*.22*exp(-dot((px/viewport-vec2(.12,0.))*vec2(1.,1.5),(px/viewport-vec2(.12,0.))*vec2(1.,1.5))*3.);
 if(hasPhoto>.5){
   float viewAspect=viewport.x/viewport.y;vec2 size=vec2(1.);
   if(photoAspect>viewAspect)size.x=viewAspect/photoAspect;else size.y=photoAspect/viewAspect;
   vec2 photoUv=vec2(.5,(1.-size.y)*(1.-photoAnchor))+vec2((vUv.x-.5)*size.x,vUv.y*size.y);
   col=texture2D(photoMap,photoUv).rgb*(1.-shade)*.72;
 }
 vec2 local=(px-tank.xy)/max(tank.zw,vec2(1.));
 float boundary=rounded(px-tank.xy-tank.zw*.5,tank.zw*.5,25.);
 if(boundary<0.)col=texture2D(waterMap,vec2(local.x,1.-local.y)).rgb;
 if(pattern>.5){float x=px.x+22.*sin(px.y/250.)+7.*sin(px.y/95.);float s=cos(x/148.*6.283185);col=mix(vec3(.007,.009,.012),vec3(.88,.89,.84),smoothstep(.35,.65,s));}
 gl_FragColor=vec4(col,1.);
}`;
export const copyFragment=`uniform sampler2D source;varying vec2 vUv;void main(){gl_FragColor=texture2D(source,vUv);}`;
export const glassVertex=`
attribute vec4 rect;attribute vec4 shape;attribute vec4 optics;attribute vec4 pigment;
uniform vec2 viewport;
varying vec2 vLocal;varying vec2 vPixel;varying vec4 vRect;varying vec4 vShape;varying vec4 vOptics;varying vec4 vPigment;
void main(){
 vec2 p=position.xy*(rect.zw+vec2(5.));
 float c=cos(shape.z),s=sin(shape.z);vec2 world=vec2(c*p.x-s*p.y,s*p.x+c*p.y)+rect.xy;
 vLocal=p;vPixel=world;vRect=rect;vShape=shape;vOptics=optics;vPigment=pigment;
 gl_Position=vec4(world.x/viewport.x*2.-1.,1.-world.y/viewport.y*2.,0.,1.);
}`;
export const glassFragment=`
precision highp float;
uniform sampler2D background;uniform vec2 viewport;uniform float strength;uniform float clock;
varying vec2 vLocal;varying vec2 vPixel;varying vec4 vRect;varying vec4 vShape;varying vec4 vOptics;varying vec4 vPigment;
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float ellipse(vec2 p,vec2 b){float k0=length(p/b);float k1=length(p/(b*b));if(k1<.0001)return -min(b.x,b.y);return k0*(k0-1.)/k1;}
float rounded(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return min(max(q.x,q.y),0.)+length(max(q,0.))-r;}
float triangle(vec2 p,vec2 a,vec2 b,vec2 c){vec2 e0=b-a,e1=c-b,e2=a-c;vec2 v0=p-a,v1=p-b,v2=p-c;vec2 pq0=v0-e0*clamp(dot(v0,e0)/dot(e0,e0),0.,1.);vec2 pq1=v1-e1*clamp(dot(v1,e1)/dot(e1,e1),0.,1.);vec2 pq2=v2-e2*clamp(dot(v2,e2)/dot(e2,e2),0.,1.);float s=sign(e0.x*e2.y-e0.y*e2.x);vec2 d=min(min(vec2(dot(pq0,pq0),s*(v0.x*e0.y-v0.y*e0.x)),vec2(dot(pq1,pq1),s*(v1.x*e1.y-v1.y*e1.x))),vec2(dot(pq2,pq2),s*(v2.x*e2.y-v2.y*e2.x)));return -sqrt(d.x)*sign(d.y);}
float field(vec2 p){
 vec2 b=vRect.zw;float type=vShape.y;
 if(type<.5)return rounded(p,b,min(vShape.x,min(b.x,b.y)));
 if(type<1.5)return ellipse(p,b);
 if(type<2.5){
   float scale=b.x/1.28;vec2 q=p/scale;
   float body=ellipse(q-vec2(.18,0.),vec2(.66,.34));
   float tail=triangle(q,vec2(-.39,0.),vec2(-1.13,-.46),vec2(-1.13,.46));
   float fin=triangle(q,vec2(-.12,-.23),vec2(.16,-.53),vec2(.42,-.18));
   return smin(smin(body,tail,.095),fin,.06)*scale;
 }
 if(type>3.5){
   float scale=b.x/1.25;vec2 q=p/scale;
   float sphere=length(q-vec2(.08,-.65))-.82;
   vec2 k=q-vec2(-.08,.68);float a=.34;vec2 rp=vec2(cos(a)*k.x+sin(a)*k.y,-sin(a)*k.x+cos(a)*k.y);
   return smin(sphere,rounded(rp,vec2(.72),.24),.12)*scale;
 }
 // Pointed, continuous leaf silhouette; no random edge noise.
 vec2 q=p/b;float leaf=length(vec2(q.x,q.y*(.92+.28*abs(q.x))))-1.;return leaf*min(b.x,b.y);
}
float heightAt(vec2 p){float t=clamp(-field(p)/max(vOptics.x,.6),0.,1.);float q=t*t*t*(t*(t*6.-15.)+10.);return vOptics.y*q;}
vec2 rotateWorld(vec2 p){float c=cos(vShape.z),s=sin(vShape.z);return vec2(c*p.x-s*p.y,s*p.x+c*p.y);}
vec2 uvOf(vec2 p){return vec2(p.x/viewport.x,1.-p.y/viewport.y);}
vec3 sampleAt(vec2 uv,float lod){return textureLod(background,clamp(uv,vec2(.001),vec2(.999)),lod).rgb;}
vec2 traceRay(vec3 normal,float height,float ior){
 vec3 incident=vec3(0.,0.,-1.);vec3 inside=refract(incident,normal,1./ior);
 if(dot(inside,inside)<.00001)inside=incident;
 float travel=height/max(-inside.z,.025);vec2 hit=inside.xy*travel;
 vec3 outside=refract(inside,vec3(0.,0.,1.),ior);if(dot(outside,outside)<.00001)outside=inside;
 hit+=outside.xy*(vOptics.w/max(-outside.z,.08));
 float limit=min(vRect.z,vRect.w)*1.7;hit=clamp(hit,vec2(-limit),vec2(limit));
 return uvOf(vPixel+hit*strength);
}
float ggx(vec3 n,vec3 l){
 vec3 v=vec3(0.,0.,1.),h=normalize(l+v);float nl=max(dot(n,l),.001),nv=max(n.z,.001),nh=max(dot(n,h),0.),vh=max(dot(v,h),0.);
 float a=.32*.32,a2=a*a;float denom=nh*nh*(a2-1.)+1.;float D=a2/(3.14159*denom*denom);
 float visibility=.5/max(nl*sqrt(nv*nv*(1.-a2)+a2)+nv*sqrt(nl*nl*(1.-a2)+a2),.001);
 float f0=pow((1.46-1.)/(1.46+1.),2.);float F=f0+(1.-f0)*pow(1.-vh,5.);
 return D*visibility*F*nl;
}
void main(){
 float d=field(vLocal),aa=max(fwidth(d),.65);float mask=1.-smoothstep(-aa,aa,d);
 if(d>4.)discard;
 if(d>aa){gl_FragColor=vec4(.005,.012,.02,exp(-d*.9)*.11);return;}
 float bevel=max(vOptics.x,.6),interior=max(-d,0.),t=clamp(interior/bevel,0.,1.);
 float stepSize=clamp(bevel*.13,.45,1.3);
 vec2 grad=vec2(heightAt(vLocal+vec2(stepSize,0.))-heightAt(vLocal-vec2(stepSize,0.)),heightAt(vLocal+vec2(0.,stepSize))-heightAt(vLocal-vec2(0.,stepSize)))/(2.*stepSize);
 vec3 normal=normalize(vec3(-rotateWorld(grad),1.));
 vec2 sdfGrad=vec2(field(vLocal+vec2(.5,0.))-field(vLocal-vec2(.5,0.)),field(vLocal+vec2(0.,.5))-field(vLocal-vec2(0.,.5)));
 vec2 rimDir=rotateWorld(sdfGrad/max(length(sdfGrad),.0001));
 float height=heightAt(vLocal);vec2 green=traceRay(normal,height,1.46),red=traceRay(normal,height,1.448),blue=traceRay(normal,height,1.472);
 vec2 axis=vec2(1.,-1.)/viewport;float fold=bevel*.62*sin(t*3.14159)*strength;
 vec2 innerUv=green-rimDir*fold*axis,outerUv=uvOf(vPixel)+rimDir*fold*1.28*axis;
 vec2 center=uvOf(vRect.xy);vec2 faceUv=mix(center+(uvOf(vPixel)-center)*.975,green,.055);
 vec3 face=sampleAt(faceUv,vShape.w);
 vec3 inner=vec3(sampleAt(innerUv+(red-green),.15).r,sampleAt(innerUv,.15).g,sampleAt(innerUv+(blue-green),.15).b);
 vec3 outer=vec3(sampleAt(outerUv+(red-green),1.1).r,sampleAt(outerUv,1.1).g,sampleAt(outerUv+(blue-green),1.1).b);
 float fw=smoothstep(.4,.96,t),ow=1.-smoothstep(.03,.35,t),iw=max(0.,1.-fw-ow);float total=fw+iw+ow;
 vec3 col=(face*fw+inner*iw+outer*ow)/max(total,.0001);
 col=mix(col,vec3(.015,.028,.04),vOptics.z*fw);
 col=mix(col,vec3(.88,.95,1.),.004*fw);
 // Coloured glass: selective absorption plus a restrained pigment contribution.
 // Keep the sampled background visible and add neutral specular reflections later.
 float pigmentAmount=vPigment.a*(.72+.28*fw);
 vec3 transmitted=col*mix(vec3(1.),vPigment.rgb,.58);
 col=mix(col,mix(transmitted,vPigment.rgb,.42),pigmentAmount);
 float support=(1.-smoothstep(.42,.94,t))*smoothstep(0.,.12,t);
 float fresnel=pow(1.-max(normal.z,0.),5.);
 col*=1.-support*(.17+.12*fresnel);
 vec3 spec=vec3(0.);
 for(int i=0;i<4;i++){float a=-2.35+float(i)*1.5708+sin(clock*.05)*.08;vec3 l=normalize(vec3(cos(a)*.94,sin(a)*.94,.34));vec3 lightColor=i==0?vec3(1.,.98,.9):i==1?vec3(.82,.92,1.):vec3(.95,.98,1.);spec+=lightColor*ggx(normal,l)*2.8;}
 // A soft-box reflection, confined to the outer bevel. No all-round white outline.
 vec3 reflected=reflect(vec3(0.,0.,-1.),normal);float box=pow(max(0.,1.-abs(reflected.x+.42)*2.5),8.)*pow(max(0.,1.-abs(reflected.y+.28)*2.),2.);
 col+=support*(min(spec,vec3(.85)) +vec3(.8,.91,1.)*fresnel*.22+vec3(1.,.99,.94)*box*.16);
 if(vShape.y>1.5&&vShape.y<2.5){vec2 eye=vLocal-vec2(vRect.z*.48,-vRect.z*.045);float e=1.-smoothstep(.7,1.25,length(eye));col=mix(col,vec3(.84,.94,1.),e*.7);}
 gl_FragColor=vec4(clamp(col,0.,1.),mask);
}`;
