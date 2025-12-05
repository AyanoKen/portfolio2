var Ng=Object.defineProperty;var jg=(e,t,n)=>t in e?Ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>jg(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Mg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pc={exports:{}},Uo={},Nc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=Symbol.for("react.element"),Rg=Symbol.for("react.portal"),Lg=Symbol.for("react.fragment"),Dg=Symbol.for("react.strict_mode"),Vg=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),_g=Symbol.for("react.suspense"),Fg=Symbol.for("react.memo"),Hg=Symbol.for("react.lazy"),Wu=Symbol.iterator;function Ug(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Rc={};function sr(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||jc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lc(){}Lc.prototype=sr.prototype;function pl(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||jc}var ml=pl.prototype=new Lc;ml.constructor=pl;Mc(ml,sr.prototype);ml.isPureReactComponent=!0;var Ku=Array.isArray,Dc=Object.prototype.hasOwnProperty,gl={current:null},Vc={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Dc.call(t,r)&&!Vc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mi,type:e,key:o,ref:s,props:i,_owner:gl.current}}function Wg(e,t){return{$$typeof:mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===mi}function Kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gu=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kg(""+e.key):t.toString(36)}function Gi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mi:case Rg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+fs(s,0):r,Ku(i)?(n="",e!=null&&(n=e.replace(Gu,"$&/")+"/"),Gi(i,t,n,"",function(u){return u})):i!=null&&(yl(i)&&(i=Wg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ku(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+fs(o,a);s+=Gi(o,t,n,l,i)}else if(l=Ug(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+fs(o,a++),s+=Gi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ii(e,t,n){if(e==null)return e;var r=[],i=0;return Gi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},$i={transition:null},$g={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:$i,ReactCurrentOwner:gl};function zc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=sr;B.Fragment=Lg;B.Profiler=Vg;B.PureComponent=pl;B.StrictMode=Dg;B.Suspense=_g;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$g;B.act=zc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=gl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Dc.call(t,l)&&!Vc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mi,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bg,_context:e},e.Consumer=e};B.createElement=Bc;B.createFactory=function(e){var t=Bc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Og,render:e}};B.isValidElement=yl;B.lazy=function(e){return{$$typeof:Hg,_payload:{_status:-1,_result:e},_init:Gg}};B.memo=function(e,t){return{$$typeof:Fg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};B.unstable_act=zc;B.useCallback=function(e,t){return xe.current.useCallback(e,t)};B.useContext=function(e){return xe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};B.useEffect=function(e,t){return xe.current.useEffect(e,t)};B.useId=function(){return xe.current.useId()};B.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return xe.current.useMemo(e,t)};B.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};B.useRef=function(e){return xe.current.useRef(e)};B.useState=function(e){return xe.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return xe.current.useTransition()};B.version="18.3.1";Nc.exports=B;var x=Nc.exports;const Yg=Mg(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=x,qg=Symbol.for("react.element"),Qg=Symbol.for("react.fragment"),Jg=Object.prototype.hasOwnProperty,Zg=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ey={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jg.call(t,r)&&!ey.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qg,type:e,key:o,ref:s,props:i,_owner:Zg.current}}Uo.Fragment=Qg;Uo.jsx=Oc;Uo.jsxs=Oc;Pc.exports=Uo;var y=Pc.exports,ra={},_c={exports:{}},Be={},Fc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var D=C.length;C.push(L);e:for(;0<D;){var F=D-1>>>1,ie=C[F];if(0<i(ie,L))C[F]=L,C[D]=ie,D=F;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],D=C.pop();if(D!==L){C[0]=D;e:for(var F=0,ie=C.length,Tn=ie>>>1;F<Tn;){var Zt=2*(F+1)-1,cs=C[Zt],en=Zt+1,Ti=C[en];if(0>i(cs,D))en<ie&&0>i(Ti,cs)?(C[F]=Ti,C[en]=D,F=en):(C[F]=cs,C[Zt]=D,F=Zt);else if(en<ie&&0>i(Ti,D))C[F]=Ti,C[en]=D,F=en;else break e}}return L}function i(C,L){var D=C.sortIndex-L.sortIndex;return D!==0?D:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,d=null,c=3,g=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=C)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function k(C){if(v=!1,m(C),!w)if(n(l)!==null)w=!0,Oe(b);else{var L=n(u);L!==null&&U(k,L.startTime-C)}}function b(C,L){w=!1,v&&(v=!1,p(I),I=-1),g=!0;var D=c;try{for(m(L),d=n(l);d!==null&&(!(d.expirationTime>L)||C&&!re());){var F=d.callback;if(typeof F=="function"){d.callback=null,c=d.priorityLevel;var ie=F(d.expirationTime<=L);L=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),m(L)}else r(l);d=n(l)}if(d!==null)var Tn=!0;else{var Zt=n(u);Zt!==null&&U(k,Zt.startTime-L),Tn=!1}return Tn}finally{d=null,c=D,g=!1}}var T=!1,E=null,I=-1,V=5,j=-1;function re(){return!(e.unstable_now()-j<V)}function Ye(){if(E!==null){var C=e.unstable_now();j=C;var L=!0;try{L=E(!0,C)}finally{L?M():(T=!1,E=null)}}else T=!1}var M;if(typeof f=="function")M=function(){f(Ye)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Ne=$.port2;$.port1.onmessage=Ye,M=function(){Ne.postMessage(null)}}else M=function(){S(Ye,0)};function Oe(C){E=C,T||(T=!0,M())}function U(C,L){I=S(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Oe(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(c){case 1:case 2:case 3:var L=3;break;default:L=c}var D=c;c=L;try{return C()}finally{c=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=c;c=C;try{return L()}finally{c=D}},e.unstable_scheduleCallback=function(C,L,D){var F=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,C){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=D+ie,C={id:h++,callback:L,priorityLevel:C,startTime:D,expirationTime:ie,sortIndex:-1},D>F?(C.sortIndex=D,t(u,C),n(l)===null&&C===n(u)&&(v?(p(I),I=-1):v=!0,U(k,D-F))):(C.sortIndex=ie,t(l,C),w||g||(w=!0,Oe(b))),C},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(C){var L=c;return function(){var D=c;c=L;try{return C.apply(this,arguments)}finally{c=D}}}})(Hc);Fc.exports=Hc;var ty=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=x,Le=ty;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,Yr={};function bn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Yr[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$u={},Yu={};function iy(e){return ia.call(Yu,e)?!0:ia.call($u,e)?!1:ry.test(e)?Yu[e]=!0:($u[e]=!0,!1)}function oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sy(e,t,n,r){if(t===null||typeof t>"u"||oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wl,vl);pe[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wl,vl);pe[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wl,vl);pe[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function kl(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sy(t,n,i,r)&&(n=null),r||i===null?iy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),An=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Sl=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),Xu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ps;function Ar(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function ay(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case An:return"Portal";case oa:return"Profiler";case bl:return"StrictMode";case sa:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kc:return(e.displayName||"Context")+".Consumer";case Wc:return(e._context.displayName||"Context")+".Provider";case Sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function ly(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uy(e){var t=$c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=uy(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xc(e,t){t=t.checked,t!=null&&kl(e,"checked",t,!1)}function ha(e,t){Xc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Er(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function qc(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ci,Jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hy=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){hy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dy=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(dy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,Wn=null,Kn=null;function eh(e){if(e=wi(e)){if(typeof ya!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Yo(t),ya(e.stateNode,e.type,t))}}function tf(e){Wn?Kn?Kn.push(e):Kn=[e]:Wn=e}function nf(){if(Wn){var e=Wn,t=Kn;if(Kn=Wn=null,eh(e),t)for(e=0;e<t.length;e++)eh(t[e])}}function rf(e,t){return e(t)}function of(){}var ys=!1;function sf(e,t,n){if(ys)return e(t,n);ys=!0;try{return rf(e,t,n)}finally{ys=!1,(Wn!==null||Kn!==null)&&(of(),nf())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var wa=!1;if(bt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){wa=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{wa=!1}function cy(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Lr=!1,co=null,fo=!1,va=null,fy={onError:function(e){Lr=!0,co=e}};function py(e,t,n,r,i,o,s,a,l){Lr=!1,co=null,cy.apply(fy,arguments)}function my(e,t,n,r,i,o,s,a,l){if(py.apply(this,arguments),Lr){if(Lr){var u=co;Lr=!1,co=null}else throw Error(A(198));fo||(fo=!0,va=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function th(e){if(Sn(e)!==e)throw Error(A(188))}function gy(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return th(i),e;if(o===r)return th(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function lf(e){return e=gy(e),e!==null?uf(e):null}function uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uf(e);if(t!==null)return t;e=e.sibling}return null}var hf=Le.unstable_scheduleCallback,nh=Le.unstable_cancelCallback,yy=Le.unstable_shouldYield,wy=Le.unstable_requestPaint,ne=Le.unstable_now,vy=Le.unstable_getCurrentPriorityLevel,Il=Le.unstable_ImmediatePriority,df=Le.unstable_UserBlockingPriority,po=Le.unstable_NormalPriority,ky=Le.unstable_LowPriority,cf=Le.unstable_IdlePriority,Wo=null,lt=null;function by(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Ty,Sy=Math.log,xy=Math.LN2;function Ty(e){return e>>>=0,e===0?32:31-(Sy(e)/xy|0)|0}var Pi=64,Ni=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Cr(a):(o&=s,o!==0&&(r=Cr(o)))}else s=n&~i,s!==0?r=Cr(s):o!==0&&(r=Cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function Iy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Iy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ff(){var e=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Ey(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,El,gf,yf,wf,ba=!1,ji=[],Bt=null,zt=null,Ot=null,Qr=new Map,Jr=new Map,Rt=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wi(t),t!==null&&El(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Py(e,t,n,r,i){switch(t){case"focusin":return Bt=gr(Bt,e,t,n,r,i),!0;case"dragenter":return zt=gr(zt,e,t,n,r,i),!0;case"mouseover":return Ot=gr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qr.set(o,gr(Qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Jr.set(o,gr(Jr.get(o)||null,e,t,n,r,i)),!0}return!1}function vf(e){var t=an(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=af(n),t!==null){e.blockedOn=t,wf(e.priority,function(){gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ga=r,n.target.dispatchEvent(r),ga=null}else return t=wi(n),t!==null&&El(t),e.blockedOn=n,!1;t.shift()}return!0}function ih(e,t,n){Yi(e)&&n.delete(t)}function Ny(){ba=!1,Bt!==null&&Yi(Bt)&&(Bt=null),zt!==null&&Yi(zt)&&(zt=null),Ot!==null&&Yi(Ot)&&(Ot=null),Qr.forEach(ih),Jr.forEach(ih)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Ny)))}function Zr(e){function t(i){return yr(i,e)}if(0<ji.length){yr(ji[0],e);for(var n=1;n<ji.length;n++){var r=ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&yr(Bt,e),zt!==null&&yr(zt,e),Ot!==null&&yr(Ot,e),Qr.forEach(t),Jr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&Rt.shift()}var Gn=At.ReactCurrentBatchConfig,go=!0;function jy(e,t,n,r){var i=_,o=Gn.transition;Gn.transition=null;try{_=1,Cl(e,t,n,r)}finally{_=i,Gn.transition=o}}function My(e,t,n,r){var i=_,o=Gn.transition;Gn.transition=null;try{_=4,Cl(e,t,n,r)}finally{_=i,Gn.transition=o}}function Cl(e,t,n,r){if(go){var i=Sa(e,t,n,r);if(i===null)Cs(e,t,r,yo,n),rh(e,r);else if(Py(i,e,t,n,r))r.stopPropagation();else if(rh(e,r),t&4&&-1<Cy.indexOf(e)){for(;i!==null;){var o=wi(i);if(o!==null&&mf(o),o=Sa(e,t,n,r),o===null&&Cs(e,t,r,yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cs(e,t,r,null,n)}}var yo=null;function Sa(e,t,n,r){if(yo=null,e=Tl(r),e=an(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case Il:return 1;case df:return 4;case po:case ky:return 16;case cf:return 536870912;default:return 16}default:return 16}}var Dt=null,Pl=null,Xi=null;function bf(){if(Xi)return Xi;var e,t=Pl,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Xi=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function oh(){return!1}function ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mi:oh,this.isPropagationStopped=oh,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=ze(ar),yi=J({},ar,{view:0,detail:0}),Ry=ze(yi),vs,ks,wr,Ko=J({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(vs=e.screenX-wr.screenX,ks=e.screenY-wr.screenY):ks=vs=0,wr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),sh=ze(Ko),Ly=J({},Ko,{dataTransfer:0}),Dy=ze(Ly),Vy=J({},yi,{relatedTarget:0}),bs=ze(Vy),By=J({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=ze(By),Oy=J({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_y=ze(Oy),Fy=J({},ar,{data:0}),ah=ze(Fy),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wy[e])?!!t[e]:!1}function jl(){return Ky}var Gy=J({},yi,{key:function(e){if(e.key){var t=Hy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$y=ze(Gy),Yy=J({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=ze(Yy),Xy=J({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),qy=ze(Xy),Qy=J({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=ze(Qy),Zy=J({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ew=ze(Zy),tw=[9,13,27,32],Ml=bt&&"CompositionEvent"in window,Dr=null;bt&&"documentMode"in document&&(Dr=document.documentMode);var nw=bt&&"TextEvent"in window&&!Dr,Sf=bt&&(!Ml||Dr&&8<Dr&&11>=Dr),uh=" ",hh=!1;function xf(e,t){switch(e){case"keyup":return tw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function rw(e,t){switch(e){case"compositionend":return Tf(t);case"keypress":return t.which!==32?null:(hh=!0,uh);case"textInput":return e=t.data,e===uh&&hh?null:e;default:return null}}function iw(e,t){if(Cn)return e==="compositionend"||!Ml&&xf(e,t)?(e=bf(),Xi=Pl=Dt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ow[e.type]:t==="textarea"}function If(e,t,n,r){tf(r),t=wo(t,"onChange"),0<t.length&&(n=new Nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,ei=null;function sw(e){Vf(e,0)}function Go(e){var t=jn(e);if(Yc(t))return e}function aw(e,t){if(e==="change")return t}var Af=!1;if(bt){var Ss;if(bt){var xs="oninput"in document;if(!xs){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),xs=typeof ch.oninput=="function"}Ss=xs}else Ss=!1;Af=Ss&&(!document.documentMode||9<document.documentMode)}function fh(){Vr&&(Vr.detachEvent("onpropertychange",Ef),ei=Vr=null)}function Ef(e){if(e.propertyName==="value"&&Go(ei)){var t=[];If(t,ei,e,Tl(e)),sf(sw,t)}}function lw(e,t,n){e==="focusin"?(fh(),Vr=t,ei=n,Vr.attachEvent("onpropertychange",Ef)):e==="focusout"&&fh()}function uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(ei)}function hw(e,t){if(e==="click")return Go(t)}function dw(e,t){if(e==="input"||e==="change")return Go(t)}function cw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:cw;function ti(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ia.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function ph(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mh(e,t){var n=ph(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ph(n)}}function Cf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fw(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cf(n.ownerDocument.documentElement,n)){if(r!==null&&Rl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=mh(n,o);var s=mh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pw=bt&&"documentMode"in document&&11>=document.documentMode,Pn=null,xa=null,Br=null,Ta=!1;function gh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||Pn==null||Pn!==ho(r)||(r=Pn,"selectionStart"in r&&Rl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ti(Br,r)||(Br=r,r=wo(xa,"onSelect"),0<r.length&&(t=new Nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},Ts={},Nf={};bt&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function $o(e){if(Ts[e])return Ts[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nf)return Ts[e]=t[n];return e}var jf=$o("animationend"),Mf=$o("animationiteration"),Rf=$o("animationstart"),Lf=$o("transitionend"),Df=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Df.set(e,t),bn(t,[e])}for(var Is=0;Is<yh.length;Is++){var As=yh[Is],mw=As.toLowerCase(),gw=As[0].toUpperCase()+As.slice(1);Yt(mw,"on"+gw)}Yt(jf,"onAnimationEnd");Yt(Mf,"onAnimationIteration");Yt(Rf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Lf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function wh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,my(r,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;wh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;wh(i,a,u),o=l}}}if(fo)throw e=va,fo=!1,va=null,e}function K(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var r=e+"__bubble";n.has(r)||(Bf(t,e,2,!1),n.add(r))}function Es(e,t,n){var r=0;t&&(r|=4),Bf(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Li]){e[Li]=!0,Uc.forEach(function(n){n!=="selectionchange"&&(yw.has(n)||Es(n,!1,e),Es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Es("selectionchange",!1,t))}}function Bf(e,t,n,r){switch(kf(t)){case 1:var i=jy;break;case 4:i=My;break;default:i=Cl}n=i.bind(null,t,n,e),i=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}sf(function(){var u=o,h=Tl(n),d=[];e:{var c=Df.get(e);if(c!==void 0){var g=Nl,w=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":g=$y;break;case"focusin":w="focus",g=bs;break;case"focusout":w="blur",g=bs;break;case"beforeblur":case"afterblur":g=bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qy;break;case jf:case Mf:case Rf:g=zy;break;case Lf:g=Jy;break;case"scroll":g=Ry;break;case"wheel":g=ew;break;case"copy":case"cut":case"paste":g=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lh}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?c!==null?c+"Capture":null:c;v=[];for(var f=u,m;f!==null;){m=f;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=qr(f,p),k!=null&&v.push(ri(f,k,m)))),S)break;f=f.return}0<v.length&&(c=new g(c,w,null,n,h),d.push({event:c,listeners:v}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",c&&n!==ga&&(w=n.relatedTarget||n.fromElement)&&(an(w)||w[St]))break e;if((g||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?an(w):null,w!==null&&(S=Sn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=sh,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=lh,k="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?c:jn(g),m=w==null?c:jn(w),c=new v(k,f+"leave",g,n,h),c.target=S,c.relatedTarget=m,k=null,an(h)===u&&(v=new v(p,f+"enter",w,n,h),v.target=m,v.relatedTarget=S,k=v),S=k,g&&w)t:{for(v=g,p=w,f=0,m=v;m;m=In(m))f++;for(m=0,k=p;k;k=In(k))m++;for(;0<f-m;)v=In(v),f--;for(;0<m-f;)p=In(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=In(v),p=In(p)}v=null}else v=null;g!==null&&vh(d,c,g,v,!1),w!==null&&S!==null&&vh(d,S,w,v,!0)}}e:{if(c=u?jn(u):window,g=c.nodeName&&c.nodeName.toLowerCase(),g==="select"||g==="input"&&c.type==="file")var b=aw;else if(dh(c))if(Af)b=dw;else{b=uw;var T=lw}else(g=c.nodeName)&&g.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(b=hw);if(b&&(b=b(e,u))){If(d,b,n,h);break e}T&&T(e,c,u),e==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&da(c,"number",c.value)}switch(T=u?jn(u):window,e){case"focusin":(dh(T)||T.contentEditable==="true")&&(Pn=T,xa=u,Br=null);break;case"focusout":Br=xa=Pn=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,gh(d,n,h);break;case"selectionchange":if(pw)break;case"keydown":case"keyup":gh(d,n,h)}var E;if(Ml)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Cn?xf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Sf&&n.locale!=="ko"&&(Cn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Cn&&(E=bf()):(Dt=h,Pl="value"in Dt?Dt.value:Dt.textContent,Cn=!0)),T=wo(u,I),0<T.length&&(I=new ah(I,e,null,n,h),d.push({event:I,listeners:T}),E?I.data=E:(E=Tf(n),E!==null&&(I.data=E)))),(E=nw?rw(e,n):iw(e,n))&&(u=wo(u,"onBeforeInput"),0<u.length&&(h=new ah("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=E))}Vf(d,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qr(e,n),o!=null&&r.unshift(ri(e,o,i)),o=qr(e,t),o!=null&&r.push(ri(e,o,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qr(n,o),l!=null&&s.unshift(ri(n,l,a))):i||(l=qr(n,o),l!=null&&s.push(ri(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ww=/\r\n?/g,vw=/\u0000|\uFFFD/g;function kh(e){return(typeof e=="string"?e:""+e).replace(ww,`
`).replace(vw,"")}function Di(e,t,n){if(t=kh(t),kh(e)!==t&&n)throw Error(A(425))}function vo(){}var Ia=null,Aa=null;function Ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(Sw)}:Ca;function Sw(e){setTimeout(function(){throw e})}function Ps(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),st="__reactFiber$"+lr,ii="__reactProps$"+lr,St="__reactContainer$"+lr,Pa="__reactEvents$"+lr,xw="__reactListeners$"+lr,Tw="__reactHandles$"+lr;function an(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sh(e);e!==null;){if(n=e[st])return n;e=Sh(e)}return t}e=n,n=e.parentNode}return null}function wi(e){return e=e[st]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Yo(e){return e[ii]||null}var Na=[],Mn=-1;function Xt(e){return{current:e}}function G(e){0>Mn||(e.current=Na[Mn],Na[Mn]=null,Mn--)}function W(e,t){Mn++,Na[Mn]=e.current,e.current=t}var Gt={},ve=Xt(Gt),Ee=Xt(!1),pn=Gt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function ko(){G(Ee),G(ve)}function xh(e,t,n){if(ve.current!==Gt)throw Error(A(168));W(ve,t),W(Ee,n)}function zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,ly(e)||"Unknown",i));return J({},n,r)}function bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,pn=ve.current,W(ve,e),W(Ee,Ee.current),!0}function Th(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=zf(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(ve),W(ve,e)):G(Ee),W(Ee,n)}var mt=null,Xo=!1,Ns=!1;function Of(e){mt===null?mt=[e]:mt.push(e)}function Iw(e){Xo=!0,Of(e)}function qt(){if(!Ns&&mt!==null){Ns=!0;var e=0,t=_;try{var n=mt;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Xo=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),hf(Il,qt),i}finally{_=t,Ns=!1}}return null}var Rn=[],Ln=0,So=null,xo=0,He=[],Ue=0,mn=null,gt=1,yt="";function nn(e,t){Rn[Ln++]=xo,Rn[Ln++]=So,So=e,xo=t}function _f(e,t,n){He[Ue++]=gt,He[Ue++]=yt,He[Ue++]=mn,mn=e;var r=gt;e=yt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-et(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Ll(e){e.return!==null&&(nn(e,1),_f(e,1,0))}function Dl(e){for(;e===So;)So=Rn[--Ln],Rn[Ln]=null,xo=Rn[--Ln],Rn[Ln]=null;for(;e===mn;)mn=He[--Ue],He[Ue]=null,yt=He[--Ue],He[Ue]=null,gt=He[--Ue],He[Ue]=null}var Re=null,Me=null,Y=!1,Ze=null;function Ff(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Me=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Me=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(Y){var t=Me;if(t){var n=t;if(!Ih(e,t)){if(ja(e))throw Error(A(418));t=_t(n.nextSibling);var r=Re;t&&Ih(e,t)?Ff(r,n):(e.flags=e.flags&-4097|2,Y=!1,Re=e)}}else{if(ja(e))throw Error(A(418));e.flags=e.flags&-4097|2,Y=!1,Re=e}}}function Ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Vi(e){if(e!==Re)return!1;if(!Y)return Ah(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ea(e.type,e.memoizedProps)),t&&(t=Me)){if(ja(e))throw Hf(),Error(A(418));for(;t;)Ff(e,t),t=_t(t.nextSibling)}if(Ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Re?_t(e.stateNode.nextSibling):null;return!0}function Hf(){for(var e=Me;e;)e=_t(e.nextSibling)}function Jn(){Me=Re=null,Y=!1}function Vl(e){Ze===null?Ze=[e]:Ze.push(e)}var Aw=At.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eh(e){var t=e._init;return t(e._payload)}function Uf(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,k){return f===null||f.tag!==6?(f=Bs(m,p.mode,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,k){var b=m.type;return b===En?h(p,f,m.props.children,k,m.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jt&&Eh(b)===f.type)?(k=i(f,m.props),k.ref=vr(p,f,m),k.return=p,k):(k=ro(m.type,m.key,m.props,null,p.mode,k),k.ref=vr(p,f,m),k.return=p,k)}function u(p,f,m,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=zs(m,p.mode,k),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function h(p,f,m,k,b){return f===null||f.tag!==7?(f=cn(m,p.mode,k,b),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bs(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ai:return m=ro(f.type,f.key,f.props,null,p.mode,m),m.ref=vr(p,null,f),m.return=p,m;case An:return f=zs(f,p.mode,m),f.return=p,f;case jt:var k=f._init;return d(p,k(f._payload),m)}if(Er(f)||pr(f))return f=cn(f,p.mode,m,null),f.return=p,f;Bi(p,f)}return null}function c(p,f,m,k){var b=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:a(p,f,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:return m.key===b?l(p,f,m,k):null;case An:return m.key===b?u(p,f,m,k):null;case jt:return b=m._init,c(p,f,b(m._payload),k)}if(Er(m)||pr(m))return b!==null?null:h(p,f,m,k,null);Bi(p,m)}return null}function g(p,f,m,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,a(f,p,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ai:return p=p.get(k.key===null?m:k.key)||null,l(f,p,k,b);case An:return p=p.get(k.key===null?m:k.key)||null,u(f,p,k,b);case jt:var T=k._init;return g(p,f,m,T(k._payload),b)}if(Er(k)||pr(k))return p=p.get(m)||null,h(f,p,k,b,null);Bi(f,k)}return null}function w(p,f,m,k){for(var b=null,T=null,E=f,I=f=0,V=null;E!==null&&I<m.length;I++){E.index>I?(V=E,E=null):V=E.sibling;var j=c(p,E,m[I],k);if(j===null){E===null&&(E=V);break}e&&E&&j.alternate===null&&t(p,E),f=o(j,f,I),T===null?b=j:T.sibling=j,T=j,E=V}if(I===m.length)return n(p,E),Y&&nn(p,I),b;if(E===null){for(;I<m.length;I++)E=d(p,m[I],k),E!==null&&(f=o(E,f,I),T===null?b=E:T.sibling=E,T=E);return Y&&nn(p,I),b}for(E=r(p,E);I<m.length;I++)V=g(E,p,I,m[I],k),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?I:V.key),f=o(V,f,I),T===null?b=V:T.sibling=V,T=V);return e&&E.forEach(function(re){return t(p,re)}),Y&&nn(p,I),b}function v(p,f,m,k){var b=pr(m);if(typeof b!="function")throw Error(A(150));if(m=b.call(m),m==null)throw Error(A(151));for(var T=b=null,E=f,I=f=0,V=null,j=m.next();E!==null&&!j.done;I++,j=m.next()){E.index>I?(V=E,E=null):V=E.sibling;var re=c(p,E,j.value,k);if(re===null){E===null&&(E=V);break}e&&E&&re.alternate===null&&t(p,E),f=o(re,f,I),T===null?b=re:T.sibling=re,T=re,E=V}if(j.done)return n(p,E),Y&&nn(p,I),b;if(E===null){for(;!j.done;I++,j=m.next())j=d(p,j.value,k),j!==null&&(f=o(j,f,I),T===null?b=j:T.sibling=j,T=j);return Y&&nn(p,I),b}for(E=r(p,E);!j.done;I++,j=m.next())j=g(E,p,I,j.value,k),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?I:j.key),f=o(j,f,I),T===null?b=j:T.sibling=j,T=j);return e&&E.forEach(function(Ye){return t(p,Ye)}),Y&&nn(p,I),b}function S(p,f,m,k){if(typeof m=="object"&&m!==null&&m.type===En&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:e:{for(var b=m.key,T=f;T!==null;){if(T.key===b){if(b=m.type,b===En){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jt&&Eh(b)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=vr(p,T,m),f.return=p,p=f;break e}n(p,T);break}else t(p,T);T=T.sibling}m.type===En?(f=cn(m.props.children,p.mode,k,m.key),f.return=p,p=f):(k=ro(m.type,m.key,m.props,null,p.mode,k),k.ref=vr(p,f,m),k.return=p,p=k)}return s(p);case An:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=zs(m,p.mode,k),f.return=p,p=f}return s(p);case jt:return T=m._init,S(p,f,T(m._payload),k)}if(Er(m))return w(p,f,m,k);if(pr(m))return v(p,f,m,k);Bi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Bs(m,p.mode,k),f.return=p,p=f),s(p)):n(p,f)}return S}var Zn=Uf(!0),Wf=Uf(!1),To=Xt(null),Io=null,Dn=null,Bl=null;function zl(){Bl=Dn=Io=null}function Ol(e){var t=To.current;G(To),e._currentValue=t}function Ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Io=e,Bl=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Io===null)throw Error(A(308));Dn=e,Io.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var ln=null;function _l(e){ln===null?ln=[e]:ln.push(e)}function Kf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,_l(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,_l(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}function Ch(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ao(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,h=u=l=null,a=o;do{var c=a.lane,g=a.eventTime;if((r&c)===c){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(c=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(g,d,c);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,c=typeof w=="function"?w.call(g,d,c):w,c==null)break e;d=J({},d,c);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else g={eventTime:g,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,s|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=d}}function Ph(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var vi={},ut=Xt(vi),oi=Xt(vi),si=Xt(vi);function un(e){if(e===vi)throw Error(A(174));return e}function Hl(e,t){switch(W(si,t),W(oi,e),W(ut,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}G(ut),W(ut,t)}function er(){G(ut),G(oi),G(si)}function $f(e){un(si.current);var t=un(ut.current),n=fa(t,e.type);t!==n&&(W(oi,e),W(ut,n))}function Ul(e){oi.current===e&&(G(ut),G(oi))}var X=Xt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var js=[];function Wl(){for(var e=0;e<js.length;e++)js[e]._workInProgressVersionPrimary=null;js.length=0}var Ji=At.ReactCurrentDispatcher,Ms=At.ReactCurrentBatchConfig,gn=0,Q=null,ae=null,ue=null,Co=!1,zr=!1,ai=0,Ew=0;function me(){throw Error(A(321))}function Kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Gl(e,t,n,r,i,o){if(gn=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?jw:Mw,e=n(r,i),zr){o=0;do{if(zr=!1,ai=0,25<=o)throw Error(A(301));o+=1,ue=ae=null,t.updateQueue=null,Ji.current=Rw,e=n(r,i)}while(zr)}if(Ji.current=Po,t=ae!==null&&ae.next!==null,gn=0,ue=ae=Q=null,Co=!1,t)throw Error(A(300));return e}function $l(){var e=ai!==0;return ai=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Q.memoizedState=ue=e:ue=ue.next=e,ue}function $e(){if(ae===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?Q.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(A(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?Q.memoizedState=ue=e:ue=ue.next=e}return ue}function li(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=$e(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((gn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Q.lanes|=h,yn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=$e(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yf(){}function Xf(e,t){var n=Q,r=$e(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Yl(Jf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ui(9,Qf.bind(null,n,r,i,t),void 0,null),de===null)throw Error(A(349));gn&30||qf(n,t,i)}return i}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qf(e,t,n,r){t.value=n,t.getSnapshot=r,Zf(t)&&ep(e)}function Jf(e,t,n){return n(function(){Zf(t)&&ep(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ep(e){var t=xt(e,1);t!==null&&tt(t,e,1,-1)}function Nh(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=Nw.bind(null,Q,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tp(){return $e().memoizedState}function Zi(e,t,n,r){var i=ot();Q.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=$e();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&Kl(r,s.deps)){i.memoizedState=ui(t,n,o,r);return}}Q.flags|=e,i.memoizedState=ui(1|t,n,o,r)}function jh(e,t){return Zi(8390656,8,e,t)}function Yl(e,t){return qo(2048,8,e,t)}function np(e,t){return qo(4,2,e,t)}function rp(e,t){return qo(4,4,e,t)}function ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function op(e,t,n){return n=n!=null?n.concat([e]):null,qo(4,4,ip.bind(null,t,e),n)}function Xl(){}function sp(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ap(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lp(e,t,n){return gn&21?(nt(n,t)||(n=ff(),Q.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Cw(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=Ms.transition;Ms.transition={};try{e(!1),t()}finally{_=n,Ms.transition=r}}function up(){return $e().memoizedState}function Pw(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hp(e))dp(t,n);else if(n=Kf(e,t,n,r),n!==null){var i=be();tt(n,e,r,i),cp(n,t,r)}}function Nw(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hp(e))dp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,_l(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Kf(e,t,i,r),n!==null&&(i=be(),tt(n,e,r,i),cp(n,t,r))}}function hp(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function dp(e,t){zr=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}var Po={readContext:Ge,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},jw={readContext:Ge,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:jh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pw.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:Nh,useDebugValue:Xl,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=Nh(!1),t=e[0];return e=Cw.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=ot();if(Y){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),de===null)throw Error(A(349));gn&30||qf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jh(Jf.bind(null,r,o,e),[e]),r.flags|=2048,ui(9,Qf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=de.identifierPrefix;if(Y){var n=yt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ew++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mw={readContext:Ge,useCallback:sp,useContext:Ge,useEffect:Yl,useImperativeHandle:op,useInsertionEffect:np,useLayoutEffect:rp,useMemo:ap,useReducer:Rs,useRef:tp,useState:function(){return Rs(li)},useDebugValue:Xl,useDeferredValue:function(e){var t=$e();return lp(t,ae.memoizedState,e)},useTransition:function(){var e=Rs(li)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Yf,useSyncExternalStore:Xf,useId:up,unstable_isNewReconciler:!1},Rw={readContext:Ge,useCallback:sp,useContext:Ge,useEffect:Yl,useImperativeHandle:op,useInsertionEffect:np,useLayoutEffect:rp,useMemo:ap,useReducer:Ls,useRef:tp,useState:function(){return Ls(li)},useDebugValue:Xl,useDeferredValue:function(e){var t=$e();return ae===null?t.memoizedState=e:lp(t,ae.memoizedState,e)},useTransition:function(){var e=Ls(li)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Yf,useSyncExternalStore:Xf,useId:up,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ut(e),o=wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),Qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ut(e),o=wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(tt(t,e,i,r),Qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Ut(e),i=wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(tt(t,e,r,n),Qi(t,e,r))}};function Mh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,o):!0}function fp(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Ce(t)?pn:ve.current,r=t.contextTypes,o=(r=r!=null)?Qn(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qo.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Ce(t)?pn:ve.current,i.context=Qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(La(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Qo.enqueueReplaceState(i,i.state,null),Ao(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=ay(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function pp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,Ga=r),Va(e,t)},n}function mp(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Va(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Va(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Lh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yw.bind(null,e,t,n),t.then(e,e))}function Dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Dw=At.ReactCurrentOwner,Ae=!1;function ke(e,t,n,r){t.child=e===null?Wf(t,null,n,r):Zn(t,e.child,n,r)}function Bh(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Gl(e,t,n,r,o,i),n=$l(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Y&&n&&Ll(t),t.flags|=1,ke(e,t,r,i),t.child)}function zh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ru(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gp(e,t,o,r,i)):(e=ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(s,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function gp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ti(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return Ba(e,t,n,r,i)}function yp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Bn,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Bn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Bn,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Bn,je),je|=r;return ke(e,t,i,n),t.child}function wp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ba(e,t,n,r,i){var o=Ce(n)?pn:ve.current;return o=Qn(t,o),$n(t,i),n=Gl(e,t,n,r,o,i),r=$l(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Y&&r&&Ll(t),t.flags|=1,ke(e,t,n,i),t.child)}function Oh(e,t,n,r,i){if(Ce(n)){var o=!0;bo(t)}else o=!1;if($n(t,i),t.stateNode===null)eo(e,t),fp(t,n,r),Da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Ce(n)?pn:ve.current,u=Qn(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rh(t,s,r,u),Mt=!1;var c=t.memoizedState;s.state=c,Ao(t,r,s,i),l=t.memoizedState,a!==r||c!==l||Ee.current||Mt?(typeof h=="function"&&(La(t,n,h,r),l=t.memoizedState),(a=Mt||Mh(t,n,a,r,c,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,d=t.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=Ce(n)?pn:ve.current,l=Qn(t,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||c!==l)&&Rh(t,s,r,l),Mt=!1,c=t.memoizedState,s.state=c,Ao(t,r,s,i);var w=t.memoizedState;a!==d||c!==w||Ee.current||Mt?(typeof g=="function"&&(La(t,n,g,r),w=t.memoizedState),(u=Mt||Mh(t,n,u,r,c,w,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,o,i)}function za(e,t,n,r,i,o){wp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Th(t,n,!1),Tt(e,t,o);r=t.stateNode,Dw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zn(t,e.child,null,o),t.child=Zn(t,null,a,o)):ke(e,t,a,o),t.memoizedState=r.state,i&&Th(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?xh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xh(e,t.context,!1),Hl(e,t.containerInfo)}function _h(e,t,n,r,i){return Jn(),Vl(i),t.flags|=256,ke(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function kp(e,t,n){var r=t.pendingProps,i=X.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=es(s,r,0,null),e=cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_a(n),t.memoizedState=Oa,e):ql(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Wt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=cn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?_a(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ql(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zi(e,t,n,r){return r!==null&&Vl(r),Zn(t,e.child,null,n),e=ql(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ds(Error(A(422))),zi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=cn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zn(t,e.child,null,s),t.child.memoizedState=_a(s),t.memoizedState=Oa,o);if(!(t.mode&1))return zi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(A(419)),r=Ds(o,r,void 0),zi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ae||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xt(e,i),tt(r,e,i,-1))}return nu(),r=Ds(Error(A(421))),zi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=_t(i.nextSibling),Re=t,Y=!0,Ze=null,e!==null&&(He[Ue++]=gt,He[Ue++]=yt,He[Ue++]=mn,gt=e.id,yt=e.overflow,mn=t),t=ql(t,r.children),t.flags|=4096,t)}function Fh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ra(e.return,t,n)}function Vs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fh(e,n,t);else if(e.tag===19)Fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vs(t,!0,n,null,o);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bw(e,t,n){switch(t.tag){case 3:vp(t),Jn();break;case 5:$f(t);break;case 1:Ce(t.type)&&bo(t);break;case 4:Hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(To,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?kp(e,t,n):(W(X,X.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,yp(e,t,n)}return Tt(e,t,n)}var Sp,Fa,xp,Tp;Sp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};xp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(ut.current);var o=null;switch(n){case"input":i=ua(e,i),r=ua(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=ca(e,i),r=ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}pa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tp=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zw(e,t,n){var r=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ce(t.type)&&ko(),ge(t),null;case 3:return r=t.stateNode,er(),G(Ee),G(ve),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Xa(Ze),Ze=null))),Fa(e,t),ge(t),null;case 5:Ul(t);var i=un(si.current);if(n=t.type,e!==null&&t.stateNode!=null)xp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ge(t),null}if(e=un(ut.current),Vi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[ii]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)K(Pr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":qu(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ju(r,o),K("invalid",r)}pa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":Ei(r),Qu(r,o,!0);break;case"textarea":Ei(r),Zu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[ii]=r,Sp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ma(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)K(Pr[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":qu(e,r),i=ua(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ju(e,r),i=ca(e,r),K("invalid",e);break;default:i=r}pa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ef(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xr(e,l):typeof l=="number"&&Xr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&kl(e,o,l,s))}switch(n){case"input":Ei(e),Qu(e,r,!1);break;case"textarea":Ei(e),Zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Un(e,!!r.multiple,o,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=un(si.current),un(ut.current),Vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ge(t),null;case 13:if(G(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==null&&t.mode&1&&!(t.flags&128))Hf(),Jn(),t.flags|=98560,o=!1;else if(o=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[st]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),o=!1}else Ze!==null&&(Xa(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):nu())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return er(),Fa(e,t),e===null&&ni(t.stateNode.containerInfo),ge(t),null;case 10:return Ol(t.type._context),ge(t),null;case 17:return Ce(t.type)&&ko(),ge(t),null;case 19:if(G(X),o=t.memoizedState,o===null)return ge(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)kr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Eo(e),s!==null){for(t.flags|=128,kr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>nr&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return ge(t),null}else 2*ne()-o.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Ow(e,t){switch(Dl(t),t.tag){case 1:return Ce(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),G(Ee),G(ve),Wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(G(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(X),null;case 4:return er(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Oi=!1,we=!1,_w=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ha(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Hh=!1;function Fw(e,t){if(Ia=go,e=Pf(),Rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,d=e,c=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)c=d,d=g;for(;;){if(d===e)break t;if(c===n&&++u===i&&(a=s),c===o&&++h===r&&(l=s),(g=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:e,selectionRange:n},go=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){ee(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=Hh,Hh=!1,w}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ha(t,n,o)}i=i.next}while(i!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[ii],delete t[Pa],delete t[xw],delete t[Tw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ap(e){return e.tag===5||e.tag===3||e.tag===4}function Uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}var ce=null,Je=!1;function Et(e,t,n){for(n=n.child;n!==null;)Ep(e,t,n),n=n.sibling}function Ep(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:we||Vn(n,t);case 6:var r=ce,i=Je;ce=null,Et(e,t,n),ce=r,Je=i,ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),Zr(e)):Ps(ce,n.stateNode));break;case 4:r=ce,i=Je,ce=n.stateNode.containerInfo,Je=!0,Et(e,t,n),ce=r,Je=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ha(n,t,s),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!we&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Et(e,t,n),we=r):Et(e,t,n);break;default:Et(e,t,n)}}function Wh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _w),t.forEach(function(r){var i=qw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Je=!1;break e;case 3:ce=a.stateNode.containerInfo,Je=!0;break e;case 4:ce=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(ce===null)throw Error(A(160));Ep(o,s,i),ce=null,Je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),it(e),r&4){try{Or(3,e,e.return),Jo(3,e)}catch(v){ee(e,e.return,v)}try{Or(5,e,e.return)}catch(v){ee(e,e.return,v)}}break;case 1:Xe(t,e),it(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Xe(t,e),it(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(v){ee(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Xc(i,o),ma(a,s);var u=ma(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?ef(i,d):h==="dangerouslySetInnerHTML"?Jc(i,d):h==="children"?Xr(i,d):kl(i,h,d,u)}switch(a){case"input":ha(i,o);break;case"textarea":qc(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Un(i,!!o.multiple,g,!1):c!==!!o.multiple&&(o.defaultValue!=null?Un(i,!!o.multiple,o.defaultValue,!0):Un(i,!!o.multiple,o.multiple?[]:"",!1))}i[ii]=o}catch(v){ee(e,e.return,v)}}break;case 6:if(Xe(t,e),it(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ee(e,e.return,v)}}break;case 3:if(Xe(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(v){ee(e,e.return,v)}break;case 4:Xe(t,e),it(e);break;case 13:Xe(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zl=ne())),r&4&&Wh(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||h,Xe(t,e),we=u):Xe(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(c=P,g=c.child,c.tag){case 0:case 11:case 14:case 15:Or(4,c,c.return);break;case 1:Vn(c,c.return);var w=c.stateNode;if(typeof w.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ee(r,n,v)}}break;case 5:Vn(c,c.return);break;case 22:if(c.memoizedState!==null){Gh(d);continue}}g!==null?(g.return=c,P=g):Gh(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zc("display",s))}catch(v){ee(e,e.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ee(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xe(t,e),it(e),r&4&&Wh(e);break;case 21:break;default:Xe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ap(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=Uh(e);Ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Uh(e);Wa(e,a,s);break;default:throw Error(A(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hw(e,t,n){P=e,Pp(e)}function Pp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=Oi;var u=we;if(Oi=s,(we=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?$h(i):l!==null?(l.return=s,P=l):$h(i);for(;o!==null;)P=o,Pp(o),o=o.sibling;P=i,Oi=a,we=u}Kh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Kh(e)}}function Kh(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ph(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ph(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Zr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}we||t.flags&512&&Ua(t)}catch(c){ee(t,t.return,c)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Gh(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function $h(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Ua(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{Ua(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Uw=Math.ceil,No=At.ReactCurrentDispatcher,Ql=At.ReactCurrentOwner,Ke=At.ReactCurrentBatchConfig,z=0,de=null,oe=null,fe=0,je=0,Bn=Xt(0),le=0,hi=null,yn=0,Zo=0,Jl=0,_r=null,Ie=null,Zl=0,nr=1/0,pt=null,jo=!1,Ga=null,Ht=null,_i=!1,Vt=null,Mo=0,Fr=0,$a=null,to=-1,no=0;function be(){return z&6?ne():to!==-1?to:to=ne()}function Ut(e){return e.mode&1?z&2&&fe!==0?fe&-fe:Aw.transition!==null?(no===0&&(no=ff()),no):(e=_,e!==0||(e=window.event,e=e===void 0?16:kf(e.type)),e):1}function tt(e,t,n,r){if(50<Fr)throw Fr=0,$a=null,Error(A(185));gi(e,n,r),(!(z&2)||e!==de)&&(e===de&&(!(z&2)&&(Zo|=n),le===4&&Lt(e,fe)),Pe(e,r),n===1&&z===0&&!(t.mode&1)&&(nr=ne()+500,Xo&&qt()))}function Pe(e,t){var n=e.callbackNode;Ay(e,t);var r=mo(e,e===de?fe:0);if(r===0)n!==null&&nh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nh(n),t===1)e.tag===0?Iw(Yh.bind(null,e)):Of(Yh.bind(null,e)),bw(function(){!(z&6)&&qt()}),n=null;else{switch(pf(r)){case 1:n=Il;break;case 4:n=df;break;case 16:n=po;break;case 536870912:n=cf;break;default:n=po}n=Bp(n,Np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Np(e,t){if(to=-1,no=0,z&6)throw Error(A(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=mo(e,e===de?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var i=z;z|=2;var o=Mp();(de!==e||fe!==t)&&(pt=null,nr=ne()+500,dn(e,t));do try{Gw();break}catch(a){jp(e,a)}while(!0);zl(),No.current=o,z=i,oe!==null?t=0:(de=null,fe=0,t=le)}if(t!==0){if(t===2&&(i=ka(e),i!==0&&(r=i,t=Ya(e,i))),t===1)throw n=hi,dn(e,0),Lt(e,r),Pe(e,ne()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ww(i)&&(t=Ro(e,r),t===2&&(o=ka(e),o!==0&&(r=o,t=Ya(e,o))),t===1))throw n=hi,dn(e,0),Lt(e,r),Pe(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:rn(e,Ie,pt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Zl+500-ne(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ca(rn.bind(null,e,Ie,pt),t);break}rn(e,Ie,pt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uw(r/1960))-r,10<r){e.timeoutHandle=Ca(rn.bind(null,e,Ie,pt),r);break}rn(e,Ie,pt);break;case 5:rn(e,Ie,pt);break;default:throw Error(A(329))}}}return Pe(e,ne()),e.callbackNode===n?Np.bind(null,e):null}function Ya(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Xa(t)),e}function Xa(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Ww(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Jl,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Yh(e){if(z&6)throw Error(A(327));Yn();var t=mo(e,0);if(!(t&1))return Pe(e,ne()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=hi,dn(e,0),Lt(e,t),Pe(e,ne()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ie,pt),Pe(e,ne()),null}function eu(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(nr=ne()+500,Xo&&qt())}}function wn(e){Vt!==null&&Vt.tag===0&&!(z&6)&&Yn();var t=z;z|=1;var n=Ke.transition,r=_;try{if(Ke.transition=null,_=1,e)return e()}finally{_=r,Ke.transition=n,z=t,!(z&6)&&qt()}}function tu(){je=Bn.current,G(Bn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kw(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:er(),G(Ee),G(ve),Wl();break;case 5:Ul(r);break;case 4:er();break;case 13:G(X);break;case 19:G(X);break;case 10:Ol(r.type._context);break;case 22:case 23:tu()}n=n.return}if(de=e,oe=e=Wt(e.current,null),fe=je=t,le=0,hi=null,Jl=Zo=yn=0,Ie=_r=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ln=null}return e}function jp(e,t){do{var n=oe;try{if(zl(),Ji.current=Po,Co){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Co=!1}if(gn=0,ue=ae=Q=null,zr=!1,ai=0,Ql.current=null,n===null||n.return===null){le=1,hi=t,oe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Dh(s);if(g!==null){g.flags&=-257,Vh(g,s,a,o,t),g.mode&1&&Lh(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){Lh(o,u,t),nu();break e}l=Error(A(426))}}else if(Y&&a.mode&1){var S=Dh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Vh(S,s,a,o,t),Vl(tr(l,a));break e}}o=l=tr(l,a),le!==4&&(le=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=pp(o,l,t);Ch(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=mp(o,a,t);Ch(o,k);break e}}o=o.return}while(o!==null)}Lp(n)}catch(b){t=b,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Mp(){var e=No.current;return No.current=Po,e===null?Po:e}function nu(){(le===0||le===3||le===2)&&(le=4),de===null||!(yn&268435455)&&!(Zo&268435455)||Lt(de,fe)}function Ro(e,t){var n=z;z|=2;var r=Mp();(de!==e||fe!==t)&&(pt=null,dn(e,t));do try{Kw();break}catch(i){jp(e,i)}while(!0);if(zl(),z=n,No.current=r,oe!==null)throw Error(A(261));return de=null,fe=0,le}function Kw(){for(;oe!==null;)Rp(oe)}function Gw(){for(;oe!==null&&!yy();)Rp(oe)}function Rp(e){var t=Vp(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Lp(e):oe=t,Ql.current=null}function Lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ow(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=zw(n,t,je),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function rn(e,t,n){var r=_,i=Ke.transition;try{Ke.transition=null,_=1,$w(e,t,n,r)}finally{Ke.transition=i,_=r}return null}function $w(e,t,n,r){do Yn();while(Vt!==null);if(z&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ey(e,o),e===de&&(oe=de=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,Bp(po,function(){return Yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var s=_;_=1;var a=z;z|=4,Ql.current=null,Fw(e,n),Cp(n,e),fw(Aa),go=!!Ia,Aa=Ia=null,e.current=n,Hw(n),wy(),z=a,_=s,Ke.transition=o}else e.current=n;if(_i&&(_i=!1,Vt=e,Mo=i),o=e.pendingLanes,o===0&&(Ht=null),by(n.stateNode),Pe(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,e=Ga,Ga=null,e;return Mo&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===$a?Fr++:(Fr=0,$a=e):Fr=0,qt(),null}function Yn(){if(Vt!==null){var e=pf(Mo),t=Ke.transition,n=_;try{if(Ke.transition=null,_=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Mo=0,z&6)throw Error(A(331));var i=z;for(z|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Or(8,h,o)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var c=h.sibling,g=h.return;if(Ip(h),h===u){P=null;break}if(c!==null){c.return=g,P=c;break}P=g}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jo(9,a)}}catch(b){ee(a,a.return,b)}if(a===s){P=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,P=k;break e}P=a.return}}if(z=i,qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Wo,e)}catch{}r=!0}return r}finally{_=n,Ke.transition=t}}return!1}function Xh(e,t,n){t=tr(n,t),t=pp(e,t,1),e=Ft(e,t,1),t=be(),e!==null&&(gi(e,1,t),Pe(e,t))}function ee(e,t,n){if(e.tag===3)Xh(e,e,n);else for(;t!==null;){if(t.tag===3){Xh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=tr(n,e),e=mp(t,e,1),t=Ft(t,e,1),e=be(),t!==null&&(gi(t,1,e),Pe(t,e));break}}t=t.return}}function Yw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>ne()-Zl?dn(e,0):Jl|=n),Pe(e,t)}function Dp(e,t){t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);var n=be();e=xt(e,t),e!==null&&(gi(e,t,n),Pe(e,n))}function Xw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function qw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Dp(e,n)}var Vp;Vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,Bw(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,Y&&t.flags&1048576&&_f(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var i=Qn(t,ve.current);$n(t,n),i=Gl(null,t,r,e,i,n);var o=$l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,bo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fl(t),i.updater=Qo,t.stateNode=i,i._reactInternals=t,Da(t,r,e,n),t=za(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Ll(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jw(r),e=Qe(r,e),i){case 0:t=Ba(null,t,r,e,n);break e;case 1:t=Oh(null,t,r,e,n);break e;case 11:t=Bh(null,t,r,e,n);break e;case 14:t=zh(null,t,r,Qe(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Ba(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Oh(e,t,r,i,n);case 3:e:{if(vp(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gf(e,t),Ao(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=tr(Error(A(423)),t),t=_h(e,t,r,n,i);break e}else if(r!==i){i=tr(Error(A(424)),t),t=_h(e,t,r,n,i);break e}else for(Me=_t(t.stateNode.containerInfo.firstChild),Re=t,Y=!0,Ze=null,n=Wf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){t=Tt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return $f(t),e===null&&Ma(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ea(r,i)?s=null:o!==null&&Ea(r,o)&&(t.flags|=32),wp(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return kp(e,t,n);case 4:return Hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Bh(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(To,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!Ee.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ra(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ra(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ge(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),zh(e,t,r,i,n);case 15:return gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),eo(e,t),t.tag=1,Ce(r)?(e=!0,bo(t)):e=!1,$n(t,n),fp(t,r,i),Da(t,r,i,n),za(null,t,r,!0,e,n);case 19:return bp(e,t,n);case 22:return yp(e,t,n)}throw Error(A(156,t.tag))};function Bp(e,t){return hf(e,t)}function Qw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Qw(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jw(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sl)return 11;if(e===xl)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ru(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return cn(n.children,i,o,t);case bl:s=8,i|=8;break;case oa:return e=We(12,n,t,i|2),e.elementType=oa,e.lanes=o,e;case sa:return e=We(13,n,t,i),e.elementType=sa,e.lanes=o,e;case aa:return e=We(19,n,t,i),e.elementType=aa,e.lanes=o,e;case Gc:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wc:s=10;break e;case Kc:s=9;break e;case Sl:s=11;break e;case xl:s=14;break e;case jt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=We(22,e,r,t),e.elementType=Gc,e.lanes=n,e.stateNode={isHidden:!1},e}function Bs(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,o,s,a,l){return e=new Zw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(o),e}function ev(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zp(e){if(!e)return Gt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ce(n))return zf(e,n,t)}return t}function Op(e,t,n,r,i,o,s,a,l){return e=iu(n,r,!0,e,i,o,s,a,l),e.context=zp(null),n=e.current,r=be(),i=Ut(n),o=wt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,gi(e,i,r),Pe(e,r),e}function ts(e,t,n,r){var i=t.current,o=be(),s=Ut(i);return n=zp(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(tt(e,i,s,o),Qi(e,i,s)),s}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ou(e,t){qh(e,t),(e=e.alternate)&&qh(e,t)}function tv(){return null}var _p=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}ns.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ts(e,t,null,null)};ns.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ts(null,e,null,null)}),t[St]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&vf(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function nv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Lo(s);o.call(u)}}var s=Op(t,r,e,0,null,!1,!1,"",Qh);return e._reactRootContainer=s,e[St]=s.current,ni(e.nodeType===8?e.parentNode:e),wn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Lo(l);a.call(u)}}var l=iu(e,0,!1,null,null,!1,!1,"",Qh);return e._reactRootContainer=l,e[St]=l.current,ni(e.nodeType===8?e.parentNode:e),wn(function(){ts(t,l,n,r)}),l}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Lo(s);a.call(l)}}ts(t,s,e,i)}else s=nv(n,t,e,i,r);return Lo(s)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(Al(t,n|1),Pe(t,ne()),!(z&6)&&(nr=ne()+500,qt()))}break;case 13:wn(function(){var r=xt(e,1);if(r!==null){var i=be();tt(r,e,1,i)}}),ou(e,1)}};El=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=be();tt(t,e,134217728,n)}ou(e,134217728)}};gf=function(e){if(e.tag===13){var t=Ut(e),n=xt(e,t);if(n!==null){var r=be();tt(n,e,t,r)}ou(e,t)}};yf=function(){return _};wf=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};ya=function(e,t,n){switch(t){case"input":if(ha(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error(A(90));Yc(r),ha(r,i)}}}break;case"textarea":qc(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};rf=eu;of=wn;var rv={usingClientEntryPoint:!1,Events:[wi,jn,Yo,tf,nf,eu]},br={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iv={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Wo=Fi.inject(iv),lt=Fi}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(A(200));return ev(e,t,null,n)};Be.createRoot=function(e,t){if(!au(e))throw Error(A(299));var n=!1,r="",i=_p;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,ni(e.nodeType===8?e.parentNode:e),new su(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return wn(e)};Be.hydrate=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!au(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=_p;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Op(t,null,e,1,n??null,i,!1,o,s),e[St]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Be.render=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!rs(e))throw Error(A(40));return e._reactRootContainer?(wn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Be.unstable_batchedUpdates=eu;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return is(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),_c.exports=Be;var ov=_c.exports,Jh=ov;ra.createRoot=Jh.createRoot,ra.hydrateRoot=Jh.hydrateRoot;var sv="1.3.14";function Hp(e,t,n){return Math.max(e,Math.min(t,n))}function av(e,t,n){return(1-n)*e+n*t}function lv(e,t,n,r){return av(e,t,1-Math.exp(-n*r))}function uv(e,t){return(e%t+t)%t}var hv=class{constructor(){N(this,"isRunning",!1);N(this,"value",0);N(this,"from",0);N(this,"to",0);N(this,"currentTime",0);N(this,"lerp");N(this,"duration");N(this,"easing");N(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Hp(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=lv(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function dv(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var cv=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){N(this,"width",0);N(this,"height",0);N(this,"scrollHeight",0);N(this,"scrollWidth",0);N(this,"debouncedResize");N(this,"wrapperResizeObserver");N(this,"contentResizeObserver");N(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});N(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});N(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=dv(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Up=class{constructor(){N(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},Zh=100/6,Ct={passive:!1},fv=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){N(this,"touchStart",{x:0,y:0});N(this,"lastDelta",{x:0,y:0});N(this,"window",{width:0,height:0});N(this,"emitter",new Up);N(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});N(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});N(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});N(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?Zh:r===2?this.window.width:1,o=r===1?Zh:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});N(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ct),this.element.addEventListener("touchstart",this.onTouchStart,Ct),this.element.addEventListener("touchmove",this.onTouchMove,Ct),this.element.addEventListener("touchend",this.onTouchEnd,Ct)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ct),this.element.removeEventListener("touchstart",this.onTouchStart,Ct),this.element.removeEventListener("touchmove",this.onTouchMove,Ct),this.element.removeEventListener("touchend",this.onTouchEnd,Ct)}},ed=e=>Math.min(1,1.001-Math.pow(2,-10*e)),pv=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:u=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:c=d==="horizontal"?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:w=1,autoResize:v=!0,prevent:S,virtualScroll:p,overscroll:f=!0,autoRaf:m=!1,anchors:k=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1}={}){N(this,"_isScrolling",!1);N(this,"_isStopped",!1);N(this,"_isLocked",!1);N(this,"_preventNextNativeScrollEvent",!1);N(this,"_resetVelocityTimeout",null);N(this,"__rafID",null);N(this,"isTouching");N(this,"time",0);N(this,"userData",{});N(this,"lastVelocity",0);N(this,"velocity",0);N(this,"direction",0);N(this,"options");N(this,"targetScroll");N(this,"animatedScroll");N(this,"animate",new hv);N(this,"emitter",new Up);N(this,"dimensions");N(this,"virtualScroll");N(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});N(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});N(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",n=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(n)?this.internalStop():this.internalStart()}});N(this,"onClick",e=>{const n=e.composedPath().find(r=>{var i;return r instanceof HTMLAnchorElement&&((i=r.getAttribute("href"))==null?void 0:i.includes("#"))});if(n){const r=n.getAttribute("href");if(r){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${r.split("#")[1]}`;this.scrollTo(o,i)}}});N(this,"onPointerDown",e=>{e.button===1&&this.reset()});N(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const s=t===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(s||l)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const h=this.options.prevent;if(u.find(S=>{var p,f,m;return S instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(S))||((p=S.hasAttribute)==null?void 0:p.call(S,"data-lenis-prevent"))||i&&((f=S.hasAttribute)==null?void 0:f.call(S,"data-lenis-prevent-touch"))||o&&((m=S.hasAttribute)==null?void 0:m.call(S,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(S,{deltaX:t,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let c=n;this.options.gestureOrientation==="both"?c=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(c=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const g=i&&this.options.syncTouch,v=i&&r.type==="touchend";v&&(c=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+c,{programmatic:!1,...g?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});N(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});N(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=sv,(!e||e===document.documentElement)&&(e=window),typeof a=="number"&&typeof l!="function"?l=ed:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:u,infinite:h,gestureOrientation:c,orientation:d,touchMultiplier:g,wheelMultiplier:w,autoResize:v,prevent:S,virtualScroll:p,overscroll:f,autoRaf:m,anchors:k,autoToggle:b,allowNestedScroll:T,__experimental__naiveDimensions:E},this.dimensions=new cv(e,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new fv(n,{touchMultiplier:g,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,duration:i=this.options.duration,easing:o=this.options.easing,lerp:s=this.options.lerp,onStart:a,onComplete:l,force:u=!1,programmatic:h=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let c;if(typeof e=="string"?(c=document.querySelector(e),c||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(c=e),c){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const g=c.getBoundingClientRect();e=(this.isHorizontal?g.left:g.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;const c=e-this.animatedScroll;c>this.limit/2?e=e-this.limit:c<-this.limit/2&&(e=e+this.limit)}}else e=Hp(0,e,this.limit);if(e===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=e),typeof i=="number"&&typeof o!="function"?o=ed:typeof o=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,e,{duration:i,easing:o,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(c,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=c-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=c,this.setScroll(this.scroll),h&&(this.targetScroll=c),g||this.emit(),g&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:n}){const r=Date.now(),i=e._lenis??(e._lenis={});let o,s,a,l,u,h,d,c;const g=this.options.gestureOrientation;if(r-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(e);i.computedStyle=b;const T=b.overflowX,E=b.overflowY;if(o=["auto","overlay","scroll"].includes(T),s=["auto","overlay","scroll"].includes(E),i.hasOverflowX=o,i.hasOverflowY=s,!o&&!s||g==="vertical"&&!s||g==="horizontal"&&!o)return!1;u=e.scrollWidth,h=e.scrollHeight,d=e.clientWidth,c=e.clientHeight,a=u>d,l=h>c,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=c}else a=i.isScrollableX,l=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,u=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,c=i.clientHeight;if(!o&&!s||!a&&!l||g==="vertical"&&(!s||!l)||g==="horizontal"&&(!o||!a))return!1;let w;if(g==="horizontal")w="x";else if(g==="vertical")w="y";else{const b=t!==0,T=n!==0;b&&o&&a&&(w="x"),T&&s&&l&&(w="y")}if(!w)return!1;let v,S,p,f,m;if(w==="x")v=e.scrollLeft,S=u-d,p=t,f=o,m=a;else if(w==="y")v=e.scrollTop,S=h-c,p=n,f=s,m=l;else return!1;return(p>0?v<S:v>0)&&f&&m}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?uv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const lu=x.createContext({});function Qt(e){const t=x.useRef(null);return t.current===null&&(t.current=e()),t.current}const os=x.createContext(null),vn=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class mv extends x.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function gv({children:e,isPresent:t}){const n=x.useId(),r=x.useRef(null),i=x.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=x.useContext(vn);return x.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return o&&(h.nonce=o),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[t]),y.jsx(mv,{isPresent:t,childRef:r,sizeRef:i,children:x.cloneElement(e,{ref:r})})}const yv=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Qt(wv),l=x.useId(),u=x.useCallback(d=>{a.set(d,!0);for(const c of a.values())if(!c)return;r&&r()},[a,r]),h=x.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),o?[Math.random(),u]:[n,u]);return x.useMemo(()=>{a.forEach((d,c)=>a.set(c,!1))},[n]),x.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=y.jsx(gv,{isPresent:n,children:e})),y.jsx(os.Provider,{value:h,children:e})};function wv(){return new Map}function Wp(e=!0){const t=x.useContext(os);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=x.useId();x.useEffect(()=>{e&&i(o)},[e]);const s=x.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Hi=e=>e.key||"";function td(e){const t=[];return x.Children.forEach(e,n=>{x.isValidElement(n)&&t.push(n)}),t}const uu=typeof window<"u",ur=uu?x.useLayoutEffect:x.useEffect,Kp=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1})=>{const[a,l]=Wp(s),u=x.useMemo(()=>td(e),[e]),h=s&&!a?[]:u.map(Hi),d=x.useRef(!0),c=x.useRef(u),g=Qt(()=>new Map),[w,v]=x.useState(u),[S,p]=x.useState(u);ur(()=>{d.current=!1,c.current=u;for(let k=0;k<S.length;k++){const b=Hi(S[k]);h.includes(b)?g.delete(b):g.get(b)!==!0&&g.set(b,!1)}},[S,h.length,h.join("-")]);const f=[];if(u!==w){let k=[...u];for(let b=0;b<S.length;b++){const T=S[b],E=Hi(T);h.includes(E)||(k.splice(b,0,T),f.push(T))}o==="wait"&&f.length&&(k=f),p(td(k)),v(u);return}const{forceRender:m}=x.useContext(lu);return y.jsx(y.Fragment,{children:S.map(k=>{const b=Hi(k),T=s&&!a?!1:u===S||h.includes(b),E=()=>{if(g.has(b))g.set(b,!0);else return;let I=!0;g.forEach(V=>{V||(I=!1)}),I&&(m==null||m(),p(c.current),s&&(l==null||l()),r&&r())};return y.jsx(yv,{isPresent:T,initial:!d.current||n?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:T?void 0:E,children:k},b)})})},Se=e=>e;let vv=Se,Gp=Se;function hu(e){let t;return()=>(t===void 0&&(t=e()),t)}const kn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},vt=e=>e*1e3,kt=e=>e/1e3,kv={useManualTiming:!1};function bv(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(l.schedule(u),e()),u(s)}const l={schedule:(u,h=!1,d=!1)=>{const g=d&&r?t:n;return h&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Ui=["read","resolveKeyframes","update","preRender","render","postRender"],Sv=40;function $p(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ui.reduce((p,f)=>(p[f]=bv(o),p),{}),{read:a,resolveKeyframes:l,update:u,preRender:h,render:d,postRender:c}=s,g=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,Sv),1),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),h.process(i),d.process(i),c.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},w=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Ui.reduce((p,f)=>{const m=s[f];return p[f]=(k,b=!1,T=!1)=>(n||w(),m.schedule(k,b,T)),p},{}),cancel:p=>{for(let f=0;f<Ui.length;f++)s[Ui[f]].cancel(p)},state:i,steps:s}}const{schedule:O,cancel:rt,state:se,steps:Os}=$p(typeof requestAnimationFrame<"u"?requestAnimationFrame:Se,!0),Yp=x.createContext({strict:!1}),nd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},rr={};for(const e in nd)rr[e]={isEnabled:t=>nd[e].some(n=>!!t[n])};function xv(e){for(const t in e)rr[t]={...rr[t],...e[t]}}const Tv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Do(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Tv.has(e)}let Xp=e=>!Do(e);function qp(e){e&&(Xp=t=>t.startsWith("on")?!Do(t):e(t))}try{qp(require("@emotion/is-prop-valid").default)}catch{}function Iv(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Xp(i)||n===!0&&Do(i)||!t&&!Do(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Av({children:e,isValidProp:t,...n}){t&&qp(t),n={...x.useContext(vn),...n},n.isStatic=Qt(()=>n.isStatic);const r=x.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return y.jsx(vn.Provider,{value:r,children:e})}function Ev(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const ss=x.createContext({});function di(e){return typeof e=="string"||Array.isArray(e)}function as(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const du=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cu=["initial",...du];function ls(e){return as(e.animate)||cu.some(t=>di(e[t]))}function Qp(e){return!!(ls(e)||e.variants)}function Cv(e,t){if(ls(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function Pv(e){const{initial:t,animate:n}=Cv(e,x.useContext(ss));return x.useMemo(()=>({initial:t,animate:n}),[rd(t),rd(n)])}function rd(e){return Array.isArray(e)?e.join(" "):e}const Nv=Symbol.for("motionComponentSymbol");function zn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function jv(e,t,n){return x.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):zn(n)&&(n.current=r))},[t])}const fu=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Mv="framerAppearId",Jp="data-"+fu(Mv),{schedule:pu}=$p(queueMicrotask,!1),Zp=x.createContext({});function Rv(e,t,n,r,i){var o,s;const{visualElement:a}=x.useContext(ss),l=x.useContext(Yp),u=x.useContext(os),h=x.useContext(vn).reducedMotion,d=x.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:h}));const c=d.current,g=x.useContext(Zp);c&&!c.projection&&i&&(c.type==="html"||c.type==="svg")&&Lv(d.current,n,i,g);const w=x.useRef(!1);x.useInsertionEffect(()=>{c&&w.current&&c.update(n,u)});const v=n[Jp],S=x.useRef(!!v&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,v))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,v)));return ur(()=>{c&&(w.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),pu.render(c.render),S.current&&c.animationState&&c.animationState.animateChanges())}),x.useEffect(()=>{c&&(!S.current&&c.animationState&&c.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,v)}),S.current=!1))}),c}function Lv(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:em(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&zn(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function em(e){if(e)return e.options.allowProjection!==!1?e.projection:em(e.parent)}function Dv({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,s;e&&xv(e);function a(u,h){let d;const c={...x.useContext(vn),...u,layoutId:Vv(u)},{isStatic:g}=c,w=Pv(u),v=r(u,g);if(!g&&uu){Bv();const S=zv(c);d=S.MeasureLayout,w.visualElement=Rv(i,v,c,t,S.ProjectionNode)}return y.jsxs(ss.Provider,{value:w,children:[d&&w.visualElement?y.jsx(d,{visualElement:w.visualElement,...c}):null,n(i,u,jv(v,w.visualElement,h),v,g,w.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;const l=x.forwardRef(a);return l[Nv]=i,l}function Vv({layoutId:e}){const t=x.useContext(lu).id;return t&&e!==void 0?t+"-"+e:e}function Bv(e,t){x.useContext(Yp).strict}function zv(e){const{drag:t,layout:n}=rr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Ov=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mu(e){return typeof e!="string"||e.includes("-")?!1:!!(Ov.indexOf(e)>-1||/[A-Z]/u.test(e))}function id(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function gu(e,t,n,r){if(typeof t=="function"){const[i,o]=id(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=id(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const qa=e=>Array.isArray(e),_v=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Fv=e=>qa(e)?e[e.length-1]||0:e,he=e=>!!(e&&e.getVelocity);function io(e){const t=he(e)?e.get():e;return _v(t)?t.toValue():t}function Hv({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const s={latestValues:Uv(r,i,o,e),renderState:t()};return n&&(s.onMount=a=>n({props:r,current:a,...s}),s.onUpdate=a=>n(a)),s}const tm=e=>(t,n)=>{const r=x.useContext(ss),i=x.useContext(os),o=()=>Hv(e,t,r,i);return n?o():Qt(o)};function Uv(e,t,n,r){const i={},o=r(e,{});for(const c in o)i[c]=io(o[c]);let{initial:s,animate:a}=e;const l=ls(e),u=Qp(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let h=n?n.initial===!1:!1;h=h||s===!1;const d=h?a:s;if(d&&typeof d!="boolean"&&!as(d)){const c=Array.isArray(d)?d:[d];for(let g=0;g<c.length;g++){const w=gu(e,c[g]);if(w){const{transitionEnd:v,transition:S,...p}=w;for(const f in p){let m=p[f];if(Array.isArray(m)){const k=h?m.length-1:0;m=m[k]}m!==null&&(i[f]=m)}for(const f in v)i[f]=v[f]}}}return i}const hr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xn=new Set(hr),nm=e=>t=>typeof t=="string"&&t.startsWith(e),rm=nm("--"),Wv=nm("var(--"),yu=e=>Wv(e)?Kv.test(e.split("/*")[0].trim()):!1,Kv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,im=(e,t)=>t&&typeof e=="number"?t.transform(e):e,ct=(e,t,n)=>n>t?t:n<e?e:n,dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ci={...dr,transform:e=>ct(0,1,e)},Wi={...dr,default:1},ki=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Pt=ki("deg"),ht=ki("%"),R=ki("px"),Gv=ki("vh"),$v=ki("vw"),od={...ht,parse:e=>ht.parse(e)/100,transform:e=>ht.transform(e*100)},Yv={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R},Xv={rotate:Pt,rotateX:Pt,rotateY:Pt,rotateZ:Pt,scale:Wi,scaleX:Wi,scaleY:Wi,scaleZ:Wi,skew:Pt,skewX:Pt,skewY:Pt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:ci,originX:od,originY:od,originZ:R},sd={...dr,transform:Math.round},wu={...Yv,...Xv,zIndex:sd,size:R,fillOpacity:ci,strokeOpacity:ci,numOctaves:sd},qv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qv=hr.length;function Jv(e,t,n){let r="",i=!0;for(let o=0;o<Qv;o++){const s=hr[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=im(a,wu[s]);if(!l){i=!1;const h=qv[s]||s;r+=`${h}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function vu(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const u=t[l];if(xn.has(l)){s=!0;continue}else if(rm(l)){i[l]=u;continue}else{const h=im(u,wu[l]);l.startsWith("origin")?(a=!0,o[l]=h):r[l]=h}}if(t.transform||(s||n?r.transform=Jv(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:h=0}=o;r.transformOrigin=`${l} ${u} ${h}`}}const Zv={offset:"stroke-dashoffset",array:"stroke-dasharray"},e0={offset:"strokeDashoffset",array:"strokeDasharray"};function t0(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Zv:e0;e[o.offset]=R.transform(-r);const s=R.transform(t),a=R.transform(n);e[o.array]=`${s} ${a}`}function ad(e,t,n){return typeof e=="string"?e:R.transform(t+n*e)}function n0(e,t,n){const r=ad(t,e.x,e.width),i=ad(n,e.y,e.height);return`${r} ${i}`}function ku(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},h,d){if(vu(e,u,d),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:c,style:g,dimensions:w}=e;c.transform&&(w&&(g.transform=c.transform),delete c.transform),w&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=n0(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(c.x=t),n!==void 0&&(c.y=n),r!==void 0&&(c.scale=r),s!==void 0&&t0(c,s,a,l,!1)}const bu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),om=()=>({...bu(),attrs:{}}),Su=e=>typeof e=="string"&&e.toLowerCase()==="svg";function sm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const am=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function lm(e,t,n,r){sm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(am.has(i)?i:fu(i),t.attrs[i])}const Vo={};function r0(e){Object.assign(Vo,e)}function um(e,{layout:t,layoutId:n}){return xn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Vo[e]||e==="opacity")}function xu(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(he(i[s])||t.style&&he(t.style[s])||um(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function hm(e,t,n){const r=xu(e,t,n);for(const i in e)if(he(e[i])||he(t[i])){const o=hr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function i0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const ld=["x","y","width","height","cx","cy","r"],o0={useVisualState:tm({scrapeMotionValuesFromProps:hm,createRenderState:om,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const a in i)if(xn.has(a)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let a=0;a<ld.length;a++){const l=ld[a];e[l]!==t[l]&&(s=!0)}s&&O.read(()=>{i0(n,r),O.render(()=>{ku(r,i,Su(n.tagName),e.transformTemplate),lm(n,r)})})}})},s0={useVisualState:tm({scrapeMotionValuesFromProps:xu,createRenderState:bu})};function dm(e,t,n){for(const r in t)!he(t[r])&&!um(r,n)&&(e[r]=t[r])}function a0({transformTemplate:e},t){return x.useMemo(()=>{const n=bu();return vu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function l0(e,t){const n=e.style||{},r={};return dm(r,n,e),Object.assign(r,a0(e,t)),r}function u0(e,t){const n={},r=l0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function h0(e,t,n,r){const i=x.useMemo(()=>{const o=om();return ku(o,t,Su(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};dm(o,e.style,e),i.style={...o,...i.style}}return i}function d0(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(mu(n)?h0:u0)(r,o,s,n),u=Iv(r,typeof n=="string",e),h=n!==x.Fragment?{...u,...l,ref:i}:{},{children:d}=r,c=x.useMemo(()=>he(d)?d.get():d,[d]);return x.createElement(n,{...h,children:c})}}function c0(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...mu(r)?o0:s0,preloadedFeatures:e,useRender:d0(i),createVisualElement:t,Component:r};return Dv(s)}}function cm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function us(e,t,n){const r=e.getProps();return gu(r,t,n!==void 0?n:r.custom,e)}const fm=hu(()=>window.ScrollTimeline!==void 0);class f0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(fm()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class p0 extends f0{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Tu(e,t){return e?e[t]||e.default||e:void 0}const Qa=2e4;function pm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Qa;)t+=n,r=e.next(t);return t>=Qa?1/0:t}function Iu(e){return typeof e=="function"}function ud(e,t){e.timeline=t,e.onfinish=null}const Au=e=>Array.isArray(e)&&typeof e[0]=="number",m0={linearEasing:void 0};function g0(e,t){const n=hu(e);return()=>{var r;return(r=m0[t])!==null&&r!==void 0?r:n()}}const Bo=g0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),mm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(kn(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function gm(e){return!!(typeof e=="function"&&Bo()||!e||typeof e=="string"&&(e in Ja||Bo())||Au(e)||Array.isArray(e)&&e.every(gm))}const Nr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ja={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Nr([0,.65,.55,1]),circOut:Nr([.55,0,1,.45]),backIn:Nr([.31,.01,.66,-.59]),backOut:Nr([.33,1.53,.69,.99])};function ym(e,t){if(e)return typeof e=="function"&&Bo()?mm(e,t):Au(e)?Nr(e):Array.isArray(e)?e.map(n=>ym(n,t)||Ja.easeOut):Ja[e]}const qe={x:!1,y:!1};function wm(){return qe.x||qe.y}function Eu(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function vm(e,t){const n=Eu(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function hd(e){return t=>{t.pointerType==="touch"||wm()||e(t)}}function y0(e,t,n={}){const[r,i,o]=vm(e,n),s=hd(a=>{const{target:l}=a,u=t(a);if(typeof u!="function"||!l)return;const h=hd(d=>{u(d),l.removeEventListener("pointerleave",h)});l.addEventListener("pointerleave",h,i)});return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const km=(e,t)=>t?e===t?!0:km(e,t.parentElement):!1,Cu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,w0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function v0(e){return w0.has(e.tagName)||e.tabIndex!==-1}const jr=new WeakSet;function dd(e){return t=>{t.key==="Enter"&&e(t)}}function _s(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const k0=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=dd(()=>{if(jr.has(n))return;_s(n,"down");const i=dd(()=>{_s(n,"up")}),o=()=>_s(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function cd(e){return Cu(e)&&!wm()}function b0(e,t,n={}){const[r,i,o]=vm(e,n),s=a=>{const l=a.currentTarget;if(!cd(a)||jr.has(l))return;jr.add(l);const u=t(a),h=(g,w)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",c),!(!cd(g)||!jr.has(l))&&(jr.delete(l),typeof u=="function"&&u(g,{success:w}))},d=g=>{h(g,n.useGlobalTarget||km(l,g.target))},c=g=>{h(g,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",c,i)};return r.forEach(a=>{!v0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),a.addEventListener("focus",u=>k0(u,i),i)}),o}function S0(e){return e==="x"||e==="y"?qe[e]?null:(qe[e]=!0,()=>{qe[e]=!1}):qe.x||qe.y?null:(qe.x=qe.y=!0,()=>{qe.x=qe.y=!1})}const bm=new Set(["width","height","top","left","right","bottom",...hr]);let oo;function x0(){oo=void 0}const dt={now:()=>(oo===void 0&&dt.set(se.isProcessing||kv.useManualTiming?se.timestamp:performance.now()),oo),set:e=>{oo=e,queueMicrotask(x0)}};function Pu(e,t){e.indexOf(t)===-1&&e.push(t)}function Nu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ju{constructor(){this.subscriptions=[]}add(t){return Pu(this.subscriptions,t),()=>Nu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Mu(e,t){return t?e*(1e3/t):0}const fd=30,T0=e=>!isNaN(parseFloat(e)),Hr={current:void 0};class I0{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=dt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=dt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=T0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ju);const r=this.events[t].add(n);return t==="change"?()=>{r(),O.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Hr.current&&Hr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>fd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,fd);return Mu(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function at(e,t){return new I0(e,t)}function A0(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,at(n))}function Ru(e,t){const n=us(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Fv(o[s]);A0(e,s,a)}}function E0(e){return!!(he(e)&&e.add)}function Za(e,t){const n=e.getValue("willChange");if(E0(n))return n.add(t)}function Sm(e){return e.props[Jp]}const xm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,C0=1e-7,P0=12;function N0(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=xm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>C0&&++a<P0);return s}function cr(e,t,n,r){if(e===t&&n===r)return Se;const i=o=>N0(o,0,1,e,n);return o=>o===0||o===1?o:xm(i(o),t,r)}const Tm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Im=e=>t=>1-e(1-t),Am=cr(.33,1.53,.69,.99),Lu=Im(Am),Em=Tm(Lu),Cm=e=>(e*=2)<1?.5*Lu(e):.5*(2-Math.pow(2,-10*(e-1))),Du=e=>1-Math.sin(Math.acos(e)),Pm=Im(Du),Nm=Tm(Du),jm=e=>/^0[^.\s]+$/u.test(e);function j0(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||jm(e):!0}const Ur=e=>Math.round(e*1e5)/1e5,Vu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function M0(e){return e==null}const R0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bu=(e,t)=>n=>!!(typeof n=="string"&&R0.test(n)&&n.startsWith(e)||t&&!M0(n)&&Object.prototype.hasOwnProperty.call(n,t)),Mm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Vu);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},L0=e=>ct(0,255,e),Fs={...dr,transform:e=>Math.round(L0(e))},hn={test:Bu("rgb","red"),parse:Mm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Fs.transform(e)+", "+Fs.transform(t)+", "+Fs.transform(n)+", "+Ur(ci.transform(r))+")"};function D0(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const el={test:Bu("#"),parse:D0,transform:hn.transform},On={test:Bu("hsl","hue"),parse:Mm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ht.transform(Ur(t))+", "+ht.transform(Ur(n))+", "+Ur(ci.transform(r))+")"},ye={test:e=>hn.test(e)||el.test(e)||On.test(e),parse:e=>hn.test(e)?hn.parse(e):On.test(e)?On.parse(e):el.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hn.transform(e):On.transform(e)},V0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function B0(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Vu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(V0))===null||n===void 0?void 0:n.length)||0)>0}const Rm="number",Lm="color",z0="var",O0="var(",pd="${}",_0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(_0,l=>(ye.test(l)?(r.color.push(o),i.push(Lm),n.push(ye.parse(l))):l.startsWith(O0)?(r.var.push(o),i.push(z0),n.push(l)):(r.number.push(o),i.push(Rm),n.push(parseFloat(l))),++o,pd)).split(pd);return{values:n,split:a,indexes:r,types:i}}function Dm(e){return fi(e).values}function Vm(e){const{split:t,types:n}=fi(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Rm?o+=Ur(i[s]):a===Lm?o+=ye.transform(i[s]):o+=i[s]}return o}}const F0=e=>typeof e=="number"?0:e;function H0(e){const t=Dm(e);return Vm(e)(t.map(F0))}const $t={test:B0,parse:Dm,createTransformer:Vm,getAnimatableNone:H0},U0=new Set(["brightness","contrast","saturate","opacity"]);function W0(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Vu)||[];if(!r)return e;const i=n.replace(r,"");let o=U0.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const K0=/\b([a-z-]*)\(.*?\)/gu,tl={...$t,getAnimatableNone:e=>{const t=e.match(K0);return t?t.map(W0).join(" "):e}},G0={...wu,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:tl,WebkitFilter:tl},zu=e=>G0[e];function Bm(e,t){let n=zu(e);return n!==tl&&(n=$t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const $0=new Set(["auto","none","0"]);function Y0(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!$0.has(o)&&fi(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Bm(n,i)}const md=e=>e===dr||e===R,gd=(e,t)=>parseFloat(e.split(", ")[t]),yd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return gd(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?gd(o[1],e):0}},X0=new Set(["x","y","z"]),q0=hr.filter(e=>!X0.has(e));function Q0(e){const t=[];return q0.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ir={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:yd(4,13),y:yd(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const fn=new Set;let nl=!1,rl=!1;function zm(){if(rl){const e=Array.from(fn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Q0(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}rl=!1,nl=!1,fn.forEach(e=>e.complete()),fn.clear()}function Om(){fn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(rl=!0)})}function J0(){Om(),zm()}class Ou{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(fn.add(this),nl||(nl=!0,O.read(Om),O.resolveKeyframes(zm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),fn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,fn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _m=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Z0=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ek(e){const t=Z0.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Fm(e,t,n=1){const[r,i]=ek(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return _m(s)?parseFloat(s):s}return yu(i)?Fm(i,t,n+1):i}const Hm=e=>t=>t.test(e),tk={test:e=>e==="auto",parse:e=>e},Um=[dr,R,ht,Pt,$v,Gv,tk],wd=e=>Um.find(Hm(e));class Wm extends Ou{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),yu(u))){const h=Fm(u,n.current);h!==void 0&&(t[l]=h),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!bm.has(r)||t.length!==2)return;const[i,o]=t,s=wd(i),a=wd(o);if(s!==a)if(md(s)&&md(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)j0(t[i])&&r.push(i);r.length&&Y0(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=ir[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const vd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function nk(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function rk(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=vd(i,t),a=vd(o,t);return!s||!a?!1:nk(e)||(n==="spring"||Iu(n))&&r}const ik=e=>e!==null;function hs(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(ik),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const ok=40;class Km{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=dt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ok?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&J0(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=dt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!rk(t,r,i,o))if(s)this.options.duration=0;else{l&&l(hs(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const h=this.initPlayback(t,n);h!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const q=(e,t,n)=>e+(t-e)*n;function Hs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sk({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Hs(l,a,e+1/3),o=Hs(l,a,e),s=Hs(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function zo(e,t){return n=>n>0?t:e}const Us=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ak=[el,hn,On],lk=e=>ak.find(t=>t.test(e));function kd(e){const t=lk(e);if(!t)return!1;let n=t.parse(e);return t===On&&(n=sk(n)),n}const bd=(e,t)=>{const n=kd(e),r=kd(t);if(!n||!r)return zo(e,t);const i={...n};return o=>(i.red=Us(n.red,r.red,o),i.green=Us(n.green,r.green,o),i.blue=Us(n.blue,r.blue,o),i.alpha=q(n.alpha,r.alpha,o),hn.transform(i))},uk=(e,t)=>n=>t(e(n)),bi=(...e)=>e.reduce(uk),il=new Set(["none","hidden"]);function hk(e,t){return il.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function dk(e,t){return n=>q(e,t,n)}function _u(e){return typeof e=="number"?dk:typeof e=="string"?yu(e)?zo:ye.test(e)?bd:pk:Array.isArray(e)?Gm:typeof e=="object"?ye.test(e)?bd:ck:zo}function Gm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>_u(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function ck(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=_u(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function fk(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const pk=(e,t)=>{const n=$t.createTransformer(t),r=fi(e),i=fi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?il.has(e)&&!i.values.length||il.has(t)&&!r.values.length?hk(e,t):bi(Gm(fk(r,i),i.values),n):zo(e,t)};function $m(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?q(e,t,n):_u(e)(e,t)}const mk=5;function Ym(e,t,n){const r=Math.max(t-mk,0);return Mu(n-e(r),t-r)}const Z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ws=.001;function gk({duration:e=Z.duration,bounce:t=Z.bounce,velocity:n=Z.velocity,mass:r=Z.mass}){let i,o,s=1-t;s=ct(Z.minDamping,Z.maxDamping,s),e=ct(Z.minDuration,Z.maxDuration,kt(e)),s<1?(i=u=>{const h=u*s,d=h*e,c=h-n,g=ol(u,s),w=Math.exp(-d);return Ws-c/g*w},o=u=>{const d=u*s*e,c=d*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,w=Math.exp(-d),v=ol(Math.pow(u,2),s);return(-i(u)+Ws>0?-1:1)*((c-g)*w)/v}):(i=u=>{const h=Math.exp(-u*e),d=(u-n)*e+1;return-Ws+h*d},o=u=>{const h=Math.exp(-u*e),d=(n-u)*(e*e);return h*d});const a=5/e,l=wk(i,o,a);if(e=vt(e),isNaN(l))return{stiffness:Z.stiffness,damping:Z.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const yk=12;function wk(e,t,n){let r=n;for(let i=1;i<yk;i++)r=r-e(r)/t(r);return r}function ol(e,t){return e*Math.sqrt(1-t*t)}const vk=["duration","bounce"],kk=["stiffness","damping","mass"];function Sd(e,t){return t.some(n=>e[n]!==void 0)}function bk(e){let t={velocity:Z.velocity,stiffness:Z.stiffness,damping:Z.damping,mass:Z.mass,isResolvedFromDuration:!1,...e};if(!Sd(e,kk)&&Sd(e,vk))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*ct(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Z.mass,stiffness:i,damping:o}}else{const n=gk(e);t={...t,...n,mass:Z.mass},t.isResolvedFromDuration=!0}return t}function Xm(e=Z.visualDuration,t=Z.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:h,duration:d,velocity:c,isResolvedFromDuration:g}=bk({...n,velocity:-kt(n.velocity||0)}),w=c||0,v=u/(2*Math.sqrt(l*h)),S=s-o,p=kt(Math.sqrt(l/h)),f=Math.abs(S)<5;r||(r=f?Z.restSpeed.granular:Z.restSpeed.default),i||(i=f?Z.restDelta.granular:Z.restDelta.default);let m;if(v<1){const b=ol(p,v);m=T=>{const E=Math.exp(-v*p*T);return s-E*((w+v*p*S)/b*Math.sin(b*T)+S*Math.cos(b*T))}}else if(v===1)m=b=>s-Math.exp(-p*b)*(S+(w+p*S)*b);else{const b=p*Math.sqrt(v*v-1);m=T=>{const E=Math.exp(-v*p*T),I=Math.min(b*T,300);return s-E*((w+v*p*S)*Math.sinh(I)+b*S*Math.cosh(I))/b}}const k={calculatedDuration:g&&d||null,next:b=>{const T=m(b);if(g)a.done=b>=d;else{let E=0;v<1&&(E=b===0?vt(w):Ym(m,b,T));const I=Math.abs(E)<=r,V=Math.abs(s-T)<=i;a.done=I&&V}return a.value=a.done?s:T,a},toString:()=>{const b=Math.min(pm(k),Qa),T=mm(E=>k.next(b*E).value,b,30);return b+"ms "+T}};return k}function xd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:h}){const d=e[0],c={done:!1,value:d},g=I=>a!==void 0&&I<a||l!==void 0&&I>l,w=I=>a===void 0?l:l===void 0||Math.abs(a-I)<Math.abs(l-I)?a:l;let v=n*t;const S=d+v,p=s===void 0?S:s(S);p!==S&&(v=p-d);const f=I=>-v*Math.exp(-I/r),m=I=>p+f(I),k=I=>{const V=f(I),j=m(I);c.done=Math.abs(V)<=u,c.value=c.done?p:j};let b,T;const E=I=>{g(c.value)&&(b=I,T=Xm({keyframes:[c.value,w(c.value)],velocity:Ym(m,I,c.value),damping:i,stiffness:o,restDelta:u,restSpeed:h}))};return E(0),{calculatedDuration:null,next:I=>{let V=!1;return!T&&b===void 0&&(V=!0,k(I),E(I)),b!==void 0&&I>=b?T.next(I-b):(!V&&k(I),c)}}}const Sk=cr(.42,0,1,1),xk=cr(0,0,.58,1),qm=cr(.42,0,.58,1),Tk=e=>Array.isArray(e)&&typeof e[0]!="number",Ik={linear:Se,easeIn:Sk,easeInOut:qm,easeOut:xk,circIn:Du,circInOut:Nm,circOut:Pm,backIn:Lu,backInOut:Em,backOut:Am,anticipate:Cm},Td=e=>{if(Au(e)){Gp(e.length===4);const[t,n,r,i]=e;return cr(t,n,r,i)}else if(typeof e=="string")return Ik[e];return e};function Ak(e,t,n){const r=[],i=n||$m,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Se:t;a=bi(l,a)}r.push(a)}return r}function Fu(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Gp(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Ak(t,r,i),l=a.length,u=h=>{if(s&&h<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(h<e[d+1]);d++);const c=kn(e[d],e[d+1],h);return a[d](c)};return n?h=>u(ct(e[0],e[o-1],h)):u}function Ek(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=kn(0,t,r);e.push(q(n,1,i))}}function Qm(e){const t=[0];return Ek(t,e.length-1),t}function Ck(e,t){return e.map(n=>n*t)}function Pk(e,t){return e.map(()=>t||qm).splice(0,e.length-1)}function Oo({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Tk(r)?r.map(Td):Td(r),o={done:!1,value:t[0]},s=Ck(n&&n.length===t.length?n:Qm(t),e),a=Fu(s,t,{ease:Array.isArray(i)?i:Pk(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Nk=e=>{const t=({timestamp:n})=>e(n);return{start:()=>O.update(t,!0),stop:()=>rt(t),now:()=>se.isProcessing?se.timestamp:dt.now()}},jk={decay:xd,inertia:xd,tween:Oo,keyframes:Oo,spring:Xm},Mk=e=>e/100;class ds extends Km{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||Ou,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=Iu(n)?n:jk[n]||Oo;let l,u;a!==Oo&&typeof t[0]!="number"&&(l=bi(Mk,$m(t[0],t[1])),t=[0,100]);const h=a({...this.options,keyframes:t});o==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),h.calculatedDuration===null&&(h.calculatedDuration=pm(h));const{calculatedDuration:d}=h,c=d+i,g=c*(r+1)-i;return{generator:h,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:c,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:I}=this.options;return{done:!0,value:I[I.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:h,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:c,repeat:g,repeatType:w,repeatDelay:v,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-h/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-c*(this.speed>=0?1:-1),f=this.speed>=0?p<0:p>h;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let m=this.currentTime,k=o;if(g){const I=Math.min(this.currentTime,h)/d;let V=Math.floor(I),j=I%1;!j&&I>=1&&(j=1),j===1&&V--,V=Math.min(V,g+1),!!(V%2)&&(w==="reverse"?(j=1-j,v&&(j-=v/d)):w==="mirror"&&(k=s)),m=ct(0,1,j)*d}const b=f?{done:!1,value:l[0]}:k.next(m);a&&(b.value=a(b.value));let{done:T}=b;!f&&u!==null&&(T=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&i!==void 0&&(b.value=hs(l,this.options,i)),S&&S(b.value),E&&this.finish(),b}get duration(){const{resolved:t}=this;return t?kt(t.calculatedDuration):0}get time(){return kt(this.currentTime)}set time(t){t=vt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=kt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Nk,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function Rk(e){return new ds(e)}const Lk=new Set(["opacity","clipPath","filter","transform"]);function Dk(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const h=ym(a,i);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}const Vk=hu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),_o=10,Bk=2e4;function zk(e){return Iu(e.type)||e.type==="spring"||!gm(e.ease)}function Ok(e,t){const n=new ds({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<Bk;)r=n.sample(o),i.push(r.value),o+=_o;return{times:void 0,keyframes:i,duration:o-_o,ease:"linear"}}const Jm={anticipate:Cm,backInOut:Em,circInOut:Nm};function _k(e){return e in Jm}class Id extends Km{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Wm(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Bo()&&_k(o)&&(o=Jm[o]),zk(this.options)){const{onComplete:d,onUpdate:c,motionValue:g,element:w,...v}=this.options,S=Ok(t,v);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,s="keyframes"}const h=Dk(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?(ud(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:d}=this.options;a.set(hs(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:r,times:i,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return kt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return kt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=vt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Se;const{animation:r}=n;ud(r,t)}return Se}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:h,onComplete:d,element:c,...g}=this.options,w=new ds({...g,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),v=vt(this.time);u.setWithVelocity(w.sample(v-_o).value,w.sample(v).value,_o)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return Vk()&&r&&Lk.has(r)&&!l&&!u&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const Fk={type:"spring",stiffness:500,damping:25,restSpeed:10},Hk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Uk={type:"keyframes",duration:.8},Wk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Kk=(e,{keyframes:t})=>t.length>2?Uk:xn.has(e)?e.startsWith("scale")?Hk(t[1]):Fk:Wk;function Gk({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...h}){return!!Object.keys(h).length}const Hu=(e,t,n,r={},i,o)=>s=>{const a=Tu(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-vt(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:c=>{t.set(c),a.onUpdate&&a.onUpdate(c)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};Gk(a)||(h={...h,...Kk(e,h)}),h.duration&&(h.duration=vt(h.duration)),h.repeatDelay&&(h.repeatDelay=vt(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let d=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const c=hs(h.keyframes,a);if(c!==void 0)return O.update(()=>{h.onUpdate(c),h.onComplete()}),new p0([])}return!o&&Id.supports(h)?new Id(h):new ds(h)};function $k({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Zm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const u=[],h=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const c=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),g=l[d];if(g===void 0||h&&$k(h,d))continue;const w={delay:n,...Tu(s||{},d)};let v=!1;if(window.MotionHandoffAnimation){const p=Sm(e);if(p){const f=window.MotionHandoffAnimation(p,d,O);f!==null&&(w.startTime=f,v=!0)}}Za(e,d),c.start(Hu(d,c,g,e.shouldReduceMotion&&bm.has(d)?{type:!1}:w,e,v));const S=c.animation;S&&u.push(S)}return a&&Promise.all(u).then(()=>{O.update(()=>{a&&Ru(e,a)})}),u}function sl(e,t,n={}){var r;const i=us(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(Zm(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:h=0,staggerChildren:d,staggerDirection:c}=o;return Yk(e,t,h+u,d,c,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,h]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>h())}else return Promise.all([s(),a(n.delay)])}function Yk(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(Xk).forEach((u,h)=>{u.notify("AnimationStart",t),s.push(sl(u,t,{...o,delay:n+l(h)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function Xk(e,t){return e.sortNodePosition(t)}function eg(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>sl(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=sl(e,t,n);else{const i=typeof t=="function"?us(e,t,n.custom):t;r=Promise.all(Zm(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const qk=cu.length;function tg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?tg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<qk;n++){const r=cu[n],i=e.props[r];(di(i)||i===!1)&&(t[r]=i)}return t}const Qk=[...du].reverse(),Jk=du.length;function Zk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>eg(e,n,r)))}function eb(e){let t=Zk(e),n=Ad(),r=!0;const i=l=>(u,h)=>{var d;const c=us(e,h,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(c){const{transition:g,transitionEnd:w,...v}=c;u={...u,...v,...w}}return u};function o(l){t=l(e)}function s(l){const{props:u}=e,h=tg(e.parent)||{},d=[],c=new Set;let g={},w=1/0;for(let S=0;S<Jk;S++){const p=Qk[S],f=n[p],m=u[p]!==void 0?u[p]:h[p],k=di(m),b=p===l?f.isActive:null;b===!1&&(w=S);let T=m===h[p]&&m!==u[p]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),f.protectedKeys={...g},!f.isActive&&b===null||!m&&!f.prevProp||as(m)||typeof m=="boolean")continue;const E=tb(f.prevProp,m);let I=E||p===l&&f.isActive&&!T&&k||S>w&&k,V=!1;const j=Array.isArray(m)?m:[m];let re=j.reduce(i(p),{});b===!1&&(re={});const{prevResolvedValues:Ye={}}=f,M={...Ye,...re},$=U=>{I=!0,c.has(U)&&(V=!0,c.delete(U)),f.needsAnimating[U]=!0;const C=e.getValue(U);C&&(C.liveStyle=!1)};for(const U in M){const C=re[U],L=Ye[U];if(g.hasOwnProperty(U))continue;let D=!1;qa(C)&&qa(L)?D=!cm(C,L):D=C!==L,D?C!=null?$(U):c.add(U):C!==void 0&&c.has(U)?$(U):f.protectedKeys[U]=!0}f.prevProp=m,f.prevResolvedValues=re,f.isActive&&(g={...g,...re}),r&&e.blockInitialAnimation&&(I=!1),I&&(!(T&&E)||V)&&d.push(...j.map(U=>({animation:U,options:{type:p}})))}if(c.size){const S={};c.forEach(p=>{const f=e.getBaseTarget(p),m=e.getValue(p);m&&(m.liveStyle=!0),S[p]=f??null}),d.push({animation:S})}let v=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(d):Promise.resolve()}function a(l,u){var h;if(n[l].isActive===u)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(c=>{var g;return(g=c.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const d=s(l);for(const c in n)n[c].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ad(),r=!0}}}function tb(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!cm(t,e):!1}function tn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ad(){return{animate:tn(!0),whileInView:tn(),whileHover:tn(),whileTap:tn(),whileDrag:tn(),whileFocus:tn(),exit:tn()}}class Jt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class nb extends Jt{constructor(t){super(t),t.animationState||(t.animationState=eb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();as(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let rb=0;class ib extends Jt{constructor(){super(...arguments),this.id=rb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ob={animation:{Feature:nb},exit:{Feature:ib}};function pi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Si(e){return{point:{x:e.pageX,y:e.pageY}}}const sb=e=>t=>Cu(t)&&e(t,Si(t));function Wr(e,t,n,r){return pi(e,t,sb(n),r)}const Ed=(e,t)=>Math.abs(e-t);function ab(e,t){const n=Ed(e.x,t.x),r=Ed(e.y,t.y);return Math.sqrt(n**2+r**2)}class ng{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Gs(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,g=ab(d.offset,{x:0,y:0})>=3;if(!c&&!g)return;const{point:w}=d,{timestamp:v}=se;this.history.push({...w,timestamp:v});const{onStart:S,onMove:p}=this.handlers;c||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,d)},this.handlePointerMove=(d,c)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ks(c,this.transformPagePoint),O.update(this.updatePoint,!0)},this.handlePointerUp=(d,c)=>{this.end();const{onEnd:g,onSessionEnd:w,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Gs(d.type==="pointercancel"?this.lastMoveEventInfo:Ks(c,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,S),w&&w(d,S)},!Cu(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Si(t),a=Ks(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=se;this.history=[{...l,timestamp:u}];const{onSessionStart:h}=n;h&&h(t,Gs(a,this.history)),this.removeListeners=bi(Wr(this.contextWindow,"pointermove",this.handlePointerMove),Wr(this.contextWindow,"pointerup",this.handlePointerUp),Wr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),rt(this.updatePoint)}}function Ks(e,t){return t?{point:t(e.point)}:e}function Cd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Gs({point:e},t){return{point:e,delta:Cd(e,rg(t)),offset:Cd(e,lb(t)),velocity:ub(t,.1)}}function lb(e){return e[0]}function rg(e){return e[e.length-1]}function ub(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=rg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vt(t)));)n--;if(!r)return{x:0,y:0};const o=kt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const ig=1e-4,hb=1-ig,db=1+ig,og=.01,cb=0-og,fb=0+og;function De(e){return e.max-e.min}function pb(e,t,n){return Math.abs(e-t)<=n}function Pd(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=De(n)/De(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=hb&&e.scale<=db||isNaN(e.scale))&&(e.scale=1),(e.translate>=cb&&e.translate<=fb||isNaN(e.translate))&&(e.translate=0)}function Kr(e,t,n,r){Pd(e.x,t.x,n.x,r?r.originX:void 0),Pd(e.y,t.y,n.y,r?r.originY:void 0)}function Nd(e,t,n){e.min=n.min+t.min,e.max=e.min+De(t)}function mb(e,t,n){Nd(e.x,t.x,n.x),Nd(e.y,t.y,n.y)}function jd(e,t,n){e.min=t.min-n.min,e.max=e.min+De(t)}function Gr(e,t,n){jd(e.x,t.x,n.x),jd(e.y,t.y,n.y)}function gb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function Md(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function yb(e,{top:t,left:n,bottom:r,right:i}){return{x:Md(e.x,n,i),y:Md(e.y,t,r)}}function Rd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function wb(e,t){return{x:Rd(e.x,t.x),y:Rd(e.y,t.y)}}function vb(e,t){let n=.5;const r=De(e),i=De(t);return i>r?n=kn(t.min,t.max-r,e.min):r>i&&(n=kn(e.min,e.max-i,t.min)),ct(0,1,n)}function kb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const al=.35;function bb(e=al){return e===!1?e=0:e===!0&&(e=al),{x:Ld(e,"left","right"),y:Ld(e,"top","bottom")}}function Ld(e,t,n){return{min:Dd(e,t),max:Dd(e,n)}}function Dd(e,t){return typeof e=="number"?e:e[t]||0}const Vd=()=>({translate:0,scale:1,origin:0,originPoint:0}),_n=()=>({x:Vd(),y:Vd()}),Bd=()=>({min:0,max:0}),te=()=>({x:Bd(),y:Bd()});function Fe(e){return[e("x"),e("y")]}function sg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Sb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $s(e){return e===void 0||e===1}function ll({scale:e,scaleX:t,scaleY:n}){return!$s(e)||!$s(t)||!$s(n)}function on(e){return ll(e)||ag(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ag(e){return zd(e.x)||zd(e.y)}function zd(e){return e&&e!=="0%"}function Fo(e,t,n){const r=e-n,i=t*r;return n+i}function Od(e,t,n,r,i){return i!==void 0&&(e=Fo(e,i,r)),Fo(e,n,r)+t}function ul(e,t=0,n=1,r,i){e.min=Od(e.min,t,n,r,i),e.max=Od(e.max,t,n,r,i)}function lg(e,{x:t,y:n}){ul(e.x,t.translate,t.scale,t.originPoint),ul(e.y,n.translate,n.scale,n.originPoint)}const _d=.999999999999,Fd=1.0000000000001;function Tb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Hn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,lg(e,s)),r&&on(o.latestValues)&&Hn(e,o.latestValues))}t.x<Fd&&t.x>_d&&(t.x=1),t.y<Fd&&t.y>_d&&(t.y=1)}function Fn(e,t){e.min=e.min+t,e.max=e.max+t}function Hd(e,t,n,r,i=.5){const o=q(e.min,e.max,i);ul(e,t,n,o,r)}function Hn(e,t){Hd(e.x,t.x,t.scaleX,t.scale,t.originX),Hd(e.y,t.y,t.scaleY,t.scale,t.originY)}function ug(e,t){return sg(xb(e.getBoundingClientRect(),t))}function Ib(e,t,n){const r=ug(e,n),{scroll:i}=t;return i&&(Fn(r.x,i.offset.x),Fn(r.y,i.offset.y)),r}const hg=({current:e})=>e?e.ownerDocument.defaultView:null,Ab=new WeakMap;class Eb{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Si(h).point)},o=(h,d)=>{const{drag:c,dragPropagation:g,onDragStart:w}=this.getProps();if(c&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=S0(c),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(S=>{let p=this.getAxisMotionValue(S).get()||0;if(ht.test(p)){const{projection:f}=this.visualElement;if(f&&f.layout){const m=f.layout.layoutBox[S];m&&(p=De(m)*(parseFloat(p)/100))}}this.originPoint[S]=p}),w&&O.postRender(()=>w(h,d)),Za(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(h,d)=>{const{dragPropagation:c,dragDirectionLock:g,onDirectionLock:w,onDrag:v}=this.getProps();if(!c&&!this.openDragLock)return;const{offset:S}=d;if(g&&this.currentDirection===null){this.currentDirection=Cb(S),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),v&&v(h,d)},a=(h,d)=>this.stop(h,d),l=()=>Fe(h=>{var d;return this.getAnimationState(h)==="paused"&&((d=this.getAxisMotionValue(h).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ng(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:hg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&O.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ki(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=gb(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&zn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=yb(i.layoutBox,n):this.constraints=!1,this.elastic=bb(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Fe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=kb(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!zn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Ib(r,i.root,this.visualElement.getTransformPagePoint());let s=wb(i.layout.layoutBox,o);if(n){const a=n(Sb(s));this.hasMutatedConstraints=!!a,a&&(s=sg(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Fe(h=>{if(!Ki(h,n,this.currentDirection))return;let d=l&&l[h]||{};s&&(d={min:0,max:0});const c=i?200:1e6,g=i?40:1e7,w={type:"inertia",velocity:r?t[h]:0,bounceStiffness:c,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(h,w)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Za(this.visualElement,t),r.start(Hu(t,r,0,n,this.visualElement,!1))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:r}=this.getProps();if(!Ki(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-q(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!zn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Fe(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=vb({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Fe(s=>{if(!Ki(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(q(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;Ab.set(this.visualElement,this);const t=this.visualElement.current,n=Wr(t,"pointerdown",l=>{const{drag:u,dragListener:h=!0}=this.getProps();u&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();zn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),O.read(r);const s=pi(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Fe(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=l[h].translate,d.set(d.get()+l[h].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=al,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ki(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Cb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Pb extends Jt{constructor(t){super(t),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new Eb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ud=e=>(t,n)=>{e&&O.postRender(()=>e(t,n))};class Nb extends Jt{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(t){this.session=new ng(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ud(t),onStart:Ud(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&O.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Wr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const so={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Sr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=Wd(e,t.target.x),r=Wd(e,t.target.y);return`${n}% ${r}%`}},jb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$t.parse(e);if(i.length>5)return r;const o=$t.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=q(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class Mb extends x.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;r0(Rb),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),so.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||O.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),pu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function dg(e){const[t,n]=Wp(),r=x.useContext(lu);return y.jsx(Mb,{...e,layoutGroup:r,switchLayoutGroup:x.useContext(Zp),isPresent:t,safeToRemove:n})}const Rb={borderRadius:{...Sr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sr,borderTopRightRadius:Sr,borderBottomLeftRadius:Sr,borderBottomRightRadius:Sr,boxShadow:jb};function Lb(e,t,n){const r=he(e)?e:at(e);return r.start(Hu("",r,t,n)),r.animation}function Db(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Vb=(e,t)=>e.depth-t.depth;class Bb{constructor(){this.children=[],this.isDirty=!1}add(t){Pu(this.children,t),this.isDirty=!0}remove(t){Nu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Vb),this.isDirty=!1,this.children.forEach(t)}}function zb(e,t){const n=dt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(rt(r),e(o-t))};return O.read(r,!0),()=>rt(r)}const cg=["TopLeft","TopRight","BottomLeft","BottomRight"],Ob=cg.length,Kd=e=>typeof e=="string"?parseFloat(e):e,Gd=e=>typeof e=="number"||R.test(e);function _b(e,t,n,r,i,o){i?(e.opacity=q(0,n.opacity!==void 0?n.opacity:1,Fb(r)),e.opacityExit=q(t.opacity!==void 0?t.opacity:1,0,Hb(r))):o&&(e.opacity=q(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Ob;s++){const a=`border${cg[s]}Radius`;let l=$d(t,a),u=$d(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gd(l)===Gd(u)?(e[a]=Math.max(q(Kd(l),Kd(u),r),0),(ht.test(u)||ht.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function $d(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Fb=fg(0,.5,Pm),Hb=fg(.5,.95,Se);function fg(e,t,n){return r=>r<e?0:r>t?1:n(kn(e,t,r))}function Yd(e,t){e.min=t.min,e.max=t.max}function _e(e,t){Yd(e.x,t.x),Yd(e.y,t.y)}function Xd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function qd(e,t,n,r,i){return e-=t,e=Fo(e,1/n,r),i!==void 0&&(e=Fo(e,1/i,r)),e}function Ub(e,t=0,n=1,r=.5,i,o=e,s=e){if(ht.test(t)&&(t=parseFloat(t),t=q(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=q(o.min,o.max,r);e===o&&(a-=t),e.min=qd(e.min,t,n,a,i),e.max=qd(e.max,t,n,a,i)}function Qd(e,t,[n,r,i],o,s){Ub(e,t[n],t[r],t[i],t.scale,o,s)}const Wb=["x","scaleX","originX"],Kb=["y","scaleY","originY"];function Jd(e,t,n,r){Qd(e.x,t,Wb,n?n.x:void 0,r?r.x:void 0),Qd(e.y,t,Kb,n?n.y:void 0,r?r.y:void 0)}function Zd(e){return e.translate===0&&e.scale===1}function pg(e){return Zd(e.x)&&Zd(e.y)}function ec(e,t){return e.min===t.min&&e.max===t.max}function Gb(e,t){return ec(e.x,t.x)&&ec(e.y,t.y)}function tc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function mg(e,t){return tc(e.x,t.x)&&tc(e.y,t.y)}function nc(e){return De(e.x)/De(e.y)}function rc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class $b{constructor(){this.members=[]}add(t){Pu(this.members,t),t.scheduleRender()}remove(t){if(Nu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Yb(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:h,rotateX:d,rotateY:c,skewX:g,skewY:w}=n;u&&(r=`perspective(${u}px) ${r}`),h&&(r+=`rotate(${h}deg) `),d&&(r+=`rotateX(${d}deg) `),c&&(r+=`rotateY(${c}deg) `),g&&(r+=`skewX(${g}deg) `),w&&(r+=`skewY(${w}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const sn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Mr=typeof window<"u"&&window.MotionDebug!==void 0,Ys=["","X","Y","Z"],Xb={visibility:"hidden"},ic=1e3;let qb=0;function Xs(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function gg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Sm(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",O,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&gg(r)}function yg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=qb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mr&&(sn.totalNodes=sn.resolvedTargetDeltas=sn.recalculatedProjection=0),this.nodes.forEach(Zb),this.nodes.forEach(iS),this.nodes.forEach(oS),this.nodes.forEach(eS),Mr&&window.MotionDebug.record(sn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bb)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new ju),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Db(s),this.instance=s;const{layoutId:l,layout:u,visualElement:h}=this.options;if(h&&!h.current&&h.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const c=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=zb(c,250),so.hasAnimatedSinceResize&&(so.hasAnimatedSinceResize=!1,this.nodes.forEach(sc))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:c,hasRelativeTargetChanged:g,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||h.getDefaultTransition()||hS,{onLayoutAnimationStart:S,onLayoutAnimationComplete:p}=h.getProps(),f=!this.targetLayout||!mg(this.targetLayout,w)||g,m=!c&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||c&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,m);const k={...Tu(v,"layout"),onPlay:S,onComplete:p};(h.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else c||sc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,rt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sS),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const d=this.path[h];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(oc);return}this.isUpdating||this.nodes.forEach(nS),this.isUpdating=!1,this.nodes.forEach(rS),this.nodes.forEach(Qb),this.nodes.forEach(Jb),this.clearAllSnapshots();const a=dt.now();se.delta=ct(0,1e3/60,a-se.timestamp),se.timestamp=a,se.isProcessing=!0,Os.update.process(se),Os.preRender.process(se),Os.render.process(se),se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(tS),this.sharedNodes.forEach(aS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,O.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){O.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!pg(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,h=u!==this.prevTransformTemplateValue;s&&(a||on(this.latestValues)||h)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),dS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return te();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(cS))){const{scroll:h}=this.root;h&&(Fn(l.x,h.offset.x),Fn(l.y,h.offset.y))}return l}removeElementScroll(s){var a;const l=te();if(_e(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const h=this.path[u],{scroll:d,options:c}=h;h!==this.root&&d&&c.layoutScroll&&(d.wasRoot&&_e(l,s),Fn(l.x,d.offset.x),Fn(l.y,d.offset.y))}return l}applyTransform(s,a=!1){const l=te();_e(l,s);for(let u=0;u<this.path.length;u++){const h=this.path[u];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Hn(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),on(h.latestValues)&&Hn(l,h.latestValues)}return on(this.latestValues)&&Hn(l,this.latestValues),l}removeTransform(s){const a=te();_e(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!on(u.latestValues))continue;ll(u.latestValues)&&u.updateSnapshot();const h=te(),d=u.measurePageBox();_e(h,d),Jd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,h)}return on(this.latestValues)&&Jd(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:c}=this.options;if(!(!this.layout||!(d||c))){if(this.resolvedRelativeTargetAt=se.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Gr(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),_e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=te(),this.targetWithTransforms=te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_e(this.target,this.layout.layoutBox),lg(this.target,this.targetDelta)):_e(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Gr(this.relativeTargetOrigin,this.target,g.target),_e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Mr&&sn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ll(this.parent.latestValues)||ag(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===se.timestamp&&(u=!1),u)return;const{layout:h,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||d))return;_e(this.layoutCorrected,this.layout.layoutBox);const c=this.treeScale.x,g=this.treeScale.y;Tb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=te());const{target:w}=a;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xd(this.prevProjectionDelta.x,this.projectionDelta.x),Xd(this.prevProjectionDelta.y,this.projectionDelta.y)),Kr(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==c||this.treeScale.y!==g||!rc(this.projectionDelta.x,this.prevProjectionDelta.x)||!rc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Mr&&sn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_n(),this.projectionDelta=_n(),this.projectionDeltaWithTransform=_n()}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},h={...this.latestValues},d=_n();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const c=te(),g=l?l.source:void 0,w=this.layout?this.layout.source:void 0,v=g!==w,S=this.getStack(),p=!S||S.members.length<=1,f=!!(v&&!p&&this.options.crossfade===!0&&!this.path.some(uS));this.animationProgress=0;let m;this.mixTargetDelta=k=>{const b=k/1e3;ac(d.x,s.x,b),ac(d.y,s.y,b),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Gr(c,this.layout.layoutBox,this.relativeParent.layout.layoutBox),lS(this.relativeTarget,this.relativeTargetOrigin,c,b),m&&Gb(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=te()),_e(m,this.relativeTarget)),v&&(this.animationValues=h,_b(h,u,this.latestValues,b,f,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(rt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=O.update(()=>{so.hasAnimatedSinceResize=!0,this.currentAnimation=Lb(0,ic,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ic),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:h}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&wg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||te();const d=De(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const c=De(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+c}_e(a,l),Hn(a,h),Kr(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new $b),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Xs("z",s,u,this.animationValues);for(let h=0;h<Ys.length;h++)Xs(`rotate${Ys[h]}`,s,u,this.animationValues),Xs(`skew${Ys[h]}`,s,u,this.animationValues);s.render();for(const h in u)s.setStaticValue(h,u[h]),this.animationValues&&(this.animationValues[h]=u[h]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Xb;const u={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=io(s==null?void 0:s.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=io(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!on(this.latestValues)&&(v.transform=h?h({},""):"none",this.hasProjected=!1),v}const c=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Yb(this.projectionDeltaWithTransform,this.treeScale,c),h&&(u.transform=h(c,u.transform));const{x:g,y:w}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${w.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=c.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:c.opacityExit:u.opacity=d===this?c.opacity!==void 0?c.opacity:"":c.opacityExit!==void 0?c.opacityExit:0;for(const v in Vo){if(c[v]===void 0)continue;const{correct:S,applyTo:p}=Vo[v],f=u.transform==="none"?c[v]:S(c[v],d);if(p){const m=p.length;for(let k=0;k<m;k++)u[p[k]]=f}else u[v]=f}return this.options.layoutId&&(u.pointerEvents=d===this?io(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(oc),this.root.sharedNodes.clear()}}}function Qb(e){e.updateLayout()}function Jb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?Fe(d=>{const c=s?n.measuredBox[d]:n.layoutBox[d],g=De(c);c.min=r[d].min,c.max=c.min+g}):wg(o,n.layoutBox,r)&&Fe(d=>{const c=s?n.measuredBox[d]:n.layoutBox[d],g=De(r[d]);c.max=c.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=_n();Kr(a,r,n.layoutBox);const l=_n();s?Kr(l,e.applyTransform(i,!0),n.measuredBox):Kr(l,r,n.layoutBox);const u=!pg(a);let h=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:c,layout:g}=d;if(c&&g){const w=te();Gr(w,n.layoutBox,c.layoutBox);const v=te();Gr(v,r,g.layoutBox),mg(w,v)||(h=!0),d.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=w,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Zb(e){Mr&&sn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function eS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function tS(e){e.clearSnapshot()}function oc(e){e.clearMeasurements()}function nS(e){e.isLayoutDirty=!1}function rS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function sc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function iS(e){e.resolveTargetDelta()}function oS(e){e.calcProjection()}function sS(e){e.resetSkewAndRotation()}function aS(e){e.removeLeadSnapshot()}function ac(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function lc(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function lS(e,t,n,r){lc(e.x,t.x,n.x,r),lc(e.y,t.y,n.y,r)}function uS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const hS={duration:.45,ease:[.4,0,.1,1]},uc=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hc=uc("applewebkit/")&&!uc("chrome/")?Math.round:Se;function dc(e){e.min=hc(e.min),e.max=hc(e.max)}function dS(e){dc(e.x),dc(e.y)}function wg(e,t,n){return e==="position"||e==="preserve-aspect"&&!pb(nc(t),nc(n),.2)}function cS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const fS=yg({attachResizeListener:(e,t)=>pi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qs={current:void 0},vg=yg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qs.current){const e=new fS({});e.mount(window),e.setOptions({layoutScroll:!0}),qs.current=e}return qs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),pS={pan:{Feature:Nb},drag:{Feature:Pb,ProjectionNode:vg,MeasureLayout:dg}};function cc(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&O.postRender(()=>o(t,Si(t)))}class mS extends Jt{mount(){const{current:t}=this.node;t&&(this.unmount=y0(t,n=>(cc(this.node,n,"Start"),r=>cc(this.node,r,"End"))))}unmount(){}}class gS extends Jt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bi(pi(this.node.current,"focus",()=>this.onFocus()),pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function fc(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&O.postRender(()=>o(t,Si(t)))}class yS extends Jt{mount(){const{current:t}=this.node;t&&(this.unmount=b0(t,n=>(fc(this.node,n,"Start"),(r,{success:i})=>fc(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hl=new WeakMap,Qs=new WeakMap,wS=e=>{const t=hl.get(e.target);t&&t(e)},vS=e=>{e.forEach(wS)};function kS({root:e,...t}){const n=e||document;Qs.has(n)||Qs.set(n,{});const r=Qs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(vS,{root:e,...t})),r[i]}function bS(e,t,n){const r=kS(t);return hl.set(e,n),r.observe(e),()=>{hl.delete(e),r.unobserve(e)}}const SS={some:0,all:1};class xS extends Jt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:SS[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),c=u?h:d;c&&c(l)};return bS(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(TS(t,n))&&this.startObserver()}unmount(){}}function TS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const IS={inView:{Feature:xS},tap:{Feature:yS},focus:{Feature:gS},hover:{Feature:mS}},AS={layout:{ProjectionNode:vg,MeasureLayout:dg}},dl={current:null},kg={current:!1};function ES(){if(kg.current=!0,!!uu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>dl.current=e.matches;e.addListener(t),t()}else dl.current=!1}const CS=[...Um,ye,$t],PS=e=>CS.find(Hm(e)),pc=new WeakMap;function NS(e,t,n){for(const r in t){const i=t[r],o=n[r];if(he(i))e.addValue(r,i);else if(he(o))e.addValue(r,at(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,at(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const mc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ou,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=dt.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,O.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:h}=s;this.onUpdate=h,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ls(n),this.isVariantNode=Qp(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...c}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in c){const w=c[g];l[g]!==void 0&&he(w)&&w.set(l[g],!1)}}mount(t){this.current=t,pc.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),kg.current||ES(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){pc.delete(this.current),this.projection&&this.projection.unmount(),rt(this.notifyUpdate),rt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=xn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&O.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in rr){const n=rr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<mc.length;r++){const i=mc[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=NS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=at(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(_m(i)||jm(i))?i=parseFloat(i):!PS(i)&&$t.test(n)&&(i=Bm(t,n)),this.setBaseTarget(t,he(i)?i.get():i)),he(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=gu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!he(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ju),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class bg extends jS{constructor(){super(...arguments),this.KeyframeResolver=Wm}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;he(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function MS(e){return window.getComputedStyle(e)}class RS extends bg{constructor(){super(...arguments),this.type="html",this.renderInstance=sm}readValueFromInstance(t,n){if(xn.has(n)){const r=zu(n);return r&&r.default||0}else{const r=MS(t),i=(rm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ug(t,n)}build(t,n,r){vu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return xu(t,n,r)}}class LS extends bg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=te}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(xn.has(n)){const r=zu(n);return r&&r.default||0}return n=am.has(n)?n:fu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return hm(t,n,r)}build(t,n,r){ku(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){lm(t,n,r,i)}mount(t){this.isSVGTag=Su(t.tagName),super.mount(t)}}const DS=(e,t)=>mu(e)?new LS(t):new RS(t,{allowProjection:e!==x.Fragment}),VS=c0({...ob,...IS,...pS,...AS},DS),H=Ev(VS);function Sg(e,t){let n;const r=()=>{const{currentTime:i}=t,s=(i===null?0:i.value)/100;n!==s&&e(s),n=s};return O.update(r,!0),()=>rt(r)}const ao=new WeakMap;let Nt;function BS(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function zS({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ao.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return BS(e,n)}})})}function OS(e){e.forEach(zS)}function _S(){typeof ResizeObserver>"u"||(Nt=new ResizeObserver(OS))}function FS(e,t){Nt||_S();const n=Eu(e);return n.forEach(r=>{let i=ao.get(r);i||(i=new Set,ao.set(r,i)),i.add(t),Nt==null||Nt.observe(r)}),()=>{n.forEach(r=>{const i=ao.get(r);i==null||i.delete(t),i!=null&&i.size||Nt==null||Nt.unobserve(r)})}}const lo=new Set;let $r;function HS(){$r=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};lo.forEach(n=>n(t))},window.addEventListener("resize",$r)}function US(e){return lo.add(e),$r||HS(),()=>{lo.delete(e),!lo.size&&$r&&($r=void 0)}}function WS(e,t){return typeof e=="function"?US(e):FS(e,t)}const KS=50,gc=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),GS=()=>({time:0,x:gc(),y:gc()}),$S={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function yc(e,t,n,r){const i=n[t],{length:o,position:s}=$S[t],a=i.current,l=n.time;i.current=e[`scroll${s}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=kn(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>KS?0:Mu(i.current-a,u)}function YS(e,t,n){yc(e,"x",t,n),yc(e,"y",t,n),t.time=n}function XS(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const cl={start:0,center:.5,end:1};function wc(e,t,n=0){let r=0;if(e in cl&&(e=cl[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const qS=[0,0];function QS(e,t,n,r){let i=Array.isArray(e)?e:qS,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,cl[e]?e:"0"]),o=wc(i[0],n,r),s=wc(i[1],t),o-s}const JS={All:[[0,0],[1,1]]},ZS={x:0,y:0};function ex(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function tx(e,t,n){const{offset:r=JS.All}=n,{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?XS(i,e):ZS,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:ex(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let h=!t[o].interpolate;const d=r.length;for(let c=0;c<d;c++){const g=QS(r[c],u[s],l[s],a[o]);!h&&g!==t[o].interpolatorOffsets[c]&&(h=!0),t[o].offset[c]=g}h&&(t[o].interpolate=Fu(t[o].offset,Qm(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=ct(0,1,t[o].interpolate(t[o].current))}function nx(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function rx(e,t,n,r={}){return{measure:()=>nx(e,r.target,n),update:i=>{YS(e,n,i),(r.offset||r.target)&&tx(e,n,r)},notify:()=>t(n)}}const xr=new WeakMap,vc=new WeakMap,Js=new WeakMap,kc=e=>e===document.documentElement?window:e;function Uu(e,{container:t=document.documentElement,...n}={}){let r=Js.get(t);r||(r=new Set,Js.set(t,r));const i=GS(),o=rx(t,e,i,n);if(r.add(o),!xr.has(t)){const a=()=>{for(const c of r)c.measure()},l=()=>{for(const c of r)c.update(se.timestamp)},u=()=>{for(const c of r)c.notify()},h=()=>{O.read(a,!1,!0),O.read(l,!1,!0),O.update(u,!1,!0)};xr.set(t,h);const d=kc(t);window.addEventListener("resize",h,{passive:!0}),t!==document.documentElement&&vc.set(t,WS(t,h)),d.addEventListener("scroll",h,{passive:!0})}const s=xr.get(t);return O.read(s,!1,!0),()=>{var a;rt(s);const l=Js.get(t);if(!l||(l.delete(o),l.size))return;const u=xr.get(t);xr.delete(t),u&&(kc(t).removeEventListener("scroll",u),(a=vc.get(t))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function ix({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Uu(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Zs=new Map;function xg({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Zs.has(t)||Zs.set(t,{});const r=Zs.get(t);return r[n]||(r[n]=fm()?new ScrollTimeline({source:t,axis:n}):ix({source:t,axis:n})),r[n]}function ox(e){return e.length===2}function Tg(e){return e&&(e.target||e.offset)}function sx(e,t){return ox(e)||Tg(t)?Uu(n=>{e(n[t.axis].progress,n)},t):Sg(e,xg(t))}function ax(e,t){if(e.flatten(),Tg(t))return e.pause(),Uu(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=xg(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),Sg(i=>{r.time=r.duration*i},n))):Se}}function lx(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?sx(e,r):ax(e,r)}function bc(e,t){vv(!!(!t||t.current))}const ux=()=>({scrollX:at(0),scrollY:at(0),scrollXProgress:at(0),scrollYProgress:at(0)});function hx({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Qt(ux);return(n?ur:x.useEffect)(()=>(bc("target",t),bc("container",e),lx((s,{x:a,y:l})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function Ho(e){const t=Qt(()=>at(e)),{isStatic:n}=x.useContext(vn);if(n){const[,r]=x.useState(e);x.useEffect(()=>t.on("change",r),[])}return t}function Ig(e,t){const n=Ho(t()),r=()=>n.set(t());return r(),ur(()=>{const i=()=>O.preRender(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),rt(r)}}),n}function Sc(e){return typeof e=="number"?e:parseFloat(e)}function xc(e,t={}){const{isStatic:n}=x.useContext(vn),r=x.useRef(null),i=Ho(he(e)?Sc(e.get()):e),o=x.useRef(i.get()),s=x.useRef(()=>{}),a=()=>{const u=r.current;u&&u.time===0&&u.sample(se.delta),l(),r.current=Rk({keyframes:[i.get(),o.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:s.current})},l=()=>{r.current&&r.current.stop()};return x.useInsertionEffect(()=>i.attach((u,h)=>n?h(u):(o.current=u,s.current=h,O.update(a),i.get()),l),[JSON.stringify(t)]),ur(()=>{if(he(e))return e.on("change",u=>i.set(Sc(u)))},[i]),i}const dx=e=>e&&typeof e=="object"&&e.mix,cx=e=>dx(e)?e.mix:void 0;function fx(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Fu(i,o,{mixer:cx(o[0]),...s});return t?a(r):a}function px(e){Hr.current=[],e();const t=Ig(Hr.current,e);return Hr.current=void 0,t}function Tc(e,t,n,r){if(typeof e=="function")return px(e);const i=typeof t=="function"?t:fx(t,n,r);return Array.isArray(e)?Ic(e,i):Ic([e],([o])=>i(o))}function Ic(e,t){const n=Qt(()=>[]);return Ig(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function mx(e){e.values.forEach(t=>t.stop())}function fl(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&Ru(e,i),e.variantChildren&&e.variantChildren.forEach(o=>{fl(o,t)})})}function gx(e,t){if(Array.isArray(t))return fl(e,t);if(typeof t=="string")return fl(e,[t]);Ru(e,t)}function yx(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(o=>{i.push(eg(o,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{gx(r,n)})},stop(){e.forEach(n=>{mx(n)})},mount(){return()=>{t.stop()}}};return t}function wx(){const e=Qt(yx);return ur(e.mount,[]),e}const vx=wx,kx={some:0,all:1};function bx(e,t,{root:n,margin:r,amount:i="some"}={}){const o=Eu(e),s=new WeakMap,a=u=>{u.forEach(h=>{const d=s.get(h.target);if(h.isIntersecting!==!!d)if(h.isIntersecting){const c=t(h);typeof c=="function"?s.set(h.target,c):l.unobserve(h.target)}else typeof d=="function"&&(d(h),s.delete(h.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:r,threshold:typeof i=="number"?i:kx[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function Sx(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,s]=x.useState(!1);return x.useEffect(()=>{if(!e.current||i&&o)return;const a=()=>(s(!0),i?void 0:()=>s(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return bx(e.current,a,l)},[t,e,n,i,r]),o}const ea=cr(.77,0,.175,1),uo={short:.55,base:.9,long:1.3},ft={short:{duration:uo.short,ease:ea},default:{duration:uo.base,ease:ea},long:{duration:uo.long,ease:ea}},It={fadeSlideUp:{hidden:{opacity:0,y:48},visible:{opacity:1,y:0,transition:ft.default}},imageReveal:{hidden:{opacity:0,scale:1.03},visible:{opacity:1,scale:1,transition:{...ft.long,opacity:{duration:uo.short}}}}},xx={staggerChildren:.12,delayChildren:.05},Ag={card:{scale:1.02,rotateX:-1.5,rotateY:1.5,boxShadow:"0 25px 60px rgba(0, 255, 240, 0.15)"},button:{scale:1.01,boxShadow:"0 10px 40px rgba(0, 255, 240, 0.35)"}},Tx={initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:ft.long},exit:{opacity:0,y:60,transition:ft.short}},Ix={hidden:{opacity:0,y:24},visible:(e=0)=>({opacity:1,y:0,transition:{...ft.default,delay:e*.08}})},Eg={legacy:{label:"Tron Legacy",accent:"#00f6ff",accentAlt:"#00a8ff",accentGlow:"rgba(0, 255, 255, 0.4)",accentContrast:"#02050d",accentSoft:"rgba(0, 246, 255, 0.2)",background:"#03060f",backgroundGradient:"radial-gradient(circle at 50% 50%, #000000ff, #070822ff 95%)",cardBorder:"rgba(0, 247, 255, 0.18)",cardBackground:"rgba(4, 14, 25, 0.85)",cardInner:"linear-gradient(180deg, rgba(0, 247, 255, 0.08), rgba(3, 6, 15, 0.95))",textPrimary:"#f5ffff",textSecondary:"#bde9fd",textMuted:"#7ec3d7",eyebrow:"rgba(146, 233, 255, 0.75)",chipBackground:"rgba(0, 246, 255, 0.08)",chipBorder:"rgba(0, 246, 255, 0.35)",buttonGradient:"linear-gradient(120deg, #00f6ff, #00b3ff)",buttonSecondaryBg:"rgba(255, 255, 255, 0.04)",buttonBorder:"rgba(0, 247, 255, 0.4)",buttonShadow:"0 15px 45px rgba(0, 255, 247, 0.35)",cardGlow:"0 25px 60px rgba(0, 255, 247, 0.2)",ambientPrimary:"rgba(0, 246, 255, 0.35)",ambientSecondary:"rgba(0, 93, 255, 0.25)",ambientLine:"rgba(0, 246, 255, 0.35)",neonCore:"#00f6ff",neonSecondary:"#4de0ff"},ares:{label:"Tron Ares",accent:"#ff0000",accentAlt:"#ff3366",accentGlow:"rgba(255, 0, 0, 0.7)",accentContrast:"#1a0202",accentSoft:"rgba(255, 0, 0, 0.22)",background:"#050003",backgroundGradient:"radial-gradient(circle at 50% 50%, #000000ff, #340808ff 95%)",cardBorder:"rgba(255, 0, 0, 0.45)",cardBackground:"rgba(20, 2, 4, 0.92)",cardInner:"linear-gradient(180deg, rgba(255, 0, 0, 0.16), rgba(5, 0, 3, 0.95))",textPrimary:"#ffe5e5",textSecondary:"#ffb8b8",textMuted:"#f58a8a",eyebrow:"rgba(255, 140, 140, 0.95)",chipBackground:"rgba(255, 0, 0, 0.16)",chipBorder:"rgba(255, 0, 0, 0.55)",buttonGradient:"linear-gradient(120deg, #ff0000, #ff3366)",buttonSecondaryBg:"rgba(255, 255, 255, 0.08)",buttonBorder:"rgba(255, 0, 0, 0.55)",buttonShadow:"0 24px 70px rgba(255, 0, 0, 0.65)",cardGlow:"0 30px 80px rgba(255, 0, 0, 0.4)",ambientPrimary:"rgba(255, 0, 0, 0.55)",ambientSecondary:"rgba(255, 50, 110, 0.45)",ambientLine:"rgba(255, 0, 0, 0.5)",neonCore:"#ff1a1a",neonSecondary:"#ff3366"}},Cg=x.createContext({theme:"legacy",tokens:Eg.legacy,toggleTheme:()=>{}});function Ax({children:e}){const[t,n]=x.useState(()=>typeof window>"u"?"legacy":window.localStorage.getItem("tron-theme")??"legacy");x.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),typeof window<"u"&&window.localStorage.setItem("tron-theme",t)},[t]);const r=()=>n(o=>o==="legacy"?"ares":"legacy"),i=x.useMemo(()=>({theme:t,tokens:Eg[t],toggleTheme:r,setTheme:n}),[t]);return y.jsx(Cg.Provider,{value:i,children:e})}const Ve=()=>x.useContext(Cg),Ex=[{size:"w-[34rem] h-[34rem]",left:"-8%",top:"-18%"}],Cx=[{left:"20%",duration:36,delay:0},{left:"60%",duration:40,delay:2.5}],Px=[{top:"30%",left:"22%"},{top:"68%",left:"55%"}];function Nx(){const{tokens:e}=Ve();return y.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[y.jsx(H.div,{className:"absolute inset-0",style:{background:e.backgroundGradient},animate:{opacity:[.95,1,.95]},transition:{duration:36,repeat:1/0}}),Ex.map((t,n)=>y.jsx(H.div,{className:`absolute ${t.size} rounded-full`,style:{left:t.left,right:t.right,top:t.top,bottom:t.bottom,background:e.ambientPrimary,filter:"blur(100px)",opacity:.6},animate:{y:[-20,12,-20],x:[0,n%2===0?18:-18,0],opacity:[.45,.75,.45]},transition:{duration:40+n*8,repeat:1/0}},`orb-${n}`)),Cx.map((t,n)=>y.jsx(H.div,{className:"absolute h-[160%] w-[1px]",style:{left:t.left,top:"-30%",background:`linear-gradient(180deg, transparent, ${e.ambientLine}, transparent)`,opacity:.5,transformOrigin:"center"},animate:{y:["-18%","18%"]},transition:{duration:t.duration,repeat:1/0,delay:t.delay}},`stream-${n}`)),Px.map((t,n)=>y.jsx(H.div,{className:"absolute h-10 w-10 rounded-full",style:{top:t.top,left:t.left,background:e.accentGlow,filter:"blur(10px)",opacity:.28},animate:{opacity:[.18,.6,.18],scale:[.9,1.08,.9]},transition:{duration:20+n*6,repeat:1/0}},`node-${n}`)),y.jsx(H.div,{className:"absolute inset-0",style:{backgroundImage:"linear-gradient(transparent 92%, rgba(255,255,255,0.03) 92%), linear-gradient(90deg, transparent 92%, rgba(255,255,255,0.03) 92%)",backgroundSize:"140px 140px",mixBlendMode:"screen",opacity:.12},animate:{opacity:[.12,.16,.12]},transition:{duration:28,repeat:1/0}}),y.jsx(H.div,{className:"absolute inset-x-0 -bottom-32 h-64",style:{background:`linear-gradient(0deg, ${e.background}, transparent)`},animate:{opacity:[.35,.6,.35]},transition:{duration:28,repeat:1/0}}),y.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, rgba(3,5,12,0.92), rgba(1,2,6,0.98))",mixBlendMode:"screen",opacity:.7}})]})}function fr({id:e,children:t,className:n=""}){return y.jsx("section",{id:e,className:`relative w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-20 ${n}`,"data-section":e,children:y.jsx("div",{className:"mx-auto max-w-6xl",children:t})})}const Ac={stiffness:220,damping:18,mass:.4};function jx(e=.2){const t=Ho(0),n=Ho(0),r=xc(t,Ac),i=xc(n,Ac),o=x.useCallback(a=>{const l=a.currentTarget.getBoundingClientRect(),u=a.clientX-(l.left+l.width/2),h=a.clientY-(l.top+l.height/2);t.set(u*e),n.set(h*e)},[e,t,n]),s=x.useCallback(()=>{t.set(0),n.set(0)},[t,n]);return{x:r,y:i,handleMouseMove:o,handleMouseLeave:s}}const Mx={button:H.button,a:H.a,div:H.div};function Xn({children:e,className:t="",variant:n="primary",as:r="button",style:i,...o}){const s=jx(.15),{tokens:a}=Ve(),l="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-[0.3em] transition-colors duration-500 focus:outline-none focus-visible:ring-2",u={primary:{backgroundImage:a.buttonGradient,color:a.accentContrast,borderColor:a.buttonBorder,boxShadow:a.buttonShadow},secondary:{borderColor:a.buttonBorder,color:a.textPrimary,background:a.buttonSecondaryBg,boxShadow:"none"},ghost:{color:a.textPrimary,borderColor:"transparent",background:"transparent",boxShadow:"none"}},h=[l,t].filter(Boolean).join(" "),d=Mx[r]??H.button,c={x:s.x,y:s.y,...u[n],...i};return y.jsxs(d,{...o,className:h,style:c,whileHover:{...Ag.button,boxShadow:a.buttonShadow},whileTap:{scale:.96},onMouseMove:s.handleMouseMove,onMouseLeave:s.handleMouseLeave,transition:ft.short,children:[y.jsx("span",{className:"relative z-10 font-semibold",children:e}),y.jsx("span",{className:"pointer-events-none absolute inset-0 rounded-full blur-2xl",style:{background:`linear-gradient(120deg, ${a.accentSoft}, transparent)`,opacity:n==="ghost"?.2:.5}})]})}function or({children:e,className:t="",...n}){const{tokens:r}=Ve();return y.jsxs(H.article,{className:`group relative overflow-hidden rounded-3xl border p-px ${t}`,whileHover:{...Ag.card,boxShadow:r.cardGlow},transition:ft.default,style:{borderColor:r.cardBorder,background:r.cardBackground},...n,children:[y.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(120deg, rgba(255,255,255,0.05), transparent 40%, rgba(255,255,255,0.05) 60%, transparent)",opacity:.35,mixBlendMode:"screen"}}),y.jsx("div",{className:"pointer-events-none absolute inset-4 rounded-[26px] border border-white/5",style:{boxShadow:`0 0 24px ${r.cardBorder}`}}),y.jsxs("div",{className:"relative h-full rounded-3xl p-6 lg:p-8",style:{backgroundImage:r.cardInner,color:r.textSecondary},children:[y.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70"}),y.jsx("div",{className:"relative z-10",children:e})]})]})}function Rx({src:e,alt:t,className:n="",overlayClass:r="",imageClassName:i="",radiusClass:o="rounded-[32px]",bordered:s=!0,...a}){const[l,u]=x.useState(!1),h=vx(),{tokens:d}=Ve();return x.useEffect(()=>{l&&h.start("visible")},[h,l]),y.jsxs(H.div,{className:`group relative overflow-hidden ${o} ${s?"border":""} ${n}`,style:{borderColor:s?d.cardBorder:void 0,background:d.cardBackground},initial:"hidden",animate:h,variants:It.imageReveal,children:[y.jsx(H.img,{...a,src:e,alt:t,loading:"lazy",decoding:"async",className:`h-full w-full object-cover object-center ${i}`,onLoad:()=>u(!0),transition:ft.default}),y.jsx("div",{className:`pointer-events-none absolute inset-0 blur-3xl ${r}`,style:{background:`linear-gradient(140deg, ${d.accentGlow}, transparent)`,opacity:.2,mixBlendMode:"screen"}}),y.jsx(H.div,{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-60",style:{background:"linear-gradient(180deg, rgba(255,255,255,0.35), transparent)"}})]})}function Pg({lines:e=[],as:t="p",className:n="",style:r={}}){const i=x.useRef(null),o=Sx(i,{once:!0,margin:"-20% 0px"}),s=e.map(a=>a.trim()).filter(Boolean);return y.jsx("div",{ref:i,className:"space-y-3 overflow-hidden",children:s.map((a,l)=>y.jsx(H.div,{variants:Ix,custom:l,initial:"hidden",animate:o?"visible":"hidden",className:"overflow-hidden",children:y.jsx(t,{className:n,style:r,children:a})},a+l))})}const Lx=`Prologue\r
\r
The bus jolted violently as it hit another bump in the road, sending a shudder through its metal frame. Kaito barely stirred, his head resting against the rattling window, a pair of earbuds dangling loosely from one ear. The faint hum of static leaked from them, long since disconnected from any signal. He breathed slow and steady, the perfect image of someone with not a single care in the world.\r
\r
In contrast, Aki sat perfectly upright across from him, her hands folded neatly in her lap, back straight, gaze fixed ahead. She had barely blinked for the last twenty minutes. If anyone noticed, no one said a word.\r
\r
"Third bump in five minutes," Ren muttered from behind them, tapping something into his phone.\r
\r
"The road's old," Aki said quietly. Her voice was steady, but something about it made Ren glance up from his screen. "They don't fix it anymore."\r
\r
He gave a noncommittal grunt, tucking his phone back into his jacket. No signal anyway. There hadn't been for the last hour. He hadn't planned on coming here--none of them had--but the university said it was an honor to be selected for the exchange program. A unique opportunity. Two weeks in a quiet village, staying in a traditional dorm house, working on their group project. Exams, too, supposedly. Ren had barely listened during orientation.\r
\r
\r
Another jolt. The bus groaned around them. The driver didn't seem bothered.\r
\r
Kaito stirred finally, one eye blinking open, just in time to catch the first glimpse of the village as the bus rounded a corner.\r
\r
It came into view slowly. Wooden houses pressed close together. Roofs tiled in deep browns and blacks. Smoke rising thin and white from chimneys, though no one could see who tended the fires. The road narrowed sharply as they descended toward it, the trees closing in behind them, as though cutting off their path of return.\r
\r
"This is it?" Ren said, frowning. "Doesn't look like they even have power lines."\r
\r
Aki's hands tightened in her lap. "They do," she said softly. "You just can't see them."\r
\r
Kaito stretched, standing lazily as the bus hissed to a stop. "Well," he said, slinging his duffel bag over one shoulder, "no turning back now."\r
\r
The bus doors clattered open. Cold air swept in. It carried a strange smell--not unpleasant, but old. Earthy. The kind of scent you might find clinging to a room that had been shut away for years.\r
\r
Aki was the first to step off. Her shoes crunched on gravel, slow and deliberate. She didn't look back at them. Ren followed, muttering under his breath, tugging his scarf tighter around his neck.\r
\r
Kaito stepped down last. He stood at the base of the steps for a long moment, staring at the village sprawled out in front of them.\r
\r
And the people waiting at the edge of the road.\r
\r
They didn't speak. Didn't smile. They stood in a line, unmoving, watching. Their clothes were simple, plain--robes, or maybe uniforms--but their eyes gleamed too brightly in the overcast light.\r
\r
"Welcome home," Aki whispered under her breath. It was hard to tell who she was speaking to.\r
\r
\r
\r
The village head was already waiting when they stepped off the bus.\r
\r
He stood alone at the end of the narrow dirt path, hands folded neatly in front of him. He smiled as they approached, though the expression didn't quite reach his eyes. They were dark, almost black, and they didn't blink nearly enough.\r
\r
"Welcome," he said, his voice smooth but low, like it was dampened by heavy cloth. "We are honored to have young minds visit us. It has been... some time since we've had guests of your nature."\r
\r
The group of ten students gathered loosely around him. Ren stood just behind Kaito's shoulder, eyes flicking between the man and the village beyond.\r
\r
Senior Student, Nakajima-senpai, stepped forward with the practiced ease of someone taking control. "Thank you for having us, Village Head-sama," he said, bowing respectfully. "We'll do our best not to impose."\r
\r
The village head tilted his head at an angle too sharp to be comfortable. "No imposition. You belong here now."\r
\r
There was a silence. Not quite awkward, but not quite right either.\r
\r
Kaito's gaze wandered, drifting over the rows of villagers standing further back. None of them moved. Some didn't even seem to breathe.\r
\r
Aki's hand brushed his as she stepped closer to him. He glanced at her, but she didn't meet his eyes.\r
\r
"You've all had a long journey," the village head continued. "Let me show you to your lodging."\r
\r
\r
\r
The house they were led to sat on the edge of the village, where the dirt road gave way to flattened grass and old stone. It was large--far too big for a single family--but time had clearly taken its toll. The wood was worn smooth in some places and splintered in others. The air smelled faintly of dust and old incense.\r
\r
Inside, the space was... cramped.\r
\r
"It's like one big room," Ren muttered, dragging his bag behind him as they stepped inside.\r
\r
The room stretched long and narrow, ceiling beams exposed, paper windows stained yellow with age. Thin, heavy curtains divided the space into smaller sections, each barely large enough for a futon and a bag. Some curtains didn't reach all the way to the floor.\r
\r
"No doors," Kaito noted quietly. He nudged one of the curtains with his knuckles. The fabric was thick, almost too heavy for its own good. It barely shifted at his touch.\r
\r
Aki walked past him, setting her things down in a corner section. "They didn't have much time to set up for us," she said, not quite looking at anyone. "We were a late addition this year."\r
\r
Ren whistled low. "Didn't think we'd be camping indoors." He threw his bag down near Kaito's chosen space. "At least no bugs."\r
\r
"Let's not test that," Kaito murmured.\r
\r
Nakajima-senpai cleared his throat. "It's temporary. We'll be here two weeks. Make it work."\r
\r
\r
\r
Later, after they had settled in as best they could, Nakajima called them all to the common area at the front of the house. The other students--most of them third-years and second-years--gathered in a loose circle, the flickering light of a single hanging bulb casting long shadows on the walls.\r
\r
Nakajima stood at the front, posture stiff. "Listen up. We're here to complete a joint project with the village council. It's supposed to be a cultural exchange, so we'll be documenting folklore, mapping local areas, and doing interviews."\r
\r
Ren raised his hand lazily. "What about the exams?"\r
\r
"Minimal. Mostly theory," Nakajima replied. "But they want us to immerse ourselves in village life as much as possible. That's priority."\r
\r
Aki was quiet, but her hands clenched tighter around the notebook she'd brought. Kaito noticed, but said nothing.\r
\r
Nakajima continued. "They've scheduled activities for us. Some of us will visit farms, others will shadow craftsmen. We'll rotate."\r
\r
"What about the shrine?" one student asked. "I thought we were supposed to--"\r
\r
"You'll be told when," Nakajima said, cutting them off with an edge to his voice. "For now, we follow the council's schedule."\r
\r
Kaito leaned back against one of the old beams, arms crossed. "We're tourists, basically."\r
\r
"For now," Aki said softly, not looking at him.\r
\r
The group dispersed soon after. Some lingered, trying to get signal on their phones. Others tested the communal kitchen's old gas stove.\r
\r
By the time the sun dipped below the hills, the house was quiet. Most of the students retreated to their curtained spaces, settling in for the night.\r
\r
Kaito lay back on his futon, arms behind his head, staring at the wooden slats of the ceiling.\r
\r
"Man," Ren said from the other side of the curtain, "this is cozy in a dystopian prison kind of way."\r
\r
"Better than outside," Kaito replied.\r
\r
There was a pause. Then Ren laughed softly. "Yeah... sure."\r
\r
After everyone's gone to sleep in their little curtained spaces, Kaito can't shake how different Aki seems. She's not the same elegant, cheerful girl he knows from campus. She's been quiet, tense... different.\r
\r
-------------------------------x-------------------------------\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
In contrast, Aki sat perfectly upright across from him, her hands folded neatly in her lap, back straight, gaze fixed ahead. She had barely blinked for the last twenty minutes. If anyone noticed, no one said a word.\r
\r
"Third bump in five minutes," Ren muttered from behind them, tapping something into his phone.\r
\r
"The road's old," Aki said quietly. Her voice was steady, but something about it made Ren glance up from his screen. "They don't fix it anymore."\r
\r
He gave a noncommittal grunt, tucking his phone back into his jacket. No signal anyway. There hadn't been for the last hour. He hadn't planned on coming here--none of them had--but the university said it was an honor to be selected for the exchange program. A unique opportunity. Two weeks in a quiet village, staying in a traditional dorm house, working on their group project. Exams, too, supposedly. Ren had barely listened during orientation.\r
\r
\r
Another jolt. The bus groaned around them. The driver didn't seem bothered.\r
\r
Kaito stirred finally, one eye blinking open, just in time to catch the first glimpse of the village as the bus rounded a corner.\r
\r
It came into view slowly. Wooden houses pressed close together. Roofs tiled in deep browns and blacks. Smoke rising thin and white from chimneys, though no one could see who tended the fires. The road narrowed sharply as they descended toward it, the trees closing in behind them, as though cutting off their path of return.\r
\r
"This is it?" Ren said, frowning. "Doesn't look like they even have power lines."\r
\r
Aki's hands tightened in her lap. "They do," she said softly. "You just can't see them."\r
\r
Kaito stretched, standing lazily as the bus hissed to a stop. "Well," he said, slinging his duffel bag over one shoulder, "no turning back now."\r
\r
The bus doors clattered open. Cold air swept in. It carried a strange smell--not unpleasant, but old. Earthy. The kind of scent you might find clinging to a room that had been shut away for years.\r
\r
Aki was the first to step off. Her shoes crunched on gravel, slow and deliberate. She didn't look back at them. Ren followed, muttering under his breath, tugging his scarf tighter around his neck.\r
\r
Kaito stepped down last. He stood at the base of the steps for a long moment, staring at the village sprawled out in front of them.\r
\r
And the people waiting at the edge of the road.\r
\r
They didn't speak. Didn't smile. They stood in a line, unmoving, watching. Their clothes were simple, plain--robes, or maybe uniforms--but their eyes gleamed too brightly in the overcast light.\r
\r
"Welcome home," Aki whispered under her breath. It was hard to tell who she was speaking to.\r
\r
\r
\r
The village head was already waiting when they stepped off the bus.\r
\r
He stood alone at the end of the narrow dirt path, hands folded neatly in front of him. He smiled as they approached, though the expression didn't quite reach his eyes. They were dark, almost black, and they didn't blink nearly enough.\r
\r
"Welcome," he said, his voice smooth but low, like it was dampened by heavy cloth. "We are honored to have young minds visit us. It has been... some time since we've had guests of your nature."\r
\r
The group of ten students gathered loosely around him. Ren stood just behind Kaito's shoulder, eyes flicking between the man and the village beyond.\r
\r
Senior Student, Nakajima-senpai, stepped forward with the practiced ease of someone taking control. "Thank you for having us, Village Head-sama," he said, bowing respectfully. "We'll do our best not to impose."\r
\r
The village head tilted his head at an angle too sharp to be comfortable. "No imposition. You belong here now."\r
\r
There was a silence. Not quite awkward, but not quite right either.\r
\r
Kaito's gaze wandered, drifting over the rows of villagers standing further back. None of them moved. Some didn't even seem to breathe.\r
\r
Aki's hand brushed his as she stepped closer to him. He glanced at her, but she didn't meet his eyes.\r
\r
"You've all had a long journey," the village head continued. "Let me show you to your lodging."\r
\r
\r
\r
The house they were led to sat on the edge of the village, where the dirt road gave way to flattened grass and old stone. It was large--far too big for a single family--but time had clearly taken its toll. The wood was worn smooth in some places and splintered in others. The air smelled faintly of dust and old incense.\r
\r
Inside, the space was... cramped.\r
\r
"It's like one big room," Ren muttered, dragging his bag behind him as they stepped inside.\r
\r
The room stretched long and narrow, ceiling beams exposed, paper windows stained yellow with age. Thin, heavy curtains divided the space into smaller sections, each barely large enough for a futon and a bag. Some curtains didn't reach all the way to the floor.\r
\r
"No doors," Kaito noted quietly. He nudged one of the curtains with his knuckles. The fabric was thick, almost too heavy for its own good. It barely shifted at his touch.\r
\r
Aki walked past him, setting her things down in a corner section. "They didn't have much time to set up for us," she said, not quite looking at anyone. "We were a late addition this year."\r
\r
Ren whistled low. "Didn't think we'd be camping indoors." He threw his bag down near Kaito's chosen space. "At least no bugs."\r
\r
"Let's not test that," Kaito murmured.\r
\r
Nakajima-senpai cleared his throat. "It's temporary. We'll be here two weeks. Make it work."\r
\r
\r
\r
Later, after they had settled in as best they could, Nakajima called them all to the common area at the front of the house. The other students--most of them third-years and second-years--gathered in a loose circle, the flickering light of a single hanging bulb casting long shadows on the walls.\r
\r
Nakajima stood at the front, posture stiff. "Listen up. We're here to complete a joint project with the village council. It's supposed to be a cultural exchange, so we'll be documenting folklore, mapping local areas, and doing interviews."\r
\r
Ren raised his hand lazily. "What about the exams?"\r
\r
"Minimal. Mostly theory," Nakajima replied. "But they want us to immerse ourselves in village life as much as possible. That's priority."\r
\r
Aki was quiet, but her hands clenched tighter around the notebook she'd brought. Kaito noticed, but said nothing.\r
\r
Nakajima continued. "They've scheduled activities for us. Some of us will visit farms, others will shadow craftsmen. We'll rotate."\r
\r
"What about the shrine?" one student asked. "I thought we were supposed to--"\r
\r
"You'll be told when," Nakajima said, cutting them off with an edge to his voice. "For now, we follow the council's schedule."\r
\r
Kaito leaned back against one of the old beams, arms crossed. "We're tourists, basically."\r
\r
"For now," Aki said softly, not looking at him.\r
\r
The group dispersed soon after. Some lingered, trying to get signal on their phones. Others tested the communal kitchen's old gas stove.\r
\r
By the time the sun dipped below the hills, the house was quiet. Most of the students retreated to their curtained spaces, settling in for the night.\r
\r
Kaito lay back on his futon, arms behind his head, staring at the wooden slats of the ceiling.\r
\r
"Man," Ren said from the other side of the curtain, "this is cozy in a dystopian prison kind of way."\r
\r
"Better than outside," Kaito replied.\r
\r
There was a pause. Then Ren laughed softly. "Yeah... sure."\r
\r
After everyone's gone to sleep in their little curtained spaces, Kaito can't shake how different Aki seems. She's not the same elegant, cheerful girl he knows from campus. She's been quiet, tense... different.\r
\r
-------------------------------x-------------------------------\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
Kaito stood just outside the old dorm house, the night air cool against his skin. The trees rustled gently in the distance. For once, there wasn't a single sound from Ren. The guy had knocked out as soon as his head hit the futon.\r
\r
He found Aki sitting alone on the back step, her legs tucked up against her chest. Moonlight caught the loose strands of her hair, and for a moment, she almost looked like she belonged here. Still. Quiet.\r
\r
Too quiet.\r
\r
"You never stop moving," Kaito said as he approached. "It's weird seeing you sit still."\r
\r
Aki smiled faintly but didn't turn. "Tired, I guess."\r
\r
Kaito sat down beside her, elbows resting on his knees. For a while, neither of them said anything. The silence was comfortable. Or it would've been, if Aki hadn't kept glancing at the tree line every couple of seconds.\r
\r
"You're acting different," he said, finally breaking it. "Since we got here."\r
\r
She let out a soft breath. "You noticed."\r
\r
"I notice a lot of things," he replied. "I just don't usually say them out loud."\r
\r
That made her laugh quietly, a sound closer to the Aki he knew.\r
\r
But then she sobered again. "I'm from here" she began softly. "I used to be here when I was very little, until I was 10 if I remember correctly. One day, my parents left this place with me in a panic, without any notice or telling anyone."\r
\r
Kaito didn't interrupt. He just waited.\r
\r
"They... never told me why," Aki continued. "But they were always so careful. Our house was covered in charms--on the doorways, the windows. They even made me wear one around my neck." She gave a weak chuckle. "Said it was a good luck charm. I didn't believe them."\r
\r
Her fingers drifted up to the thin silver chain around her neck, mostly hidden under her collar.\r
\r
"But they used to tell me stories," she said. "About something bad here. An... evil entity. They never said what it was. Just that it was old, and it didn't forget."\r
\r
Kaito tilted his head slightly. "And you think it's still here?"\r
\r
Aki shrugged. "I don't know. But they were scared. I've never seen my father scared of anything, but when he talked about this place..." She trailed off, her fingers tightening on the charm. "I guess I brought their fear with me."\r
\r
Kaito watched her quietly for a moment. Then he exhaled and leaned back on his hands. "I think you're overthinking it."\r
\r
She looked at him.\r
\r
"There's nothing wrong here," he said simply. "It's just an old village. Maybe too quiet. But if push comes to shove," he paused, turning his gaze toward her, "I'll protect you."\r
\r
Aki blinked. Then smiled, genuinely this time. "You're all talk."\r
\r
"I'm lazy," he admitted, a faint smirk tugging at his lips. "But I don't break promises."\r
\r
For a few moments, they just sat there, listening to the night sounds. Aki seemed to breathe easier now.\r
\r
"Thanks, Kaito," she said. Then nudged his shoulder gently. "Don't make me regret trusting you."\r
\r
He gave a noncommittal hum, but he didn't move away.\r
\r
When they stood to head back inside, Aki's steps were lighter. The girl he knew was back.\r
\r
-------------------------------x-------------------------------\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
The morning sun spilled through the paper windows, casting pale golden light across the worn wooden floors. Birds chattered softly in the distance. The sound of footsteps--bare feet padding across the floor--rustled behind the curtains as students stirred from their futons, stretching groggily in their cramped spaces.\r
\r
Kaito was already awake. He lay on his back, staring at the ceiling beams above him, hands behind his head, one leg crossed over the other. He listened to the muffled voices of his classmates as they shook off sleep, some already complaining about the cold or how hard the futons were.\r
\r
Ren's voice cut through the chatter.\r
"I'm calling it now. I'm the first one to break a bone tripping over someone's shoes."\r
\r
"You sleep next to Kaito," someone mumbled in response.\r
"Exactly," Ren shot back. "This guy's got long legs. It's like bunking next to a deer."\r
\r
Kaito sighed but made no effort to move. A minute later, Ren's head popped through the gap in his curtain.\r
"You alive, or...?"\r
Kaito finally sat up, ruffling his already messy hair. "Barely. Two days in and I am already regretting not packing instant noodles"\r
\r
Ren grinned and ducked back out. "Good enough. Move it. They're serving breakfast soon, and I'm not waiting for your instant noodle dream to end."\r
\r
Kaito smirked faintly and stood, rolling his shoulders as he did. He pulled aside his curtain and stepped into the narrow hallway that ran along the curtained "rooms." Some of the other students nodded in greeting; a few still looked half-asleep.\r
\r
Across the room, Aki was tying her hair back, the loose strands catching the morning light. She noticed him watching and smiled--bright, warm, effortless.\r
"Morning," she said cheerfully.\r
"Morning," he replied, keeping it simple as always.\r
\r
He wasn't sure if anyone else noticed how different she was from the first night. The tension was gone from her shoulders. She laughed when Ren said something dumb, nudged him playfully when he complained about the cold, and even teased Kaito for his slow pace as they headed out for breakfast.\r
\r
It was like nothing had happened.\r
\r
\r
\r
The village didn't have a school or café, but they had a community hall where meals were sometimes shared. The students walked together down the narrow dirt path, past rows of old wooden houses, the air crisp and fresh with the scent of damp earth.\r
\r
A few villagers greeted them as they passed--small nods, polite bows. It was a far cry from the unsettling stares they'd received when they arrived. Maybe the village wasn't so strange after all.\r
\r
Inside the hall, a long, low table had been set up with simple food: rice, miso soup, pickled vegetables, grilled fish. Everything was homemade and smelled surprisingly good.\r
\r
Ren sat down immediately, rubbing his hands together.\r
"If this is what we get for breakfast, maybe I'll survive this trip after all."\r
\r
Aki knelt neatly at his side, already thanking the elder who had set out the food. Kaito followed, settling across from them without much fanfare.\r
\r
Nakajima-senpai made sure everyone was accounted for before sitting himself.\r
"Eat up," he said, tone practical but not unkind. "It's a long day."\r
\r
They ate quietly at first, the only sounds the clink of chopsticks and murmured thanks. But soon, conversations picked up. Ren cracked jokes about who was going to fall asleep first during the cultural lecture later. One of the other girls, Mei, teased him about getting stuck with farming duty. Even Nakajima-senpai cracked a rare smile.\r
\r
Kaito watched Aki out of the corner of his eye as she chatted with Mei. She was graceful, polite, funny. Just like back at the academy.\r
\r
But every now and then, her gaze drifted out the window. Just for a second.\r
\r
\r
\r
After breakfast, they were split into groups. Kaito, Aki, and Ren were assigned to work at one of the village's small farms, shadowing an old couple named Mr. and Mrs. Hayashi. Their house was nestled near the forest edge, surrounded by vegetable plots and a small rice field.\r
\r
"You ever farm before?" Ren asked, nudging Kaito as they walked.\r
\r
Kaito shrugged. "I've touched grass."\r
\r
"That's not encouraging," Aki said with a laugh.\r
\r
Mrs. Hayashi greeted them warmly, a wrinkled but spry woman who handed each of them a pair of gloves and wide straw hats. Mr. Hayashi, mostly silent, showed them how to weed the rows and check the plants. It was repetitive work but easy to pick up.\r
\r
Ren struggled with the tasks at first, pulling up vegetables instead of weeds and complaining loudly every time his hands got muddy.\r
"City boy," Aki teased.\r
"Slander," Ren retorted. "I'm adaptable."\r
\r
Kaito worked steadily, not fast but efficient. He didn't say much, but Mrs. Hayashi gave him an approving nod.\r
\r
The hours passed quietly. The sun rose higher, warming the earth. They took breaks under the shade of a gnarled old tree, sharing bottles of barley tea. Aki stretched her arms over her head, smiling at the breeze. Ren lay flat on his back in the grass, declaring he was dying. Kaito sat cross-legged, watching the clouds move.\r
\r
"Peaceful, isn't it?" Aki said.\r
\r
Kaito nodded.\r
"Yeah," he said. "Doesn't feel like anything's wrong."\r
\r
She glanced at him briefly.\r
"No," she agreed. "Not at all."\r
\r
By the time they returned to the dorm house, the sky was painted in soft pink and orange hues. The students filed in, tired but content. Some immediately hit the communal bath. Others gathered around the low table to play cards or chat.\r
\r
Ren managed to swipe extra snacks from the kitchen, tossing a rice cracker at Kaito's head.\r
"Snack time," he declared.\r
Kaito caught it without looking, taking a lazy bite.\r
"Thanks," he said.\r
\r
Aki sat beside them, leaning back on her hands, watching the others laugh and joke. Her eyes crinkled as she smiled, laughing at one of Ren's bad impressions of Nakajima-senpai.\r
\r
Later, they rolled out their futons, the curtains drawn loosely between them. The house creaked softly as it settled for the night.\r
\r
Kaito lay on his back again, staring at the ceiling. He heard Ren's soft snoring on the other side. Aki's quiet breathing a little further off.\r
\r
Everything was calm.\r
\r
-------------------------------x-------------------------------\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
The sunlight broke lazily through the thin clouds that morning, casting a pale shimmer over the village rooftops. The air smelled of damp earth, rice straw, and faint wood smoke. Another day in a place that had begun to feel less foreign, less strange. Almost familiar.\r
\r
Kaito shuffled out of his curtained space, rubbing the sleep from his eyes. His hair was messier than usual, something he made no effort to fix. The thin floorboards were cold under his feet, but he ignored them. He could hear the others moving around, voices soft, laughter carrying lightly through the space.\r
\r
Ren was already up, of course. Kaito caught him standing by the entrance, stuffing something into his jacket pocket. Snacks, probably.\r
\r
"You're up early," Kaito said, his voice still rough from sleep.\r
\r
Ren glanced at him over his shoulder, grinning. "Plotting."\r
\r
Kaito raised an eyebrow. "Plotting?"\r
\r
"Yeah. Your downfall."\r
\r
Kaito didn't flinch. "You'll need a better plan than that."\r
\r
Ren chuckled, pushing open the sliding door and stepping out onto the wooden porch. "Come on. Breakfast first. Scheming later."\r
\r
\r
\r
They gathered in front of Nakajima-senpai after eating, standing in the weak sunlight as he explained the day's plans. The village had arranged various tasks again--some students would help repair tools in the workshop, others would assist in the rice fields. Nakajima assigned them with brisk efficiency.\r
\r
"Kaito," he said, looking up from his notebook. "You're at the shrine today. You'll help with the offering preparation."\r
\r
Kaito gave a small nod. Simple enough.\r
\r
"Aki's on the same team," Nakajima added.\r
\r
There was a flicker of something in his voice. Not disapproval. Maybe amusement? Hard to say.\r
\r
Kaito didn't think much of it. Not until Ren elbowed him in the side, nearly making him drop the wooden tray he was carrying.\r
\r
"Oi," Ren said, lowering his voice as they made their way out of the community hall. "You realize this is, like, your golden opportunity, right?"\r
\r
Kaito sighed. "For what?"\r
\r
Ren gave him a flat look. "You really are dense."\r
\r
Kaito shrugged. "You say that like it's new information."\r
\r
Ren groaned dramatically, throwing his head back as they walked. "For someone who's got a brain, you're hopeless."\r
\r
They passed through one of the narrow side streets, their steps slow, unhurried. Kaito glanced at Ren sidelong. His friend wasn't smiling now, not really. He looked... serious.\r
\r
"You should say something," Ren said. "To Aki."\r
\r
Kaito said nothing for a moment. He kept his hands in his pockets, kicking at a stray stone on the road.\r
\r
"She likes you," Ren added, unnecessarily. "Everyone knows it. She doesn't hide it. But she's not gonna wait forever, dude."\r
\r
Kaito gave a slow exhale, watching the mist of his breath fade in the morning air. "I know."\r
\r
He did know. He'd always known. He just didn't know what to do with that knowledge. Until now.\r
\r
\r
\r
The path to the shrine was steep, stone steps winding up through a shaded grove of trees. The air grew cooler the higher they climbed, birds quieting as they neared the top. Kaito walked alongside Aki, the basket of offerings balanced neatly in her arms.\r
\r
She was humming to herself--some old song, maybe something traditional--and there was a peacefulness in her expression that made him pause for a moment, walking a half-step behind just to watch her.\r
\r
When she glanced back at him, she smiled. "You're quiet today."\r
\r
"I'm always quiet," he replied, shifting the bamboo rake over his shoulder.\r
\r
She tilted her head. "Quieter than usual."\r
\r
He didn't have an answer for that. Instead, he nodded toward the shrine gate ahead. "We're here."\r
\r
The shrine was small, old but well cared for. Moss crept along the stone lanterns lining the path, and the wood of the torii gate was darkened with age. It didn't feel eerie. Just old. Familiar, even.\r
\r
They worked side by side, sweeping fallen leaves, setting small dishes of food and sake on the offering table, and lighting sticks of incense. The tasks were simple, repetitive. Aki moved with practiced grace, her sleeves tied back, her hair pinned loosely with a comb someone had loaned her.\r
\r
"You've done this before," Kaito said after a while.\r
\r
She nodded. "When I was little. My parents used to bring me to shrines all the time." She paused, placing a small handful of salt at the base of a stone fox statue.\r
\r
Kaito leaned on the rake, watching her carefully. She caught his gaze and smiled again--soft, bright, the kind of smile that had always made it hard to tell if she was teasing him or not.\r
\r
For a while, they didn't say much. Just worked in quiet companionship.\r
\r
\r
\r
They sat on the low stone wall at the edge of the shrine grounds, sharing a small lunch the villagers had packed for them--rice balls, pickled plum, and sweet egg omelet. Aki poured tea from a thermos, handing him a steaming cup.\r
\r
"It's a nice day," she said, glancing up at the pale blue sky through the canopy.\r
\r
Kaito sipped his tea, nodding. "Feels... normal."\r
\r
She chuckled softly. "I was starting to forget what normal felt like."\r
\r
They sat quietly for a while, eating, drinking, letting the breeze wash over them.\r
\r
"Hey, Kaito," Aki said after a long pause.\r
\r
"Hm?"\r
\r
"Thanks."\r
\r
He blinked at her. "For what?"\r
\r
"For... reminding me I don't have to be scared here," she said. "I was really worked up the first night. And now I feel like an idiot."\r
\r
"You're not an idiot," he said plainly. "You were just worried."\r
\r
She smiled at him again--genuine, warm--and it did something strange to his chest, something tight and unfamiliar.\r
\r
"I guess I'm lucky you're here," she added lightly.\r
\r
He didn't say anything to that. Just finished his tea and set the cup down.\r
\r
But in his mind, something clicked into place. Maybe Ren was right. Maybe it was time to stop being dense.\r
\r
\r
\r
After their shift at the shrine ended, they had the rest of the afternoon free. Most of the others had gone back to the dorm or wandered off in pairs. Kaito found himself walking alongside Aki without thinking about it, their steps falling into easy rhythm as they crossed through the village square.\r
\r
"Want to look around?" he asked.\r
\r
She nodded. "Sure."\r
\r
They visited the old weaving workshop first, watching one of the elder women work the loom with patient, practiced hands. Aki admired the dyed threads, fingers brushing over the intricate patterns.\r
\r
"You could wear something like that," Kaito said absently.\r
\r
She glanced at him, amused. "I thought you didn't pay attention to clothes."\r
\r
"I don't," he admitted. "But it'd look good on you."\r
\r
She blinked. Then smiled--wider, softer, something deeper than before. "Thanks."\r
\r
Afterward, they stopped by a small garden, sitting on the low wooden fence and sharing a rice cracker Ren had snuck into Kaito's pocket earlier. They fed crumbs to the koi in the pond, watching the fish dart beneath the surface in flashes of orange and white.\r
\r
It was quiet. Peaceful. Not like school. Not like anything.\r
\r
\r
\r
As they wandered back toward the dormitory, Aki slowed her pace.\r
\r
"There's one more place I want to visit," she said, tugging gently at Kaito's sleeve.\r
\r
He glanced at her hand briefly before nodding. "Where?"\r
\r
"You'll see."\r
\r
They took a narrow side path Kaito hadn't noticed before. It wound away from the main village road, past low stone walls and thickets of overgrown flowers that swayed in the breeze. The air was cooler here, shaded by tall cedars. They walked in silence, but it wasn't awkward. Aki's steps were light, almost playful.\r
\r
At the end of the path stood a small clearing, ringed with mossy stones. In the center was a lone cherry blossom tree, its petals just beginning to bloom even though it was early for the season.\r
\r
"This is my favorite spot," Aki said quietly.\r
\r
Kaito stepped closer, tilting his head back to take in the branches spreading above them. "It's nice."\r
\r
She sat down on one of the stones, patting the spot next to her. He followed without protest, sitting close enough their shoulders brushed. She didn't move away.\r
\r
"My parents used to bring me here," she said after a moment. "Before they left the village. They said it was a safe place."\r
\r
Kaito studied her profile, the way the fading light softened her features. She was always calm on the surface--smiling, graceful--but he could sense the weight beneath it. The fear she'd been carrying since they arrived.\r
\r
But now, she looked... free.\r
\r
"You really believe in that stuff?" he asked gently.\r
\r
She gave a faint smile. "I did. Maybe I still do. But today... I don't feel afraid."\r
\r
Kaito let his hand rest on the stone beside hers. Not touching. Close enough.\r
"Good."\r
\r
They sat there as the sky deepened into twilight. The petals above them stirred in the breeze, falling like slow-motion snowflakes. Aki caught one on her palm, studying it as if it held some kind of secret.\r
\r
"You're different, you know," she said suddenly.\r
\r
Kaito blinked. "What do you mean?"\r
\r
"You don't act like anyone else," she said, turning to face him. Her eyes reflected the soft glow of the setting sun. "Most people... they want to run away from things they're afraid of. But you're always so calm. Like nothing can shake you."\r
\r
He thought about that for a second. "Maybe I'm just lazy."\r
\r
She laughed softly. "Maybe."\r
\r
The sound of her laughter settled something inside him.\r
\r
\r
\r
By the time they returned to the dorm, most of the others were lounging in the common area, playing cards or chatting. Nakajima-senpai was sitting at the table, writing in a thick notebook.\r
\r
"Where were you two?" Ren asked, raising an eyebrow as he chewed on a rice cracker.\r
\r
"Exploring," Aki said smoothly before Kaito could answer.\r
\r
Ren gave them a long look, then smirked. "Uh-huh."\r
\r
Kaito ignored him. "Dinner?"\r
\r
Ren stretched. "Your turn."\r
\r
They moved into the kitchen, where Aki tied on an apron that was definitely too big for her. Kaito grabbed one for himself but made no effort to tie it properly.\r
\r
"You're hopeless," Aki said, laughing as she reached out and retied the strings behind his neck. Her fingers brushed lightly against his skin, sending a small jolt through him that he tried not to show.\r
\r
"I cook fine," Kaito muttered.\r
\r
"Sure you do," she teased. "You're on rice duty."\r
\r
As they worked, Aki hummed a tune under her breath. She chopped vegetables with practiced ease, smiling to herself. Kaito caught himself watching her more than once, and once or twice she caught him watching, too.\r
\r
Neither said anything about it.\r
\r
\r
\r
Dinner was simple--rice, miso soup, grilled fish--but it felt special in its own way. Aki's cooking was praised, and Kaito's rice wasn't terrible (Ren complained anyway). Everyone seemed relaxed. Even Nakajima-senpai lingered longer at the table, listening quietly to the younger students banter.\r
\r
Afterward, Aki and Kaito washed dishes together. Their hands bumped more than once in the soapy water, and each time they looked at each other, grinning faintly.\r
\r
\r
\r
Later that night, Kaito found himself on the porch again, leaning against one of the old wooden pillars. The stars were clear, the village quiet except for the occasional soft chirp of crickets.\r
\r
Aki joined him, sitting beside him without a word.\r
\r
They sat like that for a while. Comfortable. Close.\r
\r
"I had fun today," she said softly.\r
\r
He glanced at her. She was looking up at the sky, but there was a small smile on her lips.\r
\r
"Yeah," he said. "Me too."\r
\r
Her hand was close to his again. This time, he let his pinky finger brush against hers. She didn't pull away.\r
\r
Kaito's lips quirked up slightly. "It was a fun date."\r
\r
Aki blinked, surprised for a second. Then her face lit up, a soft blush coloring her cheeks. "You're not just saying that?"\r
\r
He shrugged. "I don't say things I don't mean."\r
\r
She smiled, brighter than he'd ever seen.\r
"Well," she said, nudging his shoulder, "you're late. But I'll take it."\r
\r
He chuckled quietly. "Better late than never."\r
\r
They sat like that for a while longer, watching the stars. Their fingers intertwined, easy and natural.\r
\r
-------------------------------x-------------------------------\r
\r
\r
\r
It was late.\r
\r
Most of the village had already gone quiet by the time Haruka finished tidying up her home. She stood by the window for a long moment, wiping her hands on the cloth she used for dusting, watching faint trails of mist weave through the narrow paths between the houses. The night air clung to the glass in small beads of moisture, distorting the view beyond.\r
\r
Inside, it was warm. Familiar. The faint smell of cedar from the old beams mixed with the scent of tea that still lingered from dinner. The house creaked softly in the breeze, but that was nothing new. She had lived here her entire life, in the same old house her grandfather built. Every sound it made was something she'd known since childhood.\r
\r
And yet, she found herself pausing at the window longer than usual, her reflection faint in the glass. She could see the street. Empty. Silent. Not a soul out this late. Only the faint orange glow from the lanterns left burning in front of the community hall reached this far down the hill.\r
\r
The village slept.\r
\r
She let the cloth fall back over the table and moved to gather her papers from where she had been working. Her notes were unfinished. She glanced down at her own handwriting--crisp, neat characters trailing off on the page, leaving a space where her mind had wandered.\r
\r
That was fine. She could finish them tomorrow.\r
\r
As Haruka slid the papers into a drawer, she heard it.\r
\r
A step.\r
\r
Not outside. Inside.\r
\r
She turned slowly, standing still in the center of the room. She listened.\r
\r
Nothing.\r
\r
She took a slow breath through her nose, held it, and exhaled. She was imagining things. She was tired. Tomorrow was going to be another long day and if she didn't sleep soon, she'd regret it.\r
\r
She moved quietly, out of habit more than fear, sliding the paper door to the kitchen closed behind her. The old wood groaned faintly under her steps as she crossed the main room, making for the small sleeping space beyond.\r
\r
Another creak.\r
\r
This one was not from her.\r
\r
Haruka's feet stopped moving. The sound had come from further back, near the storeroom. Her brows drew together faintly, and she turned, more annoyed than frightened. The storeroom hadn't been opened in months. What would--\r
\r
The lights flickered.\r
\r
Once.\r
\r
Twice.\r
\r
Then they steadied again.\r
\r
She stood there for a long time, watching the overhead bulb. She listened harder. She thought she heard something--a slow scraping sound--but it could have been anything. The old beams shifting, the wind, even one of the neighbors outside.\r
\r
Still, her fingers lingered on the light switch as she passed, flipping it off and on once. The light held steady.\r
\r
Nothing wrong.\r
\r
Haruka shook her head faintly at herself. She was being foolish. She crossed the room and slid open the futon closet, pulling out the blankets and laying them out carefully on the tatami floor. She moved with practiced ease, smoothing out the edges, plumping the pillow. Familiar motions. Comforting.\r
\r
The creak came again.\r
\r
This time, it was just outside the paper door behind her.\r
\r
Haruka froze, fingers still on the pillow.\r
Then the light went out.\r
\r
The house plunged into darkness.\r
\r
Haruka stood motionless for a second, eyes struggling to adjust. She reached for the drawer by the futon and found the matches easily, her fingers knowing the weight of the small box before she even pulled it open. She struck one, the flare of sulfur momentarily blinding, and then lighting the small wick of the candle she kept in the same drawer.\r
\r
The small flame danced, casting long shadows along the walls. The familiar patterns of wood grain and hanging cloth now looked warped and jagged in the flickering light.\r
\r
She waited a moment, listening.\r
Nothing.\r
\r
Steeling herself, she stood and walked toward the kitchen, candle in hand. The wood underfoot seemed louder now, each step creaking in the silence.\r
\r
At the kitchen door, she paused again.\r
She listened.\r
The scraping sound was back.\r
Inside the house.\r
\r
But when she slid the door open, the kitchen was empty. Everything was in its place: the kettle, the wooden bowls stacked neatly by the sink, the cutting board she'd scrubbed clean earlier.\r
She stepped in, the candle's flame trembling as she passed.\r
\r
Something cold passed behind her.\r
\r
She spun.\r
Nothing.\r
\r
But the back door of the house had shifted slightly ajar, no breeze explaining its movement.\r
Haruka walked over to it, pushing it firmly shut and sliding the wooden bolt into place. She kept her hand there for a few seconds, palm flat against the cold wood.\r
The silence pressed in.\r
\r
When she turned back, the room felt smaller.\r
Heavier.\r
The darkness seemed to press against the thin edge of light from her candle.\r
\r
\r
\r
As she returned toward the main room, she heard it.\r
A whisper.\r
Low, just barely audible, but close enough that she felt it behind her ear.\r
She turned, candle lifting in her hand.\r
Nothing.\r
Only the faint smell of smoke and wax.\r
\r
She walked faster now.\r
At the threshold to her sleeping area, she stopped again. The futon was no longer neatly laid out.\r
The blankets were twisted.\r
The pillow shifted to the side.\r
\r
Her throat tightened.\r
She stepped forward, slow, deliberate.\r
\r
The candle flickered as if caught in a sudden breath of air.\r
It dimmed.\r
Then steadied.\r
\r
She knelt and smoothed out the blankets again, hands shaking just slightly now.\r
\r
The whisper came again.\r
This time, from beneath her.\r
Or was it above?\r
\r
Haruka's skin prickled as she stood abruptly, backing away from the futon.\r
\r
The house creaked.\r
Then...\r
A soft patter.\r
Like footsteps across the ceiling.\r
\r
She looked up slowly.\r
The boards overhead were old, worn, but unmoving.\r
\r
The candle's flame bent sideways, as though a breath had passed over it.\r
Her fingers tightened on the holder.\r
Her breath came faster now, shallow, controlled.\r
\r
And then\r
A sound.\r
Breathing.\r
Not hers.\r
\r
Directly behind her.\r
\r
\r
\r
Haruka didn't turn around right away.\r
\r
She stood still. Frozen. Her grip tightened on the candleholder until her knuckles turned white. She felt a faint warmth against the back of her neck--not warm like breath, but more like... the absence of cold. A presence that shouldn't have been there. Her body told her not to move, to stay perfectly still and quiet.\r
\r
But her mind refused to listen.\r
\r
She turned.\r
\r
There was nothing behind her.\r
\r
The room was exactly as it had always been--simple, clean, untouched. And yet, something was different. She could feel it. Like walking into a space where someone had just been. Like the air hadn't had time to cool yet.\r
\r
The flame flickered again, almost rhythmically.\r
Once.\r
Twice.\r
Three times.\r
\r
She turned toward the main doorway leading to the front entrance.\r
Her feet carried her without thought, the old floorboards soft and familiar underfoot. She slid the door open with slow, careful hands, not sure what she expected.\r
But the entryway was empty.\r
\r
No shoes out of place. No door ajar.\r
Nothing.\r
\r
She stepped back inside, sliding the door shut.\r
The sound of it closing seemed louder than it should have been.\r
\r
Haruka took a deep breath and moved back toward the futon. She knelt down slowly, setting the candle beside her. It cast a faint, warm glow over the woven tatami mats. She pressed her palms against her knees, grounding herself. She told herself to breathe.\r
\r
Everything was fine.\r
\r
The house was old. It made noises. That's all it was.\r
That's all it had ever been.\r
\r
The whisper came again.\r
\r
Soft. Close.\r
"...come..."\r
\r
She jerked her head up, heart pounding in her ears.\r
The candle's flame began to twist and stretch unnaturally, as if being pulled by something unseen.\r
\r
And then it went out.\r
\r
\r
\r
\r
Haruka was left in perfect darkness.\r
\r
She scrambled to grab the matches again, hands fumbling over the smooth floorboards. She struck one. It flared briefly--then died.\r
Another.\r
Nothing.\r
\r
Her breathing grew faster, her chest tight, the room pressing in on all sides. It was a silence so absolute it felt alive.\r
She forced herself to move.\r
\r
Hands out in front of her, she stood and walked toward where she thought the door was. Her palms pressed flat against paper and wood, but as she slid them across the surface, something changed.\r
The texture.\r
It wasn't wood anymore. It felt... soft. Like skin. Cold and dry.\r
\r
She yanked her hand back in an instant, stumbling away from the wall, breathing shallow, fast, panicked.\r
\r
A faint sound drifted through the dark.\r
\r
Footsteps.\r
\r
Inside the house.\r
Close.\r
Coming toward her.\r
\r
They stopped.\r
\r
Then another sound.\r
A scratching. Slow. Deliberate.\r
\r
Haruka backed up until her heels hit something solid. The low table. She sank to the floor, trying to make herself smaller, quieter. Her pulse pounded in her throat.\r
\r
She heard the footsteps again. Not walking.\r
Circling.\r
\r
There was a faint shift in the air pressure. Something drawing closer.\r
Breathing.\r
And then the faintest sensation--something brushing against her cheek. Cold. Smooth.\r
Fingers?\r
\r
"NO!!!"\r
She swatted at the air instinctively, striking nothing.\r
\r
She stood, bolting toward the kitchen without thinking.\r
Her feet slapped against the wooden planks as she ran, heart hammering in her chest. She reached the kitchen doorway and slid it open in one frantic motion.\r
\r
The candle was on the counter.\r
Unlit.\r
\r
She grabbed it, hands shaking violently now.\r
Another match.\r
She struck it.\r
\r
This time, it caught.\r
The flame trembled, weak but holding.\r
\r
The candle's soft glow returned, faintly illuminating the kitchen. Haruka's breath came in short, shallow gasps as her eyes locked onto the back door.\r
\r
It was wide open.\r
\r
The cold night air seeped through the doorway like a creeping fog, brushing past her skin. For a brief, blinding moment, relief surged through her chest.\r
\r
Escape.\r
\r
She didn't think. She didn't hesitate.\r
\r
She ran.\r
\r
Her bare feet slapped against the wooden planks as she bolted for the door, candle clenched tightly in her trembling hand. The flame jerked violently as she moved, but she didn't care. She just needed to get out.\r
\r
Closer.\r
Closer.\r
\r
And then the door--\r
Slammed.\r
\r
Violently.\r
So hard the floor shook beneath her feet.\r
\r
Haruka skidded to a stop, heart slamming against her ribs.\r
She stood there, staring at the door, her pulse roaring in her ears.\r
\r
The bolt slid back into place.\r
By itself.\r
With a slow, grinding sound.\r
\r
For a few seconds, she couldn't move. Couldn't breathe.\r
\r
The flame on the candle guttered wildly again, as though reacting to her fear.\r
She took a step back.\r
Then another.\r
And then something scraped softly behind her.\r
\r
She spun, candle lifting instinctively.\r
\r
The room was empty.\r
Nothing moved.\r
But the shadows seemed to stretch longer now, pooling like liquid along the floorboards.\r
\r
Haruka's throat was tight, her breath coming sharp and uneven. She turned back toward the door, trying the bolt. It didn't budge. She slammed her palm against the wood once, twice--desperate.\r
\r
"Let me out," she whispered, voice hoarse.\r
\r
The door wouldn't budge.\r
\r
Haruka shoved her weight against it again, both hands flat on the rough wood, but it was no use. The bolt, which had slid so easily before, now felt like it was fused into place. She kicked at the bottom of the door, the sound echoing through the house like a hollow drumbeat.\r
\r
No answer.\r
No movement.\r
Just the dull ache of futility gnawing at her ribs.\r
\r
The candle flame trembled as she backed away, her pulse pounding in time with the flickering light.\r
\r
There were other ways out.\r
There had to be.\r
\r
She turned sharply and made for the window in the kitchen. The latch clicked open under her fingers, but when she pushed, the frame wouldn't move. She pushed harder, using her shoulder, trying to force it.\r
\r
Nothing.\r
It didn't budge.\r
\r
She could feel the cold glass under her palm, slick with condensation. The house was holding its breath.\r
\r
Haruka gritted her teeth, took a step back, and swung the candleholder toward the glass, ready to break it.\r
\r
But her arm froze.\r
\r
Her body refused to move.\r
\r
For one terrible second, she felt something tighten around her wrist--\r
Nothing visible.\r
But it was there.\r
And it was holding her still.\r
\r
Her breath caught in her throat. The pressure vanished as quickly as it came, leaving her arm tingling and weak. She stumbled back from the window, candle clenched tightly in her opposite hand.\r
\r
The flame fluttered dangerously low.\r
\r
She turned toward the hallway, moving quickly now. Her feet whispered over the tatami mats as she hurried through the main room. She reached the front door and grasped the old brass handle.\r
\r
The door felt cold.\r
\r
Colder than anything else in the house.\r
\r
She twisted the handle.\r
It moved.\r
A sliver of hope surged through her chest as she pulled.\r
\r
The door didn't open.\r
\r
She pulled harder.\r
It resisted, groaning like an old tree in the wind.\r
\r
She put her shoulder against it and pushed, but the door refused to yield.\r
Her breath quickened, panic clawing up her spine.\r
\r
Haruka pounded against the wood with her fist.\r
"Help!"\r
Her voice cracked in the silence.\r
"Someone! Help me!"\r
\r
The house didn't answer.\r
But something else did.\r
\r
A faint sound--barely audible--slithered through the air behind her.\r
Breathing.\r
Wet.\r
Close.\r
\r
She turned.\r
Nothing.\r
The candle flame twisted sideways again, pulled by something unseen.\r
\r
And then the voices began.\r
\r
Soft whispers curled through the air.\r
At first, they sounded like wind.\r
But they weren't.\r
\r
They were words.\r
Spoken in a language she didn't understand.\r
Low and rhythmic.\r
Like chanting.\r
\r
Haruka pressed her back to the door, candle raised high.\r
The whispers grew louder, shifting direction, as though something circled her in the dark.\r
\r
And then\r
"Haruka,"\r
A voice spoke her name.\r
\r
She didn't recognize it.\r
It was wrong.\r
The way it bent her name into something else.\r
Too many syllables.\r
Too slow.\r
\r
The candle flickered again, bowing low.\r
\r
She stepped away from the door, retreating toward the center of the room. Her knees shook with every step.\r
\r
She heard footsteps.\r
Soft. Bare.\r
Across the tatami.\r
Coming closer.\r
\r
She spun.\r
Nothing.\r
\r
Again.\r
Closer this time.\r
\r
The candle dimmed.\r
The whispers grew louder, filling her ears until she couldn't hear her own ragged breathing.\r
\r
And then it all stopped.\r
\r
Silence.\r
\r
The candle flame steadied.\r
Just for a moment.\r
\r
And then\r
It went out.\r
\r
Not blown out.\r
Not snuffed.\r
\r
It simply ceased to be.\r
One second it was there.\r
The next, nothing.\r
\r
The dark was immediate.\r
Absolute.\r
Crushing.\r
\r
Haruka froze, her body locked in place, terror pinning her where she stood.\r
\r
She felt it then.\r
Breath on her skin.\r
A weight behind her, close enough to touch.\r
\r
And then something did.\r
\r
Cold fingers--impossibly long, impossibly thin--brushed the side of her neck.\r
They pressed gently at first, as if testing.\r
Then harder.\r
Tightening.\r
\r
Her breath stopped.\r
\r
She couldn't move.\r
Couldn't scream.\r
Couldn't think.\r
\r
The world went still.\r
\r
And then--\r
`,Dx=`Would you believe me if I said I fell in love with something that might not exist? Okay, it logically does not exist, but to me, it does.\r
\r
Not a girl I met at a bar or someone I passed on the subway. A memory that never happened and a beautiful lie stitched together by a tired mind.\r
\r
I did not meet her in the way you meet someone, shake their hand, exchange names, talk about weather and books and dreams of leaving the city. No, this was different.\r
\r
She came to me in pieces, sometimes in the corner of a sunlit room, sometimes walking barefoot along a path I had never seen before. Her voice reached me before her face did. And somehow, I recognized her before I even knew her name.\r
\r
You could call it a dream. You could call it delusion. I am not sure I know the difference anymore.\r
\r
What I do know is that when I close my eyes, I leave this world behind.. This brittle shell of deadlines, digital noise and elevator small talk and... and I wake up somewhere else. A different life. A different version of me.\r
\r
One where I am twenty again.\r
\r
Trust me. You don’t realize just how heavy time is until it’s stripped away. The first time I opened my eyes in that place, I thought it was just a dream stitched from old regrets and unmet desires. But the way the wind moved, the way my heart felt lighter, the way she looked at me… It wasn’t like a dream. It felt like a second chance.\r
\r
I used to laugh at people who chased meaning in dreams. Used to think they were just sad, lonely people clinging to whatever scraps of beauty their minds would conjure.\r
\r
And here I am, becoming just like that.\r
\r
I know. I know that it is just my imagination. A narrative my exhausted brain plays to keep me from falling apart. But if that is true, then why do I remember every detail so vividly? Why does her absence ache like a missing limb when I wake up?\r
\r
I never planned to get attached. It was just a break from reality, a breath of fresh air which I was happy about. But she changed that\r
\r
She changed everything.\r
\r
And now I am caught between two lives. One that pays my bills and drains my soul. Another that disappears every morning like dew in sunlight.\r
\r
I have stopped telling myself it’s harmless.\r
\r
This isn’t the beginning. By now I have already spent countless nights in that world. I have already memorized the shape of her smile, the scent of her hair, the sound of her laugh.\r
\r
By now, I have already crossed a line I can’t uncross.\r
\r
How did I end up like this here. I don’t know the answer myself. But let me take you back to when it all started.\r
\r
I slept at 3:14 AM.\r
\r
Not because I was up late binging something, or out with friends, or even enjoying my own damn company.\r
\r
No, I was fixing a bug that didn’t matter. For a client I’d never meet. In a project I stopped caring about six months ago.\r
\r
“High-priority something something issue.” That was the subject line probably. The kind of thing that feels urgent at 12:03 AM and irrelevant by sunrise.\r
\r
I don’t even remember solving it. Just the hum of my laptop fan and the dead glow of my second monitor. The ticket got closed. The issue vanished along with my will to live.\r
\r
But I stayed awake.\r
\r
It’s not the kind of tired you can sleep off — the kind that seeps into your bones and convinces you there’s no point in dreaming at all.\r
\r
This stays between us, but if you are someone who uses teams, always turn your status to offline as soon as clock hits 5pm. Trust me on this.\r
\r
I woke up at 9:30 AM to my alarm screaming like it was furious I was still alive.\r
\r
Dragged myself to the sink. Brushed my teeth like I was sanding down a wall. The mirror looked at me like a stranger, and I looked back with the same courtesy.\r
\r
Showered. Got dressed. Didn’t eat. There wasn’t time, or hunger, or care.\r
\r
By 10:00, I was out the door, slapping on deodorant like war paint as I walked.\r
\r
The roads were chaos.\r
A hundred cars, honking and inching forward like insects. No one smiled. No one listened to music. Just hands gripping wheels and eyes staring ahead like we were all headed to the same funeral.\r
\r
It took fifty-seven minutes to get to the office. Fifty-seven minutes of exhaust fumes, half-dead coffee, and news radio reminding me that everything was still falling apart.\r
\r
At 10:59, I scanned my badge and walked into a building designed to look like it meant something.\r
\r
Everything inside was beige and blue and dead.\r
\r
The walls had posters about “innovation” and “teamwork” in fonts that screamed we had neither.\r
\r
My floor smelled like printer toner and resignation.\r
\r
The guy at the desk next to mine didn’t say good morning. He never did. His eyes were glued to code like it was a staring contest.\r
\r
I sat down, opened my laptop, and disappeared into Jira tickets.\r
\r
The hours bled together. Stand-up. Bug report. Lunch I didn’t taste.\r
\r
By 3 PM, I couldn’t remember what I had done that morning. By 5 PM, I couldn’t tell if I’d actually spoken out loud.\r
\r
Around 6, someone laughed at something — a dry, empty bark of a sound. I looked up, and for a moment I thought, maybe I imagined it.\r
\r
My manager pinged me at 6:34:\r
\r
“Any chance you can stay online a bit longer? Just in case the client has questions.”\r
\r
I replied with a thumbs-up emoji, a polite way of saying: I don’t have the option to say no.\r
\r
I left the office at 8:12. The janitor nodded at me like we shared a secret — the kind that only people who stay too late ever know.\r
\r
Drove home in silence. Lights blurred past the window like streaks on a painting no one finished.\r
\r
Microwave dinner. Another shower. Mindless scrolling.\r
\r
I told myself I’d sleep early. I always told myself that.\r
\r
But time didn’t move the same at night. It dragged. It lingered.\r
\r
At 2:59 AM, I lay in bed, staring at the cracks in my ceiling like they might whisper back.\r
\r
My eyes traced the lines until they blurred, like veins under pale skin. I used to think they were just part of the plaster. Now they felt like fractures in something deeper — the foundation, maybe. Of this apartment. Of my life.\r
\r
I had done everything right. That’s what pisses me off the most.\r
\r
I followed the damn blueprint. Study hard. Get good grades. Don’t party too much. Stay focused. Don’t fall in love — that’s a distraction. Don’t travel — that’s a waste of time. Don’t feel too much — that’s weakness.\r
\r
And I didn’t.\r
I was obedient. Efficient. The perfect little machine.\r
\r
While everyone else was getting drunk in dorm rooms, I was preparing for interviews. While people were skipping lectures to go hiking or dancing or fucking or feeling something, I was poring over Leetcode problems and memorizing frameworks like scripture.\r
\r
I sacrificed everything.\r
\r
And for what?\r
\r
So I could wake up in a box, drive in a box, sit in a box, type into a box, then come home to another box and pretend I had made it.\r
\r
They tell you it’ll all be worth it. That all the missed moments and sleepless nights will somehow pay off. That once you land the job, once you get the paycheck, once you hit “success,” everything will make sense.\r
\r
But no one tells you how empty it feels when the only thing you’ve earned is silence.\r
\r
No one tells you what it’s like to achieve everything and feel absolutely nothing.\r
\r
I blinked, and the ceiling cracked a little more — or maybe it always looked like that.\r
\r
I wondered what I missed.\r
\r
The people I didn’t talk to because I was “too focused.” The parties I skipped because I had a test. The summer I said no to a road trip because I had an internship.\r
\r
The life I never let myself live.\r
\r
I thought about the old me — the version of myself that wanted to sing in the shower, flirt with strangers, get his heart broken, dance in the rain, and laugh so hard his stomach hurt.\r
\r
I buried that guy.\r
\r
I killed him to build this one.\r
\r
But lately, when I close my eyes, I think I hear him again. Laughing. Whispering. Telling me it’s not too late.\r
\r
I don’t know if it’s hope or hallucination.\r
\r
But that night, just before 3:00 AM… I let myself believe.\r
\r
I didn’t pray. I didn’t wish. I just gave in.\r
\r
I let go of the version of me that was supposed to be.\r
\r
And I fell.\r
\r
I didn’t expect anything to change.\r
\r
I didn’t expect meaning, or magic, or miracles.\r
\r
I just closed my eyes.\r
\r
And then…\r
\r
Everything changed.\r
`,Vx=`It started with motion.\r
\r
Wind against glass. The low hum of tires on asphalt. Light flickering through tree branches overhead, stuttering like an old film reel.\r
\r
I wasn't driving. I wasn't even sure if I had a body.\r
\r
But I could feel the road. I could feel the rhythm of it — the gentle pull when the car turned, the subtle vibration of music through the seat, the sensation of speed even though I couldn’t see the speedometer.\r
\r
There was a voice beside me.\r
\r
“You’re zoning out again.”\r
\r
A girl. She had sharp eyes and a knowing smile, feet on the dashboard like she’d done it a thousand times before.\r
\r
The driver laughed. “Am I?”\r
\r
His voice startled me.\r
It was mine.\r
But it wasn’t me.\r
\r
I heard it from inside, like being inside someone else’s memory.\r
\r
“You think too much,” she said, unwrapping a mint and popping it into her mouth. “You’ll give yourself an ulcer before graduation.”\r
\r
“Not if I crash first,” he said.\r
\r
She rolled her eyes. “You are not funny.”\r
\r
I wanted to speak. To stop him. To say something — anything — about how wrong it all felt. But I couldn’t.\r
\r
I was a passenger in someone else’s life. A ghost behind the eyes of a version of myself I didn’t recognize.\r
\r
The road curved. The sky above glowed a warm, late-afternoon orange. Shadows grew long across the pavement.\r
\r
“This shortcut’s gonna save us like, what, ten minutes?” she asked.\r
\r
“Fifteen if I floor it,” he said.\r
\r
I felt the pedal sink. The engine roared louder.\r
\r
My heart — or his heart — thumped harder.\r
\r
Something wasn’t right.\r
\r
The light through the windshield flickered again, but this time it didn’t look like trees. It looked like something blocking the sun.\r
\r
“Wait—”\r
\r
She sat up suddenly, pulling her feet down.\r
\r
In the distance, a curve tightened sharply. Too sharp. A shape ahead — headlights? No. A barrier.\r
\r
The tires squealed.\r
\r
His hands twisted the wheel.\r
\r
The girl shouted something I couldn’t hear.\r
\r
Then —\r
\r
Silence.\r
\r
Not the kind of silence that comes after a crash. The kind that happens just before. The air sucked out of the world, the quiet before glass shatters, before metal bends, before time unravels.\r
\r
And in that stillness, I knew —\r
\r
This was how he died.\r
\r
The me-that-wasn’t-me.\r
\r
I was inside the last moments of a life that should have ended.\r
\r
The world didn’t shatter all at once.\r
\r
It peeled apart in pieces, slowly, as if time slowed down.\r
\r
First came the sound — an unholy scream of rubber against road, shrill and hopeless. The tires fought for grip, scraping the curve like claws against tile.\r
\r
Then the blur — trees turning into streaks, sky and ground swapping places in frantic flashes. I couldn’t tell if we were spinning or if the world was.\r
\r
Our hands gripped the wheel tight. Too tight.\r
\r
There was a scream. Hers.\r
\r
Not loud. Not cinematic. Not the kind of scream they write into movies. It was a raw sound. Human. Cut short by impact.\r
\r
Then the first crunch — metal folding like paper. The seatbelt jerked hard across his chest, his skull slamming sideways into the window. A starburst of pain lit up behind the eyes I didn’t own.\r
\r
And for a second — just a second — it went quiet again.\r
\r
The car lifted. I felt it. The sudden weightlessness. Tires no longer on the ground. That awful, impossible moment of floating.\r
\r
And then gravity remembered us.\r
\r
We landed hard.\r
\r
The windshield exploded in a thousand glittering shards. Something snapped in the front axle — maybe a bone, maybe steel, I couldn’t tell anymore. The dashboard caved in. The passenger seat bent inward.\r
\r
I wanted to close my eyes.\r
\r
But I couldn’t.\r
\r
The smell of gasoline filled the air. Burnt rubber. Blood.\r
\r
My chest — his chest — wouldn’t rise properly. A crushing pressure pinned him there.\r
\r
“Nngh—”\r
\r
A cough. Wet. Rattling. A trickle of warmth sliding down his lip. Blood.\r
\r
He looked sideways.\r
\r
The girl.\r
\r
She wasn’t moving.\r
\r
Her head tilted awkwardly, mouth slightly open, hair plastered across her face.\r
\r
Eyes closed.\r
\r
And for a horrible second, I couldn’t tell if she was asleep or—\r
\r
“No...”\r
\r
His hand — my hand — reached toward her, trembling.\r
\r
Fingers grazed her shoulder.\r
\r
She didn’t flinch.\r
\r
“Hey,” he whispered, barely audible, choking on the word. “Hey, wake up...”\r
\r
Nothing.\r
\r
His vision blurred.\r
\r
Blood in his eye. Or maybe tears.\r
\r
The world began to spin again — not violently this time, but slowly, as if the scene itself was fading out.\r
\r
Trees. Smoke. Distant sirens?\r
\r
Or just memory.\r
\r
You’re not supposed to be here, I thought.\r
\r
This isn’t your life.\r
\r
But it felt like mine.\r
\r
Every second of it.\r
\r
His lungs rattled.\r
\r
Not like a breath, but like a bag slowly collapsing. Each inhale shallower than the last. His chest barely moved. The weight pressing down on it felt like a cinderblock soaked in regret.\r
\r
His eyes — my eyes — fluttered. One refused to open all the way. The other caught fractured shapes through broken glass: a tree. The curb. The smear of taillights in the distance.\r
\r
But the girl.\r
\r
She hadn’t moved.\r
\r
Her skin was too pale now. Lips parted. Hair tangled across her cheek like some cruel veil.\r
\r
He stared at her like he was trying to memorize everything in the last seconds he had.\r
\r
His hand rested on her arm. Gently. Not shaking her. Not calling her name. Just... holding on.\r
\r
The sounds around him faded — the whine of metal, the far-off drone of cars, even the sirens (if there ever were any) — they all blurred into silence.\r
\r
His vision narrowed.\r
\r
The edges darkened.\r
\r
A sharp ache pressed into the side of his ribs, then softened, then dulled completely.\r
\r
He looked up one last time — at the sky through the shattered windshield. It was turning violet, like the end of a sunset or the beginning of something else entirely.\r
\r
And then…\r
\r
He closed his eyes.\r
\r
And I opened mine.\r
\r
I gasped — breath sharp and sudden, like breaking the surface of a deep, dark pool.\r
\r
My heart was hammering. My sheets were twisted, drenched in sweat. My throat burned.\r
\r
It was still dark. My phone buzzed faintly on the nightstand — probably close to morning, but not there yet.\r
\r
I sat up. Pressed a hand to my chest.\r
\r
I was alive.\r
\r
Of course I was.\r
\r
But that dream — no, that death — had felt so real. I could still feel the weight of the seatbelt. The sting in my temple. The taste of blood at the back of my throat.\r
\r
And worse than all of it, I could still feel her silence.\r
\r
I staggered to the sink and splashed water on my face. Cold. Grounding.\r
\r
It was just a dream.\r
\r
It had to be.\r
\r
But when I looked up at the mirror, I didn’t see the usual exhaustion. I saw something else.\r
\r
Grief.\r
\r
For a girl I didn’t know.\r
For a body I didn’t own.\r
\r
And somewhere deep beneath it, something else stirred.\r
\r
A flicker.\r
\r
Like the first breath after drowning.\r
\r
I didn’t know what that dream meant.\r
\r
I didn’t know what it was.\r
\r
But I knew one thing with terrifying certainty.\r
\r
That wasn’t the last time I’d see him.\r
\r
Or her.\r
`,Bx=`I woke up in the same bed.\r
\r
Same window. Same pale yellow curtains. Same beeping IV, same smell of disinfectant baked into the air like it lived here.\r
\r
For a second — just a second — I waited for the cracks in the ceiling.\r
\r
For the hum of my apartment fan.\r
For the lurch of the real world dragging me back.\r
\r
But it didn’t come.\r
\r
I was still here.\r
\r
I pushed myself up on my elbows, slowly. My body still ached — not in that fading dream way, but the deep soreness of real bruises, real trauma. My throat was dry. My arm itched where the IV held it in place.\r
\r
I looked around the room again, just to be sure.\r
\r
Nothing had changed.\r
\r
A nurse walked by the open door. I could hear distant murmuring at the station down the hall. The world outside my room was active, moving, ordinary in the most maddening way.\r
\r
This wasn’t how dreams worked.\r
They faded. They jumped. They broke apart the second you tried to study them.\r
\r
This one was holding its shape.\r
\r
I reached for the call button and stopped halfway.\r
\r
What would I even say?\r
\r
“Hi, yeah, I think I’m stuck in someone else’s life and I’d like to leave now.”\r
\r
I lay back down and stared at the ceiling instead.\r
\r
Maybe this was just a coma. Maybe I hit my head harder than I thought, and my brain was doing one of those elaborate dying neuron things — stringing together a coherent fantasy as a final act before it all shut off.\r
\r
But it didn’t feel like fantasy.\r
\r
There were too many pieces. Too many people moving around me with lives that didn’t revolve around mine.\r
\r
I wasn’t the center of anything here.\r
\r
Rachel was still unconscious.\r
Larry was still real.\r
There was a photo on my hospital table of a life I hadn’t lived.\r
Detectives. Doctors. Beeping monitors.\r
\r
I was either losing my mind in a coma of my own…\r
\r
Or this was something else.\r
\r
I didn’t say anything. Not out loud. But the thought crawled in anyway:\r
\r
If this isn’t a dream… then where does that leave the other version of me?\r
\r
The one who belonged here.\r
The one she loved.\r
\r
The one who’s supposed to wake up in this bed.\r
\r
Because it sure as hell wasn’t me.\r
\r
\r
It was the seventh morning.\r
\r
A nurse wheeled in a discharge packet, a folded change of clothes, and a clipboard with my name on it.\r
\r
A name that felt more like a costume every time I saw it printed.\r
\r
The bed had already been stripped down. The IV removed. The room smelled faintly of bleach now — like it was already erasing my presence. Making room for someone new.\r
\r
“You’re free to go whenever you’re ready,” the nurse said cheerfully, like I was leaving a hotel. “Doctor signed off this morning. Just don’t lift anything heavy, alright?”\r
\r
I nodded, though my hands were clenched into the sheets.\r
\r
She wheeled in a bag next — my things. The contents looked ordinary enough: jeans, a hoodie, an old phone charger tangled into a knot.\r
\r
“Your friend Larry dropped these off a few days ago. Said you’d want your own clothes once you were up and walking.”\r
\r
“Thanks.”\r
\r
She left me alone to change. The room felt too big once she was gone.\r
\r
I sat there for a moment, staring at the clothes.\r
They looked like something I’d wear. They fit. The hoodie even had a tiny stain near the cuff — something vaguely coffee-colored. A scar from another life’s morning.\r
\r
Everything about this world obeyed the rules of reality. That was the part that made me uneasy.\r
There were no floating dream logic gaps. No sudden scene cuts. No metaphors trying to teach me a lesson.\r
Just fabric. Zippers. Dust on a windowsill.\r
\r
I dressed slowly.\r
\r
When I stood, my legs held.\r
\r
The soreness was still there, but dulled now — familiar, manageable. Like a bruise after you’ve forgotten where it came from. The weight of the hospital gown was gone, but the weight in my chest hadn’t moved.\r
\r
I stepped into the hallway, blinking under the brighter overhead lights. A nurse waved politely from the station. Someone rolled past in a wheelchair. An orderly pushed a cart of linen toward the laundry chute.\r
\r
Normal. All of it.\r
\r
Too normal.\r
\r
I walked past Room 417. I didn’t stop. Didn’t look inside.\r
\r
I didn’t need to. I already knew who was there.\r
\r
Rachel.\r
\r
The name carried its own temperature.\r
I hadn’t seen her yet — not since the crash — and still, her absence followed me like a shadow.\r
\r
She loved someone who looked like me.\r
\r
She might wake up and expect him to still be here.\r
\r
I wasn’t ready for that.\r
\r
I reached the elevator and pressed the button. The doors slid open with a soft mechanical sigh.\r
\r
Outside, the world waited.\r
\r
I didn’t know where home was.\r
But I knew someone had left it behind for me.\r
\r
\r
I reached the elevator and pressed the button. The doors slid open with a soft mechanical sigh.\r
Outside, the world waited.\r
I didn’t know where home was.\r
But I knew someone had left it behind for me.\r
\r
Larry was already waiting by the curb when I stepped outside. Leaned against the hood of a weather-worn hatchback, tapping through something on his phone. He looked up, pocketed it, and popped the passenger door open with a jerk of his chin.\r
\r
“Ride’s here,” he said. “Try not to die again.”\r
\r
I managed a breath that might’ve been a laugh and climbed in.\r
\r
The car ride was quiet.\r
\r
Larry didn’t talk much this time, which I appreciated. The radio was on, low, some indie track drifting between static. The kind of song you forget while it’s playing but remember when you’re trying to fall asleep.\r
\r
I watched the city pass through the window. Trees and signs. Red lights blinking like slow heartbeats. Apartment buildings too close together. A woman on a bicycle carrying a brown paper bag.\r
\r
It looked like a place I could’ve lived.\r
\r
It didn’t feel like mine.\r
\r
“Almost there,” Larry said as we turned onto a narrow side street. “They’re still doing construction near the corner, so parking might be a pain.”\r
\r
I nodded, though I wasn’t really listening.\r
\r
The street was lined with low buildings — three-story walk-ups with old bricks and laundry strung on balconies. A cat lounged on a windowsill like it paid rent.\r
\r
Larry pulled into a cramped spot half a block down and cut the engine.\r
\r
He didn’t get out right away.\r
\r
“You good?” he asked.\r
\r
I nodded again, slower this time. “Yeah.”\r
\r
He reached into the glove box and pulled out a keyring.\r
\r
“Spare set. Your landlord left them with me when you got admitted. Place should be clean. I watered the plant — if you can believe that.”\r
\r
I offered a thin smile.\r
\r
“Text if you need anything,” he said. “Anything at all.”\r
\r
“Thanks.”\r
\r
He didn’t say goodbye. Just nodded, once, and drove off.\r
\r
I stood there for a second, holding the keys in my palm like they might vanish. The metal was warm from his hand. The tag read Unit 2B in smudged black marker.\r
\r
The building was old. The kind that groans when you step inside. Faded green carpet in the hall. Fluorescent lights that flickered once before settling.\r
\r
The door opened with a low creak. Not stuck. Just old.\r
\r
It smelled like dust, detergent, and faintly of something citrus. Maybe a candle long burned out.\r
\r
Inside was small. A studio. Narrow kitchen to the left, single window on the far wall, desk tucked under a shelf of old books. A sagging couch faced a TV too big for the room. Everything in here looked lived in, but not cluttered.\r
\r
On the counter sat a small cactus in a cracked mug. A folded piece of mail. A cheap white lamp.\r
\r
The bed was made.\r
\r
I stood in the doorway for a while, just staring.\r
\r
There were no pictures on the walls.\r
No family photos.\r
No notes taped to the fridge from a roommate or a parent or anyone else.\r
\r
Just a stack of class syllabi on the table. A calendar with assignment deadlines. A single photograph, tucked into the edge of the mirror:\r
\r
Me — or him — and Rachel.\r
Laughing.\r
Her hand on his shoulder, his head tilted toward her like they’d been doing that forever.\r
\r
I looked around the room again. Nothing about it told me who he really was.\r
\r
But it did tell me one thing.\r
\r
He’d been alone here.\r
\r
I set the keys on the counter and closed the door behind me. The click of the latch felt too final.\r
\r
For a moment, I just stood there, taking in the silence.\r
\r
There was no hum of a roommate’s music, no voices through thin walls. Just the soft ticking of a cheap analog clock and the distant sound of traffic beyond the window.\r
\r
I moved slowly, like I was afraid to disturb something.\r
\r
The apartment wasn’t messy, but it wasn’t staged either. It had that lived-in, halfway-kept look. A few mugs in the sink. A jacket slung over the back of a chair. A shoe rack by the door with only one shoe slightly out of line.\r
\r
It was clean in the way people clean for themselves — not for guests.\r
\r
I sat down at the desk beneath the shelf of books. The chair creaked beneath me. On the surface were a few spiral notebooks, a USB drive, a receipt for something I didn’t recognize, and a closed laptop with a sticker on the corner that said Property of Central Hills University.\r
\r
I opened it. No password.\r
\r
The wallpaper was a photo of a beach. Not tropical — rocky, gray-skied, peaceful. The kind of place someone would go to be alone, not to celebrate.\r
\r
The desktop was cluttered, but not chaotic. Folders labeled Thesis, Fall2022, Applications, Rachel.\r
\r
I didn’t open that last one.\r
\r
Instead, I clicked into a folder called Classes. It was full of PDFs. Syllabi. Lecture notes. Homework submissions. Everything dated from the last year.\r
\r
Midterm due dates. Project rubrics. An email exchange with a professor who had asked if he was okay missing class last week. The professor’s reply read:\r
\r
Of course. Just focus on getting better. We’ll get you caught up when you’re ready to return.\r
\r
It didn’t feel like a dream anymore. It felt like I’d stolen someone’s inbox.\r
\r
I closed the laptop and looked around again. The shelf above the desk had textbooks, mostly computer science and statistics. One spine was cracked halfway through. Bookmarks stuck out of it like teeth.\r
\r
I walked to the dresser. There were clothes — all my size, but none of them mine. A pack of gum. Receipts. Loose change. A folded flier for a film screening on campus next week.\r
\r
And on the nightstand, under a small glass of water with dust settling around the rim, was a worn student ID.\r
\r
The name matched mine.\r
The face too.\r
But the eyes were different.\r
\r
I set it down and finally sat on the edge of the bed.\r
\r
The apartment wasn’t haunted. There were no ghosts here. No twisted dream logic or surrealism waiting to shatter at the edges.\r
\r
It was just a quiet, practical space.\r
\r
Someone had lived here. Someone real. Someone solitary.\r
\r
Someone I was supposed to become.\r
\r
The sun outside had started to dip behind the buildings, casting long amber streaks across the room. I hadn’t turned on a single light. It didn’t feel like mine to touch.\r
\r
Eventually, I picked up the phone from the nightstand.\r
\r
It was already charged. The screen lit up with a faint vibration. No passcode.\r
\r
The wallpaper was the same photo from the laptop — that quiet beach with its colorless sky.\r
\r
Notifications poured in.\r
\r
Missed messages. Group chats. A few unopened emails. A message from Larry asking if I made it home okay. One from someone named Erin:\r
\r
“Heard you’re out. Let me know if you need anything. Welcome back, man.”\r
\r
I scrolled. There were calendar alerts, class reminders, assignment due dates.\r
\r
One stood out — an event labeled simply "Return to Campus – Monday".\r
\r
A tiny pin on a map showed the location: Central Hills University. I'd never heard of it. But somehow it knew me.\r
\r
I opened the gallery.\r
\r
There were photos of Rachel. Some with me — the other me. A few group shots, some blurry cafe tables, the kind of photos that only make sense when you were there.\r
They didn’t mean anything to me, but the look in his eyes did.\r
\r
He had been happy. Or maybe he had just looked happy for her.\r
\r
I backed out of the app and tossed the phone onto the bed.\r
\r
A while later, I left the apartment.\r
\r
It was still warm out — the golden hour kind of warmth that hugged the pavement but didn’t suffocate. People were out. Not many, but enough. College students, mostly. Sitting on porches. Sharing drinks. Walking in pairs or small clusters like gravity pulled them together by default.\r
\r
I walked without a destination. Down the block, through a side street, into a small park I didn’t know existed. There was a bench near the fountain, so I sat there for a while.\r
`,zx=`I woke up in the same bed.\r
\r
Same window. Same pale yellow curtains. Same beeping IV, same smell of disinfectant baked into the air like it lived here.\r
\r
For a second — just a second — I waited for the cracks in the ceiling.\r
\r
For the hum of my apartment fan.\r
For the lurch of the real world dragging me back.\r
\r
But it didn’t come.\r
\r
I was still here.\r
\r
I pushed myself up on my elbows, slowly. My body still ached — not in that fading dream way, but the deep soreness of real bruises, real trauma. My throat was dry. My arm itched where the IV held it in place.\r
\r
I looked around the room again, just to be sure.\r
\r
Nothing had changed.\r
\r
A nurse walked by the open door. I could hear distant murmuring at the station down the hall. The world outside my room was active, moving, ordinary in the most maddening way.\r
\r
This wasn’t how dreams worked.\r
They faded. They jumped. They broke apart the second you tried to study them.\r
\r
This one was holding its shape.\r
\r
I reached for the call button and stopped halfway.\r
\r
What would I even say?\r
\r
“Hi, yeah, I think I’m stuck in someone else’s life and I’d like to leave now.”\r
\r
I lay back down and stared at the ceiling instead.\r
\r
Maybe this was just a coma. Maybe I hit my head harder than I thought, and my brain was doing one of those elaborate dying neuron things — stringing together a coherent fantasy as a final act before it all shut off.\r
\r
But it didn’t feel like fantasy.\r
\r
There were too many pieces. Too many people moving around me with lives that didn’t revolve around mine.\r
\r
I wasn’t the center of anything here.\r
\r
Rachel was still unconscious.\r
Larry was still real.\r
There was a photo on my hospital table of a life I hadn’t lived.\r
Detectives. Doctors. Beeping monitors.\r
\r
I was either losing my mind in a coma of my own…\r
\r
Or this was something else.\r
\r
I didn’t say anything. Not out loud. But the thought crawled in anyway:\r
\r
If this isn’t a dream… then where does that leave the other version of me?\r
\r
The one who belonged here.\r
The one she loved.\r
\r
The one who’s supposed to wake up in this bed.\r
\r
Because it sure as hell wasn’t me.\r
\r
\r
It was the seventh morning.\r
\r
A nurse wheeled in a discharge packet, a folded change of clothes, and a clipboard with my name on it.\r
\r
A name that felt more like a costume every time I saw it printed.\r
\r
The bed had already been stripped down. The IV removed. The room smelled faintly of bleach now — like it was already erasing my presence. Making room for someone new.\r
\r
“You’re free to go whenever you’re ready,” the nurse said cheerfully, like I was leaving a hotel. “Doctor signed off this morning. Just don’t lift anything heavy, alright?”\r
\r
I nodded, though my hands were clenched into the sheets.\r
\r
She wheeled in a bag next — my things. The contents looked ordinary enough: jeans, a hoodie, an old phone charger tangled into a knot.\r
\r
“Your friend Larry dropped these off a few days ago. Said you’d want your own clothes once you were up and walking.”\r
\r
“Thanks.”\r
\r
She left me alone to change. The room felt too big once she was gone.\r
\r
I sat there for a moment, staring at the clothes.\r
They looked like something I’d wear. They fit. The hoodie even had a tiny stain near the cuff — something vaguely coffee-colored. A scar from another life’s morning.\r
\r
Everything about this world obeyed the rules of reality. That was the part that made me uneasy.\r
There were no floating dream logic gaps. No sudden scene cuts. No metaphors trying to teach me a lesson.\r
Just fabric. Zippers. Dust on a windowsill.\r
\r
I dressed slowly.\r
\r
When I stood, my legs held.\r
\r
The soreness was still there, but dulled now — familiar, manageable. Like a bruise after you’ve forgotten where it came from. The weight of the hospital gown was gone, but the weight in my chest hadn’t moved.\r
\r
I stepped into the hallway, blinking under the brighter overhead lights. A nurse waved politely from the station. Someone rolled past in a wheelchair. An orderly pushed a cart of linen toward the laundry chute.\r
\r
Normal. All of it.\r
\r
Too normal.\r
\r
I walked past Room 417. I didn’t stop. Didn’t look inside.\r
\r
I didn’t need to. I already knew who was there.\r
\r
Rachel.\r
\r
The name carried its own temperature.\r
I hadn’t seen her yet — not since the crash — and still, her absence followed me like a shadow.\r
\r
She loved someone who looked like me.\r
\r
She might wake up and expect him to still be here.\r
\r
I wasn’t ready for that.\r
\r
I reached the elevator and pressed the button. The doors slid open with a soft mechanical sigh.\r
\r
Outside, the world waited.\r
\r
I didn’t know where home was.\r
But I knew someone had left it behind for me.\r
\r
\r
I reached the elevator and pressed the button. The doors slid open with a soft mechanical sigh.\r
Outside, the world waited.\r
I didn’t know where home was.\r
But I knew someone had left it behind for me.\r
\r
Larry was already waiting by the curb when I stepped outside. Leaned against the hood of a weather-worn hatchback, tapping through something on his phone. He looked up, pocketed it, and popped the passenger door open with a jerk of his chin.\r
\r
“Ride’s here,” he said. “Try not to die again.”\r
\r
I managed a breath that might’ve been a laugh and climbed in.\r
\r
The car ride was quiet.\r
\r
Larry didn’t talk much this time, which I appreciated. The radio was on, low, some indie track drifting between static. The kind of song you forget while it’s playing but remember when you’re trying to fall asleep.\r
\r
I watched the city pass through the window. Trees and signs. Red lights blinking like slow heartbeats. Apartment buildings too close together. A woman on a bicycle carrying a brown paper bag.\r
\r
It looked like a place I could’ve lived.\r
\r
It didn’t feel like mine.\r
\r
“Almost there,” Larry said as we turned onto a narrow side street. “They’re still doing construction near the corner, so parking might be a pain.”\r
\r
I nodded, though I wasn’t really listening.\r
\r
The street was lined with low buildings — three-story walk-ups with old bricks and laundry strung on balconies. A cat lounged on a windowsill like it paid rent.\r
\r
Larry pulled into a cramped spot half a block down and cut the engine.\r
\r
He didn’t get out right away.\r
\r
“You good?” he asked.\r
\r
I nodded again, slower this time. “Yeah.”\r
\r
He reached into the glove box and pulled out a keyring.\r
\r
“Spare set. Your landlord left them with me when you got admitted. Place should be clean. I watered the plant — if you can believe that.”\r
\r
I offered a thin smile.\r
\r
“Text if you need anything,” he said. “Anything at all.”\r
\r
“Thanks.”\r
\r
He didn’t say goodbye. Just nodded, once, and drove off.\r
\r
I stood there for a second, holding the keys in my palm like they might vanish. The metal was warm from his hand. The tag read Unit 2B in smudged black marker.\r
\r
The building was old. The kind that groans when you step inside. Faded green carpet in the hall. Fluorescent lights that flickered once before settling.\r
\r
The door opened with a low creak. Not stuck. Just old.\r
\r
It smelled like dust, detergent, and faintly of something citrus. Maybe a candle long burned out.\r
\r
Inside was small. A studio. Narrow kitchen to the left, single window on the far wall, desk tucked under a shelf of old books. A sagging couch faced a TV too big for the room. Everything in here looked lived in, but not cluttered.\r
\r
On the counter sat a small cactus in a cracked mug. A folded piece of mail. A cheap white lamp.\r
\r
The bed was made.\r
\r
I stood in the doorway for a while, just staring.\r
\r
There were no pictures on the walls.\r
No family photos.\r
No notes taped to the fridge from a roommate or a parent or anyone else.\r
\r
Just a stack of class syllabi on the table. A calendar with assignment deadlines. A single photograph, tucked into the edge of the mirror:\r
\r
Me — or him — and Rachel.\r
Laughing.\r
Her hand on his shoulder, his head tilted toward her like they’d been doing that forever.\r
\r
I looked around the room again. Nothing about it told me who he really was.\r
\r
But it did tell me one thing.\r
\r
He’d been alone here.\r
\r
I set the keys on the counter and closed the door behind me. The click of the latch felt too final.\r
\r
For a moment, I just stood there, taking in the silence.\r
\r
There was no hum of a roommate’s music, no voices through thin walls. Just the soft ticking of a cheap analog clock and the distant sound of traffic beyond the window.\r
\r
I moved slowly, like I was afraid to disturb something.\r
\r
The apartment wasn’t messy, but it wasn’t staged either. It had that lived-in, halfway-kept look. A few mugs in the sink. A jacket slung over the back of a chair. A shoe rack by the door with only one shoe slightly out of line.\r
\r
It was clean in the way people clean for themselves — not for guests.\r
\r
I sat down at the desk beneath the shelf of books. The chair creaked beneath me. On the surface were a few spiral notebooks, a USB drive, a receipt for something I didn’t recognize, and a closed laptop with a sticker on the corner that said Property of Central Hills University.\r
\r
I opened it. No password.\r
\r
The wallpaper was a photo of a beach. Not tropical — rocky, gray-skied, peaceful. The kind of place someone would go to be alone, not to celebrate.\r
\r
The desktop was cluttered, but not chaotic. Folders labeled Thesis, Fall2022, Applications, Rachel.\r
\r
I didn’t open that last one.\r
\r
Instead, I clicked into a folder called Classes. It was full of PDFs. Syllabi. Lecture notes. Homework submissions. Everything dated from the last year.\r
\r
Midterm due dates. Project rubrics. An email exchange with a professor who had asked if he was okay missing class last week. The professor’s reply read:\r
\r
Of course. Just focus on getting better. We’ll get you caught up when you’re ready to return.\r
\r
It didn’t feel like a dream anymore. It felt like I’d stolen someone’s inbox.\r
\r
I closed the laptop and looked around again. The shelf above the desk had textbooks, mostly computer science and statistics. One spine was cracked halfway through. Bookmarks stuck out of it like teeth.\r
\r
I walked to the dresser. There were clothes — all my size, but none of them mine. A pack of gum. Receipts. Loose change. A folded flier for a film screening on campus next week.\r
\r
And on the nightstand, under a small glass of water with dust settling around the rim, was a worn student ID.\r
\r
The name matched mine.\r
The face too.\r
But the eyes were different.\r
\r
I set it down and finally sat on the edge of the bed.\r
\r
The apartment wasn’t haunted. There were no ghosts here. No twisted dream logic or surrealism waiting to shatter at the edges.\r
\r
It was just a quiet, practical space.\r
\r
Someone had lived here. Someone real. Someone solitary.\r
\r
Someone I was supposed to become.\r
\r
The weekend passed in quiet rhythms.\r
\r
Each morning, I woke up expecting to be back in my real bed � back in my box apartment, under that flickering ceiling fan. But it never happened.\r
\r
The dream didn�t end.\r
\r
Each morning began with the same soft light through the apartment window. Same mild chill in the floorboards. Same faint scent of lemon and dust.\r
\r
On Sunday, I opened the laptop again and actually read one of the assignments. It was some light programming theory � something I remembered from a life I actually lived. I made it through five pages before realizing I wasn�t pretending to be interested.\r
\r
I answered Larry�s text. Told him I was doing alright. He sent back a thumbs-up gif with a dumb cartoon raccoon in it.\r
\r
That night, I fell asleep without questioning whether I'd wake up somewhere else. Not because I was sure � but because, for the first time, I didn�t want to.\r
\r
\r
�-------------------------x�----------------------------\r
\r
\r
\r
Monday came.\r
\r
And with it, the return to campus.\r
\r
Larry swung by in the morning. He was late, but unapologetic.\r
\r
�You�re the one that died, not me,� he said, handing me a granola bar on the way out the door. �Dead guys don�t get to complain.�\r
\r
The university wasn�t far � a hilltop campus that stretched wider than it looked on the map. It felt alive in the way certain places do: not because of the buildings, but because of the people moving through them like they belonged.\r
\r
Old brick facades. Iron railings. Trees that had been there longer than most students. Laughter somewhere behind me. A dog barking near the quad. The kind of chaotic quiet that makes you feel like you're part of something, even if you�re not.\r
\r
Larry split off near the library. �You good?�\r
\r
I nodded. �Yeah. I�ll text you if I get kidnapped by philosophy majors.�\r
\r
�Don�t. I�ll let �em keep you.�\r
\r
Then he was gone, and I was left in the tide of people � students moving like currents, flowing around one another effortlessly. I let it pull me.\r
\r
I wasn�t looking for anything. Just taking it in.\r
\r
I turned the corner near the main quad.\r
\r
And then � I saw her.\r
\r
She was standing at the base of the art building steps, holding a cup of something warm in both hands, blowing on it softly. Her hair caught the morning sun, not in that cinematic way where everything glows � but in a way that made the color stay in my mind longer than it should�ve.\r
\r
She was laughing at something the girl beside her said. Not the self-conscious kind � not a laugh performed, but something full and real, the kind that made her shoulders move and her eyes squint just a little.\r
\r
She looked... alive. Completely unburdened by the weight I carried, or the silence I�d gotten used to.\r
\r
And in that moment, the noise of the campus thinned. Not gone � just blurred. Like I�d stepped behind glass and was seeing the world in its original draft.\r
\r
I didn�t know her name. Didn�t know her story.\r
But something inside me reacted like I did.\r
\r
Something old.\r
Or maybe something I�d buried.\r
\r
It wasn�t attraction. It wasn�t awe.\r
It was recognition � of someone I hadn�t met yet, but felt like I�d forgotten.\r
\r
She turned slightly. Our eyes didn�t meet. She never noticed me.\r
\r
But I noticed her.\r
And I knew � in that moment � something had shifted.\r
\r
The dream had stopped feeling like a puzzle I was supposed to solve.\r
Now it felt like a place I didn�t want to leave.\r
\r
\r
The rest of the day passed in quiet, ordinary motion.\r
\r
I attended two classes � or at least sat through them. One was held in a windowless lab room that smelled like whiteboard markers and overheated plastic. The other was a lecture in some old hall with creaky seats and a professor who didn�t seem to believe in microphones.\r
\r
People greeted me in passing. Some nodded, some smiled, a few said, �Hey, you�re back.� I smiled back. Said thanks. Pretended I remembered who they were.\r
\r
I didn�t see her again.\r
Not once.\r
But she stayed with me all day anyway.\r
\r
Not in some romantic, whimsical way. Just quietly � like the afterimage left behind when you look into the sun too long. She lingered at the edges of my thoughts. Every time I blinked, I expected to see her walking through a door or sitting beneath a tree. Every time someone laughed, I checked without meaning to.\r
\r
I didn�t know her name.\r
But that hadn�t stopped my mind from giving her one anyway � a placeholder, a shape to wrap the feeling around.\r
\r
By the time I got home, the sky had dimmed into that deep blue hour where the buildings outside lose their edges. The air was cool. The apartment felt less foreign than it had when I first walked in. I made pasta I didn�t finish. Turned on a show I didn�t watch. Answered a text from Larry with a �Not bad. Getting there.� That was it.\r
\r
Just another normal day.\r
\r
Except it wasn�t.\r
Not to me.\r
\r
\r
Later, I lay in bed with the lights off. The shadows moved on the ceiling like waves behind glass.\r
\r
I was tired, but not in a way that sleep could fix.\r
\r
I turned over, pulled the blanket tighter, and stared at the closed blinds.\r
Nothing moved. No flickering. No dream logic unraveling.\r
The world was holding its shape.\r
\r
And that�s what scared me.\r
\r
It had been nearly a week since I woke up in that hospital bed. Nearly a week of pretending to be someone else � but the pretending had started to feel less like acting and more like� settling.\r
\r
Everything here was too coherent. Too continuous. I remembered faces from class. I remembered street names. My phone buzzed with reminders I didn�t set. My email inbox was full of things I was expected to care about.\r
\r
And strangest of all� part of me wanted to.\r
\r
I wanted to show up to class on time. I wanted to respond to Larry with something more than surface-level replies. I wanted to know what the assignment was. I wanted to see her again.\r
\r
That girl. The one near the art building.\r
\r
Her laugh had cut through the noise like it was tuned to a different frequency.\r
Not perfect. Not angelic. Just real.\r
Unbothered. Present.\r
Everything I didn�t know how to be anymore.\r
\r
There was no logical reason I should�ve remembered her. No reason I should�ve wanted to. I hadn�t spoken to her. I didn�t even get a good look at her face.\r
\r
But something in me � some quiet, aching part � was already building a space around her.\r
\r
Maybe it was the way she carried herself.\r
Maybe it was just the kind of story I needed.\r
\r
I thought about that as my eyes began to close.\r
About the curve of the sidewalk she walked on.\r
About the way this world, this strange stitched-together replica of a life, had started to feel more breathable than my own.\r
\r
Maybe I was going crazy.\r
Maybe I didn�t care.\r
\r
Because for the first time in a long while, I didn�t feel like I was being chased by my own mind.\r
For the first time, I wasn�t clinging to anything.\r
\r
I let go.\r
I let the dream have me.\r
\r
And just as the weight started to slip away�\r
\r
I woke up gasping.\r
\r
Cold air hit my lungs like a slap. The warmth was gone. So was the light. So was everything.\r
\r
My hands shot forward, reaching for sheets that weren�t there. The fabric felt rough. Wrong.\r
\r
Where was�\r
\r
I looked around.\r
\r
No yellow curtains. No sunlight. No gentle hum of the city outside. Just�\r
\r
The ceiling fan, spinning lazily overhead.\r
\r
The cracked plaster.\r
\r
The faint electric buzz of the fridge down the hall.\r
\r
No.\r
No, no, no, no�\r
\r
I sat up too fast. My head spun. I grabbed the edge of the bed, heart pounding.\r
\r
This wasn�t right.\r
This wasn�t where I was supposed to be.\r
I�d just�\r
I was just there.\r
\r
The campus.\r
The apartment.\r
Larry.\r
Her.\r
\r
I pressed my hands to my face. My skin was cold.\r
\r
I tried to breathe slowly, but it felt like I was choking on air that didn�t belong to me anymore.\r
\r
It had felt so real.\r
\r
I remembered walking across campus. The taste of shitty black coffee. The sound of her laugh. The way her hair moved in the light. I remembered it like a memory, not a dream.\r
\r
So why was I back here?\r
\r
Was it ever real?\r
\r
Was any of it real?\r
\r
I looked around the room like I might find a piece of it hidden somewhere. A leftover detail. A trace. But there was nothing. Just the same lifeless gray I�d woken to every morning before this all began.\r
\r
I swung my legs over the edge of the bed and sat there, elbows on my knees, hands clenched.\r
\r
What the hell was that?\r
\r
I wanted to believe it was just a dream.\r
I wanted to believe I�d imagined all of it.\r
But I didn�t feel relief.\r
\r
I felt loss.\r
\r
Deep, stupid, impossible loss � for a world I might�ve made up� and a girl I never got to know.\r
`,Ox=`I didn’t leave my bed for nearly an hour.\r
\r
I just sat there, hunched forward, the real world pressing down around me like thick air.\r
\r
Everything felt louder. The refrigerator. The fan. Even the stillness had a kind of static to it. It didn’t feel like home. Not anymore.\r
\r
I kept expecting my phone to buzz with a message from Larry. Or a calendar alert from Central Hills. Something. Anything.\r
\r
But it never came.\r
\r
I was alone.\r
\r
And this time, it wasn’t quiet.\r
It was empty.\r
\r
Eventually, I stood. My legs felt weak, like I hadn’t used them in days. The air in the apartment was stale. My tongue was dry. My reflection in the bathroom mirror looked… dull. Washed out. Like someone had pulled the contrast slider all the way down on my life.\r
\r
I splashed water on my face and stared at myself.\r
\r
Same old cracked mirror. Same bags under my eyes. Same toothbrush with the fading bristles. Nothing out of place. Nothing new.\r
\r
Except me.\r
\r
I wandered around the apartment like a stranger. Touched the corner of the desk. Opened the fridge. Closed it. Sat on the couch. Turned on the TV. Turned it back off.\r
\r
Nothing stuck. Nothing felt right.\r
\r
I checked my phone. Real phone. Old lock screen. 142 unread emails. Half of them from people I hadn’t spoken to in months. Some update from the project manager about a feature launch. A group chat still muted from weeks ago.\r
\r
I stared at it until the screen dimmed.\r
\r
What was I supposed to do now?\r
\r
Pretend like it didn’t happen?\r
\r
Pretend I hadn’t lived a week in a world that made me feel — for the first time in years — like I could breathe again?\r
\r
Pretend I hadn’t met her?\r
\r
No.\r
I hadn’t met her.\r
I’d seen her. Once.\r
\r
And yet—\r
\r
And it wasn’t just her.\r
\r
It was all of it.\r
\r
The apartment with its lemon-scented quiet.\r
Larry’s dumb sarcasm and surprise granola bars.\r
The sound of pencil scratches in lecture halls.\r
The art posters hanging in the quad.\r
The fucking cactus on the windowsill.\r
\r
How do you grieve something that might not have existed?\r
\r
I sat back down on the bed and ran both hands through my hair.\r
\r
This was insane.\r
People don’t miss their dreams.\r
Not like this.\r
\r
I wasn’t supposed to remember so much. I wasn’t supposed to wake up feeling like someone had ripped me out of a life that belonged to me more than this one ever did.\r
\r
And yet here I was — back in the place I fought so hard to build.\r
\r
And all I wanted was to leave it again.\r
\r
\r
I tried to work.\r
\r
That’s what I always did when things didn’t make sense.\r
Work. Type. Focus. Let the rhythm of input and output overwrite the parts of my brain that wanted to scream.\r
\r
I opened my laptop.\r
\r
It took a second to remember the password. That had never happened before.\r
\r
The screen lit up with a dozen open tabs — ticket boards, test dashboards, an unfinished documentation file titled “Final QA Guidelines – Client Freeze Week.”\r
\r
I stared at it like it was written in another language.\r
\r
\r
Some teammate pinged me about a regression from last sprint.\r
I replied with a thumbs-up emoji. I didn’t even read the message.\r
\r
Another alert came in — 11:00 AM daily sync, starting in five.\r
\r
I joined. Camera off. Mic muted.\r
\r
The voices droned on.\r
\r
Milestones. Delays. Dependencies.\r
I heard the words, but they passed through me like wind through a cracked window.\r
\r
I looked down at my hands. They were on the keyboard, fingers hovering over the keys like they remembered how to type. But my mind was elsewhere. Not even just elsewhere — someone else.\r
\r
I closed my eyes.\r
\r
The sound of the video call faded into a memory that didn’t belong here:\r
the murmur of students across a campus.\r
The scratch of pencil on paper.\r
The clink of ceramic mugs in a campus café.\r
\r
And her voice. Not even words — just the lilt of her laugh.\r
\r
I opened my eyes again.\r
\r
Still here.\r
\r
Still this desk. This apartment. This dead-blue light. This job.\r
\r
My stomach clenched. Not from hunger. From something else — something tighter, more hollow. Like grief. Like withdrawal.\r
\r
I left the meeting early. Logged off everything. Shut the laptop.\r
\r
I couldn’t do it.\r
\r
I walked to the window. Stared out at the street.\r
A delivery truck reversed, beeping.\r
A man walked his dog, eyes glued to his phone.\r
The sun glared off the side of a car, sharp and clinical.\r
\r
None of it felt like it mattered.\r
\r
In the dream, even the smallest things had weight.\r
The way the sunlight slanted into the apartment.\r
The chipped mug on the counter.\r
The way the air smelled after it rained.\r
Even silence had depth.\r
\r
Here, everything was flat. Empty. Functional.\r
Like a life built to be endured, not lived.\r
\r
Around noon, I showered. Stared at the wall for too long. Didn’t bother shaving.\r
\r
I made coffee and didn’t drink it.\r
\r
I opened my email, then closed it again.\r
\r
I didn’t know what I was looking for — maybe some mistake, some rupture in the real world. Something that said: Yes, it happened. Yes, it meant something. Yes, you’re not crazy.\r
\r
But there was nothing.\r
\r
Just me. And this place.\r
This perfectly functional, deeply lifeless place.\r
\r
And even though I kept telling myself it was just a dream…\r
I didn’t believe it.\r
\r
Because whatever it was, it felt more real than anything I was doing right now.\r
\r
And I would’ve done anything — anything — to fall asleep and find myself back there.\r
\r
\r
By evening, the stillness had grown teeth.\r
\r
There was no great breakdown. No panic attack. Just silence. The kind that sits on your chest and dares you to move.\r
\r
I didn’t know how many times I’d checked the clock. Or stared at my phone screen, hoping for… what, exactly? A glitch in the date? A missed call from a name that didn’t exist?\r
\r
None came.\r
\r
I kept replaying the moment I woke up.\r
The rush of cold. The weightless dread.\r
The feeling of being yanked upward through layers of something warm and human into a place too sharp, too flat.\r
\r
But dreams fade.\r
That’s what they do.\r
\r
And this one had been clinging on longer than it should’ve.\r
\r
I sat on the floor, back against the couch, knees drawn in. My laptop was still open on the table, Microsoft Teams pinging softly with unread messages I had no intention of responding to.\r
\r
Team Sync - Rescheduled to Tomorrow 10AM.\r
 Ticket 2318 assigned to you.\r
 Please review the Q2 notes before end of day.\r
\r
They may as well have been in another language.\r
\r
I closed the laptop without looking.\r
\r
I knew what I needed to do.\r
\r
I had to come back.\r
Fully.\r
Mentally. Physically. Emotionally.\r
\r
I had to remind myself that this was real.\r
Not the red-brick university.\r
Not the art posters or lazy afternoon light.\r
Not Larry.\r
Not that girl I never even spoke to.\r
\r
It was just a dream.\r
\r
A vivid, cruel dream.\r
One that gave me a week of borrowed joy before dropping me back into the same gray hallway I’d spent the last year trying not to stare down.\r
\r
I stood up and made a list. Literally.\r
\r
Titled it "Things I Know Are Real".\r
\r
Rent is due Friday.\r
The kettle leaks slightly when overfilled.\r
There’s a crack in the mirror above the bathroom sink.\r
My mother texts every Sunday around noon, even when I forget to reply.\r
Teams meetings happen whether I show up or not.\r
I stared at the list for a long time.\r
Then added one more.\r
\r
I am here. Now.\r
I read it again. Out loud. Like that would make it truer.\r
\r
It helped. A little.\r
Like grabbing onto something solid during turbulence.\r
\r
That night, I turned off the lights early. Not to sleep. Just to sit in the dark.\r
\r
And when I finally climbed into bed — I didn’t expect to wake up anywhere else.\r
\r
For the first time since that strange morning in the hospital, I let go of the possibility.\r
\r
I stopped hoping for a slip in logic.\r
Stopped expecting to open my eyes and find yellow curtains, a cracked mug, and the hush of another life waiting.\r
\r
It was over.\r
\r
It was a dream.\r
\r
I repeated that in my head like a mantra.\r
\r
It was a dream. It was just a dream.\r
\r
And eventually, I fell asleep.\r
\r
Not with longing.\r
Not with hope.\r
\r
Just tired acceptance.\r
\r
—---------------------x—---------------------\r
\r
\r
\r
Days passed.\r
\r
Not all at once. Just enough to make them indistinguishable.\r
\r
I worked. Answered emails. Nodded through Teams meetings with the mic muted and the camera off. Typed updates into ticket threads I barely read. Ate the same meals I always did. Took showers at the same hour. Walked from the desk to the bed and back like a wind-up toy with no wind left.\r
\r
Nothing happened.\r
\r
And maybe that was the point.\r
\r
The first night back, I lay in bed wide-eyed, half-expecting the world to flicker and fall away again.\r
It didn’t.\r
\r
The second night, I tried to will myself into it. Closed my eyes, slowed my breathing, visualized every detail I could remember — the university buildings, the smell of the apartment, the faint curve of her smile.\r
\r
Still nothing.\r
\r
The third night, I didn’t try.\r
The fourth, I barely remembered the dream at all.\r
\r
By the fifth, I stopped checking.\r
\r
Stopped hoping.\r
Stopped wondering if it had meant something.\r
\r
Because I was still here.\r
\r
The real world didn’t wait for grief. It didn’t care that I’d found something better. It simply filled in the silence with meetings and takeout receipts and leftover laundry I couldn’t remember wearing.\r
\r
Eventually, I began to move like I used to — same bus stop, same dinner playlist, same everything. Not because I wanted to.\r
\r
Because the mind is good at forgetting what it can’t have.\r
\r
\r
That night, I brushed my teeth, folded the blanket down, turned off the light, and got into bed.\r
\r
No anticipation.\r
No second thoughts.\r
\r
Just tired limbs and a blank mind.\r
\r
I set the alarm. Plugged in my phone. Rolled over.\r
\r
Sleep came quietly.\r
\r
And this time, I didn’t expect anything else.\r
`,_x=`I woke to stillness.\r
\r
No blaring alarm. No ceiling fan. No gray light bleeding through the curtains.\r
\r
Just warmth.\r
Soft sheets.\r
Faint birdsong beyond a window I hadn’t heard in days.\r
\r
My eyes stayed closed.\r
\r
Because this wasn’t possible.\r
\r
Because I had let it go. Had accepted it. Told myself it was over, that it wasn’t real, that it couldn’t be real. That was the rule, right? You don’t get to lose something and then just… find it waiting.\r
\r
But I knew this bed.\r
\r
I knew the scent of lemon and dust in the air.\r
\r
I knew the quiet hum of the fridge, the faint buzz of the window light.\r
\r
I opened my eyes.\r
\r
The same ceiling. The same cheap fan that never turned.\r
My phone on the nightstand, still at 23% battery.\r
The mug with the faint stain.\r
The crumpled hoodie on the back of the chair.\r
\r
Exactly how I’d left it.\r
\r
Time hadn’t moved.\r
\r
This world — this place — had been waiting.\r
\r
I sat up slowly, as if movement might break the illusion.\r
\r
My heart was hammering, but everything else was still. The kind of stillness you only feel once — when you’re alone, but the silence doesn’t feel empty. When it feels like something is watching. Or listening.\r
\r
And then—\r
\r
Tears.\r
\r
Not sobs. No broken voice. Just… wetness on my face.\r
\r
I touched my cheek, confused. Blinked. Another tear slid down.\r
\r
Why was I crying?\r
\r
This wasn’t real.\r
\r
This was just a dream. Just something my mind stitched together from want and regret and exhaustion. It didn’t deserve this kind of grief. Or relief. Or whatever this feeling was crawling out of me like something long buried finally remembered how to breathe.\r
\r
I sat on the edge of the bed, staring at the floor, hands hanging between my knees.\r
\r
The air was warm. The world was quiet.\r
\r
And I didn’t move.\r
\r
Because if I did, if I stood up and started walking, I might admit to myself what I already knew:\r
\r
That I wasn’t happy to be back.\r
That I was relieved.\r
That this place — this impossible fragment of a life — meant more to me than anything I had left behind.\r
And I didn’t even know why.\r
\r
\r
I moved slowly.\r
\r
Every step felt like testing the edge of a frozen lake — like the floor might vanish beneath me if I trusted it too much.\r
\r
I touched the wall first. Just placed my hand flat against it. Rough paint. A little cool.\r
\r
Then the doorframe. The table. The chipped mug still sitting near the sink.\r
\r
All of it was just… here.\r
\r
Not a memory. Not a hallucination. It didn’t flicker when I turned away. It didn’t shift into something else when I blinked.\r
\r
I walked to the window and opened it.\r
\r
Air rushed in — warm, sweet with dust and early sun. Somewhere outside, a bus groaned to a stop and a bird chirped once, sharp and cheerful.\r
\r
I leaned on the frame. The sill pressed solidly into my arms.\r
\r
It was all still here.\r
\r
The light through the buildings. The sound of someone unlocking a bike chain. A breeze nudging the curtain like a friend who didn’t know how to say hello.\r
\r
I let my eyes drift closed.\r
\r
It didn’t feel like a dream.\r
It felt like a place I had come home to.\r
\r
The phone rang.\r
\r
It startled me. I nearly knocked the mug over reaching for it.\r
\r
Larry lit up the screen.\r
\r
I hesitated a second. Then answered.\r
\r
“Hey,” he said, voice casual, already halfway into a thought. “You ghosted after class yesterday. Didn’t even text. Thought maybe you passed out on the floor again or something.”\r
\r
A small, dumb laugh escaped me. “No, I’m good. Just needed to crash, I think.”\r
\r
“Fair. You looked like you got hit by a bus emotionally. Or, like, spiritually.”\r
\r
“Yeah. That’s… not wrong.”\r
\r
“You wanna grab lunch after class today? Usual spot?”\r
\r
“Yeah. Sounds good.”\r
\r
“Cool. Later.”\r
\r
He hung up before I could say goodbye. That was just his rhythm.\r
\r
I stared at the screen a moment longer before setting it down. The room felt different now. Brighter, somehow. Like someone had turned up the saturation on everything by just a few percent.\r
\r
Not enough to be obvious.\r
Just enough to feel alive.\r
\r
I walked back to the window and leaned on it again.\r
\r
For a while, I said nothing. Thought nothing.\r
\r
I didn’t know why this was happening.\r
Didn’t know what rule I had broken or what law of physics I had slipped through.\r
\r
Maybe I really was dreaming.\r
Maybe I’d finally snapped, and my mind was playing a long con.\r
Maybe I’d wake up again tomorrow with none of this left.\r
\r
But for now… I was here.\r
\r
And for now… that was enough.\r
\r
If this was a lie —\r
a kindness my brain conjured to soften the fall —\r
then I would let it.\r
\r
Because even if it wasn’t real…\r
\r
It felt better than anything that ever was.\r
\r
And for the first time, I didn’t ask how long it would last.\r
\r
I just let myself enjoy it.\r
`,Tr={name:"Kireet Gannavarapu",titles:["Architect of Interactive Worlds"],summary:["Game developer, designer, and narrative technologist blending systems thinking with story craft.","From Unreal and Unity to AI-driven storytelling, I build experiences where design, code, and emotion meet.","Ex-SDET who stress-tests mechanics as hard as code to keep every interaction resilient and intentional."],actions:[{label:"Game Development",href:"#game-projects"},{label:"AI & Web Projects",href:"#other-projects",variant:"secondary"},{label:"3D Artwork",href:"#artworks",variant:"secondary"},{label:"Personal Novels",href:"/novels",variant:"secondary"}]},Fx=[{title:"Game Development",description:"Unity, Unreal Engine, VR (Oculus, SteamVR), Blender, Maya",tools:["Unity","Unreal Engine","VR (Oculus, SteamVR)","Blender","Maya"]},{title:"AI & Machine Learning",description:"Reinforcement Learning, Predictors, Recommender Systems, Digital Image Processing, Natural Language Processing",tools:["Reinforcement Learning","Predictors","Recommender Systems","Digital Image Processing","Natural Language Processing"]},{title:"Web Development",description:"Django, React, HTML, CSS, Javscript, jQuery, Node.js, Express.js, MySQL, MongoDB",tools:["Django","React","HTML","CSS","Javscript","jQuery","Node.js","Express.js","MySQL","MongoDB"]},{title:"Programming",description:"Python, C#, C++, UE5 Blueprints, Java",tools:["Python","C#","C++","UE5 Blueprints","Java"]},{title:"DevOps & Automation",description:"Azure, Docker, Selenium, Scrapy, Command Line Automation",tools:["Azure","Docker","Selenium","Scrapy","Command Line Automation"]},{title:"Version Control",description:"Git, GitHub",tools:["Git","GitHub"]}],Hx=[{text:"+1(765)4098813",href:"tel:+17654098813"},{text:"Kireet.gannavarapu@gmail.com",href:"mailto:Kireet.gannavarapu@gmail.com"},{text:"GitHub",href:"https://github.com/Ayano"},{text:"LinkedIn",href:"https://www.linkedin.com/in/kireet-gannavarapu/"},{text:"Resume",href:"https://drive.google.com/file/d/10d5bNcj3dKnL9rEC9cmUzyC2gxwx1cFE/view?usp=sharing"}],ta={eyebrow:"Personal Novels",title:"Personal Novels",description:"Browse the shelf, select a book, and open individual chapters right here on the site."},Ec=[{id:"impostors-love",title:"Impostor's Love",subtitle:"A Fantasy Romance Story",chapters:[{id:"impostors-love-chapter-1",title:"Chapter 1",body:Dx},{id:"impostors-love-chapter-2",title:"Chapter 2",body:Vx},{id:"impostors-love-chapter-3",title:"Chapter 3",body:Bx},{id:"impostors-love-chapter-4",title:"Chapter 4",body:zx},{id:"impostors-love-chapter-5",title:"Chapter 5",body:Ox},{id:"impostors-love-chapter-6",title:"Chapter 6",body:_x}]},{id:"shrine-silent-hope",title:"Shrine: Silent Hope",subtitle:"A Romance Horror Story",chapters:[{id:"shrine-silent-hope-chapter-1",title:"Chapter 1",body:Lx}]}],Ux=[{id:"purdue-arg",title:"WebGame - Purdue Alternate Reality",video:"https://www.youtube.com/embed/BeN-R7UKJyY",summary:"A professor vanishes on campus and an investigation unravels AI conspiracies buried in Purdue's systems. This web ARG promoted AI education at Purdue and was showcased at the Google AI Summit 2024.",role:"Full Stack Developer",team:"3",duration:"4 months",skillTags:["React","Node.js","Express.js","MongoDB"],highlights:["Save-based progression with file decryption mechanics","Multi-page puzzles and timed decision-making","Story-driven level design with AI integration clues"],repo:"https://github.com/AyanoKen/ARG-Game",images:["/projects/ARG/GameScreenshot1.png","/projects/ARG/GameScreenshot2.png","/projects/ARG/GameScreenshot3.png","/projects/ARG/GameScreenshot4.png"]},{id:"his-life",title:"His Life - Unreal Engine 5",video:"https://www.youtube.com/embed/_0ek0nY1bs4",summary:"Narrative adventure puzzler where each memory unlocks a new movement system and interaction style across an open cave world.",role:"Creative Director, Programmer, Environment Artist",team:"10",duration:"3 months",skillTags:["Unreal Engine","UE5 Blueprints","C++"],highlights:["Three distinct movement systems tied to narrative beats","Open-world cave exploration with layered puzzle logic","Directed tone and pacing to match emotional arcs"],repo:"https://github.com/dmwhittinghill/cgt555spr24final",images:["/projects/HisLife/GameScreenshot1.png","/projects/HisLife/GameScreenshot2.png","/projects/HisLife/GameScreenshot3.png","/projects/HisLife/GameScreenshot4.png"]},{id:"digimon-tcg",title:"Unity - TCG Engine",video:"https://www.youtube.com/embed/eHd1UCbCS3c",summary:"Non-commercial Digimon TCG simulation focused on modular engine design, multiplayer readiness, and automated rules.",role:"Solo Developer",team:"1",duration:"8 weeks",skillTags:["Unity","C#"],highlights:["Online PvP-ready architecture with syncable turn logic","Automated plays: digivolution chains, triggers, passives, battle resolution","Data-driven card loading with scalable keyword and conditional effect system"],repo:"https://github.com/AyanoKen/DigimonTCG",images:["/projects/TCG/GameScreenshot1.png","/projects/TCG/GameScreenshot2.png","/projects/TCG/GameScreenshot3.png","/projects/TCG/GameScreenshot4.png"]},{id:"dexters-game",title:"Unreal Engine VR - Dexter's Game",video:"https://www.youtube.com/embed/zGtszny-JAM",summary:"Story-driven VR escape room where tension, narrative puzzles, and time pressure layer into a horror atmosphere.",role:"Solo Developer",team:"1",duration:"1 month",skillTags:["Unreal Engine","UE5 Blueprints","C++","VR (Oculus, SteamVR)"],highlights:["Environmental storytelling with escalating audio-visual tension","Interactive puzzle logic under timed pressure","Fully immersive VR escape flow tuned for dread"],repo:"https://github.com/AyanoKen/VREscapeRoom",images:["/projects/VREscapeRoom/GameScreenshot1.png","/projects/VREscapeRoom/GameScreenshot2.png","/projects/VREscapeRoom/GameScreenshot3.png","/projects/VREscapeRoom/GameScreenshot4.png","/projects/VREscapeRoom/GameScreenshot5.png"]},{id:"echoes-of-war",title:"Unity VR - Echoes of War",video:"https://www.youtube.com/embed/mHBEyzFZqeY",summary:"VR museum experience reflecting on the human cost of conflict through symbolic rooms, ambience, and voiceovers.",role:"Solo Developer",team:"1",duration:"6 weeks",skillTags:["Unity","C#","VR (Oculus, SteamVR)"],highlights:["Unity XR build with room-by-room narrative progression","Symbolic props and soundscapes for empathy-driven pacing","Games for Change-aligned design to provoke reflection"],repo:"https://github.com/AyanoKen/VR_Museum",images:["/projects/VrMuseum/GameScreenshot1.png","/projects/VrMuseum/GameScreenshot2.png","/projects/VrMuseum/GameScreenshot3.png","/projects/VrMuseum/GameScreenshot4.png","/projects/VrMuseum/GameScreenshot5.png"]},{id:"vr-unpacking",title:"Unreal Engine - VR Unpacking",video:"https://www.youtube.com/embed/qxm1qLjEVRU",summary:"VR customization vignette set in a cryo-chamber, focused on tactile object interaction and personalizing sterile space.",role:"Solo Developer",team:"1",duration:"1 week",skillTags:["Unreal Engine","UE5 Blueprints","VR (Oculus, SteamVR)"],highlights:["Full VR grabbing, rotation, and snap-to-fit logic","Randomized item pools for varied setups","Custom placement mechanics to make the chamber feel lived-in"],repo:"https://github.com/AyanoKen/VRUnpacking",images:["/projects/VRUnpacking/GameScreenshot1.png","/projects/VRUnpacking/GameScreenshot2.png","/projects/VRUnpacking/GameScreenshot3.png","/projects/VRUnpacking/GameScreenshot4.png","/projects/VRUnpacking/GameScreenshot5.png"]},{id:"pathways",title:"Unity Engine - PathWays",video:"https://www.youtube.com/embed/ktMj86VMTqs",summary:"LLM-powered choose-your-own-adventure that writes and illustrates itself in real time with Leonardo AI art.",role:"Tech Lead, Developer",team:"3",duration:"1 month",skillTags:["Unity","C#"],highlights:["Integrated GPT APIs for adaptive, branching storytelling","Real-time AI artwork generation for each beat","Custom UI for seamless choice navigation"],repo:"https://github.com/AyanoKen/Pathways",images:["/projects/PathWays/GameScreenshot1.png","/projects/PathWays/GameScreenshot2.png","/projects/PathWays/GameScreenshot3.png","/projects/PathWays/GameScreenshot4.png"]},{id:"get-out",title:"Unity - Get Out",video:"https://www.youtube.com/embed/LwF2nFlZP40",summary:"A brutal maze platformer packed with decoys, loops, and traps designed to break player memory and pathing.",role:"Solo Developer",team:"1",duration:"2 weeks",skillTags:["Unity","C#"],highlights:["Large multi-path maze with misdirection and red herrings","Custom enemy and trap logic with animation state machines","Physics-driven 2D platforming tuned for punishment and mastery"],repo:"https://github.com/AyanoKen/Impossible-Maze",images:["/projects/Maze/GameScreenshot1.png","/projects/Maze/GameScreenshot2.png","/projects/Maze/GameScreenshot3.png","/projects/Maze/GameScreenshot4.png"]},{id:"budget-fallguys",title:"Unreal Engine - Budget FallGuys",video:"https://www.youtube.com/embed/Bzm6P4sLhBs",summary:"Chaotic obstacle course inspired by Fall Guys—built from scratch with physics-based traps and ragdoll collisions.",role:"Solo Developer",team:"1",duration:"1 week",skillTags:["Unreal Engine","UE5 Blueprints","C++"],highlights:["Custom obstacle logic with physics triggers and ragdolls","Third-person camera with checkpointed respawns","Deliberately unfair pacing to keep runs energetic"],repo:"https://github.com/AyanoKen/BudgetFallguys",images:["/projects/FallGuys/GameScreenshot1.png","/projects/FallGuys/GameScreenshot2.png","/projects/FallGuys/GameScreenshot3.png","/projects/FallGuys/GameScreenshot4.png","/projects/FallGuys/GameScreenshot5.png"]},{id:"forest-of-dead",title:"Unity Engine - Forest of the Dead",video:"https://www.youtube.com/embed/HqGPUR88oTQ",summary:"Open-world zombie survival FPS focused on ammo scarcity, stealth-or-sprint choice, and relentless AI pursuit.",role:"Solo Developer",team:"1",duration:"4 weeks",skillTags:["Unity","C#"],highlights:["Multiple firearm systems with manual reload and scarcity tuning","AI with patrols, FOV detection, and pursuit behavior","Nonlinear world design that layers tension and storytelling"],repo:"https://github.com/AyanoKen/Forest-of-Dead"}],Wx=[{title:"Bio Inspired Neural Network",description:"Grey Wolf Optimizer applied to neural networks for meta-heuristic training improvements.",repo:"https://github.com/AyanoKen/Bioinspired-Neural-Network"},{title:"Brain Tumor Detection",description:"Digital image processing + ML pipeline for tumor detection on medical imagery.",repo:"https://github.com/AyanoKen/Brain-Tumor-Detection"},{title:"Recommender System",description:"News recommender built with NLP-driven similarity and ranking.",repo:"https://github.com/AyanoKen/Recommender-System"},{title:"Tsundoku",description:"E-magazine experience for my university's literature club.",repo:"https://github.com/AyanoKen/E-Magazine"},{title:"Purdue Alternate Reality Game",description:"ARG marketing site for Purdue x Google AI Summit 2024.",repo:"https://github.com/AyanoKen/ARG-Game"},{title:"MMO Mart",description:"Marketplace backend for MMO items built with Node.js and MongoDB.",repo:"https://github.com/AyanoKen/MMO-Market"},{title:"Nova Drift - UX Study",description:"UX and UI teardown of the early access game Nova Drift.",repo:"https://github.com/AyanoKen/UX-Study-NovaDrift"},{title:"Weather App",description:"Mobile weather forecast app built with Dart.",repo:"https://github.com/AyanoKen/Weather-App"},{title:"Code Vein - UX Study",description:"UX analysis of Code Vein with actionable interface notes.",repo:"https://github.com/AyanoKen/Code-Vein-UX-Analysis"}],Kx={hidden:{},visible:{transition:{...xx}}},Gx={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:ft.default}};function $x(){const e=x.useRef(null),{scrollYProgress:t}=hx({target:e,offset:["start start","end start"]});Tc(t,[0,1],[0,-160]),Tc(t,[0,1],[0,-80]);const{tokens:n}=Ve();return y.jsx(fr,{id:"hero",className:"relative min-h-screen pt-32",children:y.jsxs("div",{ref:e,className:"relative flex flex-col gap-16 lg:flex-row",children:[y.jsxs("div",{className:"relative z-10 flex-1 space-y-10",children:[y.jsx("div",{className:"flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.4em]",style:{color:n.textMuted},children:Tr.titles.map(r=>y.jsx("span",{children:r},r))}),y.jsxs("div",{className:"space-y-8",children:[y.jsx(Pg,{lines:[Tr.name],as:"h1",className:"text-5xl font-semibold uppercase leading-[1.1] sm:text-6xl lg:text-7xl",style:{color:n.textPrimary}}),y.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.5em]",style:{color:n.textMuted},children:Tr.titles.join(" | ")}),y.jsx("div",{className:"max-w-2xl space-y-4 text-lg lg:text-xl",style:{color:n.textSecondary},children:Tr.summary.map(r=>y.jsx("p",{children:r},r))})]}),y.jsx(H.div,{className:"flex flex-wrap gap-4",variants:Kx,initial:"hidden",animate:"visible",children:Tr.actions.map(r=>y.jsx(H.div,{variants:Gx,children:y.jsx(Xn,{as:"a",href:r.href,variant:r.variant??"primary",children:r.label})},r.label))})]}),y.jsx("div",{className:"relative flex-1"})]})})}function xi({eyebrow:e,title:t,description:n}){const{tokens:r}=Ve();return y.jsxs("div",{className:"mb-12 space-y-5",children:[e&&y.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.6em]",style:{color:r.eyebrow},children:e}),y.jsx(Pg,{lines:t.split("|").map(i=>i.trim()),as:"h2",className:"text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",style:{color:r.textPrimary}}),n&&y.jsx("p",{className:"text-lg lg:max-w-2xl",style:{color:r.textSecondary},children:n})]})}function Yx(){const{tokens:e}=Ve();return y.jsxs(fr,{id:"skills",children:[y.jsx(xi,{eyebrow:"Technical Skills",title:"Technical Skills"}),y.jsx("div",{className:"grid gap-8 md:grid-cols-2",children:Fx.map(t=>y.jsx(or,{children:y.jsxs(H.div,{className:"flex h-full flex-col",initial:It.fadeSlideUp.hidden,whileInView:It.fadeSlideUp.visible,viewport:{once:!0,margin:"-10%"},children:[y.jsx("p",{className:"text-sm uppercase tracking-[0.4em]",style:{color:e.eyebrow},children:t.title}),y.jsx("p",{className:"mt-4 text-xl font-semibold",style:{color:e.textPrimary},children:t.description}),y.jsx("div",{className:"mt-8 flex flex-wrap gap-2",children:t.tools.map(n=>y.jsx("span",{className:"rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em]",style:{border:`1px solid ${e.chipBorder}`,color:e.textSecondary,background:e.chipBackground},children:n},n))})]})},t.title))})]})}function Xx(){const{tokens:e}=Ve(),[t,n]=x.useState(null),[r,i]=x.useState([]);return y.jsxs(fr,{id:"game-projects",children:[y.jsx(xi,{title:"Game Development",description:"Flagship projects across Unreal and Unity with a focus on narrative, systems design, and resilient engineering."}),y.jsx("div",{className:"space-y-10",children:Ux.map(o=>{var s;return y.jsx(or,{children:y.jsx(H.div,{className:"space-y-6",initial:It.fadeSlideUp.hidden,whileInView:It.fadeSlideUp.visible,viewport:{once:!0,margin:"-10%"},children:y.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.15fr_1fr]",children:[y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"relative overflow-hidden rounded-2xl border shadow-xl",style:{borderColor:e.cardBorder,background:e.cardBackground},children:[y.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(transparent 92%, rgba(255,255,255,0.06) 92%), linear-gradient(90deg, transparent 92%, rgba(255,255,255,0.06) 92%)",backgroundSize:"48px 48px",opacity:.25,mixBlendMode:"screen"}}),y.jsx(H.div,{className:"pointer-events-none absolute inset-0",style:{background:`radial-gradient(circle at 20% 20%, ${e.accentSoft}, transparent)`},animate:{opacity:[.15,.3,.15]},transition:{duration:6,repeat:1/0}}),y.jsx(qx,{src:o.video,title:o.title})]}),(s=o.images)!=null&&s.length?y.jsx(eT,{images:o.images,tokens:e,onSelect:a=>{i(o.images),n(a)}}):null]}),y.jsxs("div",{className:"flex flex-col space-y-4",children:[y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx(na,{tokens:e,children:o.role}),Number(o.team)!==1&&y.jsxs(na,{tokens:e,children:["Team Size ",o.team]}),y.jsx(na,{tokens:e,children:o.duration})]}),y.jsx("h3",{className:"text-3xl font-semibold",style:{color:e.textPrimary},children:o.title}),y.jsx("p",{className:"text-base leading-relaxed",style:{color:e.textSecondary},children:o.summary}),y.jsx("ul",{className:"space-y-2 text-sm leading-relaxed",style:{color:e.textSecondary},children:o.highlights.map(a=>y.jsxs("li",{className:"flex gap-2",children:[y.jsx("span",{style:{color:e.accent},children:"-"}),y.jsx("span",{children:a})]},a))}),o.repo&&y.jsxs("div",{className:"flex items-center gap-3 pt-1",children:[y.jsx(Xn,{as:"a",href:o.repo,target:"_blank",rel:"noreferrer",children:"GitHub Repo"}),y.jsx("div",{className:"h-px flex-1",style:{background:`linear-gradient(90deg, ${e.cardBorder}, transparent)`}})]}),y.jsx(Qx,{project:o,tokens:e})]})]})})},o.id)})}),y.jsx(Zx,{src:t,images:r,onClose:o=>{if(o&&o.nextSrc){n(o.nextSrc);return}n(null),i([])},tokens:e})]})}function qx({src:e,title:t}){const n=x.useMemo(()=>{try{const r=new URL(e);return r.searchParams.set("rel","0"),r.searchParams.set("controls","1"),r.searchParams.set("playsinline","1"),r.searchParams.set("mute","1"),r.searchParams.delete("autoplay"),r.toString()}catch{return e}},[e]);return y.jsx("div",{className:"aspect-video w-full overflow-hidden rounded-xl",children:y.jsx("iframe",{src:n,title:t,className:"h-full w-full",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0,loading:"lazy"})})}function na({children:e,tokens:t}){return y.jsx("span",{className:"inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] shadow-lg",style:{color:t.accentContrast,background:t.buttonGradient,border:`1px solid ${t.buttonBorder}`,boxShadow:t.buttonShadow},children:e})}function Qx({project:e,tokens:t}){const n=Jx(e);return n.length?y.jsx("div",{className:"mt-3 flex flex-wrap gap-2 rounded-2xl border p-3 text-xs uppercase tracking-[0.2em]",style:{borderColor:t.cardBorder,background:t.cardBackground},children:n.map(r=>y.jsx("div",{className:"rounded-xl px-3 py-2",style:{color:t.textPrimary,background:t.buttonSecondaryBg,border:`1px solid ${t.cardBorder}`},children:r},r))}):null}function Jx(e){var i,o;if((i=e.skillTags)!=null&&i.length)return e.skillTags.slice(0,8);const t=`${e.title||""} ${e.summary||""} ${((o=e.highlights)==null?void 0:o.join(" "))||""}`.toLowerCase(),n=[],r=(s,a)=>{n.includes(s)||a(t)&&n.push(s)};return r("Unity",s=>s.includes("unity")),r("Unreal Engine",s=>s.includes("unreal")),r("VR (Oculus, SteamVR)",s=>s.includes("vr")),r("C#",s=>s.includes("unity")),r("C++",s=>s.includes("unreal")),r("UE5 Blueprints",s=>s.includes("unreal")||s.includes("blueprint")),r("React",s=>s.includes("web")||s.includes("react")),r("Node.js",s=>s.includes("node")||s.includes("server")),r("Express.js",s=>s.includes("express")),r("MongoDB",s=>s.includes("mongo")),n.slice(0,6)}function Zx({src:e,images:t=[],onClose:n,tokens:r}){if(!e)return null;const i=t.length>1,o=i?t.indexOf(e):-1,s=a=>{if(!i)return;const l=(o+a+t.length)%t.length;n==null||n({keepOpen:!0,nextSrc:t[l]})};return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6",onClick:n,role:"presentation",children:y.jsxs("div",{className:"relative max-h-[90vh] max-w-5xl",onClick:a=>a.stopPropagation(),role:"presentation",children:[y.jsx("button",{type:"button",onClick:n,className:"absolute -right-3 -top-3 rounded-full bg-black/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-black",style:{border:`1px solid ${r.cardBorder}`},children:"Close"}),i&&y.jsxs(y.Fragment,{children:[y.jsx("button",{type:"button",onClick:a=>{a.stopPropagation(),s(-1)},className:"absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-black",style:{border:`1px solid ${r.cardBorder}`},children:"Prev"}),y.jsx("button",{type:"button",onClick:a=>{a.stopPropagation(),s(1)},className:"absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-black",style:{border:`1px solid ${r.cardBorder}`},children:"Next"})]}),y.jsx("img",{src:e,alt:"Expanded project still",className:"max-h-[90vh] max-w-5xl rounded-2xl object-contain shadow-2xl",loading:"lazy"})]})})}function eT({images:e,tokens:t,onSelect:n}){const[r,i]=x.useState(0),o=e.length,s=e[r]??e[0],a=5200;if(!o)return null;const l=u=>i(h=>(h+u+o)%o);return x.useEffect(()=>{if(o<=1)return;const u=setInterval(()=>i(h=>(h+1)%o),a);return()=>clearInterval(u)},[o]),y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"group relative overflow-hidden rounded-2xl",style:{background:t.cardBackground,perspective:"1200px"},children:[y.jsx(H.div,{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(transparent 94%, rgba(255,255,255,0.05) 94%), linear-gradient(90deg, transparent 94%, rgba(255,255,255,0.05) 94%)",backgroundSize:"52px 52px",mixBlendMode:"screen"},animate:{opacity:[.1,.25,.1]},transition:{duration:7,repeat:1/0}}),y.jsx(H.div,{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1",style:{background:`linear-gradient(90deg, transparent, ${t.accent}, transparent)`},animate:{x:["-30%","130%"]},transition:{duration:3.8,repeat:1/0,ease:"easeInOut"}}),y.jsx(Kp,{mode:"wait",children:y.jsxs(H.div,{style:{transformStyle:"preserve-3d"},initial:{opacity:0,scale:.9,rotateX:-18,rotateY:8,filter:"blur(10px)",y:12},animate:{opacity:1,scale:1,rotateX:0,rotateY:0,filter:"blur(0px)",y:0},exit:{opacity:0,scale:1.08,rotateX:14,rotateY:-6,filter:"blur(14px)",y:14},transition:{duration:.7,ease:[.77,0,.18,1]},children:[y.jsx(H.div,{className:"pointer-events-none absolute inset-0",style:{background:`linear-gradient(120deg, transparent 40%, ${t.accentSoft}, transparent 60%)`,mixBlendMode:"screen"},initial:{x:"-120%",opacity:0},animate:{x:"120%",opacity:[0,.5,0]},transition:{duration:.9,ease:"easeInOut"}},`sweep-${s}`),y.jsx(Rx,{src:s,alt:"Project still",className:"aspect-[16/9] w-full",overlayClass:"opacity-10 mix-blend-screen",imageClassName:"object-contain p-4",radiusClass:"rounded-2xl",bordered:!1,onClick:()=>n==null?void 0:n(s)})]},s)}),o>1&&y.jsxs(y.Fragment,{children:[y.jsx("button",{type:"button",onClick:()=>l(-1),className:"absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-300 hover:bg-black/70 group-hover:opacity-100",children:"Prev"}),y.jsx("button",{type:"button",onClick:()=>l(1),className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-300 hover:bg-black/70 group-hover:opacity-100",children:"Next"})]})]}),o>1&&y.jsx("div",{className:"flex items-center justify-center gap-2",children:e.map((u,h)=>y.jsx("button",{type:"button",onClick:()=>i(h),className:"h-2.5 w-2.5 rounded-full transition",style:{background:h===r?t.accent:t.cardBorder,boxShadow:h===r?`0 0 12px ${t.accentSoft}`:"none"},"aria-label":`Go to image ${h+1}`},h))})]})}function tT(){const{tokens:e}=Ve();return y.jsxs(fr,{id:"other-projects",children:[y.jsx(xi,{eyebrow:"AI & Web",title:"AI Projects | Web & Tools",description:"Broader engineering work that powers research, backend, UX studies, and utility builds."}),y.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:Wx.map(t=>y.jsx(or,{children:y.jsxs(H.div,{className:"flex h-full flex-col gap-4",initial:It.fadeSlideUp.hidden,whileInView:It.fadeSlideUp.visible,viewport:{once:!0,margin:"-15%"},children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("p",{className:"text-xs uppercase tracking-[0.35em]",style:{color:e.eyebrow},children:t.category??"Project"}),y.jsx("h3",{className:"text-xl font-semibold",style:{color:e.textPrimary},children:t.title}),y.jsx("p",{className:"text-sm leading-relaxed",style:{color:e.textSecondary},children:t.description})]}),t.repo&&y.jsx("div",{className:"mt-auto",children:y.jsx(Xn,{as:"a",href:t.repo,target:"_blank",rel:"noreferrer",variant:"secondary",children:"View Source"})})]})},t.title))})]})}function nT(){const{tokens:e}=Ve();return y.jsx(fr,{id:"contact",className:"pb-32",children:y.jsx(or,{children:y.jsxs("div",{className:"space-y-10",children:[y.jsx(xi,{eyebrow:"Kireet Gannavarapu",title:"Game Developer|Game Designer|Game AI Engineer|SDET",description:"+1(765)4098813 | Kireet.gannavarapu@gmail.com | GitHub "}),y.jsx(H.div,{className:"grid gap-6 sm:grid-cols-2",initial:It.fadeSlideUp.hidden,whileInView:It.fadeSlideUp.visible,viewport:{once:!0,margin:"-20%"},children:Hx.map(t=>t.href?y.jsx("a",{href:t.href,target:"_blank",className:"rounded-2xl border p-4",style:{borderColor:e.cardBorder,color:e.textPrimary},children:y.jsx("p",{className:"text-xl font-semibold",children:t.text})},t.text):y.jsx("div",{className:"rounded-2xl border p-4",style:{borderColor:e.cardBorder,color:e.textPrimary},children:y.jsx("p",{className:"text-xl font-semibold",children:t.text})},t.text))})]})})})}function rT({children:e}){const[t,n]=x.useState(typeof window<"u"?window.location.pathname:"app-shell");return x.useEffect(()=>{if(typeof window>"u")return;const r=()=>n(window.location.pathname);return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[]),y.jsx(Kp,{mode:"wait",children:y.jsx(H.div,{initial:"initial",animate:"animate",exit:"exit",variants:Tx,children:e},t)})}const Ir={progress:"novel-progress",bookmarks:"novel-bookmarks"},iT=e=>{var r;const t=(r=e.chapters)==null?void 0:r[0];return t?t.body.split(`
`).map(i=>i.trim()).filter(Boolean).slice(0,4).join(" "):""};function oT(){var Ye;const{tokens:e}=Ve(),[t,n]=x.useState(null),[r,i]=x.useState(null),[o,s]=x.useState(0),[a,l]=x.useState({}),[u,h]=x.useState({}),[d,c]=x.useState(null),[g,w]=x.useState(!1),v=x.useRef(null),S=x.useRef(!1),p=x.useRef(null),f=x.useRef(null),m=x.useMemo(()=>Ec.find(M=>M.id===t)??null,[t]),k=x.useMemo(()=>(m==null?void 0:m.chapters.find(M=>M.id===r))??null,[m,r]);x.useEffect(()=>{const M=Cc(localStorage.getItem(Ir.progress))??{};l(M);const $=Cc(localStorage.getItem(Ir.bookmarks))??{};h($)},[]),x.useEffect(()=>{var M;if((M=m==null?void 0:m.chapters)!=null&&M.length){S.current=!0;const $=p.current;$?(i($.chapterId),c($.ratio??0)):(i(m.chapters[0].id),c(0)),s(0),p.current=null}else S.current=!0,i(null),s(0)},[m]),x.useEffect(()=>{const M=v.current;if(!M)return;const $=()=>{if(!v.current)return;const{scrollTop:Ne,scrollHeight:Oe,clientHeight:U}=v.current,C=Math.max(Oe-U,1),L=Math.max(4,U*.02),F=Ne+U>=Oe-L,ie=Oe-U>1,Tn=F?1:Math.min(1,Math.max(0,Ne/C));s(Tn),S.current&&(!ie||Ne>0)&&(S.current=!1)};return $(),M.addEventListener("scroll",$),()=>{M.removeEventListener("scroll",$)}},[k]),x.useEffect(()=>{v.current&&v.current.scrollTo({top:0,behavior:"auto"}),s(0)},[r]),x.useEffect(()=>{if(d==null||!v.current)return;const M=v.current,{scrollHeight:$,clientHeight:Ne}=M,Oe=Math.max($-Ne,1);M.scrollTo({top:d*Oe,behavior:"auto"}),c(null)},[d,r]),x.useEffect(()=>{S.current&&o<=.01&&(S.current=!1)},[o]),x.useEffect(()=>{S.current||o<.99||!t||!r||l(M=>{const $=new Set(M[t]??[]);if($.has(r))return M;$.add(r);const Ne={...M,[t]:Array.from($)};return localStorage.setItem(Ir.progress,JSON.stringify(Ne)),Ne})},[o,t,r]),x.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);const b=()=>{if(!t||!r)return;const M=u[t];if((M==null?void 0:M.chapterId)===r){const F={...u};delete F[t],h(F),localStorage.setItem(Ir.bookmarks,JSON.stringify(F)),f.current&&clearTimeout(f.current),w(!1);return}if(!v.current)return;const{scrollTop:Ne,scrollHeight:Oe,clientHeight:U}=v.current,C=Math.max(Oe-U,1),L=Math.min(1,Ne/C),D={...u,[t]:{chapterId:r,ratio:L}};h(D),localStorage.setItem(Ir.bookmarks,JSON.stringify(D)),w(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>w(!1),600)},T=t?u[t]:null,E=t&&r?(a[t]??[]).includes(r):!1,I=(T==null?void 0:T.chapterId)===r,V=I?"Remove bookmark":"Save bookmark",j=(M,{resumeBookmark:$}={})=>{S.current=!0,s(0),f.current&&clearTimeout(f.current),w(!1),$&&u[M]?p.current=u[M]:p.current=null,n(M)},re=()=>{S.current=!0,n(null),i(null),s(0),p.current=null,f.current&&clearTimeout(f.current),w(!1)};return y.jsx("main",{className:"relative z-10 flex flex-col gap-12 pb-24",children:y.jsxs(fr,{id:"novels",children:[y.jsx(xi,{eyebrow:ta.eyebrow,title:ta.title,description:ta.description}),m?y.jsx(or,{children:y.jsxs("div",{className:"space-y-8",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",style:{color:e.eyebrow},children:m.subtitle}),y.jsx("h3",{className:"mt-3 text-3xl font-semibold",style:{color:e.textPrimary},children:m.title}),y.jsx("p",{className:"mt-3 text-sm",style:{color:e.textSecondary},children:"Choose a chapter from the shelf and it will open on the right."})]}),y.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",children:[y.jsx("div",{className:"space-y-4",children:(Ye=m.chapters)==null?void 0:Ye.map(M=>y.jsxs("button",{type:"button",onClick:()=>{S.current=!0,s(0),i(M.id),c(0)},className:"flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.3em] transition-all duration-500",style:{borderColor:M.id===r?e.accentSoft:e.cardBorder,color:M.id===r?e.textPrimary:e.textSecondary,background:M.id===r?e.cardBackground:"transparent"},children:[y.jsx("span",{children:M.title}),(a[t]??[]).includes(M.id)&&y.jsx("span",{"aria-hidden":"true",className:"ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border-2",style:{color:e.accent,borderColor:e.accent},children:y.jsx("svg",{viewBox:"0 0 20 20",className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M5 10.5 8.5 14 15 6"})})})]},M.id))}),y.jsx("div",{children:k?y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsxs("p",{className:"text-xs uppercase tracking-[0.4em]",style:{color:e.eyebrow},children:["Reading Progress ",Math.round(o*100),"%"]}),y.jsx("div",{className:"mt-3 h-1.5 w-full rounded-full",style:{background:e.cardBorder},children:y.jsx("div",{className:"h-full rounded-full transition-all duration-300",style:{width:`${o*100}%`,background:e.accentSoft}})}),E&&y.jsx("p",{className:"mt-2 text-xs uppercase tracking-[0.4em] font-semibold",style:{color:e.textPrimary},children:"Chapter completed"})]}),y.jsx("pre",{ref:v,className:"novel-reader max-h-[70vh] overflow-y-auto rounded-2xl border p-6 text-sm leading-relaxed",style:{borderColor:e.cardBorder,color:e.textSecondary,background:e.cardBackground,whiteSpace:"pre-wrap","--novel-scroll-track":e.cardBorder,"--novel-scroll-thumb":e.accentSoft,"--novel-scroll-thumb-gradient":`linear-gradient(120deg, ${e.accentSoft}, ${e.accentSoft})`,"--novel-scroll-thumb-shadow":e.accentSoft},children:k.body}),y.jsx("div",{className:"flex flex-wrap gap-3",children:y.jsxs(Xn,{type:"button",variant:"ghost",onClick:b,"aria-label":V,title:V,className:"!px-4 !py-3",style:g||I?{background:e.accentSoft,color:e.accentContrast,borderColor:e.accent}:{},children:[y.jsx("span",{className:"sr-only",children:V}),y.jsx("svg",{viewBox:"0 0 20 20",className:"h-5 w-5",fill:I?"currentColor":"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:y.jsx("path",{d:"M5 3.5h10v14l-5-3.5-5 3.5z"})})]})})]}):y.jsx("div",{className:"flex h-full min-h-[320px] items-center justify-center rounded-2xl border text-sm",style:{borderColor:e.cardBorder,color:e.textSecondary},children:"Select a chapter to start reading."})})]}),y.jsx("div",{className:"flex flex-wrap gap-4",children:y.jsx(Xn,{type:"button",variant:"secondary",onClick:re,children:"Back to library"})})]})}):y.jsx("div",{className:"grid gap-8 lg:grid-cols-2",children:Ec.map(M=>y.jsxs(or,{className:"relative flex flex-col justify-between",children:[u[M.id]&&y.jsx("button",{type:"button",onClick:()=>j(M.id,{resumeBookmark:!0}),className:"absolute -top-3 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 bg-black/40 text-sm font-semibold uppercase transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",style:{color:e.accent,borderColor:e.accent,boxShadow:`0 0 12px ${e.accentSoft}`},"aria-label":"Resume bookmark",title:"Resume bookmark",children:y.jsx("svg",{viewBox:"0 0 20 20",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:y.jsx("path",{d:"M5 3.5h10v14l-5-3.5-5 3.5z"})})}),y.jsxs("div",{className:"space-y-4",children:[y.jsx("p",{className:"text-xs uppercase tracking-[0.4em]",style:{color:e.eyebrow},children:M.subtitle}),y.jsx("h3",{className:"text-2xl font-semibold",style:{color:e.textPrimary},children:M.title}),y.jsx("p",{className:"text-sm leading-relaxed",style:{color:e.textSecondary},children:iT(M)})]}),y.jsx("div",{className:"mt-6",children:y.jsx("div",{className:"flex flex-wrap gap-3",children:y.jsx(Xn,{type:"button",onClick:()=>j(M.id),children:"Open novel"})})})]},M.id))})]})})}function Cc(e){if(e)try{return JSON.parse(e)}catch{return}}function sT(){return y.jsx(Ax,{children:y.jsx(aT,{})})}function aT(){const{setTheme:e}=Ve();x.useEffect(()=>{const r=new pv({smoothWheel:!0,duration:1.1,easing:a=>1-Math.pow(1-a,3)});let i;const o=a=>{r.raf(a),i=requestAnimationFrame(o)};return i=requestAnimationFrame(o),new Date().getDate()%2===0?e("ares"):e("legacy"),()=>{cancelAnimationFrame(i),r.destroy()}},[e]);const{tokens:t}=Ve(),n=typeof window<"u"&&window.location.pathname.toLowerCase().includes("novels");return y.jsx(Av,{transition:ft.default,children:y.jsxs("div",{className:"relative min-h-screen overflow-hidden",style:{background:t.backgroundGradient,color:t.textPrimary},children:[y.jsx(Nx,{}),y.jsx("div",{className:"tron-overlay"}),y.jsx("div",{className:"tron-bars"}),y.jsx("div",{className:"pointer-events-none absolute inset-0 z-0 mix-blend-screen opacity-50",style:{backgroundImage:"repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 3px)",backgroundSize:"200px 200px, 200px 200px"}}),y.jsx("div",{className:"pointer-events-none absolute inset-0 z-0 mix-blend-screen opacity-35",style:{background:"radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 32%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08), transparent 28%)"}}),y.jsx("div",{className:"tron-trails"}),y.jsx("div",{className:"tron-bikes"}),y.jsx(rT,{children:n?y.jsx(oT,{}):y.jsxs("main",{className:"relative z-10 flex flex-col gap-24 pb-24",children:[y.jsx($x,{}),y.jsx(Xx,{}),y.jsx(tT,{}),y.jsx(Yx,{}),y.jsx(nT,{})]})})]})})}ra.createRoot(document.getElementById("root")).render(y.jsx(Yg.StrictMode,{children:y.jsx(sT,{})}));
