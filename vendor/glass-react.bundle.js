(()=>{var sb=Object.create;var u0=Object.defineProperty;var ab=Object.getOwnPropertyDescriptor;var rb=Object.getOwnPropertyNames;var ob=Object.getPrototypeOf,lb=Object.prototype.hasOwnProperty;var Di=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var cb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rb(t))!lb.call(e,s)&&s!==n&&u0(e,s,{get:()=>t[s],enumerable:!(i=ab(t,s))||i.enumerable});return e};var pa=(e,t,n)=>(n=e!=null?sb(ob(e)):{},cb(t||!e||!e.__esModule?u0(n,"default",{value:e,enumerable:!0}):n,e));var S0=Di(Ot=>{"use strict";var qf=Symbol.for("react.transitional.element"),ub=Symbol.for("react.portal"),hb=Symbol.for("react.fragment"),fb=Symbol.for("react.strict_mode"),db=Symbol.for("react.profiler"),pb=Symbol.for("react.consumer"),mb=Symbol.for("react.context"),gb=Symbol.for("react.forward_ref"),vb=Symbol.for("react.suspense"),_b=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),yb=Symbol.for("react.activity"),h0=Symbol.iterator;function xb(e){return e===null||typeof e!="object"?null:(e=h0&&e[h0]||e["@@iterator"],typeof e=="function"?e:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,_0={};function ja(e,t,n){this.props=e,this.context=t,this.refs=_0,this.updater=n||g0}ja.prototype.isReactComponent={};ja.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ja.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y0(){}y0.prototype=ja.prototype;function Yf(e,t,n){this.props=e,this.context=t,this.refs=_0,this.updater=n||g0}var Zf=Yf.prototype=new y0;Zf.constructor=Yf;v0(Zf,ja.prototype);Zf.isPureReactComponent=!0;var f0=Array.isArray;function Xf(){}var xe={H:null,A:null,T:null,S:null},x0=Object.prototype.hasOwnProperty;function Jf(e,t,n){var i=n.ref;return{$$typeof:qf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Sb(e,t){return Jf(e.type,t,e.props)}function Kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===qf}function Mb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var d0=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mb(""+e.key):t.toString(36)}function bb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Xf,Xf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Qa(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case qf:case ub:r=!0;break;case m0:return r=e._init,Qa(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Wf(e,0):i,f0(s)?(n="",r!=null&&(n=r.replace(d0,"$&/")+"/"),Qa(s,t,n,"",function(c){return c})):s!=null&&(Kf(s)&&(s=Sb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(d0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(f0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Wf(i,l),r+=Qa(i,t,n,a,s);else if(l=xb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Wf(i,l++),r+=Qa(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Qa(bb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function uc(e,t,n){if(e==null)return e;var i=[],s=0;return Qa(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Eb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var p0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tb={map:uc,forEach:function(e,t,n){uc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uc(e,function(){t++}),t},toArray:function(e){return uc(e,function(t){return t})||[]},only:function(e){if(!Kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=yb;Ot.Children=Tb;Ot.Component=ja;Ot.Fragment=hb;Ot.Profiler=db;Ot.PureComponent=Yf;Ot.StrictMode=fb;Ot.Suspense=vb;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return xe.H.useMemoCache(e)}};Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=v0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!x0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Jf(e.type,s,i)};Ot.createContext=function(e){return e={$$typeof:mb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:pb,_context:e},e};Ot.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)x0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Jf(e,a,s)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:gb,render:e}};Ot.isValidElement=Kf;Ot.lazy=function(e){return{$$typeof:m0,_payload:{_status:-1,_result:e},_init:Eb}};Ot.memo=function(e,t){return{$$typeof:_b,type:e,compare:t===void 0?null:t}};Ot.startTransition=function(e){var t=xe.T,n={};xe.T=n;try{var i=e(),s=xe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Xf,p0)}catch(a){p0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),xe.T=t}};Ot.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()};Ot.use=function(e){return xe.H.use(e)};Ot.useActionState=function(e,t,n){return xe.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return xe.H.useCallback(e,t)};Ot.useContext=function(e){return xe.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return xe.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return xe.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return xe.H.useEffectEvent(e)};Ot.useId=function(){return xe.H.useId()};Ot.useImperativeHandle=function(e,t,n){return xe.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return xe.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return xe.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return xe.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return xe.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return xe.H.useReducer(e,t,n)};Ot.useRef=function(e){return xe.H.useRef(e)};Ot.useState=function(e){return xe.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return xe.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return xe.H.useTransition()};Ot.version="19.2.0"});var xo=Di((B2,M0)=>{"use strict";M0.exports=S0()});var L0=Di(we=>{"use strict";function td(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<hc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ui(e){return e.length===0?null:e[0]}function dc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>hc(o,n))l<s&&0>hc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>hc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function hc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}we.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(b0=performance,we.unstable_now=function(){return b0.now()}):(Qf=Date,E0=Qf.now(),we.unstable_now=function(){return Qf.now()-E0});var b0,Qf,E0,Yi=[],bs=[],Ab=1,jn=null,fn=3,ed=!1,So=!1,Mo=!1,nd=!1,w0=typeof setTimeout=="function"?setTimeout:null,C0=typeof clearTimeout=="function"?clearTimeout:null,T0=typeof setImmediate<"u"?setImmediate:null;function fc(e){for(var t=Ui(bs);t!==null;){if(t.callback===null)dc(bs);else if(t.startTime<=e)dc(bs),t.sortIndex=t.expirationTime,td(Yi,t);else break;t=Ui(bs)}}function id(e){if(Mo=!1,fc(e),!So)if(Ui(Yi)!==null)So=!0,tr||(tr=!0,$a());else{var t=Ui(bs);t!==null&&sd(id,t.startTime-e)}}var tr=!1,bo=-1,R0=5,D0=-1;function U0(){return nd?!0:!(we.unstable_now()-D0<R0)}function jf(){if(nd=!1,tr){var e=we.unstable_now();D0=e;var t=!0;try{t:{So=!1,Mo&&(Mo=!1,C0(bo),bo=-1),ed=!0;var n=fn;try{e:{for(fc(e),jn=Ui(Yi);jn!==null&&!(jn.expirationTime>e&&U0());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,fn=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=we.unstable_now(),typeof s=="function"){jn.callback=s,fc(e),t=!0;break e}jn===Ui(Yi)&&dc(Yi),fc(e)}else dc(Yi);jn=Ui(Yi)}if(jn!==null)t=!0;else{var a=Ui(bs);a!==null&&sd(id,a.startTime-e),t=!1}}break t}finally{jn=null,fn=n,ed=!1}t=void 0}}finally{t?$a():tr=!1}}}var $a;typeof T0=="function"?$a=function(){T0(jf)}:typeof MessageChannel<"u"?($f=new MessageChannel,A0=$f.port2,$f.port1.onmessage=jf,$a=function(){A0.postMessage(null)}):$a=function(){w0(jf,0)};var $f,A0;function sd(e,t){bo=w0(function(){e(we.unstable_now())},t)}we.unstable_IdlePriority=5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(e){e.callback=null};we.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R0=0<e?Math.floor(1e3/e):5};we.unstable_getCurrentPriorityLevel=function(){return fn};we.unstable_next=function(e){switch(fn){case 1:case 2:case 3:var t=3;break;default:t=fn}var n=fn;fn=t;try{return e()}finally{fn=n}};we.unstable_requestPaint=function(){nd=!0};we.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=fn;fn=e;try{return t()}finally{fn=n}};we.unstable_scheduleCallback=function(e,t,n){var i=we.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Ab++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,td(bs,e),Ui(Yi)===null&&e===Ui(bs)&&(Mo?(C0(bo),bo=-1):Mo=!0,sd(id,n-i))):(e.sortIndex=s,td(Yi,e),So||ed||(So=!0,tr||(tr=!0,$a()))),e};we.unstable_shouldYield=U0;we.unstable_wrapCallback=function(e){var t=fn;return function(){var n=fn;fn=t;try{return e.apply(this,arguments)}finally{fn=n}}}});var I0=Di((F2,N0)=>{"use strict";N0.exports=L0()});var P0=Di(Sn=>{"use strict";var wb=xo();function O0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Es(){}var xn={d:{f:Es,r:function(){throw Error(O0(522))},D:Es,C:Es,L:Es,m:Es,X:Es,S:Es,M:Es},p:0,findDOMNode:null},Cb=Symbol.for("react.portal");function Rb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Eo=wb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(O0(299));return Rb(e,t,null,n)};Sn.flushSync=function(e){var t=Eo.T,n=xn.p;try{if(Eo.T=null,xn.p=2,e)return e()}finally{Eo.T=t,xn.p=n,xn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=pc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=pc(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=pc(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=pc(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};Sn.requestFormReset=function(e){xn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return Eo.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return Eo.H.useHostTransitionStatus()};Sn.version="19.2.0"});var F0=Di((G2,z0)=>{"use strict";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(e){console.error(e)}}B0(),z0.exports=P0()});var Qx=Di(Fu=>{"use strict";var qe=I0(),h_=xo(),Db=F0();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V0(e){if(ul(e)!==e)throw Error(tt(188))}function Ub(e){var t=e.alternate;if(!t){if(t=ul(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return V0(s),e;if(a===i)return V0(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function m_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m_(e),t!==null)return t;e=e.sibling}return null}var be=Object.assign,Lb=Symbol.for("react.element"),mc=Symbol.for("react.transitional.element"),Lo=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),v_=Symbol.for("react.consumer"),es=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Ts=Symbol.for("react.lazy");Symbol.for("react.scope");var Gd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Nb=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var G0=Symbol.iterator;function To(e){return e===null||typeof e!="object"?null:(e=G0&&e[G0]||e["@@iterator"],typeof e=="function"?e:null)}var Ib=Symbol.for("react.client.reference");function Hd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ib?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case zd:return"Profiler";case g_:return"StrictMode";case Fd:return"Suspense";case Vd:return"SuspenseList";case Gd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Lo:return"Portal";case es:return e.displayName||"Context";case v_:return(e._context.displayName||"Context")+".Consumer";case Np:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ip:return t=e.displayName||null,t!==null?t:Hd(e.type)||"Memo";case Ts:t=e._payload,e=e._init;try{return Hd(e(t))}catch{}}return null}var No=Array.isArray,Dt=h_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=Db.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xa={pending:!1,data:null,method:null,action:null},kd=[],or=-1;function Pi(e){return{current:e}}function $e(e){0>or||(e.current=kd[or],kd[or]=null,or--)}function _e(e,t){or++,kd[or]=e.current,e.current=t}var Oi=Pi(null),Ko=Pi(null),Ps=Pi(null),Zc=Pi(null);function Jc(e,t){switch(_e(Ps,t),_e(Ko,e),_e(Oi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zv(t),e=Bx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Oi),_e(Oi,e)}function Tr(){$e(Oi),$e(Ko),$e(Ps)}function Wd(e){e.memoizedState!==null&&_e(Zc,e);var t=Oi.current,n=Bx(t,e.type);t!==n&&(_e(Ko,e),_e(Oi,n))}function Kc(e){Ko.current===e&&($e(Oi),$e(Ko)),Zc.current===e&&($e(Zc),ol._currentValue=xa)}var ad,H0;function ga(e){if(ad===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ad=t&&t[1]||"",H0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ad+e+H0}var rd=!1;function od(e,t){if(!e||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ga(n):""}function Ob(e,t){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return e.child!==t&&t!==null?ga("Suspense Fallback"):ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return od(e.type,!1);case 11:return od(e.type.render,!1);case 1:return od(e.type,!0);case 31:return ga("Activity");default:return""}}function k0(e){try{var t="",n=null;do t+=Ob(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xd=Object.prototype.hasOwnProperty,Op=qe.unstable_scheduleCallback,ld=qe.unstable_cancelCallback,Pb=qe.unstable_shouldYield,Bb=qe.unstable_requestPaint,Vn=qe.unstable_now,zb=qe.unstable_getCurrentPriorityLevel,__=qe.unstable_ImmediatePriority,y_=qe.unstable_UserBlockingPriority,Qc=qe.unstable_NormalPriority,Fb=qe.unstable_LowPriority,x_=qe.unstable_IdlePriority,Vb=qe.log,Gb=qe.unstable_setDisableYieldValue,hl=null,Gn=null;function Us(e){if(typeof Vb=="function"&&Gb(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(hl,e)}catch{}}var Hn=Math.clz32?Math.clz32:Wb,Hb=Math.log,kb=Math.LN2;function Wb(e){return e>>>=0,e===0?32:31-(Hb(e)/kb|0)|0}var gc=256,vc=262144,_c=4194304;function va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=va(i):(r&=o,r!==0?s=va(r):n||(n=o&~e,n!==0&&(s=va(n))))):(o=i&~a,o!==0?s=va(o):r!==0?s=va(r):n||(n=i&~e,n!==0&&(s=va(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(){var e=_c;return _c<<=1,(_c&62914560)===0&&(_c=4194304),e}function cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qb(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Hn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&M_(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function M_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Hn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function b_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Hn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function E_(e,t){var n=t&-t;return n=(n&42)!==0?1:Pp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Pp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function T_(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Zx(e.type))}function W0(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var Js=Math.random().toString(36).slice(2),sn="__reactFiber$"+Js,Un="__reactProps$"+Js,Pr="__reactContainer$"+Js,qd="__reactEvents$"+Js,Yb="__reactListeners$"+Js,Zb="__reactHandles$"+Js,X0="__reactResources$"+Js,pl="__reactMarker$"+Js;function zp(e){delete e[sn],delete e[Un],delete e[qd],delete e[Yb],delete e[Zb]}function lr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pr]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$v(e);e!==null;){if(n=e[sn])return n;e=$v(e)}return t}e=n,n=e.parentNode}return null}function Br(e){if(e=e[sn]||e[Pr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function _r(e){var t=e[X0];return t||(t=e[X0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[pl]=!0}var A_=new Set,w_={};function Da(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(w_[e]=t,e=0;e<t.length;e++)A_.add(t[e])}var Jb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),q0={},Y0={};function Kb(e){return Xd.call(Y0,e)?!0:Xd.call(q0,e)?!1:Jb.test(e)?Y0[e]=!0:(q0[e]=!0,!1)}function Nc(e,t,n){if(Kb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Zi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function C_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yd(e){if(!e._valueTracker){var t=C_(e)?"checked":"value";e._valueTracker=Qb(e,t,""+e[t])}}function R_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=C_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function jc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jb=/[\n"\\]/g;function ii(e){return e.replace(jb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ti(t)):e.value!==""+ti(t)&&(e.value=""+ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Jd(e,r,ti(t)):n!=null?Jd(e,r,ti(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ti(o):e.removeAttribute("name")}function D_(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Yd(e);return}n=n!=null?""+ti(n):"",t=t!=null?""+ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Yd(e)}function Jd(e,t,n){t==="number"&&jc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function U_(e,t,n){if(t!=null&&(t=""+ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ti(n):""}function L_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(No(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Yd(e)}function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $b=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Z0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||$b.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function N_(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Z0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Z0(e,a,t[a])}function Fp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ic(e){return e1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ns(){}var Kd=null;function Vp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,xr=null;function J0(e){var t=Br(e);if(t&&(e=t.stateNode)){var n=e[Un]||null;t:switch(e=t.stateNode,t.type){case"input":if(Zd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Un]||null;if(!s)throw Error(tt(90));Zd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&R_(i)}break t;case"textarea":U_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}}}var ud=!1;function I_(e,t,n){if(ud)return e(t,n);ud=!0;try{var i=e(t);return i}finally{if(ud=!1,(cr!==null||xr!==null)&&(Ou(),cr&&(t=cr,e=xr,xr=cr=null,J0(t),e)))for(t=0;t<e.length;t++)J0(e[t])}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Un]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var os=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=!1;if(os)try{er={},Object.defineProperty(er,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Qd=!1}var er,Ls=null,Gp=null,Oc=null;function O_(){if(Oc)return Oc;var e,t=Gp,n=t.length,i,s="value"in Ls?Ls.value:Ls.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Oc=s.slice(e,1<i?1-i:void 0)}function Pc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xc(){return!0}function K0(){return!1}function Ln(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?xc:K0,this.isPropagationStopped=K0,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Ln(Ua),ml=be({},Ua,{view:0,detail:0}),n1=Ln(ml),hd,fd,Ao,Tu=be({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(hd=e.screenX-Ao.screenX,fd=e.screenY-Ao.screenY):fd=hd=0,Ao=e),hd)},movementY:function(e){return"movementY"in e?e.movementY:fd}}),Q0=Ln(Tu),i1=be({},Tu,{dataTransfer:0}),s1=Ln(i1),a1=be({},ml,{relatedTarget:0}),dd=Ln(a1),r1=be({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=Ln(r1),l1=be({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c1=Ln(l1),u1=be({},Ua,{data:0}),j0=Ln(u1),h1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function Hp(){return p1}var m1=be({},ml,{key:function(e){if(e.key){var t=h1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(e){return e.type==="keypress"?Pc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=Ln(m1),v1=be({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$0=Ln(v1),_1=be({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),y1=Ln(_1),x1=be({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=Ln(x1),M1=be({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b1=Ln(M1),E1=be({},Ua,{newState:0,oldState:0}),T1=Ln(E1),A1=[9,13,27,32],kp=os&&"CompositionEvent"in window,Bo=null;os&&"documentMode"in document&&(Bo=document.documentMode);var w1=os&&"TextEvent"in window&&!Bo,P_=os&&(!kp||Bo&&8<Bo&&11>=Bo),tv=" ",ev=!1;function B_(e,t){switch(e){case"keyup":return A1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function C1(e,t){switch(e){case"compositionend":return z_(t);case"keypress":return t.which!==32?null:(ev=!0,tv);case"textInput":return e=t.data,e===tv&&ev?null:e;default:return null}}function R1(e,t){if(ur)return e==="compositionend"||!kp&&B_(e,t)?(e=O_(),Oc=Gp=Ls=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return P_&&t.locale!=="ko"?null:t.data;default:return null}}var D1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D1[e.type]:t==="textarea"}function F_(e,t,n,i){cr?xr?xr.push(i):xr=[i]:cr=i,t=gu(t,"onChange"),0<t.length&&(n=new Eu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var zo=null,jo=null;function U1(e){Ix(e,0)}function Au(e){var t=Io(e);if(R_(t))return e}function iv(e,t){if(e==="change")return t}var V_=!1;os&&(os?(Mc="oninput"in document,Mc||(pd=document.createElement("div"),pd.setAttribute("oninput","return;"),Mc=typeof pd.oninput=="function"),Sc=Mc):Sc=!1,V_=Sc&&(!document.documentMode||9<document.documentMode));var Sc,Mc,pd;function sv(){zo&&(zo.detachEvent("onpropertychange",G_),jo=zo=null)}function G_(e){if(e.propertyName==="value"&&Au(jo)){var t=[];F_(t,jo,e,Vp(e)),I_(U1,t)}}function L1(e,t,n){e==="focusin"?(sv(),zo=t,jo=n,zo.attachEvent("onpropertychange",G_)):e==="focusout"&&sv()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Au(jo)}function I1(e,t){if(e==="click")return Au(t)}function O1(e,t){if(e==="input"||e==="change")return Au(t)}function P1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:P1;function $o(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Xd.call(t,s)||!Wn(e[s],t[s]))return!1}return!0}function av(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rv(e,t){var n=av(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=av(n)}}function H_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?H_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function k_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jc(e.document)}return t}function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B1=os&&"documentMode"in document&&11>=document.documentMode,hr=null,jd=null,Fo=null,$d=!1;function ov(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||hr==null||hr!==jc(i)||(i=hr,"selectionStart"in i&&Wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&$o(Fo,i)||(Fo=i,i=gu(jd,"onSelect"),0<i.length&&(t=new Eu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hr)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},md={},W_={};os&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function La(e){if(md[e])return md[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in W_)return md[e]=t[n];return e}var X_=La("animationend"),q_=La("animationiteration"),Y_=La("animationstart"),z1=La("transitionrun"),F1=La("transitionstart"),V1=La("transitioncancel"),Z_=La("transitionend"),J_=new Map,tp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tp.push("scrollEnd");function vi(e,t){J_.set(e,t),Da(t,[e])}var $c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],dr=0,Xp=0;function wu(){for(var e=dr,t=Xp=dr=0;t<e;){var n=$n[t];$n[t++]=null;var i=$n[t];$n[t++]=null;var s=$n[t];$n[t++]=null;var a=$n[t];if($n[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&K_(n,s,a)}}function Cu(e,t,n,i){$n[dr++]=e,$n[dr++]=t,$n[dr++]=n,$n[dr++]=i,Xp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qp(e,t,n,i){return Cu(e,t,n,i),tu(e)}function Na(e,t){return Cu(e,null,null,t),tu(e)}function K_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Hn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function tu(e){if(50<Zo)throw Zo=0,Sp=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pr={};function G1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,i){return new G1(e,t,n,i)}function Yp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ss(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Q_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Yp(e)&&(r=1);else if(typeof e=="string")r=WE(e,n,Oi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Gd:return e=zn(31,n,t,s),e.elementType=Gd,e.lanes=a,e;case rr:return Sa(n.children,s,a,t);case g_:r=8,s|=24;break;case zd:return e=zn(12,n,t,s|2),e.elementType=zd,e.lanes=a,e;case Fd:return e=zn(13,n,t,s),e.elementType=Fd,e.lanes=a,e;case Vd:return e=zn(19,n,t,s),e.elementType=Vd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case es:r=10;break t;case v_:r=9;break t;case Np:r=11;break t;case Ip:r=14;break t;case Ts:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=zn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Sa(e,t,n,i){return e=zn(7,e,i,t),e.lanes=n,e}function gd(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function j_(e){var t=zn(18,null,null,0);return t.stateNode=e,t}function vd(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lv=new WeakMap;function si(e,t){if(typeof e=="object"&&e!==null){var n=lv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:k0(t)},lv.set(e,t),t)}return{value:e,source:t,stack:k0(t)}}var mr=[],gr=0,eu=null,tl=0,ei=[],ni=0,Xs=null,Li=1,Ni="";function $i(e,t){mr[gr++]=tl,mr[gr++]=eu,eu=e,tl=t}function $_(e,t,n){ei[ni++]=Li,ei[ni++]=Ni,ei[ni++]=Xs,Xs=e;var i=Li;e=Ni;var s=32-Hn(i)-1;i&=~(1<<s),n+=1;var a=32-Hn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Li=1<<32-Hn(t)+s|n<<s|i,Ni=a+e}else Li=1<<a|n<<s|i,Ni=e}function Zp(e){e.return!==null&&($i(e,1),$_(e,1,0))}function Jp(e){for(;e===eu;)eu=mr[--gr],mr[gr]=null,tl=mr[--gr],mr[gr]=null;for(;e===Xs;)Xs=ei[--ni],ei[ni]=null,Ni=ei[--ni],ei[ni]=null,Li=ei[--ni],ei[ni]=null}function ty(e,t){ei[ni++]=Li,ei[ni++]=Ni,ei[ni++]=Xs,Li=t.id,Ni=t.overflow,Xs=e}var an=null,Me=null,Kt=!1,Bs=null,ai=!1,ep=Error(tt(519));function qs(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(si(t,e)),ep}function cv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[sn]=e,t[Un]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<al.length;n++)Wt(al[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),D_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),L_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Px(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=ns),t=!0):t=!1,t||qs(e,!0)}function uv(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:an=an.return}}function nr(e){if(e!==an)return!1;if(!Kt)return uv(e),Kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ap(e.type,e.memoizedProps)),n=!n),n&&Me&&qs(e),uv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Me=jv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Me=jv(e)}else t===27?(t=Me,Ks(e.type)?(e=Dp,Dp=null,Me=e):Me=t):Me=an?oi(e.stateNode.nextSibling):null;return!0}function Ta(){Me=an=null,Kt=!1}function _d(){var e=Bs;return e!==null&&(Rn===null?Rn=e:Rn.push.apply(Rn,e),Bs=null),e}function el(e){Bs===null?Bs=[e]:Bs.push(e)}var np=Pi(null),Ia=null,is=null;function ws(e,t,n){_e(np,t._currentValue),t._currentValue=n}function as(e){e._currentValue=np.current,$e(np)}function ip(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function sp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ip(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ip(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function zr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;Wn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Zc.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}s=s.return}e!==null&&sp(t,e,n,i),t.flags|=262144}function nu(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Ia=e,is=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rn(e){return ey(Ia,e)}function bc(e,t){return Ia===null&&Aa(e),ey(e,t)}function ey(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},is===null){if(e===null)throw Error(tt(308));is=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else is=is.next=t;return n}var H1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},k1=qe.unstable_scheduleCallback,W1=qe.unstable_NormalPriority,Ge={$$typeof:es,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kp(){return{controller:new H1,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&k1(W1,function(){e.controller.abort()})}var Vo=null,ap=0,Cr=0,Sr=null;function X1(e,t){if(Vo===null){var n=Vo=[];ap=0,Cr=Sm(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ap++,t.then(hv,hv),t}function hv(){if(--ap===0&&Vo!==null){Sr!==null&&(Sr.status="fulfilled");var e=Vo;Vo=null,Cr=0,Sr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function q1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var fv=Dt.S;Dt.S=function(e,t){mx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&X1(e,t),fv!==null&&fv(e,t)};var Ma=Pi(null);function Qp(){var e=Ma.current;return e!==null?e:pe.pooledCache}function zc(e,t){t===null?_e(Ma,Ma.current):_e(Ma,t.pool)}function ny(){var e=Qp();return e===null?null:{parent:Ge._currentValue,pool:e}}var Fr=Error(tt(460)),jp=Error(tt(474)),Ru=Error(tt(542)),iu={then:function(){}};function dv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function iy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ns,ns),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mv(e),e;default:if(typeof t.status=="string")t.then(ns,ns);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mv(e),e}throw ba=t,Fr}}function _a(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ba=n,Fr):n}}var ba=null;function pv(){if(ba===null)throw Error(tt(459));var e=ba;return ba=null,e}function mv(e){if(e===Fr||e===Ru)throw Error(tt(483))}var Mr=null,nl=0;function Ec(e){var t=nl;return nl+=1,Mr===null&&(Mr=[]),iy(Mr,e,t)}function wo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tc(e,t){throw t.$$typeof===Lb?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sy(e){function t(h,v){if(e){var M=h.deletions;M===null?(h.deletions=[v],h.flags|=16):M.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function i(h){for(var v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function s(h,v){return h=ss(h,v),h.index=0,h.sibling=null,h}function a(h,v,M){return h.index=M,e?(M=h.alternate,M!==null?(M=M.index,M<v?(h.flags|=67108866,v):M):(h.flags|=67108866,v)):(h.flags|=1048576,v)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,v,M,y){return v===null||v.tag!==6?(v=gd(M,h.mode,y),v.return=h,v):(v=s(v,M),v.return=h,v)}function l(h,v,M,y){var E=M.type;return E===rr?f(h,v,M.props.children,y,M.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ts&&_a(E)===v.type)?(v=s(v,M.props),wo(v,M),v.return=h,v):(v=Bc(M.type,M.key,M.props,null,h.mode,y),wo(v,M),v.return=h,v)}function c(h,v,M,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=vd(M,h.mode,y),v.return=h,v):(v=s(v,M.children||[]),v.return=h,v)}function f(h,v,M,y,E){return v===null||v.tag!==7?(v=Sa(M,h.mode,y,E),v.return=h,v):(v=s(v,M),v.return=h,v)}function p(h,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=gd(""+v,h.mode,M),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mc:return M=Bc(v.type,v.key,v.props,null,h.mode,M),wo(M,v),M.return=h,M;case Lo:return v=vd(v,h.mode,M),v.return=h,v;case Ts:return v=_a(v),p(h,v,M)}if(No(v)||To(v))return v=Sa(v,h.mode,M,null),v.return=h,v;if(typeof v.then=="function")return p(h,Ec(v),M);if(v.$$typeof===es)return p(h,bc(h,v),M);Tc(h,v)}return null}function u(h,v,M,y){var E=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return E!==null?null:o(h,v,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:return M.key===E?l(h,v,M,y):null;case Lo:return M.key===E?c(h,v,M,y):null;case Ts:return M=_a(M),u(h,v,M,y)}if(No(M)||To(M))return E!==null?null:f(h,v,M,y,null);if(typeof M.then=="function")return u(h,v,Ec(M),y);if(M.$$typeof===es)return u(h,v,bc(h,M),y);Tc(h,M)}return null}function d(h,v,M,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(M)||null,o(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mc:return h=h.get(y.key===null?M:y.key)||null,l(v,h,y,E);case Lo:return h=h.get(y.key===null?M:y.key)||null,c(v,h,y,E);case Ts:return y=_a(y),d(h,v,M,y,E)}if(No(y)||To(y))return h=h.get(M)||null,f(v,h,y,E,null);if(typeof y.then=="function")return d(h,v,M,Ec(y),E);if(y.$$typeof===es)return d(h,v,M,bc(v,y),E);Tc(v,y)}return null}function g(h,v,M,y){for(var E=null,T=null,w=v,x=v=0,A=null;w!==null&&x<M.length;x++){w.index>x?(A=w,w=null):A=w.sibling;var R=u(h,w,M[x],y);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(h,w),v=a(R,v,x),T===null?E=R:T.sibling=R,T=R,w=A}if(x===M.length)return n(h,w),Kt&&$i(h,x),E;if(w===null){for(;x<M.length;x++)w=p(h,M[x],y),w!==null&&(v=a(w,v,x),T===null?E=w:T.sibling=w,T=w);return Kt&&$i(h,x),E}for(w=i(w);x<M.length;x++)A=d(w,h,x,M[x],y),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?x:A.key),v=a(A,v,x),T===null?E=A:T.sibling=A,T=A);return e&&w.forEach(function(I){return t(h,I)}),Kt&&$i(h,x),E}function b(h,v,M,y){if(M==null)throw Error(tt(151));for(var E=null,T=null,w=v,x=v=0,A=null,R=M.next();w!==null&&!R.done;x++,R=M.next()){w.index>x?(A=w,w=null):A=w.sibling;var I=u(h,w,R.value,y);if(I===null){w===null&&(w=A);break}e&&w&&I.alternate===null&&t(h,w),v=a(I,v,x),T===null?E=I:T.sibling=I,T=I,w=A}if(R.done)return n(h,w),Kt&&$i(h,x),E;if(w===null){for(;!R.done;x++,R=M.next())R=p(h,R.value,y),R!==null&&(v=a(R,v,x),T===null?E=R:T.sibling=R,T=R);return Kt&&$i(h,x),E}for(w=i(w);!R.done;x++,R=M.next())R=d(w,h,x,R.value,y),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?x:R.key),v=a(R,v,x),T===null?E=R:T.sibling=R,T=R);return e&&w.forEach(function(z){return t(h,z)}),Kt&&$i(h,x),E}function m(h,v,M,y){if(typeof M=="object"&&M!==null&&M.type===rr&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case mc:t:{for(var E=M.key;v!==null;){if(v.key===E){if(E=M.type,E===rr){if(v.tag===7){n(h,v.sibling),y=s(v,M.props.children),y.return=h,h=y;break t}}else if(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ts&&_a(E)===v.type){n(h,v.sibling),y=s(v,M.props),wo(y,M),y.return=h,h=y;break t}n(h,v);break}else t(h,v);v=v.sibling}M.type===rr?(y=Sa(M.props.children,h.mode,y,M.key),y.return=h,h=y):(y=Bc(M.type,M.key,M.props,null,h.mode,y),wo(y,M),y.return=h,h=y)}return r(h);case Lo:t:{for(E=M.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(h,v.sibling),y=s(v,M.children||[]),y.return=h,h=y;break t}else{n(h,v);break}else t(h,v);v=v.sibling}y=vd(M,h.mode,y),y.return=h,h=y}return r(h);case Ts:return M=_a(M),m(h,v,M,y)}if(No(M))return g(h,v,M,y);if(To(M)){if(E=To(M),typeof E!="function")throw Error(tt(150));return M=E.call(M),b(h,v,M,y)}if(typeof M.then=="function")return m(h,v,Ec(M),y);if(M.$$typeof===es)return m(h,v,bc(h,M),y);Tc(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(h,v.sibling),y=s(v,M),y.return=h,h=y):(n(h,v),y=gd(M,h.mode,y),y.return=h,h=y),r(h)):n(h,v)}return function(h,v,M,y){try{nl=0;var E=m(h,v,M,y);return Mr=null,E}catch(w){if(w===Fr||w===Ru)throw w;var T=zn(29,w,null,h.mode);return T.lanes=y,T.return=h,T}finally{}}}var wa=sy(!0),ay=sy(!1),As=!1;function $p(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=tu(e),K_(e,null,n),t}return Cu(e,i,t,n),tu(e)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,b_(e,n)}}function yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var op=!1;function Ho(){if(op){var e=Sr;if(e!==null)throw e}}function ko(e,t,n,i){op=!1;var s=e.updateQueue;As=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Yt&u)===u:(i&u)===u){u!==0&&u===Cr&&(op=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){p=g.call(m,p,u);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break t;p=be({},p,u);break t;case 2:As=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Zs|=r,e.lanes=r,e.memoizedState=p}}function ry(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function oy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ry(n[e],t)}var Rr=Pi(null),su=Pi(0);function gv(e,t){e=hs,_e(su,e),_e(Rr,t),hs=e|t.baseLanes}function lp(){_e(su,hs),_e(Rr,Rr.current)}function tm(){hs=su.current,$e(Rr),$e(su)}var Xn=Pi(null),ri=null;function Cs(e){var t=e.alternate;_e(Ie,Ie.current&1),_e(Xn,e),ri===null&&(t===null||Rr.current!==null||t.memoizedState!==null)&&(ri=e)}function cp(e){_e(Ie,Ie.current),_e(Xn,e),ri===null&&(ri=e)}function ly(e){e.tag===22?(_e(Ie,Ie.current),_e(Xn,e),ri===null&&(ri=e)):Rs(e)}function Rs(){_e(Ie,Ie.current),_e(Xn,Xn.current)}function Bn(e){$e(Xn),ri===e&&(ri=null),$e(Ie)}var Ie=Pi(0);function au(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Cp(n)||Rp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=0,Bt=null,fe=null,Fe=null,ru=!1,br=!1,Ca=!1,ou=0,il=0,Er=null,Y1=0;function De(){throw Error(tt(321))}function em(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function nm(e,t,n,i,s,a){return ls=a,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?Fy:dm,Ca=!1,a=n(i,s),Ca=!1,br&&(a=uy(t,n,i,s)),cy(e),a}function cy(e){Dt.H=sl;var t=fe!==null&&fe.next!==null;if(ls=0,Fe=fe=Bt=null,ru=!1,il=0,Er=null,t)throw Error(tt(300));e===null||He||(e=e.dependencies,e!==null&&nu(e)&&(He=!0))}function uy(e,t,n,i){Bt=e;var s=0;do{if(br&&(Er=null),il=0,br=!1,25<=s)throw Error(tt(301));if(s+=1,Fe=fe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=Vy,a=t(n,i)}while(br);return a}function Z1(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?vl(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(Bt.flags|=1024),t}function im(){var e=ou!==0;return ou=0,e}function sm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function am(e){if(ru){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ru=!1}ls=0,Fe=fe=Bt=null,br=!1,il=ou=0,Er=null}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Bt.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Oe(){if(fe===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=Fe===null?Bt.memoizedState:Fe.next;if(t!==null)Fe=t,fe=e;else{if(e===null)throw Bt.alternate===null?Error(tt(467)):Error(tt(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Fe===null?Bt.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(e){var t=il;return il+=1,Er===null&&(Er=[]),e=iy(Er,e,t),t=Bt,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?Fy:dm),e}function Uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vl(e);if(e.$$typeof===es)return rn(e)}throw Error(tt(438,String(e)))}function rm(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Du(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Nb;return t.index++,n}function cs(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=Oe();return om(t,fe,e)}function om(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Yt&p)===p:(ls&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Cr&&(f=!0);else if((ls&u)===u){c=c.next,u===Cr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Bt.lanes|=u,Zs|=u;p=c.action,Ca&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Bt.lanes|=p,Zs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Wn(a,e.memoizedState)&&(He=!0,f&&(n=Sr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xd(e){var t=Oe(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Wn(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function hy(e,t,n){var i=Bt,s=Oe(),a=Kt;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Wn((fe||s).memoizedState,n);if(r&&(s.memoizedState=n,He=!0),s=s.queue,lm(py.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Dr(9,{destroy:void 0},dy.bind(null,i,s,n,t),null),pe===null)throw Error(tt(349));a||(ls&127)!==0||fy(i,t,n)}return n}function fy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=Du(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dy(e,t,n,i){t.value=n,t.getSnapshot=i,my(t)&&gy(e)}function py(e,t,n){return n(function(){my(t)&&gy(e)})}function my(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function gy(e){var t=Na(e,2);t!==null&&Dn(t,e,2)}function up(e){var t=Mn();if(typeof e=="function"){var n=e;if(e=n(),Ca){Us(!0);try{n()}finally{Us(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t}function vy(e,t,n,i){return e.baseState=n,om(e,fe,typeof i=="function"?i:cs)}function J1(e,t,n,i,s){if(Nu(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,_y(t,a)):(a.next=n.next,t.pending=n.next=a)}}function _y(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),vv(e,t,o)}catch(c){hp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),vv(e,t,a)}catch(c){hp(e,t,c)}}function vv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){_v(e,t,i)},function(i){return hp(e,t,i)}):_v(e,t,n)}function _v(e,t,n){t.status="fulfilled",t.value=n,yy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_y(e,n)))}function hp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,yy(t),t=t.next;while(t!==i)}e.action=null}function yy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xy(e,t){return t}function yv(e,t){if(Kt){var n=pe.formState;if(n!==null){t:{var i=Bt;if(Kt){if(Me){e:{for(var s=Me,a=ai;s.nodeType!==8;){if(!a){s=null;break e}if(s=oi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Me=oi(s.nextSibling),i=s.data==="F!";break t}}qs(i)}i=!1}i&&(t=n[0])}}return n=Mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xy,lastRenderedState:t},n.queue=i,n=Py.bind(null,Bt,i),i.dispatch=n,i=up(!1),a=fm.bind(null,Bt,!1,i.queue),i=Mn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=J1.bind(null,Bt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function xv(e){var t=Oe();return Sy(t,fe,e)}function Sy(e,t,n){if(t=om(e,t,xy)[0],e=Fc(cs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=vl(t)}catch(r){throw r===Fr?Ru:r}else i=t;t=Oe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,Dr(9,{destroy:void 0},K1.bind(null,s,n),null)),[i,a,e]}function K1(e,t){e.action=t}function Sv(e){var t=Oe(),n=fe;if(n!==null)return Sy(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Dr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=Du(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function My(){return Oe().memoizedState}function Vc(e,t,n,i){var s=Mn();Bt.flags|=e,s.memoizedState=Dr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Lu(e,t,n,i){var s=Oe();i=i===void 0?null:i;var a=s.memoizedState.inst;fe!==null&&i!==null&&em(i,fe.memoizedState.deps)?s.memoizedState=Dr(t,a,n,i):(Bt.flags|=e,s.memoizedState=Dr(1|t,a,n,i))}function Mv(e,t){Vc(8390656,8,e,t)}function lm(e,t){Lu(2048,8,e,t)}function Q1(e){Bt.flags|=4;var t=Bt.updateQueue;if(t===null)t=Du(),Bt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function by(e){var t=Oe().memoizedState;return Q1({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function Ey(e,t){return Lu(4,2,e,t)}function Ty(e,t){return Lu(4,4,e,t)}function Ay(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wy(e,t,n){n=n!=null?n.concat([e]):null,Lu(4,4,Ay.bind(null,t,e),n)}function cm(){}function Cy(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&em(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ry(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&em(t,i[1]))return i[0];if(i=e(),Ca){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i}function um(e,t,n){return n===void 0||(ls&1073741824)!==0&&(Yt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=vx(),Bt.lanes|=e,Zs|=e,n)}function Dy(e,t,n,i){return Wn(n,t)?n:Rr.current!==null?(e=um(e,n,i),Wn(e,t)||(He=!0),e):(ls&42)===0||(ls&1073741824)!==0&&(Yt&261930)===0?(He=!0,e.memoizedState=n):(e=vx(),Bt.lanes|=e,Zs|=e,t)}function Uy(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Dt.T,o={};Dt.T=o,fm(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=q1(l,i);Wo(e,t,f,kn(e))}else Wo(e,t,i,kn(e))}catch(p){Wo(e,t,{then:function(){},status:"rejected",reason:p},kn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function j1(){}function fp(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=Ly(e).queue;Uy(e,s,t,xa,n===null?j1:function(){return Ny(e),n(i)})}function Ly(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xa,baseState:xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ny(e){var t=Ly(e);t.next===null&&(t=e.alternate.memoizedState),Wo(e,t.next.queue,{},kn())}function hm(){return rn(ol)}function Iy(){return Oe().memoizedState}function Oy(){return Oe().memoizedState}function $1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kn();e=zs(n);var i=Fs(t,e,n);i!==null&&(Dn(i,t,n),Go(i,t,n)),t={cache:Kp()},e.payload=t;return}t=t.return}}function tE(e,t,n){var i=kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nu(e)?By(t,n):(n=qp(e,t,n,i),n!==null&&(Dn(n,e,i),zy(n,t,i)))}function Py(e,t,n){var i=kn();Wo(e,t,n,i)}function Wo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))By(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Wn(o,r))return Cu(e,t,s,0),pe===null&&wu(),!1}catch{}finally{}if(n=qp(e,t,s,i),n!==null)return Dn(n,e,i),zy(n,t,i),!0}return!1}function fm(e,t,n,i){if(i={lane:2,revertLane:Sm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(t)throw Error(tt(479))}else t=qp(e,n,i,2),t!==null&&Dn(t,e,2)}function Nu(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function By(e,t){br=ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zy(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,b_(e,n)}}var sl={readContext:rn,use:Uu,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};sl.useEffectEvent=De;var Fy={readContext:rn,use:Uu,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:Mv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vc(4194308,4,Ay.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vc(4194308,4,e,t)},useInsertionEffect:function(e,t){Vc(4,2,e,t)},useMemo:function(e,t){var n=Mn();t=t===void 0?null:t;var i=e();if(Ca){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Mn();if(n!==void 0){var s=n(t);if(Ca){Us(!0);try{n(t)}finally{Us(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=tE.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:function(e){e=up(e);var t=e.queue,n=Py.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cm,useDeferredValue:function(e,t){var n=Mn();return um(n,e,t)},useTransition:function(){var e=up(!1);return e=Uy.bind(null,Bt,e.queue,!0,!1),Mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,s=Mn();if(Kt){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),pe===null)throw Error(tt(349));(Yt&127)!==0||fy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Mv(py.bind(null,i,a,e),[e]),i.flags|=2048,Dr(9,{destroy:void 0},dy.bind(null,i,a,n,t),null),n},useId:function(){var e=Mn(),t=pe.identifierPrefix;if(Kt){var n=Ni,i=Li;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ou++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Y1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hm,useFormState:yv,useActionState:yv,useOptimistic:function(e){var t=Mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fm.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:rm,useCacheRefresh:function(){return Mn().memoizedState=$1.bind(null,Bt)},useEffectEvent:function(e){var t=Mn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},dm={readContext:rn,use:Uu,useCallback:Cy,useContext:rn,useEffect:lm,useImperativeHandle:wy,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:Ry,useReducer:Fc,useRef:My,useState:function(){return Fc(cs)},useDebugValue:cm,useDeferredValue:function(e,t){var n=Oe();return Dy(n,fe.memoizedState,e,t)},useTransition:function(){var e=Fc(cs)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:hy,useId:Iy,useHostTransitionStatus:hm,useFormState:xv,useActionState:xv,useOptimistic:function(e,t){var n=Oe();return vy(n,fe,e,t)},useMemoCache:rm,useCacheRefresh:Oy};dm.useEffectEvent=by;var Vy={readContext:rn,use:Uu,useCallback:Cy,useContext:rn,useEffect:lm,useImperativeHandle:wy,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:Ry,useReducer:xd,useRef:My,useState:function(){return xd(cs)},useDebugValue:cm,useDeferredValue:function(e,t){var n=Oe();return fe===null?um(n,e,t):Dy(n,fe.memoizedState,e,t)},useTransition:function(){var e=xd(cs)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:vl(e),t]},useSyncExternalStore:hy,useId:Iy,useHostTransitionStatus:hm,useFormState:Sv,useActionState:Sv,useOptimistic:function(e,t){var n=Oe();return fe!==null?vy(n,fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rm,useCacheRefresh:Oy};Vy.useEffectEvent=by;function Sd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kn(),s=zs(i);s.payload=t,n!=null&&(s.callback=n),t=Fs(e,s,i),t!==null&&(Dn(t,e,i),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kn(),s=zs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Fs(e,s,i),t!==null&&(Dn(t,e,i),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kn(),i=zs(n);i.tag=2,t!=null&&(i.callback=t),t=Fs(e,i,n),t!==null&&(Dn(t,e,n),Go(t,e,n))}};function bv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!$o(n,i)||!$o(s,a):!0}function Ev(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&dp.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=be({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Gy(e){$c(e)}function Hy(e){console.error(e)}function ky(e){$c(e)}function lu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Tv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function pp(e,t,n){return n=zs(n),n.tag=3,n.payload={element:null},n.callback=function(){lu(e,t)},n}function Wy(e){return e=zs(e),e.tag=3,e}function Xy(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Tv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Tv(t,n,i),typeof s!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function eE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&zr(t,n,s,!0),n=Xn.current,n!==null){switch(n.tag){case 31:case 13:return ri===null?du():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===iu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ld(e,i,s)),!1;case 22:return n.flags|=65536,i===iu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ld(e,i,s)),!1}throw Error(tt(435,n.tag))}return Ld(e,i,s),du(),!1}if(Kt)return t=Xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ep&&(e=Error(tt(422),{cause:i}),el(si(e,n)))):(i!==ep&&(t=Error(tt(423),{cause:i}),el(si(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=si(i,n),s=pp(e.stateNode,i,s),yd(e,s),Ue!==4&&(Ue=2)),!1;var a=Error(tt(520),{cause:i});if(a=si(a,n),Yo===null?Yo=[a]:Yo.push(a),Ue!==4&&(Ue=2),t===null)return!0;i=si(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=pp(n.stateNode,i,e),yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vs===null||!Vs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Wy(s),Xy(s,e,n,i),yd(n,s),!1}n=n.return}while(n!==null);return!1}var pm=Error(tt(461)),He=!1;function nn(e,t,n,i){t.child=e===null?ay(t,null,n,i):wa(t,e.child,n,i)}function Av(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Aa(t),i=nm(e,t,n,r,a,s),o=im(),e!==null&&!He?(sm(e,t,s),us(e,t,s)):(Kt&&o&&Zp(t),t.flags|=1,nn(e,t,i,s),t.child)}function wv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Yp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,qy(e,t,a,i,s)):(e=Bc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!mm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(r,i)&&e.ref===t.ref)return us(e,t,s)}return t.flags|=1,e=ss(a,i),e.ref=t.ref,e.return=t,t.child=e}function qy(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if($o(a,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=a,mm(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,us(e,t,s)}return mp(e,t,n,i,s)}function Yy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Cv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zc(t,a!==null?a.cachePool:null),a!==null?gv(t,a):lp(),ly(t);else return i=t.lanes=536870912,Cv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(zc(t,a.cachePool),gv(t,a),Rs(t),t.memoizedState=null):(e!==null&&zc(t,null),lp(),Rs(t));return nn(e,t,s,n),t.child}function Oo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cv(e,t,n,i,s){var a=Qp();return a=a===null?null:{parent:Ge._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&zc(t,null),lp(),ly(t),e!==null&&zr(e,t,i,!0),t.childLanes=s,null}function Gc(e,t){return t=cu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rv(e,t,n){return wa(t,e.child,null,n),e=Gc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function nE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Kt){if(i.mode==="hidden")return e=Gc(t,i),t.lanes=536870912,Oo(null,e);if(cp(t),(e=Me)?(e=Fx(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xs!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},n=j_(e),n.return=t,t.child=n,an=t,Me=null)):e=null,e===null)throw qs(t);return t.lanes=536870912,null}return Gc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(cp(t),s)if(t.flags&256)t.flags&=-257,t=Rv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(He||zr(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(i=pe,i!==null&&(r=E_(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Na(e,r),Dn(i,e,r),pm;du(),t=Rv(e,t,n)}else e=a.treeContext,Me=oi(r.nextSibling),an=t,Kt=!0,Bs=null,ai=!1,e!==null&&ty(t,e),t=Gc(t,i),t.flags|=4096;return t}return e=ss(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mp(e,t,n,i,s){return Aa(t),n=nm(e,t,n,i,void 0,s),i=im(),e!==null&&!He?(sm(e,t,s),us(e,t,s)):(Kt&&i&&Zp(t),t.flags|=1,nn(e,t,n,s),t.child)}function Dv(e,t,n,i,s,a){return Aa(t),t.updateQueue=null,n=uy(t,i,n,s),cy(e),i=im(),e!==null&&!He?(sm(e,t,a),us(e,t,a)):(Kt&&i&&Zp(t),t.flags|=1,nn(e,t,n,a),t.child)}function Uv(e,t,n,i,s){if(Aa(t),t.stateNode===null){var a=pr,r=n.contextType;typeof r=="object"&&r!==null&&(a=rn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},$p(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?rn(r):pr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Sd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&dp.enqueueReplaceState(a,a.state,null),ko(t,i,a,s),Ho(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ra(n,o);a.props=l;var c=a.context,f=n.contextType;r=pr,typeof f=="object"&&f!==null&&(r=rn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Ev(t,a,i,r),As=!1;var u=t.memoizedState;a.state=u,ko(t,i,a,s),Ho(),c=t.memoizedState,o||u!==c||As?(typeof p=="function"&&(Sd(t,n,p,i),c=t.memoizedState),(l=As||bv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,rp(e,t),r=t.memoizedProps,f=Ra(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=pr,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Ev(t,a,i,l),As=!1,u=t.memoizedState,a.state=u,ko(t,i,a,s),Ho();var d=t.memoizedState;r!==p||u!==d||As||e!==null&&e.dependencies!==null&&nu(e.dependencies)?(typeof o=="function"&&(Sd(t,n,o,i),d=t.memoizedState),(f=As||bv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&nu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Hc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=wa(t,e.child,null,s),t.child=wa(t,null,n,s)):nn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=us(e,t,s),e}function Lv(e,t,n,i){return Ta(),t.flags|=256,nn(e,t,n,i),t.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(e){return{baseLanes:e,cachePool:ny()}}function Ed(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Fn),e}function Zy(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Kt){if(s?Cs(t):Rs(t),(e=Me)?(e=Fx(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xs!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},n=j_(e),n.return=t,t.child=n,an=t,Me=null)):e=null,e===null)throw qs(t);return Rp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Rs(t),s=t.mode,o=cu({mode:"hidden",children:o},s),i=Sa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=bd(n),i.childLanes=Ed(e,r,n),t.memoizedState=Md,Oo(null,i)):(Cs(t),gp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Cs(t),t.flags&=-257,t=Td(e,t,n)):t.memoizedState!==null?(Rs(t),t.child=e.child,t.flags|=128,t=null):(Rs(t),o=i.fallback,s=t.mode,i=cu({mode:"visible",children:i.children},s),o=Sa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,wa(t,e.child,null,n),i=t.child,i.memoizedState=bd(n),i.childLanes=Ed(e,r,n),t.memoizedState=Md,t=Oo(null,i));else if(Cs(t),Rp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,el({value:i,source:null,stack:null}),t=Td(e,t,n)}else if(He||zr(e,t,n,!1),r=(n&e.childLanes)!==0,He||r){if(r=pe,r!==null&&(i=E_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Na(e,i),Dn(r,e,i),pm;Cp(o)||du(),t=Td(e,t,n)}else Cp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Me=oi(o.nextSibling),an=t,Kt=!0,Bs=null,ai=!1,e!==null&&ty(t,e),t=gp(t,i.children),t.flags|=4096);return t}return s?(Rs(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ss(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ss(c,o):(o=Sa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Oo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=bd(n):(s=o.cachePool,s!==null?(l=Ge._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=ny(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ed(e,r,n),t.memoizedState=Md,Oo(e.child,i)):(Cs(t),n=e.child,e=n.sibling,n=ss(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function gp(e,t){return t=cu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cu(e,t){return e=zn(22,e,null,t),e.lanes=0,e}function Td(e,t,n){return wa(t,e.child,null,n),e=gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ip(e.return,t,n)}function Ad(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Jy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ie.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,_e(Ie,r),nn(e,t,i,n),i=Kt?tl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,n,t);else if(e.tag===19)Nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&au(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ad(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&au(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ad(t,!0,n,null,a,i);break;case"together":Ad(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function us(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(zr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=ss(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ss(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nu(e)))}function iE(e,t,n){switch(t.tag){case 3:Jc(t,t.stateNode.containerInfo),ws(t,Ge,e.memoizedState.cache),Ta();break;case 27:case 5:Wd(t);break;case 4:Jc(t,t.stateNode.containerInfo);break;case 10:ws(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Cs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Zy(e,t,n):(Cs(t),e=us(e,t,n),e!==null?e.sibling:null);Cs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(zr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Jy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,Yy(e,t,n,t.pendingProps);case 24:ws(t,Ge,e.memoizedState.cache)}return us(e,t,n)}function Ky(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!mm(e,n)&&(t.flags&128)===0)return He=!1,iE(e,t,n);He=(e.flags&131072)!==0}else He=!1,Kt&&(t.flags&1048576)!==0&&$_(t,tl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")Yp(e)?(i=Ra(e,i),t.tag=1,t=Uv(null,t,e,i,n)):(t.tag=0,t=mp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Np){t.tag=11,t=Av(null,t,e,i,n);break t}else if(s===Ip){t.tag=14,t=wv(null,t,e,i,n);break t}}throw t=Hd(e)||e,Error(tt(306,t,""))}}return t;case 0:return mp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ra(i,t.pendingProps),Uv(e,t,i,s,n);case 3:t:{if(Jc(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,rp(e,t),ko(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ws(t,Ge,i),i!==a.cache&&sp(t,[Ge],n,!0),Ho(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Lv(e,t,i,n);break t}else if(i!==s){s=si(Error(tt(424)),t),el(s),t=Lv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=oi(e.firstChild),an=t,Kt=!0,Bs=null,ai=!0,n=ay(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ta(),i===s){t=us(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return Hc(e,t),e===null?(n=e_(t.type,null,t.pendingProps,null))?t.memoizedState=n:Kt||(n=t.type,e=t.pendingProps,i=vu(Ps.current).createElement(n),i[sn]=t,i[Un]=e,on(i,n,e),je(i),t.stateNode=i):t.memoizedState=e_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wd(t),e===null&&Kt&&(i=t.stateNode=Vx(t.type,t.pendingProps,Ps.current),an=t,ai=!0,s=Me,Ks(t.type)?(Dp=s,Me=oi(i.firstChild)):Me=s),nn(e,t,t.pendingProps.children,n),Hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Kt&&((s=i=Me)&&(i=UE(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,an=t,Me=oi(i.firstChild),ai=!1,s=!0):s=!1),s||qs(t)),Wd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Ap(s,a)?i=null:r!==null&&Ap(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=nm(e,t,Z1,null,null,n),ol._currentValue=s),Hc(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&Kt&&((e=n=Me)&&(n=LE(n,t.pendingProps,ai),n!==null?(t.stateNode=n,an=t,Me=null,e=!0):e=!1),e||qs(t)),null;case 13:return Zy(e,t,n);case 4:return Jc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=wa(t,null,i,n):nn(e,t,i,n),t.child;case 11:return Av(e,t,t.type,t.pendingProps,n);case 7:return nn(e,t,t.pendingProps,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ws(t,t.type,i.value),nn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Aa(t),s=rn(s),i=i(s),t.flags|=1,nn(e,t,i,n),t.child;case 14:return wv(e,t,t.type,t.pendingProps,n);case 15:return qy(e,t,t.type,t.pendingProps,n);case 19:return Jy(e,t,n);case 31:return nE(e,t,n);case 22:return Yy(e,t,n,t.pendingProps);case 24:return Aa(t),i=rn(Ge),e===null?(s=Qp(),s===null&&(s=pe,a=Kp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},$p(t),ws(t,Ge,s)):((e.lanes&n)!==0&&(rp(e,t),ko(t,null,null,n),Ho()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ws(t,Ge,i)):(i=a.cache,ws(t,Ge,i),i!==s.cache&&sp(t,[Ge],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Ji(e){e.flags|=4}function wd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(xx())e.flags|=8192;else throw ba=iu,jp}else e.flags&=-16777217}function Iv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kx(t))if(xx())e.flags|=8192;else throw ba=iu,jp}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?S_():536870912,e.lanes|=t,Ur|=t)}function Co(e,t){if(!Kt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sE(e,t,n){var i=t.pendingProps;switch(Jp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),as(Ge),Tr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nr(t)?Ji(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_d())),Se(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ji(t),a!==null?(Se(t),Iv(t,a)):(Se(t),wd(t,s,null,i,n))):a?a!==e.memoizedState?(Ji(t),Se(t),Iv(t,a)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ji(t),Se(t),wd(t,s,e,i,n)),null;case 27:if(Kc(t),n=Ps.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Se(t),null}e=Oi.current,nr(t)?cv(t,e):(e=Vx(s,i,n),t.stateNode=e,Ji(t))}return Se(t),null;case 5:if(Kc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Se(t),null}if(a=Oi.current,nr(t))cv(t,a);else{var r=vu(Ps.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[sn]=t,a[Un]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(on(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ji(t)}}return Se(t),wd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=Ps.current,nr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=an,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Px(e.nodeValue,n)),e||qs(t,!0)}else e=vu(e).createTextNode(i),e[sn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=nr(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[sn]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=nr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[sn]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=_d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Se(t),null);case 4:return Tr(),e===null&&Mm(t.stateNode.containerInfo),Se(t),null;case 10:return as(t.type),Se(t),null;case 19:if($e(Ie),i=t.memoizedState,i===null)return Se(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Co(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=au(e),a!==null){for(t.flags|=128,Co(i,!1),e=a.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Q_(n,e),n=n.sibling;return _e(Ie,Ie.current&1|2),Kt&&$i(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>hu&&(t.flags|=128,s=!0,Co(i,!1),t.lanes=4194304)}else{if(!s)if(e=au(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),Co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Kt)return Se(t),null}else 2*Vn()-i.renderingStartTime>hu&&n!==536870912&&(t.flags|=128,s=!0,Co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,n=Ie.current,_e(Ie,s?n&1|2:n&1),Kt&&$i(t,i.treeForkCount),e):(Se(t),null);case 22:case 23:return Bn(t),tm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),as(Ge),Se(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function aE(e,t){switch(Jp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return as(Ge),Tr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(tt(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ie),null;case 4:return Tr(),null;case 10:return as(t.type),null;case 22:case 23:return Bn(t),tm(),e!==null&&$e(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return as(Ge),null;case 25:return null;default:return null}}function Qy(e,t){switch(Jp(t),t.tag){case 3:as(Ge),Tr();break;case 26:case 27:case 5:Kc(t);break;case 4:Tr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:$e(Ie);break;case 10:as(t.type);break;case 22:case 23:Bn(t),tm(),e!==null&&$e(Ma);break;case 24:as(Ge)}}function _l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ce(t,t.return,o)}}function Ys(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ce(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ce(t,t.return,f)}}function jy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{oy(t,n)}catch(i){ce(e,e.return,i)}}}function $y(e,t,n){n.props=Ra(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Xo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ce(e,t,s)}}function Ii(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(e,t,s)}else n.current=null}function tx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(e,e.return,s)}}function Cd(e,t,n){try{var i=e.stateNode;TE(i,e.type,n,t),i[Un]=t}catch(s){ce(e,e.return,s)}}function ex(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ks(e.type)||e.tag===4}function Rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ex(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ks(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(i!==4&&(i===27&&Ks(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(vp(e,t,n),e=e.sibling;e!==null;)vp(e,t,n),e=e.sibling}function uu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ks(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}function nx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);on(t,i,n),t[sn]=e,t[Un]=n}catch(a){ce(e,e.return,a)}}var ts=!1,Ve=!1,Dd=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function rE(e,t){if(e=e.containerInfo,Ep=Su,e=k_(e),Wp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tp={focusedElem:e,selectionRange:n},Su=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var g=Ra(n.type,s);e=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){ce(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ix(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Qi(e,n),i&4&&_l(5,n);break;case 1:if(Qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ce(n,n.return,r)}else{var s=Ra(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ce(n,n.return,r)}}i&64&&jy(n),i&512&&Xo(n,n.return);break;case 3:if(Qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{oy(e,t)}catch(r){ce(n,n.return,r)}}break;case 27:t===null&&i&4&&nx(n);case 26:case 5:Qi(e,n),t===null&&i&4&&tx(n),i&512&&Xo(n,n.return);break;case 12:Qi(e,n);break;case 31:Qi(e,n),i&4&&rx(e,n);break;case 13:Qi(e,n),i&4&&ox(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mE.bind(null,n),NE(e,n))));break;case 22:if(i=n.memoizedState!==null||ts,!i){t=t!==null&&t.memoizedState!==null||Ve,s=ts;var a=Ve;ts=i,(Ve=t)&&!a?ji(e,n,(n.subtreeFlags&8772)!==0):Qi(e,n),ts=s,Ve=a}break;case 30:break;default:Qi(e,n)}}function sx(e){var t=e.alternate;t!==null&&(e.alternate=null,sx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Cn=!1;function Ki(e,t,n){for(n=n.child;n!==null;)ax(e,t,n),n=n.sibling}function ax(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 26:Ve||Ii(n,t),Ki(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ii(n,t);var i=Ce,s=Cn;Ks(n.type)&&(Ce=n.stateNode,Cn=!1),Ki(e,t,n),Jo(n.stateNode),Ce=i,Cn=s;break;case 5:Ve||Ii(n,t);case 6:if(i=Ce,s=Cn,Ce=null,Ki(e,t,n),Ce=i,Cn=s,Ce!==null)if(Cn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(a){ce(n,t,a)}else try{Ce.removeChild(n.stateNode)}catch(a){ce(n,t,a)}break;case 18:Ce!==null&&(Cn?(e=Ce,Kv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Or(e)):Kv(Ce,n.stateNode));break;case 4:i=Ce,s=Cn,Ce=n.stateNode.containerInfo,Cn=!0,Ki(e,t,n),Ce=i,Cn=s;break;case 0:case 11:case 14:case 15:Ys(2,n,t),Ve||Ys(4,n,t),Ki(e,t,n);break;case 1:Ve||(Ii(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$y(n,t,i)),Ki(e,t,n);break;case 21:Ki(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Ki(e,t,n),Ve=i;break;default:Ki(e,t,n)}}function rx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Or(e)}catch(n){ce(t,t.return,n)}}}function ox(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Or(e)}catch(n){ce(t,t.return,n)}}function oE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ov),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ov),t;default:throw Error(tt(435,e.tag))}}function wc(e,t){var n=oE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=gE.bind(null,e,i);i.then(s,s)}})}function An(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ks(o.type)){Ce=o.stateNode,Cn=!1;break t}break;case 5:Ce=o.stateNode,Cn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,Cn=!0;break t}o=o.return}if(Ce===null)throw Error(tt(160));ax(a,r,s),Ce=null,Cn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lx(t,e),t=t.sibling}var gi=null;function lx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:An(t,e),wn(e),i&4&&(Ys(3,e,e.return),_l(3,e),Ys(5,e,e.return));break;case 1:An(t,e),wn(e),i&512&&(Ve||n===null||Ii(n,n.return)),i&64&&ts&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=gi;if(An(t,e),wn(e),i&512&&(Ve||n===null||Ii(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[pl]||a[sn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),on(a,i,n),a[sn]=e,je(a),i=a;break t;case"link":var r=i_("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),on(a,i,n),s.head.appendChild(a);break;case"meta":if(r=i_("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),on(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[sn]=e,je(a),i=a}e.stateNode=i}else s_(s,e.type,e.stateNode);else e.stateNode=n_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?s_(s,e.type,e.stateNode):n_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Cd(e,e.memoizedProps,n.memoizedProps)}break;case 27:An(t,e),wn(e),i&512&&(Ve||n===null||Ii(n,n.return)),n!==null&&i&4&&Cd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(An(t,e),wn(e),i&512&&(Ve||n===null||Ii(n,n.return)),e.flags&32){s=e.stateNode;try{wr(s,"")}catch(g){ce(e,e.return,g)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Cd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Dd=!0);break;case 6:if(An(t,e),wn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(g){ce(e,e.return,g)}}break;case 3:if(Xc=null,s=gi,gi=_u(t.containerInfo),An(t,e),gi=s,wn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(g){ce(e,e.return,g)}Dd&&(Dd=!1,cx(e));break;case 4:i=gi,gi=_u(e.stateNode.containerInfo),An(t,e),wn(e),gi=i;break;case 12:An(t,e),wn(e);break;case 31:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wc(e,i)));break;case 13:An(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Iu=Vn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ts,f=Ve;if(ts=c||s,Ve=f||l,An(t,e),Ve=f,ts=c,wn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ts||Ve||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(g){ce(l,l.return,g)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){ce(l,l.return,g)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?Qv(d,!0):Qv(l.stateNode,!1)}catch(g){ce(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,wc(e,n))));break;case 19:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,wc(e,i)));break;case 30:break;case 21:break;default:An(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ex(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=Rd(e);uu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(wr(r,""),n.flags&=-33);var o=Rd(e);uu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Rd(e);vp(e,c,l);break;default:throw Error(tt(161))}}catch(f){ce(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ix(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ys(4,t,t.return),ya(t);break;case 1:Ii(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$y(t,t.return,n),ya(t);break;case 27:Jo(t.stateNode);case 26:case 5:Ii(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(s,a,n),_l(4,a);break;case 1:if(ji(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)ry(l[s],o)}catch(c){ce(i,i.return,c)}}n&&r&64&&jy(a),Xo(a,a.return);break;case 27:nx(a);case 26:case 5:ji(s,a,n),n&&i===null&&r&4&&tx(a),Xo(a,a.return);break;case 12:ji(s,a,n);break;case 31:ji(s,a,n),n&&r&4&&rx(s,a);break;case 13:ji(s,a,n),n&&r&4&&ox(s,a);break;case 22:a.memoizedState===null&&ji(s,a,n),Xo(a,a.return);break;case 30:break;default:ji(s,a,n)}t=t.sibling}}function gm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gl(n))}function vm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e))}function mi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ux(e,t,n,i),t=t.sibling}function ux(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:mi(e,t,n,i),s&2048&&_l(9,t);break;case 1:mi(e,t,n,i);break;case 3:mi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e)));break;case 12:if(s&2048){mi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else mi(e,t,n,i);break;case 31:mi(e,t,n,i);break;case 13:mi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?mi(e,t,n,i):qo(e,t):a._visibility&2?mi(e,t,n,i):(a._visibility|=2,sr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&gm(r,t);break;case 24:mi(e,t,n,i),s&2048&&vm(t.alternate,t);break;default:mi(e,t,n,i)}}function sr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:sr(a,r,o,l,s),_l(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?sr(a,r,o,l,s):qo(a,r):(f._visibility|=2,sr(a,r,o,l,s)),s&&c&2048&&gm(r.alternate,r);break;case 24:sr(a,r,o,l,s),s&&c&2048&&vm(r.alternate,r);break;default:sr(a,r,o,l,s)}t=t.sibling}}function qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:qo(n,i),s&2048&&gm(i.alternate,i);break;case 24:qo(n,i),s&2048&&vm(i.alternate,i);break;default:qo(n,i)}t=t.sibling}}var Po=8192;function ir(e,t,n){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)hx(e,t,n),e=e.sibling}function hx(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&Po&&e.memoizedState!==null&&XE(n,gi,e.memoizedState,e.memoizedProps);break;case 5:ir(e,t,n);break;case 3:case 4:var i=gi;gi=_u(e.stateNode.containerInfo),ir(e,t,n),gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,ir(e,t,n),Po=i):ir(e,t,n));break;default:ir(e,t,n)}}function fx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ro(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,px(i,e)}fx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dx(e),e=e.sibling}function dx(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ys(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kc(e)):Ro(e);break;default:Ro(e)}}function kc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,px(i,e)}fx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ys(8,t,t.return),kc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,kc(t));break;default:kc(t)}e=e.sibling}}function px(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ys(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var s=i.sibling,a=i.return;if(sx(i),i===n){Qe=null;break t}if(s!==null){s.return=a,Qe=s;break t}Qe=a}}}var lE={getCacheForType:function(e){var t=rn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rn(Ge).controller.signal}},cE=typeof WeakMap=="function"?WeakMap:Map,ne=0,pe=null,Xt=null,Yt=0,le=0,Pn=null,Ns=!1,Vr=!1,_m=!1,hs=0,Ue=0,Zs=0,Ea=0,ym=0,Fn=0,Ur=0,Yo=null,Rn=null,_p=!1,Iu=0,mx=0,hu=1/0,fu=null,Vs=null,Xe=0,Gs=null,Lr=null,rs=0,yp=0,xp=null,gx=null,Zo=0,Sp=null;function kn(){return(ne&2)!==0&&Yt!==0?Yt&-Yt:Dt.T!==null?Sm():T_()}function vx(){if(Fn===0)if((Yt&536870912)===0||Kt){var e=vc;vc<<=1,(vc&3932160)===0&&(vc=262144),Fn=e}else Fn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Fn}function Dn(e,t,n){(e===pe&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Nr(e,0),Is(e,Yt,Fn,!1)),dl(e,n),((ne&2)===0||e!==pe)&&(e===pe&&((ne&2)===0&&(Ea|=n),Ue===4&&Is(e,Yt,Fn,!1)),Bi(e))}function _x(e,t,n){if((ne&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||fl(e,t),s=i?fE(e,t):Ud(e,t,!0),a=i;do{if(s===0){Vr&&!i&&Is(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!uE(n)){s=Ud(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Nr(o,r).flags|=256),r=Ud(o,r,!1),r!==2){if(_m&&!l){o.errorRecoveryDisabledLanes|=a,Ea|=a,s=4;break t}a=Rn,Rn=s,a!==null&&(Rn===null?Rn=a:Rn.push.apply(Rn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Nr(e,0),Is(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Is(i,t,Fn,!Ns);break t;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=Iu+300-Vn(),10<s)){if(Is(i,t,Fn,!Ns),bu(i,0,!0)!==0)break t;rs=t,i.timeoutHandle=zx(Pv.bind(null,i,n,Rn,fu,_p,t,Fn,Ea,Ur,Ns,a,"Throttled",-0,0),s);break t}Pv(i,n,Rn,fu,_p,t,Fn,Ea,Ur,Ns,a,null,-0,0)}}break}while(!0);Bi(e)}function Pv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ns},hx(t,a,p);var g=(a&62914560)===a?Iu-Vn():(a&4194048)===a?mx-Vn():0;if(g=qE(p,g),g!==null){rs=a,e.cancelPendingCommit=g(zv.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Is(e,a,r,!c);return}}zv(e,t,a,n,i,s,r,o,l)}function uE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Wn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Is(e,t,n,i){t&=~ym,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Hn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&M_(e,n,t)}function Ou(){return(ne&6)===0?(yl(0,!1),!1):!0}function xm(){if(Xt!==null){if(le===0)var e=Xt.return;else e=Xt,is=Ia=null,am(e),Mr=null,nl=0,e=Xt;for(;e!==null;)Qy(e.alternate,e),e=e.return;Xt=null}}function Nr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,CE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rs=0,xm(),pe=e,Xt=n=ss(e.current,null),Yt=t,le=0,Pn=null,Ns=!1,Vr=fl(e,t),_m=!1,Ur=Fn=ym=Ea=Zs=Ue=0,Rn=Yo=null,_p=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Hn(i),a=1<<s;t|=e[s],i&=~a}return hs=t,wu(),n}function yx(e,t){Bt=null,Dt.H=sl,t===Fr||t===Ru?(t=pv(),le=3):t===jp?(t=pv(),le=4):le=t===pm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pn=t,Xt===null&&(Ue=1,lu(e,si(t,e.current)))}function xx(){var e=Xn.current;return e===null?!0:(Yt&4194048)===Yt?ri===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?e===ri:!1}function Sx(){var e=Dt.H;return Dt.H=sl,e===null?sl:e}function Mx(){var e=Dt.A;return Dt.A=lE,e}function du(){Ue=4,Ns||(Yt&4194048)!==Yt&&Xn.current!==null||(Vr=!0),(Zs&134217727)===0&&(Ea&134217727)===0||pe===null||Is(pe,Yt,Fn,!1)}function Ud(e,t,n){var i=ne;ne|=2;var s=Sx(),a=Mx();(pe!==e||Yt!==t)&&(fu=null,Nr(e,t)),t=!1;var r=Ue;t:do try{if(le!==0&&Xt!==null){var o=Xt,l=Pn;switch(le){case 8:xm(),r=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=le;if(le=0,Pn=null,vr(e,o,l,c),n&&Vr){r=0;break t}break;default:c=le,le=0,Pn=null,vr(e,o,l,c)}}hE(),r=Ue;break}catch(f){yx(e,f)}while(!0);return t&&e.shellSuspendCounter++,is=Ia=null,ne=i,Dt.H=s,Dt.A=a,Xt===null&&(pe=null,Yt=0,wu()),r}function hE(){for(;Xt!==null;)bx(Xt)}function fE(e,t){var n=ne;ne|=2;var i=Sx(),s=Mx();pe!==e||Yt!==t?(fu=null,hu=Vn()+500,Nr(e,t)):Vr=fl(e,t);t:do try{if(le!==0&&Xt!==null){t=Xt;var a=Pn;e:switch(le){case 1:le=0,Pn=null,vr(e,t,a,1);break;case 2:case 9:if(dv(a)){le=0,Pn=null,Bv(t);break}t=function(){le!==2&&le!==9||pe!==e||(le=7),Bi(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:dv(a)?(le=0,Pn=null,Bv(t)):(le=0,Pn=null,vr(e,t,a,7));break;case 5:var r=null;switch(Xt.tag){case 26:r=Xt.memoizedState;case 5:case 27:var o=Xt;if(r?kx(r):o.stateNode.complete){le=0,Pn=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,Pu(c)):Xt=null}break e}}le=0,Pn=null,vr(e,t,a,5);break;case 6:le=0,Pn=null,vr(e,t,a,6);break;case 8:xm(),Ue=6;break t;default:throw Error(tt(462))}}dE();break}catch(f){yx(e,f)}while(!0);return is=Ia=null,Dt.H=i,Dt.A=s,ne=n,Xt!==null?0:(pe=null,Yt=0,wu(),Ue)}function dE(){for(;Xt!==null&&!Pb();)bx(Xt)}function bx(e){var t=Ky(e.alternate,e,hs);e.memoizedProps=e.pendingProps,t===null?Pu(e):Xt=t}function Bv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dv(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=Dv(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:am(t);default:Qy(n,t),t=Xt=Q_(t,hs),t=Ky(n,t,hs)}e.memoizedProps=e.pendingProps,t===null?Pu(e):Xt=t}function vr(e,t,n,i){is=Ia=null,am(t),Mr=null,nl=0;var s=t.return;try{if(eE(e,s,t,n,Yt)){Ue=1,lu(e,si(n,e.current)),Xt=null;return}}catch(a){if(s!==null)throw Xt=s,a;Ue=1,lu(e,si(n,e.current)),Xt=null;return}t.flags&32768?(Kt||i===1?e=!0:Vr||(Yt&536870912)!==0?e=!1:(Ns=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ex(t,e)):Pu(t)}function Pu(e){var t=e;do{if((t.flags&32768)!==0){Ex(t,Ns);return}e=t.return;var n=sE(t.alternate,t,hs);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Ue===0&&(Ue=5)}function Ex(e,t){do{var n=aE(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Ue=6,Xt=null}function zv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Bu();while(Xe!==0);if((ne&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=Xp,qb(e,n,a,r,o,l),e===pe&&(Xt=pe=null,Yt=0),Lr=t,Gs=e,rs=n,yp=a,xp=s,gx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vE(Qc,function(){return Rx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ie.p,ie.p=2,r=ne,ne|=4;try{rE(e,t,n)}finally{ne=r,ie.p=s,Dt.T=i}}Xe=1,Tx(),Ax(),wx()}}function Tx(){if(Xe===1){Xe=0;var e=Gs,t=Lr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Dt.T,Dt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{lx(t,e);var a=Tp,r=k_(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&H_(o.ownerDocument.documentElement,o)){if(l!==null&&Wp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),g=o.textContent.length,b=Math.min(l.start,g),m=l.end===void 0?b:Math.min(l.end,g);!d.extend&&b>m&&(r=m,m=b,b=r);var h=rv(o,b),v=rv(o,m);if(h&&v&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==v.node||d.focusOffset!==v.offset)){var M=p.createRange();M.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(M),d.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Su=!!Ep,Tp=Ep=null}finally{ne=s,ie.p=i,Dt.T=n}}e.current=t,Xe=2}}function Ax(){if(Xe===2){Xe=0;var e=Gs,t=Lr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{ix(e,t.alternate,t)}finally{ne=s,ie.p=i,Dt.T=n}}Xe=3}}function wx(){if(Xe===4||Xe===3){Xe=0,Bb();var e=Gs,t=Lr,n=rs,i=gx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Lr=Gs=null,Cx(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Vs=null),Bp(n),t=t.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Dt.T,s=ie.p,ie.p=2,Dt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Dt.T=t,ie.p=s}}(rs&3)!==0&&Bu(),Bi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Sp?Zo++:(Zo=0,Sp=e):Zo=0,yl(0,!1)}}function Cx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gl(t)))}function Bu(){return Tx(),Ax(),wx(),Rx()}function Rx(){if(Xe!==5)return!1;var e=Gs,t=yp;yp=0;var n=Bp(rs),i=Dt.T,s=ie.p;try{ie.p=32>n?32:n,Dt.T=null,n=xp,xp=null;var a=Gs,r=rs;if(Xe=0,Lr=Gs=null,rs=0,(ne&6)!==0)throw Error(tt(331));var o=ne;if(ne|=4,dx(a.current),ux(a,a.current,r,n),ne=o,yl(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(hl,a)}catch{}return!0}finally{ie.p=s,Dt.T=i,Cx(e,t)}}function Fv(e,t,n){t=si(n,t),t=pp(e.stateNode,t,2),e=Fs(e,t,2),e!==null&&(dl(e,2),Bi(e))}function ce(e,t,n){if(e.tag===3)Fv(e,e,n);else for(;t!==null;){if(t.tag===3){Fv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vs===null||!Vs.has(i))){e=si(n,e),n=Wy(2),i=Fs(t,n,2),i!==null&&(Xy(n,i,t,e),dl(i,2),Bi(i));break}}t=t.return}}function Ld(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(_m=!0,s.add(n),e=pE.bind(null,e,t,n),t.then(e,e))}function pE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(Yt&n)===n&&(Ue===4||Ue===3&&(Yt&62914560)===Yt&&300>Vn()-Iu?(ne&2)===0&&Nr(e,0):ym|=n,Ur===Yt&&(Ur=0)),Bi(e)}function Dx(e,t){t===0&&(t=S_()),e=Na(e,t),e!==null&&(dl(e,t),Bi(e))}function mE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dx(e,n)}function gE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),Dx(e,n)}function vE(e,t){return Op(e,t)}var pu=null,ar=null,Mp=!1,mu=!1,Nd=!1,Os=0;function Bi(e){e!==ar&&e.next===null&&(ar===null?pu=ar=e:ar=ar.next=e),mu=!0,Mp||(Mp=!0,yE())}function yl(e,t){if(!Nd&&mu){Nd=!0;do for(var n=!1,i=pu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Hn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Vv(i,a))}else a=Yt,a=bu(i,i===pe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||fl(i,a)||(n=!0,Vv(i,a));i=i.next}while(n);Nd=!1}}function _E(){Ux()}function Ux(){mu=Mp=!1;var e=0;Os!==0&&wE()&&(e=Os);for(var t=Vn(),n=null,i=pu;i!==null;){var s=i.next,a=Lx(i,t);a===0?(i.next=null,n===null?pu=s:n.next=s,s===null&&(ar=n)):(n=i,(e!==0||(a&3)!==0)&&(mu=!0)),i=s}Xe!==0&&Xe!==5||yl(e,!1),Os!==0&&(Os=0)}function Lx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Hn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Xb(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=pe,n=Yt,n=bu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ld(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ld(i),Bp(n)){case 2:case 8:n=y_;break;case 32:n=Qc;break;case 268435456:n=x_;break;default:n=Qc}return i=Nx.bind(null,e),n=Op(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ld(i),e.callbackPriority=2,e.callbackNode=null,2}function Nx(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var i=Yt;return i=bu(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(_x(e,i,t),Lx(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?Nx.bind(null,e):null)}function Vv(e,t){if(Bu())return null;_x(e,t,!0)}function yE(){RE(function(){(ne&6)!==0?Op(__,_E):Ux()})}function Sm(){if(Os===0){var e=Cr;e===0&&(e=gc,gc<<=1,(gc&261888)===0&&(gc=256)),Os=e}return Os}function Gv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ic(""+e)}function Hv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function xE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Gv((s[Un]||null).action),r=i.submitter;r&&(t=(t=r[Un]||null)?Gv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Eu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Os!==0){var l=r?Hv(s,r):new FormData(s);fp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Hv(s,r):new FormData(s),fp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Cc=0;Cc<tp.length;Cc++)Rc=tp[Cc],kv=Rc.toLowerCase(),Wv=Rc[0].toUpperCase()+Rc.slice(1),vi(kv,"on"+Wv);var Rc,kv,Wv,Cc;vi(X_,"onAnimationEnd");vi(q_,"onAnimationIteration");vi(Y_,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(z1,"onTransitionRun");vi(F1,"onTransitionStart");vi(V1,"onTransitionCancel");vi(Z_,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Da("onBeforeInput",["compositionend","keypress","textInput","paste"]);Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Ix(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){$c(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){$c(f)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[qd];n===void 0&&(n=t[qd]=new Set);var i=e+"__bubble";n.has(i)||(Ox(t,e,2,!1),n.add(i))}function Id(e,t,n){var i=0;t&&(i|=4),Ox(n,e,i,t)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Mm(e){if(!e[Dc]){e[Dc]=!0,A_.forEach(function(n){n!=="selectionchange"&&(SE.has(n)||Id(n,!1,e),Id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dc]||(t[Dc]=!0,Id("selectionchange",!1,t))}}function Ox(e,t,n,i){switch(Zx(t)){case 2:var s=JE;break;case 8:s=KE;break;default:s=Am}n=s.bind(null,t,n,e),s=void 0,!Qd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Od(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=lr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}I_(function(){var c=a,f=Vp(n),p=[];t:{var u=J_.get(e);if(u!==void 0){var d=Eu,g=e;switch(e){case"keypress":if(Pc(n)===0)break t;case"keydown":case"keyup":d=g1;break;case"focusin":g="focus",d=dd;break;case"focusout":g="blur",d=dd;break;case"beforeblur":case"afterblur":d=dd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=y1;break;case X_:case q_:case Y_:d=o1;break;case Z_:d=S1;break;case"scroll":case"scrollend":d=n1;break;case"wheel":d=b1;break;case"copy":case"cut":case"paste":d=c1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=$0;break;case"toggle":case"beforetoggle":d=T1}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var v=c,M;v!==null;){var y=v;if(M=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||M===null||h===null||(y=Qo(v,h),y!=null&&b.push(rl(v,y,M))),m)break;v=v.return}0<b.length&&(u=new d(u,g,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Kd&&(g=n.relatedTarget||n.fromElement)&&(lr(g)||g[Pr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=c,g=g?lr(g):null,g!==null&&(m=ul(g),b=g.tag,g!==m||b!==5&&b!==27&&b!==6)&&(g=null)):(d=null,g=c),d!==g)){if(b=Q0,y="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(b=$0,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=d==null?u:Io(d),M=g==null?u:Io(g),u=new b(y,v+"leave",d,n,f),u.target=m,u.relatedTarget=M,y=null,lr(f)===c&&(b=new b(h,v+"enter",g,n,f),b.target=M,b.relatedTarget=m,y=b),m=y,d&&g)e:{for(b=ME,h=d,v=g,M=0,y=h;y;y=b(y))M++;y=0;for(var E=v;E;E=b(E))y++;for(;0<M-y;)h=b(h),M--;for(;0<y-M;)v=b(v),y--;for(;M--;){if(h===v||v!==null&&h===v.alternate){b=h;break e}h=b(h),v=b(v)}b=null}else b=null;d!==null&&Xv(p,u,d,b,!1),g!==null&&m!==null&&Xv(p,m,g,b,!0)}}t:{if(u=c?Io(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=iv;else if(nv(u))if(V_)T=O1;else{T=N1;var w=L1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Fp(c.elementType)&&(T=iv):T=I1;if(T&&(T=T(e,c))){F_(p,T,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Jd(u,"number",u.value)}switch(w=c?Io(c):window,e){case"focusin":(nv(w)||w.contentEditable==="true")&&(hr=w,jd=c,Fo=null);break;case"focusout":Fo=jd=hr=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,ov(p,n,f);break;case"selectionchange":if(B1)break;case"keydown":case"keyup":ov(p,n,f)}var x;if(kp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else ur?B_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(P_&&n.locale!=="ko"&&(ur||A!=="onCompositionStart"?A==="onCompositionEnd"&&ur&&(x=O_()):(Ls=f,Gp="value"in Ls?Ls.value:Ls.textContent,ur=!0)),w=gu(c,A),0<w.length&&(A=new j0(A,e,null,n,f),p.push({event:A,listeners:w}),x?A.data=x:(x=z_(n),x!==null&&(A.data=x)))),(x=w1?C1(e,n):R1(e,n))&&(A=gu(c,"onBeforeInput"),0<A.length&&(w=new j0("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:A}),w.data=x)),xE(p,e,c,n,f)}Ix(p,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Qo(e,n),s!=null&&i.unshift(rl(e,s,a)),s=Qo(e,t),s!=null&&i.push(rl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function ME(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Qo(n,a),c!=null&&r.unshift(rl(n,c,l))):s||(c=Qo(n,a),c!=null&&r.push(rl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var bE=/\r\n?/g,EE=/\u0000|\uFFFD/g;function qv(e){return(typeof e=="string"?e:""+e).replace(bE,`
`).replace(EE,"")}function Px(e,t){return t=qv(t),qv(e)===t}function he(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||wr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&wr(e,""+i);break;case"className":yc(e,"class",i);break;case"tabIndex":yc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yc(e,n,i);break;case"style":N_(e,i,a);break;case"data":if(t!=="object"){yc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ic(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",s.name,s,null),he(e,t,"formEncType",s.formEncType,s,null),he(e,t,"formMethod",s.formMethod,s,null),he(e,t,"formTarget",s.formTarget,s,null)):(he(e,t,"encType",s.encType,s,null),he(e,t,"method",s.method,s,null),he(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ic(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ns);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ic(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),Nc(e,"popover",i);break;case"xlinkActuate":Zi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Zi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Zi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Zi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Zi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Zi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Nc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=t1.get(n)||n,Nc(e,n,i))}}function bp(e,t,n,i,s,a){switch(n){case"style":N_(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?wr(e,i):(typeof i=="number"||typeof i=="bigint")&&wr(e,""+i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Un]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Nc(e,n,i)}}}function on(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:he(e,t,a,r,n,null)}}s&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:he(e,t,i,f,n,null)}}D_(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?yr(e,!!i,t,!1):n!=null&&yr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:he(e,t,r,o,n,null)}L_(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(e,t,l,i,n,null)}return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<al.length;i++)Wt(al[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:he(e,t,c,i,n,null)}return;default:if(Fp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&bp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}function TE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||he(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==p&&he(e,t,u,d,i,p)}}Zd(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||he(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&he(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?yr(e,!!n,u,!1):!!i!=!!n&&(t!=null?yr(e,!!n,t,!0):yr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&he(e,t,r,s,i,a)}U_(e,u,d);return;case"option":for(var g in n)if(u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:he(e,t,g,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:he(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&he(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:he(e,t,c,u,i,d)}return;default:if(Fp(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&bp(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||bp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&he(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||he(e,t,p,u,i,d)}function Yv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Yv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Yv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ep=null,Tp=null;function vu(e){return e.nodeType===9?e:e.ownerDocument}function Zv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ap(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pd=null;function wE(){var e=window.event;return e&&e.type==="popstate"?e===Pd?!1:(Pd=e,!0):(Pd=null,!1)}var zx=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(e){return Jv.resolve(null).then(e).catch(DE)}:zx;function DE(e){setTimeout(function(){throw e})}function Ks(e){return e==="head"}function Kv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Or(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Jo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Jo(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[pl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Jo(e.ownerDocument.body);n=s}while(n);Or(t)}function Qv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function wp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wp(n),zp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function UE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function LE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Fx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=oi(e.nextSibling),e===null))return null;return e}function Cp(e){return e.data==="$?"||e.data==="$~"}function Rp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function oi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dp=null;function jv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return oi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $v(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Vx(e,t,n){switch(t=vu(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function Jo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zp(e)}var li=new Map,t_=new Set;function _u(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fs=ie.d;ie.d={f:IE,r:OE,D:PE,C:BE,L:zE,m:FE,X:GE,S:VE,M:HE};function IE(){var e=fs.f(),t=Ou();return e||t}function OE(e){var t=Br(e);t!==null&&t.tag===5&&t.type==="form"?Ny(t):fs.r(e)}var Gr=typeof document>"u"?null:document;function Gx(e,t,n){var i=Gr;if(i&&typeof t=="string"&&t){var s=ii(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),t_.has(s)||(t_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),on(t,"link",e),je(t),i.head.appendChild(t)))}}function PE(e){fs.D(e),Gx("dns-prefetch",e,null)}function BE(e,t){fs.C(e,t),Gx("preconnect",e,t)}function zE(e,t,n){fs.L(e,t,n);var i=Gr;if(i&&e&&t){var s='link[rel="preload"][as="'+ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ii(n.imageSizes)+'"]')):s+='[href="'+ii(e)+'"]';var a=s;switch(t){case"style":a=Ir(e);break;case"script":a=Hr(e)}li.has(a)||(e=be({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),li.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(xl(a))||t==="script"&&i.querySelector(Sl(a))||(t=i.createElement("link"),on(t,"link",e),je(t),i.head.appendChild(t)))}}function FE(e,t){fs.m(e,t);var n=Gr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ii(i)+'"][href="'+ii(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Hr(e)}if(!li.has(a)&&(e=be({rel:"modulepreload",href:e},t),li.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(a)))return}i=n.createElement("link"),on(i,"link",e),je(i),n.head.appendChild(i)}}}function VE(e,t,n){fs.S(e,t,n);var i=Gr;if(i&&e){var s=_r(i).hoistableStyles,a=Ir(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(xl(a)))o.loading=5;else{e=be({rel:"stylesheet",href:e,"data-precedence":t},n),(n=li.get(a))&&bm(e,n);var l=r=i.createElement("link");je(l),on(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Wc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function GE(e,t){fs.X(e,t);var n=Gr;if(n&&e){var i=_r(n).hoistableScripts,s=Hr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=be({src:e,async:!0},t),(t=li.get(s))&&Em(e,t),a=n.createElement("script"),je(a),on(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function HE(e,t){fs.M(e,t);var n=Gr;if(n&&e){var i=_r(n).hoistableScripts,s=Hr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=be({src:e,async:!0,type:"module"},t),(t=li.get(s))&&Em(e,t),a=n.createElement("script"),je(a),on(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function e_(e,t,n,i){var s=(s=Ps.current)?_u(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ir(n.href),n=_r(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ir(n.href);var a=_r(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(xl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),li.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},li.set(e,n),a||kE(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hr(n),n=_r(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Ir(e){return'href="'+ii(e)+'"'}function xl(e){return'link[rel="stylesheet"]['+e+"]"}function Hx(e){return be({},e,{"data-precedence":e.precedence,precedence:null})}function kE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),on(t,"link",n),je(t),e.head.appendChild(t))}function Hr(e){return'[src="'+ii(e)+'"]'}function Sl(e){return"script[async]"+e}function n_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ii(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),on(i,"style",s),Wc(i,n.precedence,e),t.instance=i;case"stylesheet":s=Ir(n.href);var a=e.querySelector(xl(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=Hx(n),(s=li.get(s))&&bm(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(a,"link",i),t.state.loading|=4,Wc(a,n.precedence,e),t.instance=a;case"script":return a=Hr(n.src),(s=e.querySelector(Sl(a)))?(t.instance=s,je(s),s):(i=n,(s=li.get(a))&&(i=be({},n),Em(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),on(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Wc(i,n.precedence,e));return t.instance}function Wc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Em(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xc=null;function i_(e,t,n){if(Xc===null){var i=new Map,s=Xc=new Map;s.set(n,i)}else s=Xc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[pl]||a[sn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function s_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function WE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function XE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Ir(i.href),a=t.querySelector(xl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=yu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=Hx(i),(s=li.get(s))&&bm(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),on(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=yu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bd=0;function qE(e,t){return e.stylesheets&&e.count===0&&qc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Bd===0&&(Bd=62500*AE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Bd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function yu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function qc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(YE,e),xu=null,yu.call(e))}function YE(e,t){if(!(t.state.loading&4)){var n=xu.get(e);if(n)var i=n.get(null);else{n=new Map,xu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=yu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ol={$$typeof:es,Provider:null,Consumer:null,_currentValue:xa,_currentValue2:xa,_threadCount:0};function ZE(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.hiddenUpdates=cd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Wx(e,t,n,i,s,a,r,o,l,c,f,p){return e=new ZE(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=zn(3,null,null,t),e.current=a,a.stateNode=e,t=Kp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},$p(a),e}function Xx(e){return e?(e=pr,e):pr}function qx(e,t,n,i,s,a){s=Xx(s),i.context===null?i.context=s:i.pendingContext=s,i=zs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Fs(e,i,t),n!==null&&(Dn(n,e,t),Go(n,e,t))}function a_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tm(e,t){a_(e,t),(e=e.alternate)&&a_(e,t)}function Yx(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&Dn(t,e,67108864),Tm(e,67108864)}}function r_(e){if(e.tag===13||e.tag===31){var t=kn();t=Pp(t);var n=Na(e,t);n!==null&&Dn(n,e,t),Tm(e,t)}}var Su=!0;function JE(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=2,Am(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function KE(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=8,Am(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function Am(e,t,n,i){if(Su){var s=Up(i);if(s===null)Od(e,t,i,Mu,n),o_(e,i);else if(jE(s,e,t,n,i))i.stopPropagation();else if(o_(e,i),t&4&&-1<QE.indexOf(e)){for(;s!==null;){var a=Br(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=va(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Hn(r);o.entanglements[1]|=l,r&=~l}Bi(a),(ne&6)===0&&(hu=Vn()+500,yl(0,!1))}}break;case 31:case 13:o=Na(a,2),o!==null&&Dn(o,a,2),Ou(),Tm(a,2)}if(a=Up(i),a===null&&Od(e,t,i,Mu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Od(e,t,i,null,n)}}function Up(e){return e=Vp(e),wm(e)}var Mu=null;function wm(e){if(Mu=null,e=lr(e),e!==null){var t=ul(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d_(t),e!==null)return e;e=null}else if(n===31){if(e=p_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mu=e,null}function Zx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zb()){case __:return 2;case y_:return 8;case Qc:case Fb:return 32;case x_:return 268435456;default:return 32}default:return 32}}var Lp=!1,Hs=null,ks=null,Ws=null,ll=new Map,cl=new Map,Ds=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,t){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Ws=null;break;case"pointerover":case"pointerout":ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(t.pointerId)}}function Do(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Br(t),t!==null&&Yx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function jE(e,t,n,i,s){switch(t){case"focusin":return Hs=Do(Hs,e,t,n,i,s),!0;case"dragenter":return ks=Do(ks,e,t,n,i,s),!0;case"mouseover":return Ws=Do(Ws,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ll.set(a,Do(ll.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,cl.set(a,Do(cl.get(a)||null,e,t,n,i,s)),!0}return!1}function Jx(e){var t=lr(e.target);if(t!==null){var n=ul(t);if(n!==null){if(t=n.tag,t===13){if(t=d_(n),t!==null){e.blockedOn=t,W0(e.priority,function(){r_(n)});return}}else if(t===31){if(t=p_(n),t!==null){e.blockedOn=t,W0(e.priority,function(){r_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Up(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kd=i,n.target.dispatchEvent(i),Kd=null}else return t=Br(n),t!==null&&Yx(t),e.blockedOn=n,!1;t.shift()}return!0}function l_(e,t,n){Yc(e)&&n.delete(t)}function $E(){Lp=!1,Hs!==null&&Yc(Hs)&&(Hs=null),ks!==null&&Yc(ks)&&(ks=null),Ws!==null&&Yc(Ws)&&(Ws=null),ll.forEach(l_),cl.forEach(l_)}function Uc(e,t){e.blockedOn===t&&(e.blockedOn=null,Lp||(Lp=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,$E)))}var Lc=null;function c_(e){Lc!==e&&(Lc=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(wm(i||n)===null)continue;break}var a=Br(n);a!==null&&(e.splice(t,3),t-=3,fp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Or(e){function t(l){return Uc(l,e)}Hs!==null&&Uc(Hs,e),ks!==null&&Uc(ks,e),Ws!==null&&Uc(Ws,e),ll.forEach(t),cl.forEach(t);for(var n=0;n<Ds.length;n++){var i=Ds[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ds.length&&(n=Ds[0],n.blockedOn===null);)Jx(n),n.blockedOn===null&&Ds.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Un]||null;if(typeof a=="function")r||c_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Un]||null)o=r.formAction;else if(wm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),c_(n)}}}function Kx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Cm(e){this._internalRoot=e}zu.prototype.render=Cm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=kn();qx(n,i,e,t,null,null)};zu.prototype.unmount=Cm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qx(e.current,2,null,e,null,null),Ou(),t[Pr]=null}};function zu(e){this._internalRoot=e}zu.prototype.unstable_scheduleHydration=function(e){if(e){var t=T_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ds.length&&t!==0&&t<Ds[n].priority;n++);Ds.splice(n,0,e),n===0&&Jx(e)}};var u_=h_.version;if(u_!=="19.2.0")throw Error(tt(527,u_,"19.2.0"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=Ub(t),e=e!==null?m_(e):null,e=e===null?null:e.stateNode,e};var tT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Uo.isDisabled&&Uo.supportsFiber))try{hl=Uo.inject(tT),Gn=Uo}catch{}var Uo;Fu.createRoot=function(e,t){if(!f_(e))throw Error(tt(299));var n=!1,i="",s=Gy,a=Hy,r=ky;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Wx(e,1,!1,null,null,n,i,null,s,a,r,Kx),e[Pr]=t.current,Mm(e),new Cm(t)};Fu.hydrateRoot=function(e,t,n){if(!f_(e))throw Error(tt(299));var i=!1,s="",a=Gy,r=Hy,o=ky,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Wx(e,1,!0,t,n??null,i,s,l,a,r,o,Kx),t.context=Xx(null),n=t.current,i=kn(),i=Pp(i),s=zs(i),s.callback=null,Fs(n,s,i),n=i,t.current.lanes=n,dl(t,n),Bi(t),e[Pr]=t.current,Mm(e),new zu(t)};Fu.version="19.2.0"});var tS=Di((k2,$x)=>{"use strict";function jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx)}catch(e){console.error(e)}}jx(),$x.exports=Qx()});var aS=Di(Gu=>{"use strict";var nT=Symbol.for("react.transitional.element"),iT=Symbol.for("react.fragment");function sS(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:nT,type:e,key:i,ref:t!==void 0?t:null,props:n}}Gu.Fragment=iT;Gu.jsx=sS;Gu.jsxs=sS});var Ml=Di((Z2,rS)=>{"use strict";rS.exports=aS()});var oc=pa(xo()),ZM=pa(tS());var dn=pa(xo());function Rm(e,t){t=Math.min(1,Math.max(0,t));let n=Math.pow(1-Math.pow(1-t,4),1/4);switch(e){case"circle":return Math.sqrt(1-(1-t)*(1-t));case"lip":{let i=t*t*t*(t*(t*6-15)+10);return n*(1-i)+(1-n*.35)*i}default:return n}}function eT({bezel:e,thickness:t,ior:n,profile:i}){if(!Number.isFinite(e)||e<=0||!Number.isFinite(t)||t<0||!Number.isFinite(n)||n<=0)throw new RangeError("Glass optics require a finite positive bezel and ior, and a finite non-negative thickness");let s=new Float32Array(256),a=1/n,r=.001;for(let o=0;o<256;o++){let l=(o+.5)/256,c=Rm(i,l)*t,f=(Rm(i,l+r)-Rm(i,l-r))/(2*r)*(t/e),p=1/Math.hypot(f,1),u=-f*p,d=p,g=d,b=1-a*a*(1-g*g);if(b<0){s[o]=0;continue}let m=a*g-Math.sqrt(b),h=m*u,v=-a+m*d;s[o]=h/-v*c}return s}function Dm(e,t,n,i,s,a){let r=n/2,o=i/2,l=e-r,c=t-o,f=l<0?-1:1,p=c<0?-1:1,u=Math.abs(l)-(r-s),d=Math.abs(c)-(o-s);if(u>0&&d>0){let g=Math.hypot(u,d);a.dist=s-g,a.nx=f*u/g,a.ny=p*d/g}else u>d?(a.dist=s-u,a.nx=f,a.ny=0):(a.dist=s-d,a.nx=0,a.ny=p)}function Um(e){let t=Math.max(1,Math.round(e.width)),n=Math.max(1,Math.round(e.height));return{width:t,height:n,radius:Math.min(e.radius,t/2,n/2)}}function eS(e,t){let{width:n,height:i,radius:s}=Um(e),a=Math.max(1,Math.min(t.bezel,n/2,i/2)),r=eT({...t,bezel:a}),o=0;for(let f=0;f<r.length;f++)o=Math.max(o,Math.abs(r[f]));o=o||1;let l=new Uint8ClampedArray(n*i*4),c={dist:0,nx:0,ny:0};for(let f=0;f<i;f++)for(let p=0;p<n;p++){let u=(f*n+p)*4;Dm(p+.5,f+.5,n,i,s,c);let d=0,g=0;if(c.dist>=0&&c.dist<a){let b=r[Math.min(255,Math.floor(c.dist/a*256))]/o;d=-c.nx*b,g=-c.ny*b}l[u]=128+d*127,l[u+1]=128+g*127,l[u+2]=128,l[u+3]=255}return{data:l,width:n,height:i,scale:o*2}}function nS(e,t,n=1){let{width:i,height:s,radius:a}=Um(e),r=Math.round(i*n),o=Math.round(s*n),l=new ImageData(r,o),c=l.data,f=Math.max(t.rimWidth*6,t.glowWidth*3.5),p=Math.cos(t.angle*Math.PI/180),u=Math.sin(t.angle*Math.PI/180),d={dist:0,nx:0,ny:0},g=Math.max(f,a)*n,b=f*n,m=o-f*n;for(let h=0;h<o;h++){let v=h>b&&h<m;for(let M=0;M<r;M++){if(v&&M>g&&M<r-g){M=Math.floor(r-g);continue}if(Dm((M+.5)/n,(h+.5)/n,i,s,a,d),d.dist<0||d.dist>f)continue;let y=d.nx*p+d.ny*u,E=Math.pow(Math.abs(y),1.6),T=y<0?E:E*.7,w=.3,x=Math.exp(-Math.pow(d.dist/t.rimWidth,2)),A=Math.exp(-Math.pow((d.dist-t.rimWidth*2.2)/t.rimWidth,2))*.35,R=Math.exp(-d.dist/t.glowWidth)*(.06+.3*T),I=Math.min(1,d.dist*n+.5),z=((x+A)*(w+T*.7)+R)*I,V=(h*r+M)*4;c[V]=c[V+1]=c[V+2]=255,c[V+3]=Math.min(255,z*255)}}return l}function Vu(e){let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d"),i=e instanceof ImageData?e:new ImageData(e.data,e.width,e.height);return n.putImageData(i,0,0),t.toDataURL("image/png")}function iS(e,t,n=1){let{width:i,height:s,radius:a}=Um(e);t=Math.max(1,Math.min(t,i/2,s/2));let r=Math.round(i*n),o=Math.round(s*n),l=new ImageData(r,o),c=l.data,f={dist:0,nx:0,ny:0};for(let p=0;p<o;p++)for(let u=0;u<r;u++){Dm((u+.5)/n,(p+.5)/n,i,s,a,f);let d=Math.min(1,Math.max(0,f.dist/t)),g=d*d*(3-2*d),b=(p*r+u)*4;c[b]=c[b+1]=c[b+2]=255,c[b+3]=(.25+.75*g)*255}return l}var Le=pa(Ml()),sT=typeof window<"u"?dn.useLayoutEffect:dn.useEffect,Hu;function aT(){if(Hu!==void 0)return Hu;if(typeof navigator>"u")return!1;let e=navigator.userAgent;return Hu=/Chrome\/\d+/.test(e)&&!/CriOS|FxiOS|EdgiOS/.test(e),Hu}var bl=new Map;function oS({children:e,radius:t=32,bezel:n,thickness:i,tint:s="light",ior:a=1.5,profile:r="squircle",refraction:o=1,dispersion:l=.06,blur:c=3,saturation:f=1.5,specular:p=1,lightAngle:u=-135,interactive:d=!1,className:g,style:b,onPointerDown:m,onPointerMove:h,onPointerUp:v,onPointerLeave:M,onPointerCancel:y,...E}){let T=(0,dn.useRef)(null),w="lg-"+(0,dn.useId)().replace(/[^a-zA-Z0-9_-]/g,""),[x,A]=(0,dn.useState)(null),[R,I]=(0,dn.useState)(!1),[z,V]=(0,dn.useState)(!1);sT(()=>{I(aT());let W=T.current;if(!W)return;let j=($t,Lt)=>{$t=Math.round($t),Lt=Math.round(Lt),A(zt=>zt&&zt.w===$t&&zt.h===Lt?zt:{w:$t,h:Lt})},_t=()=>j(W.offsetWidth,W.offsetHeight);_t();let xt=new ResizeObserver(_t);return xt.observe(W,{box:"border-box"}),()=>xt.disconnect()},[]);let U=(0,dn.useMemo)(()=>{if(!x||x.w<2||x.h<2)return null;let W=Math.min(x.w,x.h),j=n??Math.max(6,Math.min(W*.25,Math.min(t,W/2),56)),_t=i??j*1.5,xt=Math.min(2,typeof window<"u"&&window.devicePixelRatio||1),$t=[x.w,x.h,t,j,_t,a,r,u,xt].join("|"),Lt=bl.get($t);if(!Lt){let zt={width:x.w,height:x.h,radius:t},X=eS(zt,{bezel:j,thickness:_t,ior:a,profile:r}),et=nS(zt,{angle:u,rimWidth:1.2,glowWidth:Math.min(20,Math.max(4,j*.6))},xt);Lt={displacement:Vu(X),specular:Vu(et),mask:Vu(iS(zt,j,1)),scale:X.scale,width:X.width,height:X.height},bl.set($t,Lt),bl.size>64&&bl.delete(bl.keys().next().value)}return{...Lt,scale:Lt.scale*o}},[x,t,n,i,a,r,o,u]),G=(0,dn.useCallback)(W=>{let j=T.current;if(!j)return;let _t=j.getBoundingClientRect();j.style.setProperty("--lg-px",`${(W.clientX-_t.left)/_t.width*100}%`),j.style.setProperty("--lg-py",`${(W.clientY-_t.top)/_t.height*100}%`)},[]),K=R&&U!==null,Z=K?`blur(${c}px) url(#${w}) saturate(${f}) brightness(1.04)`:`blur(${Math.max(c,8)}px) saturate(${f}) brightness(1.05)`,it=U?.scale??0,q={...b,borderRadius:t,"--lg-specular-opacity":p,...s!=="light"&&s!=="dark"?{"--lg-tint":s}:null,backdropFilter:Z,WebkitBackdropFilter:Z};return(0,Le.jsxs)("div",{ref:T,className:["lg",s==="dark"&&"lg--dark",d&&"lg--interactive",z&&"lg--pressed",!K&&"lg--fallback",g].filter(Boolean).join(" "),style:q,onPointerDown:W=>{d&&(G(W),V(!0)),m?.(W)},onPointerMove:W=>{d&&G(W),h?.(W)},onPointerUp:W=>{V(!1),v?.(W)},onPointerLeave:W=>{V(!1),M?.(W)},onPointerCancel:W=>{V(!1),y?.(W)},...E,children:[(0,Le.jsx)("div",{className:"lg__tint",style:U?{maskImage:`url(${U.mask})`,WebkitMaskImage:`url(${U.mask})`}:void 0}),U&&(0,Le.jsx)("div",{className:"lg__specular",style:{backgroundImage:`url(${U.specular})`}}),(0,Le.jsx)("div",{className:"lg__glow"}),(0,Le.jsx)("div",{className:"lg__content",children:e}),K&&U&&(0,Le.jsx)("svg",{className:"lg__defs","aria-hidden":"true",focusable:"false",width:"0",height:"0",children:(0,Le.jsxs)("filter",{id:w,x:"0",y:"0",width:U.width,height:U.height,filterUnits:"userSpaceOnUse",primitiveUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,Le.jsx)("feImage",{href:U.displacement,x:"0",y:"0",width:U.width,height:U.height,preserveAspectRatio:"none",result:"map"}),l>0?(0,Le.jsxs)(Le.Fragment,{children:[(0,Le.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:it*(1+l),xChannelSelector:"R",yChannelSelector:"G",result:"dispR"}),(0,Le.jsx)("feColorMatrix",{in:"dispR",type:"matrix",values:"1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",result:"r"}),(0,Le.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:it,xChannelSelector:"R",yChannelSelector:"G",result:"dispG"}),(0,Le.jsx)("feColorMatrix",{in:"dispG",type:"matrix",values:"0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",result:"g"}),(0,Le.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:it*(1-l),xChannelSelector:"R",yChannelSelector:"G",result:"dispB"}),(0,Le.jsx)("feColorMatrix",{in:"dispB",type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",result:"b"}),(0,Le.jsx)("feComposite",{in:"r",in2:"g",operator:"arithmetic",k2:"1",k3:"1",result:"rg"}),(0,Le.jsx)("feComposite",{in:"rg",in2:"b",operator:"arithmetic",k2:"1",k3:"1"})]}):(0,Le.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:it,xChannelSelector:"R",yChannelSelector:"G"})]})})]})}var wS=0,rg=1,CS=2;var Yl=1,RS=2,ho=3,ca=0,En=1,fi=2,ki=0,fo=1,og=2,lg=3,cg=4,DS=5;var Wa=100,US=101,LS=102,NS=103,IS=104,OS=200,PS=201,BS=202,zS=203,ug=204,hg=205,FS=206,VS=207,GS=208,HS=209,kS=210,WS=211,XS=212,qS=213,YS=214,uh=0,hh=1,fh=2,io=3,dh=4,ph=5,mh=6,gh=7,fg=0,ZS=1,JS=2,Ei=0,dg=1,pg=2,mg=3,gg=4,vg=5,_g=6,yg=7;var xg=300,ua=301,Xa=302,Gh=303,Hh=304,Zl=306,vh=1e3,Fi=1001,_h=1002,en=1003,KS=1004;var Jl=1005;var Ye=1006,kh=1007;var Wi=1008;var Kn=1009,Sg=1010,Mg=1011,po=1012,Wh=1013,Ti=1014,Ai=1015,wi=1016,Xh=1017,qh=1018,mo=1020,bg=35902,Eg=35899,Tg=1021,Ag=1022,di=1023,Vi=1026,ha=1027,wg=1028,Yh=1029,fa=1030,Zh=1031;var Jh=1033,Kl=33776,Ql=33777,jl=33778,$l=33779,Kh=35840,Qh=35841,jh=35842,$h=35843,tf=36196,ef=37492,nf=37496,sf=37488,af=37489,tc=37490,rf=37491,of=37808,lf=37809,cf=37810,uf=37811,hf=37812,ff=37813,df=37814,pf=37815,mf=37816,gf=37817,vf=37818,_f=37819,yf=37820,xf=37821,Sf=36492,Mf=36494,bf=36495,Ef=36283,Tf=36284,ec=36285,Af=36286;var Rl=2300,yh=2301,lh=2302,tg=2303,eg=2400,ng=2401,ig=2402;var QS=3200;var Cg=0,jS=1,ys="",gn="srgb",Dl="srgb-linear",Ul="linear",re="srgb";var ch=7680;var $S=519,tM=512,eM=513,nM=514,wf=515,iM=516,sM=517,Cf=518,aM=519,rM=35044,Rg=35048;var Dg="300 es",Mi=2e3,Ll=2001;function rT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Nl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function oM(){let e=Nl("canvas");return e.style.display="block",e}var lS={},so=null;function Ug(...e){let t="THREE."+e.shift();so?so("log",t,...e):console.log(t,...e)}function lM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Rt(...e){e=lM(e);let t="THREE."+e.shift();if(so)so("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ut(...e){e=lM(e);let t="THREE."+e.shift();if(so)so("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Va(...e){let t=e.join(" ");t in lS||(lS[t]=!0,Rt(...e))}function cM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var uM={[uh]:hh,[fh]:mh,[dh]:gh,[io]:ph,[hh]:uh,[mh]:fh,[gh]:dh,[ph]:io},Gi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lm=Math.PI/180,xh=180/Math.PI;function nc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[e&255]+pn[e>>8&255]+pn[e>>16&255]+pn[e>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function lT(e,t){return(e%t+t)%t}function Nm(e,t,n){return(1-n)*e+n*t}function El(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],g=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==g){let m=l*u+c*d+f*g+p*b;m<0&&(u=-u,d=-d,g=-g,b=-b,m=-m);let h=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);h=Math.sin(h*v)/M,o=Math.sin(o*v)/M,l=l*h+u*o,c=c*h+d*o,f=f*h+g*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+g*o,p=p*h+b*o;let v=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=v,c*=v,f*=v,p*=v}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return t[n]=o*g+f*p+l*d-c*u,t[n+1]=l*g+f*u+c*p-o*d,t[n+2]=c*g+f*d+o*u-l*p,t[n+3]=f*g-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*g,this._y=c*d*p-u*f*g,this._z=c*f*g+u*d*p,this._w=c*f*p-u*d*g;break;case"YXZ":this._x=u*f*p+c*d*g,this._y=c*d*p-u*f*g,this._z=c*f*g-u*d*p,this._w=c*f*p+u*d*g;break;case"ZXY":this._x=u*f*p-c*d*g,this._y=c*d*p+u*f*g,this._z=c*f*g+u*d*p,this._w=c*f*p-u*d*g;break;case"ZYX":this._x=u*f*p-c*d*g,this._y=c*d*p+u*f*g,this._z=c*f*g-u*d*p,this._w=c*f*p+u*d*g;break;case"YZX":this._x=u*f*p+c*d*g,this._y=c*d*p+u*f*g,this._z=c*f*g-u*d*p,this._w=c*f*p-u*d*g;break;case"XZY":this._x=u*f*p-c*d*g,this._y=c*d*p-u*f*g,this._z=c*f*g+u*d*p,this._w=c*f*p+u*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(cS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(cS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Im.copy(this).projectOnVector(t),this.sub(Im)}reflect(t){return this.sub(Im.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Im=new H,cS=new Hi,Nt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],g=i[8],b=s[0],m=s[3],h=s[6],v=s[1],M=s[4],y=s[7],E=s[2],T=s[5],w=s[8];return a[0]=r*b+o*v+l*E,a[3]=r*m+o*M+l*T,a[6]=r*h+o*y+l*w,a[1]=c*b+f*v+p*E,a[4]=c*m+f*M+p*T,a[7]=c*h+f*y+p*w,a[2]=u*b+d*v+g*E,a[5]=u*m+d*M+g*T,a[8]=u*h+d*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,g=n*p+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Om.makeScale(t,n)),this}rotate(t){return Va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Om.makeRotation(-t)),this}translate(t,n){return Va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Om.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Om=new Nt,uS=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hS=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cT(){let e={enabled:!0,workingColorSpace:Dl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===re&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===re&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?Ul:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Dl]:{primaries:t,whitePoint:i,transfer:Ul,toXYZ:uS,fromXYZ:hS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:uS,fromXYZ:hS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),e}var Zt=cT();function _s(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function no(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var kr,Sh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{kr===void 0&&(kr=Nl("canvas")),kr.width=t.width,kr.height=t.height;let s=kr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=kr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Nl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=_s(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uT=0,ao=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=nc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Pm(s[r].image)):a.push(Pm(s[r]))}else a=Pm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Pm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Sh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var hT=0,Bm=new H,ln=class e extends Gi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Fi,s=Fi,a=Ye,r=Wi,o=di,l=Kn,c=e.DEFAULT_ANISOTROPY,f=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=nc(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bm).x}get height(){return this.source.getSize(Bm).y}get depth(){return this.source.getSize(Bm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vh:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vh:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=xg;ln.DEFAULT_ANISOTROPY=1;var Te=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],g=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,y=(d+1)/2,E=(h+1)/2,T=(f+u)/4,w=(p+b)/4,x=(g+m)/4;return M>y&&M>E?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=T/i,a=w/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=T/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=w/a,s=x/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-b)/v,this.z=(u-f)/v,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mh=class extends Gi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new ln(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ao(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Mh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Il=class extends ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bh=class extends ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Pe=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,g,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,g,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=g,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Wr.setFromMatrixColumn(t,0).length(),a=1/Wr.setFromMatrixColumn(t,1).length(),r=1/Wr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,g=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+g*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=g+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,g=c*f,b=c*p;n[0]=u+b*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-g,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,g=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,g=o*f,b=o*p;n[0]=l*f,n[4]=g*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,g=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=g*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+g,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,g=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-g,n[2]=g*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fT,t,dT)}lookAt(t,n,i){let s=this.elements;return qn.subVectors(t,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Qs.crossVectors(i,qn),Qs.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Qs.crossVectors(i,qn)),Qs.normalize(),ku.crossVectors(qn,Qs),s[0]=Qs.x,s[4]=ku.x,s[8]=qn.x,s[1]=Qs.y,s[5]=ku.y,s[9]=qn.y,s[2]=Qs.z,s[6]=ku.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],g=i[2],b=i[6],m=i[10],h=i[14],v=i[3],M=i[7],y=i[11],E=i[15],T=s[0],w=s[4],x=s[8],A=s[12],R=s[1],I=s[5],z=s[9],V=s[13],U=s[2],G=s[6],K=s[10],Z=s[14],it=s[3],q=s[7],W=s[11],j=s[15];return a[0]=r*T+o*R+l*U+c*it,a[4]=r*w+o*I+l*G+c*q,a[8]=r*x+o*z+l*K+c*W,a[12]=r*A+o*V+l*Z+c*j,a[1]=f*T+p*R+u*U+d*it,a[5]=f*w+p*I+u*G+d*q,a[9]=f*x+p*z+u*K+d*W,a[13]=f*A+p*V+u*Z+d*j,a[2]=g*T+b*R+m*U+h*it,a[6]=g*w+b*I+m*G+h*q,a[10]=g*x+b*z+m*K+h*W,a[14]=g*A+b*V+m*Z+h*j,a[3]=v*T+M*R+y*U+E*it,a[7]=v*w+M*I+y*G+E*q,a[11]=v*x+M*z+y*K+E*W,a[15]=v*A+M*V+y*Z+E*j,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],g=t[3],b=t[7],m=t[11],h=t[15],v=l*d-c*u,M=o*d-c*p,y=o*u-l*p,E=r*d-c*f,T=r*u-l*f,w=r*p-o*f;return n*(b*v-m*M+h*y)-i*(g*v-m*E+h*T)+s*(g*M-b*E+h*w)-a*(g*y-b*T+m*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],g=t[12],b=t[13],m=t[14],h=t[15],v=n*o-i*r,M=n*l-s*r,y=n*c-a*r,E=i*l-s*o,T=i*c-a*o,w=s*c-a*l,x=f*b-p*g,A=f*m-u*g,R=f*h-d*g,I=p*m-u*b,z=p*h-d*b,V=u*h-d*m,U=v*V-M*z+y*I+E*R-T*A+w*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/U;return t[0]=(o*V-l*z+c*I)*G,t[1]=(s*z-i*V-a*I)*G,t[2]=(b*w-m*T+h*E)*G,t[3]=(u*T-p*w-d*E)*G,t[4]=(l*R-r*V-c*A)*G,t[5]=(n*V-s*R+a*A)*G,t[6]=(m*y-g*w-h*M)*G,t[7]=(f*w-u*y+d*M)*G,t[8]=(r*z-o*R+c*x)*G,t[9]=(i*R-n*z-a*x)*G,t[10]=(g*T-b*y+h*v)*G,t[11]=(p*y-f*T-d*v)*G,t[12]=(o*A-r*I-l*x)*G,t[13]=(n*I-i*A+s*x)*G,t[14]=(b*M-g*E-m*v)*G,t[15]=(f*E-p*M+u*v)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,g=a*p,b=r*f,m=r*p,h=o*p,v=l*c,M=l*f,y=l*p,E=i.x,T=i.y,w=i.z;return s[0]=(1-(b+h))*E,s[1]=(d+y)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+h))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+M)*w,s[9]=(m-v)*w,s[10]=(1-(u+b))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Wr.set(s[0],s[1],s[2]).length(),o=Wr.set(s[4],s[5],s[6]).length(),l=Wr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),_i.copy(this);let c=1/r,f=1/o,p=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=f,_i.elements[5]*=f,_i.elements[6]*=f,_i.elements[8]*=p,_i.elements[9]*=p,_i.elements[10]*=p,n.setFromRotationMatrix(_i),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Mi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),g,b;if(l)g=a/(r-a),b=r*a/(r-a);else if(o===Mi)g=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Ll)g=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Mi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),g,b;if(l)g=1/(r-a),b=r/(r-a);else if(o===Mi)g=-2/(r-a),b=-(r+a)/(r-a);else if(o===Ll)g=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Wr=new H,_i=new Pe,fT=new H(0,0,0),dT=new H(1,1,1),Qs=new H,ku=new H,qn=new H,fS=new Pe,dS=new Hi,ia=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return fS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return dS.setFromEuler(this),this.setFromQuaternion(dS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ia.DEFAULT_ORDER="XYZ";var Ol=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pT=0,pS=new H,Xr=new Hi,ds=new Pe,Wu=new H,Tl=new H,mT=new H,gT=new Hi,mS=new H(1,0,0),gS=new H(0,1,0),vS=new H(0,0,1),_S={type:"added"},vT={type:"removed"},qr={type:"childadded",child:null},zm={type:"childremoved",child:null},hi=class e extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new ia,i=new Hi,s=new H(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Nt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(mS,t)}rotateY(t){return this.rotateOnAxis(gS,t)}rotateZ(t){return this.rotateOnAxis(vS,t)}translateOnAxis(t,n){return pS.copy(t).applyQuaternion(this.quaternion),this.position.add(pS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(mS,t)}translateY(t){return this.translateOnAxis(gS,t)}translateZ(t){return this.translateOnAxis(vS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Wu.copy(t):Wu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Tl,Wu,this.up):ds.lookAt(Wu,Tl,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(ds),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_S),qr.child=t,this.dispatchEvent(qr),qr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vT),zm.child=t,this.dispatchEvent(zm),zm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_S),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,mT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,gT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hi.DEFAULT_UP=new H(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fa=class extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},_T={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_T)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},hM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function Fm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Zt.workingColorSpace){if(t=lT(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Fm(r,a,t+1/3),this.g=Fm(r,a,t),this.b=Fm(r,a,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,n=gn){function i(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gn){let i=hM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Zt.workingToColorSpace(mn.copy(this),t),Math.round(Qt(mn.r*255,0,255))*65536+Math.round(Qt(mn.g*255,0,255))*256+Math.round(Qt(mn.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(mn.copy(this),n);let i=mn.r,s=mn.g,a=mn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(mn.copy(this),n),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=gn){Zt.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,s=mn.b;return t!==gn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(js),this.setHSL(js.h+t,js.s+n,js.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(js),t.getHSL(Xu);let i=Nm(js.h,Xu.h,n),s=Nm(js.s,Xu.s,n),a=Nm(js.l,Xu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Jt;Jt.NAMES=hM;var oo=class extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},yi=new H,ps=new H,Vm=new H,ms=new H,Yr=new H,Zr=new H,yS=new H,Gm=new H,Hm=new H,km=new H,Wm=new Te,Xm=new Te,qm=new Te,na=class e{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),yi.subVectors(t,n),s.cross(yi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){yi.subVectors(s,n),ps.subVectors(i,n),Vm.subVectors(t,n);let r=yi.dot(yi),o=yi.dot(ps),l=yi.dot(Vm),c=ps.dot(ps),f=ps.dot(Vm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,g=(r*f-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ms.x),l.addScaledVector(r,ms.y),l.addScaledVector(o,ms.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Wm.setScalar(0),Xm.setScalar(0),qm.setScalar(0),Wm.fromBufferAttribute(t,n),Xm.fromBufferAttribute(t,i),qm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Wm,a.x),r.addScaledVector(Xm,a.y),r.addScaledVector(qm,a.z),r}static isFrontFacing(t,n,i,s){return yi.subVectors(i,n),ps.subVectors(t,n),yi.cross(ps).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),yi.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Yr.subVectors(s,i),Zr.subVectors(a,i),Gm.subVectors(t,i);let l=Yr.dot(Gm),c=Zr.dot(Gm);if(l<=0&&c<=0)return n.copy(i);Hm.subVectors(t,s);let f=Yr.dot(Hm),p=Zr.dot(Hm);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Yr,r);km.subVectors(t,a);let d=Yr.dot(km),g=Zr.dot(km);if(g>=0&&d<=g)return n.copy(a);let b=d*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Zr,o);let m=f*g-d*p;if(m<=0&&p-f>=0&&d-g>=0)return yS.subVectors(a,s),o=(p-f)/(p-f+(d-g)),n.copy(s).addScaledVector(yS,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Yr,r).addScaledVector(Zr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sa=class{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(xi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=xi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,xi):xi.fromBufferAttribute(a,r),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qu.copy(i.boundingBox)),qu.applyMatrix4(t.matrixWorld),this.union(qu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Al),Yu.subVectors(this.max,Al),Jr.subVectors(t.a,Al),Kr.subVectors(t.b,Al),Qr.subVectors(t.c,Al),$s.subVectors(Kr,Jr),ta.subVectors(Qr,Kr),Oa.subVectors(Jr,Qr);let n=[0,-$s.z,$s.y,0,-ta.z,ta.y,0,-Oa.z,Oa.y,$s.z,0,-$s.x,ta.z,0,-ta.x,Oa.z,0,-Oa.x,-$s.y,$s.x,0,-ta.y,ta.x,0,-Oa.y,Oa.x,0];return!Ym(n,Jr,Kr,Qr,Yu)||(n=[1,0,0,0,1,0,0,0,1],!Ym(n,Jr,Kr,Qr,Yu))?!1:(Zu.crossVectors($s,ta),n=[Zu.x,Zu.y,Zu.z],Ym(n,Jr,Kr,Qr,Yu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gs=[new H,new H,new H,new H,new H,new H,new H,new H],xi=new H,qu=new sa,Jr=new H,Kr=new H,Qr=new H,$s=new H,ta=new H,Oa=new H,Al=new H,Yu=new H,Zu=new H,Pa=new H;function Ym(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Pa.fromArray(e,a);let o=s.x*Math.abs(Pa.x)+s.y*Math.abs(Pa.y)+s.z*Math.abs(Pa.z),l=t.dot(Pa),c=n.dot(Pa),f=i.dot(Pa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var ke=new H,Ju=new jt,yT=0,Zn=class extends Gi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=rM,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ju.fromBufferAttribute(this,n),Ju.applyMatrix3(t),this.setXY(n,Ju.x,Ju.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=El(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=El(n,this.array)),n}setX(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=El(n,this.array)),n}setY(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=El(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=El(n,this.array)),n}setW(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array),a=Nn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Pl=class extends Zn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Bl=class extends Zn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var ui=class extends Zn{constructor(t,n,i){super(new Float32Array(t),n,i)}},xT=new sa,wl=new H,Zm=new H,lo=class{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):xT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);let n=wl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(wl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(Zm)),this.expandByPoint(wl.copy(t.center).sub(Zm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ST=0,ci=new Pe,Jm=new hi,jr=new H,Yn=new sa,Cl=new sa,tn=new H,bi=class e extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rT(t)?Bl:Pl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Nt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,n,i){return ci.makeTranslation(t,n,i),this.applyMatrix4(ci),this}scale(t,n,i){return ci.makeScale(t,n,i),this.applyMatrix4(ci),this}lookAt(t){return Jm.lookAt(t),Jm.updateMatrix(),this.applyMatrix4(Jm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ui(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Cl.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Yn.min,Cl.min),Yn.expandByPoint(tn),tn.addVectors(Yn.max,Cl.max),Yn.expandByPoint(tn)):(Yn.expandByPoint(Cl.min),Yn.expandByPoint(Cl.max))}Yn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)tn.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(t,c),tn.add(jr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Zn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new H,l[x]=new H;let c=new H,f=new H,p=new H,u=new jt,d=new jt,g=new jt,b=new H,m=new H;function h(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,A),g.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(b.copy(f).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(I),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(I),o[x].add(b),o[A].add(b),o[R].add(b),l[x].add(m),l[A].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,A=v.length;x<A;++x){let R=v[x],I=R.start,z=R.count;for(let V=I,U=I+z;V<U;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let M=new H,y=new H,E=new H,T=new H;function w(x){E.fromBufferAttribute(s,x),T.copy(E);let A=o[x];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(T,A);let I=y.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,A=v.length;x<A;++x){let R=v[x],I=R.start,z=R.count;for(let V=I,U=I+z;V<U;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new H,a=new H,r=new H,o=new H,l=new H,c=new H,f=new H,p=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[g++]=c[d++]}return new Zn(u,f,p)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Km=new H,MT=new H,bT=new Nt,Si=class{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Km.subVectors(i,n).cross(MT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Km),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||bT.getNormalMatrix(t),s=this.coplanarPoint(Km).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ET=0,Ga=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=fo,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ug,this.blendDst=hg,this.blendEquation=Wa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ch,this.stencilZFail=ch,this.stencilZPass=ch,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Rt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Si().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new H,Qm=new H,Ku=new H,Qu=new H,Eh=class{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=vs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,n),vs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Qm.copy(t).add(n).multiplyScalar(.5),Ku.copy(n).sub(t).normalize(),Qu.copy(this.origin).sub(Qm);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ku),o=Qu.dot(this.direction),l=-Qu.dot(Ku),c=Qu.lengthSq(),f=Math.abs(1-r*r),p,u,d,g;if(f>0)if(p=r*l-o,u=r*o-l,g=a*f,p>=0)if(u>=-g)if(u<=g){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Qm).addScaledVector(Ku,u),d}intersectSphere(t,n){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,g=n.x-r.x,b=n.y-r.y,m=n.z-r.z,h=i.x-r.x,v=i.y-r.y,M=i.z-r.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(f),w,x,A,R,I,z,V,U,G,K,Z,it;if(y>=E&&y>=T?(A=l,z=p,G=g,it=h,l>=0?(w=c,x=f,R=u,I=d,V=b,U=m,K=v,Z=M):(w=f,x=c,R=d,I=u,V=m,U=b,K=M,Z=v)):E>=T?(A=c,z=u,G=b,it=v,c>=0?(w=f,x=l,R=d,I=p,V=m,U=g,K=M,Z=h):(w=l,x=f,R=p,I=d,V=g,U=m,K=h,Z=M)):(A=f,z=d,G=m,it=M,f>=0?(w=l,x=c,R=p,I=u,V=g,U=b,K=h,Z=v):(w=c,x=l,R=u,I=p,V=b,U=g,K=v,Z=h)),A===0)return null;let q=w/A,W=x/A,j=1/A,_t=R-q*z,xt=I-W*z,$t=V-q*G,Lt=U-W*G,zt=K-q*it,X=Z-W*it,et=zt*Lt-X*$t,yt=_t*X-xt*zt,It=$t*xt-Lt*_t;if(s){if(et<0||yt<0||It<0)return null}else if((et<0||yt<0||It<0)&&(et>0||yt>0||It>0))return null;let gt=et+yt+It;if(gt===0)return null;let Gt=j*(et*z+yt*G+It*it);return(gt>0?Gt<0:Gt>0)?null:this.at(Gt/gt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zl=class extends Ga{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xS=new Pe,Ba=new Eh,ju=new lo,SS=new H,$u=new H,th=new H,eh=new H,jm=new H,nh=new H,MS=new H,ih=new H,bn=class extends hi{constructor(t=new bi,n=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){nh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(jm.fromBufferAttribute(p,t),r?nh.addScaledVector(jm,f):nh.addScaledVector(jm.sub(n),f))}n.add(nh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ju.copy(i.boundingSphere),ju.applyMatrix4(a),Ba.copy(t.ray).recast(t.near),!(ju.containsPoint(Ba.origin)===!1&&(Ba.intersectSphere(ju,SS)===null||Ba.origin.distanceToSquared(SS)>(t.far-t.near)**2))&&(xS.copy(a).invert(),Ba.copy(t.ray).applyMatrix4(xS),!(i.boundingBox!==null&&Ba.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ba)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],h=r[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,E=M;y<E;y+=3){let T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=sh(this,h,t,i,c,f,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=g,h=b;m<h;m+=3){let v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=sh(this,r,t,i,c,f,p,v,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){let m=u[g],h=r[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,E=M;y<E;y+=3){let T=y,w=y+1,x=y+2;s=sh(this,h,t,i,c,f,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=g,h=b;m<h;m+=3){let v=m,M=m+1,y=m+2;s=sh(this,r,t,i,c,f,p,v,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function TT(e,t,n,i,s,a,r,o){let l;if(t.side===En?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ca,o),l===null)return null;ih.copy(o),ih.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(ih);return c<n.near||c>n.far?null:{distance:c,point:ih.clone(),object:e}}function sh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,$u),e.getVertexPosition(l,th),e.getVertexPosition(c,eh);let f=TT(e,t,n,i,$u,th,eh,MS);if(f){let p=new H;na.getBarycoord(MS,$u,th,eh,p),s&&(f.uv=na.getInterpolatedAttribute(s,o,l,c,p,new jt)),a&&(f.uv1=na.getInterpolatedAttribute(a,o,l,c,p,new jt)),r&&(f.normal=na.getInterpolatedAttribute(r,o,l,c,p,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};na.getNormal($u,th,eh,u.normal),f.face=u,f.barycoord=p}return f}var co=class extends ln{constructor(t=null,n=1,i=1,s,a,r,o,l,c=en,f=en,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fl=class extends Zn{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var za=new lo,AT=new jt(.5,.5),ah=new H,Vl=class{constructor(t=new Si,n=new Si,i=new Si,s=new Si,a=new Si,r=new Si){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Mi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],g=a[8],b=a[9],m=a[10],h=a[11],v=a[12],M=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-g,E-v).normalize(),s[1].setComponents(c+r,d+f,h+g,E+v).normalize(),s[2].setComponents(c+o,d+p,h+b,E+M).normalize(),s[3].setComponents(c-o,d-p,h-b,E-M).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,h-m,E-y).normalize();else if(s[4].setComponents(c-l,d-u,h-m,E-y).normalize(),n===Mi)s[5].setComponents(c+l,d+u,h+m,E+y).normalize();else if(n===Ll)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(t){za.center.set(0,0,0);let n=AT.distanceTo(t.center);return za.radius=.7071067811865476+n,za.applyMatrix4(t.matrixWorld),this.intersectsSphere(za)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ah.x=s.normal.x>0?t.max.x:t.min.x,ah.y=s.normal.y>0?t.max.y:t.min.y,ah.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ah)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gl=class extends ln{constructor(t=[],n=ua,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hl=class extends ln{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var aa=class extends ln{constructor(t,n,i=Ti,s,a,r,o=en,l=en,c,f=Vi,p=1){if(f!==Vi&&f!==ha)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Th=class extends aa{constructor(t,n=Ti,i=ua,s,a,r=en,o=en,l,c=Vi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kl=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},uo=class e extends bi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(p,2));function g(b,m,h,v,M,y,E,T,w,x,A){let R=y/w,I=E/x,z=y/2,V=E/2,U=T/2,G=w+1,K=x+1,Z=0,it=0,q=new H;for(let W=0;W<K;W++){let j=W*I-V;for(let _t=0;_t<G;_t++){let xt=_t*R-z;q[b]=xt*v,q[m]=j*M,q[h]=U,c.push(q.x,q.y,q.z),q[b]=0,q[m]=0,q[h]=T>0?1:-1,f.push(q.x,q.y,q.z),p.push(_t/w),p.push(1-W/x),Z+=1}}for(let W=0;W<x;W++)for(let j=0;j<w;j++){let _t=u+j+G*W,xt=u+j+G*(W+1),$t=u+(j+1)+G*(W+1),Lt=u+(j+1)+G*W;l.push(_t,xt,Lt),l.push(xt,$t,Lt),it+=6}o.addGroup(d,it,A),d+=it,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ha=class e extends bi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],g=[],b=[],m=[];for(let h=0;h<f;h++){let v=h*u-r;for(let M=0;M<c;M++){let y=M*p-a;g.push(y,-v,0),b.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let M=v+c*h,y=v+c*(h+1),E=v+1+c*(h+1),T=v+1+c*h;d.push(M,y,T),d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(b,3)),this.setAttribute("uv",new ui(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(bS(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(bS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function _n(e){let t={};for(let n=0;n<e.length;n++){let i=qa(e[n]);for(let s in i)t[s]=i[s]}return t}function bS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var fM={clone:qa,merge:_n},CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Ga{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qa(t.uniforms),this.uniformsGroups=wT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ah=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wh=class extends Ga{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ch=class extends Ga{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $r(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function $m(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ra=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rh=class extends ra{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eg,endingEnd:eg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case ng:a=t,o=2*n-i;break;case ig:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ng:r=t,l=2*i-n;break;case ig:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),b=g*g,m=b*g,h=-u*m+2*u*b-u*g,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,M=(-1-d)*m+(1.5+d)*b+.5*g,y=d*m-d*b;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+v*r[c+E]+M*r[l+E]+y*r[p+E];return a}},Dh=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Uh=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lh=class extends ra{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let g=(i-n)/(s-n),b=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*g;return a}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let b=r[c+g],m=r[l+g],h=d*u+g*2,v=p[h],M=p[h+1],y=t*u+g*2,E=f[y],T=f[y+1],w=UT(i,n,v,E,s);a[g]=dM(w,b,M,T,m)}return a}};function dM(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function DT(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function UT(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=dM(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=DT(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Jn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(n,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$m(t.settings)&&(i.settings={inTangents:$r(t.settings.inTangents,Array),outTangents:$r(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Lh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Rl:n=this.InterpolantFactoryMethodDiscrete;break;case yh:n=this.InterpolantFactoryMethodLinear;break;case lh:n=this.InterpolantFactoryMethodSmooth;break;case tg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rl;case this.InterpolantFactoryMethodLinear:return yh;case this.InterpolantFactoryMethodSmooth:return lh;case this.InterpolantFactoryMethodBezier:return tg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;$m(this.settings)&&(ES(this.settings.inTangents,t),ES(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&oT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let g=0;g!==i;++g){let b=n[p+g];if(b!==n[u+g]||b!==n[d+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,$m(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ES(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=yh;var oa=class extends Jn{constructor(t,n,i){super(t,n,i)}};oa.prototype.ValueTypeName="bool";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=Rl;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};Nh.prototype.ValueTypeName="color";var Ih=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};Ih.prototype.ValueTypeName="number";var Oh=class extends ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Hi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Wl=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Oh(this.times,this.values,this.getValueSize(),t)}};Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Jn{constructor(t,n,i){super(t,n,i)}};la.prototype.ValueTypeName="string";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=Rl;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};Ph.prototype.ValueTypeName="vector";var Bh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pM=new Bh,zh=class{constructor(t){this.manager=t!==void 0?t:pM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var rh=new H,oh=new Hi,zi=new H,ka=class extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(rh,oh,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,zi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(rh,oh,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ea=new H,TS=new jt,AS=new jt,In=class extends ka{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Lm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ea.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ea.x,ea.y).multiplyScalar(-t/ea.z),ea.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ea.x,ea.y).multiplyScalar(-t/ea.z)}getViewSize(t,n){return this.getViewBounds(t,TS,AS),n.subVectors(AS,TS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Lm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Xl=class extends ka{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var ql=class extends bi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var to=-90,eo=1,Fh=class extends hi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(to,eo,t,n);s.layers=this.layers,this.add(s);let a=new In(to,eo,t,n);a.layers=this.layers,this.add(a);let r=new In(to,eo,t,n);r.layers=this.layers,this.add(r);let o=new In(to,eo,t,n);o.layers=this.layers,this.add(o);let l=new In(to,eo,t,n);l.layers=this.layers,this.add(l);let c=new In(to,eo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vh=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ng="\\[\\]\\.:\\/",LT=new RegExp("["+Ng+"]","g"),Ig="[^"+Ng+"]",NT="[^"+Ng.replace("\\.","")+"]",IT=/((?:WC+[\/:])*)/.source.replace("WC",Ig),OT=/(WCOD+)?/.source.replace("WCOD",NT),PT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ig),BT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ig),zT=new RegExp("^"+IT+OT+PT+BT+"$"),FT=["material","materials","bones","map"],sg=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(LT,"")}static parseTrackName(t){let n=zT.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);FT.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=sg;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j2=new Float32Array(1);var ag=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Og(e,t,n,i){let s=VT(i);switch(n){case Tg:return e*t;case wg:return e*t/s.components*s.byteLength;case Yh:return e*t/s.components*s.byteLength;case fa:return e*t*2/s.components*s.byteLength;case Zh:return e*t*2/s.components*s.byteLength;case Ag:return e*t*3/s.components*s.byteLength;case di:return e*t*4/s.components*s.byteLength;case Jh:return e*t*4/s.components*s.byteLength;case Kl:case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jl:case $l:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(e,16)*Math.max(t,8)/4;case Kh:case jh:return Math.max(e,8)*Math.max(t,8)/2;case tf:case ef:case sf:case af:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nf:case tc:case rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case cf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case uf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case hf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ff:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case df:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case pf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case mf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _f:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case yf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Sf:case Mf:case bf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ef:case Tf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ec:case Af:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VT(e){switch(e){case Kn:case Sg:return{byteLength:1,components:1};case po:case Mg:case wi:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case Ti:case Wh:case Ai:return{byteLength:4,components:1};case bg:case Eg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function PM(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function HT(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<p.length;d++){let g=p[u],b=p[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,g=p.length;d<g;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var kT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,OA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,PA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:kT,alphahash_pars_fragment:WT,alphamap_fragment:XT,alphamap_pars_fragment:qT,alphatest_fragment:YT,alphatest_pars_fragment:ZT,aomap_fragment:JT,aomap_pars_fragment:KT,batching_pars_vertex:QT,batching_vertex:jT,begin_vertex:$T,beginnormal_vertex:tA,bsdfs:eA,iridescence_fragment:nA,bumpmap_pars_fragment:iA,clipping_planes_fragment:sA,clipping_planes_pars_fragment:aA,clipping_planes_pars_vertex:rA,clipping_planes_vertex:oA,color_fragment:lA,color_pars_fragment:cA,color_pars_vertex:uA,color_vertex:hA,common:fA,cube_uv_reflection_fragment:dA,defaultnormal_vertex:pA,displacementmap_pars_vertex:mA,displacementmap_vertex:gA,emissivemap_fragment:vA,emissivemap_pars_fragment:_A,colorspace_fragment:yA,colorspace_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:MA,envmap_pars_fragment:bA,envmap_pars_vertex:EA,envmap_physical_pars_fragment:OA,envmap_vertex:TA,fog_vertex:AA,fog_pars_vertex:wA,fog_fragment:CA,fog_pars_fragment:RA,gradientmap_pars_fragment:DA,lightmap_pars_fragment:UA,lights_lambert_fragment:LA,lights_lambert_pars_fragment:NA,lights_pars_begin:IA,lights_toon_fragment:PA,lights_toon_pars_fragment:BA,lights_phong_fragment:zA,lights_phong_pars_fragment:FA,lights_physical_fragment:VA,lights_physical_pars_fragment:GA,lights_fragment_begin:HA,lights_fragment_maps:kA,lights_fragment_end:WA,lightprobes_pars_fragment:XA,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:YA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:JA,map_fragment:KA,map_pars_fragment:QA,map_particle_fragment:jA,map_particle_pars_fragment:$A,metalnessmap_fragment:tw,metalnessmap_pars_fragment:ew,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:sw,morphtarget_pars_vertex:aw,morphtarget_vertex:rw,normal_fragment_begin:ow,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:hw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:vw,packing:_w,premultiplied_alpha_fragment:yw,project_vertex:xw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:bw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:Aw,shadowmap_vertex:ww,shadowmask_pars_fragment:Cw,skinbase_vertex:Rw,skinning_pars_vertex:Dw,skinning_vertex:Uw,skinnormal_vertex:Lw,specularmap_fragment:Nw,specularmap_pars_fragment:Iw,tonemapping_fragment:Ow,tonemapping_pars_fragment:Pw,transmission_fragment:Bw,transmission_pars_fragment:zw,uv_pars_fragment:Fw,uv_pars_vertex:Vw,uv_vertex:Gw,worldpos_vertex:Hw,background_vert:kw,background_frag:Ww,backgroundCube_vert:Xw,backgroundCube_frag:qw,cube_vert:Yw,cube_frag:Zw,depth_vert:Jw,depth_frag:Kw,distance_vert:Qw,distance_frag:jw,equirect_vert:$w,equirect_frag:tC,linedashed_vert:eC,linedashed_frag:nC,meshbasic_vert:iC,meshbasic_frag:sC,meshlambert_vert:aC,meshlambert_frag:rC,meshmatcap_vert:oC,meshmatcap_frag:lC,meshnormal_vert:cC,meshnormal_frag:uC,meshphong_vert:hC,meshphong_frag:fC,meshphysical_vert:dC,meshphysical_frag:pC,meshtoon_vert:mC,meshtoon_frag:gC,points_vert:vC,points_frag:_C,shadow_vert:yC,shadow_frag:xC,sprite_vert:SC,sprite_frag:MC},ht={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},qi={basic:{uniforms:_n([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:_n([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:_n([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:_n([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:_n([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:_n([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:_n([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:_n([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:_n([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:_n([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:_n([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:_n([ht.common,ht.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:_n([ht.lights,ht.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};qi.physical={uniforms:_n([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Rf={r:0,b:0,g:0},bC=new Pe,BM=new Nt;BM.set(-1,0,0,0,1,0,0,0,1);function EC(e,t,n,i,s,a){let r=new Jt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=t.get(M,y)}return M}function g(v){let M=!1,y=d(v);y===null?m(r,o):y&&y.isColor&&(m(y,1),M=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(v,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Zl)?(c===void 0&&(c=new bn(new uo(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:qa(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bC.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(BM),c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==re,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bn(new Ha(2,2),new cn({name:"BackgroundMaterial",uniforms:qa(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Rf,Lg(e)),n.buffers.color.setClear(Rf.r,Rf.g,Rf.b,M,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:g,addToRenderList:b,dispose:h}}function TC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(I,z,V,U,G){let K=!1,Z=p(I,U,V,z);a!==Z&&(a=Z,c(a.object)),K=d(I,U,V,G),K&&g(I,U,V,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(I,z,V,U),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function f(I){return e.deleteVertexArray(I)}function p(I,z,V,U){let G=U.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let Z=I.isInstancedMesh===!0?I.id:0,it=K[Z];it===void 0&&(it={},K[Z]=it);let q=it[V.id];q===void 0&&(q={},it[V.id]=q);let W=q[G];return W===void 0&&(W=u(l()),q[G]=W),W}function u(I){let z=[],V=[],U=[];for(let G=0;G<n;G++)z[G]=0,V[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:U,object:I,attributes:{},index:null}}function d(I,z,V,U){let G=a.attributes,K=z.attributes,Z=0,it=V.getAttributes();for(let q in it)if(it[q].location>=0){let j=G[q],_t=K[q];if(_t===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),j===void 0||j.attribute!==_t||_t&&j.data!==_t.data)return!0;Z++}return a.attributesNum!==Z||a.index!==U}function g(I,z,V,U){let G={},K=z.attributes,Z=0,it=V.getAttributes();for(let q in it)if(it[q].location>=0){let j=K[q];j===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let _t={};_t.attribute=j,j&&j.data&&(_t.data=j.data),G[q]=_t,Z++}a.attributes=G,a.attributesNum=Z,a.index=U}function b(){let I=a.newAttributes;for(let z=0,V=I.length;z<V;z++)I[z]=0}function m(I){h(I,0)}function h(I,z){let V=a.newAttributes,U=a.enabledAttributes,G=a.attributeDivisors;V[I]=1,U[I]===0&&(e.enableVertexAttribArray(I),U[I]=1),G[I]!==z&&(e.vertexAttribDivisor(I,z),G[I]=z)}function v(){let I=a.newAttributes,z=a.enabledAttributes;for(let V=0,U=z.length;V<U;V++)z[V]!==I[V]&&(e.disableVertexAttribArray(V),z[V]=0)}function M(I,z,V,U,G,K,Z){Z===!0?e.vertexAttribIPointer(I,z,V,G,K):e.vertexAttribPointer(I,z,V,U,G,K)}function y(I,z,V,U){b();let G=U.attributes,K=V.getAttributes(),Z=z.defaultAttributeValues;for(let it in K){let q=K[it];if(q.location>=0){let W=G[it];if(W===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let j=W.normalized,_t=W.itemSize,xt=t.get(W);if(xt===void 0)continue;let $t=xt.buffer,Lt=xt.type,zt=xt.bytesPerElement,X=Lt===e.INT||Lt===e.UNSIGNED_INT||W.gpuType===Wh;if(W.isInterleavedBufferAttribute){let et=W.data,yt=et.stride,It=W.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)h(q.location+gt,et.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let gt=0;gt<q.locationSize;gt++)M(q.location+gt,_t/q.locationSize,Lt,j,yt*zt,(It+_t/q.locationSize*gt)*zt,X)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)h(q.location+et,W.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let et=0;et<q.locationSize;et++)M(q.location+et,_t/q.locationSize,Lt,j,_t*zt,_t/q.locationSize*et*zt,X)}}else if(Z!==void 0){let j=Z[it];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(q.location,j);break;case 3:e.vertexAttrib3fv(q.location,j);break;case 4:e.vertexAttrib4fv(q.location,j);break;default:e.vertexAttrib1fv(q.location,j)}}}}v()}function E(){A();for(let I in i){let z=i[I];for(let V in z){let U=z[V];for(let G in U){let K=U[G];for(let Z in K)f(K[Z].object),delete K[Z];delete U[G]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let V in z){let U=z[V];for(let G in U){let K=U[G];for(let Z in K)f(K[Z].object),delete K[Z];delete U[G]}}delete i[I.id]}function w(I){for(let z in i){let V=i[z];for(let U in V){let G=V[U];if(G[I.id]===void 0)continue;let K=G[I.id];for(let Z in K)f(K[Z].object),delete K[Z];delete G[I.id]}}}function x(I){for(let z in i){let V=i[z],U=I.isInstancedMesh===!0?I.id:0,G=V[U];if(G!==void 0){for(let K in G){let Z=G[K];for(let it in Z)f(Z[it].object),delete Z[it];delete G[K]}delete V[U],Object.keys(V).length===0&&delete i[z]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function AC(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function wC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==di&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Kn&&w!==Ai&&!x&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Rt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:T}}function CC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Si,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let g=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||g===null||g.length===0||a&&!m)a?f(null):c();else{let v=a?0:i,M=v*4,y=h.clippingState||null;l.value=y,y=f(g,u,M,d);for(let E=0;E!==M;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,g){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let h=d+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,y=d;M!==b;++M,y+=4)r.copy(p[M]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var vo=4,RC=6,DC=20,UC=256,ic=new Xl,mM=new Jt,Pg=null,Bg=0,zg=0,Fg=!1,LC=new H,Ya=new H,Uf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=LC}=a;Pg=this._renderer.getRenderTarget(),Bg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Fg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_M(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pg,Bg,zg),this._renderer.xr.enabled=Fg,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ua||t.mapping===Xa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pg=this._renderer.getRenderTarget(),Bg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Fg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:wi,format:di,colorSpace:Dl,depthBuffer:!1},s=gM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NC(a)),this._blurMaterial=OC(a,t,n),this._ggxMaterial=IC(a,t,n)}return s}_compileMaterial(t){let n=new bn(new bi,t);this._renderer.compile(n,ic)}_sceneToCubeUV(t,n,i,s,a){let l=new In(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(mM),p.toneMapping=Ei,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new uo,new zl({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,h=!0):(m.color.copy(mM),h=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[M],a.y,a.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[M]));let E=this._cubeSize;go(s,y*E,M>2?E:0,E,E),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ua||t.mapping===Xa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_M()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;go(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ic)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-vo?i-g+vo:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-n,go(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,ic),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,go(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,ic)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-vo?s-this._lodMax+vo:0),u=4*(this._cubeSize-f);go(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,ic)}};function NC(e){let t=[],n=[],i=e,s=e-vo+1+RC;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,g=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let h=0;h<p;h++){let v=h%3*2/3-1,M=h>2?0:-1,y=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(y,d*u*h);for(let E=0;E<u;E++){let T=f[E*2]*2-1,w=f[E*2+1]*2-1;h===0?Ya.set(1,w,T):h===1?Ya.set(-T,1,-w):h===2?Ya.set(-T,w,1):h===3?Ya.set(-1,w,-T):h===4?Ya.set(-T,-1,w):Ya.set(T,w,-1),Ya.toArray(b,(h*u+E)*d)}}let m=new bi;m.setAttribute("position",new Zn(g,d)),m.setAttribute("outputDirection",new Zn(b,d)),n.push(new bn(m,null)),i>vo&&i--}return{lodMeshes:n,sizeLods:t}}function gM(e,t,n){let i=new vn(e,t,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function IC(e,t,n){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:If(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function OC(e,t,n){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:DC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:If(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vM(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _M(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function If(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Lf=class extends vn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uo(5,5,5),a=new cn({name:"CubemapFromEquirect",uniforms:qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ki});a.uniforms.tEquirect.value=n;let r=new bn(s,a),o=n.minFilter;return n.minFilter===Wi&&(n.minFilter=Ye),new Fh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function PC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Gh||d===Hh)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new Lf(g.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,g=d===Gh||d===Hh,b=d===ua||d===Xa;if(g||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Uf(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new Uf(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Gh?u.mapping=ua:d===Hh&&(u.mapping=Xa),u}function l(u){let d=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function BC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Va("WebGLRenderer: "+i+" extension not supported."),s}}}function zC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,g=p.attributes.position,b=0;if(g===void 0)return;if(d!==null){let v=d.array;b=d.version;for(let M=0,y=v.length;M<y;M+=3){let E=v[M+0],T=v[M+1],w=v[M+2];u.push(E,T,T,w,w,E)}}else{let v=g.array;b=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let E=M+0,T=M+1,w=M+2;u.push(E,T,T,w,w,E)}}let m=new(g.count>=65535?Bl:Pl)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function FC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function VC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ut("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function GC(e,t,n){let i=new WeakMap,s=new Te;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let y=o.attributes.position.count*M,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*p),w=new Il(T,y,E,p);w.type=Ai,w.needsUpdate=!0;let x=M*4;for(let R=0;R<p;R++){let I=m[R],z=h[R],V=v[R],U=y*E*4*R;for(let G=0;G<I.count;G++){let K=G*x;d===!0&&(s.fromBufferAttribute(I,G),T[U+K+0]=s.x,T[U+K+1]=s.y,T[U+K+2]=s.z,T[U+K+3]=0),g===!0&&(s.fromBufferAttribute(z,G),T[U+K+4]=s.x,T[U+K+5]=s.y,T[U+K+6]=s.z,T[U+K+7]=0),b===!0&&(s.fromBufferAttribute(V,G),T[U+K+8]=s.x,T[U+K+9]=s.y,T[U+K+10]=s.z,T[U+K+11]=V.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new jt(y,E)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function HC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var kC={[dg]:"LINEAR_TONE_MAPPING",[pg]:"REINHARD_TONE_MAPPING",[mg]:"CINEON_TONE_MAPPING",[gg]:"ACES_FILMIC_TONE_MAPPING",[_g]:"AGX_TONE_MAPPING",[yg]:"NEUTRAL_TONE_MAPPING",[vg]:"CUSTOM_TONE_MAPPING"};function WC(e,t,n,i,s,a){let r=new vn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new bi;c.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ui([0,2,0,0,2,0],2));let f=new Ah({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new bn(c,f),u=new Xl(-1,1,1,-1,0,1),d=null,g=null,b=!1,m,h=null,v=[],M=!1;this.setSize=function(y,E){r.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let T=0;T<v.length;T++){let w=v[T];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){v=y,M=v.length>0&&v[0].isRenderPass===!0;let E=r.width,T=r.height;v.length>0&&o===null&&(o=new vn(E,T,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new vn(E,T,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let x=v[w];x.setSize&&x.setSize(E,T)}},this.begin=function(y,E){if(b||y.toneMapping===Ei&&v.length===0)return!1;if(h=E,E!==null){let T=E.width,w=E.height;(r.width!==T||r.height!==w)&&this.setSize(T,w)}return M===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Ei,!0},this.hasRenderPass=function(){return M},this.end=function(y,E){y.toneMapping=m,b=!0;let T=r,w=o;for(let x=0;x<v.length;x++){let A=v[x];A.enabled!==!1&&(A.render(y,w,T,E),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,f.defines={},Zt.getTransfer(d)===re&&(f.defines.SRGB_TRANSFER="");let x=kC[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(h),y.render(p,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var zM=new ln,Hg=new aa(1,1),FM=new Il,VM=new bh,GM=new Gl,yM=[],xM=[],SM=new Float32Array(16),MM=new Float32Array(9),bM=new Float32Array(4);function yo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=yM[s];if(a===void 0&&(a=new Float32Array(s),yM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Of(e,t){let n=xM[t];n===void 0&&(n=new Int32Array(t),xM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function XC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function YC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function ZC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function JC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;bM.set(i),e.uniformMatrix2fv(this.addr,!1,bM),Je(n,i)}}function KC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;MM.set(i),e.uniformMatrix3fv(this.addr,!1,MM),Je(n,i)}}function QC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;SM.set(i),e.uniformMatrix4fv(this.addr,!1,SM),Je(n,i)}}function jC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function tR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function eR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function nR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function iR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function sR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function aR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function rR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Hg.compareFunction=n.isReversedDepthBuffer()?Cf:wf,a=Hg):a=zM,n.setTexture2D(t||a,s)}function oR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||VM,s)}function lR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||GM,s)}function cR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||FM,s)}function uR(e){switch(e){case 5126:return XC;case 35664:return qC;case 35665:return YC;case 35666:return ZC;case 35674:return JC;case 35675:return KC;case 35676:return QC;case 5124:case 35670:return jC;case 35667:case 35671:return $C;case 35668:case 35672:return tR;case 35669:case 35673:return eR;case 5125:return nR;case 36294:return iR;case 36295:return sR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return oR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return cR}}function hR(e,t){e.uniform1fv(this.addr,t)}function fR(e,t){let n=yo(t,this.size,2);e.uniform2fv(this.addr,n)}function dR(e,t){let n=yo(t,this.size,3);e.uniform3fv(this.addr,n)}function pR(e,t){let n=yo(t,this.size,4);e.uniform4fv(this.addr,n)}function mR(e,t){let n=yo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gR(e,t){let n=yo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vR(e,t){let n=yo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _R(e,t){e.uniform1iv(this.addr,t)}function yR(e,t){e.uniform2iv(this.addr,t)}function xR(e,t){e.uniform3iv(this.addr,t)}function SR(e,t){e.uniform4iv(this.addr,t)}function MR(e,t){e.uniform1uiv(this.addr,t)}function bR(e,t){e.uniform2uiv(this.addr,t)}function ER(e,t){e.uniform3uiv(this.addr,t)}function TR(e,t){e.uniform4uiv(this.addr,t)}function AR(e,t,n){let i=this.cache,s=t.length,a=Of(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Hg:r=zM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function wR(e,t,n){let i=this.cache,s=t.length,a=Of(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||VM,a[r])}function CR(e,t,n){let i=this.cache,s=t.length,a=Of(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||GM,a[r])}function RR(e,t,n){let i=this.cache,s=t.length,a=Of(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||FM,a[r])}function DR(e){switch(e){case 5126:return hR;case 35664:return fR;case 35665:return dR;case 35666:return pR;case 35674:return mR;case 35675:return gR;case 35676:return vR;case 5124:case 35670:return _R;case 35667:case 35671:return yR;case 35668:case 35672:return xR;case 35669:case 35673:return SR;case 5125:return MR;case 36294:return bR;case 36295:return ER;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return RR}}var kg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uR(n.type)}},Wg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DR(n.type)}},Xg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Vg=/(\w+)(\])?(\[|\.)?/g;function EM(e,t){e.seq.push(t),e.map[t.id]=t}function UR(e,t,n){let i=e.name,s=i.length;for(Vg.lastIndex=0;;){let a=Vg.exec(i),r=Vg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){EM(n,c===void 0?new kg(o,e,t):new Wg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Xg(o),EM(n,p)),n=p}}}var _o=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);UR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function TM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var LR=37297,NR=0;function IR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var AM=new Nt;function OR(e){Zt._getMatrix(AM,Zt.workingColorSpace,e);let t=`mat3( ${AM.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Ul:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function wM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+IR(e.getShaderSource(t),o)}else return a}function PR(e,t){let n=OR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var BR={[dg]:"Linear",[pg]:"Reinhard",[mg]:"Cineon",[gg]:"ACESFilmic",[_g]:"AgX",[yg]:"Neutral",[vg]:"Custom"};function zR(e,t){let n=BR[t];return n===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Df=new H;function FR(){Zt.getLuminanceCoefficients(Df);let e=Df.x.toFixed(4),t=Df.y.toFixed(4),n=Df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function GR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function HR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function ac(e){return e!==""}function CM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function RM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kR=/^[ \t]*#include +<([\w\d./]+)>/gm;function qg(e){return e.replace(kR,XR)}var WR=new Map;function XR(e,t){let n=Vt[t];if(n===void 0){let i=WR.get(t);if(i!==void 0)n=Vt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qg(n)}var qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DM(e){return e.replace(qR,YR)}function YR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function UM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ZR={[Yl]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};function JR(e){return ZR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var KR={[ua]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function QR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":KR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var jR={[Xa]:"ENVMAP_MODE_REFRACTION"};function $R(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":jR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t2={[fg]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[JS]:"ENVMAP_BLENDING_ADD"};function e2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":t2[e.combine]||"ENVMAP_BLENDING_NONE"}function n2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function i2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=JR(n),c=QR(n),f=$R(n),p=e2(n),u=n2(n),d=VR(n),g=GR(a),b=s.createProgram(),m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ac).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ac).join(`
`),h.length>0&&(h+=`
`)):(m=[UM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),h=[UM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Vt.tonemapping_pars_fragment:"",n.toneMapping!==Ei?zR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,PR("linearToOutputTexel",n.outputColorSpace),FR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ac).join(`
`)),r=qg(r),r=CM(r,n),r=RM(r,n),o=qg(o),o=CM(o,n),o=RM(o,n),r=DM(r),o=DM(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=v+m+r,y=v+h+o,E=TM(s,s.VERTEX_SHADER,M),T=TM(s,s.FRAGMENT_SHADER,y);s.attachShader(b,E),s.attachShader(b,T),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(I){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",G=z.trim(),K=V.trim(),Z=U.trim(),it=!0,q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(it=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,E,T);else{let W=wM(s,E,"vertex"),j=wM(s,T,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+W+`
`+j)}else G!==""?Rt("WebGLProgram: Program Info Log:",G):(K===""||Z==="")&&(q=!1);q&&(I.diagnostics={runnable:it,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(E),s.deleteShader(T),x=new _o(s,b),A=HR(s,b)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,LR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}var s2=0,Yg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Zg(t),n.set(t,i)),i}},Zg=class{constructor(t){this.id=s2++,this.code=t,this.usedTimes=0}};function a2(e){return e===fa||e===tc||e===ec}function r2(e,t,n,i,s,a){let r=new Ol,o=new Yg,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,R,I,z,V){let U=I.fog,G=z.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||K,Z),q=it&&it.mapping===Zl?it.image.height:null,W=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Rt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_t=j!==void 0?j.length:0,xt=0;G.morphAttributes.position!==void 0&&(xt=1),G.morphAttributes.normal!==void 0&&(xt=2),G.morphAttributes.color!==void 0&&(xt=3);let $t,Lt,zt,X;if(W){let ge=qi[W];$t=ge.vertexShader,Lt=ge.fragmentShader}else{$t=x.vertexShader,Lt=x.fragmentShader;let ge=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,ge,se),zt=ge.id,X=se.id}let et=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),It=z.isInstancedMesh===!0,gt=z.isBatchedMesh===!0,Gt=!!x.map,We=!!x.matcap,Ht=!!it,ee=!!x.aoMap,me=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,Ae=!!x.normalMap,Ke=!!x.displacementMap,Tn=!!x.emissiveMap,Re=!!x.metalnessMap,Be=!!x.roughnessMap,N=x.anisotropy>0,un=x.clearcoat>0,oe=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,F=x.transmission>0,Y=N&&!!x.anisotropyMap,st=un&&!!x.clearcoatMap,at=un&&!!x.clearcoatNormalMap,J=un&&!!x.clearcoatRoughnessMap,$=_&&!!x.iridescenceMap,rt=_&&!!x.iridescenceThicknessMap,Tt=O&&!!x.sheenColorMap,ut=O&&!!x.sheenRoughnessMap,ot=!!x.specularMap,At=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Pt=F&&!!x.transmissionMap,L=F&&!!x.thicknessMap,lt=!!x.gradientMap,Q=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,wt=Ei;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(wt=e.toneMapping);let bt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:$t,fragmentShader:Lt,defines:x.defines,customVertexShaderID:zt,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:gt,batchingColor:gt&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:We,envMap:Ht,envMapMode:Ht&&it.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:me,bumpMap:qt,normalMap:Ae,displacementMap:Ke,emissiveMap:Tn,normalMapObjectSpace:Ae&&x.normalMapType===jS,normalMapTangentSpace:Ae&&x.normalMapType===Cg,packedNormalMap:Ae&&x.normalMapType===Cg&&a2(x.normalMap.format),metalnessMap:Re,roughnessMap:Be,anisotropy:N,anisotropyMap:Y,clearcoat:un,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:J,dispersion:oe,retroreflection:C,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:Tt,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:At,specularIntensityMap:Ct,transmission:F,transmissionMap:Pt,thicknessMap:L,gradientMap:lt,opaque:x.transparent===!1&&x.blending===fo&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:ee&&g(x.aoMap.channel),lightMapUv:me&&g(x.lightMap.channel),bumpMapUv:qt&&g(x.bumpMap.channel),normalMapUv:Ae&&g(x.normalMap.channel),displacementMapUv:Ke&&g(x.displacementMap.channel),emissiveMapUv:Tn&&g(x.emissiveMap.channel),metalnessMapUv:Re&&g(x.metalnessMap.channel),roughnessMapUv:Be&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:st&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:ot&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:Ct&&g(x.specularIntensityMap.channel),transmissionMapUv:Pt&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ae||N),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Gt||Q),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:xt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:wt,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:Tn&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(A,x),v(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function M(x){let A=d[x.type],R;if(A){let I=qi[A];R=fM.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new i2(e,A,x,s),c.push(R),f.set(A,R)),R}function E(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:w}}function o2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function l2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function LM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function NM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,b,m,h){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=r(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=m,v.group=h),t++,v}function l(u,d,g,b,m,h,v){v.reversedDepth===!0&&(m=-m);let M=o(u,d,g,b,m,h);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):n.push(M)}function c(u,d,g,b,m,h){let v=o(u,d,g,b,m,h);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):n.unshift(v)}function f(u,d){n.length>1&&n.sort(u||l2),i.length>1&&i.sort(d||LM),s.length>1&&s.sort(d||LM)}function p(){for(let u=t,d=e.length;u<d;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function c2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new NM,e.set(i,[r])):s>=a.length?(r=new NM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function u2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new Jt};break;case"SpotLight":n={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function h2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var f2=0;function d2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function p2(e){let t=new u2,n=h2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,a=new Pe,r=new Pe;function o(c){let f=0,p=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,g=0,b=0,m=0,h=0,v=0,M=0,y=0,E=0,T=0,w=0,x=0,A=0,R=0;c.sort(d2);for(let z=0,V=c.length;z<V;z++){let U=c[z],G=U.color,K=U.intensity,Z=U.distance,it=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===fa?it=U.shadow.map.texture:it=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=G.r*K,p+=G.g*K,u+=G.b*K;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],K);R++}else if(U.isSunLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let W=U.shadow,j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=it;let _t=W.getViewportCount();for(let xt=0;xt<_t;xt++)i.sunShadowMatrix[b+xt]=W.getMatrix(xt),i.sunShadowCascade[b+xt]=W._cascadeData[xt];b+=_t,g++}i.sun[d]=q,d++}else if(U.isDirectionalLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let W=U.shadow,j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=U.shadow.matrix,E++}i.directional[m]=q,m++}else if(U.isSpotLight){let q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(G).multiplyScalar(K),q.distance=Z,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[v]=q;let W=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,W.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=W.matrix,U.castShadow){let j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=it,w++}v++}else if(U.isRectAreaLight){let q=t.get(U);q.color.copy(G).multiplyScalar(K),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=q,M++}else if(U.isPointLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let W=U.shadow,j=n.get(U);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[h]=j,i.pointShadowMap[h]=it,i.pointShadowMatrix[h]=U.shadow.matrix,T++}i.point[h]=q,h++}else if(U.isHemisphereLight){let q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(K),q.groundColor.copy(U.groundColor).multiplyScalar(K),i.hemi[y]=q,y++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==h||I.spotLength!==v||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=v,i.rectArea.length=M,i.point.length=h,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=h,I.spotLength=v,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=R,i.version=f2++)}function l(c,f){let p=0,u=0,d=0,g=0,b=0,m=0,h=f.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(y.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),g++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function IM(e){let t=new p2(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function m2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new IM(e),t.set(s,[o])):a>=r.length?(o=new IM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var g2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_2=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],y2=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],OM=new Pe,sc=new H,Gg=new H;function x2(e,t,n){let i=new Vl,s=new jt,a=new jt,r=new Te,o=new wh,l=new Ch,c={},f=n.maxTextureSize,p={[ca]:En,[En]:ca,[fi]:fi},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:g2,fragmentShader:v2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new bi;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new bn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let h=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===RS&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yl);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),z=e.state;z.setBlending(ki),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=h!==this.type;V&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=T.length;U<G;U++){let K=T[U],Z=K.shadow;if(Z===void 0){Rt("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let it=Z.getFrameExtents();s.multiply(it),a.copy(Z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/it.x),s.x=a.x*it.x,Z.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/it.y),s.y=a.y*it.y,Z.mapSize.y=a.y));let q=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=q,Z.map===null||V===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ho){if(K.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new vn(s.x,s.y,{format:fa,type:wi,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new aa(s.x,s.y,Ai),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=Vi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en}else K.isPointLight?(Z.map=new Lf(s.x),Z.map.depthTexture=new Th(s.x,Ti)):(Z.map=new vn(s.x,s.y),Z.map.depthTexture=new aa(s.x,s.y,Ti)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=Vi,this.type===Yl?(Z.map.depthTexture.compareFunction=q?Cf:wf,Z.map.depthTexture.minFilter=Ye,Z.map.depthTexture.magFilter=Ye):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let W=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,x);for(let j=0;j<W;j++){let _t=Z.getCamera(j);if(K.isPointLight){let xt=Z.camera,$t=Z.matrix,Lt=K.distance||xt.far;Lt!==xt.far&&(xt.far=Lt,xt.updateProjectionMatrix()),sc.setFromMatrixPosition(K.matrixWorld),xt.position.copy(sc),Gg.copy(xt.position),Gg.add(_2[j]),xt.up.copy(y2[j]),xt.lookAt(Gg),xt.updateMatrixWorld(),$t.makeTranslation(-sc.x,-sc.y,-sc.z),OM.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(OM,xt.coordinateSystem,xt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,j),e.clear();else{j===0&&(e.setRenderTarget(Z.map),e.clear());let xt=Z.getViewport(j);r.set(a.x*xt.x,a.y*xt.y,a.x*xt.z,a.y*xt.w),z.viewport(r)}i=Z.getFrustum(j),y(w,x,_t,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ho&&v(Z,x),Z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(A,R,I)};function v(T,w){let x=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(s.x,s.y,{format:fa,type:wi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,x,u,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,x,d,b,null)}function M(T,w,x,A){let R=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=R.uuid,V=w.uuid,U=c[z];U===void 0&&(U={},c[z]=U);let G=U[V];G===void 0&&(G=R.clone(),U[V]=G,w.addEventListener("dispose",E)),R=G}if(R.visible=w.visible,R.wireframe=w.wireframe,A===ho?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=e.properties.get(R);z.light=x}return R}function y(T,w,x,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ho)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let V=t.update(T),U=T.material;if(Array.isArray(U)){let G=V.groups;for(let K=0,Z=G.length;K<Z;K++){let it=G[K],q=U[it.materialIndex];if(q&&q.visible){let W=M(T,q,A,R);T.onBeforeShadow(e,T,w,x,V,W,it),e.renderBufferDirect(x,null,V,W,T,it),T.onAfterShadow(e,T,w,x,V,W,it)}}}else if(U.visible){let G=M(T,U,A,R);T.onBeforeShadow(e,T,w,x,V,G,null),e.renderBufferDirect(x,null,V,G,T,null),T.onAfterShadow(e,T,w,x,V,G,null)}}let z=T.children;for(let V=0,U=z.length;V<U;V++)y(z[V],w,x,A,R)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function S2(e,t){function n(){let L=!1,lt=new Te,Q=null,ct=new Te(0,0,0,0);return{setMask:function(pt){Q!==pt&&!L&&(e.colorMask(pt,pt,pt,pt),Q=pt)},setLocked:function(pt){L=pt},setClear:function(pt,nt,wt,bt,ge){ge===!0&&(pt*=bt,nt*=bt,wt*=bt),lt.set(pt,nt,wt,bt),ct.equals(lt)===!1&&(e.clearColor(pt,nt,wt,bt),ct.copy(lt))},reset:function(){L=!1,Q=null,ct.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,Q=null,ct=null,pt=null;return{setReversed:function(nt){if(lt!==nt){let wt=t.get("EXT_clip_control");nt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?et(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!L&&(e.depthMask(nt),Q=nt)},setFunc:function(nt){if(lt&&(nt=uM[nt]),ct!==nt){switch(nt){case uh:e.depthFunc(e.NEVER);break;case hh:e.depthFunc(e.ALWAYS);break;case fh:e.depthFunc(e.LESS);break;case io:e.depthFunc(e.LEQUAL);break;case dh:e.depthFunc(e.EQUAL);break;case ph:e.depthFunc(e.GEQUAL);break;case mh:e.depthFunc(e.GREATER);break;case gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=nt}},setLocked:function(nt){L=nt},setClear:function(nt){pt!==nt&&(pt=nt,lt&&(nt=1-nt),e.clearDepth(nt))},reset:function(){L=!1,Q=null,ct=null,pt=null,lt=!1}}}function s(){let L=!1,lt=null,Q=null,ct=null,pt=null,nt=null,wt=null,bt=null,ge=null;return{setTest:function(se){L||(se?et(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(se){lt!==se&&!L&&(e.stencilMask(se),lt=se)},setFunc:function(se,pi,Ci){(Q!==se||ct!==pi||pt!==Ci)&&(e.stencilFunc(se,pi,Ci),Q=se,ct=pi,pt=Ci)},setOp:function(se,pi,Ci){(nt!==se||wt!==pi||bt!==Ci)&&(e.stencilOp(se,pi,Ci),nt=se,wt=pi,bt=Ci)},setLocked:function(se){L=se},setClear:function(se){ge!==se&&(e.clearStencil(se),ge=se)},reset:function(){L=!1,lt=null,Q=null,ct=null,pt=null,nt=null,wt=null,bt=null,ge=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,g=[],b=null,m=!1,h=null,v=null,M=null,y=null,E=null,T=null,w=null,x=new Jt(0,0,0),A=0,R=!1,I=null,z=null,V=null,U=null,G=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,it=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=it>=2);let W=null,j={},_t=e.getParameter(e.SCISSOR_BOX),xt=e.getParameter(e.VIEWPORT),$t=new Te().fromArray(_t),Lt=new Te().fromArray(xt);function zt(L,lt,Q,ct){let pt=new Uint8Array(4),nt=e.createTexture();e.bindTexture(L,nt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<Q;wt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,pt):e.texImage2D(lt+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pt);return nt}let X={};X[e.TEXTURE_2D]=zt(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=zt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=zt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=zt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(io),qt(!1),Ae(rg),et(e.CULL_FACE),ee(ki);function et(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function yt(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function It(L,lt){return u[L]!==lt?(e.bindFramebuffer(L,lt),u[L]=lt,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(L,lt){let Q=g,ct=!1;if(L){Q=d.get(lt),Q===void 0&&(Q=[],d.set(lt,Q));let pt=L.textures;if(Q.length!==pt.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,wt=pt.length;nt<wt;nt++)Q[nt]=e.COLOR_ATTACHMENT0+nt;Q.length=pt.length,ct=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,ct=!0);ct&&e.drawBuffers(Q)}function Gt(L){return b!==L?(e.useProgram(L),b=L,!0):!1}let We={[Wa]:e.FUNC_ADD,[US]:e.FUNC_SUBTRACT,[LS]:e.FUNC_REVERSE_SUBTRACT};We[NS]=e.MIN,We[IS]=e.MAX;let Ht={[OS]:e.ZERO,[PS]:e.ONE,[BS]:e.SRC_COLOR,[ug]:e.SRC_ALPHA,[kS]:e.SRC_ALPHA_SATURATE,[GS]:e.DST_COLOR,[FS]:e.DST_ALPHA,[zS]:e.ONE_MINUS_SRC_COLOR,[hg]:e.ONE_MINUS_SRC_ALPHA,[HS]:e.ONE_MINUS_DST_COLOR,[VS]:e.ONE_MINUS_DST_ALPHA,[WS]:e.CONSTANT_COLOR,[XS]:e.ONE_MINUS_CONSTANT_COLOR,[qS]:e.CONSTANT_ALPHA,[YS]:e.ONE_MINUS_CONSTANT_ALPHA};function ee(L,lt,Q,ct,pt,nt,wt,bt,ge,se){if(L===ki){m===!0&&(yt(e.BLEND),m=!1);return}if(m===!1&&(et(e.BLEND),m=!0),L!==DS){if(L!==h||se!==R){if((v!==Wa||E!==Wa)&&(e.blendEquation(e.FUNC_ADD),v=Wa,E=Wa),se)switch(L){case fo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFunc(e.ONE,e.ONE);break;case lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ut("WebGLState: Invalid blending: ",L);break}else switch(L){case fo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case lg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",L);break}M=null,y=null,T=null,w=null,x.set(0,0,0),A=0,h=L,R=se}return}pt=pt||lt,nt=nt||Q,wt=wt||ct,(lt!==v||pt!==E)&&(e.blendEquationSeparate(We[lt],We[pt]),v=lt,E=pt),(Q!==M||ct!==y||nt!==T||wt!==w)&&(e.blendFuncSeparate(Ht[Q],Ht[ct],Ht[nt],Ht[wt]),M=Q,y=ct,T=nt,w=wt),(bt.equals(x)===!1||ge!==A)&&(e.blendColor(bt.r,bt.g,bt.b,ge),x.copy(bt),A=ge),h=L,R=!1}function me(L,lt){L.side===fi?yt(e.CULL_FACE):et(e.CULL_FACE);let Q=L.side===En;lt&&(Q=!Q),qt(Q),L.blending===fo&&L.transparent===!1?ee(ki):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let ct=L.stencilWrite;o.setTest(ct),ct&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Tn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function qt(L){I!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),I=L)}function Ae(L){L!==wS?(et(e.CULL_FACE),L!==z&&(L===rg?e.cullFace(e.BACK):L===CS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),z=L}function Ke(L){L!==V&&(Z&&e.lineWidth(L),V=L)}function Tn(L,lt,Q){L?(et(e.POLYGON_OFFSET_FILL),(U!==lt||G!==Q)&&(U=lt,G=Q,r.getReversed()&&(lt=-lt),e.polygonOffset(lt,Q))):yt(e.POLYGON_OFFSET_FILL)}function Re(L){L?et(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function Be(L){L===void 0&&(L=e.TEXTURE0+K-1),W!==L&&(e.activeTexture(L),W=L)}function N(L,lt,Q){Q===void 0&&(W===null?Q=e.TEXTURE0+K-1:Q=W);let ct=j[Q];ct===void 0&&(ct={type:void 0,texture:void 0},j[Q]=ct),(ct.type!==L||ct.texture!==lt)&&(W!==Q&&(e.activeTexture(Q),W=Q),e.bindTexture(L,lt||X[L]),ct.type=L,ct.texture=lt)}function un(){let L=j[W];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function oe(){try{e.compressedTexImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function _(){try{e.texSubImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function O(){try{e.texSubImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function st(){try{e.texStorage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function at(){try{e.texStorage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function J(){try{e.texImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function $(){try{e.texImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function rt(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function Tt(L,lt){p[L]!==lt&&(e.pixelStorei(L,lt),p[L]=lt)}function ut(L){$t.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function ot(L){Lt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Lt.copy(L))}function At(L,lt){let Q=c.get(lt);Q===void 0&&(Q=new WeakMap,c.set(lt,Q));let ct=Q.get(L);ct===void 0&&(ct=e.getUniformBlockIndex(lt,L.name),Q.set(L,ct))}function Ct(L,lt){let ct=c.get(lt).get(L);l.get(lt)!==ct&&(e.uniformBlockBinding(lt,ct,L.__bindingPointIndex),l.set(lt,ct))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},W=null,j={},u={},d=new WeakMap,g=[],b=null,m=!1,h=null,v=null,M=null,y=null,E=null,T=null,w=null,x=new Jt(0,0,0),A=0,R=!1,I=null,z=null,V=null,U=null,G=null,$t.set(0,0,e.canvas.width,e.canvas.height),Lt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:yt,bindFramebuffer:It,drawBuffers:gt,useProgram:Gt,setBlending:ee,setMaterial:me,setFlipSided:qt,setCullFace:Ae,setLineWidth:Ke,setPolygonOffset:Tn,setScissorTest:Re,activeTexture:Be,bindTexture:N,unbindTexture:un,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:J,texImage3D:$,pixelStorei:Tt,getParameter:rt,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:F,compressedTexSubImage3D:Y,scissor:ut,viewport:ot,reset:Pt}}function M2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,f=new WeakMap,p=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return g?new OffscreenCanvas(C,_):Nl("canvas")}function m(C,_,O){let F=1,Y=oe(C);if((Y.width>O||Y.height>O)&&(F=O/Math.max(Y.width,Y.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let st=Math.floor(F*Y.width),at=Math.floor(F*Y.height);u===void 0&&(u=b(st,at));let J=_?b(st,at):u;return J.width=st,J.height=at,J.getContext("2d").drawImage(C,0,0,st,at),Rt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+at+")."),J}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function h(C){return C.generateMipmaps}function v(C){e.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,_,O,F,Y,st=!1){if(C!==null){if(e[C]!==void 0)return e[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;F&&(at=t.get("EXT_texture_norm16"),at||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===e.RED&&(O===e.FLOAT&&(J=e.R32F),O===e.HALF_FLOAT&&(J=e.R16F),O===e.UNSIGNED_BYTE&&(J=e.R8),O===e.UNSIGNED_SHORT&&at&&(J=at.R16_EXT),O===e.SHORT&&at&&(J=at.R16_SNORM_EXT)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.R8UI),O===e.UNSIGNED_SHORT&&(J=e.R16UI),O===e.UNSIGNED_INT&&(J=e.R32UI),O===e.BYTE&&(J=e.R8I),O===e.SHORT&&(J=e.R16I),O===e.INT&&(J=e.R32I)),_===e.RG&&(O===e.FLOAT&&(J=e.RG32F),O===e.HALF_FLOAT&&(J=e.RG16F),O===e.UNSIGNED_BYTE&&(J=e.RG8),O===e.UNSIGNED_SHORT&&at&&(J=at.RG16_EXT),O===e.SHORT&&at&&(J=at.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RG8UI),O===e.UNSIGNED_SHORT&&(J=e.RG16UI),O===e.UNSIGNED_INT&&(J=e.RG32UI),O===e.BYTE&&(J=e.RG8I),O===e.SHORT&&(J=e.RG16I),O===e.INT&&(J=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGB8UI),O===e.UNSIGNED_SHORT&&(J=e.RGB16UI),O===e.UNSIGNED_INT&&(J=e.RGB32UI),O===e.BYTE&&(J=e.RGB8I),O===e.SHORT&&(J=e.RGB16I),O===e.INT&&(J=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),O===e.UNSIGNED_INT&&(J=e.RGBA32UI),O===e.BYTE&&(J=e.RGBA8I),O===e.SHORT&&(J=e.RGBA16I),O===e.INT&&(J=e.RGBA32I)),_===e.RGB&&(O===e.UNSIGNED_SHORT&&at&&(J=at.RGB16_EXT),O===e.SHORT&&at&&(J=at.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),_===e.RGBA){let $=st?Ul:Zt.getTransfer(Y);O===e.FLOAT&&(J=e.RGBA32F),O===e.HALF_FLOAT&&(J=e.RGBA16F),O===e.UNSIGNED_BYTE&&(J=$===re?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&at&&(J=at.RGBA16_EXT),O===e.SHORT&&at&&(J=at.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(C,_){let O;return C?_===null||_===Ti||_===mo?O=e.DEPTH24_STENCIL8:_===Ai?O=e.DEPTH32F_STENCIL8:_===po&&(O=e.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ti||_===mo?O=e.DEPTH_COMPONENT24:_===Ai?O=e.DEPTH_COMPONENT32F:_===po&&(O=e.DEPTH_COMPONENT16),O}function T(C,_){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==Ye?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function w(C){let _=C.target;_.removeEventListener("dispose",w),A(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&p.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),I(_)}function A(C){let _=i.get(C);if(_.__webglInit===void 0)return;let O=C.source,F=d.get(O);if(F){let Y=F[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(F).length===0&&d.delete(O)}i.remove(C)}function R(C){let _=i.get(C);e.deleteTexture(_.__webglTexture);let O=C.source,F=d.get(O);delete F[_.__cacheKey],r.memory.textures--}function I(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let Y=0;Y<_.__webglFramebuffer[F].length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[F][Y]);else e.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)e.deleteFramebuffer(_.__webglFramebuffer[F]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=C.textures;for(let F=0,Y=O.length;F<Y;F++){let st=i.get(O[F]);st.__webglTexture&&(e.deleteTexture(st.__webglTexture),r.memory.textures--),i.remove(O[F])}i.remove(C)}let z=0;function V(){z=0}function U(){return z}function G(C){z=C}function K(){let C=z;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function Z(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function it(C,_){let O=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let F=C.image;if(F===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function q(C,_){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){yt(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function W(C,_){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){yt(O,C,_);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function j(C,_){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){It(O,C,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let _t={[vh]:e.REPEAT,[Fi]:e.CLAMP_TO_EDGE,[_h]:e.MIRRORED_REPEAT},xt={[en]:e.NEAREST,[KS]:e.NEAREST_MIPMAP_NEAREST,[Jl]:e.NEAREST_MIPMAP_LINEAR,[Ye]:e.LINEAR,[kh]:e.LINEAR_MIPMAP_NEAREST,[Wi]:e.LINEAR_MIPMAP_LINEAR},$t={[tM]:e.NEVER,[aM]:e.ALWAYS,[eM]:e.LESS,[wf]:e.LEQUAL,[nM]:e.EQUAL,[Cf]:e.GEQUAL,[iM]:e.GREATER,[sM]:e.NOTEQUAL};function Lt(C,_){if(_.type===Ai&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ye||_.magFilter===kh||_.magFilter===Jl||_.magFilter===Wi||_.minFilter===Ye||_.minFilter===kh||_.minFilter===Jl||_.minFilter===Wi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,_t[_.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,_t[_.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,_t[_.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,xt[_.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,xt[_.minFilter]),_.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,$t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Jl&&_.minFilter!==Wi||_.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function zt(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",w));let F=_.source,Y=d.get(F);Y===void 0&&(Y={},d.set(F,Y));let st=Z(_);if(st!==C.__cacheKey){Y[st]===void 0&&(Y[st]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Y[st].usedTimes++;let at=Y[C.__cacheKey];at!==void 0&&(Y[C.__cacheKey].usedTimes--,at.usedTimes===0&&R(_)),C.__cacheKey=st,C.__webglTexture=Y[st].texture}return O}function X(C,_,O){return Math.floor(Math.floor(C/O)/_)}function et(C,_,O,F){let st=C.updateRanges;if(st.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,F,_.data);else{st.sort((Tt,ut)=>Tt.start-ut.start);let at=0;for(let Tt=1;Tt<st.length;Tt++){let ut=st[at],ot=st[Tt],At=ut.start+ut.count,Ct=X(ot.start,_.width,4),Pt=X(ut.start,_.width,4);ot.start<=At+1&&Ct===Pt&&X(ot.start+ot.count-1,_.width,4)===Ct?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++at,st[at]=ot)}st.length=at+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),rt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Tt=0,ut=st.length;Tt<ut;Tt++){let ot=st[Tt],At=Math.floor(ot.start/4),Ct=Math.ceil(ot.count/4),Pt=At%_.width,L=Math.floor(At/_.width),lt=Ct,Q=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Pt,L,lt,Q,O,F,_.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,rt)}}function yt(C,_,O){let F=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=e.TEXTURE_3D);let Y=zt(C,_),st=_.source;n.bindTexture(F,C.__webglTexture,e.TEXTURE0+O);let at=i.get(st);if(st.version!==at.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=Zt.getPrimaries(Zt.workingColorSpace),ct=_.colorSpace===ys?null:Zt.getPrimaries(_.colorSpace),pt=_.colorSpace===ys||Q===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let $=m(_.image,!1,s.maxTextureSize);$=un(_,$);let rt=a.convert(_.format,_.colorSpace),Tt=a.convert(_.type),ut=y(_.internalFormat,rt,Tt,_.normalized,_.colorSpace,_.isVideoTexture);Lt(F,_);let ot,At=_.mipmaps,Ct=_.isVideoTexture!==!0,Pt=at.__version===void 0||Y===!0,L=st.dataReady,lt=T(_,$);if(_.isDepthTexture)ut=E(_.format===ha,_.type),Pt&&(Ct?n.texStorage2D(e.TEXTURE_2D,1,ut,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,ut,$.width,$.height,0,rt,Tt,null));else if(_.isDataTexture)if(At.length>0){Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let Q=0,ct=At.length;Q<ct;Q++)ot=At[Q],Ct?L&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,rt,Tt,ot.data):n.texImage2D(e.TEXTURE_2D,Q,ut,ot.width,ot.height,0,rt,Tt,ot.data);_.generateMipmaps=!1}else Ct?(Pt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,$.width,$.height),L&&et(_,$,rt,Tt)):n.texImage2D(e.TEXTURE_2D,0,ut,$.width,$.height,0,rt,Tt,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ut,At[0].width,At[0].height,$.depth);for(let Q=0,ct=At.length;Q<ct;Q++)if(ot=At[Q],_.format!==di)if(rt!==null)if(Ct){if(L)if(_.layerUpdates.size>0){let pt=Og(ot.width,ot.height,_.format,_.type);for(let nt of _.layerUpdates){let wt=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,nt,ot.width,ot.height,1,rt,wt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,$.depth,rt,ot.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,ut,ot.width,ot.height,$.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,$.depth,rt,Tt,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,ut,ot.width,ot.height,$.depth,0,rt,Tt,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,lt,ut,At[0].width,At[0].height);for(let Q=0,ct=At.length;Q<ct;Q++)ot=At[Q],_.format!==di?rt!==null?Ct?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,rt,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,ut,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?L&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,rt,Tt,ot.data):n.texImage2D(e.TEXTURE_2D,Q,ut,ot.width,ot.height,0,rt,Tt,ot.data)}else if(_.isDataArrayTexture)if(Ct){if(Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,ut,$.width,$.height,$.depth),L)if(_.layerUpdates.size>0){let Q=Og($.width,$.height,_.format,_.type);for(let ct of _.layerUpdates){let pt=$.data.subarray(ct*Q/$.data.BYTES_PER_ELEMENT,(ct+1)*Q/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ct,$.width,$.height,1,rt,Tt,pt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,rt,Tt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ut,$.width,$.height,$.depth,0,rt,Tt,$.data);else if(_.isData3DTexture)Ct?(Pt&&n.texStorage3D(e.TEXTURE_3D,lt,ut,$.width,$.height,$.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,rt,Tt,$.data)):n.texImage3D(e.TEXTURE_3D,0,ut,$.width,$.height,$.depth,0,rt,Tt,$.data);else if(_.isFramebufferTexture){if(Pt)if(Ct)n.texStorage2D(e.TEXTURE_2D,lt,ut,$.width,$.height);else{let Q=$.width,ct=$.height;for(let pt=0;pt<lt;pt++)n.texImage2D(e.TEXTURE_2D,pt,ut,Q,ct,0,rt,Tt,null),Q>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let Q=e.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),p.add(_),Q.onpaint=ct=>{let pt=ct.changedElements;for(let nt of p)pt.includes(nt.image)&&(nt.needsUpdate=!0)},Q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let pt=e.RGBA,nt=e.RGBA,wt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,pt,nt,wt,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ct&&Pt){let Q=oe(At[0]);n.texStorage2D(e.TEXTURE_2D,lt,ut,Q.width,Q.height)}for(let Q=0,ct=At.length;Q<ct;Q++)ot=At[Q],Ct?L&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,rt,Tt,ot):n.texImage2D(e.TEXTURE_2D,Q,ut,rt,Tt,ot);_.generateMipmaps=!1}else if(Ct){if(Pt){let Q=oe($);n.texStorage2D(e.TEXTURE_2D,lt,ut,Q.width,Q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt,Tt,$)}else n.texImage2D(e.TEXTURE_2D,0,ut,rt,Tt,$);h(_)&&v(F),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function It(C,_,O){if(_.image.length!==6)return;let F=zt(C,_),Y=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+O);let st=i.get(Y);if(Y.version!==st.__version||F===!0){n.activeTexture(e.TEXTURE0+O);let at=Zt.getPrimaries(Zt.workingColorSpace),J=_.colorSpace===ys?null:Zt.getPrimaries(_.colorSpace),$=_.colorSpace===ys||at===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Tt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!rt&&!Tt?ut[nt]=m(_.image[nt],!0,s.maxCubemapSize):ut[nt]=Tt?_.image[nt].image:_.image[nt],ut[nt]=un(_,ut[nt]);let ot=ut[0],At=a.convert(_.format,_.colorSpace),Ct=a.convert(_.type),Pt=y(_.internalFormat,At,Ct,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,lt=st.__version===void 0||F===!0,Q=Y.dataReady,ct=T(_,ot);Lt(e.TEXTURE_CUBE_MAP,_);let pt;if(rt){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=ut[nt].mipmaps;for(let wt=0;wt<pt.length;wt++){let bt=pt[wt];_.format!==di?At!==null?L?Q&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,bt.width,bt.height,At,bt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Pt,bt.width,bt.height,0,bt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,bt.width,bt.height,At,Ct,bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Pt,bt.width,bt.height,0,At,Ct,bt.data)}}}else{if(pt=_.mipmaps,L&&lt){pt.length>0&&ct++;let nt=oe(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){L?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,At,Ct,ut[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Pt,ut[nt].width,ut[nt].height,0,At,Ct,ut[nt].data);for(let wt=0;wt<pt.length;wt++){let ge=pt[wt].image[nt].image;L?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,ge.width,ge.height,At,Ct,ge.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Pt,ge.width,ge.height,0,At,Ct,ge.data)}}else{L?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Ct,ut[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Pt,At,Ct,ut[nt]);for(let wt=0;wt<pt.length;wt++){let bt=pt[wt];L?Q&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,At,Ct,bt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Pt,At,Ct,bt.image[nt])}}}h(_)&&v(e.TEXTURE_CUBE_MAP),st.__version=Y.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function gt(C,_,O,F,Y,st){let at=a.convert(O.format,O.colorSpace),J=a.convert(O.type),$=y(O.internalFormat,at,J,O.normalized,O.colorSpace),rt=i.get(_),Tt=i.get(O);if(Tt.__renderTarget=_,!rt.__hasExternalTextures){let ut=Math.max(1,_.width>>st),ot=Math.max(1,_.height>>st);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,st,$,ut,ot,_.depth,0,at,J,null):n.texImage2D(Y,st,$,ut,ot,0,at,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Be(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,F,Y,Tt.__webglTexture,0,Re(_)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,F,Y,Tt.__webglTexture,st),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Gt(C,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,C),_.depthBuffer){let F=_.depthTexture,Y=F&&F.isDepthTexture?F.type:null,st=E(_.stencilBuffer,Y),at=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Be(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),st,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),st,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,st,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,C)}else{let F=_.textures;for(let Y=0;Y<F.length;Y++){let st=F[Y],at=a.convert(st.format,st.colorSpace),J=a.convert(st.type),$=y(st.internalFormat,at,J,st.normalized,st.colorSpace);Be(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(_),$,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(_),$,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,$,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function We(C,_,O){let F=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,_.depthTexture);let rt=a.convert(_.depthTexture.format),Tt=a.convert(_.depthTexture.type),ut;_.depthTexture.format===Vi?ut=e.DEPTH_COMPONENT24:_.depthTexture.format===ha&&(ut=e.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,_.width,_.height,0,rt,Tt,null)}}else it(_.depthTexture,0);let st=Y.__webglTexture,at=Re(_),J=F?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,$=_.depthTexture.format===ha?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vi)Be(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,st,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,st,0);else if(_.depthTexture.format===ha)Be(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,st,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(C){let _=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let F=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",Y)};F.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=F}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let F=0;F<6;F++)We(_.__webglFramebuffer[F],C,F);else{let F=C.texture.mipmaps;F&&F.length>0?We(_.__webglFramebuffer[0],C,0):We(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=e.createRenderbuffer(),Gt(_.__webglDepthbuffer[F],C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[F];e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}else{let F=C.texture.mipmaps;if(F&&F.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Gt(_.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,st)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ee(C,_,O){let F=i.get(C);_!==void 0&&gt(F.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Ht(C)}function me(C){let _=C.texture,O=i.get(C),F=i.get(_);C.addEventListener("dispose",x);let Y=C.textures,st=C.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(F.__webglTexture===void 0&&(F.__webglTexture=e.createTexture()),F.__version=_.version,r.memory.textures++),st){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[J][$]=e.createFramebuffer()}else O.__webglFramebuffer[J]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[J]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(at)for(let J=0,$=Y.length;J<$;J++){let rt=i.get(Y[J]);rt.__webglTexture===void 0&&(rt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Be(C)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let $=Y[J];O.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let rt=a.convert($.format,$.colorSpace),Tt=a.convert($.type),ut=y($.internalFormat,rt,Tt,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),ot=Re(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,ut,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,O.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),Gt(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)gt(O.__webglFramebuffer[J][$],C,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else gt(O.__webglFramebuffer[J],C,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(_)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let J=0,$=Y.length;J<$;J++){let rt=Y[J],Tt=i.get(rt),ut=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,Tt.__webglTexture),Lt(ut,rt),gt(O.__webglFramebuffer,C,rt,e.COLOR_ATTACHMENT0+J,ut,0),h(rt)&&v(ut)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,F.__webglTexture),Lt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)gt(O.__webglFramebuffer[$],C,_,e.COLOR_ATTACHMENT0,J,$);else gt(O.__webglFramebuffer,C,_,e.COLOR_ATTACHMENT0,J,0);h(_)&&v(J),n.unbindTexture()}C.depthBuffer&&Ht(C)}function qt(C){let _=C.textures;for(let O=0,F=_.length;O<F;O++){let Y=_[O];if(h(Y)){let st=M(C),at=i.get(Y).__webglTexture;n.bindTexture(st,at),v(st),n.unbindTexture()}}}let Ae=[],Ke=[];function Tn(C){if(C.samples>0){if(Be(C)===!1){let _=C.textures,O=C.width,F=C.height,Y=e.COLOR_BUFFER_BIT,st=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(C),J=_.length>1;if(J)for(let rt=0;rt<_.length;rt++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let $=C.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let Tt=i.get(_[rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Tt,0)}e.blitFramebuffer(0,0,O,F,0,0,O,F,Y,e.NEAREST),l===!0&&(Ae.length=0,Ke.length=0,Ae.push(e.COLOR_ATTACHMENT0+rt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ae.push(st),Ke.push(st),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let rt=0;rt<_.length;rt++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let Tt=i.get(_[rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,Tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Re(C){return Math.min(s.maxSamples,C.samples)}function Be(C){let _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){let _=r.render.frame;f.get(C)!==_&&(f.set(C,_),C.update())}function un(C,_){let O=C.colorSpace,F=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Dl&&O!==ys&&(Zt.getTransfer(O)===re?(F!==di||Y!==Kn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",O)),_}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=me,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function b2(e,t){function n(i,s=ys){let a,r=Zt.getTransfer(s);if(i===Kn)return e.UNSIGNED_BYTE;if(i===Xh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===qh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sg)return e.BYTE;if(i===Mg)return e.SHORT;if(i===po)return e.UNSIGNED_SHORT;if(i===Wh)return e.INT;if(i===Ti)return e.UNSIGNED_INT;if(i===Ai)return e.FLOAT;if(i===wi)return e.HALF_FLOAT;if(i===Tg)return e.ALPHA;if(i===Ag)return e.RGB;if(i===di)return e.RGBA;if(i===Vi)return e.DEPTH_COMPONENT;if(i===ha)return e.DEPTH_STENCIL;if(i===wg)return e.RED;if(i===Yh)return e.RED_INTEGER;if(i===fa)return e.RG;if(i===Zh)return e.RG_INTEGER;if(i===Jh)return e.RGBA_INTEGER;if(i===Kl||i===Ql||i===jl||i===$l)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kh||i===Qh||i===jh||i===$h)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tf||i===ef||i===nf||i===sf||i===af||i===tc||i===rf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===tf||i===ef)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===nf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===sf)return a.COMPRESSED_R11_EAC;if(i===af)return a.COMPRESSED_SIGNED_R11_EAC;if(i===tc)return a.COMPRESSED_RG11_EAC;if(i===rf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===of||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===of)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ff)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===df)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_f)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xf)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===Mf||i===bf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Sf)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ef||i===Tf||i===ec||i===Af)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ef)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Tf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ec)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Af)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var E2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new kl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new cn({vertexShader:E2,fragmentShader:T2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kg=class extends Gi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,g=null,b=typeof XRWebGLBinding<"u",m=new Jg,h={},v=n.getContextAttributes(),M=null,y=null,E=[],T=[],w=new jt,x=null,A=null,R=new In;R.viewport=new Te;let I=new In;I.viewport=new Te;let z=[R,I],V=new Vh,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new ro,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new ro,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new ro,E[X]=et),et.getHandSpace()};function K(X){let et=T.indexOf(X.inputSource);if(et===-1)return;let yt=E[et];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||r),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",it);for(let X=0;X<E.length;X++){let et=T[X];et!==null&&(T[X]=null,E[X].disconnect(et))}U=null,G=null,m.reset();for(let X in h)delete h[X];if(t.setRenderTarget(M),d=null,u=null,p=null,s=null,y=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),A!==null){let X=A.camera;X.fov=A.fov,X.zoom=A.zoom,X.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,It=null,gt=null;v.depth&&(gt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=v.stencil?ha:Vi,It=v.stencil?mo:Ti);let Gt={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new vn(u.textureWidth,u.textureHeight,{format:di,type:Kn,depthTexture:new aa(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new vn(d.framebufferWidth,d.framebufferHeight,{format:di,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(X){for(let et=0;et<X.removed.length;et++){let yt=X.removed[et],It=T.indexOf(yt);It>=0&&(T[It]=null,E[It].disconnect(yt))}for(let et=0;et<X.added.length;et++){let yt=X.added[et],It=T.indexOf(yt);if(It===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=T.length){T.push(yt),It=Gt;break}else if(T[Gt]===null){T[Gt]=yt,It=Gt;break}if(It===-1)break}let gt=E[It];gt&&gt.connect(yt)}}let q=new H,W=new H;function j(X,et,yt){q.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(yt.matrixWorld);let It=q.distanceTo(W),gt=et.projectionMatrix.elements,Gt=yt.projectionMatrix.elements,We=gt[14]/(gt[10]-1),Ht=gt[14]/(gt[10]+1),ee=(gt[9]+1)/gt[5],me=(gt[9]-1)/gt[5],qt=(gt[8]-1)/gt[0],Ae=(Gt[8]+1)/Gt[0],Ke=We*qt,Tn=We*Ae,Re=It/(-qt+Ae),Be=Re*-qt;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),gt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=We+Re,un=Ht+Re,oe=Ke-Be,C=Tn+(It-Be),_=ee*Ht/un*N,O=me*Ht/un*N;X.projectionMatrix.makePerspective(oe,C,_,O,N,un),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function _t(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,yt=X.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),V.near=I.near=R.near=et,V.far=I.far=R.far=yt,(U!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,G=V.far),V.layers.mask=X.layers.mask|6,R.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let It=X.parent,gt=V.cameras;_t(V,It);for(let Gt=0;Gt<gt.length;Gt++)_t(gt[Gt],It);gt.length===2?j(V,R,I):V.projectionMatrix.copy(R.projectionMatrix),A===null&&X.isPerspectiveCamera&&(A={camera:X,fov:X.fov,zoom:X.zoom}),xt(X,V,It)};function xt(X,et,yt){yt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(X){return h[X]};let $t=null;function Lt(X,et){if(f=et.getViewerPose(c||r),g=et,f!==null){let yt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let It=!1;yt.length!==V.cameras.length&&(V.cameras.length=0,It=!0);for(let Ht=0;Ht<yt.length;Ht++){let ee=yt[Ht],me=null;if(d!==null)me=d.getViewport(ee);else{let Ae=p.getViewSubImage(u,ee);me=Ae.viewport,Ht===0&&(t.setRenderTargetTextures(y,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(y))}let qt=z[Ht];qt===void 0&&(qt=new In,qt.layers.enable(Ht),qt.viewport=new Te,z[Ht]=qt),qt.matrix.fromArray(ee.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ee.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(me.x,me.y,me.width,me.height),Ht===0&&(V.matrix.copy(qt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),It===!0&&V.cameras.push(qt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Ht=p.getDepthInformation(yt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(gt&&gt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Ht=0;Ht<yt.length;Ht++){let ee=yt[Ht].camera;if(ee){let me=h[ee];me||(me=new kl,h[ee]=me);let qt=p.getCameraImage(ee);me.sourceTexture=qt}}}}for(let yt=0;yt<E.length;yt++){let It=T[yt],gt=E[yt];It!==null&&gt!==void 0&&gt.update(It,et,c||r)}$t&&$t(X,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let zt=new PM;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(X){$t=X},this.dispose=function(){}}},A2=new Pe,HM=new Nt;HM.set(-1,0,0,0,1,0,0,0,1);function w2(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Lg(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,v,M,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===En&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===En&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v=t.get(h),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(HM),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let v=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let T=E.program;i.uniformBlockBinding(y,T)}function c(y,E){let T=s[y.id];T===void 0&&(m(y),T=f(y),s[y.id]=T,y.addEventListener("dispose",v));let w=E.program;i.updateUBOMapping(y,w);let x=t.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function f(y){let E=p();y.__bindingPointIndex=E;let T=e.createBuffer(),w=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],T=y.uniforms,w=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let I=0,z=R.length;I<z;I++)d(R[I],x,I,w);else d(R,x,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,E,T,w){if(b(y,E,T,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){let z=A[I],V=h(z);g(z,y.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function g(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function b(y,E,T,w){let x=y.value,A=E+"_"+T;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let E=y.uniforms,T=0,w=16;for(let A=0,R=E.length;A<R;A++){let I=Array.isArray(E[A])?E[A]:[E[A]];for(let z=0,V=I.length;z<V;z++){let U=I[z],G=Array.isArray(U.value)?U.value:[U.value];for(let K=0,Z=G.length;K<Z;K++){let it=G[K],q=h(it),W=T%w,j=W%q.boundary,_t=W+j;T+=j,_t!==0&&w-_t<q.storage&&(T+=w-_t),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=q.storage}}}let x=T%w;return x>0&&(T+=w-x),y.__size=T,y.__cache={},this}function h(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",y),E}function v(y){let E=y.target;E.removeEventListener("dispose",v);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function M(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var R2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function D2(){return Xi===null&&(Xi=new co(R2,16,16,fa,wi),Xi.name="DFG_LUT",Xi.minFilter=Ye,Xi.magFilter=Ye,Xi.wrapS=Fi,Xi.wrapT=Fi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Nf=class{constructor(t={}){let{canvas:n=oM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Kn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let b=d,m=new Set([Jh,Zh,Yh]),h=new Set([Kn,Ti,po,mo,Xh,qh]),v=new Uint32Array(4),M=new Int32Array(4),y=new H,E=null,T=null,w=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,z=null,V=null,U=null,G=null;this._outputColorSpace=gn;let K=0,Z=0,it=null,q=-1,W=null,j=new Te,_t=new Te,xt=null,$t=new Jt(0),Lt=0,zt=n.width,X=n.height,et=1,yt=null,It=null,gt=new Te(0,0,zt,X),Gt=new Te(0,0,zt,X),We=!1,Ht=new Vl,ee=!1,me=!1,qt=new Pe,Ae=new H,Ke=new Te,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Be(){return it===null?et:1}let N=i;function un(S,D){return n.getContext(S,D)}let oe,C,_,O,F,Y,st,at,J,$,rt,Tt,ut,ot,At,Ct,Pt,L,lt,Q,ct,pt,nt;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",pi,!1),N===null){let D="webgl2";if(N=un(D,S),N===null)throw un(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(S){throw n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),Ut("WebGLRenderer: "+S.message),S}function wt(){oe=new BC(N),oe.init(),ct=new b2(N,oe),C=new wC(N,oe,t,ct),_=new S2(N,oe),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),U=N.createFramebuffer(),G=N.createFramebuffer(),O=new VC(N),F=new o2,Y=new M2(N,oe,_,F,C,ct,O),st=new PC(R),at=new HT(N),pt=new TC(N,at),J=new zC(N,at,O,pt),$=new HC(N,J,at,pt,O),L=new GC(N,C,Y),At=new CC(F),rt=new r2(R,st,oe,C,pt,At),Tt=new w2(R,F),ut=new c2,ot=new m2(oe),Pt=new EC(R,st,_,$,g,l),Ct=new x2(R,$,C),nt=new C2(N,O,C,_),lt=new AC(N,oe,O),Q=new FC(N,oe,O),O.programs=rt.programs,R.capabilities=C,R.extensions=oe,R.properties=F,R.renderLists=ut,R.shadowMap=Ct,R.state=_,R.info=O}b!==Kn&&(A=new WC(b,n.width,n.height,o,s,a));let bt=new Kg(R,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(zt,X,!1))},this.getSize=function(S){return S.set(zt,X)},this.setSize=function(S,D,k=!0){if(bt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=S,X=D,n.width=Math.floor(S*et),n.height=Math.floor(D*et),k===!0&&(n.style.width=S+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(zt*et,X*et).floor()},this.setDrawingBufferSize=function(S,D,k){zt=S,X=D,et=k,n.width=Math.floor(S*k),n.height=Math.floor(D*k),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(b===Kn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,D,k,P){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,D,k,P),_.viewport(j.copy(gt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,D,k,P){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,D,k,P),_.scissor(_t.copy(Gt).multiplyScalar(et).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){_.setScissorTest(We=S)},this.setOpaqueSort=function(S){yt=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,k=!0){let P=0;if(S){let B=!1;if(it!==null){let dt=it.texture.format;B=m.has(dt)}if(B){let dt=it.texture.type,vt=h.has(dt),ft=Pt.getClearColor(),St=Pt.getClearAlpha(),Et=ft.r,Ft=ft.g,kt=ft.b;vt?(v[0]=Et,v[1]=Ft,v[2]=kt,v[3]=St,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=Et,M[1]=Ft,M[2]=kt,M[3]=St,N.clearBufferiv(N.COLOR,0,M))}else P|=N.COLOR_BUFFER_BIT}D&&(P|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(P|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&N.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),Pt.dispose(),ut.dispose(),ot.dispose(),F.dispose(),st.dispose(),$.dispose(),pt.dispose(),nt.dispose(),rt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",e0),bt.removeEventListener("sessionend",n0),da.stop()};function ge(S){S.preventDefault(),Ug("WebGLRenderer: Context Lost."),I=!0}function se(){Ug("WebGLRenderer: Context Restored."),I=!1;let S=O.autoReset,D=Ct.enabled,k=Ct.autoUpdate,P=Ct.needsUpdate,B=Ct.type;wt(),O.autoReset=S,Ct.enabled=D,Ct.autoUpdate=k,Ct.needsUpdate=P,Ct.type=B}function pi(S){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ci(S){let D=S.target;D.removeEventListener("dispose",Ci),QM(D)}function QM(S){jM(S),F.remove(S)}function jM(S){let D=F.get(S).programs;D!==void 0&&(D.forEach(function(k){rt.releaseProgram(k)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,k,P,B,dt){D===null&&(D=Tn);let vt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ft=eb(S,D,k,P,B);_.setMaterial(P,vt);let St=k.index,Et=1;if(P.wireframe===!0){if(St=J.getWireframeAttribute(k),St===void 0)return;Et=2}let Ft=k.drawRange,kt=k.attributes.position,Mt=Ft.start*Et,ae=(Ft.start+Ft.count)*Et;dt!==null&&(Mt=Math.max(Mt,dt.start*Et),ae=Math.min(ae,(dt.start+dt.count)*Et)),St!==null?(Mt=Math.max(Mt,0),ae=Math.min(ae,St.count)):kt!=null&&(Mt=Math.max(Mt,0),ae=Math.min(ae,kt.count));let ze=ae-Mt;if(ze<0||ze===1/0)return;pt.setup(B,P,ft,k,St);let ye,de=lt;if(St!==null&&(ye=at.get(St),de=Q,de.setIndex(ye)),B.isMesh)P.wireframe===!0?(_.setLineWidth(P.wireframeLinewidth*Be()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(B.isLine){let hn=P.linewidth;hn===void 0&&(hn=1),_.setLineWidth(hn*Be()),B.isLineSegments?de.setMode(N.LINES):B.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else B.isPoints?de.setMode(N.POINTS):B.isSprite&&de.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let hn=B._multiDrawStarts,mt=B._multiDrawCounts,yn=B._multiDrawCount,te=St?at.get(St).bytesPerElement:1,Qn=F.get(P).currentProgram.getUniforms();for(let Ri=0;Ri<yn;Ri++)Qn.setValue(N,"_gl_DrawID",Ri),de.render(hn[Ri]/te,mt[Ri])}else if(B.isInstancedMesh)de.renderInstances(Mt,ze,B.count);else if(k.isInstancedBufferGeometry){let hn=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mt=Math.min(k.instanceCount,hn);de.renderInstances(Mt,ze,mt)}else de.render(Mt,ze)};function t0(S,D,k,P){z!==null&&S.isNodeMaterial&&z.setObject(P,S),ee===!0&&At.setState(S,k,!1),S.transparent===!0&&S.side===fi&&S.forceSinglePass===!1?(S.side=En,S.needsUpdate=!0,cc(S,D,P),S.side=ca,S.needsUpdate=!0,cc(S,D,P),S.side=fi):cc(S,D,P)}this.compile=function(S,D,k=null){k===null&&(k=S),z!==null&&z.renderStart(S,D,k),T=ot.get(k),T.init(D),x.push(T),k.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),S!==k&&S.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),me=this.localClippingEnabled,ee=At.init(this.clippingPlanes,me),ee===!0&&At.setGlobalState(this.clippingPlanes,D),z!==null&&Ct.render(T.state.shadowsArray,k,D);let P=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ft=dt[vt];t0(ft,k,D,B),P.add(ft)}else t0(dt,k,D,B),P.add(dt)}),T=x.pop(),z!==null&&z.renderEnd(),P},this.compileAsync=function(S,D,k=null){let P=this.compile(S,D,k);return new Promise(B=>{function dt(){if(P.forEach(function(vt){let St=F.get(vt).currentProgram;(St===void 0||St.isReady())&&P.delete(vt)}),P.size===0){B(S);return}setTimeout(dt,10)}oe.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Hf=null;function $M(S){Hf&&Hf(S)}function e0(){da.stop()}function n0(){da.start()}let da=new PM;da.setAnimationLoop($M),typeof self<"u"&&da.setContext(self),this.setAnimationLoop=function(S){Hf=S,bt.setAnimationLoop(S),S===null?da.stop():da.start()},bt.addEventListener("sessionstart",e0),bt.addEventListener("sessionend",n0),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(S,D);let k=bt.enabled===!0&&bt.isPresenting===!0,P=A!==null&&(it===null||k)&&A.begin(R,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,it),T=ot.get(S,x.length),T.init(D),T.state.textureUnits=Y.getTextureUnits(),x.push(T),qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ht.setFromProjectionMatrix(qt,Mi,D.reversedDepth),me=this.localClippingEnabled,ee=At.init(this.clippingPlanes,me),E=ut.get(S,w.length),E.init(),w.push(E),bt.enabled===!0&&bt.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&kf(vt,D,-1/0,R.sortObjects)}kf(S,D,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(yt,It),Re=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Re&&Pt.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&At.beginShadows();let B=T.state.shadowsArray;if(Ct.render(B,S,D),ee===!0&&At.endShadows(),(P&&A.hasRenderPass())===!1){let vt=E.opaque,ft=E.transmissive;if(T.setupLights(),D.isArrayCamera){let St=D.cameras;if(ft.length>0)for(let Et=0,Ft=St.length;Et<Ft;Et++){let kt=St[Et];s0(vt,ft,S,kt)}Re&&Pt.render(S);for(let Et=0,Ft=St.length;Et<Ft;Et++){let kt=St[Et];i0(E,S,kt,kt.viewport)}}else ft.length>0&&s0(vt,ft,S,D),Re&&Pt.render(S),i0(E,S,D)}it!==null&&Z===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),P&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),pt.resetDefaultState(),q=-1,W=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),ee===!0&&At.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,z!==null&&z.renderEnd()};function kf(S,D,k,P){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ht)){P&&Ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qt);let vt=$.update(S),ft=S.material;ft.visible&&E.push(S,vt,ft,k,Ke.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ht))){let vt=$.update(S),ft=S.material;if(P&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ke.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ke.copy(vt.boundingSphere.center)),Ke.applyMatrix4(S.matrixWorld).applyMatrix4(qt)),Array.isArray(ft)){let St=vt.groups;for(let Et=0,Ft=St.length;Et<Ft;Et++){let kt=St[Et],Mt=ft[kt.materialIndex];Mt&&Mt.visible&&E.push(S,vt,Mt,k,Ke.z,kt,D)}}else ft.visible&&E.push(S,vt,ft,k,Ke.z,null,D)}}let dt=S.children;for(let vt=0,ft=dt.length;vt<ft;vt++)kf(dt[vt],D,k,P)}function i0(S,D,k,P){let{opaque:B,transmissive:dt,transparent:vt}=S;T.setupLightsView(k),ee===!0&&At.setGlobalState(R.clippingPlanes,k),P&&_.viewport(j.copy(P)),B.length>0&&lc(B,D,k),dt.length>0&&lc(dt,D,k),vt.length>0&&lc(vt,D,k),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function s0(S,D,k,P){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[P.id]===void 0){let Mt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[P.id]=new vn(1,1,{generateMipmaps:!0,type:Mt?wi:Kn,minFilter:Wi,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[P.id],vt=P.viewport||j;dt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),St=R.getActiveCubeFace(),Et=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor($t),Lt=R.getClearAlpha(),Lt<1&&R.setClearColor(16777215,.5),R.clear(),Re&&Pt.render(k);let Ft=R.toneMapping;R.toneMapping=Ei;let kt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),T.setupLightsView(P),ee===!0&&At.setGlobalState(R.clippingPlanes,P),lc(S,k,P),Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let ae=0,ze=D.length;ae<ze;ae++){let ye=D[ae],{object:de,geometry:hn,material:mt,group:yn}=ye;if(mt.side===fi&&de.layers.test(P.layers)){let te=mt.side;mt.side=En,mt.needsUpdate=!0,a0(de,k,P,hn,mt,yn),mt.side=te,mt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Y.updateMultisampleRenderTarget(dt),Y.updateRenderTargetMipmap(dt))}R.setRenderTarget(ft,St,Et),R.setClearColor($t,Lt),kt!==void 0&&(P.viewport=kt),R.toneMapping=Ft}function lc(S,D,k){let P=D.isScene===!0?D.overrideMaterial:null;for(let B=0,dt=S.length;B<dt;B++){let vt=S[B],{object:ft,geometry:St,group:Et}=vt,Ft=vt.material;Ft.allowOverride===!0&&P!==null&&(Ft=P),ft.layers.test(k.layers)&&a0(ft,D,k,St,Ft,Et)}}function a0(S,D,k,P,B,dt){z!==null&&B.isNodeMaterial&&z.setObject(S,B),S.onBeforeRender(R,D,k,P,B,dt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,D,k,P,S,dt),B.transparent===!0&&B.side===fi&&B.forceSinglePass===!1?(B.side=En,B.needsUpdate=!0,R.renderBufferDirect(k,D,P,B,S,dt),B.side=ca,B.needsUpdate=!0,R.renderBufferDirect(k,D,P,B,S,dt),B.side=fi):R.renderBufferDirect(k,D,P,B,S,dt),S.onAfterRender(R,D,k,P,B,dt)}function cc(S,D,k){D.isScene!==!0&&(D=Tn);let P=F.get(S),B=T.state.lights,dt=T.state.shadowsArray,vt=B.state.version,ft=rt.getParameters(S,B.state,dt,D,k,T.state.lightProbeGridArray),St=rt.getProgramCacheKey(ft),Et=P.programs;P.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,P.fog=D.fog;let Ft=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;P.envMap=st.get(S.envMap||P.environment,Ft),P.envMapRotation=P.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",Ci),Et=new Map,P.programs=Et);let kt=Et.get(St);if(kt!==void 0){if(P.currentProgram===kt&&P.lightsStateVersion===vt)return o0(S,ft),kt}else ft.uniforms=rt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,k,ft),S.onBeforeCompile(ft,R),kt=rt.acquireProgram(ft,St),Et.set(St,kt),P.uniforms=ft.uniforms;let Mt=P.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=At.uniform),o0(S,ft),P.needsLights=ib(S),P.lightsStateVersion=vt,P.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.sunLights.value=B.state.sun,Mt.sunLightShadows.value=B.state.sunShadow,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.sunShadowMatrix.value=B.state.sunShadowMatrix,Mt.sunShadowCascade.value=B.state.sunShadowCascade,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),P.lightProbeGrid=T.state.lightProbeGridArray.length>0,P.currentProgram=kt,P.uniformsList=null,kt}function r0(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=_o.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function o0(S,D){let k=F.get(S);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function tb(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let k=0,P=S.length;k<P;k++){let B=S[k];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function eb(S,D,k,P,B){D.isScene!==!0&&(D=Tn),Y.resetTextureUnits();let dt=D.fog,vt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?D.environment:null,ft=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zt.workingColorSpace,St=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Et=st.get(P.envMap||vt,St),Ft=P.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,kt=!!k.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Mt=!!k.morphAttributes.position,ae=!!k.morphAttributes.normal,ze=!!k.morphAttributes.color,ye=Ei;P.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=R.toneMapping);let de=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,hn=de!==void 0?de.length:0,mt=F.get(P),yn=T.state.lights;if(ee===!0&&(me===!0||S!==W)){let ve=S===W&&P.id===q;At.setState(P,S,ve)}let te=!1;P.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==yn.state.version||mt.outputColorSpace!==ft||B.isBatchedMesh&&mt.batching===!1||!B.isBatchedMesh&&mt.batching===!0||B.isBatchedMesh&&mt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&mt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&mt.instancing===!1||!B.isInstancedMesh&&mt.instancing===!0||B.isSkinnedMesh&&mt.skinning===!1||!B.isSkinnedMesh&&mt.skinning===!0||B.isInstancedMesh&&mt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&mt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&mt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&mt.instancingMorph===!1&&B.morphTexture!==null||mt.envMap!==Et||P.fog===!0&&mt.fog!==dt||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==At.numPlanes||mt.numIntersection!==At.numIntersection)||mt.vertexAlphas!==Ft||mt.vertexTangents!==kt||mt.morphTargets!==Mt||mt.morphNormals!==ae||mt.morphColors!==ze||mt.toneMapping!==ye||mt.morphTargetsCount!==hn||!!mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,mt.__version=P.version);let Qn=mt.currentProgram;te===!0&&(Qn=cc(P,D,B),z&&P.isNodeMaterial&&z.onUpdateProgram(P,Qn,mt));let Ri=!1,xs=!1,Ja=!1,ue=Qn.getUniforms(),Ne=mt.uniforms;if(_.useProgram(Qn.program)&&(Ri=!0,xs=!0,Ja=!0),P.id!==q&&(q=P.id,xs=!0),mt.needsLights){let ve=tb(T.state.lightProbeGridArray,B);mt.lightProbeGrid!==ve&&(mt.lightProbeGrid=ve,xs=!0)}if(Ri||W!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ue.setValue(N,"projectionMatrix",S.projectionMatrix),ue.setValue(N,"viewMatrix",S.matrixWorldInverse);let Ms=ue.map.cameraPosition;Ms!==void 0&&Ms.setValue(N,Ae.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ue.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,xs=!0,Ja=!0)}if(mt.needsLights&&(yn.state.sunShadowMap.length>0&&ue.setValue(N,"sunShadowMap",yn.state.sunShadowMap,Y),yn.state.directionalShadowMap.length>0&&ue.setValue(N,"directionalShadowMap",yn.state.directionalShadowMap,Y),yn.state.spotShadowMap.length>0&&ue.setValue(N,"spotShadowMap",yn.state.spotShadowMap,Y),yn.state.pointShadowMap.length>0&&ue.setValue(N,"pointShadowMap",yn.state.pointShadowMap,Y)),B.isSkinnedMesh){ue.setOptional(N,B,"bindMatrix"),ue.setOptional(N,B,"bindMatrixInverse");let ve=B.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ue.setValue(N,"boneTexture",ve.boneTexture,Y))}B.isBatchedMesh&&(ue.setOptional(N,B,"batchingTexture"),ue.setValue(N,"batchingTexture",B._matricesTexture,Y),ue.setOptional(N,B,"batchingIdTexture"),ue.setValue(N,"batchingIdTexture",B._indirectTexture,Y),ue.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(N,"batchingColorTexture",B._colorsTexture,Y));let Ss=k.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&L.update(B,k,Qn),(xs||mt.receiveShadow!==B.receiveShadow)&&(mt.receiveShadow=B.receiveShadow,ue.setValue(N,"receiveShadow",B.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&D.environment!==null&&(Ne.envMapIntensity.value=D.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=D2()),xs){if(ue.setValue(N,"toneMappingExposure",R.toneMappingExposure),mt.needsLights&&nb(Ne,Ja),dt&&P.fog===!0&&Tt.refreshFogUniforms(Ne,dt),Tt.refreshMaterialUniforms(Ne,P,et,X,T.state.transmissionRenderTarget[S.id]),mt.needsLights&&mt.lightProbeGrid){let ve=mt.lightProbeGrid;Ne.probesSH.value=ve.texture,Ne.probesMin.value.copy(ve.boundingBox.min),Ne.probesMax.value.copy(ve.boundingBox.max),Ne.probesResolution.value.copy(ve.resolution)}_o.upload(N,r0(mt),Ne,Y)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(_o.upload(N,r0(mt),Ne,Y),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ue.setValue(N,"center",B.center),ue.setValue(N,"modelViewMatrix",B.modelViewMatrix),ue.setValue(N,"normalMatrix",B.normalMatrix),ue.setValue(N,"modelMatrix",B.matrixWorld),P.uniformsGroups!==void 0){let ve=P.uniformsGroups;for(let Ms=0,Ka=ve.length;Ms<Ka;Ms++){let c0=ve[Ms];nt.update(c0,Qn),nt.bind(c0,Qn)}}return Qn}function nb(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function ib(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,D,k){let P=F.get(S);P.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),F.get(S.texture).__webglTexture=D,F.get(S.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:k,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let k=F.get(S);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,k=0){it=S,K=D,Z=k;let P=null,B=!1,dt=!1;if(S){let ft=F.get(S);if(ft.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),j.copy(S.viewport),_t.copy(S.scissor),xt=S.scissorTest,_.viewport(j),_.scissor(_t),_.setScissorTest(xt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ft.__hasExternalTextures)Y.rebindTextures(S,F.get(S.texture).__webglTexture,F.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ft=S.depthTexture;if(ft.__boundDepthTexture!==Ft){if(Ft!==null&&F.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let St=S.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);let Et=F.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?P=Et[D][k]:P=Et[D],B=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?P=F.get(S).__webglMultisampledFramebuffer:Array.isArray(Et)?P=Et[k]:P=Et,j.copy(S.viewport),_t.copy(S.scissor),xt=S.scissorTest}else j.copy(gt).multiplyScalar(et).floor(),_t.copy(Gt).multiplyScalar(et).floor(),xt=We;if(k!==0&&(P=V),_.bindFramebuffer(N.FRAMEBUFFER,P)&&_.drawBuffers(S,P),_.viewport(j),_.scissor(_t),_.setScissorTest(xt),B){let ft=F.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,k)}else if(dt){let ft=D;for(let St=0;St<S.textures.length;St++){let Et=F.get(S.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Et.__webglTexture,k,ft)}}else if(S!==null&&k!==0){let ft=F.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,k)}q=-1};function l0(S){let D=F.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=C.textureFormatReadable(S.format),D.__typeReadable=C.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,k,P,B,dt,vt,ft=0){if(!(S&&S.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){_.bindFramebuffer(N.FRAMEBUFFER,St);try{let Et=S.textures[ft],Ft=Et.format,kt=Et.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let Mt=l0(Et);if(Mt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-P&&k>=0&&k<=S.height-B&&N.readPixels(D,k,P,B,ct.convert(Ft),ct.convert(kt),dt)}finally{let Et=it!==null?F.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,D,k,P,B,dt,vt,ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(D>=0&&D<=S.width-P&&k>=0&&k<=S.height-B){_.bindFramebuffer(N.FRAMEBUFFER,St);let Et=S.textures[ft],Ft=Et.format,kt=Et.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let Mt=l0(Et);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ae),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(D,k,P,B,ct.convert(Ft),ct.convert(kt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ze=it!==null?F.get(it).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,ze);let ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cM(N,ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ae),N.deleteSync(ye),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,k=0){let P=Math.pow(2,-k),B=Math.floor(S.image.width*P),dt=Math.floor(S.image.height*P),vt=D!==null?D.x:0,ft=D!==null?D.y:0;Y.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,vt,ft,B,dt),_.unbindTexture()},this.copyTextureToTexture=function(S,D,k=null,P=null,B=0,dt=0){let vt,ft,St,Et,Ft,kt,Mt,ae,ze,ye=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(k!==null)vt=k.max.x-k.min.x,ft=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,Et=k.min.x,Ft=k.min.y,kt=k.isBox3?k.min.z:0;else{let Ne=Math.pow(2,-B);vt=Math.floor(ye.width*Ne),ft=Math.floor(ye.height*Ne),S.isDataArrayTexture?St=ye.depth:S.isData3DTexture?St=Math.floor(ye.depth*Ne):St=1,Et=0,Ft=0,kt=0}P!==null?(Mt=P.x,ae=P.y,ze=P.z):(Mt=0,ae=0,ze=0);let de=ct.convert(D.format),hn=ct.convert(D.type),mt;D.isData3DTexture?(Y.setTexture3D(D,0),mt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),mt=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),mt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let yn=_.getParameter(N.UNPACK_ROW_LENGTH),te=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Qn=_.getParameter(N.UNPACK_SKIP_PIXELS),Ri=_.getParameter(N.UNPACK_SKIP_ROWS),xs=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Et),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),_.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);let Ja=S.isDataArrayTexture||S.isData3DTexture,ue=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Ne=F.get(S),Ss=F.get(D),ve=F.get(Ne.__renderTarget),Ms=F.get(Ss.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,ve.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let Ka=0;Ka<St;Ka++)Ja&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(S).__webglTexture,B,kt+Ka),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(D).__webglTexture,dt,ze+Ka)),N.blitFramebuffer(Et,Ft,vt,ft,Mt,ae,vt,ft,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||F.has(S)){let Ne=F.get(S),Ss=F.get(D);_.bindFramebuffer(N.READ_FRAMEBUFFER,U),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let ve=0;ve<St;ve++)Ja?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,B,kt+ve):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,B),ue?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ss.__webglTexture,dt,ze+ve):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ss.__webglTexture,dt),B!==0?N.blitFramebuffer(Et,Ft,vt,ft,Mt,ae,vt,ft,N.COLOR_BUFFER_BIT,N.NEAREST):ue?N.copyTexSubImage3D(mt,dt,Mt,ae,ze+ve,Et,Ft,vt,ft):N.copyTexSubImage2D(mt,dt,Mt,ae,Et,Ft,vt,ft);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ue?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(mt,dt,Mt,ae,ze,vt,ft,St,de,hn,ye.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(mt,dt,Mt,ae,ze,vt,ft,St,de,ye.data):N.texSubImage3D(mt,dt,Mt,ae,ze,vt,ft,St,de,hn,ye):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,Mt,ae,vt,ft,de,hn,ye.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,Mt,ae,ye.width,ye.height,de,ye.data):N.texSubImage2D(N.TEXTURE_2D,dt,Mt,ae,vt,ft,de,hn,ye);_.pixelStorei(N.UNPACK_ROW_LENGTH,yn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Qn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),_.pixelStorei(N.UNPACK_SKIP_IMAGES,xs),dt===0&&D.generateMipmaps&&N.generateMipmap(mt),_.unbindTexture()},this.initRenderTarget=function(S){F.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){K=0,Z=0,it=null,_.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}};var Qg="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",kM=`
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
}`,WM="uniform sampler2D source;varying vec2 vUv;void main(){gl_FragColor=texture2D(source,vUv);}",XM=`
attribute vec4 rect;attribute vec4 shape;attribute vec4 optics;attribute vec4 pigment;
uniform vec2 viewport;
varying vec2 vLocal;varying vec2 vPixel;varying vec4 vRect;varying vec4 vShape;varying vec4 vOptics;varying vec4 vPigment;
void main(){
 vec2 p=position.xy*(rect.zw+vec2(5.));
 float c=cos(shape.z),s=sin(shape.z);vec2 world=vec2(c*p.x-s*p.y,s*p.x+c*p.y)+rect.xy;
 vLocal=p;vPixel=world;vRect=rect;vShape=shape;vOptics=optics;vPigment=pigment;
 gl_Position=vec4(world.x/viewport.x*2.-1.,1.-world.y/viewport.y*2.,0.,1.);
}`,qM=`
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
}`;var rc=640,jg=e=>e.replace(/}\s*$/,`
#include <colorspace_fragment>
}`),L2=[".brand-mark",".header-nav",".water-label",".fish-total",".actions",".actions button",".pause-badge",".editor-card",".stock-specimen",".card-icon",".manual-net",".catch-preview",".primary-button",".secondary-button",".icon-button",".appearance-panel",".preset-grid button",".glass-mode-picker button",'.color-row input[type="color"]',".background-upload",".background-thumbnail",".optical-pattern-label",".appearance-footer button",".reset-confirmation",".reset-confirmation button","#background-remove","#reset-button","#undo-catch",".optical-field-shell"],Pf=class{constructor(){if(this.failed=!1,this.dirty=!0,this.ratio=1,this.hosts=[],this.lastPhoto=null,this.study=new URLSearchParams(window.location.search).get("study")==="glass",this.renderer=new Nf({alpha:!1,antialias:!1,powerPreference:"high-performance"}),this.renderer.autoClear=!1,this.renderer.debug.onShaderError=(i,s,a,r)=>{console.error("Optical shader:",i.getShaderInfoLog(a),i.getShaderInfoLog(r)),this.fail()},this.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.fail()}),this.camera=new ka,this.quad=new Ha(2,2),this.white=new co(new Uint8Array([255,255,255,255]),1,1),this.white.needsUpdate=!0,this.waterTexture=new Hl(document.getElementById("c")),this.waterTexture.colorSpace=gn,this.paintComposerRT=this.target(),this.natureRT=this.target(),this.bgUniforms={waterMap:{value:this.waterTexture},photoMap:{value:this.white},viewport:{value:new jt},tank:{value:new Te},environment:{value:new Jt},waterTint:{value:new Jt},hasPhoto:{value:0},photoAspect:{value:1},photoAnchor:{value:.5},shade:{value:.35},pattern:{value:0}},this.backgroundScene=this.scene(new cn({vertexShader:Qg,fragmentShader:jg(kM),uniforms:this.bgUniforms,depthTest:!1,depthWrite:!1})),this.copyUniforms={source:{value:this.paintComposerRT.texture}},this.copyScene=this.scene(new cn({vertexShader:Qg,fragmentShader:jg(WM),uniforms:this.copyUniforms,depthTest:!1,depthWrite:!1})),this.nature=this.batch(),this.ui=this.batch(),this.pageCanvas=document.createElement("canvas"),this.pageCanvas.className="optical-page-background",this.pageCanvas.setAttribute("aria-hidden","true"),document.body.prepend(this.pageCanvas),this.pageContext=this.pageCanvas.getContext("2d"),!this.pageContext)throw Error("2D compositor unavailable");for(let i of document.querySelectorAll('input[type="number"],select')){let s=document.createElement("div");s.className="optical-field-shell",i.before(s),s.append(i)}this.refreshHosts();let t=()=>{this.dirty=!0};window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),this.resizeObserver=new ResizeObserver(t);for(let{host:i}of this.hosts)this.resizeObserver.observe(i);this.mutationObserver=new MutationObserver(t),this.mutationObserver.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["hidden","open"]}),document.getElementById("appearance-panel").addEventListener("toggle",t),document.documentElement.dataset.opticsReady="true"}target(){return new vn(1,1,{minFilter:Wi,magFilter:Ye,generateMipmaps:!0,depthBuffer:!1,stencilBuffer:!1})}scene(t){let n=new oo,i=new bn(this.quad,t);return i.frustumCulled=!1,n.add(i),n}batch(){let t=new ql;t.index=this.quad.index,t.attributes.position=this.quad.attributes.position,t.attributes.uv=this.quad.attributes.uv;let n={rect:new Float32Array(rc*4),shape:new Float32Array(rc*4),optics:new Float32Array(rc*4),pigment:new Float32Array(rc*4)};for(let[o,l]of Object.entries(n))t.setAttribute(o,new Fl(l,4).setUsage(Rg));t.instanceCount=0;let i={background:{value:this.paintComposerRT.texture},viewport:{value:new jt},strength:{value:1},clock:{value:0}},s=new cn({vertexShader:XM,fragmentShader:jg(qM),uniforms:i,transparent:!0,depthTest:!1,depthWrite:!1,side:fi}),a=new bn(t,s);a.frustumCulled=!1;let r=new oo;return r.add(a),{scene:r,material:s,geometry:t,uniforms:i,arrays:n,count:0}}get active(){return!this.failed&&document.documentElement.dataset.glassMode==="plus"}fail(){if(!this.failed){this.failed=!0,document.documentElement.dataset.opticsReady="false";for(let{host:t}of this.hosts)t.removeAttribute("data-optical-surface");window.dispatchEvent(new Event("optics-unavailable"))}}refreshHosts(){let t=new Set(document.querySelectorAll(L2.join(",")));for(let n of t){let i=document.createElement("canvas");i.className="optical-surface-canvas",i.setAttribute("aria-hidden","true"),n.prepend(i),n.dataset.opticalSurface="true",this.hosts.push({host:n,canvas:i,context:i.getContext("2d"),box:null,visible:!1})}}resize(){let t=document.documentElement.clientWidth,n=window.innerHeight;if(this.ratio=Math.min(window.devicePixelRatio||1,1.25),this.width!==t||this.height!==n){this.width=t,this.height=n,this.renderer.setPixelRatio(this.ratio),this.renderer.setSize(t,n,!1);let i=this.renderer.domElement.width,s=this.renderer.domElement.height;this.paintComposerRT.setSize(i,s),this.natureRT.setSize(i,s),this.pageCanvas.width=i,this.pageCanvas.height=s,this.bgUniforms.viewport.value.set(t,n),this.nature.uniforms.viewport.value.set(t,n),this.ui.uniforms.viewport.value.set(t,n),this.dirty=!0}if(this.dirty){this.tank=document.getElementById("c").getBoundingClientRect();for(let i of this.hosts){let{host:s}=i;if(s.closest("[hidden]")||s.closest("#appearance-panel")&&!document.getElementById("appearance-panel").matches(":popover-open")){i.visible=!1;continue}let r=s.getBoundingClientRect();i.box=r,i.visible=r.width>2&&r.height>2&&r.bottom>0&&r.top<n&&r.right>0&&r.left<t,i.visible&&(i.radius=parseFloat(getComputedStyle(s).borderTopLeftRadius)||12,i.canvas.width!==Math.ceil(r.width*this.ratio)&&(i.canvas.width=Math.ceil(r.width*this.ratio)),i.canvas.height!==Math.ceil(r.height*this.ratio)&&(i.canvas.height=Math.ceil(r.height*this.ratio)))}this.dirty=!1}}add(t,n,i,s,a,r=0,o=10,l=0,{thickness:c,bezel:f,tint:p=.03,lod:u=.45,color:d=null,colorStrength:g=.48}={}){if(t.count>=rc||s<=0||a<=0)return;let b=Math.min(s,a);if(n+s+10<0||n-s-10>this.width||i+a+10<0||i-a-10>this.height)return;let m=t.count++*4;t.arrays.pigment.set(d?[d.r,d.g,d.b,g]:[1,1,1,0],m),t.arrays.rect.set([n,i,s,a],m),t.arrays.shape.set([o,r,l,u],m),t.arrays.optics.set([f??Math.max(2,Math.min(b*.43,14)),c??Math.max(3,Math.min(b*.8,24)),p,Math.max(3,Math.min(b*.9,24))],m)}populate(t){if(this.nature.count=0,this.ui.count=0,this.study){let n=Math.min(this.tank.height*.46,195);this.add(this.nature,this.tank.left+this.tank.width*.5,this.tank.top+this.tank.height*.51,n*.63,n,4,0,0,{bezel:18,thickness:30,lod:.55})}for(let n of this.hosts){if(!n.visible)continue;let i=n.box,s=n.host.id==="appearance-panel",a=n.host.tagName==="BUTTON"||n.host.classList.contains("optical-field-shell");this.add(this.ui,i.left+i.width/2,i.top+i.height/2,i.width/2,i.height/2,0,n.radius,0,{tint:s?.69:a?.32:.14,bezel:s?23:void 0,thickness:s?34:void 0,lod:s?1.5:.65})}for(let n of[this.nature,this.ui]){n.geometry.instanceCount=n.count;for(let i of Object.values(n.geometry.attributes))i.isInstancedBufferAttribute&&(i.needsUpdate=!0);n.uniforms.strength.value=Number(document.getElementById("glass-strength").value)/65,n.uniforms.clock.value=t.time}}photo(){let t=window.AquariumBackdrop?.getPage?.();(t?.image||null)!==this.lastPhoto&&(this.photoTexture?.dispose(),this.lastPhoto=t?.image||null,this.photoTexture=t?new ln(t.image):null,this.photoTexture&&(this.photoTexture.colorSpace=gn,this.photoTexture.needsUpdate=!0),this.bgUniforms.photoMap.value=this.photoTexture||this.white),this.bgUniforms.hasPhoto.value=t?1:0,t&&(this.bgUniforms.photoAspect.value=t.image.naturalWidth/t.image.naturalHeight,this.bgUniforms.photoAnchor.value=t.position==="top"?0:t.position==="bottom"?1:.5,this.bgUniforms.shade.value=t.shade/100)}render(t){if(!this.active)return!1;let n=performance.now();this.sampleStart||(this.sampleStart=n,this.sampleFrames=0),++this.sampleFrames===30&&(document.documentElement.dataset.opticsFps=(3e4/Math.max(1,n-this.sampleStart)).toFixed(1),this.sampleStart=n,this.sampleFrames=0),this.resize(),this.populate(t),this.photo();let i=window.AquariumAppearance?.get();this.bgUniforms.environment.value.set(i?.page||"#173b43"),this.bgUniforms.waterTint.value.set(i?.top||"#4c858a");let s=this.tank;this.bgUniforms.tank.value.set(s.left,s.top,s.width,s.height),this.bgUniforms.pattern.value=document.documentElement.dataset.opticalPattern==="true"?1:0,this.waterTexture.needsUpdate=!0;let a=this.renderer;if(a.setRenderTarget(this.paintComposerRT),a.clear(),a.render(this.backgroundScene,this.camera),a.setRenderTarget(this.natureRT),a.clear(),this.copyUniforms.source.value=this.paintComposerRT.texture,a.render(this.copyScene,this.camera),a.render(this.nature.scene,this.camera),a.setRenderTarget(null),a.clear(),this.copyUniforms.source.value=this.natureRT.texture,a.render(this.copyScene,this.camera),this.pageContext.drawImage(a.domElement,0,0),this.ui.uniforms.background.value=this.natureRT.texture,a.render(this.ui.scene,this.camera),this.failed)return!1;let r=a.domElement,o=r.width/this.width,l=r.height/this.height,c=(f,p,u,d)=>{let g=Math.max(0,p.left),b=Math.max(0,p.top),m=Math.min(this.width,p.right),h=Math.min(this.height,p.bottom);m<=g||h<=b||f.drawImage(r,g*o,b*l,(m-g)*o,(h-b)*l,(g-p.left)*u/p.width,(b-p.top)*d/p.height,(m-g)*u/p.width,(h-b)*d/p.height)};t.ctx.save(),t.ctx.setTransform(1,0,0,1,0,0),c(t.ctx,s,t.cv.width,t.cv.height),t.ctx.restore();for(let f of this.hosts)f.visible&&f.context&&(f.context.clearRect(0,0,f.canvas.width,f.canvas.height),c(f.context,f.box,f.canvas.width,f.canvas.height));return!0}dispose(){this.resizeObserver?.disconnect(),this.mutationObserver?.disconnect(),this.paintComposerRT.dispose(),this.natureRT.dispose(),this.waterTexture.dispose(),this.photoTexture?.dispose(),this.white.dispose();for(let t of[this.nature,this.ui])t.geometry.dispose(),t.material.dispose();this.renderer.dispose(),this.pageCanvas.remove();for(let t of this.hosts)t.canvas.remove()}};var zf=pa(Ml()),Bf=document.getElementById("appearance-panel"),N2=[document.querySelector(".actions"),Bf],Za={narrow:matchMedia("(max-width: 540px)"),reduced:matchMedia("(prefers-reduced-motion: reduce)"),solid:matchMedia("(prefers-reduced-transparency: reduce)"),contrast:matchMedia("(prefers-contrast: more)")},Ff=!0,On;try{On=GlassSettings.naturalize(localStorage,GlassSettings.load(localStorage))}catch{On=GlassSettings.sanitize(null)}var YM,$g=new Set;function JM(){return GlassSettings.resolve(On,{narrow:Za.narrow.matches,reduced:Za.reduced.matches,transparent:!Za.solid.matches&&!Za.contrast.matches,supported:Ff})}function Vf(){let e=JM();document.documentElement.dataset.glassMode=e,document.documentElement.dataset.opticalPattern=String(On.pattern),document.getElementById("optical-pattern").checked=On.pattern;for(let t of document.querySelectorAll("[data-glass-mode]"))t.setAttribute("aria-pressed",String(t.dataset.glassMode===On.mode));document.getElementById("glass-strength").value=On.strength,document.getElementById("glass-strength-value").textContent=On.strength+"%",document.getElementById("glass-strength").disabled=e!=="plus",document.getElementById("glass-render-status").textContent=e==="plus"?"Plus \xB7 \u901A\u900F\u539A\u73BB\u7483\u4E0E\u8FB9\u7F18\u6298\u5C04":e==="solid"?"\u5DF2\u9075\u5FAA\u7CFB\u7EDF\u504F\u597D \xB7 \u5B9E\u8272\u663E\u793A":"\u8F7B\u91CF\u78E8\u7802 \xB7 "+(Ff?Za.reduced.matches?"\u5DF2\u9075\u5FAA\u51CF\u5C11\u52A8\u6001\u6548\u679C\u504F\u597D":"\u66F4\u4F4E\u6E32\u67D3\u5F00\u9500":"\u5F53\u524D\u6D4F\u89C8\u5668\u517C\u5BB9\u6A21\u5F0F"),$g.forEach(t=>t({mode:e,strength:On.strength}))}function KM(){try{let e=GlassSettings.save(localStorage,On);document.getElementById("glass-save-status").textContent=e?"\u8D28\u611F\u8BBE\u7F6E\u5DF2\u4FDD\u5B58":"\u65E0\u6CD5\u4FDD\u5B58 \xB7 \u5F53\u524D\u8BBE\u7F6E\u4ECD\u7136\u751F\u6548"}catch{document.getElementById("glass-save-status").textContent="\u65E0\u6CD5\u4FDD\u5B58 \xB7 \u5F53\u524D\u8BBE\u7F6E\u4ECD\u7136\u751F\u6548"}}function Gf(e){On=GlassSettings.sanitize({...On,...e}),Vf(),clearTimeout(YM),YM=setTimeout(KM,180)}function I2({host:e,index:t}){let[n,i]=(0,oc.useState)({mode:JM(),strength:On.strength}),[s,a]=(0,oc.useState)(Bf.matches(":popover-open"));return(0,oc.useEffect)(()=>{$g.add(i),e.dataset.reactGlass="ready";let o=l=>a(l.newState==="open");return Bf.addEventListener("toggle",o),()=>{$g.delete(i),delete e.dataset.reactGlass,Bf.removeEventListener("toggle",o)}},[]),n.mode==="plus"&&document.documentElement.dataset.opticsReady==="true"?null:n.mode==="plus"&&(t===1?s:!s)?(0,zf.jsx)(oS,{className:"glass-optics",radius:t?30:24,bezel:t?20:14,thickness:t?35:24,refraction:n.strength/65,dispersion:.035,blur:t?5:1.2,saturation:1.35,tint:t?"rgba(8, 24, 37, .55)":"rgba(9, 34, 41, .24)",specular:.85,style:{width:"100%",height:"100%"}}):(0,zf.jsx)("div",{className:"glass-optical-fallback "+(n.mode==="solid"?"is-solid":"")})}for(let[e,t]of N2.entries()){let n=document.createElement("div");n.className="glass-react-mount",n.setAttribute("aria-hidden","true"),t.prepend(n),(0,ZM.createRoot)(n).render((0,zf.jsx)(I2,{host:t,index:e}));let i;t.addEventListener("pointerenter",()=>{i=t.getBoundingClientRect()}),t.addEventListener("pointermove",s=>{s.pointerType==="touch"||Za.reduced.matches||!i||(t.style.setProperty("--specular-x",Math.round((s.clientX-i.left)/i.width*100)+"%"),t.style.setProperty("--specular-y",Math.round((s.clientY-i.top)/i.height*100)+"%"))})}for(let e of Object.values(Za))e.addEventListener("change",Vf);for(let e of document.querySelectorAll("[data-glass-mode]"))e.addEventListener("click",()=>Gf({mode:e.dataset.glassMode}));document.getElementById("glass-strength").addEventListener("input",e=>Gf({strength:Number(e.target.value)}));document.getElementById("optical-pattern").addEventListener("change",e=>Gf({pattern:e.target.checked}));window.addEventListener("background-photo-selected",()=>Gf({pattern:!1}));window.addEventListener("optics-unavailable",()=>{Ff=!1,Vf()});window.addEventListener("pagehide",KM);try{window.AquariumOptics=new Pf}catch(e){Ff=!1,document.documentElement.dataset.opticsReady="false",console.warn("WebGL optical layer unavailable; using lightweight material.",e.message)}try{BackgroundModel.load(localStorage).image&&JSON.parse(localStorage.getItem(GlassSettings.KEY))?.pattern!==!0&&(On.pattern=!1)}catch{}Vf();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
