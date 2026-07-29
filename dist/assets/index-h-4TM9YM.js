(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function dM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k0={exports:{}},Rc={},O0={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),fM=Symbol.for("react.portal"),hM=Symbol.for("react.fragment"),pM=Symbol.for("react.strict_mode"),mM=Symbol.for("react.profiler"),gM=Symbol.for("react.provider"),vM=Symbol.for("react.context"),yM=Symbol.for("react.forward_ref"),xM=Symbol.for("react.suspense"),_M=Symbol.for("react.memo"),SM=Symbol.for("react.lazy"),Up=Symbol.iterator;function MM(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,V0={};function lo(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||B0}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H0(){}H0.prototype=lo.prototype;function Kf(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||B0}var qf=Kf.prototype=new H0;qf.constructor=Kf;z0(qf,lo.prototype);qf.isPureReactComponent=!0;var Fp=Array.isArray,G0=Object.prototype.hasOwnProperty,Zf={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:s,ref:o,props:r,_owner:Zf.current}}function EM(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function TM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kp=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TM(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case fM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+lu(o,0):i,Fp(r)?(n="",t!=null&&(n=t.replace(kp,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(Qf(r)&&(r=EM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+lu(s,a);o+=bl(s,e,n,l,r)}else if(l=MM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function wM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Rl={transition:null},AM={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Zf};function X0(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=lo;Be.Fragment=hM;Be.Profiler=mM;Be.PureComponent=Kf;Be.StrictMode=pM;Be.Suspense=xM;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AM;Be.act=X0;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=z0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G0.call(e,l)&&!j0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:vM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gM,_context:t},t.Consumer=t};Be.createElement=W0;Be.createFactory=function(t){var e=W0.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:yM,render:t}};Be.isValidElement=Qf;Be.lazy=function(t){return{$$typeof:SM,_payload:{_status:-1,_result:t},_init:wM}};Be.memo=function(t,e){return{$$typeof:_M,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};Be.unstable_act=X0;Be.useCallback=function(t,e){return en.current.useCallback(t,e)};Be.useContext=function(t){return en.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Be.useEffect=function(t,e){return en.current.useEffect(t,e)};Be.useId=function(){return en.current.useId()};Be.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return en.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Be.useRef=function(t){return en.current.useRef(t)};Be.useState=function(t){return en.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return en.current.useTransition()};Be.version="18.3.1";O0.exports=Be;var ve=O0.exports;const CM=dM(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bM=ve,RM=Symbol.for("react.element"),PM=Symbol.for("react.fragment"),DM=Object.prototype.hasOwnProperty,LM=bM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IM={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)DM.call(e,i)&&!IM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:RM,type:t,key:s,ref:o,props:r,_owner:LM.current}}Rc.Fragment=PM;Rc.jsx=$0;Rc.jsxs=$0;k0.exports=Rc;var x=k0.exports,Rd={},Y0={exports:{}},Tn={},K0={exports:{}},q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var q=I.length;I.push(K);e:for(;0<q;){var J=q-1>>>1,me=I[J];if(0<r(me,K))I[J]=K,I[q]=me,q=J;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],q=I.pop();if(q!==K){I[0]=q;e:for(var J=0,me=I.length,ze=me>>>1;J<ze;){var W=2*(J+1)-1,ie=I[W],fe=W+1,ae=I[fe];if(0>r(ie,q))fe<me&&0>r(ae,ie)?(I[J]=ae,I[fe]=q,J=fe):(I[J]=ie,I[W]=q,J=W);else if(fe<me&&0>r(ae,q))I[J]=ae,I[fe]=q,J=fe;else break e}}return K}function r(I,K){var q=I.sortIndex-K.sortIndex;return q!==0?q:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=I)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(I){if(_=!1,y(I),!v)if(n(l)!==null)v=!0,G(R);else{var K=n(c);K!==null&&X(S,K.startTime-I)}}function R(I,K){v=!1,_&&(_=!1,h(b),b=-1),p=!0;var q=f;try{for(y(K),d=n(l);d!==null&&(!(d.expirationTime>K)||I&&!D());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var me=J(d.expirationTime<=K);K=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(l)&&i(l),y(K)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var W=n(c);W!==null&&X(S,W.startTime-K),ze=!1}return ze}finally{d=null,f=q,p=!1}}var A=!1,C=null,b=-1,E=5,M=-1;function D(){return!(t.unstable_now()-M<E)}function O(){if(C!==null){var I=t.unstable_now();M=I;var K=!0;try{K=C(!0,I)}finally{K?B():(A=!1,C=null)}}else A=!1}var B;if(typeof g=="function")B=function(){g(O)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=O,B=function(){$.postMessage(null)}}else B=function(){m(O,0)};function G(I){C=I,A||(A=!0,B())}function X(I,K){b=m(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var q=f;f=K;try{return I()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=f;f=I;try{return K()}finally{f=q}},t.unstable_scheduleCallback=function(I,K,q){var J=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?J+q:J):q=J,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,I={id:u++,callback:K,priorityLevel:I,startTime:q,expirationTime:me,sortIndex:-1},q>J?(I.sortIndex=q,e(c,I),n(l)===null&&I===n(c)&&(_?(h(b),b=-1):_=!0,X(S,q-J))):(I.sortIndex=me,e(l,I),v||p||(v=!0,G(R))),I},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(I){var K=f;return function(){var q=f;f=K;try{return I.apply(this,arguments)}finally{f=q}}}})(q0);K0.exports=q0;var NM=K0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UM=ve,Mn=NM;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,ea={};function Qr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(ea[t]=e,t=0;t<e.length;t++)Z0.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,FM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Bp={};function kM(t){return Pd.call(Bp,t)?!0:Pd.call(Op,t)?!1:FM.test(t)?Bp[t]=!0:(Op[t]=!0,!1)}function OM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BM(t,e,n,i){if(e===null||typeof e>"u"||OM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,eh);Bt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,eh);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,eh);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BM(e,n,r,i)&&(n=null),i||r===null?kM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=UM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),xs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Id=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),ey=Symbol.for("react.offscreen"),zp=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,cu;function Lo(t){if(cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+t}var uu=!1;function du(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function zM(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=du(t.type,!1),t;case 11:return t=du(t.type.render,!1),t;case 1:return t=du(t.type,!0),t;default:return""}}function Nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case xs:return"Portal";case Dd:return"Profiler";case nh:return"StrictMode";case Ld:return"Suspense";case Id:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J0:return(t.displayName||"Context")+".Consumer";case Q0:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:Nd(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Nd(t(e))}catch{}}return null}function VM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HM(t){var e=ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=HM(t))}function ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ty(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ud(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function Fd(t,e){iy(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&kd(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kd(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Io(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function ry(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GM=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){GM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ay(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jM=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zd(t,e){if(e){if(jM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gd=null,Os=null,Bs=null;function Wp(t){if(t=wa(t)){if(typeof Gd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Nc(e),Gd(t.stateNode,t.type,e))}}function cy(t){Os?Bs?Bs.push(t):Bs=[t]:Os=t}function uy(){if(Os){var t=Os,e=Bs;if(Bs=Os=null,Wp(t),e)for(t=0;t<e.length;t++)Wp(e[t])}}function dy(t,e){return t(e)}function fy(){}var fu=!1;function hy(t,e,n){if(fu)return t(e,n);fu=!0;try{return dy(t,e,n)}finally{fu=!1,(Os!==null||Bs!==null)&&(fy(),uy())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var jd=!1;if(bi)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){jd=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{jd=!1}function WM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ho=!1,Wl=null,Xl=!1,Wd=null,XM={onError:function(t){Ho=!0,Wl=t}};function $M(t,e,n,i,r,s,o,a,l){Ho=!1,Wl=null,WM.apply(XM,arguments)}function YM(t,e,n,i,r,s,o,a,l){if($M.apply(this,arguments),Ho){if(Ho){var c=Wl;Ho=!1,Wl=null}else throw Error(ne(198));Xl||(Xl=!0,Wd=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(t){if(Jr(t)!==t)throw Error(ne(188))}function KM(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xp(r),t;if(s===i)return Xp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function my(t){return t=KM(t),t!==null?gy(t):null}function gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gy(t);if(e!==null)return e;t=t.sibling}return null}var vy=Mn.unstable_scheduleCallback,$p=Mn.unstable_cancelCallback,qM=Mn.unstable_shouldYield,ZM=Mn.unstable_requestPaint,Et=Mn.unstable_now,QM=Mn.unstable_getCurrentPriorityLevel,oh=Mn.unstable_ImmediatePriority,yy=Mn.unstable_UserBlockingPriority,$l=Mn.unstable_NormalPriority,JM=Mn.unstable_LowPriority,xy=Mn.unstable_IdlePriority,Pc=null,ai=null;function e1(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:i1,t1=Math.log,n1=Math.LN2;function i1(t){return t>>>=0,t===0?32:31-(t1(t)/n1|0)|0}var Ha=64,Ga=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=n&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function r1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=r1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _y(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function o1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Sy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var My,lh,Ey,Ty,wy,$d=!1,ja=[],Zi=null,Qi=null,Ji=null,ia=new Map,ra=new Map,Wi=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function l1(t,e,n,i,r){switch(e){case"focusin":return Zi=xo(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=xo(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=xo(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,xo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,xo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Ay(t){var e=Fr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=py(n),e!==null){t.blockedOn=e,wy(t.priority,function(){Ey(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hd=i,n.target.dispatchEvent(i),Hd=null}else return e=wa(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Kp(t,e,n){Pl(t)&&n.delete(e)}function c1(){$d=!1,Zi!==null&&Pl(Zi)&&(Zi=null),Qi!==null&&Pl(Qi)&&(Qi=null),Ji!==null&&Pl(Ji)&&(Ji=null),ia.forEach(Kp),ra.forEach(Kp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,$d||($d=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,c1)))}function sa(t){function e(r){return _o(r,t)}if(0<ja.length){_o(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&_o(Zi,t),Qi!==null&&_o(Qi,t),Ji!==null&&_o(Ji,t),ia.forEach(e),ra.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)Ay(n),n.blockedOn===null&&Wi.shift()}var zs=Ii.ReactCurrentBatchConfig,Kl=!0;function u1(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=1,ch(t,e,n,i)}finally{Je=r,zs.transition=s}}function d1(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=4,ch(t,e,n,i)}finally{Je=r,zs.transition=s}}function ch(t,e,n,i){if(Kl){var r=Yd(t,e,n,i);if(r===null)Eu(t,e,i,ql,n),Yp(t,i);else if(l1(r,t,e,n,i))i.stopPropagation();else if(Yp(t,i),e&4&&-1<a1.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&My(s),s=Yd(t,e,n,i),s===null&&Eu(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var ql=null;function Yd(t,e,n,i){if(ql=null,t=sh(i),t=Fr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function Cy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QM()){case oh:return 1;case yy:return 4;case $l:case JM:return 16;case xy:return 536870912;default:return 16}default:return 16}}var Yi=null,uh=null,Dl=null;function by(){if(Dl)return Dl;var t,e=uh,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Dl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function qp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:qp,this.isPropagationStopped=qp,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=wn(co),Ta=pt({},co,{view:0,detail:0}),f1=wn(Ta),pu,mu,So,Dc=pt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(pu=t.screenX-So.screenX,mu=t.screenY-So.screenY):mu=pu=0,So=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Zp=wn(Dc),h1=pt({},Dc,{dataTransfer:0}),p1=wn(h1),m1=pt({},Ta,{relatedTarget:0}),gu=wn(m1),g1=pt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=wn(g1),y1=pt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=wn(y1),_1=pt({},co,{data:0}),Qp=wn(_1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E1[t])?!!e[t]:!1}function fh(){return T1}var w1=pt({},Ta,{key:function(t){if(t.key){var e=S1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A1=wn(w1),C1=pt({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=wn(C1),b1=pt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),R1=wn(b1),P1=pt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),D1=wn(P1),L1=pt({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=wn(L1),N1=[9,13,27,32],hh=bi&&"CompositionEvent"in window,Go=null;bi&&"documentMode"in document&&(Go=document.documentMode);var U1=bi&&"TextEvent"in window&&!Go,Ry=bi&&(!hh||Go&&8<Go&&11>=Go),em=" ",tm=!1;function Py(t,e){switch(t){case"keyup":return N1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function F1(t,e){switch(t){case"compositionend":return Dy(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return t=e.data,t===em&&tm?null:t;default:return null}}function k1(t,e){if(Ss)return t==="compositionend"||!hh&&Py(t,e)?(t=by(),Dl=uh=Yi=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ry&&e.locale!=="ko"?null:e.data;default:return null}}var O1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O1[t.type]:e==="textarea"}function Ly(t,e,n,i){cy(i),e=Zl(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var jo=null,oa=null;function B1(t){Gy(t,0)}function Lc(t){var e=Ts(t);if(ny(e))return t}function z1(t,e){if(t==="change")return e}var Iy=!1;if(bi){var vu;if(bi){var yu="oninput"in document;if(!yu){var im=document.createElement("div");im.setAttribute("oninput","return;"),yu=typeof im.oninput=="function"}vu=yu}else vu=!1;Iy=vu&&(!document.documentMode||9<document.documentMode)}function rm(){jo&&(jo.detachEvent("onpropertychange",Ny),oa=jo=null)}function Ny(t){if(t.propertyName==="value"&&Lc(oa)){var e=[];Ly(e,oa,t,sh(t)),hy(B1,e)}}function V1(t,e,n){t==="focusin"?(rm(),jo=e,oa=n,jo.attachEvent("onpropertychange",Ny)):t==="focusout"&&rm()}function H1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(oa)}function G1(t,e){if(t==="click")return Lc(e)}function j1(t,e){if(t==="input"||t==="change")return Lc(e)}function W1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:W1;function aa(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pd.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var n=sm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sm(n)}}function Uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=Fy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uy(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=om(n,s);var o=om(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $1=bi&&"documentMode"in document&&11>=document.documentMode,Ms=null,Kd=null,Wo=null,qd=!1;function am(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qd||Ms==null||Ms!==jl(i)||(i=Ms,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&aa(Wo,i)||(Wo=i,i=Zl(Kd,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},xu={},ky={};bi&&(ky=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Ic(t){if(xu[t])return xu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ky)return xu[t]=e[n];return t}var Oy=Ic("animationend"),By=Ic("animationiteration"),zy=Ic("animationstart"),Vy=Ic("transitionend"),Hy=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Hy.set(t,e),Qr(e,[t])}for(var _u=0;_u<lm.length;_u++){var Su=lm[_u],Y1=Su.toLowerCase(),K1=Su[0].toUpperCase()+Su.slice(1);pr(Y1,"on"+K1)}pr(Oy,"onAnimationEnd");pr(By,"onAnimationIteration");pr(zy,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Vy,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function cm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,YM(i,e,void 0,t),t.currentTarget=null}function Gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cm(r,a,c),s=l}}}if(Xl)throw t=Wd,Xl=!1,Wd=null,t}function it(t,e){var n=e[tf];n===void 0&&(n=e[tf]=new Set);var i=t+"__bubble";n.has(i)||(jy(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),jy(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[$a]){t[$a]=!0,Z0.forEach(function(n){n!=="selectionchange"&&(q1.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,Mu("selectionchange",!1,e))}}function jy(t,e,n,i){switch(Cy(e)){case 1:var r=u1;break;case 4:r=d1;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hy(function(){var c=s,u=sh(n),d=[];e:{var f=Hy.get(t);if(f!==void 0){var p=dh,v=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=A1;break;case"focusin":v="focus",p=gu;break;case"focusout":v="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=R1;break;case Oy:case By:case zy:p=v1;break;case Vy:p=D1;break;case"scroll":p=f1;break;case"wheel":p=I1;break;case"copy":case"cut":case"paste":p=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jp}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var g=c,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=na(g,h),S!=null&&_.push(ca(g,S,y)))),m)break;g=g.return}0<_.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Hd&&(v=n.relatedTarget||n.fromElement)&&(Fr(v)||v[Ri]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Fr(v):null,v!==null&&(m=Jr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=Zp,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Jp,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Ts(p),y=v==null?f:Ts(v),f=new _(S,g+"leave",p,n,u),f.target=m,f.relatedTarget=y,S=null,Fr(u)===c&&(_=new _(h,g+"enter",v,n,u),_.target=y,_.relatedTarget=m,S=_),m=S,p&&v)t:{for(_=p,h=v,g=0,y=_;y;y=ts(y))g++;for(y=0,S=h;S;S=ts(S))y++;for(;0<g-y;)_=ts(_),g--;for(;0<y-g;)h=ts(h),y--;for(;g--;){if(_===h||h!==null&&_===h.alternate)break t;_=ts(_),h=ts(h)}_=null}else _=null;p!==null&&um(d,f,p,_,!1),v!==null&&m!==null&&um(d,m,v,_,!0)}}e:{if(f=c?Ts(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=z1;else if(nm(f))if(Iy)R=j1;else{R=H1;var A=V1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=G1);if(R&&(R=R(t,c))){Ly(d,R,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&kd(f,"number",f.value)}switch(A=c?Ts(c):window,t){case"focusin":(nm(A)||A.contentEditable==="true")&&(Ms=A,Kd=c,Wo=null);break;case"focusout":Wo=Kd=Ms=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,am(d,n,u);break;case"selectionchange":if($1)break;case"keydown":case"keyup":am(d,n,u)}var C;if(hh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ss?Py(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Ry&&n.locale!=="ko"&&(Ss||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ss&&(C=by()):(Yi=u,uh="value"in Yi?Yi.value:Yi.textContent,Ss=!0)),A=Zl(c,b),0<A.length&&(b=new Qp(b,t,null,n,u),d.push({event:b,listeners:A}),C?b.data=C:(C=Dy(n),C!==null&&(b.data=C)))),(C=U1?F1(t,n):k1(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(u=new Qp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}Gy(d,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ca(t,s,r)),s=na(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function um(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=na(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Z1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(Z1,`
`).replace(Q1,"")}function Ya(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(ne(425))}function Ql(){}var Zd=null,Qd=null;function Jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(t){return fm.resolve(null).then(t).catch(tE)}:ef;function tE(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),ii="__reactFiber$"+uo,ua="__reactProps$"+uo,Ri="__reactContainer$"+uo,tf="__reactEvents$"+uo,nE="__reactListeners$"+uo,iE="__reactHandles$"+uo;function Fr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hm(t);t!==null;){if(n=t[ii])return n;t=hm(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[ii]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Nc(t){return t[ua]||null}var nf=[],ws=-1;function mr(t){return{current:t}}function st(t){0>ws||(t.current=nf[ws],nf[ws]=null,ws--)}function nt(t,e){ws++,nf[ws]=t.current,t.current=e}var lr={},Yt=mr(lr),ln=mr(!1),Wr=lr;function $s(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Jl(){st(ln),st(Yt)}function pm(t,e,n){if(Yt.current!==lr)throw Error(ne(168));nt(Yt,e),nt(ln,n)}function Wy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,VM(t)||"Unknown",r));return pt({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Wr=Yt.current,nt(Yt,t),nt(ln,ln.current),!0}function mm(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Wy(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,st(ln),st(Yt),nt(Yt,t)):st(ln),nt(ln,n)}var _i=null,Uc=!1,wu=!1;function Xy(t){_i===null?_i=[t]:_i.push(t)}function rE(t){Uc=!0,Xy(t)}function gr(){if(!wu&&_i!==null){wu=!0;var t=0,e=Je;try{var n=_i;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Uc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),vy(oh,gr),r}finally{Je=e,wu=!1}}return null}var As=[],Cs=0,tc=null,nc=0,Pn=[],Dn=0,Xr=null,Mi=1,Ei="";function br(t,e){As[Cs++]=nc,As[Cs++]=tc,tc=t,nc=e}function $y(t,e,n){Pn[Dn++]=Mi,Pn[Dn++]=Ei,Pn[Dn++]=Xr,Xr=t;var i=Mi;t=Ei;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-$n(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function mh(t){t.return!==null&&(br(t,1),$y(t,1,0))}function gh(t){for(;t===tc;)tc=As[--Cs],As[Cs]=null,nc=As[--Cs],As[Cs]=null;for(;t===Xr;)Xr=Pn[--Dn],Pn[Dn]=null,Ei=Pn[--Dn],Pn[Dn]=null,Mi=Pn[--Dn],Pn[Dn]=null}var _n=null,yn=null,at=!1,Wn=null;function Yy(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,yn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,yn=null,!0):!1;default:return!1}}function rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(at){var e=yn;if(e){var n=e;if(!gm(t,e)){if(rf(t))throw Error(ne(418));e=er(n.nextSibling);var i=_n;e&&gm(t,e)?Yy(i,n):(t.flags=t.flags&-4097|2,at=!1,_n=t)}}else{if(rf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,at=!1,_n=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ka(t){if(t!==_n)return!1;if(!at)return vm(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jd(t.type,t.memoizedProps)),e&&(e=yn)){if(rf(t))throw Ky(),Error(ne(418));for(;e;)Yy(t,e),e=er(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=_n?er(t.stateNode.nextSibling):null;return!0}function Ky(){for(var t=yn;t;)t=er(t.nextSibling)}function Ys(){yn=_n=null,at=!1}function vh(t){Wn===null?Wn=[t]:Wn.push(t)}var sE=Ii.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ym(t){var e=t._init;return e(t._payload)}function qy(t){function e(h,g){if(t){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=rr(h,g),h.index=0,h.sibling=null,h}function s(h,g,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,y,S){return g===null||g.tag!==6?(g=Lu(y,h.mode,S),g.return=h,g):(g=r(g,y),g.return=h,g)}function l(h,g,y,S){var R=y.type;return R===_s?u(h,g,y.props.children,S,y.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&ym(R)===g.type)?(S=r(g,y.props),S.ref=Mo(h,g,y),S.return=h,S):(S=Bl(y.type,y.key,y.props,null,h.mode,S),S.ref=Mo(h,g,y),S.return=h,S)}function c(h,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Iu(y,h.mode,S),g.return=h,g):(g=r(g,y.children||[]),g.return=h,g)}function u(h,g,y,S,R){return g===null||g.tag!==7?(g=Gr(y,h.mode,S,R),g.return=h,g):(g=r(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Lu(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ba:return y=Bl(g.type,g.key,g.props,null,h.mode,y),y.ref=Mo(h,null,g),y.return=h,y;case xs:return g=Iu(g,h.mode,y),g.return=h,g;case Gi:var S=g._init;return d(h,S(g._payload),y)}if(Io(g)||vo(g))return g=Gr(g,h.mode,y,null),g.return=h,g;qa(h,g)}return null}function f(h,g,y,S){var R=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:a(h,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:return y.key===R?l(h,g,y,S):null;case xs:return y.key===R?c(h,g,y,S):null;case Gi:return R=y._init,f(h,g,R(y._payload),S)}if(Io(y)||vo(y))return R!==null?null:u(h,g,y,S,null);qa(h,y)}return null}function p(h,g,y,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,a(g,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ba:return h=h.get(S.key===null?y:S.key)||null,l(g,h,S,R);case xs:return h=h.get(S.key===null?y:S.key)||null,c(g,h,S,R);case Gi:var A=S._init;return p(h,g,y,A(S._payload),R)}if(Io(S)||vo(S))return h=h.get(y)||null,u(g,h,S,R,null);qa(g,S)}return null}function v(h,g,y,S){for(var R=null,A=null,C=g,b=g=0,E=null;C!==null&&b<y.length;b++){C.index>b?(E=C,C=null):E=C.sibling;var M=f(h,C,y[b],S);if(M===null){C===null&&(C=E);break}t&&C&&M.alternate===null&&e(h,C),g=s(M,g,b),A===null?R=M:A.sibling=M,A=M,C=E}if(b===y.length)return n(h,C),at&&br(h,b),R;if(C===null){for(;b<y.length;b++)C=d(h,y[b],S),C!==null&&(g=s(C,g,b),A===null?R=C:A.sibling=C,A=C);return at&&br(h,b),R}for(C=i(h,C);b<y.length;b++)E=p(C,h,b,y[b],S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?b:E.key),g=s(E,g,b),A===null?R=E:A.sibling=E,A=E);return t&&C.forEach(function(D){return e(h,D)}),at&&br(h,b),R}function _(h,g,y,S){var R=vo(y);if(typeof R!="function")throw Error(ne(150));if(y=R.call(y),y==null)throw Error(ne(151));for(var A=R=null,C=g,b=g=0,E=null,M=y.next();C!==null&&!M.done;b++,M=y.next()){C.index>b?(E=C,C=null):E=C.sibling;var D=f(h,C,M.value,S);if(D===null){C===null&&(C=E);break}t&&C&&D.alternate===null&&e(h,C),g=s(D,g,b),A===null?R=D:A.sibling=D,A=D,C=E}if(M.done)return n(h,C),at&&br(h,b),R;if(C===null){for(;!M.done;b++,M=y.next())M=d(h,M.value,S),M!==null&&(g=s(M,g,b),A===null?R=M:A.sibling=M,A=M);return at&&br(h,b),R}for(C=i(h,C);!M.done;b++,M=y.next())M=p(C,h,b,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?b:M.key),g=s(M,g,b),A===null?R=M:A.sibling=M,A=M);return t&&C.forEach(function(O){return e(h,O)}),at&&br(h,b),R}function m(h,g,y,S){if(typeof y=="object"&&y!==null&&y.type===_s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:e:{for(var R=y.key,A=g;A!==null;){if(A.key===R){if(R=y.type,R===_s){if(A.tag===7){n(h,A.sibling),g=r(A,y.props.children),g.return=h,h=g;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&ym(R)===A.type){n(h,A.sibling),g=r(A,y.props),g.ref=Mo(h,A,y),g.return=h,h=g;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===_s?(g=Gr(y.props.children,h.mode,S,y.key),g.return=h,h=g):(S=Bl(y.type,y.key,y.props,null,h.mode,S),S.ref=Mo(h,g,y),S.return=h,h=S)}return o(h);case xs:e:{for(A=y.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=r(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Iu(y,h.mode,S),g.return=h,h=g}return o(h);case Gi:return A=y._init,m(h,g,A(y._payload),S)}if(Io(y))return v(h,g,y,S);if(vo(y))return _(h,g,y,S);qa(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,y),g.return=h,h=g):(n(h,g),g=Lu(y,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var Ks=qy(!0),Zy=qy(!1),ic=mr(null),rc=null,bs=null,yh=null;function xh(){yh=bs=rc=null}function _h(t){var e=ic.current;st(ic),t._currentValue=e}function of(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){rc=t,yh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(rc===null)throw Error(ne(308));bs=t,rc.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var kr=null;function Sh(t){kr===null?kr=[t]:kr.push(t)}function Qy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}function xm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=pt({},d,f);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=d}}function _m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Aa={},li=mr(Aa),da=mr(Aa),fa=mr(Aa);function Or(t){if(t===Aa)throw Error(ne(174));return t}function Eh(t,e){switch(nt(fa,e),nt(da,t),nt(li,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bd(e,t)}st(li),nt(li,e)}function qs(){st(li),st(da),st(fa)}function ex(t){Or(fa.current);var e=Or(li.current),n=Bd(e,t.type);e!==n&&(nt(da,t),nt(li,n))}function Th(t){da.current===t&&(st(li),st(da))}var ut=mr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function wh(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Nl=Ii.ReactCurrentDispatcher,Cu=Ii.ReactCurrentBatchConfig,$r=0,ft=null,Ct=null,Nt=null,ac=!1,Xo=!1,ha=0,oE=0;function zt(){throw Error(ne(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Ch(t,e,n,i,r,s){if($r=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?uE:dE,t=n(i,r),Xo){s=0;do{if(Xo=!1,ha=0,25<=s)throw Error(ne(301));s+=1,Nt=Ct=null,e.updateQueue=null,Nl.current=fE,t=n(i,r)}while(Xo)}if(Nl.current=lc,e=Ct!==null&&Ct.next!==null,$r=0,Nt=Ct=ft=null,ac=!1,e)throw Error(ne(300));return t}function bh(){var t=ha!==0;return ha=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Fn(){if(Ct===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?ft.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function pa(t,e){return typeof e=="function"?e(t):e}function bu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ft.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tx(){}function nx(t,e){var n=ft,i=Fn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Rh(sx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ma(9,rx.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ne(349));$r&30||ix(n,e,r)}return r}function ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&ax(t)}function sx(t,e,n){return n(function(){ox(e)&&ax(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function ax(t){var e=Pi(t,1);e!==null&&Yn(e,t,1,-1)}function Sm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=cE.bind(null,ft,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lx(){return Fn().memoizedState}function Ul(t,e,n,i){var r=ei();ft.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Fc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}ft.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function Mm(t,e){return Ul(8390656,8,t,e)}function Rh(t,e){return Fc(2048,8,t,e)}function cx(t,e){return Fc(4,2,t,e)}function ux(t,e){return Fc(4,4,t,e)}function dx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fx(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4,4,dx.bind(null,e,t),n)}function Ph(){}function hx(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function px(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mx(t,e,n){return $r&21?(qn(n,e)||(n=_y(),ft.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function aE(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Cu.transition;Cu.transition={};try{t(!1),e()}finally{Je=n,Cu.transition=i}}function gx(){return Fn().memoizedState}function lE(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))yx(e,n);else if(n=Qy(t,e,n,i),n!==null){var r=Qt();Yn(n,t,i,r),xx(n,e,i)}}function cE(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))yx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qy(t,e,r,i),n!==null&&(r=Qt(),Yn(n,t,i,r),xx(n,e,i))}}function vx(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function yx(t,e){Xo=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}var lc={readContext:Un,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},uE={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,dx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lE.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Sm,useDebugValue:Ph,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Sm(!1),e=t[0];return t=aE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=ei();if(at){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ut===null)throw Error(ne(349));$r&30||ix(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mm(sx.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,rx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ut.identifierPrefix;if(at){var n=Ei,i=Mi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dE={readContext:Un,useCallback:hx,useContext:Un,useEffect:Rh,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:bu,useRef:lx,useState:function(){return bu(pa)},useDebugValue:Ph,useDeferredValue:function(t){var e=Fn();return mx(e,Ct.memoizedState,t)},useTransition:function(){var t=bu(pa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},fE={readContext:Un,useCallback:hx,useContext:Un,useEffect:Rh,useImperativeHandle:fx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:Ru,useRef:lx,useState:function(){return Ru(pa)},useDebugValue:Ph,useDeferredValue:function(t){var e=Fn();return Ct===null?e.memoizedState=t:mx(e,Ct.memoizedState,t)},useTransition:function(){var t=Ru(pa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ir(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Yn(e,t,r,i),Il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ir(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Yn(e,t,r,i),Il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ir(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Yn(e,t,i,n),Il(e,t,i))}};function Em(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function _x(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=cn(e)?Wr:Yt.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kc.enqueueReplaceState(e,e.state,null)}function lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=cn(e)?Wr:Yt.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kc.enqueueReplaceState(r,r.state,null),sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=zM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hE=typeof WeakMap=="function"?WeakMap:Map;function Sx(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,xf=i),cf(t,e)},n}function Mx(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=CE.bind(null,t,e,n),e.then(t,t))}function Am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var pE=Ii.ReactCurrentOwner,on=!1;function Zt(t,e,n,i){e.child=t===null?Zy(e,null,n,i):Ks(e,t.child,n,i)}function bm(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Ch(t,e,n,i,s,r),n=bh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(at&&n&&mh(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ex(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ex(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Di(t,e,r)}return uf(t,e,n,i,r)}function Tx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ps,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Ps,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Ps,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Ps,gn),gn|=i;return Zt(t,e,r,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uf(t,e,n,i,r){var s=cn(n)?Wr:Yt.current;return s=$s(e,s),Vs(e,r),n=Ch(t,e,n,i,s,r),i=bh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(at&&i&&mh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Pm(t,e,n,i,r){if(cn(n)){var s=!0;ec(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Fl(t,e),_x(e,n,i),lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=cn(n)?Wr:Yt.current,c=$s(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tm(e,o,i,c),ji=!1;var f=e.memoizedState;o.state=f,sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ln.current||ji?(typeof u=="function"&&(af(e,n,u,i),l=e.memoizedState),(a=ji||Em(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=cn(n)?Wr:Yt.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Tm(e,o,i,l),ji=!1,f=e.memoizedState,o.state=f,sc(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||ln.current||ji?(typeof p=="function"&&(af(e,n,p,i),v=e.memoizedState),(c=ji||Em(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return df(t,e,n,i,s,r)}function df(t,e,n,i,r,s){wx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mm(e,n,!1),Di(t,e,s);i=e.stateNode,pE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&mm(e,n,!0),e.child}function Ax(t){var e=t.stateNode;e.pendingContext?pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(t,e.context,!1),Eh(t,e.containerInfo)}function Dm(t,e,n,i,r){return Ys(),vh(r),e.flags|=256,Zt(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0};function hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cx(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hf(n),e.memoizedState=ff,t):Dh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ff,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,i){return i!==null&&vh(i),Ks(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ne(422))),Za(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=hf(o),e.memoizedState=ff,s);if(!(e.mode&1))return Za(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Pu(s,i,void 0),Za(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Yn(i,t,r,-1))}return kh(),i=Pu(Error(ne(421))),Za(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=er(r.nextSibling),_n=e,at=!0,Wn=null,t!==null&&(Pn[Dn++]=Mi,Pn[Dn++]=Ei,Pn[Dn++]=Xr,Mi=t.id,Ei=t.overflow,Xr=e),e=Dh(e,i.children),e.flags|=4096,e)}function Lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),of(t.return,e,n)}function Du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,n,e);else if(t.tag===19)Lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gE(t,e,n){switch(e.tag){case 3:Ax(e),Ys();break;case 5:ex(e);break;case 1:cn(e.type)&&ec(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Cx(t,e,n):(nt(ut,ut.current&1),t=Di(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Tx(t,e,n)}return Di(t,e,n)}var Rx,pf,Px,Dx;Rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(li.current);var s=null;switch(n){case"input":r=Ud(t,r),i=Ud(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Od(t,r),i=Od(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}zd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vE(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return cn(e.type)&&Jl(),Vt(e),null;case 3:return i=e.stateNode,qs(),st(ln),st(Yt),wh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Mf(Wn),Wn=null))),pf(t,e),Vt(e),null;case 5:Th(e);var r=Or(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Vt(e),null}if(t=Or(li.current),Ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)it(Uo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Vp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Gp(i,s),it("invalid",i)}zd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":za(i),Hp(i,s,!0);break;case"textarea":za(i),jp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[ua]=i,Rx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vd(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)it(Uo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Vp(t,i),r=Ud(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),it("invalid",t);break;case"textarea":Gp(t,i),r=Od(t,i),it("invalid",t);break;default:r=i}zd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ly(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&th(t,s,l,o))}switch(n){case"input":za(t),Hp(t,i,!1);break;case"textarea":za(t),jp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Dx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Or(fa.current),Or(li.current),Ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Vt(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&yn!==null&&e.mode&1&&!(e.flags&128))Ky(),Ys(),e.flags|=98560,s=!1;else if(s=Ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ii]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Wn!==null&&(Mf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?bt===0&&(bt=3):kh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return qs(),pf(t,e),t===null&&la(e.stateNode.containerInfo),Vt(e),null;case 10:return _h(e.type._context),Vt(e),null;case 17:return cn(e.type)&&Jl(),Vt(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Qs&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Vt(e),null}else 2*Et()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function yE(t,e){switch(gh(e),e.tag){case 1:return cn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),st(ln),st(Yt),wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Th(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return qs(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Qa=!1,Wt=!1,xE=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function mf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Im=!1;function _E(t,e){if(Zd=Kl,t=Fy(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qd={focusedElem:t,selectionRange:n},Kl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Gn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=Im,Im=!1,v}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&mf(e,n,s)}r=r.next}while(r!==i)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lx(t){var e=t.alternate;e!==null&&(t.alternate=null,Lx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[ua],delete e[tf],delete e[nE],delete e[iE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}var Ft=null,jn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:Wt||Rs(n,e);case 6:var i=Ft,r=jn;Ft=null,Ui(t,e,n),Ft=i,jn=r,Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(jn?(t=Ft,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),sa(t)):Tu(Ft,n.stateNode));break;case 4:i=Ft,r=jn,Ft=n.stateNode.containerInfo,jn=!0,Ui(t,e,n),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mf(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Wt&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ui(t,e,n),Wt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function Um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xE),e.forEach(function(i){var r=RE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,jn=!1;break e;case 3:Ft=a.stateNode.containerInfo,jn=!0;break e;case 4:Ft=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));Nx(s,o,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ux(e,t),e=e.sibling}function Ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{$o(3,t,t.return),Oc(3,t)}catch(_){yt(t,t.return,_)}try{$o(5,t,t.return)}catch(_){yt(t,t.return,_)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(_){yt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iy(r,s),Vd(a,o);var c=Vd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?ly(r,d):u==="dangerouslySetInnerHTML"?oy(r,d):u==="children"?ta(r,d):th(r,u,d,c)}switch(a){case"input":Fd(r,s);break;case"textarea":ry(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(_){yt(t,t.return,_)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){yt(t,t.return,_)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(_){yt(t,t.return,_)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=Et())),i&4&&Um(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,On(e,t),Wt=c):On(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(d=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:$o(4,f,f.return);break;case 1:Rs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){yt(i,n,_)}}break;case 5:Rs(f,f.return);break;case 22:if(f.memoizedState!==null){km(d);continue}}p!==null?(p.return=f,ge=p):km(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ay("display",o))}catch(_){yt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){yt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Jn(t),i&4&&Um(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=Nm(t);yf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(t);vf(t,a,o);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SE(t,e,n){ge=t,Fx(t)}function Fx(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Qa;var c=Wt;if(Qa=o,(Wt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Om(r):l!==null?(l.return=o,ge=l):Om(r);for(;s!==null;)ge=s,Fx(s),s=s.sibling;ge=r,Qa=a,Wt=c}Fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Fm(t)}}function Fm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_m(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Wt||e.flags&512&&gf(e)}catch(f){yt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function km(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Om(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{gf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{gf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var ME=Math.ceil,cc=Ii.ReactCurrentDispatcher,Lh=Ii.ReactCurrentOwner,Nn=Ii.ReactCurrentBatchConfig,Xe=0,Ut=null,At=null,Ot=0,gn=0,Ps=mr(0),bt=0,ga=null,Yr=0,Bc=0,Ih=0,Yo=null,rn=null,Nh=0,Qs=1/0,xi=null,uc=!1,xf=null,nr=null,Ja=!1,Ki=null,dc=0,Ko=0,_f=null,kl=-1,Ol=0;function Qt(){return Xe&6?Et():kl!==-1?kl:kl=Et()}function ir(t){return t.mode&1?Xe&2&&Ot!==0?Ot&-Ot:sE.transition!==null?(Ol===0&&(Ol=_y()),Ol):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Cy(t.type)),t):1}function Yn(t,e,n,i){if(50<Ko)throw Ko=0,_f=null,Error(ne(185));Ea(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Bc|=n),bt===4&&Xi(t,Ot)),un(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Qs=Et()+500,Uc&&gr()))}function un(t,e){var n=t.callbackNode;s1(t,e);var i=Yl(t,t===Ut?Ot:0);if(i===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?rE(Bm.bind(null,t)):Xy(Bm.bind(null,t)),eE(function(){!(Xe&6)&&gr()}),n=null;else{switch(Sy(i)){case 1:n=oh;break;case 4:n=yy;break;case 16:n=$l;break;case 536870912:n=xy;break;default:n=$l}n=jx(n,kx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kx(t,e){if(kl=-1,Ol=0,Xe&6)throw Error(ne(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Yl(t,t===Ut?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fc(t,i);else{e=i;var r=Xe;Xe|=2;var s=Bx();(Ut!==t||Ot!==e)&&(xi=null,Qs=Et()+500,Hr(t,e));do try{wE();break}catch(a){Ox(t,a)}while(!0);xh(),cc.current=s,Xe=r,At!==null?e=0:(Ut=null,Ot=0,e=bt)}if(e!==0){if(e===2&&(r=Xd(t),r!==0&&(i=r,e=Sf(t,r))),e===1)throw n=ga,Hr(t,0),Xi(t,i),un(t,Et()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!EE(r)&&(e=fc(t,i),e===2&&(s=Xd(t),s!==0&&(i=s,e=Sf(t,s))),e===1))throw n=ga,Hr(t,0),Xi(t,i),un(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Rr(t,rn,xi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Nh+500-Et(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ef(Rr.bind(null,t,rn,xi),e);break}Rr(t,rn,xi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ME(i/1960))-i,10<i){t.timeoutHandle=ef(Rr.bind(null,t,rn,xi),i);break}Rr(t,rn,xi);break;case 5:Rr(t,rn,xi);break;default:throw Error(ne(329))}}}return un(t,Et()),t.callbackNode===n?kx.bind(null,t):null}function Sf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=fc(t,e),t!==2&&(e=rn,rn=n,e!==null&&Mf(e)),t}function Mf(t){rn===null?rn=t:rn.push.apply(rn,t)}function EE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Ih,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Bm(t){if(Xe&6)throw Error(ne(327));Hs();var e=Yl(t,0);if(!(e&1))return un(t,Et()),null;var n=fc(t,e);if(t.tag!==0&&n===2){var i=Xd(t);i!==0&&(e=i,n=Sf(t,i))}if(n===1)throw n=ga,Hr(t,0),Xi(t,e),un(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,rn,xi),un(t,Et()),null}function Uh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Qs=Et()+500,Uc&&gr())}}function Kr(t){Ki!==null&&Ki.tag===0&&!(Xe&6)&&Hs();var e=Xe;Xe|=1;var n=Nn.transition,i=Je;try{if(Nn.transition=null,Je=1,t)return t()}finally{Je=i,Nn.transition=n,Xe=e,!(Xe&6)&&gr()}}function Fh(){gn=Ps.current,st(Ps)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,J1(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:qs(),st(ln),st(Yt),wh();break;case 5:Th(i);break;case 4:qs();break;case 13:st(ut);break;case 19:st(ut);break;case 10:_h(i.type._context);break;case 22:case 23:Fh()}n=n.return}if(Ut=t,At=t=rr(t.current,null),Ot=gn=e,bt=0,ga=null,Ih=Bc=Yr=0,rn=Yo=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function Ox(t,e){do{var n=At;try{if(xh(),Nl.current=lc,ac){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if($r=0,Nt=Ct=ft=null,Xo=!1,ha=0,Lh.current=null,n===null||n.return===null){bt=1,ga=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Am(o);if(p!==null){p.flags&=-257,Cm(p,o,a,s,e),p.mode&1&&wm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){wm(s,c,e),kh();break e}l=Error(ne(426))}}else if(at&&a.mode&1){var m=Am(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Cm(m,o,a,s,e),vh(Zs(l,a));break e}}s=l=Zs(l,a),bt!==4&&(bt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Sx(s,l,e);xm(s,h);break e;case 1:a=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nr===null||!nr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Mx(s,a,e);xm(s,S);break e}}s=s.return}while(s!==null)}Vx(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function Bx(){var t=cc.current;return cc.current=lc,t===null?lc:t}function kh(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Yr&268435455)&&!(Bc&268435455)||Xi(Ut,Ot)}function fc(t,e){var n=Xe;Xe|=2;var i=Bx();(Ut!==t||Ot!==e)&&(xi=null,Hr(t,e));do try{TE();break}catch(r){Ox(t,r)}while(!0);if(xh(),Xe=n,cc.current=i,At!==null)throw Error(ne(261));return Ut=null,Ot=0,bt}function TE(){for(;At!==null;)zx(At)}function wE(){for(;At!==null&&!qM();)zx(At)}function zx(t){var e=Gx(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?Vx(t):At=e,Lh.current=null}function Vx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yE(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=vE(n,e,gn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function Rr(t,e,n){var i=Je,r=Nn.transition;try{Nn.transition=null,Je=1,AE(t,e,n,i)}finally{Nn.transition=r,Je=i}return null}function AE(t,e,n,i){do Hs();while(Ki!==null);if(Xe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o1(t,s),t===Ut&&(At=Ut=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,jx($l,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=Je;Je=1;var a=Xe;Xe|=4,Lh.current=null,_E(t,n),Ux(n,t),X1(Qd),Kl=!!Zd,Qd=Zd=null,t.current=n,SE(n),ZM(),Xe=a,Je=o,Nn.transition=s}else t.current=n;if(Ja&&(Ja=!1,Ki=t,dc=r),s=t.pendingLanes,s===0&&(nr=null),e1(n.stateNode),un(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=xf,xf=null,t;return dc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===_f?Ko++:(Ko=0,_f=t):Ko=0,gr(),null}function Hs(){if(Ki!==null){var t=Sy(dc),e=Nn.transition,n=Je;try{if(Nn.transition=null,Je=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,dc=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:$o(8,u,s)}var d=u.child;if(d!==null)d.return=u,ge=d;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(Lx(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){o=ge;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ge=y;else e:for(o=g;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oc(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(Xe=r,gr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Pc,t)}catch{}i=!0}return i}finally{Je=n,Nn.transition=e}}return!1}function zm(t,e,n){e=Zs(n,e),e=Sx(t,e,1),t=tr(t,e,1),e=Qt(),t!==null&&(Ea(t,1,e),un(t,e))}function yt(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Zs(n,t),t=Mx(e,t,1),e=tr(e,t,1),t=Qt(),e!==null&&(Ea(e,1,t),un(e,t));break}}e=e.return}}function CE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ot&n)===n&&(bt===4||bt===3&&(Ot&130023424)===Ot&&500>Et()-Nh?Hr(t,0):Ih|=n),un(t,e)}function Hx(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=Qt();t=Pi(t,e),t!==null&&(Ea(t,e,n),un(t,n))}function bE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hx(t,n)}function RE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Hx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,gE(t,e,n);on=!!(t.flags&131072)}else on=!1,at&&e.flags&1048576&&$y(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=$s(e,Yt.current);Vs(e,n),r=Ch(null,e,i,t,r,n);var s=bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=kc,e.stateNode=r,r._reactInternals=e,lf(e,i,t,n),e=df(null,e,i,!0,s,n)):(e.tag=0,at&&s&&mh(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DE(i),t=Gn(i,t),r){case 0:e=uf(null,e,i,t,n);break e;case 1:e=Pm(null,e,i,t,n);break e;case 11:e=bm(null,e,i,t,n);break e;case 14:e=Rm(null,e,i,Gn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Pm(t,e,i,r,n);case 3:e:{if(Ax(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jy(t,e),sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(ne(423)),e),e=Dm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(ne(424)),e),e=Dm(t,e,i,n,r);break e}else for(yn=er(e.stateNode.containerInfo.firstChild),_n=e,at=!0,Wn=null,n=Zy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Di(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return ex(e),t===null&&sf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jd(i,r)?o=null:s!==null&&Jd(i,s)&&(e.flags|=32),wx(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&sf(e),null;case 13:return Cx(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bm(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(ic,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!ln.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),of(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=Un(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Rm(t,e,i,r,n);case 15:return Ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Fl(t,e),e.tag=1,cn(i)?(t=!0,ec(e)):t=!1,Vs(e,n),_x(e,i,r),lf(e,i,r,n),df(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return Tx(t,e,n)}throw Error(ne(156,e.tag))};function jx(t,e){return vy(t,e)}function PE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new PE(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DE(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Oh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Gr(n.children,r,s,e);case nh:o=8,r|=8;break;case Dd:return t=Ln(12,n,e,r|2),t.elementType=Dd,t.lanes=s,t;case Ld:return t=Ln(13,n,e,r),t.elementType=Ld,t.lanes=s,t;case Id:return t=Ln(19,n,e,r),t.elementType=Id,t.lanes=s,t;case ey:return zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q0:o=10;break e;case J0:o=9;break e;case ih:o=11;break e;case rh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function zc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=ey,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,i,r,s,o,a,l){return t=new LE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function IE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wx(t){if(!t)return lr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return Wy(t,n,e)}return e}function Xx(t,e,n,i,r,s,o,a,l){return t=Bh(n,i,!0,t,r,s,o,a,l),t.context=Wx(null),n=t.current,i=Qt(),r=ir(n),s=wi(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,Ea(t,r,i),un(t,i),t}function Vc(t,e,n,i){var r=e.current,s=Qt(),o=ir(r);return n=Wx(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Yn(t,r,o,s),Il(t,r,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Vm(t,e),(t=t.alternate)&&Vm(t,e)}function NE(){return null}var $x=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}Hc.prototype.render=Vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Vc(t,e,null,null)};Hc.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Vc(null,t,null,null)}),e[Ri]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ty();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&Ay(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function UE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hc(o);s.call(c)}}var o=Xx(e,i,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[Ri]=o.current,la(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hc(l);a.call(c)}}var l=Bh(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=l,t[Ri]=l.current,la(t.nodeType===8?t.parentNode:t),Kr(function(){Vc(e,l,n,i)}),l}function jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hc(o);a.call(l)}}Vc(e,o,t,r)}else o=UE(n,e,t,r,i);return hc(o)}My=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(ah(e,n|1),un(e,Et()),!(Xe&6)&&(Qs=Et()+500,gr()))}break;case 13:Kr(function(){var i=Pi(t,1);if(i!==null){var r=Qt();Yn(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Qt();Yn(e,t,134217728,n)}zh(t,134217728)}};Ey=function(t){if(t.tag===13){var e=ir(t),n=Pi(t,e);if(n!==null){var i=Qt();Yn(n,t,e,i)}zh(t,e)}};Ty=function(){return Je};wy=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Gd=function(t,e,n){switch(e){case"input":if(Fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nc(i);if(!r)throw Error(ne(90));ny(i),Fd(i,r)}}}break;case"textarea":ry(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};dy=Uh;fy=Kr;var FE={usingClientEntryPoint:!1,Events:[wa,Ts,Nc,cy,uy,Uh]},To={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kE={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=my(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||NE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Pc=el.inject(kE),ai=el}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(ne(200));return IE(t,e,null,n)};Tn.createRoot=function(t,e){if(!Hh(t))throw Error(ne(299));var n=!1,i="",r=$x;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,la(t.nodeType===8?t.parentNode:t),new Vh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=my(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Kr(t)};Tn.hydrate=function(t,e,n){if(!Gc(e))throw Error(ne(200));return jc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$x;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xx(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Tn.render=function(t,e,n){if(!Gc(e))throw Error(ne(200));return jc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(ne(40));return t._reactRootContainer?(Kr(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Tn.unstable_batchedUpdates=Uh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return jc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(t){console.error(t)}}Yx(),Y0.exports=Tn;var OE=Y0.exports,Gm=OE;Rd.createRoot=Gm.createRoot,Rd.hydrateRoot=Gm.hydrateRoot;/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=ve.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ve.createElement("svg",{ref:l,...zE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Kx("lucide",r),...a},[...o.map(([c,u])=>ve.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(t,e)=>{const n=ve.forwardRef(({className:i,...r},s)=>ve.createElement(VE,{ref:s,iconNode:e,className:Kx(`lucide-${BE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=xt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=xt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=xt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=xt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=xt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=xt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=xt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=xt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=xt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=xt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=xt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=xt("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=xt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=xt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=xt("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=xt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=xt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Jx=ve.createContext({});function JE(t){const e=ve.useRef(null);return e.current===null&&(e.current=t()),e.current}const jh=ve.createContext(null),e_=ve.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function eT(t=!0){const e=ve.useContext(jh);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ve.useId();ve.useEffect(()=>{t&&r(s)},[t]);const o=ve.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Wh=typeof window<"u",tT=Wh?ve.useLayoutEffect:ve.useEffect,Sn=t=>t;let t_=Sn;function Xh(t){let e;return()=>(e===void 0&&(e=t()),e)}const Js=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ai=t=>t*1e3,Ci=t=>t/1e3,nT={useManualTiming:!1};function iT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const tl=["read","resolveKeyframes","update","preRender","render","postRender"],rT=40;function n_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=tl.reduce((h,g)=>(h[g]=iT(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,rT),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:tl.reduce((h,g)=>{const y=o[g];return h[g]=(S,R=!1,A=!1)=>(n||v(),y.schedule(S,R,A)),h},{}),cancel:h=>{for(let g=0;g<tl.length;g++)o[tl[g]].cancel(h)},state:r,steps:o}}const{schedule:ot,cancel:cr,state:kt,steps:Nu}=n_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Sn,!0),i_=ve.createContext({strict:!1}),Xm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eo={};for(const t in Xm)eo[t]={isEnabled:e=>Xm[t].some(n=>!!e[n])};function sT(t){for(const e in t)eo[e]={...eo[e],...t[e]}}const oT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||oT.has(t)}let r_=t=>!pc(t);function aT(t){t&&(r_=e=>e.startsWith("on")?!pc(e):t(e))}try{aT(require("@emotion/is-prop-valid").default)}catch{}function lT(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(r_(r)||n===!0&&pc(r)||!e&&!pc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function cT(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const $c=ve.createContext({});function va(t){return typeof t=="string"||Array.isArray(t)}function Yc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const $h=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yh=["initial",...$h];function Kc(t){return Yc(t.animate)||Yh.some(e=>va(t[e]))}function s_(t){return!!(Kc(t)||t.variants)}function uT(t,e){if(Kc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||va(n)?n:void 0,animate:va(i)?i:void 0}}return t.inherit!==!1?e:{}}function dT(t){const{initial:e,animate:n}=uT(t,ve.useContext($c));return ve.useMemo(()=>({initial:e,animate:n}),[$m(e),$m(n)])}function $m(t){return Array.isArray(t)?t.join(" "):t}const fT=Symbol.for("motionComponentSymbol");function Ds(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function hT(t,e,n){return ve.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ds(n)&&(n.current=i))},[e])}const Kh=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),pT="framerAppearId",o_="data-"+Kh(pT),{schedule:qh}=n_(queueMicrotask,!1),a_=ve.createContext({});function mT(t,e,n,i,r){var s,o;const{visualElement:a}=ve.useContext($c),l=ve.useContext(i_),c=ve.useContext(jh),u=ve.useContext(e_).reducedMotion,d=ve.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=ve.useContext(a_);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&gT(d.current,n,r,p);const v=ve.useRef(!1);ve.useInsertionEffect(()=>{f&&v.current&&f.update(n,c)});const _=n[o_],m=ve.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return tT(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),qh.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),ve.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,_)}),m.current=!1))}),f}function gT(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:l_(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ds(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function l_(t){if(t)return t.options.allowProjection!==!1?t.projection:l_(t.parent)}function vT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&sT(t);function a(c,u){let d;const f={...ve.useContext(e_),...c,layoutId:yT(c)},{isStatic:p}=f,v=dT(c),_=i(c,p);if(!p&&Wh){xT();const m=_T(f);d=m.MeasureLayout,v.visualElement=mT(r,_,f,e,m.ProjectionNode)}return x.jsxs($c.Provider,{value:v,children:[d&&v.visualElement?x.jsx(d,{visualElement:v.visualElement,...f}):null,n(r,c,hT(_,v.visualElement,u),_,p,v.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ve.forwardRef(a);return l[fT]=r,l}function yT({layoutId:t}){const e=ve.useContext(Jx).id;return e&&t!==void 0?e+"-"+t:t}function xT(t,e){ve.useContext(i_).strict}function _T(t){const{drag:e,layout:n}=eo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const ST=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zh(t){return typeof t!="string"||t.includes("-")?!1:!!(ST.indexOf(t)>-1||/[A-Z]/u.test(t))}function Ym(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Qh(t,e,n,i){if(typeof e=="function"){const[r,s]=Ym(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Ym(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Tf=t=>Array.isArray(t),MT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ET=t=>Tf(t)?t[t.length-1]||0:t,Xt=t=>!!(t&&t.getVelocity);function zl(t){const e=Xt(t)?t.get():t;return MT(e)?e.toValue():e}function TT({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:wT(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const c_=t=>(e,n)=>{const i=ve.useContext($c),r=ve.useContext(jh),s=()=>TT(t,e,i,r);return n?s():JE(s)};function wT(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=zl(s[f]);let{initial:o,animate:a}=t;const l=Kc(t),c=s_(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Yc(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const v=Qh(t,f[p]);if(v){const{transitionEnd:_,transition:m,...h}=v;for(const g in h){let y=h[g];if(Array.isArray(y)){const S=u?y.length-1:0;y=y[S]}y!==null&&(r[g]=y)}for(const g in _)r[g]=_[g]}}}return r}const fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],es=new Set(fo),u_=t=>e=>typeof e=="string"&&e.startsWith(t),d_=u_("--"),AT=u_("var(--"),Jh=t=>AT(t)?CT.test(t.split("/*")[0].trim()):!1,CT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,f_=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Li=(t,e,n)=>n>e?e:n<t?t:n,ho={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ya={...ho,transform:t=>Li(0,1,t)},nl={...ho,default:1},Ca=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Hi=Ca("deg"),ci=Ca("%"),Te=Ca("px"),bT=Ca("vh"),RT=Ca("vw"),Km={...ci,parse:t=>ci.parse(t)/100,transform:t=>ci.transform(t*100)},PT={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,radius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,backgroundPositionX:Te,backgroundPositionY:Te},DT={rotate:Hi,rotateX:Hi,rotateY:Hi,rotateZ:Hi,scale:nl,scaleX:nl,scaleY:nl,scaleZ:nl,skew:Hi,skewX:Hi,skewY:Hi,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:ya,originX:Km,originY:Km,originZ:Te},qm={...ho,transform:Math.round},ep={...PT,...DT,zIndex:qm,size:Te,fillOpacity:ya,strokeOpacity:ya,numOctaves:qm},LT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IT=fo.length;function NT(t,e,n){let i="",r=!0;for(let s=0;s<IT;s++){const o=fo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=f_(a,ep[o]);if(!l){r=!1;const u=LT[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function tp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(es.has(l)){o=!0;continue}else if(d_(l)){r[l]=c;continue}else{const u=f_(c,ep[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=NT(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const UT={offset:"stroke-dashoffset",array:"stroke-dasharray"},FT={offset:"strokeDashoffset",array:"strokeDasharray"};function kT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?UT:FT;t[s.offset]=Te.transform(-i);const o=Te.transform(e),a=Te.transform(n);t[s.array]=`${o} ${a}`}function Zm(t,e,n){return typeof t=="string"?t:Te.transform(e+n*t)}function OT(t,e,n){const i=Zm(e,t.x,t.width),r=Zm(n,t.y,t.height);return`${i} ${r}`}function np(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(tp(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:v}=t;f.transform&&(v&&(p.transform=f.transform),delete f.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=OT(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&kT(f,o,a,l,!1)}const ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),h_=()=>({...ip(),attrs:{}}),rp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function p_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const m_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function g_(t,e,n,i){p_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(m_.has(r)?r:Kh(r),e.attrs[r])}const mc={};function BT(t){Object.assign(mc,t)}function v_(t,{layout:e,layoutId:n}){return es.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!mc[t]||t==="opacity")}function sp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Xt(r[o])||e.style&&Xt(e.style[o])||v_(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function y_(t,e,n){const i=sp(t,e,n);for(const r in t)if(Xt(t[r])||Xt(e[r])){const s=fo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function zT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Qm=["x","y","width","height","cx","cy","r"],VT={useVisualState:c_({scrapeMotionValuesFromProps:y_,createRenderState:h_,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(es.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Qm.length;a++){const l=Qm[a];t[l]!==e[l]&&(o=!0)}o&&ot.read(()=>{zT(n,i),ot.render(()=>{np(i,r,rp(n.tagName),t.transformTemplate),g_(n,i)})})}})},HT={useVisualState:c_({scrapeMotionValuesFromProps:sp,createRenderState:ip})};function x_(t,e,n){for(const i in e)!Xt(e[i])&&!v_(i,n)&&(t[i]=e[i])}function GT({transformTemplate:t},e){return ve.useMemo(()=>{const n=ip();return tp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function jT(t,e){const n=t.style||{},i={};return x_(i,n,t),Object.assign(i,GT(t,e)),i}function WT(t,e){const n={},i=jT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function XT(t,e,n,i){const r=ve.useMemo(()=>{const s=h_();return np(s,e,rp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};x_(s,t.style,t),r.style={...s,...r.style}}return r}function $T(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Zh(n)?XT:WT)(i,s,o,n),c=lT(i,typeof n=="string",t),u=n!==ve.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=ve.useMemo(()=>Xt(d)?d.get():d,[d]);return ve.createElement(n,{...u,children:f})}}function YT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Zh(i)?VT:HT,preloadedFeatures:t,useRender:$T(r),createVisualElement:e,Component:i};return vT(o)}}function __(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function qc(t,e,n){const i=t.getProps();return Qh(i,e,n!==void 0?n:i.custom,t)}const KT=Xh(()=>window.ScrollTimeline!==void 0);class qT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(KT()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ZT extends qT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function op(t,e){return t?t[e]||t.default||t:void 0}const wf=2e4;function S_(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<wf;)e+=n,i=t.next(e);return e>=wf?1/0:e}function ap(t){return typeof t=="function"}function Jm(t,e){t.timeline=e,t.onfinish=null}const lp=t=>Array.isArray(t)&&typeof t[0]=="number",QT={linearEasing:void 0};function JT(t,e){const n=Xh(t);return()=>{var i;return(i=QT[e])!==null&&i!==void 0?i:n()}}const gc=JT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),M_=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Js(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function E_(t){return!!(typeof t=="function"&&gc()||!t||typeof t=="string"&&(t in Af||gc())||lp(t)||Array.isArray(t)&&t.every(E_))}const Fo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Af={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function T_(t,e){if(t)return typeof t=="function"&&gc()?M_(t,e):lp(t)?Fo(t):Array.isArray(t)?t.map(n=>T_(n,e)||Af.easeOut):Af[t]}const Hn={x:!1,y:!1};function w_(){return Hn.x||Hn.y}function ew(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function A_(t,e){const n=ew(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function eg(t){return e=>{e.pointerType==="touch"||w_()||t(e)}}function tw(t,e,n={}){const[i,r,s]=A_(t,n),o=eg(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=eg(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const C_=(t,e)=>e?t===e?!0:C_(t,e.parentElement):!1,cp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,nw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function iw(t){return nw.has(t.tagName)||t.tabIndex!==-1}const ko=new WeakSet;function tg(t){return e=>{e.key==="Enter"&&t(e)}}function Uu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const rw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=tg(()=>{if(ko.has(n))return;Uu(n,"down");const r=tg(()=>{Uu(n,"up")}),s=()=>Uu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function ng(t){return cp(t)&&!w_()}function sw(t,e,n={}){const[i,r,s]=A_(t,n),o=a=>{const l=a.currentTarget;if(!ng(a)||ko.has(l))return;ko.add(l);const c=e(a),u=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!ng(p)||!ko.has(l))&&(ko.delete(l),typeof c=="function"&&c(p,{success:v}))},d=p=>{u(p,n.useGlobalTarget||C_(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!iw(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>rw(c,r),r)}),s}function ow(t){return t==="x"||t==="y"?Hn[t]?null:(Hn[t]=!0,()=>{Hn[t]=!1}):Hn.x||Hn.y?null:(Hn.x=Hn.y=!0,()=>{Hn.x=Hn.y=!1})}const b_=new Set(["width","height","top","left","right","bottom",...fo]);let Vl;function aw(){Vl=void 0}const ui={now:()=>(Vl===void 0&&ui.set(kt.isProcessing||nT.useManualTiming?kt.timestamp:performance.now()),Vl),set:t=>{Vl=t,queueMicrotask(aw)}};function up(t,e){t.indexOf(e)===-1&&t.push(e)}function dp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class fp{constructor(){this.subscriptions=[]}add(e){return up(this.subscriptions,e),()=>dp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function R_(t,e){return e?t*(1e3/e):0}const ig=30,lw=t=>!isNaN(parseFloat(t));class cw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ui.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=lw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new fp);const i=this.events[e].add(n);return e==="change"?()=>{i(),ot.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ig)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ig);return R_(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xa(t,e){return new cw(t,e)}function uw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,xa(n))}function dw(t,e){const n=qc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=ET(s[o]);uw(t,o,a)}}function fw(t){return!!(Xt(t)&&t.add)}function Cf(t,e){const n=t.getValue("willChange");if(fw(n))return n.add(e)}function P_(t){return t.props[o_]}const D_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,hw=1e-7,pw=12;function mw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=D_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>hw&&++a<pw);return o}function ba(t,e,n,i){if(t===e&&n===i)return Sn;const r=s=>mw(s,0,1,t,n);return s=>s===0||s===1?s:D_(r(s),e,i)}const L_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,I_=t=>e=>1-t(1-e),N_=ba(.33,1.53,.69,.99),hp=I_(N_),U_=L_(hp),F_=t=>(t*=2)<1?.5*hp(t):.5*(2-Math.pow(2,-10*(t-1))),pp=t=>1-Math.sin(Math.acos(t)),k_=I_(pp),O_=L_(pp),B_=t=>/^0[^.\s]+$/u.test(t);function gw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||B_(t):!0}const qo=t=>Math.round(t*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function vw(t){return t==null}const yw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gp=(t,e)=>n=>!!(typeof n=="string"&&yw.test(n)&&n.startsWith(t)||e&&!vw(n)&&Object.prototype.hasOwnProperty.call(n,e)),z_=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(mp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},xw=t=>Li(0,255,t),Fu={...ho,transform:t=>Math.round(xw(t))},Br={test:gp("rgb","red"),parse:z_("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Fu.transform(t)+", "+Fu.transform(e)+", "+Fu.transform(n)+", "+qo(ya.transform(i))+")"};function _w(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const bf={test:gp("#"),parse:_w,transform:Br.transform},Ls={test:gp("hsl","hue"),parse:z_("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ci.transform(qo(e))+", "+ci.transform(qo(n))+", "+qo(ya.transform(i))+")"},jt={test:t=>Br.test(t)||bf.test(t)||Ls.test(t),parse:t=>Br.test(t)?Br.parse(t):Ls.test(t)?Ls.parse(t):bf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Br.transform(t):Ls.transform(t)},Sw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Mw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(mp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Sw))===null||n===void 0?void 0:n.length)||0)>0}const V_="number",H_="color",Ew="var",Tw="var(",rg="${}",ww=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _a(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(ww,l=>(jt.test(l)?(i.color.push(s),r.push(H_),n.push(jt.parse(l))):l.startsWith(Tw)?(i.var.push(s),r.push(Ew),n.push(l)):(i.number.push(s),r.push(V_),n.push(parseFloat(l))),++s,rg)).split(rg);return{values:n,split:a,indexes:i,types:r}}function G_(t){return _a(t).values}function j_(t){const{split:e,types:n}=_a(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===V_?s+=qo(r[o]):a===H_?s+=jt.transform(r[o]):s+=r[o]}return s}}const Aw=t=>typeof t=="number"?0:t;function Cw(t){const e=G_(t);return j_(t)(e.map(Aw))}const ur={test:Mw,parse:G_,createTransformer:j_,getAnimatableNone:Cw},bw=new Set(["brightness","contrast","saturate","opacity"]);function Rw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(mp)||[];if(!i)return t;const r=n.replace(i,"");let s=bw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Pw=/\b([a-z-]*)\(.*?\)/gu,Rf={...ur,getAnimatableNone:t=>{const e=t.match(Pw);return e?e.map(Rw).join(" "):t}},Dw={...ep,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:Rf,WebkitFilter:Rf},vp=t=>Dw[t];function W_(t,e){let n=vp(t);return n!==Rf&&(n=ur),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Lw=new Set(["auto","none","0"]);function Iw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Lw.has(s)&&_a(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=W_(n,r)}const sg=t=>t===ho||t===Te,og=(t,e)=>parseFloat(t.split(", ")[e]),ag=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return og(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?og(s[1],t):0}},Nw=new Set(["x","y","z"]),Uw=fo.filter(t=>!Nw.has(t));function Fw(t){const e=[];return Uw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:ag(4,13),y:ag(5,14)};to.translateX=to.x;to.translateY=to.y;const jr=new Set;let Pf=!1,Df=!1;function X_(){if(Df){const t=Array.from(jr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Fw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Df=!1,Pf=!1,jr.forEach(t=>t.complete()),jr.clear()}function $_(){jr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Df=!0)})}function kw(){$_(),X_()}class yp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),Pf||(Pf=!0,ot.read($_),ot.resolveKeyframes(X_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Y_=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Ow=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Bw(t){const e=Ow.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function K_(t,e,n=1){const[i,r]=Bw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Y_(o)?parseFloat(o):o}return Jh(r)?K_(r,e,n+1):r}const q_=t=>e=>e.test(t),zw={test:t=>t==="auto",parse:t=>t},Z_=[ho,Te,ci,Hi,RT,bT,zw],lg=t=>Z_.find(q_(t));class Q_ extends yp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Jh(c))){const u=K_(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!b_.has(i)||e.length!==2)return;const[r,s]=e,o=lg(r),a=lg(s);if(o!==a)if(sg(o)&&sg(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)gw(e[r])&&i.push(r);i.length&&Iw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const cg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ur.test(t)||t==="0")&&!t.startsWith("url("));function Vw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Hw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=cg(r,e),a=cg(s,e);return!o||!a?!1:Vw(t)||(n==="spring"||ap(n))&&i}const Gw=t=>t!==null;function Zc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Gw),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const jw=40;class J_{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ui.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>jw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&kw(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ui.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Hw(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Zc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const dt=(t,e,n)=>t+(e-t)*n;function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ww({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=ku(l,a,t+1/3),s=ku(l,a,t),o=ku(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function vc(t,e){return n=>n>0?e:t}const Ou=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Xw=[bf,Br,Ls],$w=t=>Xw.find(e=>e.test(t));function ug(t){const e=$w(t);if(!e)return!1;let n=e.parse(t);return e===Ls&&(n=Ww(n)),n}const dg=(t,e)=>{const n=ug(t),i=ug(e);if(!n||!i)return vc(t,e);const r={...n};return s=>(r.red=Ou(n.red,i.red,s),r.green=Ou(n.green,i.green,s),r.blue=Ou(n.blue,i.blue,s),r.alpha=dt(n.alpha,i.alpha,s),Br.transform(r))},Yw=(t,e)=>n=>e(t(n)),Ra=(...t)=>t.reduce(Yw),Lf=new Set(["none","hidden"]);function Kw(t,e){return Lf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function qw(t,e){return n=>dt(t,e,n)}function xp(t){return typeof t=="number"?qw:typeof t=="string"?Jh(t)?vc:jt.test(t)?dg:Jw:Array.isArray(t)?eS:typeof t=="object"?jt.test(t)?dg:Zw:vc}function eS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>xp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function Zw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=xp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function Qw(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const Jw=(t,e)=>{const n=ur.createTransformer(e),i=_a(t),r=_a(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Lf.has(t)&&!r.values.length||Lf.has(e)&&!i.values.length?Kw(t,e):Ra(eS(Qw(i,r),r.values),n):vc(t,e)};function tS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?dt(t,e,n):xp(t)(t,e)}const eA=5;function nS(t,e,n){const i=Math.max(e-eA,0);return R_(n-t(i),e-i)}const vt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bu=.001;function tA({duration:t=vt.duration,bounce:e=vt.bounce,velocity:n=vt.velocity,mass:i=vt.mass}){let r,s,o=1-e;o=Li(vt.minDamping,vt.maxDamping,o),t=Li(vt.minDuration,vt.maxDuration,Ci(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=If(c,o),v=Math.exp(-d);return Bu-f/p*v},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),_=If(Math.pow(c,2),o);return(-r(c)+Bu>0?-1:1)*((f-p)*v)/_}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Bu+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=iA(r,s,a);if(t=Ai(t),isNaN(l))return{stiffness:vt.stiffness,damping:vt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const nA=12;function iA(t,e,n){let i=n;for(let r=1;r<nA;r++)i=i-t(i)/e(i);return i}function If(t,e){return t*Math.sqrt(1-e*e)}const rA=["duration","bounce"],sA=["stiffness","damping","mass"];function fg(t,e){return e.some(n=>t[n]!==void 0)}function oA(t){let e={velocity:vt.velocity,stiffness:vt.stiffness,damping:vt.damping,mass:vt.mass,isResolvedFromDuration:!1,...t};if(!fg(t,sA)&&fg(t,rA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Li(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:vt.mass,stiffness:r,damping:s}}else{const n=tA(t);e={...e,...n,mass:vt.mass},e.isResolvedFromDuration=!0}return e}function iS(t=vt.visualDuration,e=vt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=oA({...n,velocity:-Ci(n.velocity||0)}),v=f||0,_=c/(2*Math.sqrt(l*u)),m=o-s,h=Ci(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?vt.restSpeed.granular:vt.restSpeed.default),r||(r=g?vt.restDelta.granular:vt.restDelta.default);let y;if(_<1){const R=If(h,_);y=A=>{const C=Math.exp(-_*h*A);return o-C*((v+_*h*m)/R*Math.sin(R*A)+m*Math.cos(R*A))}}else if(_===1)y=R=>o-Math.exp(-h*R)*(m+(v+h*m)*R);else{const R=h*Math.sqrt(_*_-1);y=A=>{const C=Math.exp(-_*h*A),b=Math.min(R*A,300);return o-C*((v+_*h*m)*Math.sinh(b)+R*m*Math.cosh(b))/R}}const S={calculatedDuration:p&&d||null,next:R=>{const A=y(R);if(p)a.done=R>=d;else{let C=0;_<1&&(C=R===0?Ai(v):nS(y,R,A));const b=Math.abs(C)<=i,E=Math.abs(o-A)<=r;a.done=b&&E}return a.value=a.done?o:A,a},toString:()=>{const R=Math.min(S_(S),wf),A=M_(C=>S.next(R*C).value,R,30);return R+"ms "+A}};return S}function hg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,v=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let _=n*e;const m=d+_,h=o===void 0?m:o(m);h!==m&&(_=h-d);const g=b=>-_*Math.exp(-b/i),y=b=>h+g(b),S=b=>{const E=g(b),M=y(b);f.done=Math.abs(E)<=c,f.value=f.done?h:M};let R,A;const C=b=>{p(f.value)&&(R=b,A=iS({keyframes:[f.value,v(f.value)],velocity:nS(y,b,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:b=>{let E=!1;return!A&&R===void 0&&(E=!0,S(b),C(b)),R!==void 0&&b>=R?A.next(b-R):(!E&&S(b),f)}}}const aA=ba(.42,0,1,1),lA=ba(0,0,.58,1),rS=ba(.42,0,.58,1),cA=t=>Array.isArray(t)&&typeof t[0]!="number",uA={linear:Sn,easeIn:aA,easeInOut:rS,easeOut:lA,circIn:pp,circInOut:O_,circOut:k_,backIn:hp,backInOut:U_,backOut:N_,anticipate:F_},pg=t=>{if(lp(t)){t_(t.length===4);const[e,n,i,r]=t;return ba(e,n,i,r)}else if(typeof t=="string")return uA[t];return t};function dA(t,e,n){const i=[],r=n||tS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Sn:e;a=Ra(l,a)}i.push(a)}return i}function fA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(t_(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=dA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Js(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Li(t[0],t[s-1],u)):c}function hA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Js(0,e,i);t.push(dt(n,1,r))}}function pA(t){const e=[0];return hA(e,t.length-1),e}function mA(t,e){return t.map(n=>n*e)}function gA(t,e){return t.map(()=>e||rS).splice(0,t.length-1)}function yc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=cA(i)?i.map(pg):pg(i),s={done:!1,value:e[0]},o=mA(n&&n.length===e.length?n:pA(e),t),a=fA(o,e,{ease:Array.isArray(r)?r:gA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const vA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ot.update(e,!0),stop:()=>cr(e),now:()=>kt.isProcessing?kt.timestamp:ui.now()}},yA={decay:hg,inertia:hg,tween:yc,keyframes:yc,spring:iS},xA=t=>t/100;class _p extends J_{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||yp,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=ap(n)?n:yA[n]||yc;let l,c;a!==yc&&typeof e[0]!="number"&&(l=Ra(xA,tS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=S_(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:v,repeatDelay:_,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,S=s;if(p){const b=Math.min(this.currentTime,u)/d;let E=Math.floor(b),M=b%1;!M&&b>=1&&(M=1),M===1&&E--,E=Math.min(E,p+1),!!(E%2)&&(v==="reverse"?(M=1-M,_&&(M-=_/d)):v==="mirror"&&(S=o)),y=Li(0,1,M)*d}const R=g?{done:!1,value:l[0]}:S.next(y);a&&(R.value=a(R.value));let{done:A}=R;!g&&c!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&r!==void 0&&(R.value=Zc(l,this.options,r)),m&&m(R.value),C&&this.finish(),R}get duration(){const{resolved:e}=this;return e?Ci(e.calculatedDuration):0}get time(){return Ci(this.currentTime)}set time(e){e=Ai(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ci(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=vA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const _A=new Set(["opacity","clipPath","filter","transform"]);function SA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=T_(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const MA=Xh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),xc=10,EA=2e4;function TA(t){return ap(t.type)||t.type==="spring"||!E_(t.ease)}function wA(t,e){const n=new _p({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<EA;)i=n.sample(s),r.push(i.value),s+=xc;return{times:void 0,keyframes:r,duration:s-xc,ease:"linear"}}const sS={anticipate:F_,backInOut:U_,circInOut:O_};function AA(t){return t in sS}class mg extends J_{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new Q_(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&gc()&&AA(s)&&(s=sS[s]),TA(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:v,..._}=this.options,m=wA(e,_);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=SA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Jm(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Zc(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ci(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ci(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Sn;const{animation:i}=n;Jm(i,e)}return Sn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,v=new _p({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=Ai(this.time);c.setWithVelocity(v.sample(_-xc).value,v.sample(_).value,xc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return MA()&&i&&_A.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const CA={type:"spring",stiffness:500,damping:25,restSpeed:10},bA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),RA={type:"keyframes",duration:.8},PA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DA=(t,{keyframes:e})=>e.length>2?RA:es.has(t)?t.startsWith("scale")?bA(e[1]):CA:PA;function LA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Sp=(t,e,n,i={},r,s)=>o=>{const a=op(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ai(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};LA(a)||(u={...u,...DA(t,u)}),u.duration&&(u.duration=Ai(u.duration)),u.repeatDelay&&(u.repeatDelay=Ai(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Zc(u.keyframes,a);if(f!==void 0)return ot.update(()=>{u.onUpdate(f),u.onComplete()}),new ZT([])}return!s&&mg.supports(u)?new mg(u):new _p(u)};function IA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function oS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&IA(u,d))continue;const v={delay:n,...op(o||{},d)};let _=!1;if(window.MotionHandoffAnimation){const h=P_(t);if(h){const g=window.MotionHandoffAnimation(h,d,ot);g!==null&&(v.startTime=g,_=!0)}}Cf(t,d),f.start(Sp(d,f,p,t.shouldReduceMotion&&b_.has(d)?{type:!1}:v,t,_));const m=f.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{ot.update(()=>{a&&dw(t,a)})}),c}function Nf(t,e,n={}){var i;const r=qc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(oS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return NA(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function NA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(UA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Nf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function UA(t,e){return t.sortNodePosition(e)}function FA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Nf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Nf(t,e,n);else{const r=typeof e=="function"?qc(t,e,n.custom):e;i=Promise.all(oS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const kA=Yh.length;function aS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?aS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<kA;n++){const i=Yh[n],r=t.props[i];(va(r)||r===!1)&&(e[i]=r)}return e}const OA=[...$h].reverse(),BA=$h.length;function zA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>FA(t,n,i)))}function VA(t){let e=zA(t),n=gg(),i=!0;const r=l=>(c,u)=>{var d;const f=qc(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:v,..._}=f;c={...c,..._,...v}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=aS(t.parent)||{},d=[],f=new Set;let p={},v=1/0;for(let m=0;m<BA;m++){const h=OA[m],g=n[h],y=c[h]!==void 0?c[h]:u[h],S=va(y),R=h===l?g.isActive:null;R===!1&&(v=m);let A=y===u[h]&&y!==c[h]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),g.protectedKeys={...p},!g.isActive&&R===null||!y&&!g.prevProp||Yc(y)||typeof y=="boolean")continue;const C=HA(g.prevProp,y);let b=C||h===l&&g.isActive&&!A&&S||m>v&&S,E=!1;const M=Array.isArray(y)?y:[y];let D=M.reduce(r(h),{});R===!1&&(D={});const{prevResolvedValues:O={}}=g,B={...O,...D},j=X=>{b=!0,f.has(X)&&(E=!0,f.delete(X)),g.needsAnimating[X]=!0;const I=t.getValue(X);I&&(I.liveStyle=!1)};for(const X in B){const I=D[X],K=O[X];if(p.hasOwnProperty(X))continue;let q=!1;Tf(I)&&Tf(K)?q=!__(I,K):q=I!==K,q?I!=null?j(X):f.add(X):I!==void 0&&f.has(X)?j(X):g.protectedKeys[X]=!0}g.prevProp=y,g.prevResolvedValues=D,g.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(A&&C)||E)&&d.push(...M.map(X=>({animation:X,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const g=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),m[h]=g??null}),d.push({animation:m})}let _=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=gg(),i=!0}}}function HA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!__(e,t):!1}function Sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gg(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}class vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class GA extends vr{constructor(e){super(e),e.animationState||(e.animationState=VA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let jA=0;class WA extends vr{constructor(){super(...arguments),this.id=jA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const XA={animation:{Feature:GA},exit:{Feature:WA}};function Sa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Pa(t){return{point:{x:t.pageX,y:t.pageY}}}const $A=t=>e=>cp(e)&&t(e,Pa(e));function Zo(t,e,n,i){return Sa(t,e,$A(n),i)}const vg=(t,e)=>Math.abs(t-e);function YA(t,e){const n=vg(t.x,e.x),i=vg(t.y,e.y);return Math.sqrt(n**2+i**2)}class lS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Vu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=YA(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:v}=d,{timestamp:_}=kt;this.history.push({...v,timestamp:_});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=zu(f,this.transformPagePoint),ot.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Vu(d.type==="pointercancel"?this.lastMoveEventInfo:zu(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),v&&v(d,m)},!cp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Pa(e),a=zu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=kt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Vu(a,this.history)),this.removeListeners=Ra(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),cr(this.updatePoint)}}function zu(t,e){return e?{point:e(t.point)}:t}function yg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Vu({point:t},e){return{point:t,delta:yg(t,cS(e)),offset:yg(t,KA(e)),velocity:qA(e,.1)}}function KA(t){return t[0]}function cS(t){return t[t.length-1]}function qA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=cS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ai(e)));)n--;if(!i)return{x:0,y:0};const s=Ci(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const uS=1e-4,ZA=1-uS,QA=1+uS,dS=.01,JA=0-dS,eC=0+dS;function En(t){return t.max-t.min}function tC(t,e,n){return Math.abs(t-e)<=n}function xg(t,e,n,i=.5){t.origin=i,t.originPoint=dt(e.min,e.max,t.origin),t.scale=En(n)/En(e),t.translate=dt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=ZA&&t.scale<=QA||isNaN(t.scale))&&(t.scale=1),(t.translate>=JA&&t.translate<=eC||isNaN(t.translate))&&(t.translate=0)}function Qo(t,e,n,i){xg(t.x,e.x,n.x,i?i.originX:void 0),xg(t.y,e.y,n.y,i?i.originY:void 0)}function _g(t,e,n){t.min=n.min+e.min,t.max=t.min+En(e)}function nC(t,e,n){_g(t.x,e.x,n.x),_g(t.y,e.y,n.y)}function Sg(t,e,n){t.min=e.min-n.min,t.max=t.min+En(e)}function Jo(t,e,n){Sg(t.x,e.x,n.x),Sg(t.y,e.y,n.y)}function iC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?dt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?dt(n,t,i.max):Math.min(t,n)),t}function Mg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function rC(t,{top:e,left:n,bottom:i,right:r}){return{x:Mg(t.x,n,r),y:Mg(t.y,e,i)}}function Eg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function sC(t,e){return{x:Eg(t.x,e.x),y:Eg(t.y,e.y)}}function oC(t,e){let n=.5;const i=En(t),r=En(e);return r>i?n=Js(e.min,e.max-i,t.min):i>r&&(n=Js(t.min,t.max-r,e.min)),Li(0,1,n)}function aC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Uf=.35;function lC(t=Uf){return t===!1?t=0:t===!0&&(t=Uf),{x:Tg(t,"left","right"),y:Tg(t,"top","bottom")}}function Tg(t,e,n){return{min:wg(t,e),max:wg(t,n)}}function wg(t,e){return typeof t=="number"?t:t[e]||0}const Ag=()=>({translate:0,scale:1,origin:0,originPoint:0}),Is=()=>({x:Ag(),y:Ag()}),Cg=()=>({min:0,max:0}),Mt=()=>({x:Cg(),y:Cg()});function Rn(t){return[t("x"),t("y")]}function fS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function cC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function uC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Hu(t){return t===void 0||t===1}function Ff({scale:t,scaleX:e,scaleY:n}){return!Hu(t)||!Hu(e)||!Hu(n)}function Pr(t){return Ff(t)||hS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function hS(t){return bg(t.x)||bg(t.y)}function bg(t){return t&&t!=="0%"}function _c(t,e,n){const i=t-n,r=e*i;return n+r}function Rg(t,e,n,i,r){return r!==void 0&&(t=_c(t,r,i)),_c(t,n,i)+e}function kf(t,e=0,n=1,i,r){t.min=Rg(t.min,e,n,i,r),t.max=Rg(t.max,e,n,i,r)}function pS(t,{x:e,y:n}){kf(t.x,e.translate,e.scale,e.originPoint),kf(t.y,n.translate,n.scale,n.originPoint)}const Pg=.999999999999,Dg=1.0000000000001;function dC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Us(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,pS(t,o)),i&&Pr(s.latestValues)&&Us(t,s.latestValues))}e.x<Dg&&e.x>Pg&&(e.x=1),e.y<Dg&&e.y>Pg&&(e.y=1)}function Ns(t,e){t.min=t.min+e,t.max=t.max+e}function Lg(t,e,n,i,r=.5){const s=dt(t.min,t.max,r);kf(t,e,n,s,i)}function Us(t,e){Lg(t.x,e.x,e.scaleX,e.scale,e.originX),Lg(t.y,e.y,e.scaleY,e.scale,e.originY)}function mS(t,e){return fS(uC(t.getBoundingClientRect(),e))}function fC(t,e,n){const i=mS(t,n),{scroll:r}=e;return r&&(Ns(i.x,r.offset.x),Ns(i.y,r.offset.y)),i}const gS=({current:t})=>t?t.ownerDocument.defaultView:null,hC=new WeakMap;class pC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pa(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:v}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ow(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(ci.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const y=g.layout.layoutBox[m];y&&(h=En(y)*(parseFloat(h)/100))}}this.originPoint[m]=h}),v&&ot.postRender(()=>v(u,d)),Cf(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:v,onDrag:_}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=mC(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),_&&_(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Rn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new lS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:gS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ot.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!il(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=iC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ds(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=rC(r.layoutBox,n):this.constraints=!1,this.elastic=lC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=aC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ds(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=fC(i,r.root,this.visualElement.getTransformPagePoint());let o=sC(r.layout.layoutBox,s);if(n){const a=n(cC(o));this.hasMutatedConstraints=!!a,a&&(o=fS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Rn(u=>{if(!il(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Cf(this.visualElement,e),i.start(Sp(e,i,0,n,this.visualElement,!1))}stopAnimation(){Rn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Rn(n=>{const{drag:i}=this.getProps();if(!il(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-dt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ds(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=oC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Rn(o=>{if(!il(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(dt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;hC.set(this.visualElement,this);const e=this.visualElement.current,n=Zo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ds(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ot.read(i);const o=Sa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Rn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Uf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function il(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function mC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class gC extends vr{constructor(e){super(e),this.removeGroupControls=Sn,this.removeListeners=Sn,this.controls=new pC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ig=t=>(e,n)=>{t&&ot.postRender(()=>t(e,n))};class vC extends vr{constructor(){super(...arguments),this.removePointerDownListener=Sn}onPointerDown(e){this.session=new lS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ig(e),onStart:Ig(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ot.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ng(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=Ng(t,e.target.x),i=Ng(t,e.target.y);return`${n}% ${i}%`}},yC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ur.parse(t);if(r.length>5)return i;const s=ur.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=dt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class xC extends ve.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;BT(_C),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ot.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),qh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vS(t){const[e,n]=eT(),i=ve.useContext(Jx);return x.jsx(xC,{...t,layoutGroup:i,switchLayoutGroup:ve.useContext(a_),isPresent:e,safeToRemove:n})}const _C={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:yC};function SC(t,e,n){const i=Xt(t)?t:xa(t);return i.start(Sp("",i,e,n)),i.animation}function MC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const EC=(t,e)=>t.depth-e.depth;class TC{constructor(){this.children=[],this.isDirty=!1}add(e){up(this.children,e),this.isDirty=!0}remove(e){dp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(EC),this.isDirty=!1,this.children.forEach(e)}}function wC(t,e){const n=ui.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(cr(i),t(s-e))};return ot.read(i,!0),()=>cr(i)}const yS=["TopLeft","TopRight","BottomLeft","BottomRight"],AC=yS.length,Ug=t=>typeof t=="string"?parseFloat(t):t,Fg=t=>typeof t=="number"||Te.test(t);function CC(t,e,n,i,r,s){r?(t.opacity=dt(0,n.opacity!==void 0?n.opacity:1,bC(i)),t.opacityExit=dt(e.opacity!==void 0?e.opacity:1,0,RC(i))):s&&(t.opacity=dt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<AC;o++){const a=`border${yS[o]}Radius`;let l=kg(e,a),c=kg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Fg(l)===Fg(c)?(t[a]=Math.max(dt(Ug(l),Ug(c),i),0),(ci.test(c)||ci.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=dt(e.rotate||0,n.rotate||0,i))}function kg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const bC=xS(0,.5,k_),RC=xS(.5,.95,Sn);function xS(t,e,n){return i=>i<t?0:i>e?1:n(Js(t,e,i))}function Og(t,e){t.min=e.min,t.max=e.max}function Cn(t,e){Og(t.x,e.x),Og(t.y,e.y)}function Bg(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function zg(t,e,n,i,r){return t-=e,t=_c(t,1/n,i),r!==void 0&&(t=_c(t,1/r,i)),t}function PC(t,e=0,n=1,i=.5,r,s=t,o=t){if(ci.test(e)&&(e=parseFloat(e),e=dt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=dt(s.min,s.max,i);t===s&&(a-=e),t.min=zg(t.min,e,n,a,r),t.max=zg(t.max,e,n,a,r)}function Vg(t,e,[n,i,r],s,o){PC(t,e[n],e[i],e[r],e.scale,s,o)}const DC=["x","scaleX","originX"],LC=["y","scaleY","originY"];function Hg(t,e,n,i){Vg(t.x,e,DC,n?n.x:void 0,i?i.x:void 0),Vg(t.y,e,LC,n?n.y:void 0,i?i.y:void 0)}function Gg(t){return t.translate===0&&t.scale===1}function _S(t){return Gg(t.x)&&Gg(t.y)}function jg(t,e){return t.min===e.min&&t.max===e.max}function IC(t,e){return jg(t.x,e.x)&&jg(t.y,e.y)}function Wg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function SS(t,e){return Wg(t.x,e.x)&&Wg(t.y,e.y)}function Xg(t){return En(t.x)/En(t.y)}function $g(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class NC{constructor(){this.members=[]}add(e){up(this.members,e),e.scheduleRender()}remove(e){if(dp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Oo=typeof window<"u"&&window.MotionDebug!==void 0,Gu=["","X","Y","Z"],FC={visibility:"hidden"},Yg=1e3;let kC=0;function ju(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function MS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=P_(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ot,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&MS(i)}function ES({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=kC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Oo&&(Dr.totalNodes=Dr.resolvedTargetDeltas=Dr.recalculatedProjection=0),this.nodes.forEach(zC),this.nodes.forEach(WC),this.nodes.forEach(XC),this.nodes.forEach(VC),Oo&&window.MotionDebug.record(Dr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new TC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new fp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=MC(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=wC(f,250),Hl.hasAnimatedSinceResize&&(Hl.hasAnimatedSinceResize=!1,this.nodes.forEach(qg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||ZC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),g=!this.targetLayout||!SS(this.targetLayout,v)||p,y=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const S={...op(_,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||qg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($C),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&MS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kg);return}this.isUpdating||this.nodes.forEach(GC),this.isUpdating=!1,this.nodes.forEach(jC),this.nodes.forEach(OC),this.nodes.forEach(BC),this.clearAllSnapshots();const a=ui.now();kt.delta=Li(0,1e3/60,a-kt.timestamp),kt.timestamp=a,kt.isProcessing=!0,Nu.update.process(kt),Nu.preRender.process(kt),Nu.render.process(kt),kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(HC),this.sharedNodes.forEach(YC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!_S(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Pr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),QC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Mt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(JC))){const{scroll:u}=this.root;u&&(Ns(l.x,u.offset.x),Ns(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Mt();if(Cn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Cn(l,o),Ns(l.x,d.offset.x),Ns(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Mt();Cn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Us(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Pr(u.latestValues)&&Us(l,u.latestValues)}return Pr(this.latestValues)&&Us(l,this.latestValues),l}removeTransform(o){const a=Mt();Cn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Pr(c.latestValues))continue;Ff(c.latestValues)&&c.updateSnapshot();const u=Mt(),d=c.measurePageBox();Cn(u,d),Hg(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Pr(this.latestValues)&&Hg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=kt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),nC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Cn(this.target,this.layout.layoutBox),pS(this.target,this.targetDelta)):Cn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Jo(this.relativeTargetOrigin,this.target,p.target),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Oo&&Dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ff(this.parent.latestValues)||hS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===kt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Cn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;dC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Mt());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bg(this.prevProjectionDelta.x,this.projectionDelta.x),Bg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!$g(this.projectionDelta.x,this.prevProjectionDelta.x)||!$g(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Oo&&Dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Is(),this.projectionDelta=Is(),this.projectionDeltaWithTransform=Is()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Mt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,_=p!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(qC));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const R=S/1e3;Zg(d.x,o.x,R),Zg(d.y,o.y,R),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),KC(this.relativeTarget,this.relativeTargetOrigin,f,R),y&&IC(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Mt()),Cn(y,this.relativeTarget)),_&&(this.animationValues=u,CC(u,c,this.latestValues,R,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ot.update(()=>{Hl.hasAnimatedSinceResize=!0,this.currentAnimation=SC(0,Yg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&TS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Mt();const d=En(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=En(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Cn(a,l),Us(a,u),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new NC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&ju("z",o,c,this.animationValues);for(let u=0;u<Gu.length;u++)ju(`rotate${Gu[u]}`,o,c,this.animationValues),ju(`skew${Gu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return FC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=zl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=zl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Pr(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=UC(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const _ in mc){if(f[_]===void 0)continue;const{correct:m,applyTo:h}=mc[_],g=c.transform==="none"?f[_]:m(f[_],d);if(h){const y=h.length;for(let S=0;S<y;S++)c[h[S]]=g}else c[_]=g}return this.options.layoutId&&(c.pointerEvents=d===this?zl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Kg),this.root.sharedNodes.clear()}}}function OC(t){t.updateLayout()}function BC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Rn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=En(f);f.min=i[d].min,f.max=f.min+p}):TS(s,n.layoutBox,i)&&Rn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=En(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Is();Qo(a,i,n.layoutBox);const l=Is();o?Qo(l,t.applyTransform(r,!0),n.measuredBox):Qo(l,i,n.layoutBox);const c=!_S(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const v=Mt();Jo(v,n.layoutBox,f.layoutBox);const _=Mt();Jo(_,i,p.layoutBox),SS(v,_)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function zC(t){Oo&&Dr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function VC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function HC(t){t.clearSnapshot()}function Kg(t){t.clearMeasurements()}function GC(t){t.isLayoutDirty=!1}function jC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function qg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function WC(t){t.resolveTargetDelta()}function XC(t){t.calcProjection()}function $C(t){t.resetSkewAndRotation()}function YC(t){t.removeLeadSnapshot()}function Zg(t,e,n){t.translate=dt(e.translate,0,n),t.scale=dt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Qg(t,e,n,i){t.min=dt(e.min,n.min,i),t.max=dt(e.max,n.max,i)}function KC(t,e,n,i){Qg(t.x,e.x,n.x,i),Qg(t.y,e.y,n.y,i)}function qC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ZC={duration:.45,ease:[.4,0,.1,1]},Jg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ev=Jg("applewebkit/")&&!Jg("chrome/")?Math.round:Sn;function tv(t){t.min=ev(t.min),t.max=ev(t.max)}function QC(t){tv(t.x),tv(t.y)}function TS(t,e,n){return t==="position"||t==="preserve-aspect"&&!tC(Xg(e),Xg(n),.2)}function JC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const eb=ES({attachResizeListener:(t,e)=>Sa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wu={current:void 0},wS=ES({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Wu.current){const t=new eb({});t.mount(window),t.setOptions({layoutScroll:!0}),Wu.current=t}return Wu.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),tb={pan:{Feature:vC},drag:{Feature:gC,ProjectionNode:wS,MeasureLayout:vS}};function nv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ot.postRender(()=>s(e,Pa(e)))}class nb extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=tw(e,n=>(nv(this.node,n,"Start"),i=>nv(this.node,i,"End"))))}unmount(){}}class ib extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ra(Sa(this.node.current,"focus",()=>this.onFocus()),Sa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function iv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ot.postRender(()=>s(e,Pa(e)))}class rb extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=sw(e,n=>(iv(this.node,n,"Start"),(i,{success:r})=>iv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Of=new WeakMap,Xu=new WeakMap,sb=t=>{const e=Of.get(t.target);e&&e(t)},ob=t=>{t.forEach(sb)};function ab({root:t,...e}){const n=t||document;Xu.has(n)||Xu.set(n,{});const i=Xu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(ob,{root:t,...e})),i[r]}function lb(t,e,n){const i=ab(e);return Of.set(t,n),i.observe(t),()=>{Of.delete(t),i.unobserve(t)}}const cb={some:0,all:1};class ub extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:cb[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return lb(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(db(e,n))&&this.startObserver()}unmount(){}}function db({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const fb={inView:{Feature:ub},tap:{Feature:rb},focus:{Feature:ib},hover:{Feature:nb}},hb={layout:{ProjectionNode:wS,MeasureLayout:vS}},Bf={current:null},AS={current:!1};function pb(){if(AS.current=!0,!!Wh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bf.current=t.matches;t.addListener(e),e()}else Bf.current=!1}const mb=[...Z_,jt,ur],gb=t=>mb.find(q_(t)),rv=new WeakMap;function vb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Xt(r))t.addValue(i,r);else if(Xt(s))t.addValue(i,xa(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,xa(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const sv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class yb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=yp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ui.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ot.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Kc(n),this.isVariantNode=s_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];l[p]!==void 0&&Xt(v)&&v.set(l[p],!1)}}mount(e){this.current=e,rv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),AS.current||pb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){rv.delete(this.current),this.projection&&this.projection.unmount(),cr(this.notifyUpdate),cr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=es.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ot.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in eo){const n=eo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<sv.length;i++){const r=sv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=xa(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Y_(r)||B_(r))?r=parseFloat(r):!gb(r)&&ur.test(n)&&(r=W_(e,n)),this.setBaseTarget(e,Xt(r)?r.get():r)),Xt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Qh(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Xt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new fp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class CS extends yb{constructor(){super(...arguments),this.KeyframeResolver=Q_}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function xb(t){return window.getComputedStyle(t)}class _b extends CS{constructor(){super(...arguments),this.type="html",this.renderInstance=p_}readValueFromInstance(e,n){if(es.has(n)){const i=vp(n);return i&&i.default||0}else{const i=xb(e),r=(d_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return mS(e,n)}build(e,n,i){tp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return sp(e,n,i)}}class Sb extends CS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(es.has(n)){const i=vp(n);return i&&i.default||0}return n=m_.has(n)?n:Kh(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return y_(e,n,i)}build(e,n,i){np(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){g_(e,n,i,r)}mount(e){this.isSVGTag=rp(e.tagName),super.mount(e)}}const Mb=(t,e)=>Zh(t)?new Sb(e):new _b(e,{allowProjection:t!==ve.Fragment}),Eb=YT({...XA,...fb,...tb,...hb},Mb),an=cT(Eb);function Tb({onOpenBooking:t}){const[e,n]=ve.useState(!1),[i,r]=ve.useState(!1);return ve.useEffect(()=>{const s=()=>{n(window.scrollY>40)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),x.jsxs(an.header,{initial:{y:-60,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:"easeOut"},style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all 0.3s ease",background:e?"rgba(10, 27, 21, 0.95)":"rgba(10, 27, 21, 0.6)",backdropFilter:"blur(16px)",borderBottom:e?"1px solid rgba(212, 175, 55, 0.2)":"1px solid rgba(255, 255, 255, 0.05)",padding:e?"0.7rem 0":"1.1rem 0"},children:[x.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",gap:"1rem"},children:[x.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.65rem",flexShrink:0},children:[x.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"linear-gradient(135deg, #d4af37 0%, #8a6c17 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#0a1b15",fontWeight:"700",fontSize:"1.15rem",fontFamily:"var(--font-serif)",boxShadow:"0 0 12px rgba(212, 175, 55, 0.35)",flexShrink:0},children:"S"}),x.jsxs("div",{style:{whiteSpace:"nowrap"},children:[x.jsxs("div",{style:{fontFamily:"var(--font-serif)",fontSize:"1.3rem",fontWeight:"700",letterSpacing:"0.02em",color:"var(--text-primary)",lineHeight:1.1},children:["Saru's ",x.jsx("span",{style:{color:"var(--accent-gold)"},children:"Fashion Studio"})]}),x.jsxs("div",{style:{fontSize:"0.65rem",letterSpacing:"0.12em",color:"var(--accent-gold-light)",textTransform:"uppercase",display:"flex",alignItems:"center",gap:"0.3rem"},children:[x.jsx("span",{children:"📍 Kondapur"}),x.jsx("span",{style:{opacity:.5},children:"•"}),x.jsx("span",{children:"Moti Nagar"})]})]})]}),x.jsxs("nav",{style:{display:"none",alignItems:"center",gap:"1.4rem",whiteSpace:"nowrap",flexShrink:1},className:"desktop-nav",children:[x.jsx("a",{href:"#about",className:"nav-link",children:"Our Story"}),x.jsx("a",{href:"#services",className:"nav-link",children:"4 Core Services"}),x.jsx("a",{href:"#gallery",className:"nav-link",children:"Studio Work"}),x.jsxs("a",{href:"#estimator",className:"nav-link",style:{color:"var(--accent-gold-light)",display:"inline-flex",alignItems:"center",gap:"0.25rem"},children:[x.jsx(qr,{size:13})," Style Estimator"]}),x.jsx("a",{href:"#trust",className:"nav-link",children:"Experience"}),x.jsx("a",{href:"#contact",className:"nav-link",children:"Locations"})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",flexShrink:0,whiteSpace:"nowrap"},children:[x.jsxs("a",{href:"tel:+919876543210",style:{display:"none",alignItems:"center",gap:"0.4rem",fontSize:"0.82rem",color:"var(--text-secondary)",padding:"0.45rem 0.85rem",borderRadius:"var(--radius-full)",border:"1px solid var(--border-gold)",background:"rgba(212, 175, 55, 0.06)",whiteSpace:"nowrap",flexShrink:0},className:"desktop-phone",children:[x.jsx(Ef,{size:13,style:{color:"var(--accent-gold)"}}),x.jsx("span",{style:{fontWeight:"600",letterSpacing:"0.02em",whiteSpace:"nowrap"},children:"+91 98765 43210"})]}),x.jsxs("button",{onClick:t,className:"btn btn-gold",style:{padding:"0.55rem 1.15rem",fontSize:"0.84rem",whiteSpace:"nowrap",flexShrink:0},children:[x.jsx(Wc,{size:14}),x.jsx("span",{children:"Book Consultation"})]}),x.jsx("button",{onClick:()=>r(!i),style:{color:"var(--text-primary)",padding:"0.35rem",display:"flex",flexShrink:0},className:"mobile-toggle","aria-label":"Toggle menu",children:i?x.jsx(Xc,{size:24}):x.jsx(YE,{size:24})})]})]}),i&&x.jsxs(an.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},style:{position:"absolute",top:"100%",left:0,right:0,background:"rgba(10, 27, 21, 0.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--border-gold)",padding:"1.75rem 1.5rem",display:"flex",flexDirection:"column",gap:"1.1rem",boxShadow:"0 20px 30px rgba(0,0,0,0.6)"},children:[x.jsx("a",{href:"#about",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--text-primary)"},children:"Our Story"}),x.jsx("a",{href:"#services",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--text-primary)"},children:"4 Core Services"}),x.jsx("a",{href:"#gallery",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--text-primary)"},children:"Collections & Portfolio"}),x.jsx("a",{href:"#estimator",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--accent-gold)"},children:"✨ Interactive Style Estimator"}),x.jsx("a",{href:"#trust",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--text-primary)"},children:"Studio Locations & Reviews"}),x.jsx("a",{href:"#contact",onClick:()=>r(!1),style:{fontSize:"1rem",color:"var(--text-primary)"},children:"Kondapur & Moti Nagar Addresses"}),x.jsxs("div",{style:{paddingTop:"1rem",borderTop:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",gap:"0.65rem"},children:[x.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[x.jsx(si,{size:14,style:{color:"var(--accent-gold)"}})," Studios in Kondapur & Moti Nagar"]}),x.jsxs("a",{href:"tel:+919876543210",style:{fontSize:"0.88rem",color:"var(--accent-gold-light)",display:"flex",alignItems:"center",gap:"0.4rem",whiteSpace:"nowrap"},children:[x.jsx(Ef,{size:14})," Call Studio: +91 98765 43210"]})]})]}),x.jsx("style",{children:`
        .nav-link {
          font-size: 0.86rem;
          color: var(--text-secondary);
          transition: var(--transition);
          font-weight: 500;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--accent-gold);
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-phone { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="165",wb=0,ov=1,Ab=2,bS=1,Cb=2,yi=3,dr=0,dn=1,Si=2,sr=0,Gs=1,av=2,lv=3,cv=4,bb=5,Nr=100,Rb=101,Pb=102,Db=103,Lb=104,Ib=200,Nb=201,Ub=202,Fb=203,zf=204,Vf=205,kb=206,Ob=207,Bb=208,zb=209,Vb=210,Hb=211,Gb=212,jb=213,Wb=214,Xb=0,$b=1,Yb=2,Sc=3,Kb=4,qb=5,Zb=6,Qb=7,RS=0,Jb=1,eR=2,or=0,tR=1,nR=2,iR=3,rR=4,sR=5,oR=6,aR=7,PS=300,no=301,io=302,Hf=303,Gf=304,Qc=306,jf=1e3,zr=1001,Wf=1002,In=1003,lR=1004,rl=1005,Xn=1006,$u=1007,Vr=1008,fr=1009,cR=1010,uR=1011,Mc=1012,DS=1013,ro=1014,qi=1015,Jc=1016,LS=1017,IS=1018,so=1020,dR=35902,fR=1021,hR=1022,oi=1023,pR=1024,mR=1025,js=1026,oo=1027,gR=1028,NS=1029,vR=1030,US=1031,FS=1033,Yu=33776,Ku=33777,qu=33778,Zu=33779,uv=35840,dv=35841,fv=35842,hv=35843,pv=36196,mv=37492,gv=37496,vv=37808,yv=37809,xv=37810,_v=37811,Sv=37812,Mv=37813,Ev=37814,Tv=37815,wv=37816,Av=37817,Cv=37818,bv=37819,Rv=37820,Pv=37821,Qu=36492,Dv=36494,Lv=36495,yR=36283,Iv=36284,Nv=36285,Uv=36286,xR=3200,_R=3201,kS=0,SR=1,$i="",ti="srgb",yr="srgb-linear",Ep="display-p3",eu="display-p3-linear",Ec="linear",rt="srgb",Tc="rec709",wc="p3",ns=7680,Fv=519,MR=512,ER=513,TR=514,OS=515,wR=516,AR=517,CR=518,bR=519,kv=35044,Ov="300 es",Ti=2e3,Ac=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,Xf=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function RR(t,e){return(t%e+e)%e}function ed(t,e,n){return(1-n)*t+n*e}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,n,i,r,s,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],h=r[6],g=r[1],y=r[4],S=r[7],R=r[2],A=r[5],C=r[8];return s[0]=o*_+a*g+l*R,s[3]=o*m+a*y+l*A,s[6]=o*h+a*S+l*C,s[1]=c*_+u*g+d*R,s[4]=c*m+u*y+d*A,s[7]=c*h+u*S+d*C,s[2]=f*_+p*g+v*R,s[5]=f*m+p*y+v*A,s[8]=f*h+p*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(td.makeScale(e,n)),this}rotate(e){return this.premultiply(td.makeRotation(-e)),this}translate(e,n){return this.premultiply(td.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const td=new Le;function BS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PR(){const t=Cc("canvas");return t.style.display="block",t}const Bv={};function zS(t){t in Bv||(Bv[t]=!0,console.warn(t))}function DR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zv=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vv=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sl={[yr]:{transfer:Ec,primaries:Tc,toReference:t=>t,fromReference:t=>t},[ti]:{transfer:rt,primaries:Tc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[eu]:{transfer:Ec,primaries:wc,toReference:t=>t.applyMatrix3(Vv),fromReference:t=>t.applyMatrix3(zv)},[Ep]:{transfer:rt,primaries:wc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Vv),fromReference:t=>t.applyMatrix3(zv).convertLinearToSRGB()}},LR=new Set([yr,eu]),Qe={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sl[e].toReference,r=sl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sl[t].primaries},getTransfer:function(t){return t===$i?Ec:sl[t].transfer}};function Ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class IR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Cc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ws(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ws(n[i]/255)*255):n[i]=Ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NR=0;class VS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NR++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(id(r[o].image)):s.push(id(r[o]))}else s=id(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function id(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UR=0;class fn extends po{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=zr,r=zr,s=Xn,o=Vr,a=oi,l=fr,c=fn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UR++}),this.uuid=Da(),this.name="",this.source=new VS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==PS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=PS;fn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,R=(h+1)/2,A=(u+f)/4,C=(d+_)/4,b=(v+m)/4;return y>S&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-_)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FR extends po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new VS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends FR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class HS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let m=1-a;const h=l*f+c*p+u*v+d*_,g=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,h*g);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*g;if(l=l*m+f*S,c=c*m+p*S,u=u*m+v*S,d=d*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new F,Hv=new La;class Ia{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),al.subVectors(this.max,Co),rs.subVectors(e.a,Co),ss.subVectors(e.b,Co),os.subVectors(e.c,Co),Fi.subVectors(ss,rs),ki.subVectors(os,ss),Mr.subVectors(rs,os);let n=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-Mr.z,Mr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,Mr.z,0,-Mr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-Mr.y,Mr.x,0];return!sd(n,rs,ss,os,al)||(n=[1,0,0,0,1,0,0,0,1],!sd(n,rs,ss,os,al))?!1:(ll.crossVectors(Fi,ki),n=[ll.x,ll.y,ll.z],sd(n,rs,ss,os,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new F,new F,new F,new F,new F,new F,new F,new F],Bn=new F,ol=new Ia,rs=new F,ss=new F,os=new F,Fi=new F,ki=new F,Mr=new F,Co=new F,al=new F,ll=new F,Er=new F;function sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const OR=new Ia,bo=new F,od=new F;class tu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):OR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(od)),this.expandByPoint(bo.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new F,ad=new F,cl=new F,Oi=new F,ld=new F,ul=new F,cd=new F;class GS{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ad.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(ad);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cl),a=Oi.dot(this.direction),l=-Oi.dot(cl),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ad).addScaledVector(cl,f),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){ld.subVectors(n,e),ul.subVectors(i,e),cd.crossVectors(ld,ul);let o=this.direction.dot(cd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(Oi,ul));if(l<0)return null;const c=a*this.direction.dot(ld.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(cd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;n[0]=f+_*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BR,e,zR)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Bi.crossVectors(i,pn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Bi.crossVectors(i,pn)),Bi.normalize(),dl.crossVectors(pn,Bi),r[0]=Bi.x,r[4]=dl.x,r[8]=pn.x,r[1]=Bi.y,r[5]=dl.y,r[9]=pn.y,r[2]=Bi.z,r[6]=dl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],h=i[14],g=i[3],y=i[7],S=i[11],R=i[15],A=r[0],C=r[4],b=r[8],E=r[12],M=r[1],D=r[5],O=r[9],B=r[13],j=r[2],$=r[6],G=r[10],X=r[14],I=r[3],K=r[7],q=r[11],J=r[15];return s[0]=o*A+a*M+l*j+c*I,s[4]=o*C+a*D+l*$+c*K,s[8]=o*b+a*O+l*G+c*q,s[12]=o*E+a*B+l*X+c*J,s[1]=u*A+d*M+f*j+p*I,s[5]=u*C+d*D+f*$+p*K,s[9]=u*b+d*O+f*G+p*q,s[13]=u*E+d*B+f*X+p*J,s[2]=v*A+_*M+m*j+h*I,s[6]=v*C+_*D+m*$+h*K,s[10]=v*b+_*O+m*G+h*q,s[14]=v*E+_*B+m*X+h*J,s[3]=g*A+y*M+S*j+R*I,s[7]=g*C+y*D+S*$+R*K,s[11]=g*b+y*O+S*G+R*q,s[15]=g*E+y*B+S*X+R*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],h=e[15],g=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,y=v*f*c-u*m*c-v*l*p+o*m*p+u*l*h-o*f*h,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,R=v*d*l-u*_*l-v*a*f+o*_*f+u*a*m-o*d*m,A=n*g+i*y+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*h+n*f*h)*C,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=S*C,e[9]=(v*d*s-u*_*s-v*i*p+n*_*p+u*i*h-n*d*h)*C,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*C,e[12]=R*C,e[13]=(u*_*r-v*d*r+v*i*f-n*_*f-u*i*m+n*d*m)*C,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,_=o*u,m=o*d,h=a*d,g=l*c,y=l*u,S=l*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(_+h))*R,r[1]=(p+S)*R,r[2]=(v-y)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+y)*C,r[9]=(m-g)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/o,d=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===Ti)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ac)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,_;if(a===Ti)v=(o+s)*d,_=-2*d;else if(a===Ac)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new F,zn=new ht,BR=new F(0,0,0),zR=new F(1,1,1),Bi=new F,dl=new F,pn=new F,Gv=new ht,jv=new La;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jv.setFromEuler(this),this.setFromQuaternion(jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class jS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VR=0;const Wv=new F,ls=new La,mi=new ht,fl=new F,Ro=new F,HR=new F,GR=new La,Xv=new F(1,0,0),$v=new F(0,1,0),Yv=new F(0,0,1),Kv={type:"added"},jR={type:"removed"},cs={type:"childadded",child:null},ud={type:"childremoved",child:null};class Jt extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new F,n=new di,i=new La,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Le}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Xv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(Yv,e)}translateOnAxis(e,n){return Wv.copy(e).applyQuaternion(this.quaternion),this.position.add(Wv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(Yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fl.copy(e):fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ro,fl,this.up):mi.lookAt(fl,Ro,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(mi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kv),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jR),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kv),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,HR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,GR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new F(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new F,gi=new F,dd=new F,vi=new F,us=new F,ds=new F,qv=new F,fd=new F,hd=new F,pd=new F;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),dd.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(gi),l=Vn.dot(dd),c=gi.dot(gi),u=gi.dot(dd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),ds.subVectors(s,i),fd.subVectors(e,i);const l=us.dot(fd),c=ds.dot(fd);if(l<=0&&c<=0)return n.copy(i);hd.subVectors(e,r);const u=us.dot(hd),d=ds.dot(hd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(us,o);pd.subVectors(e,s);const p=us.dot(pd),v=ds.dot(pd);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ds,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return qv.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(qv,a);const h=1/(m+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const WS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},hl={h:0,s:0,l:0};function md(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=RR(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=md(o,s,e+1/3),this.g=md(o,s,e),this.b=md(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=WS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=nd(e.r),this.g=nd(e.g),this.b=nd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(sn(Gt.r*255,0,255))*65536+Math.round(sn(Gt.g*255,0,255))*256+Math.round(sn(Gt.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=ti){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(hl);const i=ed(zi.h,hl.h,n),r=ed(zi.s,hl.s,n),s=ed(zi.l,hl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=WS;let WR=0;class mo extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WR++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Gs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Vf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class XS extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=RS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new F,pl=new Fe;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kv&&(e.usage=this.usage),e}}class $S extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class YS extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XR=0;const bn=new ht,gd=new Jt,fs=new F,mn=new Ia,Po=new Ia,It=new F;class kn extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BS(e)?YS:$S)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(mn.min,Po.min),mn.expandByPoint(It),It.addVectors(mn.max,Po.max),mn.expandByPoint(It)):(mn.expandByPoint(Po.min),mn.expandByPoint(Po.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),It.add(fs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new F,l[b]=new F;const c=new F,u=new F,d=new F,f=new Fe,p=new Fe,v=new Fe,_=new F,m=new F;function h(b,E,M){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[b].add(_),a[E].add(_),a[M].add(_),l[b].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,E=g.length;b<E;++b){const M=g[b],D=M.start,O=M.count;for(let B=D,j=D+O;B<j;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new F,S=new F,R=new F,A=new F;function C(b){R.fromBufferAttribute(r,b),A.copy(R);const E=a[b];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(A,E);const D=S.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,D)}for(let b=0,E=g.length;b<E;++b){const M=g[b],D=M.start,O=M.count;for(let B=D,j=D+O;B<j;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zv=new ht,Tr=new GS,ml=new tu,Qv=new F,hs=new F,ps=new F,ms=new F,vd=new F,gl=new F,vl=new Fe,yl=new Fe,xl=new Fe,Jv=new F,e0=new F,t0=new F,_l=new F,Sl=new F;class xn extends Jt{constructor(e=new kn,n=new XS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(vd.fromBufferAttribute(d,e),o?gl.addScaledVector(vd,u):gl.addScaledVector(vd.sub(n),u))}n.add(gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(ml.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(ml,Qv)===null||Tr.origin.distanceToSquared(Qv)>(e.far-e.near)**2))&&(Zv.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Zv),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=y;S<R;S+=3){const A=a.getX(S),C=a.getX(S+1),b=a.getX(S+2);r=Ml(this,h,e,i,c,u,d,A,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=Ml(this,o,e,i,c,u,d,g,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,R=y;S<R;S+=3){const A=S,C=S+1,b=S+2;r=Ml(this,h,e,i,c,u,d,A,C,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const g=m,y=m+1,S=m+2;r=Ml(this,o,e,i,c,u,d,g,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $R(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===dr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,hs),t.getVertexPosition(l,ps),t.getVertexPosition(c,ms);const u=$R(t,e,n,i,hs,ps,ms,_l);if(u){r&&(vl.fromBufferAttribute(r,a),yl.fromBufferAttribute(r,l),xl.fromBufferAttribute(r,c),u.uv=ri.getInterpolation(_l,hs,ps,ms,vl,yl,xl,new Fe)),s&&(vl.fromBufferAttribute(s,a),yl.fromBufferAttribute(s,l),xl.fromBufferAttribute(s,c),u.uv1=ri.getInterpolation(_l,hs,ps,ms,vl,yl,xl,new Fe)),o&&(Jv.fromBufferAttribute(o,a),e0.fromBufferAttribute(o,l),t0.fromBufferAttribute(o,c),u.normal=ri.getInterpolation(_l,hs,ps,ms,Jv,e0,t0,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};ri.getNormal(hs,ps,ms,d.normal),u.face=d}return u}class Na extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function v(_,m,h,g,y,S,R,A,C,b,E){const M=S/C,D=R/b,O=S/2,B=R/2,j=A/2,$=C+1,G=b+1;let X=0,I=0;const K=new F;for(let q=0;q<G;q++){const J=q*D-B;for(let me=0;me<$;me++){const ze=me*M-O;K[_]=ze*g,K[m]=J*y,K[h]=j,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(me/C),d.push(1-q/b),X+=1}}for(let q=0;q<b;q++)for(let J=0;J<C;J++){const me=f+J+$*q,ze=f+J+$*(q+1),W=f+(J+1)+$*(q+1),ie=f+(J+1)+$*q;l.push(me,ze,ie),l.push(ze,W,ie),I+=6}a.addGroup(p,I,E),p+=I,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function YR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function KS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const KR={clone:ao,merge:qt};var qR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qR,this.fragmentShader=ZR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=YR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qS extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new F,n0=new Fe,i0=new Fe;class vn extends qS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xf*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,n0,i0),n.subVectors(i0,n0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class QR extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new vn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new vn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new vn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new vn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new vn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ZS extends fn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JR extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ZS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Na(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:sr});s.uniforms.tEquirect.value=n;const o=new xn(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Xn),new QR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yd=new F,e2=new F,t2=new Le;class Lr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yd.subVectors(i,n).cross(e2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t2.getNormalMatrix(e),r=this.coplanarPoint(yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new tu,El=new F;class Tp{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],_=r[10],m=r[11],h=r[12],g=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+v,S+g).normalize(),i[3].setComponents(l-o,f-u,m-v,S-g).normalize(),i[4].setComponents(l-a,f-d,m-_,S-y).normalize(),n===Ti)i[5].setComponents(l+a,f+d,m+_,S+y).normalize();else if(n===Ac)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function QS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function n2(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,v=f.length;p<v;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class nu extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],_=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let y=0;y<c;y++){const S=y*d-s;v.push(S,-g,0),_.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const y=g+c*h,S=g+c*(h+1),R=g+1+c*(h+1),A=g+1+c*h;p.push(y,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var i2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r2=`#ifdef USE_ALPHAHASH
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
#endif`,s2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c2=`#ifdef USE_AOMAP
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
#endif`,u2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,h2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g2=`#ifdef USE_IRIDESCENCE
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
#endif`,v2=`#ifdef USE_BUMPMAP
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
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,A2=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,C2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b2=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I2="gl_FragColor = linearToOutputTexel( gl_FragColor );",N2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,U2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j2=`#ifdef USE_GRADIENTMAP
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
}`,W2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y2=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,K2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,tP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nP=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fP=`#if defined( USE_POINTS_UV )
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
#endif`,hP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yP=`#ifdef USE_MORPHTARGETS
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
#endif`,xP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_P=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wP=`#ifdef USE_NORMALMAP
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
#endif`,AP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,BP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,VP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GP=`#ifdef USE_SKINNING
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
#endif`,jP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WP=`#ifdef USE_SKINNING
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
#endif`,XP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$P=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KP=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qP=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZP=`#ifdef USE_TRANSMISSION
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
#endif`,QP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iD=`uniform sampler2D t2D;
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
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lD=`#include <common>
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
}`,cD=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uD=`#define DISTANCE
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
}`,dD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pD=`uniform float scale;
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
}`,mD=`uniform vec3 diffuse;
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
}`,gD=`#include <common>
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
}`,vD=`uniform vec3 diffuse;
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
}`,yD=`#define LAMBERT
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
}`,xD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,_D=`#define MATCAP
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
}`,SD=`#define MATCAP
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
}`,MD=`#define NORMAL
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
}`,ED=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TD=`#define PHONG
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
}`,wD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,AD=`#define STANDARD
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
}`,CD=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bD=`#define TOON
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
}`,RD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PD=`uniform float size;
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
}`,DD=`uniform vec3 diffuse;
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
}`,LD=`#include <common>
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
}`,ID=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ND=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,UD=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:i2,alphahash_pars_fragment:r2,alphamap_fragment:s2,alphamap_pars_fragment:o2,alphatest_fragment:a2,alphatest_pars_fragment:l2,aomap_fragment:c2,aomap_pars_fragment:u2,batching_pars_vertex:d2,batching_vertex:f2,begin_vertex:h2,beginnormal_vertex:p2,bsdfs:m2,iridescence_fragment:g2,bumpmap_pars_fragment:v2,clipping_planes_fragment:y2,clipping_planes_pars_fragment:x2,clipping_planes_pars_vertex:_2,clipping_planes_vertex:S2,color_fragment:M2,color_pars_fragment:E2,color_pars_vertex:T2,color_vertex:w2,common:A2,cube_uv_reflection_fragment:C2,defaultnormal_vertex:b2,displacementmap_pars_vertex:R2,displacementmap_vertex:P2,emissivemap_fragment:D2,emissivemap_pars_fragment:L2,colorspace_fragment:I2,colorspace_pars_fragment:N2,envmap_fragment:U2,envmap_common_pars_fragment:F2,envmap_pars_fragment:k2,envmap_pars_vertex:O2,envmap_physical_pars_fragment:K2,envmap_vertex:B2,fog_vertex:z2,fog_pars_vertex:V2,fog_fragment:H2,fog_pars_fragment:G2,gradientmap_pars_fragment:j2,lightmap_pars_fragment:W2,lights_lambert_fragment:X2,lights_lambert_pars_fragment:$2,lights_pars_begin:Y2,lights_toon_fragment:q2,lights_toon_pars_fragment:Z2,lights_phong_fragment:Q2,lights_phong_pars_fragment:J2,lights_physical_fragment:eP,lights_physical_pars_fragment:tP,lights_fragment_begin:nP,lights_fragment_maps:iP,lights_fragment_end:rP,logdepthbuf_fragment:sP,logdepthbuf_pars_fragment:oP,logdepthbuf_pars_vertex:aP,logdepthbuf_vertex:lP,map_fragment:cP,map_pars_fragment:uP,map_particle_fragment:dP,map_particle_pars_fragment:fP,metalnessmap_fragment:hP,metalnessmap_pars_fragment:pP,morphinstance_vertex:mP,morphcolor_vertex:gP,morphnormal_vertex:vP,morphtarget_pars_vertex:yP,morphtarget_vertex:xP,normal_fragment_begin:_P,normal_fragment_maps:SP,normal_pars_fragment:MP,normal_pars_vertex:EP,normal_vertex:TP,normalmap_pars_fragment:wP,clearcoat_normal_fragment_begin:AP,clearcoat_normal_fragment_maps:CP,clearcoat_pars_fragment:bP,iridescence_pars_fragment:RP,opaque_fragment:PP,packing:DP,premultiplied_alpha_fragment:LP,project_vertex:IP,dithering_fragment:NP,dithering_pars_fragment:UP,roughnessmap_fragment:FP,roughnessmap_pars_fragment:kP,shadowmap_pars_fragment:OP,shadowmap_pars_vertex:BP,shadowmap_vertex:zP,shadowmask_pars_fragment:VP,skinbase_vertex:HP,skinning_pars_vertex:GP,skinning_vertex:jP,skinnormal_vertex:WP,specularmap_fragment:XP,specularmap_pars_fragment:$P,tonemapping_fragment:YP,tonemapping_pars_fragment:KP,transmission_fragment:qP,transmission_pars_fragment:ZP,uv_pars_fragment:QP,uv_pars_vertex:JP,uv_vertex:eD,worldpos_vertex:tD,background_vert:nD,background_frag:iD,backgroundCube_vert:rD,backgroundCube_frag:sD,cube_vert:oD,cube_frag:aD,depth_vert:lD,depth_frag:cD,distanceRGBA_vert:uD,distanceRGBA_frag:dD,equirect_vert:fD,equirect_frag:hD,linedashed_vert:pD,linedashed_frag:mD,meshbasic_vert:gD,meshbasic_frag:vD,meshlambert_vert:yD,meshlambert_frag:xD,meshmatcap_vert:_D,meshmatcap_frag:SD,meshnormal_vert:MD,meshnormal_frag:ED,meshphong_vert:TD,meshphong_frag:wD,meshphysical_vert:AD,meshphysical_frag:CD,meshtoon_vert:bD,meshtoon_frag:RD,points_vert:PD,points_frag:DD,shadow_vert:LD,shadow_frag:ID,sprite_vert:ND,sprite_frag:UD},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ni={basic:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:qt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:qt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:qt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:qt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:qt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ni.physical={uniforms:qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Tl={r:0,b:0,g:0},Ar=new di,FD=new ht;function kD(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function _(g){let y=!1;const S=v(g);S===null?h(a,l):S&&S.isColor&&(h(S,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,y){const S=v(y);S&&(S.isCubeTexture||S.mapping===Qc)?(u===void 0&&(u=new xn(new Na(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ao(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(FD.makeRotationFromEuler(Ar)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xn(new nu(2,2),new hr({name:"BackgroundMaterial",uniforms:ao(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,y){g.getRGB(Tl,KS(t)),i.buffers.color.setClear(Tl.r,Tl.g,Tl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:_,addToRenderList:m}}function OD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,D,O,B,j){let $=!1;const G=d(B,O,D);s!==G&&(s=G,c(s.object)),$=p(M,B,O,j),$&&v(M,B,O,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(M,D,O,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,D,O){const B=O.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let $=j[D.id];$===void 0&&($={},j[D.id]=$);let G=$[B];return G===void 0&&(G=f(l()),$[B]=G),G}function f(M){const D=[],O=[],B=[];for(let j=0;j<n;j++)D[j]=0,O[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,D,O,B){const j=s.attributes,$=D.attributes;let G=0;const X=O.getAttributes();for(const I in X)if(X[I].location>=0){const q=j[I];let J=$[I];if(J===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),q===void 0||q.attribute!==J||J&&q.data!==J.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function v(M,D,O,B){const j={},$=D.attributes;let G=0;const X=O.getAttributes();for(const I in X)if(X[I].location>=0){let q=$[I];q===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const J={};J.attribute=q,q&&q.data&&(J.data=q.data),j[I]=J,G++}s.attributes=j,s.attributesNum=G,s.index=B}function _(){const M=s.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){h(M,0)}function h(M,D){const O=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;O[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),j[M]!==D&&(t.vertexAttribDivisor(M,D),j[M]=D)}function g(){const M=s.newAttributes,D=s.enabledAttributes;for(let O=0,B=D.length;O<B;O++)D[O]!==M[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function y(M,D,O,B,j,$,G){G===!0?t.vertexAttribIPointer(M,D,O,j,$):t.vertexAttribPointer(M,D,O,B,j,$)}function S(M,D,O,B){_();const j=B.attributes,$=O.getAttributes(),G=D.defaultAttributeValues;for(const X in $){const I=$[X];if(I.location>=0){let K=j[X];if(K===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const q=K.normalized,J=K.itemSize,me=e.get(K);if(me===void 0)continue;const ze=me.buffer,W=me.type,ie=me.bytesPerElement,fe=W===t.INT||W===t.UNSIGNED_INT||K.gpuType===DS;if(K.isInterleavedBufferAttribute){const ae=K.data,ke=ae.stride,Ie=K.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<I.locationSize;We++)h(I.location+We,ae.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<I.locationSize;We++)m(I.location+We);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let We=0;We<I.locationSize;We++)y(I.location+We,J/I.locationSize,W,q,ke*ie,(Ie+J/I.locationSize*We)*ie,fe)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)h(I.location+ae,K.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<I.locationSize;ae++)m(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ae=0;ae<I.locationSize;ae++)y(I.location+ae,J/I.locationSize,W,q,J*ie,J/I.locationSize*ae*ie,fe)}}else if(G!==void 0){const q=G[X];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(I.location,q);break;case 3:t.vertexAttrib3fv(I.location,q);break;case 4:t.vertexAttrib4fv(I.location,q);break;default:t.vertexAttrib1fv(I.location,q)}}}}g()}function R(){b();for(const M in i){const D=i[M];for(const O in D){const B=D[O];for(const j in B)u(B[j].object),delete B[j];delete D[O]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const O in D){const B=D[O];for(const j in B)u(B[j].object),delete B[j];delete D[O]}delete i[M.id]}function C(M){for(const D in i){const O=i[D];if(O[M.id]===void 0)continue;const B=O[M.id];for(const j in B)u(B[j].object),delete B[j];delete O[M.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function BD(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(c[p],u[p]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_];for(let _=0;_<f.length;_++)n.update(v,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Jc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fr&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qi&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:S,maxSamples:R}}function VD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,y=g*4;let S=h.clippingState||null;l.value=S,S=u(v,f,y,p);for(let R=0;R!==y;++R)S[R]=n[R];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=p+_*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=p;y!==_;++y,S+=4)o.copy(d[y]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function HD(t){let e=new WeakMap;function n(o,a){return a===Hf?o.mapping=no:a===Gf&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class GD extends qS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,r0=[.125,.215,.35,.446,.526,.582],Ur=20,xd=new GD,s0=new Ye;let _d=null,Sd=0,Md=0,Ed=!1;const Ir=(1+Math.sqrt(5))/2,ys=1/Ir,o0=[new F(-Ir,ys,0),new F(Ir,ys,0),new F(-ys,0,Ir),new F(ys,0,Ir),new F(0,Ir,-ys),new F(0,Ir,ys),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class a0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_d=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Jc,format:oi,colorSpace:yr,depthBuffer:!1},r=l0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jD(s)),this._blurMaterial=WD(s,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,xd)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(s0),u.toneMapping=or,u.autoClear=!1;const p=new XS({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new xn(new Na,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(s0),_=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;wl(r,g*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=o0[(r-s-1)%o0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const h=[];let g=0;for(let C=0;C<Ur;++C){const b=C/_,E=Math.exp(-b*b/2);h.push(E),C===0?g+=E:C<m&&(g+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const S=this._sizeLods[r],R=3*S*(r>y-Fs?r-y+Fs:0),A=4*(this._cubeSize-S);wl(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(d,xd)}}function jD(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+r0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=r0[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,h=1,g=new Float32Array(_*v*p),y=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,b=A>2?0:-1,E=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];g.set(E,_*v*A),y.set(f,m*v*A);const M=[A,A,A,A,A,A];S.set(M,h*v*A)}const R=new kn;R.setAttribute("position",new Kn(g,_)),R.setAttribute("uv",new Kn(y,m)),R.setAttribute("faceIndex",new Kn(S,h)),e.push(R),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function l0(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WD(t,e,n){const i=new Float32Array(Ur),r=new F(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function c0(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wp(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function u0(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function wp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hf||l===Gf,u=l===no||l===io;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new a0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new a0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $D(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zS("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YD(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let y=0,S=g.length;y<S;y+=3){const R=g[y+0],A=g[y+1],C=g[y+2];f.push(R,A,A,C,C,R)}}else if(v!==void 0){const g=v.array;_=v.version;for(let y=0,S=g.length/3-1;y<S;y+=3){const R=y+0,A=y+1,C=y+2;f.push(R,A,A,C,C,R)}}else return;const m=new(BS(f)?YS:$S)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function KD(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<v;m++)this.render(f[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}}function d(f,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g];for(let g=0;g<_.length;g++)n.update(h,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZD(t,e,n){const i=new WeakMap,r=new lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*d),b=new HS(C,R,A,d);b.type=qi,b.needsUpdate=!0;const E=S*4;for(let D=0;D<d;D++){const O=h[D],B=g[D],j=y[D],$=R*A*4*D;for(let G=0;G<O.count;G++){const X=G*E;v===!0&&(r.fromBufferAttribute(O,G),C[$+X+0]=r.x,C[$+X+1]=r.y,C[$+X+2]=r.z,C[$+X+3]=0),_===!0&&(r.fromBufferAttribute(B,G),C[$+X+4]=r.x,C[$+X+5]=r.y,C[$+X+6]=r.z,C[$+X+7]=0),m===!0&&(r.fromBufferAttribute(j,G),C[$+X+8]=r.x,C[$+X+9]=r.y,C[$+X+10]=r.z,C[$+X+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new Fe(R,A)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function QD(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class JS extends fn{constructor(e,n,i,r,s,o,a,l,c,u=js){if(u!==js&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=ro),i===void 0&&u===oo&&(i=so),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const eM=new fn,tM=new JS(1,1);tM.compareFunction=OS;const nM=new HS,iM=new kR,rM=new ZS,d0=[],f0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=d0[r];if(s===void 0&&(s=new Float32Array(r),d0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=f0[e];n===void 0&&(n=new Int32Array(e),f0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function tL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function nL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function iL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;m0.set(i),t.uniformMatrix2fv(this.addr,!1,m0),Pt(n,i)}}function rL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;p0.set(i),t.uniformMatrix3fv(this.addr,!1,p0),Pt(n,i)}}function sL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;h0.set(i),t.uniformMatrix4fv(this.addr,!1,h0),Pt(n,i)}}function oL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function lL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function cL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function uL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function fL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function hL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function pL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?tM:eM;n.setTexture2D(e||s,r)}function mL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iM,r)}function gL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rM,r)}function vL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nM,r)}function yL(t){switch(t){case 5126:return JD;case 35664:return eL;case 35665:return tL;case 35666:return nL;case 35674:return iL;case 35675:return rL;case 35676:return sL;case 5124:case 35670:return oL;case 35667:case 35671:return aL;case 35668:case 35672:return lL;case 35669:case 35673:return cL;case 5125:return uL;case 36294:return dL;case 36295:return fL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return pL;case 35679:case 36299:case 36307:return mL;case 35680:case 36300:case 36308:case 36293:return gL;case 36289:case 36303:case 36311:case 36292:return vL}}function xL(t,e){t.uniform1fv(this.addr,e)}function _L(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function SL(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function ML(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function EL(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TL(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wL(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AL(t,e){t.uniform1iv(this.addr,e)}function CL(t,e){t.uniform2iv(this.addr,e)}function bL(t,e){t.uniform3iv(this.addr,e)}function RL(t,e){t.uniform4iv(this.addr,e)}function PL(t,e){t.uniform1uiv(this.addr,e)}function DL(t,e){t.uniform2uiv(this.addr,e)}function LL(t,e){t.uniform3uiv(this.addr,e)}function IL(t,e){t.uniform4uiv(this.addr,e)}function NL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||eM,s[o])}function UL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iM,s[o])}function FL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rM,s[o])}function kL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nM,s[o])}function OL(t){switch(t){case 5126:return xL;case 35664:return _L;case 35665:return SL;case 35666:return ML;case 35674:return EL;case 35675:return TL;case 35676:return wL;case 5124:case 35670:return AL;case 35667:case 35671:return CL;case 35668:case 35672:return bL;case 35669:case 35673:return RL;case 5125:return PL;case 36294:return DL;case 36295:return LL;case 36296:return IL;case 35678:case 36198:case 36298:case 36306:case 35682:return NL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return FL;case 36289:case 36303:case 36311:case 36292:return kL}}class BL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yL(n.type)}}class zL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OL(n.type)}}class VL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function g0(t,e){t.seq.push(e),t.map[e.id]=e}function HL(t,e,n){const i=t.name,r=i.length;for(Td.lastIndex=0;;){const s=Td.exec(i),o=Td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){g0(n,c===void 0?new BL(a,t,e):new zL(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new VL(a),g0(n,d)),n=d}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function v0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GL=37297;let jL=0;function WL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function XL(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===wc&&n===Tc?i="LinearDisplayP3ToLinearSRGB":e===Tc&&n===wc&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case eu:return[i,"LinearTransferOETF"];case ti:case Ep:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function y0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WL(t.getShaderSource(e),o)}else return r}function $L(t,e){const n=XL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YL(t,e){let n;switch(e){case tR:n="Linear";break;case nR:n="Reinhard";break;case iR:n="OptimizedCineon";break;case rR:n="ACESFilmic";break;case oR:n="AgX";break;case aR:n="Neutral";break;case sR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function KL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function qL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function x0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QL=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(QL,e3)}const JL=new Map;function e3(t,e){let n=De[e];if(n===void 0){const i=JL.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(t){return t.replace(t3,n3)}function n3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function M0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function r3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function o3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case RS:e="ENVMAP_BLENDING_MULTIPLY";break;case Jb:e="ENVMAP_BLENDING_MIX";break;case eR:e="ENVMAP_BLENDING_ADD";break}return e}function a3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function l3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=i3(n),c=r3(n),u=s3(n),d=o3(n),f=a3(n),p=KL(n),v=qL(s),_=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bo).join(`
`),h.length>0&&(h+=`
`)):(m=[M0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),h=[M0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?De.tonemapping_pars_fragment:"",n.toneMapping!==or?YL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,$L("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=$f(o),o=x0(o,n),o=_0(o,n),a=$f(a),a=x0(a,n),a=_0(a,n),o=S0(o),a=S0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=g+m+o,S=g+h+a,R=v0(r,r.VERTEX_SHADER,y),A=v0(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(A).trim();let $=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,A);else{const X=y0(r,R,"vertex"),I=y0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+X+`
`+I)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||j==="")&&(G=!1);G&&(D.diagnostics={runnable:$,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(R),r.deleteShader(A),b=new Gl(r,_),E=ZL(r,_)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,GL)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let c3=0;class u3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new d3(e),n.set(e,i)),i}}class d3{constructor(e){this.id=c3++,this.code=e,this.usedTimes=0}}function f3(t,e,n,i,r,s,o){const a=new jS,l=new u3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,O,B){const j=O.fog,$=B.geometry,G=E.isMeshStandardMaterial?O.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),I=X&&X.mapping===Qc?X.image.height:null,K=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,J=q!==void 0?q.length:0;let me=0;$.morphAttributes.position!==void 0&&(me=1),$.morphAttributes.normal!==void 0&&(me=2),$.morphAttributes.color!==void 0&&(me=3);let ze,W,ie,fe;if(K){const et=ni[K];ze=et.vertexShader,W=et.fragmentShader}else ze=E.vertexShader,W=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),fe=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),ke=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,We=!!E.map,N=!!E.matcap,je=!!X,He=!!E.aoMap,ct=!!E.lightMap,we=!!E.bumpMap,$e=!!E.normalMap,Oe=!!E.displacementMap,Pe=!!E.emissiveMap,Tt=!!E.metalnessMap,P=!!E.roughnessMap,T=E.anisotropy>0,H=E.clearcoat>0,Q=E.dispersion>0,ee=E.iridescence>0,te=E.sheen>0,Me=E.transmission>0,ce=T&&!!E.anisotropyMap,ue=H&&!!E.clearcoatMap,Ne=H&&!!E.clearcoatNormalMap,re=H&&!!E.clearcoatRoughnessMap,_e=ee&&!!E.iridescenceMap,Ve=ee&&!!E.iridescenceThicknessMap,be=te&&!!E.sheenColorMap,de=te&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Ge=!!E.specularColorMap,_t=!!E.specularIntensityMap,L=Me&&!!E.transmissionMap,he=Me&&!!E.thicknessMap,Y=!!E.gradientMap,Z=!!E.alphaMap,oe=E.alphaTest>0,Re=!!E.alphaHash,Ke=!!E.extensions;let St=or;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=t.toneMapping);const Dt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:W,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:N,envMap:je,envMapMode:je&&X.mapping,envMapCubeUVHeight:I,aoMap:He,lightMap:ct,bumpMap:we,normalMap:$e,displacementMap:f&&Oe,emissiveMap:Pe,normalMapObjectSpace:$e&&E.normalMapType===SR,normalMapTangentSpace:$e&&E.normalMapType===kS,metalnessMap:Tt,roughnessMap:P,anisotropy:T,anisotropyMap:ce,clearcoat:H,clearcoatMap:ue,clearcoatNormalMap:Ne,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ee,iridescenceMap:_e,iridescenceThicknessMap:Ve,sheen:te,sheenColorMap:be,sheenRoughnessMap:de,specularMap:Ue,specularColorMap:Ge,specularIntensityMap:_t,transmission:Me,transmissionMap:L,thicknessMap:he,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Re,combine:E.combine,mapUv:We&&_(E.map.channel),aoMapUv:He&&_(E.aoMap.channel),lightMapUv:ct&&_(E.lightMap.channel),bumpMapUv:we&&_(E.bumpMap.channel),normalMapUv:$e&&_(E.normalMap.channel),displacementMapUv:Oe&&_(E.displacementMap.channel),emissiveMapUv:Pe&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:ue&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:Ge&&_(E.specularColorMap.channel),specularIntensityMapUv:_t&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:he&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&($e||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(We||Z),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ke&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(M,E),y(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=v[E.type];let D;if(M){const O=ni[M];D=KR.clone(O.uniforms)}else D=E.uniforms;return D}function R(E,M){let D;for(let O=0,B=u.length;O<B;O++){const j=u[O];if(j.cacheKey===M){D=j,++D.usedTimes;break}}return D===void 0&&(D=new l3(t,M,E,s),u.push(D)),D}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:b}}function h3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function p3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function E0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function T0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,v,_,m){const h=o(d,f,p,v,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,v,_,m){const h=o(d,f,p,v,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||p3),i.length>1&&i.sort(f||E0),r.length>1&&r.sort(f||E0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function m3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new T0,t.set(i,[o])):r>=s.length?(o=new T0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function g3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ye};break;case"SpotLight":n={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function v3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let y3=0;function x3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _3(t){const e=new g3,n=v3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ht,o=new ht;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,_=0,m=0,h=0,g=0,y=0,S=0,R=0,A=0,C=0;c.sort(x3);for(let E=0,M=c.length;E<M;E++){const D=c[E],O=D.color,B=D.intensity,j=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*B,d+=O.g*B,f+=O.b*B;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],B);C++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,I=n.get(D);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=j,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[_]=G;const X=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const I=n.get(D);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=$,S++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const X=D.shadow,I=n.get(D);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,I.shadowCameraNear=X.camera.near,I.shadowCameraFar=X.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=D.shadow.matrix,y++}i.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(B),G.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==h||b.numDirectionalShadows!==g||b.numPointShadows!==y||b.numSpotShadows!==S||b.numSpotMaps!==R||b.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,b.directionalLength=p,b.pointLength=v,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=h,b.numDirectionalShadows=g,b.numPointShadows=y,b.numSpotShadows=S,b.numSpotMaps=R,b.numLightProbes=C,i.version=y3++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function w0(t){const e=new _3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function S3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new w0(t),e.set(r,[a])):s>=o.length?(a=new w0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class M3 extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E3 extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A3(t,e,n){let i=new Tp;const r=new Fe,s=new Fe,o=new lt,a=new M3({depthPacking:_R}),l=new E3,c={},u=n.maxTextureSize,d={[dr]:dn,[dn]:dr,[Si]:Si},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:T3,fragmentShader:w3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bS;let h=this.type;this.render=function(A,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(sr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=h!==yi&&this.type===yi,j=h===yi&&this.type!==yi;for(let $=0,G=A.length;$<G;$++){const X=A[$],I=X.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||B===!0||j===!0){const J=this.type!==yi?{minFilter:In,magFilter:In}:{};I.map!==null&&I.map.dispose(),I.map=new Zr(r.x,r.y,J),I.map.texture.name=X.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const q=I.getViewportCount();for(let J=0;J<q;J++){const me=I.getViewport(J);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o),I.updateMatrices(X,J),i=I.getFrustum(),S(C,b,I.camera,X,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&g(I,b),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,D)};function g(A,C){const b=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,b,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,b,p,_,null)}function y(A,C,b,E){let M=null;const D=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=M.uuid,B=C.uuid;let j=c[O];j===void 0&&(j={},c[O]=j);let $=j[B];$===void 0&&($=M.clone(),j[B]=$,C.addEventListener("dispose",R)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,E===yi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=b}return M}function S(A,C,b,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===yi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const B=e.update(A),j=A.material;if(Array.isArray(j)){const $=B.groups;for(let G=0,X=$.length;G<X;G++){const I=$[G],K=j[I.materialIndex];if(K&&K.visible){const q=y(A,K,E,M);A.onBeforeShadow(t,A,C,b,B,q,I),t.renderBufferDirect(b,null,B,q,A,I),A.onAfterShadow(t,A,C,b,B,q,I)}}}else if(j.visible){const $=y(A,j,E,M);A.onBeforeShadow(t,A,C,b,B,$,null),t.renderBufferDirect(b,null,B,$,A,null),A.onAfterShadow(t,A,C,b,B,$,null)}}const O=A.children;for(let B=0,j=O.length;B<j;B++)S(O[B],C,b,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const E=c[b],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function C3(t){function e(){let L=!1;const he=new lt;let Y=null;const Z=new lt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!L&&(t.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Re,Ke,St,Dt){Dt===!0&&(oe*=St,Re*=St,Ke*=St),he.set(oe,Re,Ke,St),Z.equals(he)===!1&&(t.clearColor(oe,Re,Ke,St),Z.copy(he))},reset:function(){L=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,he=null,Y=null,Z=null;return{setTest:function(oe){oe?fe(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(oe){he!==oe&&!L&&(t.depthMask(oe),he=oe)},setFunc:function(oe){if(Y!==oe){switch(oe){case Xb:t.depthFunc(t.NEVER);break;case $b:t.depthFunc(t.ALWAYS);break;case Yb:t.depthFunc(t.LESS);break;case Sc:t.depthFunc(t.LEQUAL);break;case Kb:t.depthFunc(t.EQUAL);break;case qb:t.depthFunc(t.GEQUAL);break;case Zb:t.depthFunc(t.GREATER);break;case Qb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=oe}},setLocked:function(oe){L=oe},setClear:function(oe){Z!==oe&&(t.clearDepth(oe),Z=oe)},reset:function(){L=!1,he=null,Y=null,Z=null}}}function i(){let L=!1,he=null,Y=null,Z=null,oe=null,Re=null,Ke=null,St=null,Dt=null;return{setTest:function(et){L||(et?fe(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(et){he!==et&&!L&&(t.stencilMask(et),he=et)},setFunc:function(et,Zn,Qn){(Y!==et||Z!==Zn||oe!==Qn)&&(t.stencilFunc(et,Zn,Qn),Y=et,Z=Zn,oe=Qn)},setOp:function(et,Zn,Qn){(Re!==et||Ke!==Zn||St!==Qn)&&(t.stencilOp(et,Zn,Qn),Re=et,Ke=Zn,St=Qn)},setLocked:function(et){L=et},setClear:function(et){Dt!==et&&(t.clearStencil(et),Dt=et)},reset:function(){L=!1,he=null,Y=null,Z=null,oe=null,Re=null,Ke=null,St=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,v=!1,_=null,m=null,h=null,g=null,y=null,S=null,R=null,A=new Ye(0,0,0),C=0,b=!1,E=null,M=null,D=null,O=null,B=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=G>=2);let I=null,K={};const q=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),me=new lt().fromArray(q),ze=new lt().fromArray(J);function W(L,he,Y,Z){const oe=new Uint8Array(4),Re=t.createTexture();t.bindTexture(L,Re),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Y;Ke++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(he+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Re}const ie={};ie[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Sc),we(!1),$e(ov),fe(t.CULL_FACE),He(sr);function fe(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function ae(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function ke(L,he){return u[L]!==he?(t.bindFramebuffer(L,he),u[L]=he,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(L,he){let Y=f,Z=!1;if(L){Y=d.get(he),Y===void 0&&(Y=[],d.set(he,Y));const oe=L.textures;if(Y.length!==oe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ke=oe.length;Re<Ke;Re++)Y[Re]=t.COLOR_ATTACHMENT0+Re;Y.length=oe.length,Z=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Z=!0);Z&&t.drawBuffers(Y)}function We(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const N={[Nr]:t.FUNC_ADD,[Rb]:t.FUNC_SUBTRACT,[Pb]:t.FUNC_REVERSE_SUBTRACT};N[Db]=t.MIN,N[Lb]=t.MAX;const je={[Ib]:t.ZERO,[Nb]:t.ONE,[Ub]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[Vb]:t.SRC_ALPHA_SATURATE,[Bb]:t.DST_COLOR,[kb]:t.DST_ALPHA,[Fb]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[zb]:t.ONE_MINUS_DST_COLOR,[Ob]:t.ONE_MINUS_DST_ALPHA,[Hb]:t.CONSTANT_COLOR,[Gb]:t.ONE_MINUS_CONSTANT_COLOR,[jb]:t.CONSTANT_ALPHA,[Wb]:t.ONE_MINUS_CONSTANT_ALPHA};function He(L,he,Y,Z,oe,Re,Ke,St,Dt,et){if(L===sr){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(fe(t.BLEND),v=!0),L!==bb){if(L!==_||et!==b){if((m!==Nr||y!==Nr)&&(t.blendEquation(t.FUNC_ADD),m=Nr,y=Nr),et)switch(L){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case av:t.blendFunc(t.ONE,t.ONE);break;case lv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case av:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case lv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}h=null,g=null,S=null,R=null,A.set(0,0,0),C=0,_=L,b=et}return}oe=oe||he,Re=Re||Y,Ke=Ke||Z,(he!==m||oe!==y)&&(t.blendEquationSeparate(N[he],N[oe]),m=he,y=oe),(Y!==h||Z!==g||Re!==S||Ke!==R)&&(t.blendFuncSeparate(je[Y],je[Z],je[Re],je[Ke]),h=Y,g=Z,S=Re,R=Ke),(St.equals(A)===!1||Dt!==C)&&(t.blendColor(St.r,St.g,St.b,Dt),A.copy(St),C=Dt),_=L,b=!1}function ct(L,he){L.side===Si?ae(t.CULL_FACE):fe(t.CULL_FACE);let Y=L.side===dn;he&&(Y=!Y),we(Y),L.blending===Gs&&L.transparent===!1?He(sr):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){E!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),E=L)}function $e(L){L!==wb?(fe(t.CULL_FACE),L!==M&&(L===ov?t.cullFace(t.BACK):L===Ab?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),M=L}function Oe(L){L!==D&&($&&t.lineWidth(L),D=L)}function Pe(L,he,Y){L?(fe(t.POLYGON_OFFSET_FILL),(O!==he||B!==Y)&&(t.polygonOffset(he,Y),O=he,B=Y)):ae(t.POLYGON_OFFSET_FILL)}function Tt(L){L?fe(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function P(L){L===void 0&&(L=t.TEXTURE0+j-1),I!==L&&(t.activeTexture(L),I=L)}function T(L,he,Y){Y===void 0&&(I===null?Y=t.TEXTURE0+j-1:Y=I);let Z=K[Y];Z===void 0&&(Z={type:void 0,texture:void 0},K[Y]=Z),(Z.type!==L||Z.texture!==he)&&(I!==Y&&(t.activeTexture(Y),I=Y),t.bindTexture(L,he||ie[L]),Z.type=L,Z.texture=he)}function H(){const L=K[I];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){me.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),me.copy(L))}function de(L){ze.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ze.copy(L))}function Ue(L,he){let Y=l.get(he);Y===void 0&&(Y=new WeakMap,l.set(he,Y));let Z=Y.get(L);Z===void 0&&(Z=t.getUniformBlockIndex(he,L.name),Y.set(L,Z))}function Ge(L,he){const Z=l.get(he).get(L);a.get(he)!==Z&&(t.uniformBlockBinding(he,Z,L.__bindingPointIndex),a.set(he,Z))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,K={},u={},d=new WeakMap,f=[],p=null,v=!1,_=null,m=null,h=null,g=null,y=null,S=null,R=null,A=new Ye(0,0,0),C=0,b=!1,E=null,M=null,D=null,O=null,B=null,me.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:ae,bindFramebuffer:ke,drawBuffers:Ie,useProgram:We,setBlending:He,setMaterial:ct,setFlipSided:we,setCullFace:$e,setLineWidth:Oe,setPolygonOffset:Pe,setScissorTest:Tt,activeTexture:P,bindTexture:T,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Ve,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:Ne,texStorage3D:re,texSubImage2D:te,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:be,viewport:de,reset:_t}}function b3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return p?new OffscreenCanvas(P,T):Cc("canvas")}function _(P,T,H){let Q=1;const ee=Tt(P);if((ee.width>H||ee.height>H)&&(Q=H/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(Q*ee.width),Me=Math.floor(Q*ee.height);d===void 0&&(d=v(te,Me));const ce=T?v(te,Me):d;return ce.width=te,ce.height=Me,ce.getContext("2d").drawImage(P,0,0,te,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Me+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==In&&P.minFilter!==Xn}function h(P){t.generateMipmap(P)}function g(P,T,H,Q,ee=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=T;if(T===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),T===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),T===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),T===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),T===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),T===t.RGBA){const Me=ee?Ec:Qe.getTransfer(Q);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=Me===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(P,T){let H;return P?T===null||T===ro||T===so?H=t.DEPTH24_STENCIL8:T===qi?H=t.DEPTH32F_STENCIL8:T===Mc&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ro||T===so?H=t.DEPTH_COMPONENT24:T===qi?H=t.DEPTH_COMPONENT32F:T===Mc&&(H=t.DEPTH_COMPONENT16),H}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Xn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){const T=P.target;T.removeEventListener("dispose",R),C(T),T.isVideoTexture&&u.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),E(T)}function C(P){const T=i.get(P);if(T.__webglInit===void 0)return;const H=P.source,Q=f.get(H);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(P),Object.keys(Q).length===0&&f.delete(H)}i.remove(P)}function b(P){const T=i.get(P);t.deleteTexture(T.__webglTexture);const H=P.source,Q=f.get(H);delete Q[T.__cacheKey],o.memory.textures--}function E(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ee=0;ee<T.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(T.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)t.deleteFramebuffer(T.__webglFramebuffer[Q]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=P.textures;for(let Q=0,ee=H.length;Q<ee;Q++){const te=i.get(H[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(P)}let M=0;function D(){M=0}function O(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function B(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function j(P,T){const H=i.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(H,P,T);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+T)}function $(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ze(H,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+T)}function G(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ze(H,P,T);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+T)}function X(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){W(H,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+T)}const I={[jf]:t.REPEAT,[zr]:t.CLAMP_TO_EDGE,[Wf]:t.MIRRORED_REPEAT},K={[In]:t.NEAREST,[lR]:t.NEAREST_MIPMAP_NEAREST,[rl]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[$u]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},q={[MR]:t.NEVER,[bR]:t.ALWAYS,[ER]:t.LESS,[OS]:t.LEQUAL,[TR]:t.EQUAL,[CR]:t.GEQUAL,[wR]:t.GREATER,[AR]:t.NOTEQUAL};function J(P,T){if(T.type===qi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xn||T.magFilter===$u||T.magFilter===rl||T.magFilter===Vr||T.minFilter===Xn||T.minFilter===$u||T.minFilter===rl||T.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,K[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==rl&&T.minFilter!==Vr||T.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function me(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R));const Q=T.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const te=B(T);if(te!==P.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[te].usedTimes++;const Me=ee[P.__cacheKey];Me!==void 0&&(ee[P.__cacheKey].usedTimes--,Me.usedTimes===0&&b(T)),P.__cacheKey=te,P.__webglTexture=ee[te].texture}return H}function ze(P,T,H){let Q=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=me(P,T),te=T.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+H);const Me=i.get(te);if(te.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ce=Qe.getPrimaries(Qe.workingColorSpace),ue=T.colorSpace===$i?null:Qe.getPrimaries(T.colorSpace),Ne=T.colorSpace===$i||ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let re=_(T.image,!1,r.maxTextureSize);re=Pe(T,re);const _e=s.convert(T.format,T.colorSpace),Ve=s.convert(T.type);let be=g(T.internalFormat,_e,Ve,T.colorSpace,T.isVideoTexture);J(Q,T);let de;const Ue=T.mipmaps,Ge=T.isVideoTexture!==!0,_t=Me.__version===void 0||ee===!0,L=te.dataReady,he=S(T,re);if(T.isDepthTexture)be=y(T.format===oo,T.type),_t&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,be,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,_e,Ve,null));else if(T.isDataTexture)if(Ue.length>0){Ge&&_t&&n.texStorage2D(t.TEXTURE_2D,he,be,Ue[0].width,Ue[0].height);for(let Y=0,Z=Ue.length;Y<Z;Y++)de=Ue[Y],Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,de.width,de.height,_e,Ve,de.data):n.texImage2D(t.TEXTURE_2D,Y,be,de.width,de.height,0,_e,Ve,de.data);T.generateMipmaps=!1}else Ge?(_t&&n.texStorage2D(t.TEXTURE_2D,he,be,re.width,re.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,Ve,re.data)):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,_e,Ve,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,Ue[0].width,Ue[0].height,re.depth);for(let Y=0,Z=Ue.length;Y<Z;Y++)if(de=Ue[Y],T.format!==oi)if(_e!==null)if(Ge){if(L)if(T.layerUpdates.size>0){for(const oe of T.layerUpdates){const Re=de.width*de.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,oe,de.width,de.height,1,_e,de.data.slice(Re*oe,Re*(oe+1)),0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,re.depth,_e,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,be,de.width,de.height,re.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,de.width,de.height,re.depth,_e,Ve,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,be,de.width,de.height,re.depth,0,_e,Ve,de.data)}else{Ge&&_t&&n.texStorage2D(t.TEXTURE_2D,he,be,Ue[0].width,Ue[0].height);for(let Y=0,Z=Ue.length;Y<Z;Y++)de=Ue[Y],T.format!==oi?_e!==null?Ge?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,de.width,de.height,_e,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,de.width,de.height,_e,Ve,de.data):n.texImage2D(t.TEXTURE_2D,Y,be,de.width,de.height,0,_e,Ve,de.data)}else if(T.isDataArrayTexture)if(Ge){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,be,re.width,re.height,re.depth),L)if(T.layerUpdates.size>0){let Y;switch(Ve){case t.UNSIGNED_BYTE:switch(_e){case t.ALPHA:Y=1;break;case t.LUMINANCE:Y=1;break;case t.LUMINANCE_ALPHA:Y=2;break;case t.RGB:Y=3;break;case t.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${_e}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const Z=re.width*re.height*Y;for(const oe of T.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,_e,Ve,re.data.slice(Z*oe,Z*(oe+1)));T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Ve,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,_e,Ve,re.data);else if(T.isData3DTexture)Ge?(_t&&n.texStorage3D(t.TEXTURE_3D,he,be,re.width,re.height,re.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Ve,re.data)):n.texImage3D(t.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,_e,Ve,re.data);else if(T.isFramebufferTexture){if(_t)if(Ge)n.texStorage2D(t.TEXTURE_2D,he,be,re.width,re.height);else{let Y=re.width,Z=re.height;for(let oe=0;oe<he;oe++)n.texImage2D(t.TEXTURE_2D,oe,be,Y,Z,0,_e,Ve,null),Y>>=1,Z>>=1}}else if(Ue.length>0){if(Ge&&_t){const Y=Tt(Ue[0]);n.texStorage2D(t.TEXTURE_2D,he,be,Y.width,Y.height)}for(let Y=0,Z=Ue.length;Y<Z;Y++)de=Ue[Y],Ge?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,Ve,de):n.texImage2D(t.TEXTURE_2D,Y,be,_e,Ve,de);T.generateMipmaps=!1}else if(Ge){if(_t){const Y=Tt(re);n.texStorage2D(t.TEXTURE_2D,he,be,Y.width,Y.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ve,re)}else n.texImage2D(t.TEXTURE_2D,0,be,_e,Ve,re);m(T)&&h(Q),Me.__version=te.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function W(P,T,H){if(T.image.length!==6)return;const Q=me(P,T),ee=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const Me=Qe.getPrimaries(Qe.workingColorSpace),ce=T.colorSpace===$i?null:Qe.getPrimaries(T.colorSpace),ue=T.colorSpace===$i||Me===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!Ne&&!re?_e[Z]=_(T.image[Z],!0,r.maxCubemapSize):_e[Z]=re?T.image[Z].image:T.image[Z],_e[Z]=Pe(T,_e[Z]);const Ve=_e[0],be=s.convert(T.format,T.colorSpace),de=s.convert(T.type),Ue=g(T.internalFormat,be,de,T.colorSpace),Ge=T.isVideoTexture!==!0,_t=te.__version===void 0||Q===!0,L=ee.dataReady;let he=S(T,Ve);J(t.TEXTURE_CUBE_MAP,T);let Y;if(Ne){Ge&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ue,Ve.width,Ve.height);for(let Z=0;Z<6;Z++){Y=_e[Z].mipmaps;for(let oe=0;oe<Y.length;oe++){const Re=Y[oe];T.format!==oi?be!==null?Ge?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Re.width,Re.height,be,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Re.width,Re.height,be,de,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ue,Re.width,Re.height,0,be,de,Re.data)}}}else{if(Y=T.mipmaps,Ge&&_t){Y.length>0&&he++;const Z=Tt(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,be,de,_e[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,_e[Z].width,_e[Z].height,0,be,de,_e[Z].data);for(let oe=0;oe<Y.length;oe++){const Ke=Y[oe].image[Z].image;Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ke.width,Ke.height,be,de,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ue,Ke.width,Ke.height,0,be,de,Ke.data)}}else{Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,de,_e[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,be,de,_e[Z]);for(let oe=0;oe<Y.length;oe++){const Re=Y[oe];Ge?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,be,de,Re.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ue,be,de,Re.image[Z])}}}m(T)&&h(t.TEXTURE_CUBE_MAP),te.__version=ee.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ie(P,T,H,Q,ee,te){const Me=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),ue=g(H.internalFormat,Me,ce,H.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>te),_e=Math.max(1,T.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,ue,re,_e,T.depth,0,Me,ce,null):n.texImage2D(ee,te,ue,re,_e,0,Me,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),$e(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,0,we(T)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,T,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){const Q=T.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=y(T.stencilBuffer,ee),Me=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=we(T);$e(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,te,T.width,T.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,te,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,te,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,P)}else{const Q=T.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],Me=s.convert(te.format,te.colorSpace),ce=s.convert(te.type),ue=g(te.internalFormat,Me,ce,te.colorSpace),Ne=we(T);H&&$e(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ue,T.width,T.height):$e(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ue,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,ee=we(T);if(T.depthTexture.format===js)$e(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(T.depthTexture.format===oo)$e(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(P){const T=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(T.__webglFramebuffer,P)}else if(H){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=t.createRenderbuffer(),fe(T.__webglDepthbuffer[Q],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),fe(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(P,T,H){const Q=i.get(P);T!==void 0&&ie(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ke(P)}function We(P){const T=P.texture,H=i.get(P),Q=i.get(T);P.addEventListener("dispose",A);const ee=P.textures,te=P.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=T.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let ue=0;ue<T.mipmaps.length;ue++)H.__webglFramebuffer[ce][ue]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ce=0,ue=ee.length;ce<ue;ce++){const Ne=i.get(ee[ce]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const ue=ee[ce];H.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const Ne=s.convert(ue.format,ue.colorSpace),re=s.convert(ue.type),_e=g(ue.internalFormat,Ne,re,ue.colorSpace,P.isXRRenderTarget===!0),Ve=we(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),J(t.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)ie(H.__webglFramebuffer[ce][ue],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else ie(H.__webglFramebuffer[ce],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ce=0,ue=ee.length;ce<ue;ce++){const Ne=ee[ce],re=i.get(Ne);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),J(t.TEXTURE_2D,Ne),ie(H.__webglFramebuffer,P,Ne,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ne)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),J(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)ie(H.__webglFramebuffer[ue],P,T,t.COLOR_ATTACHMENT0,ce,ue);else ie(H.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ce,0);m(T)&&h(ce),n.unbindTexture()}P.depthBuffer&&ke(P)}function N(P){const T=P.textures;for(let H=0,Q=T.length;H<Q;H++){const ee=T[H];if(m(ee)){const te=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ee).__webglTexture;n.bindTexture(te,Me),h(te),n.unbindTexture()}}}const je=[],He=[];function ct(P){if(P.samples>0){if($e(P)===!1){const T=P.textures,H=P.width,Q=P.height;let ee=t.COLOR_BUFFER_BIT;const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(P),ce=T.length>1;if(ce)for(let ue=0;ue<T.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Ne=i.get(T[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,t.NEAREST),l===!0&&(je.length=0,He.length=0,je.push(t.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(te),He.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<T.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Ne=i.get(T[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function we(P){return Math.min(r.maxSamples,P.samples)}function $e(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Oe(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Pe(P,T){const H=P.colorSpace,Q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==yr&&H!==$i&&(Qe.getTransfer(H)===rt?(Q!==oi||ee!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Ie,this.setupRenderTarget=We,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=$e}function R3(t,e){function n(i,r=$i){let s;const o=Qe.getTransfer(r);if(i===fr)return t.UNSIGNED_BYTE;if(i===LS)return t.UNSIGNED_SHORT_4_4_4_4;if(i===IS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dR)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cR)return t.BYTE;if(i===uR)return t.SHORT;if(i===Mc)return t.UNSIGNED_SHORT;if(i===DS)return t.INT;if(i===ro)return t.UNSIGNED_INT;if(i===qi)return t.FLOAT;if(i===Jc)return t.HALF_FLOAT;if(i===fR)return t.ALPHA;if(i===hR)return t.RGB;if(i===oi)return t.RGBA;if(i===pR)return t.LUMINANCE;if(i===mR)return t.LUMINANCE_ALPHA;if(i===js)return t.DEPTH_COMPONENT;if(i===oo)return t.DEPTH_STENCIL;if(i===gR)return t.RED;if(i===NS)return t.RED_INTEGER;if(i===vR)return t.RG;if(i===US)return t.RG_INTEGER;if(i===FS)return t.RGBA_INTEGER;if(i===Yu||i===Ku||i===qu||i===Zu)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ku)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ku)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uv||i===dv||i===fv||i===hv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pv||i===mv||i===gv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pv||i===mv)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vv||i===yv||i===xv||i===_v||i===Sv||i===Mv||i===Ev||i===Tv||i===wv||i===Av||i===Cv||i===bv||i===Rv||i===Pv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_v)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ev)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Av)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pv)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qu||i===Dv||i===Lv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qu)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yR||i===Iv||i===Nv||i===Uv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Iv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class P3 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D3={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const L3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I3=`
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

}`;class N3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new fn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:L3,fragmentShader:I3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class U3 extends po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=new N3,m=n.getContextAttributes();let h=null,g=null;const y=[],S=[],R=new Fe;let A=null;const C=new vn;C.layers.enable(1),C.viewport=new lt;const b=new vn;b.layers.enable(2),b.viewport=new lt;const E=[C,b],M=new P3;M.layers.enable(1),M.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=y[W];return ie===void 0&&(ie=new wd,y[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=y[W];return ie===void 0&&(ie=new wd,y[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=y[W];return ie===void 0&&(ie=new wd,y[W]=ie),ie.getHandSpace()};function B(W){const ie=S.indexOf(W.inputSource);if(ie===-1)return;const fe=y[ie];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||o),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let W=0;W<y.length;W++){const ie=S[W];ie!==null&&(S[W]=null,y[W].disconnect(ie))}D=null,O=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Zr(p.framebufferWidth,p.framebufferHeight,{format:oi,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,fe=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?oo:js,fe=m.stencil?so:ro);const ke={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Zr(f.textureWidth,f.textureHeight,{format:oi,type:fr,depthTexture:new JS(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(W){for(let ie=0;ie<W.removed.length;ie++){const fe=W.removed[ie],ae=S.indexOf(fe);ae>=0&&(S[ae]=null,y[ae].disconnect(fe))}for(let ie=0;ie<W.added.length;ie++){const fe=W.added[ie];let ae=S.indexOf(fe);if(ae===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=S.length){S.push(fe),ae=Ie;break}else if(S[Ie]===null){S[Ie]=fe,ae=Ie;break}if(ae===-1)break}const ke=y[ae];ke&&ke.connect(fe)}}const G=new F,X=new F;function I(W,ie,fe){G.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const ae=G.distanceTo(X),ke=ie.projectionMatrix.elements,Ie=fe.projectionMatrix.elements,We=ke[14]/(ke[10]-1),N=ke[14]/(ke[10]+1),je=(ke[9]+1)/ke[5],He=(ke[9]-1)/ke[5],ct=(ke[8]-1)/ke[0],we=(Ie[8]+1)/Ie[0],$e=We*ct,Oe=We*we,Pe=ae/(-ct+we),Tt=Pe*-ct;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Tt),W.translateZ(Pe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const P=We+Pe,T=N+Pe,H=$e-Tt,Q=Oe+(ae-Tt),ee=je*N/T*P,te=He*N/T*P;W.projectionMatrix.makePerspective(H,Q,ee,te,P,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),M.near=b.near=C.near=W.near,M.far=b.far=C.far=W.far,(D!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far,C.near=D,C.far=O,b.near=D,b.far=O,C.updateProjectionMatrix(),b.updateProjectionMatrix(),W.updateProjectionMatrix());const ie=W.parent,fe=M.cameras;K(M,ie);for(let ae=0;ae<fe.length;ae++)K(fe[ae],ie);fe.length===2?I(M,C,b):M.projectionMatrix.copy(C.projectionMatrix),q(W,M,ie)};function q(W,ie,fe){fe===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let J=null;function me(W,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ae=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ie=0;Ie<fe.length;Ie++){const We=fe[Ie];let N=null;if(p!==null)N=p.getViewport(We);else{const He=d.getViewSubImage(f,We);N=He.viewport,Ie===0&&(e.setRenderTargetTextures(g,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let je=E[Ie];je===void 0&&(je=new vn,je.layers.enable(Ie),je.viewport=new lt,E[Ie]=je),je.matrix.fromArray(We.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(We.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(N.x,N.y,N.width,N.height),Ie===0&&(M.matrix.copy(je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(je)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ie=d.getDepthInformation(fe[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,r.renderState)}}for(let fe=0;fe<y.length;fe++){const ae=S[fe],ke=y[fe];ae!==null&&ke!==void 0&&ke.update(ae,ie,c||o)}J&&J(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const ze=new QS;ze.setAnimationLoop(me),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}const Cr=new di,F3=new ht;function k3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,KS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===dn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===dn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),y=g.envMap,S=g.envMapRotation;y&&(m.envMap.value=y,Cr.copy(S),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(F3.makeRotationFromEuler(Cr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const S=y.program;i.uniformBlockBinding(g,S)}function c(g,y){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(g,R);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function u(g){const y=d();g.__bindingPointIndex=y;const S=t.createBuffer(),R=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const y=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,C=S.length;A<C;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,M=b.length;E<M;E++){const D=b[E];if(p(D,A,E,R)===!0){const O=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let $=0;$<B.length;$++){const G=B[$],X=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,O+j,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,y,S,R){const A=g.value,C=y+"_"+S;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const b=R[C];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return R[C]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function v(g){const y=g.uniforms;let S=0;const R=16;for(let C=0,b=y.length;C<b;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,D=E.length;M<D;M++){const O=E[M],B=Array.isArray(O.value)?O.value:[O.value];for(let j=0,$=B.length;j<$;j++){const G=B[j],X=_(G),I=S%R;I!==0&&R-I<X.boundary&&(S+=R-I),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=X.storage}}}const A=S%R;return A>0&&(S+=R-A),g.__size=S,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class B3{constructor(e={}){const{canvas:n=PR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=or,this.toneMappingExposure=1;const y=this;let S=!1,R=0,A=0,C=null,b=-1,E=null;const M=new lt,D=new lt;let O=null;const B=new Ye(0);let j=0,$=n.width,G=n.height,X=1,I=null,K=null;const q=new lt(0,0,$,G),J=new lt(0,0,$,G);let me=!1;const ze=new Tp;let W=!1,ie=!1;const fe=new ht,ae=new F,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function We(){return C===null?X:1}let N=i;function je(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",Z,!1),N===null){const U="webgl2";if(N=je(U,w),N===null)throw je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,ct,we,$e,Oe,Pe,Tt,P,T,H,Q,ee,te,Me,ce,ue,Ne,re,_e,Ve,be,de,Ue,Ge;function _t(){He=new $D(N),He.init(),de=new R3(N,He),ct=new zD(N,He,e,de),we=new C3(N),$e=new qD(N),Oe=new h3,Pe=new b3(N,He,we,Oe,ct,de,$e),Tt=new HD(y),P=new XD(y),T=new n2(N),Ue=new OD(N,T),H=new YD(N,T,$e,Ue),Q=new QD(N,H,T,$e),_e=new ZD(N,ct,Pe),ue=new VD(Oe),ee=new f3(y,Tt,P,He,ct,Ue,ue),te=new k3(y,Oe),Me=new m3,ce=new S3(He),re=new kD(y,Tt,P,we,Q,f,l),Ne=new A3(y,Q,ct),Ge=new O3(N,$e,ct,we),Ve=new BD(N,He,$e),be=new KD(N,He,$e),$e.programs=ee.programs,y.capabilities=ct,y.extensions=He,y.properties=Oe,y.renderLists=Me,y.shadowMap=Ne,y.state=we,y.info=$e}_t();const L=new U3(y,N);this.xr=L,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize($,G,!1))},this.getSize=function(w){return w.set($,G)},this.setSize=function(w,U,z=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,G=U,n.width=Math.floor(w*X),n.height=Math.floor(U*X),z===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set($*X,G*X).floor()},this.setDrawingBufferSize=function(w,U,z){$=w,G=U,X=z,n.width=Math.floor(w*z),n.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,U,z,V){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,U,z,V),we.viewport(M.copy(q).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,U,z,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,U,z,V),we.scissor(D.copy(J).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){we.setScissorTest(me=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(w=!0,U=!0,z=!0){let V=0;if(w){let k=!1;if(C!==null){const se=C.texture.format;k=se===FS||se===US||se===NS}if(k){const se=C.texture.type,pe=se===fr||se===ro||se===Mc||se===so||se===LS||se===IS,ye=re.getClearColor(),xe=re.getClearAlpha(),Ae=ye.r,Ce=ye.g,Ee=ye.b;pe?(p[0]=Ae,p[1]=Ce,p[2]=Ee,p[3]=xe,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=Ae,v[1]=Ce,v[2]=Ee,v[3]=xe,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),Me.dispose(),ce.dispose(),Oe.dispose(),Tt.dispose(),P.dispose(),Q.dispose(),Ue.dispose(),Ge.dispose(),ee.dispose(),L.dispose(),L.removeEventListener("sessionstart",Zn),L.removeEventListener("sessionend",Qn),xr.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$e.autoReset,U=Ne.enabled,z=Ne.autoUpdate,V=Ne.needsUpdate,k=Ne.type;_t(),$e.autoReset=w,Ne.enabled=U,Ne.autoUpdate=z,Ne.needsUpdate=V,Ne.type=k}function Z(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const U=w.target;U.removeEventListener("dispose",oe),Re(U)}function Re(w){Ke(w),Oe.remove(w)}function Ke(w){const U=Oe.get(w).programs;U!==void 0&&(U.forEach(function(z){ee.releaseProgram(z)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,V,k,se){U===null&&(U=ke);const pe=k.isMesh&&k.matrixWorld.determinant()<0,ye=aM(w,U,z,V,k);we.setMaterial(V,pe);let xe=z.index,Ae=1;if(V.wireframe===!0){if(xe=H.getWireframeAttribute(z),xe===void 0)return;Ae=2}const Ce=z.drawRange,Ee=z.attributes.position;let qe=Ce.start*Ae,mt=(Ce.start+Ce.count)*Ae;se!==null&&(qe=Math.max(qe,se.start*Ae),mt=Math.min(mt,(se.start+se.count)*Ae)),xe!==null?(qe=Math.max(qe,0),mt=Math.min(mt,xe.count)):Ee!=null&&(qe=Math.max(qe,0),mt=Math.min(mt,Ee.count));const gt=mt-qe;if(gt<0||gt===1/0)return;Ue.setup(k,V,ye,z,xe);let hn,Ze=Ve;if(xe!==null&&(hn=T.get(xe),Ze=be,Ze.setIndex(hn)),k.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*We()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(k.isLine){let Se=V.linewidth;Se===void 0&&(Se=1),we.setLineWidth(Se*We()),k.isLineSegments?Ze.setMode(N.LINES):k.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else k.isPoints?Ze.setMode(N.POINTS):k.isSprite&&Ze.setMode(N.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Ze.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Ze.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ze.renderInstances(qe,gt,k.count);else if(z.isInstancedBufferGeometry){const Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Kt=Math.min(z.instanceCount,Se);Ze.renderInstances(qe,gt,Kt)}else Ze.render(qe,gt)};function St(w,U,z){w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Fa(w,U,z),w.side=dr,w.needsUpdate=!0,Fa(w,U,z),w.side=Si):Fa(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),m=ce.get(z),m.init(U),g.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==z&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const V=new Set;return w.traverse(function(k){const se=k.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const ye=se[pe];St(ye,z,k),V.add(ye)}else St(se,z,k),V.add(se)}),g.pop(),m=null,V},this.compileAsync=function(w,U,z=null){const V=this.compile(w,U,z);return new Promise(k=>{function se(){if(V.forEach(function(pe){Oe.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){k(w);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Dt=null;function et(w){Dt&&Dt(w)}function Zn(){xr.stop()}function Qn(){xr.start()}const xr=new QS;xr.setAnimationLoop(et),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(w){Dt=w,L.setAnimationLoop(w),w===null?xr.stop():xr.start()},L.addEventListener("sessionstart",Zn),L.addEventListener("sessionend",Qn),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,C),m=ce.get(w,g.length),m.init(U),g.push(m),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(fe),ie=this.localClippingEnabled,W=ue.init(this.clippingPlanes,ie),_=Me.get(w,h.length),_.init(),h.push(_),L.enabled===!0&&L.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&ru(se,U,-1/0,y.sortObjects)}ru(w,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(I,K),Ie=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ie&&re.addToRenderList(_,w),this.info.render.frame++,W===!0&&ue.beginShadows();const z=m.state.shadowsArray;Ne.render(z,w,U),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,k=_.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(k.length>0)for(let pe=0,ye=se.length;pe<ye;pe++){const xe=se[pe];Pp(V,k,w,xe)}Ie&&re.render(w);for(let pe=0,ye=se.length;pe<ye;pe++){const xe=se[pe];Rp(_,w,xe,xe.viewport)}}else k.length>0&&Pp(V,k,w,U),Ie&&re.render(w),Rp(_,w,U);C!==null&&(Pe.updateMultisampleRenderTarget(C),Pe.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,U),Ue.resetDefaultState(),b=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],W===!0&&ue.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ru(w,U,z,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){V&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const pe=Q.update(w),ye=w.material;ye.visible&&_.push(w,pe,ye,z,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const pe=Q.update(w),ye=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){const xe=pe.groups;for(let Ae=0,Ce=xe.length;Ae<Ce;Ae++){const Ee=xe[Ae],qe=ye[Ee.materialIndex];qe&&qe.visible&&_.push(w,pe,qe,z,ae.z,Ee)}}else ye.visible&&_.push(w,pe,ye,z,ae.z,null)}}const se=w.children;for(let pe=0,ye=se.length;pe<ye;pe++)ru(se[pe],U,z,V)}function Rp(w,U,z,V){const k=w.opaque,se=w.transmissive,pe=w.transparent;m.setupLightsView(z),W===!0&&ue.setGlobalState(y.clippingPlanes,z),V&&we.viewport(M.copy(V)),k.length>0&&Ua(k,U,z),se.length>0&&Ua(se,U,z),pe.length>0&&Ua(pe,U,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Pp(w,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Zr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Jc:fr,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[V.id],pe=V.viewport||M;se.setSize(pe.z,pe.w);const ye=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(B),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),Ie?re.render(z):y.clear();const xe=y.toneMapping;y.toneMapping=or;const Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&ue.setGlobalState(y.clippingPlanes,V),Ua(w,z,V),Pe.updateMultisampleRenderTarget(se),Pe.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,qe=U.length;Ee<qe;Ee++){const mt=U[Ee],gt=mt.object,hn=mt.geometry,Ze=mt.material,Se=mt.group;if(Ze.side===Si&&gt.layers.test(V.layers)){const Kt=Ze.side;Ze.side=dn,Ze.needsUpdate=!0,Dp(gt,z,V,hn,Ze,Se),Ze.side=Kt,Ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(Pe.updateMultisampleRenderTarget(se),Pe.updateRenderTargetMipmap(se))}y.setRenderTarget(ye),y.setClearColor(B,j),Ae!==void 0&&(V.viewport=Ae),y.toneMapping=xe}function Ua(w,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,se=w.length;k<se;k++){const pe=w[k],ye=pe.object,xe=pe.geometry,Ae=V===null?pe.material:V,Ce=pe.group;ye.layers.test(z.layers)&&Dp(ye,U,z,xe,Ae,Ce)}}function Dp(w,U,z,V,k,se){w.onBeforeRender(y,U,z,V,k,se),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,U,z,V,w,se),k.transparent===!0&&k.side===Si&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,y.renderBufferDirect(z,U,V,k,w,se),k.side=dr,k.needsUpdate=!0,y.renderBufferDirect(z,U,V,k,w,se),k.side=Si):y.renderBufferDirect(z,U,V,k,w,se),w.onAfterRender(y,U,z,V,k,se)}function Fa(w,U,z){U.isScene!==!0&&(U=ke);const V=Oe.get(w),k=m.state.lights,se=m.state.shadowsArray,pe=k.state.version,ye=ee.getParameters(w,k.state,se,U,z),xe=ee.getProgramCacheKey(ye);let Ae=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?P:Tt).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",oe),Ae=new Map,V.programs=Ae);let Ce=Ae.get(xe);if(Ce!==void 0){if(V.currentProgram===Ce&&V.lightsStateVersion===pe)return Ip(w,ye),Ce}else ye.uniforms=ee.getUniforms(w),w.onBuild(z,ye,y),w.onBeforeCompile(ye,y),Ce=ee.acquireProgram(ye,xe),Ae.set(xe,Ce),V.uniforms=ye.uniforms;const Ee=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ue.uniform),Ip(w,ye),V.needsLights=cM(w),V.lightsStateVersion=pe,V.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMap.value=k.state.directionalShadowMap,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotShadowMap.value=k.state.spotShadowMap,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMap.value=k.state.pointShadowMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ce,V.uniformsList=null,Ce}function Lp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Gl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ip(w,U){const z=Oe.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function aM(w,U,z,V,k){U.isScene!==!0&&(U=ke),Pe.resetTextureUnits();const se=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,ye=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yr,xe=(V.isMeshStandardMaterial?P:Tt).get(V.envMap||pe),Ae=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,mt=!!z.morphAttributes.color;let gt=or;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(gt=y.toneMapping);const hn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=hn!==void 0?hn.length:0,Se=Oe.get(V),Kt=m.state.lights;if(W===!0&&(ie===!0||w!==E)){const An=w===E&&V.id===b;ue.setState(V,w,An)}let tt=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Kt.state.version||Se.outputColorSpace!==ye||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==xe||V.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ue.numPlanes||Se.numIntersection!==ue.numIntersection)||Se.vertexAlphas!==Ae||Se.vertexTangents!==Ce||Se.morphTargets!==Ee||Se.morphNormals!==qe||Se.morphColors!==mt||Se.toneMapping!==gt||Se.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Se.__version=V.version);let fi=Se.currentProgram;tt===!0&&(fi=Fa(V,U,k));let ka=!1,_r=!1,su=!1;const Lt=fi.getUniforms(),Ni=Se.uniforms;if(we.useProgram(fi.program)&&(ka=!0,_r=!0,su=!0),V.id!==b&&(b=V.id,_r=!0),ka||E!==w){Lt.setValue(N,"projectionMatrix",w.projectionMatrix),Lt.setValue(N,"viewMatrix",w.matrixWorldInverse);const An=Lt.map.cameraPosition;An!==void 0&&An.setValue(N,ae.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,_r=!0,su=!0)}if(k.isSkinnedMesh){Lt.setOptional(N,k,"bindMatrix"),Lt.setOptional(N,k,"bindMatrixInverse");const An=k.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Lt.setValue(N,"boneTexture",An.boneTexture,Pe))}k.isBatchedMesh&&(Lt.setOptional(N,k,"batchingTexture"),Lt.setValue(N,"batchingTexture",k._matricesTexture,Pe),Lt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&Lt.setValue(N,"batchingColorTexture",k._colorsTexture,Pe));const ou=z.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0)&&_e.update(k,z,fi),(_r||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,Lt.setValue(N,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ni.envMap.value=xe,Ni.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ni.envMapIntensity.value=U.environmentIntensity),_r&&(Lt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&lM(Ni,su),se&&V.fog===!0&&te.refreshFogUniforms(Ni,se),te.refreshMaterialUniforms(Ni,V,X,G,m.state.transmissionRenderTarget[w.id]),Gl.upload(N,Lp(Se),Ni,Pe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gl.upload(N,Lp(Se),Ni,Pe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Lt.setValue(N,"center",k.center),Lt.setValue(N,"modelViewMatrix",k.modelViewMatrix),Lt.setValue(N,"normalMatrix",k.normalMatrix),Lt.setValue(N,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const An=V.uniformsGroups;for(let au=0,uM=An.length;au<uM;au++){const Np=An[au];Ge.update(Np,fi),Ge.bind(Np,fi)}}return fi}function lM(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function cM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,z){Oe.get(w.texture).__webglTexture=U,Oe.get(w.depthTexture).__webglTexture=z;const V=Oe.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=Oe.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){C=w,R=U,A=z;let V=!0,k=null,se=!1,pe=!1;if(w){const xe=Oe.get(w);xe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(N.FRAMEBUFFER,null),V=!1):xe.__webglFramebuffer===void 0?Pe.setupRenderTarget(w):xe.__hasExternalTextures&&Pe.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Ce=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?k=Ce[U][z]:k=Ce[U],se=!0):w.samples>0&&Pe.useMultisampledRTT(w)===!1?k=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[z]:k=Ce,M.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else M.copy(q).multiplyScalar(X).floor(),D.copy(J).multiplyScalar(X).floor(),O=me;if(we.bindFramebuffer(N.FRAMEBUFFER,k)&&V&&we.drawBuffers(w,k),we.viewport(M),we.scissor(D),we.setScissorTest(O),se){const xe=Oe.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,z)}else if(pe){const xe=Oe.get(w.texture),Ae=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,Ae)}b=-1},this.readRenderTargetPixels=function(w,U,z,V,k,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(N.FRAMEBUFFER,ye);try{const xe=w.texture,Ae=xe.format,Ce=xe.type;if(!ct.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&z>=0&&z<=w.height-k&&N.readPixels(U,z,V,k,de.convert(Ae),de.convert(Ce),se)}finally{const xe=C!==null?Oe.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,V,k,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){we.bindFramebuffer(N.FRAMEBUFFER,ye);try{const xe=w.texture,Ae=xe.format,Ce=xe.type;if(!ct.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&z>=0&&z<=w.height-k){const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(U,z,V,k,de.convert(Ae),de.convert(Ce),0),N.flush();const qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await DR(N,qe,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se)}finally{N.deleteBuffer(Ee),N.deleteSync(qe)}return se}}finally{const xe=C!==null?Oe.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),k=Math.floor(w.image.width*V),se=Math.floor(w.image.height*V),pe=U!==null?U.x:0,ye=U!==null?U.y:0;Pe.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,pe,ye,k,se),we.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,V=null,k=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],k=arguments[3]||0,z=null);let se,pe,ye,xe,Ae,Ce;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,ye=z.min.x,xe=z.min.y):(se=w.image.width,pe=w.image.height,ye=0,xe=0),V!==null?(Ae=V.x,Ce=V.y):(Ae=0,Ce=0);const Ee=de.convert(U.format),qe=de.convert(U.type);Pe.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ze=N.getParameter(N.UNPACK_SKIP_ROWS),Se=N.getParameter(N.UNPACK_SKIP_IMAGES),Kt=w.isCompressedTexture?w.mipmaps[k]:w.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Kt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,xe),w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Ae,Ce,se,pe,Ee,qe,Kt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Ae,Ce,Kt.width,Kt.height,Ee,Kt.data):N.texSubImage2D(N.TEXTURE_2D,k,Ae,Ce,Ee,qe,Kt),N.pixelStorei(N.UNPACK_ROW_LENGTH,mt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Se),k===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,V=null,k=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],k=arguments[4]||0);let se,pe,ye,xe,Ae,Ce,Ee,qe,mt;const gt=w.isCompressedTexture?w.mipmaps[k]:w.image;z!==null?(se=z.max.x-z.min.x,pe=z.max.y-z.min.y,ye=z.max.z-z.min.z,xe=z.min.x,Ae=z.min.y,Ce=z.min.z):(se=gt.width,pe=gt.height,ye=gt.depth,xe=0,Ae=0,Ce=0),V!==null?(Ee=V.x,qe=V.y,mt=V.z):(Ee=0,qe=0,mt=0);const hn=de.convert(U.format),Ze=de.convert(U.type);let Se;if(U.isData3DTexture)Pe.setTexture3D(U,0),Se=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Pe.setTexture2DArray(U,0),Se=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fi=N.getParameter(N.UNPACK_SKIP_PIXELS),ka=N.getParameter(N.UNPACK_SKIP_ROWS),_r=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Se,k,Ee,qe,mt,se,pe,ye,hn,Ze,gt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,k,Ee,qe,mt,se,pe,ye,hn,gt.data):N.texSubImage3D(Se,k,Ee,qe,mt,se,pe,ye,hn,Ze,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fi),N.pixelStorei(N.UNPACK_SKIP_ROWS,ka),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_r),k===0&&U.generateMipmaps&&N.generateMipmap(Se),we.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&Pe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Pe.setTextureCube(w,0):w.isData3DTexture?Pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Pe.setTexture2DArray(w,0):Pe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,we.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ep?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===eu?"display-p3":"srgb"}}class z3 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sM extends mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const A0=new ht,Yf=new GS,Al=new tu,Cl=new F;class V3 extends Jt{constructor(e=new kn,n=new sM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;A0.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(A0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,_=p;v<_;v++){const m=c.getX(v);Cl.fromBufferAttribute(d,m),C0(Cl,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,_=p;v<_;v++)Cl.fromBufferAttribute(d,v),C0(Cl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function C0(t,e,n,i,r,s,o){const a=Yf.distanceSqToPoint(t);if(a<n){const l=new F;Yf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ap extends kn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let v=0;const _=[],m=i/2;let h=0;g(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function g(){const S=new F,R=new F;let A=0;const C=(n-e)/i;for(let b=0;b<=s;b++){const E=[],M=b/s,D=M*(n-e)+e;for(let O=0;O<=r;O++){const B=O/r,j=B*l+a,$=Math.sin(j),G=Math.cos(j);R.x=D*$,R.y=-M*i+m,R.z=D*G,d.push(R.x,R.y,R.z),S.set($,C,G).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-M),E.push(v++)}_.push(E)}for(let b=0;b<r;b++)for(let E=0;E<s;E++){const M=_[E][b],D=_[E+1][b],O=_[E+1][b+1],B=_[E][b+1];u.push(M,D,B),u.push(D,O,B),A+=6}c.addGroup(h,A,0),h+=A}function y(S){const R=v,A=new Fe,C=new F;let b=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const D=v;for(let O=0;O<=r;O++){const j=O/r*l+a,$=Math.cos(j),G=Math.sin(j);C.x=E*G,C.y=m*M,C.z=E*$,d.push(C.x,C.y,C.z),f.push(0,M,0),A.x=$*.5+.5,A.y=G*.5*M+.5,p.push(A.x,A.y),v++}for(let O=0;O<r;O++){const B=R+O,j=D+O;S===!0?u.push(j,j+1,B):u.push(j+1,j,B),b+=3}c.addGroup(h,b,S===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cp extends kn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new F,S=new F,R=new F;for(let A=0;A<n.length;A+=3)p(n[A+0],y),p(n[A+1],S),p(n[A+2],R),l(y,S,R,g)}function l(g,y,S,R){const A=R+1,C=[];for(let b=0;b<=A;b++){C[b]=[];const E=g.clone().lerp(S,b/A),M=y.clone().lerp(S,b/A),D=A-b;for(let O=0;O<=D;O++)O===0&&b===A?C[b][O]=E:C[b][O]=E.clone().lerp(M,O/D)}for(let b=0;b<A;b++)for(let E=0;E<2*(A-b)-1;E++){const M=Math.floor(E/2);E%2===0?(f(C[b][M+1]),f(C[b+1][M]),f(C[b][M])):(f(C[b][M+1]),f(C[b+1][M+1]),f(C[b+1][M]))}}function c(g){const y=new F;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(g),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function u(){const g=new F;for(let y=0;y<s.length;y+=3){g.x=s[y+0],g.y=s[y+1],g.z=s[y+2];const S=m(g)/2/Math.PI+.5,R=h(g)/Math.PI+.5;o.push(S,1-R)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const y=o[g+0],S=o[g+2],R=o[g+4],A=Math.max(y,S,R),C=Math.min(y,S,R);A>.9&&C<.1&&(y<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,y){const S=g*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function v(){const g=new F,y=new F,S=new F,R=new F,A=new Fe,C=new Fe,b=new Fe;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),R.copy(g).add(y).add(S).divideScalar(3);const D=m(R);_(A,M+0,g,D),_(C,M+2,y,D),_(b,M+4,S,D)}}function _(g,y,S,R){R<0&&g.x===1&&(o[y]=g.x-1),S.x===0&&S.z===0&&(o[y]=R/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.vertices,e.indices,e.radius,e.details)}}class bp extends Cp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bp(e.radius,e.detail)}}class bc extends kn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new F,d=new F,f=new F;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const _=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(_),d.y=(e+n*Math.cos(m))*Math.sin(_),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const _=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,h=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(_,m,g),o.push(m,h,g)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ad extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kS,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oM extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Cd=new ht,b0=new F,R0=new F;class H3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;b0.setFromMatrixPosition(e.matrixWorld),n.position.copy(b0),R0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(R0),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const P0=new ht,Do=new F,bd=new F;class G3 extends H3{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),i.position.copy(Do),bd.copy(i.position),bd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(bd),i.updateMatrixWorld(),r.makeTranslation(-Do.x,-Do.y,-Do.z),P0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0)}}class D0 extends oM{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new G3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class j3 extends oM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class W3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=L0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=L0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function L0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);function X3({interactive:t=!0,style:e}){const n=ve.useRef(null);return ve.useEffect(()=>{if(!n.current)return;const i=n.current.clientWidth||400,r=n.current.clientHeight||450,s=new z3,o=new vn(45,i/r,.1,1e3);o.position.set(0,0,8);const a=new B3({alpha:!0,antialias:!0});a.setSize(i,r),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(a.domElement);const l=new j3(16777215,.8);s.add(l);const c=new D0(13938487,3,50);c.position.set(5,5,5),s.add(c);const u=new D0(1985084,4,50);u.position.set(-5,-5,2),s.add(u);const d=new zo;s.add(d);const f=new Ap(.8,1.3,2.8,32),p=new Ad({color:13938487,metalness:.85,roughness:.25,wireframe:!1}),v=new xn(f,p);v.position.y=.2,d.add(v);const _=new bp(.95,2),m=new Ad({color:15455885,metalness:.9,roughness:.1,wireframe:!0}),h=new xn(_,m);h.position.y=.2,d.add(h);const g=new bc(1.8,.03,16,100),y=new Ad({color:13938487,metalness:.9,roughness:.2}),S=new xn(g,y);S.rotation.x=Math.PI/3,d.add(S);const R=new bc(2.2,.02,16,100),A=new xn(R,y);A.rotation.y=Math.PI/4,d.add(A);const C=120,b=new kn,E=new Float32Array(C*3);for(let J=0;J<C*3;J++)E[J]=(Math.random()-.5)*12;b.setAttribute("position",new Kn(E,3));const M=new sM({size:.04,color:13938487,transparent:!0,opacity:.75}),D=new V3(b,M);s.add(D);let O=0,B=0,j=0,$=0;const G=J=>{var ze;const me=(ze=n.current)==null?void 0:ze.getBoundingClientRect();me&&(O=(J.clientX-me.left)/me.width*2-1,B=-((J.clientY-me.top)/me.height)*2+1)};t&&n.current&&window.addEventListener("mousemove",G);let X;const I=new W3,K=()=>{const J=I.getElapsedTime();j+=(O-j)*.05,$+=(B-$)*.05,d.rotation.y=J*.4+j*.8,d.rotation.x=Math.sin(J*.3)*.15-$*.5,S.rotation.z=J*.5,A.rotation.z=-J*.3;const me=1+Math.sin(J*2)*.04;h.scale.set(me,me,me),D.rotation.y=J*.05,a.render(s,o),X=requestAnimationFrame(K)};K();const q=()=>{if(!n.current)return;const J=n.current.clientWidth,me=n.current.clientHeight;o.aspect=J/me,o.updateProjectionMatrix(),a.setSize(J,me)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(X),t&&window.removeEventListener("mousemove",G),window.removeEventListener("resize",q),n.current&&a.domElement&&n.current.removeChild(a.domElement),a.dispose()}},[t]),x.jsx("div",{ref:n,style:{width:"100%",height:"100%",minHeight:"400px",position:"relative",...e}})}function $3({onOpenBooking:t}){return x.jsxs("section",{style:{minHeight:"100vh",paddingTop:"8rem",paddingBottom:"5rem",position:"relative",display:"flex",alignItems:"center",background:"radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(10, 27, 21, 0) 55%), radial-gradient(circle at 20% 80%, rgba(30, 74, 60, 0.35) 0%, rgba(10, 27, 21, 0) 50%)",overflow:"hidden"},children:[x.jsx("div",{className:"container",children:x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"2.5rem",alignItems:"center"},children:[x.jsxs(an.div,{initial:{opacity:0,x:-40},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},style:{gridColumn:"span 12","@media(min-width: 992px)":{gridColumn:"span 7"}},className:"hero-text-col",children:[x.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.55rem",background:"rgba(212, 175, 55, 0.1)",border:"1px solid rgba(212, 175, 55, 0.35)",padding:"0.45rem 1.1rem",borderRadius:"var(--radius-full)",fontSize:"0.85rem",color:"var(--accent-gold-light)",marginBottom:"1.5rem",boxShadow:"0 4px 15px rgba(0,0,0,0.25)",flexWrap:"wrap"},children:[x.jsx(si,{size:15,style:{color:"var(--accent-gold)"}}),x.jsxs("span",{children:["Studios in ",x.jsx("strong",{children:"Kondapur"})," & ",x.jsx("strong",{children:"Moti Nagar"})]}),x.jsx("span",{style:{color:"rgba(255,255,255,0.3)"},children:"|"}),x.jsx(Qx,{size:14,style:{fill:"#d4af37",color:"#d4af37"}}),x.jsx("span",{style:{fontWeight:"600",color:"#fff"},children:"4.9/5 Star Rated"})]}),x.jsxs("h1",{className:"heading-lg",style:{color:"var(--text-primary)",marginBottom:"1rem"},children:["Bespoke Fashion Tailored for Your ",x.jsx("span",{className:"text-gold",style:{fontStyle:"italic",fontWeight:"400"},children:"Unique Grace."})]}),x.jsx(an.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.4},style:{fontSize:"1.35rem",fontFamily:"var(--font-serif)",color:"var(--accent-gold)",fontStyle:"italic",marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:"600"},children:x.jsx("span",{children:'"Custom made outfits for every story🫶🏻"'})}),x.jsxs("p",{style:{fontSize:"1.08rem",color:"var(--text-secondary)",lineHeight:1.65,marginBottom:"2.25rem",maxWidth:"600px"},children:["Saru’s Fashion Studio offers specialized bespoke designing across 4 core offerings: ",x.jsx("strong",{children:"Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses"})," with precision in-house fitting trials."]}),x.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginBottom:"2.75rem"},children:[x.jsxs("button",{onClick:t,className:"btn btn-gold",children:[x.jsx(Wc,{size:17}),x.jsx("span",{children:"Book Fitting Consultation"})]}),x.jsxs("a",{href:"#services",className:"btn btn-outline",children:[x.jsx(qr,{size:17,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"Explore 4 Core Services"})]})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"1.25rem",paddingTop:"1.75rem",borderTop:"1px solid var(--border-subtle)"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[x.jsx("div",{style:{padding:"0.5rem",background:"rgba(212,175,55,0.1)",borderRadius:"var(--radius-sm)",color:"var(--accent-gold)"},children:x.jsx(ZE,{size:18})}),x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.92rem",fontWeight:"700",color:"#fff"},children:"100% Fit"}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Guarantee"})]})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[x.jsx("div",{style:{padding:"0.5rem",background:"rgba(212,175,55,0.1)",borderRadius:"var(--radius-sm)",color:"var(--accent-gold)"},children:x.jsx(qE,{size:18})}),x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.92rem",fontWeight:"700",color:"#fff"},children:"1,500+"}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Stitched Fits"})]})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[x.jsx("div",{style:{padding:"0.5rem",background:"rgba(212,175,55,0.1)",borderRadius:"var(--radius-sm)",color:"var(--accent-gold)"},children:x.jsx(qr,{size:18})}),x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.92rem",fontWeight:"700",color:"#fff"},children:"2 Branches"}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Kondapur & Moti Nagar"})]})]})]})]}),x.jsx(an.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3},style:{gridColumn:"span 12","@media(min-width: 992px)":{gridColumn:"span 5"}},className:"hero-visual-col",children:x.jsxs("div",{style:{position:"relative"},children:[x.jsx("div",{className:"glass-panel-gold",style:{padding:"0.75rem",boxShadow:"0 30px 60px rgba(0,0,0,0.6)"},children:x.jsxs("div",{style:{position:"relative",borderRadius:"var(--radius-md)",overflow:"hidden",height:"420px"},children:[x.jsx("img",{src:"/Collections/A.jpg",alt:"Saru's Fashion Studio Bridal Collection",style:{width:"100%",height:"100%",objectFit:"cover"}}),x.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,27,21,0.95) 0%, transparent 55%)"}}),x.jsxs("div",{style:{position:"absolute",bottom:"1.25rem",left:"1.25rem",right:"1.25rem"},children:[x.jsx("span",{className:"subheading",style:{fontSize:"0.75rem",marginBottom:"0.2rem"},children:"Authentic Creation"}),x.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:"600"},children:"Custom Bridal & Maggam Work"}),x.jsx("p",{style:{fontSize:"0.8rem",color:"var(--accent-gold-light)"},children:"Created by Saru's Fashion Studio"})]})]})}),x.jsxs(an.div,{animate:{y:[0,-8,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"glass-panel-gold",style:{position:"absolute",top:"-2rem",right:"-1.5rem",width:"190px",height:"190px",padding:"0.5rem",boxShadow:"0 20px 40px rgba(0,0,0,0.7)",background:"rgba(10, 27, 21, 0.92)",backdropFilter:"blur(16px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[x.jsx("div",{style:{width:"100%",height:"130px"},children:x.jsx(X3,{interactive:!0})}),x.jsx("div",{style:{fontSize:"0.68rem",color:"var(--accent-gold)",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"0.2rem"},children:"✨ Interactive 3D WebGL"})]}),x.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"-1.25rem",left:"-1.25rem",padding:"0.85rem 1.15rem",display:"flex",alignItems:"center",gap:"0.75rem",boxShadow:"0 15px 30px rgba(0,0,0,0.5)",border:"1px solid var(--border-gold)"},children:[x.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(212,175,55,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)"},children:x.jsx(si,{size:18})}),x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.82rem",color:"#fff",fontWeight:"600"},children:"Hyderabad Studios"}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--accent-gold-light)"},children:"Kondapur & Moti Nagar"})]})]})]})})]})}),x.jsx("style",{children:`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-visual-col { grid-column: span 5 !important; }
        }
      `})]})}function Y3(){return x.jsxs("section",{id:"about",className:"section-padding",style:{background:"var(--bg-secondary)",position:"relative"},children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",maxWidth:"750px",margin:"0 auto 4rem auto"},children:[x.jsx("span",{className:"subheading",children:"The Studio Philosophy"}),x.jsxs("h2",{className:"heading-md",children:["Where Precision Tailoring Meets ",x.jsx("span",{className:"text-gold",children:"Authentic Storytelling."})]}),x.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"1.05rem",lineHeight:1.7},children:["Operating in ",x.jsx("strong",{children:"Kondapur"})," & ",x.jsx("strong",{children:"Moti Nagar"}),", Hyderabad, Saru's Fashion Studio was founded with a clear mission: to eliminate generic fits and replace mass-produced garments with bespoke attire designed exclusively around your body shape and occasion."]})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"2.5rem",alignItems:"center"},children:[x.jsx("div",{style:{gridColumn:"span 12","@media(min-width: 992px)":{gridColumn:"span 6"}},className:"story-vis",children:x.jsxs("div",{style:{position:"relative"},children:[x.jsx("div",{className:"glass-panel",style:{padding:"0.75rem",border:"1px solid var(--border-gold)"},children:x.jsx("img",{src:"/Collections/8.jpeg",alt:"Master Craftsmanship at Saru's Fashion Studio",style:{borderRadius:"var(--radius-sm)",width:"100%",height:"420px",objectFit:"cover"}})}),x.jsxs("div",{className:"glass-panel-gold",style:{position:"absolute",top:"2rem",right:"-1.5rem",padding:"1.25rem 1.5rem",boxShadow:"0 20px 40px rgba(0,0,0,0.5)"},children:[x.jsx("div",{style:{fontSize:"2rem",fontFamily:"var(--font-serif)",color:"var(--accent-gold)",fontWeight:"700",lineHeight:1},children:"15+"}),x.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-primary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Years Master Craftsmanship"})]})]})}),x.jsxs("div",{className:"story-pillars",style:{gridColumn:"span 12",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[x.jsxs(an.div,{whileHover:{x:6},className:"glass-panel",style:{padding:"1.5rem",display:"flex",gap:"1.25rem"},children:[x.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"rgba(212, 175, 55, 0.12)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",flexShrink:0},children:x.jsx(KE,{size:24})}),x.jsxs("div",{children:[x.jsx("h3",{style:{fontSize:"1.25rem",color:"#fff",marginBottom:"0.4rem"},children:"Zero-Gap Ergonomic Patterning"}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",lineHeight:1.6},children:"We don't rely on standard size charts. Every saree blouse and lehenga is drafted using 18 distinct body measurement points for a seamless, wrinkle-free fit."})]})]}),x.jsxs(an.div,{whileHover:{x:6},className:"glass-panel",style:{padding:"1.5rem",display:"flex",gap:"1.25rem"},children:[x.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"rgba(212, 175, 55, 0.12)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",flexShrink:0},children:x.jsx(qr,{size:24})}),x.jsxs("div",{children:[x.jsx("h3",{style:{fontSize:"1.25rem",color:"#fff",marginBottom:"0.4rem"},children:"In-House Master Embroidery"}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",lineHeight:1.6},children:"Our team of veteran karigars specialize in intricate Maggam work, Zardozi, thread work, and Swarovski stone embellishments tailored to your fabric of choice."})]})]}),x.jsxs(an.div,{whileHover:{x:6},className:"glass-panel",style:{padding:"1.5rem",display:"flex",gap:"1.25rem"},children:[x.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"rgba(212, 175, 55, 0.12)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",flexShrink:0},children:x.jsx(Zx,{size:24})}),x.jsxs("div",{children:[x.jsx("h3",{style:{fontSize:"1.25rem",color:"#fff",marginBottom:"0.4rem"},children:"Personalized Trial & Fitting Session"}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",lineHeight:1.6},children:"We host dedicated fitting trials at our Kondapur & Moti Nagar studios before final finishing touches, giving you complete peace of mind for your big event."})]})]})]})]})]}),x.jsx("style",{children:`
        @media (min-width: 992px) {
          .story-vis { grid-column: span 6 !important; }
          .story-pillars { grid-column: span 6 !important; }
        }
      `})]})}const K3=[{id:"fabrics",title:"Curated Fabrics",category:"Sourcing & Selection",shortDesc:"Handpicked pure Kanjeevaram silks, organzas, tissue, velvet, and embroidered net fabrics.",fullDesc:"We curate and source high-grade raw silks, Kanjeevaram weaves, sheer organza, and textured velvets directly. Whether you need matching fabric for a blouse or custom dye-to-match tones for your lehenga, our fabric consultation ensures premium quality.",craftTime:"Instant / 3-5 Days",priceEstimate:"Custom Sourcing",image:"/Services/A.jpg",features:["Pure Kanjeevaram & Banarasi weaves","Custom color dyeing & tone matching","Luxurious organza, net & velvet options","In-studio tactile fabric swatches"]},{id:"lehengas",title:"Designer Lehengas",category:"Bridal & Festivities",shortDesc:"Bespoke lehenga sets with opulent Zardozi, Aari handwork, dual dupattas, and tailored flare.",fullDesc:"Crafted exclusively for your wedding, sangeet, or gala. Our designer lehengas feature custom can-can layering, ergonomic waistline fitting, and intricate hand embroidery customized around your personal love story.",craftTime:"10 - 21 Days",priceEstimate:"Bespoke Order",image:"/Services/B.jpg",features:["Dual dupatta styling & draping setup","Integrated structural can-can flare","In-house Maggam & Zardozi karigars","2 stage fitting trials at studio"]},{id:"sarees",title:"Designer Sarees",category:"Pre-Draped & Fusion",shortDesc:"Pre-stitched concept sarees, belt ensembles, cocktail drapes, and heirloom saree restyling.",fullDesc:"Experience effortless elegance with our designer saree creations. We offer ready-to-wear pre-draped sarees, pleated jacket ensembles, and restyling of vintage family sarees into modern masterpieces.",craftTime:"5 - 10 Days",priceEstimate:"Custom Couture",image:"/Services/C.jpg",features:["Pre-stitched quick drape construction","Designer embroidered waist belts","Heirloom saree restoration & restyling","Custom pleat setting for zero hassle"]},{id:"blouses",title:"Bridal Blouses",category:"Signature Handwork",shortDesc:"Master Maggam work, Aari thread embroidery, boat necks, and zero-gap ergonomic pattern fitting.",fullDesc:"Our signature specialty. Every blouse is drafted using 18 distinct body points to prevent armpit gaping or shoulder slipping. Customized with elbow-length Maggam work, peacock motifs, and sheer net backlines.",craftTime:"5 - 12 Days",priceEstimate:"Master Tailored",image:"/Services/D.jpg",features:["18-point body measurement mapping","Anti-shoulder-slip inner strap locks","Handcrafted Maggam, Aari & Zari work","Custom cups & structural necklines"]}];function q3({onSelectService:t}){const[e,n]=ve.useState(null);return x.jsxs("section",{id:"services",className:"section-padding",style:{position:"relative"},children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",maxWidth:"750px",margin:"0 auto 3.5rem auto"},children:[x.jsx("span",{className:"subheading",children:"4 Core Offerings"}),x.jsxs("h2",{className:"heading-md",style:{marginBottom:"0.75rem"},children:["Our Specialized ",x.jsx("span",{className:"text-gold",children:"Design Services."})]}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1rem"},children:"Every outfit at Saru’s Fashion Studio is custom-crafted to tell your personal story with precision fitting and artisan detail."})]}),x.jsx("div",{className:"services-single-row",children:K3.map((i,r)=>x.jsxs(an.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},whileHover:{y:-8},className:"glass-panel",style:{overflow:"hidden",display:"flex",flexDirection:"column",transition:"var(--transition)",border:"1px solid var(--border-subtle)",position:"relative"},children:[x.jsxs("div",{style:{height:"240px",overflow:"hidden",position:"relative"},children:[x.jsx("img",{src:i.image,alt:i.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"}}),x.jsx("div",{style:{position:"absolute",top:"0.85rem",left:"0.85rem",background:"rgba(10,27,21,0.85)",backdropFilter:"blur(8px)",padding:"0.3rem 0.75rem",borderRadius:"var(--radius-full)",fontSize:"0.72rem",color:"var(--accent-gold)",fontWeight:"600",border:"1px solid rgba(212,175,55,0.3)"},children:i.category})]}),x.jsxs("div",{style:{padding:"1.35rem",display:"flex",flexDirection:"column",flexGrow:1},children:[x.jsx("h3",{style:{fontSize:"1.25rem",color:"#fff",marginBottom:"0.5rem"},children:i.title}),x.jsx("p",{style:{fontSize:"0.86rem",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"1.25rem",flexGrow:1},children:i.shortDesc}),x.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"0.85rem",borderTop:"1px solid var(--border-subtle)"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.78rem",color:"var(--text-secondary)"},children:[x.jsx(Gh,{size:13,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:i.craftTime})]}),x.jsxs("button",{onClick:()=>n(i),style:{display:"inline-flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--accent-gold-light)",fontWeight:"600"},children:[x.jsx("span",{children:"Details"}),x.jsx(HE,{size:13})]})]})]})]},i.id))})]}),e&&x.jsx("div",{style:{position:"fixed",inset:0,zIndex:200,background:"rgba(5, 15, 12, 0.88)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"},children:x.jsxs(an.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},className:"glass-panel-gold",style:{maxWidth:"620px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"2rem",position:"relative",boxShadow:"0 30px 60px rgba(0,0,0,0.85)"},children:[x.jsx("button",{onClick:()=>n(null),style:{position:"absolute",top:"1.25rem",right:"1.25rem",color:"var(--text-muted)",padding:"0.4rem",borderRadius:"50%",background:"rgba(255,255,255,0.05)"},children:x.jsx(Xc,{size:20})}),x.jsx("span",{className:"subheading",children:e.category}),x.jsx("h3",{style:{fontSize:"1.8rem",color:"#fff",marginBottom:"0.75rem"},children:e.title}),x.jsx("div",{style:{borderRadius:"var(--radius-sm)",overflow:"hidden",height:"200px",marginBottom:"1.25rem"},children:x.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"1.5rem"},children:e.fullDesc}),x.jsxs("div",{style:{marginBottom:"1.5rem"},children:[x.jsx("div",{style:{fontSize:"0.88rem",color:"#fff",fontWeight:"600",marginBottom:"0.65rem"},children:"Features & Craft Process:"}),x.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.55rem"},children:e.features.map((i,r)=>x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.55rem",fontSize:"0.86rem",color:"var(--text-secondary)"},children:[x.jsx(qx,{size:15,style:{color:"var(--accent-gold)",flexShrink:0}}),x.jsx("span",{children:i})]},r))})]}),x.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[x.jsx("button",{onClick:()=>n(null),className:"btn btn-outline",style:{padding:"0.6rem 1.15rem"},children:"Close"}),x.jsxs("button",{onClick:()=>{const i=e;n(null),t(i.title)},className:"btn btn-gold",style:{padding:"0.6rem 1.15rem"},children:[x.jsx(qr,{size:15}),x.jsx("span",{children:"Book This Service"})]})]})]})})]})}const I0=[{id:1,title:"Bridal Lehengas & Zardozi Suite",category:"bridal",craftDetails:"In-House Hand Embroidery & Dupatta Styling",image:"/Collections/A.jpg"},{id:2,title:"Cut-Work Maggam Blouse Creation",category:"blouses",craftDetails:"Peacock & floral hand Aari embroidery",image:"/Collections/A2.jpg"},{id:3,title:"Classic Red Silk Bridal Outfit",category:"bridal",craftDetails:"Traditional Telangana bridal craftsmanship",image:"/Collections/B.jpg"},{id:4,title:"Elbow Sleeve Maggam Saree Blouse",category:"blouses",craftDetails:"Heavy stone work & gold thread piping",image:"/Collections/B2.jpg"},{id:5,title:"Pastel Designer Lehenga Ensemble",category:"bridal",craftDetails:"Organza dupatta & tailored bodice flare",image:"/Collections/C1.jpg"},{id:6,title:"Contemporary Saree Blouse Pattern",category:"blouses",craftDetails:"Boat neck cut & anti-shoulder slip fitting",image:"/Collections/C2.jpg"},{id:7,title:"Pre-Draped Designer Fusion Saree",category:"sarees",craftDetails:"Modern cocktail drape & embroidered belt",image:"/Collections/C3.jpg"},{id:8,title:"Custom Fabric & Lehenga Sourcing",category:"fabrics",craftDetails:"Pure Kanjeevaram silk & organza pairing",image:"/Collections/D.jpg"},{id:9,title:"Heirloom Restyled Saree Blouse",category:"blouses",craftDetails:"Precision sizing & border preservation",image:"/Collections/E.jpg"},{id:10,title:"Velvet Royal Bridal Silhouette",category:"bridal",craftDetails:"Dense Zardozi embroidery suite",image:"/Collections/F.jpg"},{id:11,title:"Organza Cape & Indo-Western Suit",category:"sarees",craftDetails:"Lightweight flare & festive embroidery",image:"/Collections/G.jpg"},{id:12,title:"Signature Blouse Neck Cut",category:"blouses",craftDetails:"Deep back with handcrafted latkan tassels",image:"/Collections/H.jpg"}];function Z3({onOpenBooking:t}){const[e,n]=ve.useState("all"),[i,r]=ve.useState(null),s=e==="all"?I0:I0.filter(o=>o.category===e);return x.jsxs("section",{id:"gallery",className:"section-padding",style:{background:"var(--bg-secondary)",position:"relative"},children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",maxWidth:"720px",margin:"0 auto 3rem auto"},children:[x.jsx("span",{className:"subheading",children:"Studio Collections Showcase"}),x.jsxs("h2",{className:"heading-md",children:["Authentic Studio Work by ",x.jsx("span",{className:"text-gold",children:"Saru's Fashion Studio."})]}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1rem"},children:"Explore actual custom outfits crafted at our Kondapur & Moti Nagar studios for real clients."})]}),x.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"0.75rem",flexWrap:"wrap",marginBottom:"3rem"},children:[{id:"all",label:"All Collections"},{id:"fabrics",label:"Fabrics"},{id:"bridal",label:"Designer Lehengas"},{id:"sarees",label:"Designer Sarees"},{id:"blouses",label:"Bridal Blouses"}].map(o=>x.jsx("button",{onClick:()=>n(o.id),style:{padding:"0.5rem 1.25rem",borderRadius:"var(--radius-full)",fontSize:"0.85rem",fontWeight:"600",transition:"var(--transition)",background:e===o.id?"var(--accent-gold)":"rgba(255,255,255,0.05)",color:e===o.id?"#0c1c15":"var(--text-secondary)",border:e===o.id?"1px solid var(--accent-gold)":"1px solid var(--border-subtle)"},children:o.label},o.id))}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"1.5rem"},children:s.map((o,a)=>x.jsx(an.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:a*.05},whileHover:{y:-6},className:"glass-panel",style:{overflow:"hidden",borderRadius:"var(--radius-md)",cursor:"pointer",position:"relative"},onClick:()=>r(o),children:x.jsxs("div",{style:{height:"340px",overflow:"hidden",position:"relative"},children:[x.jsx("img",{src:o.image,alt:o.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s ease"}}),x.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,27,21,0.92) 0%, transparent 60%)",opacity:.9,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"1.25rem"},children:[x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--accent-gold)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"0.25rem"},children:o.craftDetails}),x.jsx("h3",{style:{fontSize:"1.18rem",color:"#fff",fontWeight:"600"},children:o.title})]}),x.jsx("div",{style:{position:"absolute",top:"0.85rem",right:"0.85rem",width:"34px",height:"34px",borderRadius:"50%",background:"rgba(10,27,21,0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)"},children:x.jsx(jE,{size:16})})]})},o.id))})]}),i&&x.jsx("div",{style:{position:"fixed",inset:0,zIndex:300,background:"rgba(5, 15, 12, 0.92)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"},children:x.jsxs(an.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},className:"glass-panel-gold",style:{maxWidth:"750px",width:"100%",overflow:"hidden",position:"relative",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",boxShadow:"0 30px 60px rgba(0,0,0,0.9)"},children:[x.jsx("button",{onClick:()=>r(null),style:{position:"absolute",top:"1rem",right:"1rem",zIndex:10,color:"#fff",background:"rgba(0,0,0,0.6)",padding:"0.4rem",borderRadius:"50%"},children:x.jsx(Xc,{size:20})}),x.jsx("div",{style:{gridColumn:"span 12","@media(min-width: 768px)":{gridColumn:"span 7"}},children:x.jsx("img",{src:i.image,alt:i.title,style:{width:"100%",height:"420px",objectFit:"cover"}})}),x.jsxs("div",{style:{gridColumn:"span 12","@media(min-width: 768px)":{gridColumn:"span 5"},padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center"},children:[x.jsx("span",{className:"subheading",children:"Studio Creation"}),x.jsx("h3",{style:{fontSize:"1.4rem",color:"#fff",marginBottom:"0.75rem"},children:i.title}),x.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--accent-gold-light)",marginBottom:"1.25rem",fontWeight:"600"},children:["✨ ",i.craftDetails]}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"1.5rem"},children:"Crafted at Saru's Fashion Studio with custom measurements and handwork fitting trial."}),x.jsxs("button",{onClick:()=>{r(null),t()},className:"btn btn-gold",style:{width:"100%"},children:[x.jsx(qr,{size:16}),x.jsx("span",{children:"Recreate This Outfit"})]})]})]})})]})}const N0=[{id:"blouse",name:"Bridal Blouse",basePrice:1800,baseDays:6},{id:"lehenga",name:"Designer Lehenga",basePrice:12e3,baseDays:14},{id:"saree",name:"Designer Saree & Drape",basePrice:4500,baseDays:8},{id:"fabric",name:"Curated Fabric Sourcing",basePrice:1200,baseDays:3}],U0=[{id:"silk",name:"Pure Kanjeevaram / Silk",priceMultiplier:1.25},{id:"velvet",name:"Royal Silk Velvet",priceMultiplier:1.35},{id:"organza",name:"Pure Organza / Tissue",priceMultiplier:1.15},{id:"georgette",name:"Fine Georgette / Net",priceMultiplier:1}],F0=[{id:"minimal",name:"Minimal Neckline & Border Work",priceAdd:600,daysAdd:0},{id:"moderate",name:"Thread & Pearl Elbow Maggam",priceAdd:1800,daysAdd:2},{id:"maggam",name:"Intricate Maggam & Peacock Aari",priceAdd:3500,daysAdd:4},{id:"zardozi",name:"Full Heavy Zardozi & Crystal Suite",priceAdd:7500,daysAdd:7}];function Q3({onLaunchCustomBooking:t}){const[e,n]=ve.useState(N0[0]),[i,r]=ve.useState(U0[0]),[s,o]=ve.useState(F0[1]),[a,l]=ve.useState(!1),c=Math.round(e.basePrice*i.priceMultiplier+s.priceAdd),u=Math.round(c*.95),d=Math.round(c*1.15);let f=e.baseDays+s.daysAdd;a&&(f=Math.max(3,Math.round(f*.6)));const p=()=>{t({silhouette:e.name,fabric:i.name,embroidery:s.name,timeline:a?`Express Priority (${f} Days)`:`Standard (${f} Days)`,estimatedPrice:`₹${u.toLocaleString()} - ₹${d.toLocaleString()}`})};return x.jsxs("section",{id:"estimator",className:"section-padding",style:{position:"relative"},children:[x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",maxWidth:"750px",margin:"0 auto 3.5rem auto"},children:[x.jsxs("span",{className:"subheading",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[x.jsx(qr,{size:14})," Co-Design Experience"]}),x.jsxs("h2",{className:"heading-md",children:["Interactive Outfit & ",x.jsx("span",{className:"text-gold",children:"Fitting Estimator."})]}),x.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1rem"},children:"Select your preferred core service, fabric, and handwork intensity to see a real-time crafting timeline and estimated investment range."})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:"2.5rem",alignItems:"start"},children:[x.jsxs("div",{style:{gridColumn:"span 12","@media(min-width: 992px)":{gridColumn:"span 7"}},className:"estimator-ctrls",children:[x.jsxs("div",{style:{marginBottom:"2rem"},children:[x.jsx("div",{style:{fontSize:"0.85rem",color:"var(--accent-gold-light)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.75rem"},children:"Step 1: Choose Core Service"}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:N0.map(v=>x.jsx("button",{onClick:()=>n(v),className:"glass-panel",style:{padding:"1rem",textAlign:"left",transition:"var(--transition)",borderColor:e.id===v.id?"var(--accent-gold)":"var(--border-subtle)",background:e.id===v.id?"rgba(212,175,55,0.14)":"var(--bg-card)"},children:x.jsx("div",{style:{fontSize:"0.95rem",fontWeight:"600",color:e.id===v.id?"#fff":"var(--text-secondary)"},children:v.name})},v.id))})]}),x.jsxs("div",{style:{marginBottom:"2rem"},children:[x.jsx("div",{style:{fontSize:"0.85rem",color:"var(--accent-gold-light)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.75rem"},children:"Step 2: Fabric Selection"}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:U0.map(v=>x.jsx("button",{onClick:()=>r(v),className:"glass-panel",style:{padding:"0.9rem",textAlign:"left",transition:"var(--transition)",borderColor:i.id===v.id?"var(--accent-gold)":"var(--border-subtle)",background:i.id===v.id?"rgba(212,175,55,0.14)":"var(--bg-card)"},children:x.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"600",color:i.id===v.id?"#fff":"var(--text-secondary)"},children:v.name})},v.id))})]}),x.jsxs("div",{style:{marginBottom:"2rem"},children:[x.jsx("div",{style:{fontSize:"0.85rem",color:"var(--accent-gold-light)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.75rem"},children:"Step 3: Hand Embroidery Intensity"}),x.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:F0.map(v=>x.jsxs("button",{onClick:()=>o(v),className:"glass-panel",style:{padding:"0.95rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"var(--transition)",borderColor:s.id===v.id?"var(--accent-gold)":"var(--border-subtle)",background:s.id===v.id?"rgba(212,175,55,0.14)":"var(--bg-card)"},children:[x.jsx("div",{style:{textAlign:"left"},children:x.jsx("div",{style:{fontSize:"0.92rem",fontWeight:"600",color:s.id===v.id?"#fff":"var(--text-secondary)"},children:v.name})}),s.id===v.id&&x.jsx(qx,{size:18,style:{color:"var(--accent-gold)"}})]},v.id))})]}),x.jsxs("div",{className:"glass-panel",style:{padding:"1rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.95rem",color:"#fff",fontWeight:"600"},children:"⚡ Priority Express Tailoring"}),x.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Fast-track fitting for urgent wedding or event dates"})]}),x.jsx("input",{type:"checkbox",checked:a,onChange:v=>l(v.target.checked),style:{width:"20px",height:"20px",accentColor:"var(--accent-gold)",cursor:"pointer"}})]})]}),x.jsx("div",{style:{gridColumn:"span 12","@media(min-width: 992px)":{gridColumn:"span 5"}},className:"estimator-summary",children:x.jsxs(an.div,{layout:!0,className:"glass-panel-gold",style:{padding:"2rem",boxShadow:"0 25px 50px rgba(0,0,0,0.6)"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.25rem",color:"var(--accent-gold)"},children:[x.jsx(QE,{size:18}),x.jsx("span",{style:{fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.15em",fontWeight:"700"},children:"Custom Spec Summary"})]}),x.jsxs("div",{style:{borderBottom:"1px solid var(--border-subtle)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[x.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Selected Offering"}),x.jsx("div",{style:{fontSize:"1.25rem",color:"#fff",fontWeight:"600",fontFamily:"var(--font-serif)"},children:e.name})]}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"1.5rem",fontSize:"0.88rem"},children:[x.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--text-secondary)"},children:[x.jsx("span",{children:"Fabric Type:"}),x.jsx("span",{style:{color:"#fff",fontWeight:"500"},children:i.name})]}),x.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--text-secondary)"},children:[x.jsx("span",{children:"Embroidery:"}),x.jsxs("span",{style:{color:"#fff",fontWeight:"500"},children:[s.name.split(" ")[0],"..."]})]}),x.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--text-secondary)"},children:[x.jsx("span",{children:"Trial Locations:"}),x.jsx("span",{style:{color:"var(--accent-gold-light)",fontWeight:"600"},children:"Kondapur / Moti Nagar"})]})]}),x.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"0.85rem"},children:[x.jsx(Gh,{size:24,style:{color:"var(--accent-gold)"}}),x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Estimated Delivery"}),x.jsxs("div",{style:{fontSize:"1.1rem",color:"#fff",fontWeight:"700"},children:[f," Days Turnaround"]})]})]}),x.jsxs("div",{style:{marginBottom:"1.75rem",textAlign:"center"},children:[x.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Estimated Investment Range"}),x.jsxs("div",{style:{fontSize:"2.1rem",fontFamily:"var(--font-serif)",color:"var(--accent-gold)",fontWeight:"700"},children:["₹",u.toLocaleString()," – ₹",d.toLocaleString()]}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginTop:"0.2rem"},children:"*Exact quote finalized during in-person studio trial."})]}),x.jsxs("button",{onClick:p,className:"btn btn-gold",style:{width:"100%",padding:"0.9rem"},children:[x.jsx(Wc,{size:18}),x.jsx("span",{children:"Book Fitting with This Spec"})]})]})})]})]}),x.jsx("style",{children:`
        @media (min-width: 992px) {
          .estimator-ctrls { grid-column: span 7 !important; }
          .estimator-summary { grid-column: span 5 !important; }
        }
      `})]})}const J3=[{id:1,name:"Priyanka Reddy",location:"Kondapur Studio Client",rating:5,date:"2 weeks ago",text:"Saru did absolute magic on my bridal lehenga and 3 saree blouses for my reception! The fitting was 10/10 on the first trial itself. No armpit gaping or shoulder slipping. Highly recommended boutique in Kondapur!",outfit:"Custom Bridal Lehenga Suite"},{id:2,name:"Sravanthi Rao",location:"Moti Nagar Studio Client",rating:5,date:"1 month ago",text:"Extremely professional studio. I brought my own Banarasi saree fabric to their Moti Nagar branch for a heavy Maggam elbow blouse. They guided me on neck cuts that suit my posture and delivered right on time.",outfit:"Heavy Maggam Saree Blouse"},{id:3,name:"Dr. Kavitha Menon",location:"Hitec City / Kondapur Client",rating:5,date:"3 weeks ago",text:"The interactive consultation made a huge difference. Saru listened carefully to how I wanted the cape drape for my designer saree. The finishing and stitching quality are top-tier.",outfit:"Designer Pre-Draped Saree"}],eI=[{num:"01",title:"1-on-1 Design Consultation",desc:"Visit our Kondapur or Moti Nagar studio. We review your inspiration, body shape, and occasion requirements."},{num:"02",title:"Fabric Sourcing & Sketching",desc:"Select from our in-studio silk & organza fabrics or bring your own saree. We outline the exact cut and Maggam work."},{num:"03",title:"In-Studio Trial Fitting",desc:"You try on the semi-stitched garment at our studio to verify shoulder alignment, bust cup placement, and length."},{num:"04",title:"Final Hand Finishing & Pick-Up",desc:"Master artisans add final tassels, press, and package your flawless outfit for your special event."}];function tI(){return x.jsx("section",{id:"trust",className:"section-padding",style:{background:"var(--bg-secondary)",position:"relative"},children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",maxWidth:"750px",margin:"0 auto 4rem auto"},children:[x.jsx("span",{className:"subheading",children:"Building Total Trust"}),x.jsxs("h2",{className:"heading-md",children:["Why Hyderabad Trusts ",x.jsx("span",{className:"text-gold",children:"Saru's Fashion Studio."})]}),x.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"1rem"},children:["Operating across two premier locations in ",x.jsx("strong",{children:"Kondapur"})," and ",x.jsx("strong",{children:"Moti Nagar"})," with authentic client experiences and fit guarantees."]})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",marginBottom:"4.5rem"},children:[x.jsxs("div",{className:"glass-panel-gold",style:{padding:"1.75rem",position:"relative"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"var(--accent-gold)",marginBottom:"0.75rem"},children:[x.jsx(si,{size:20}),x.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff"},children:"Kondapur Studio Branch"})]}),x.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"1.25rem"},children:"Kondapur Main Road, Near Botanical Garden & Google Office Corridor, Kondapur, Hyderabad, 500084."}),x.jsxs("a",{href:"https://share.google/59PMmjuLQWolqbRSG",target:"_blank",rel:"noopener noreferrer",className:"btn btn-gold",style:{width:"100%",padding:"0.65rem",fontSize:"0.84rem"},children:[x.jsx("span",{children:"Get Google Maps Directions (Kondapur)"}),x.jsx(jm,{size:14})]})]}),x.jsxs("div",{className:"glass-panel-gold",style:{padding:"1.75rem",position:"relative"},children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"var(--accent-gold)",marginBottom:"0.75rem"},children:[x.jsx(si,{size:20}),x.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff"},children:"Moti Nagar Studio Branch"})]}),x.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"1.25rem"},children:"Main Road, Moti Nagar Area, Hyderabad, Telangana (Convenient access for West Hyderabad)."}),x.jsxs("a",{href:"https://g.co/kgs/MYXHRpJ",target:"_blank",rel:"noopener noreferrer",className:"btn btn-gold",style:{width:"100%",padding:"0.65rem",fontSize:"0.84rem"},children:[x.jsx("span",{children:"Get Google Maps Directions (Moti Nagar)"}),x.jsx(jm,{size:14})]})]})]}),x.jsxs("div",{style:{marginBottom:"5rem"},children:[x.jsx("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:x.jsx("h3",{style:{fontSize:"1.6rem",color:"#fff"},children:"The 4-Step Bespoke Fitting Journey"})}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"1.5rem"},children:eI.map(t=>x.jsxs("div",{className:"glass-panel",style:{padding:"1.75rem",position:"relative"},children:[x.jsx("div",{style:{fontSize:"2.5rem",fontFamily:"var(--font-serif)",color:"var(--accent-gold)",fontWeight:"700",opacity:.8,marginBottom:"0.5rem"},children:t.num}),x.jsx("h4",{style:{fontSize:"1.15rem",color:"#fff",marginBottom:"0.5rem"},children:t.title}),x.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6},children:t.desc})]},t.num))})]}),x.jsxs("div",{children:[x.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[x.jsx("span",{className:"subheading",style:{marginBottom:"0.2rem"},children:"Authentic Feedback"}),x.jsx("h3",{style:{fontSize:"1.75rem",color:"#fff"},children:"Client Fitting Testimonials"})]}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem"},children:J3.map(t=>x.jsxs("div",{className:"glass-panel",style:{padding:"1.75rem",display:"flex",flexDirection:"column"},children:[x.jsx("div",{style:{display:"flex",gap:"0.2rem",color:"#d4af37",marginBottom:"0.75rem"},children:[...Array(t.rating)].map((e,n)=>x.jsx(Qx,{size:15,style:{fill:"#d4af37"}},n))}),x.jsxs("p",{style:{fontSize:"0.92rem",color:"var(--text-secondary)",lineHeight:1.6,marginBottom:"1.5rem",flexGrow:1},children:['"',t.text,'"']}),x.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},children:[x.jsxs("div",{children:[x.jsx("div",{style:{fontSize:"0.95rem",fontWeight:"600",color:"#fff"},children:t.name}),x.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:t.location})]}),x.jsx("div",{style:{fontSize:"0.72rem",color:"var(--accent-gold-light)",background:"rgba(212,175,55,0.1)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-full)"},children:t.outfit})]})]},t.id))})]})]})})}function nI({isOpen:t,onClose:e,customSpec:n}){const[i,r]=ve.useState({name:"",phone:"",service:"Designer Saree Blouse",fittingType:"Studio Visit (Kondapur)",preferredDate:"",preferredTime:"11:00 AM - 01:00 PM",notes:""}),[s,o]=ve.useState(!1);if(ve.useEffect(()=>{n&&r(c=>({...c,service:n.silhouette||c.service,notes:`Fabric: ${n.fabric||""} | Embroidery: ${n.embroidery||""} | Timeline: ${n.timeline||""} | Estimate: ${n.estimatedPrice||""}`}))},[n]),!t)return null;const a=c=>{c.preventDefault(),o(!0)},l=()=>{const c=`Hello Saru's Fashion Studio! I would like to book a fitting consultation.

*Name:* ${i.name}
*Phone:* ${i.phone}
*Service:* ${i.service}
*Fitting Preference:* ${i.fittingType}
*Preferred Date:* ${i.preferredDate}
*Time:* ${i.preferredTime}
${i.notes?`*Custom Specs:* ${i.notes}`:""}`,u=`https://wa.me/919876543210?text=${encodeURIComponent(c)}`;window.open(u,"_blank")};return x.jsx("div",{style:{position:"fixed",inset:0,zIndex:250,background:"rgba(5, 15, 12, 0.9)",backdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"},children:x.jsxs("div",{className:"glass-panel-gold",style:{maxWidth:"560px",width:"100%",maxHeight:"92vh",overflowY:"auto",padding:"2.25rem",position:"relative",boxShadow:"0 35px 70px rgba(0,0,0,0.85)"},children:[x.jsx("button",{onClick:e,style:{position:"absolute",top:"1.25rem",right:"1.25rem",color:"var(--text-muted)",padding:"0.4rem",borderRadius:"50%",background:"rgba(255,255,255,0.05)"},children:x.jsx(Xc,{size:20})}),s?x.jsxs("div",{style:{textAlign:"center",padding:"1.5rem 0"},children:[x.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"rgba(212, 175, 55, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",margin:"0 auto 1.25rem auto"},children:x.jsx(GE,{size:36})}),x.jsx("h3",{style:{fontSize:"1.8rem",color:"#fff",marginBottom:"0.5rem"},children:"Booking Request Received!"}),x.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"1.75rem"},children:["Thank you, ",x.jsx("strong",{style:{color:"#fff"},children:i.name}),". Our lead master tailor at Saru's Fashion Studio will call you at ",x.jsx("strong",{children:i.phone})," to confirm your slot for ",x.jsx("strong",{children:i.preferredDate||"your selected date"}),"."]}),x.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"1.25rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",marginBottom:"2rem",textAlign:"left"},children:[x.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--accent-gold)",fontWeight:"600",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[x.jsx(si,{size:15})," Studio Address (Kondapur, Hyderabad)"]}),x.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-muted)"},children:"Saru's Fashion Studio, Kondapur Main Rd (Near Botanical Garden & Google Office), Hyderabad, Telangana 500084."})]}),x.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[x.jsxs("button",{onClick:l,className:"btn btn-gold",children:[x.jsx(Wm,{size:16}),x.jsx("span",{children:"Open WhatsApp Chat"})]}),x.jsx("button",{onClick:e,className:"btn btn-outline",children:"Done"})]})]}):x.jsxs("div",{children:[x.jsx("span",{className:"subheading",style:{marginBottom:"0.2rem"},children:"Fitting & Consultation"}),x.jsx("h3",{style:{fontSize:"1.75rem",color:"#fff",marginBottom:"0.5rem"},children:"Book Your Studio Appointment"}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",marginBottom:"1.75rem"},children:"Visit our boutique in Kondapur, Hyderabad for a personalized 1-on-1 style session and precise 18-point measurement mapping."}),x.jsxs("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",gap:"1.1rem"},children:[x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Your Full Name *"}),x.jsx("input",{type:"text",required:!0,placeholder:"e.g. Ananya Sharma",value:i.name,onChange:c=>r({...i,name:c.target.value}),style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"#fff",outline:"none",fontSize:"0.92rem"}})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Phone / WhatsApp *"}),x.jsx("input",{type:"tel",required:!0,placeholder:"+91 98765 xxxxx",value:i.phone,onChange:c=>r({...i,phone:c.target.value}),style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"#fff",outline:"none",fontSize:"0.92rem"}})]}),x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Garment Requirement"}),x.jsxs("select",{value:i.service,onChange:c=>r({...i,service:c.target.value}),style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(10,27,21,0.95)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"#fff",outline:"none",fontSize:"0.92rem"},children:[x.jsx("option",{value:"Designer Saree Blouse",children:"Designer Saree Blouse"}),x.jsx("option",{value:"Bridal Lehenga Couture",children:"Bridal Lehenga Couture"}),x.jsx("option",{value:"Indo-Western & Fusion",children:"Indo-Western & Fusion"}),x.jsx("option",{value:"Precision Alterations",children:"Precision Alterations"})]})]})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Preferred Date"}),x.jsx("input",{type:"date",required:!0,value:i.preferredDate,onChange:c=>r({...i,preferredDate:c.target.value}),style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"#fff",outline:"none",fontSize:"0.92rem"}})]}),x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Time Slot"}),x.jsxs("select",{value:i.preferredTime,onChange:c=>r({...i,preferredTime:c.target.value}),style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(10,27,21,0.95)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"#fff",outline:"none",fontSize:"0.92rem"},children:[x.jsx("option",{value:"11:00 AM - 01:00 PM",children:"11:00 AM - 01:00 PM"}),x.jsx("option",{value:"02:00 PM - 04:00 PM",children:"02:00 PM - 04:00 PM"}),x.jsx("option",{value:"05:00 PM - 07:30 PM",children:"05:00 PM - 07:30 PM"})]})]})]}),x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Fitting Location Mode"}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:["Studio Visit (Kondapur)","Doorstep Measurement"].map(c=>x.jsx("button",{type:"button",onClick:()=>r({...i,fittingType:c}),style:{padding:"0.65rem 0.75rem",fontSize:"0.82rem",borderRadius:"var(--radius-sm)",transition:"var(--transition)",background:i.fittingType===c?"rgba(212,175,55,0.15)":"rgba(0,0,0,0.3)",borderColor:i.fittingType===c?"var(--accent-gold)":"var(--border-subtle)",borderStyle:"solid",borderWidth:"1px",color:i.fittingType===c?"#fff":"var(--text-muted)"},children:c},c))})]}),i.notes&&x.jsxs("div",{children:[x.jsx("label",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",fontWeight:"600",marginBottom:"0.35rem",display:"block"},children:"Custom Design Specifications"}),x.jsx("textarea",{rows:2,value:i.notes,onChange:c=>r({...i,notes:c.target.value}),style:{width:"100%",padding:"0.65rem 0.9rem",background:"rgba(0,0,0,0.4)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",color:"var(--accent-gold-light)",outline:"none",fontSize:"0.82rem"}})]}),x.jsxs("div",{style:{marginTop:"0.75rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[x.jsxs("button",{type:"submit",className:"btn btn-gold",style:{padding:"0.85rem"},children:[x.jsx(Wc,{size:18}),x.jsx("span",{children:"Confirm Consultation Request"})]}),x.jsxs("button",{type:"button",onClick:l,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",padding:"0.75rem",borderRadius:"var(--radius-full)",background:"rgba(37, 211, 102, 0.15)",border:"1px solid rgba(37, 211, 102, 0.3)",color:"#25d366",fontSize:"0.88rem",fontWeight:"600"},children:[x.jsx(Wm,{size:16}),x.jsx("span",{children:"Instant WhatsApp Booking Request"})]})]})]})]})]})})}function iI({onOpenBooking:t}){return x.jsx("footer",{id:"contact",style:{background:"#071410",borderTop:"1px solid var(--border-gold)",paddingTop:"5rem",paddingBottom:"2.5rem",position:"relative"},children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"glass-panel-gold",style:{padding:"2.5rem 2rem",marginBottom:"4.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.5rem",background:"linear-gradient(135deg, rgba(17,39,31,0.95) 0%, rgba(23,51,41,0.95) 100%)"},children:[x.jsxs("div",{children:[x.jsx("span",{className:"subheading",style:{marginBottom:"0.2rem"},children:"Studios in Kondapur & Moti Nagar"}),x.jsx("h3",{style:{fontSize:"1.8rem",color:"#fff",marginBottom:"0.4rem"},children:"Ready to Craft Your Custom Story?"}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",maxWidth:"520px"},children:"Schedule a 1-on-1 design consultation with Saru and experience high-precision master tailoring in Hyderabad."})]}),x.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[x.jsx("button",{onClick:t,className:"btn btn-gold",children:x.jsx("span",{children:"Book Studio Fitting"})}),x.jsxs("a",{href:"https://share.google/59PMmjuLQWolqbRSG",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:[x.jsx(si,{size:16,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"Kondapur Map"})]}),x.jsxs("a",{href:"https://g.co/kgs/MYXHRpJ",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:[x.jsx(si,{size:16,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"Moti Nagar Map"})]})]})]}),x.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"2.5rem",marginBottom:"4rem"},children:[x.jsxs("div",{children:[x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem"},children:[x.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #d4af37 0%, #8a6c17 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#0a1b15",fontWeight:"700",fontFamily:"var(--font-serif)"},children:"S"}),x.jsxs("div",{style:{fontFamily:"var(--font-serif)",fontSize:"1.35rem",color:"#fff",fontWeight:"700"},children:["Saru's ",x.jsx("span",{style:{color:"var(--accent-gold)"},children:"Fashion Studio"})]})]}),x.jsx("div",{style:{fontSize:"0.9rem",color:"var(--accent-gold)",fontStyle:"italic",marginBottom:"1rem",fontWeight:"600"},children:'"Custom made outfits for every story🫶🏻"'}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"1.5rem"},children:"Specialist bespoke studio across 4 core services: Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses."}),x.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[x.jsx("a",{href:"https://www.instagram.com/sarusfashionstudio",target:"_blank",rel:"noopener noreferrer",style:{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",border:"1px solid var(--border-subtle)"},children:x.jsx(XE,{size:18})}),x.jsx("a",{href:"https://www.facebook.com/sarusfashions/",target:"_blank",rel:"noopener noreferrer",style:{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-gold)",border:"1px solid var(--border-subtle)"},children:x.jsx(WE,{size:18})})]})]}),x.jsxs("div",{children:[x.jsx("h4",{style:{fontSize:"1.05rem",color:"#fff",marginBottom:"1.25rem"},children:"Studio Locations"}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.1rem",fontSize:"0.86rem",color:"var(--text-muted)"},children:[x.jsxs("div",{children:[x.jsxs("div",{style:{color:"var(--accent-gold-light)",fontWeight:"600",display:"flex",alignItems:"center",gap:"0.35rem"},children:[x.jsx(si,{size:14})," Kondapur Branch:"]}),x.jsx("div",{children:"Kondapur Main Rd, Near Botanical Garden, Hyderabad 500084"}),x.jsx("a",{href:"https://share.google/59PMmjuLQWolqbRSG",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent-gold)",fontSize:"0.78rem"},children:"View Google Map →"})]}),x.jsxs("div",{children:[x.jsxs("div",{style:{color:"var(--accent-gold-light)",fontWeight:"600",display:"flex",alignItems:"center",gap:"0.35rem"},children:[x.jsx(si,{size:14})," Moti Nagar Branch:"]}),x.jsx("div",{children:"Main Road, Moti Nagar Area, Hyderabad, Telangana"}),x.jsx("a",{href:"https://g.co/kgs/MYXHRpJ",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent-gold)",fontSize:"0.78rem"},children:"View Google Map →"})]})]})]}),x.jsxs("div",{children:[x.jsx("h4",{style:{fontSize:"1.05rem",color:"#fff",marginBottom:"1.25rem"},children:"Get In Touch"}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.9rem",fontSize:"0.88rem",color:"var(--text-muted)"},children:[x.jsxs("a",{href:"tel:+919876543210",style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"var(--text-secondary)"},children:[x.jsx(Ef,{size:16,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"+91 98765 43210"})]}),x.jsxs("a",{href:"mailto:contact@sarusfashionstudio.com",style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"var(--text-secondary)"},children:[x.jsx($E,{size:16,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"contact@sarusfashionstudio.com"})]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"var(--text-secondary)"},children:[x.jsx(Gh,{size:16,style:{color:"var(--accent-gold)"}}),x.jsx("span",{children:"Mon - Sat: 10:30 AM – 8:30 PM"})]})]})]}),x.jsxs("div",{children:[x.jsx("h4",{style:{fontSize:"1.05rem",color:"#fff",marginBottom:"1.25rem"},children:"Core Offerings"}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem",fontSize:"0.88rem",color:"var(--text-muted)"},children:[x.jsx("a",{href:"#services",style:{color:"var(--text-secondary)"},children:"Curated Fabrics"}),x.jsx("a",{href:"#services",style:{color:"var(--text-secondary)"},children:"Designer Lehengas"}),x.jsx("a",{href:"#services",style:{color:"var(--text-secondary)"},children:"Designer Sarees"}),x.jsx("a",{href:"#services",style:{color:"var(--text-secondary)"},children:"Bridal Blouses"}),x.jsx("a",{href:"#estimator",style:{color:"var(--accent-gold)"},children:"✨ Interactive Customizer"})]})]})]}),x.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:[x.jsx("div",{children:"© 2026 Saru's Fashion Studio. All Rights Reserved. Kondapur & Moti Nagar, Hyderabad."}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:[x.jsx("span",{children:"Built with"}),x.jsx(Zx,{size:13,style:{color:"var(--accent-gold)",fill:"var(--accent-gold)"}}),x.jsx("span",{children:"for KERNA Web Challenge"})]})]})]})})}function rI(){const[t,e]=ve.useState(!1),[n,i]=ve.useState(null),r=()=>{i(null),e(!0)},s=a=>{i({silhouette:a}),e(!0)},o=a=>{i(a),e(!0)};return x.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[x.jsx(Tb,{onOpenBooking:r}),x.jsxs("main",{style:{flexGrow:1},children:[x.jsx($3,{onOpenBooking:r}),x.jsx(Y3,{}),x.jsx(q3,{onSelectService:s}),x.jsx(Z3,{onOpenBooking:r}),x.jsx(Q3,{onLaunchCustomBooking:o}),x.jsx(tI,{})]}),x.jsx(iI,{onOpenBooking:r}),x.jsx(nI,{isOpen:t,onClose:()=>e(!1),customSpec:n})]})}Rd.createRoot(document.getElementById("root")).render(x.jsx(CM.StrictMode,{children:x.jsx(rI,{})}));
