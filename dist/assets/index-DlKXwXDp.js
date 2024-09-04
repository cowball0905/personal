(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const he={},mn=[],Ge=()=>{},Bh=()=>!1,vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hh=Object.prototype.hasOwnProperty,Y=(t,e)=>Hh.call(t,e),H=Array.isArray,yn=t=>Ei(t)==="[object Map]",$c=t=>Ei(t)==="[object Set]",W=t=>typeof t=="function",ve=t=>typeof t=="string",ln=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Bc=t=>(fe(t)||W(t))&&W(t.then)&&W(t.catch),Hc=Object.prototype.toString,Ei=t=>Hc.call(t),Uh=t=>Ei(t).slice(8,-1),Uc=t=>Ei(t)==="[object Object]",Kr=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ci=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wh=/-(\w)/g,ft=Ci(t=>t.replace(Wh,(e,n)=>n?n.toUpperCase():"")),Vh=/\B([A-Z])/g,Pn=Ci(t=>t.replace(Vh,"-$1").toLowerCase()),bi=Ci(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gi=Ci(t=>t?`on${bi(t)}`:""),Bt=(t,e)=>!Object.is(t,e),zi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},jh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xo;const Vc=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vn(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ve(s)?Kh(s):vn(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ve(t)||fe(t))return t}const Gh=/;(?![^(]*\))/g,zh=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Kh(t){const e={};return t.replace(qh,"").split(Gh).forEach(n=>{if(n){const s=n.split(zh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yr(t){let e="";if(ve(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Yr(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qh=Gr(Yh);function jc(t){return!!t||t===""}const ct=t=>ve(t)?t:t==null?"":H(t)||fe(t)&&(t.toString===Hc||!W(t.toString))?JSON.stringify(t,Gc,2):String(t),Gc=(t,e)=>e&&e.__v_isRef?Gc(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[qi(s,r)+" =>"]=i,n),{})}:$c(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qi(n))}:ln(e)?qi(e):fe(e)&&!H(e)&&!Uc(e)?String(e):e,qi=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class Xh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qe,!e&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qe;try{return qe=this,e()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Jh(t,e=qe){e&&e.active&&e.effects.push(t)}function Zh(){return qe}let tn;class Qr{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jh(this,i)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,jt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(ef(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Gt()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dt,n=tn;try{return Dt=!0,tn=this,this._runnings++,Jo(this),this.fn()}finally{Zo(this),this._runnings--,tn=n,Dt=e}}stop(){this.active&&(Jo(this),Zo(this),this.onStop&&this.onStop(),this.active=!1)}}function ef(t){return t.value}function Jo(t){t._trackId++,t._depsLength=0}function Zo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)zc(t.deps[e],t);t.deps.length=t._depsLength}}function zc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dt=!0,pr=0;const qc=[];function jt(){qc.push(Dt),Dt=!1}function Gt(){const t=qc.pop();Dt=t===void 0?!0:t}function Xr(){pr++}function Jr(){for(pr--;!pr&&_r.length;)_r.shift()()}function Kc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&zc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const _r=[];function Yc(t,e,n){Xr();for(const s of t.keys()){if(!t.computed&&s.computed&&t.get(s)===s._trackId&&s._runnings>0){s._dirtyLevel=2;continue}let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&_r.push(s.scheduler)))}Jr()}const Qc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},gr=new WeakMap,nn=Symbol(""),mr=Symbol("");function Be(t,e,n){if(Dt&&tn){let s=gr.get(t);s||gr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Qc(()=>s.delete(n))),Kc(tn,i)}}function yt(t,e,n,s,i,r){const o=gr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t)){const c=Number(s);o.forEach((a,u)=>{(u==="length"||!ln(u)&&u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?Kr(n)&&l.push(o.get("length")):(l.push(o.get(nn)),yn(t)&&l.push(o.get(mr)));break;case"delete":H(t)||(l.push(o.get(nn)),yn(t)&&l.push(o.get(mr)));break;case"set":yn(t)&&l.push(o.get(nn));break}Xr();for(const c of l)c&&Yc(c,5);Jr()}const tf=Gr("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln)),el=nf();function nf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jt(),Xr();const s=te(this)[e].apply(this,n);return Jr(),Gt(),s}}),t}function sf(t){ln(t)||(t=String(t));const e=te(this);return Be(e,"has",t),e.hasOwnProperty(t)}class Jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?mf:na:r?ta:ea).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){if(o&&Y(el,n))return Reflect.get(el,n,s);if(n==="hasOwnProperty")return sf}const l=Reflect.get(e,n,s);return(ln(n)?Xc.has(n):tf(n))||(i||Be(e,"get",n),r)?l:He(l)?o&&Kr(n)?l:l.value:fe(l)?i?ia(l):Ii(l):l}}class Zc extends Jc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=os(r);if(!Qs(s)&&!os(s)&&(r=te(r),s=te(s)),!H(e)&&He(r)&&!He(s))return c?!1:(r.value=s,!0)}const o=H(e)&&Kr(n)?Number(n)<e.length:Y(e,n),l=Reflect.set(e,n,s,i);return e===te(i)&&(o?Bt(s,r)&&yt(e,"set",n,s):yt(e,"add",n,s)),l}deleteProperty(e,n){const s=Y(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ln(n)||!Xc.has(n))&&Be(e,"has",n),s}ownKeys(e){return Be(e,"iterate",H(e)?"length":nn),Reflect.ownKeys(e)}}class rf extends Jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const of=new Zc,lf=new rf,cf=new Zc(!0);const Zr=t=>t,wi=t=>Reflect.getPrototypeOf(t);function Ls(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(Bt(e,r)&&Be(i,"get",e),Be(i,"get",r));const{has:o}=wi(i),l=s?Zr:n?no:ls;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Fs(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(Bt(t,i)&&Be(s,"has",t),Be(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function $s(t,e=!1){return t=t.__v_raw,!e&&Be(te(t),"iterate",nn),Reflect.get(t,"size",t)}function tl(t){t=te(t);const e=te(this);return wi(e).has.call(e,t)||(e.add(t),yt(e,"add",t,t)),this}function nl(t,e){e=te(e);const n=te(this),{has:s,get:i}=wi(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Bt(e,o)&&yt(n,"set",t,e):yt(n,"add",t,e),this}function sl(t){const e=te(this),{has:n,get:s}=wi(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&yt(e,"delete",t,void 0),r}function il(){const t=te(this),e=t.size!==0,n=t.clear();return e&&yt(t,"clear",void 0,void 0),n}function Bs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=te(o),c=e?Zr:t?no:ls;return!t&&Be(l,"iterate",nn),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Hs(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=yn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Zr:e?no:ls;return!e&&Be(r,"iterate",c?mr:nn),{next(){const{value:h,done:d}=a.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function af(){const t={get(r){return Ls(this,r)},get size(){return $s(this)},has:Fs,add:tl,set:nl,delete:sl,clear:il,forEach:Bs(!1,!1)},e={get(r){return Ls(this,r,!1,!0)},get size(){return $s(this)},has:Fs,add:tl,set:nl,delete:sl,clear:il,forEach:Bs(!1,!0)},n={get(r){return Ls(this,r,!0)},get size(){return $s(this,!0)},has(r){return Fs.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Bs(!0,!1)},s={get(r){return Ls(this,r,!0,!0)},get size(){return $s(this,!0)},has(r){return Fs.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hs(r,!1,!1),n[r]=Hs(r,!0,!1),e[r]=Hs(r,!1,!0),s[r]=Hs(r,!0,!0)}),[t,n,e,s]}const[uf,hf,ff,df]=af();function eo(t,e){const n=e?t?df:ff:t?hf:uf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Y(n,i)&&i in s?n:s,i,r)}const pf={get:eo(!1,!1)},_f={get:eo(!1,!0)},gf={get:eo(!0,!1)};const ea=new WeakMap,ta=new WeakMap,na=new WeakMap,mf=new WeakMap;function yf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vf(t){return t.__v_skip||!Object.isExtensible(t)?0:yf(Uh(t))}function Ii(t){return os(t)?t:to(t,!1,of,pf,ea)}function sa(t){return to(t,!1,cf,_f,ta)}function ia(t){return to(t,!0,lf,gf,na)}function to(t,e,n,s,i){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=vf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Kn(t){return os(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function os(t){return!!(t&&t.__v_isReadonly)}function Qs(t){return!!(t&&t.__v_isShallow)}function ra(t){return t?!!t.__v_raw:!1}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Ef(t){return Object.isExtensible(t)&&Wc(t,"__v_skip",!0),t}const ls=t=>fe(t)?Ii(t):t,no=t=>fe(t)?ia(t):t;class oa{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qr(()=>e(this._value),()=>js(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return(!e._cacheable||e.effect.dirty)&&Bt(e._value,e._value=e.effect.run())&&js(e,5),la(e),e.effect._dirtyLevel>=2&&js(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Cf(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new oa(s,i,r||!i,n)}function la(t){var e;Dt&&tn&&(t=te(t),Kc(tn,(e=t.dep)!=null?e:t.dep=Qc(()=>t.dep=void 0,t instanceof oa?t:void 0)))}function js(t,e=5,n,s){t=te(t);const i=t.dep;i&&Yc(i,e)}function He(t){return!!(t&&t.__v_isRef===!0)}function cs(t){return ca(t,!1)}function bf(t){return ca(t,!0)}function ca(t,e){return He(t)?t:new wf(t,e)}class wf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:ls(e)}get value(){return la(this),this._value}set value(e){const n=this.__v_isShallow||Qs(e)||os(e);e=n?e:te(e),Bt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ls(e),js(this,5))}}function Ze(t){return He(t)?t.value:t}const If={get:(t,e,n)=>Ze(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function aa(t){return Kn(t)?t:new Proxy(t,If)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kt(t,e,n,s){try{return s?t(...s):t()}catch(i){Si(i,e,n)}}function et(t,e,n,s){if(W(t)){const i=kt(t,e,n,s);return i&&Bc(i)&&i.catch(r=>{Si(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(et(t[r],e,n,s));return i}}function Si(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){jt(),kt(c,null,10,[t,o,l]),Gt();return}}Sf(t,n,i,s)}function Sf(t,e,n,s=!0){console.error(t)}let as=!1,yr=!1;const Ne=[];let ut=0;const En=[];let Nt=null,Zt=0;const ua=Promise.resolve();let so=null;function ha(t){const e=so||ua;return t?e.then(this?t.bind(this):t):e}function Tf(t){let e=ut+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=us(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function io(t){(!Ne.length||!Ne.includes(t,as&&t.allowRecurse?ut+1:ut))&&(t.id==null?Ne.push(t):Ne.splice(Tf(t.id),0,t),fa())}function fa(){!as&&!yr&&(yr=!0,so=ua.then(pa))}function Rf(t){const e=Ne.indexOf(t);e>ut&&Ne.splice(e,1)}function xf(t){H(t)?En.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?Zt+1:Zt))&&En.push(t),fa()}function rl(t,e,n=as?ut+1:0){for(;n<Ne.length;n++){const s=Ne[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ne.splice(n,1),n--,s()}}}function da(t){if(En.length){const e=[...new Set(En)].sort((n,s)=>us(n)-us(s));if(En.length=0,Nt){Nt.push(...e);return}for(Nt=e,Zt=0;Zt<Nt.length;Zt++){const n=Nt[Zt];n.active!==!1&&n()}Nt=null,Zt=0}}const us=t=>t.id==null?1/0:t.id,Nf=(t,e)=>{const n=us(t)-us(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pa(t){yr=!1,as=!0,Ne.sort(Nf);try{for(ut=0;ut<Ne.length;ut++){const e=Ne[ut];e&&e.active!==!1&&kt(e,null,14)}}finally{ut=0,Ne.length=0,da(),as=!1,so=null,(Ne.length||En.length)&&pa()}}function Af(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||he;d&&(i=n.map(_=>ve(_)?_.trim():_)),h&&(i=n.map(jh))}let l,c=s[l=Gi(e)]||s[l=Gi(ft(e))];!c&&r&&(c=s[l=Gi(Pn(e))]),c&&et(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,et(a,t,6,i)}}function _a(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const c=a=>{const u=_a(a,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(fe(t)&&s.set(t,null),null):(H(r)?r.forEach(c=>o[c]=null):Ie(o,r),fe(t)&&s.set(t,o),o)}function Ti(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Pn(e))||Y(t,e))}let Te=null,Ri=null;function Xs(t){const e=Te;return Te=t,Ri=t&&t.type.__scopeId||null,e}function On(t){Ri=t}function Dn(){Ri=null}function Le(t,e=Te,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ml(-1);const r=Xs(e);let o;try{o=t(...i)}finally{Xs(r),s._d&&ml(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ki(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:h,data:d,setupState:_,ctx:E,inheritAttrs:w}=t,D=Xs(t);let B,M;try{if(n.shapeFlag&4){const Q=i||s,ge=Q;B=at(a.call(ge,Q,u,h,_,d,E)),M=l}else{const Q=e;B=at(Q.length>1?Q(h,{attrs:l,slots:o,emit:c}):Q(h,null)),M=e.props?l:Pf(l)}}catch(Q){Jn.length=0,Si(Q,t,1),B=K(Ht)}let P=B;if(M&&w!==!1){const Q=Object.keys(M),{shapeFlag:ge}=P;Q.length&&ge&7&&(r&&Q.some(zr)&&(M=Of(M,r)),P=In(P,M,!1,!0))}return n.dirs&&(P=In(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),B=P,Xs(D),B}const Pf=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},Of=(t,e)=>{const n={};for(const s in t)(!zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Df(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ol(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ti(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ol(s,o,a):!0:!!o;return!1}function ol(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ti(n,r))return!0}return!1}function kf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ga="components";function ro(t,e){return Lf(ga,t,!0,e)||t}const Mf=Symbol.for("v-ndc");function Lf(t,e,n=!0,s=!1){const i=Te||Ae;if(i){const r=i.type;if(t===ga){const l=Od(r,!1);if(l&&(l===e||l===ft(e)||l===bi(ft(e))))return r}const o=ll(i[t]||r[t],e)||ll(i.appContext[t],e);return!o&&s?r:o}}function ll(t,e){return t&&(t[e]||t[ft(e)]||t[bi(ft(e))])}const Ff=t=>t.__isSuspense;function $f(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):xf(t)}function xi(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{jt();const l=Ss(n),c=et(e,n,t,o);return l(),Gt(),c});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=Ae)=>{(!Pi||t==="sp")&&xi(t,(...s)=>e(...s),n)},Bf=bt("bm"),oo=bt("m"),Hf=bt("bu"),Uf=bt("u"),Wf=bt("bum"),ma=bt("um"),Vf=bt("sp"),jf=bt("rtg"),Gf=bt("rtc");function zf(t,e=Ae){xi("ec",t,e)}function qf(t,e){if(Te===null)return t;const n=Oi(Te),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=he]=e[i];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&Ot(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Yt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(jt(),et(c,n,8,[t.el,l,t,e]),Gt())}}function Kf(t,e,n,s){let i;const r=n;if(H(t)||ve(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function ya(t,e){return W(t)?Ie({name:t.name},e,{setup:t}):t}const Yn=t=>!!t.type.__asyncLoader;function Yf(t,e,n={},s,i){if(Te.isCE||Te.parent&&Yn(Te.parent)&&Te.parent.isCE)return K("slot",n,s);let r=t[e];r&&r._c&&(r._d=!1),ee();const o=r&&va(r(n)),l=Ai(Oe,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),l}function va(t){return t.some(e=>Zs(e)?!(e.type===Ht||e.type===Oe&&!va(e.children)):!0)?t:null}const vr=t=>t?Ba(t)?Oi(t):vr(t.parent):null,Qn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>lo(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,io(t.update)}),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>_d.bind(t)}),Yi=(t,e)=>t!==he&&!t.__isScriptSetup&&Y(t,e),Qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Yi(s,e))return o[e]=1,s[e];if(i!==he&&Y(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&Y(a,e))return o[e]=3,r[e];if(n!==he&&Y(n,e))return o[e]=4,n[e];Er&&(o[e]=0)}}const u=Qn[e];let h,d;if(u)return e==="$attrs"&&Be(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==he&&Y(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Y(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Yi(i,e)?(i[e]=n,!0):s!==he&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==he&&Y(t,o)||Yi(e,o)||(l=r[0])&&Y(l,o)||Y(s,o)||Y(Qn,o)||Y(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Er=!0;function Xf(t){const e=lo(t),n=t.proxy,s=t.ctx;Er=!1,e.beforeCreate&&al(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:E,activated:w,deactivated:D,beforeDestroy:B,beforeUnmount:M,destroyed:P,unmounted:Q,render:ge,renderTracked:V,renderTriggered:pe,errorCaptured:je,serverPrefetch:qt,expose:st,inheritAttrs:St,components:Kt,directives:it,filters:Fn}=e;if(a&&Jf(a,s,null),o)for(const ie in o){const J=o[ie];W(J)&&(s[ie]=J.bind(n))}if(i){const ie=i.call(n,n);fe(ie)&&(t.data=Ii(ie))}if(Er=!0,r)for(const ie in r){const J=r[ie],pt=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):Ge,Tt=!W(J)&&W(J.set)?J.set.bind(n):Ge,rt=Ke({get:pt,set:Tt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>rt.value,set:ke=>rt.value=ke})}if(l)for(const ie in l)Ea(l[ie],s,n,ie);if(c){const ie=W(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(J=>{Gs(J,ie[J])})}u&&al(u,t,"c");function Ee(ie,J){H(J)?J.forEach(pt=>ie(pt.bind(n))):J&&ie(J.bind(n))}if(Ee(Bf,h),Ee(oo,d),Ee(Hf,_),Ee(Uf,E),Ee(gd,w),Ee(md,D),Ee(zf,je),Ee(Gf,V),Ee(jf,pe),Ee(Wf,M),Ee(ma,Q),Ee(Vf,qt),H(st))if(st.length){const ie=t.exposed||(t.exposed={});st.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:pt=>n[J]=pt})})}else t.exposed||(t.exposed={});ge&&t.render===Ge&&(t.render=ge),St!=null&&(t.inheritAttrs=St),Kt&&(t.components=Kt),it&&(t.directives=it)}function Jf(t,e,n=Ge){H(t)&&(t=Cr(t));for(const s in t){const i=t[s];let r;fe(i)?"default"in i?r=ht(i.from||s,i.default,!0):r=ht(i.from||s):r=ht(i),He(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function al(t,e,n){et(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ea(t,e,n,s){const i=s.includes(".")?Da(n,s):()=>n[s];if(ve(t)){const r=e[t];W(r)&&zs(i,r)}else if(W(t))zs(i,t.bind(n));else if(fe(t))if(H(t))t.forEach(r=>Ea(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&zs(i,r,t)}}function lo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Js(c,a,o,!0)),Js(c,e,o)),fe(e)&&r.set(e,c),c}function Js(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Js(t,r,n,!0),i&&i.forEach(o=>Js(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Zf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Zf={data:ul,props:hl,emits:hl,methods:zn,computed:zn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:zn,directives:zn,watch:td,provide:ul,inject:ed};function ul(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function ed(t,e){return zn(Cr(t),Cr(e))}function Cr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Ie(Object.create(null),t,e):e}function hl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ie(Object.create(null),cl(t),cl(e??{})):e}function td(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Ca(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function sd(t,e){return function(s,i=null){W(s)||(s=Ie({},s)),i!=null&&!fe(i)&&(i=null);const r=Ca(),o=new WeakSet;let l=!1;const c=r.app={_uid:nd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:kd,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(c,...u)):W(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const d=K(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,a):t(d,a,h),l=!0,c._container=a,a.__vue_app__=c,Oi(d.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c},runWithContext(a){const u=Xn;Xn=c;try{return a()}finally{Xn=u}}};return c}}let Xn=null;function Gs(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=Ae||Te;if(s||Xn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Xn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}const ba={},wa=()=>Object.create(ba),Ia=t=>Object.getPrototypeOf(t)===ba;function id(t,e,n,s=!1){const i={},r=wa();t.propsDefaults=Object.create(null),Sa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:sa(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function rd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=te(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ti(t.emitsOptions,d))continue;const _=e[d];if(c)if(Y(r,d))_!==r[d]&&(r[d]=_,a=!0);else{const E=ft(d);i[E]=br(c,l,E,_,t,!1)}else _!==r[d]&&(r[d]=_,a=!0)}}}else{Sa(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!Y(e,h)&&((u=Pn(h))===h||!Y(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=br(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Y(e,h))&&(delete r[h],a=!0)}a&&yt(t.attrs,"set","")}function Sa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(qn(c))continue;const a=e[c];let u;i&&Y(i,u=ft(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ti(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=te(n),a=l||he;for(let u=0;u<r.length;u++){const h=r[u];n[h]=br(i,c,h,a[h],t,!Y(a,h))}}return o}function br(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Y(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=Ss(i);s=a[n]=c.call(null,e),u()}}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Pn(n))&&(s=!0))}return s}function Ta(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!W(t)){const u=h=>{c=!0;const[d,_]=Ta(h,e,!0);Ie(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return fe(t)&&s.set(t,mn),mn;if(H(r))for(let u=0;u<r.length;u++){const h=ft(r[u]);fl(h)&&(o[h]=he)}else if(r)for(const u in r){const h=ft(u);if(fl(h)){const d=r[u],_=o[h]=H(d)||W(d)?{type:d}:Ie({},d);if(_){const E=_l(Boolean,_.type),w=_l(String,_.type);_[0]=E>-1,_[1]=w<0||E<w,(E>-1||Y(_,"default"))&&l.push(h)}}}const a=[o,l];return fe(t)&&s.set(t,a),a}function fl(t){return t[0]!=="$"&&!qn(t)}function dl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function pl(t,e){return dl(t)===dl(e)}function _l(t,e){return H(e)?e.findIndex(n=>pl(n,t)):W(e)&&pl(e,t)?0:-1}const Ra=t=>t[0]==="_"||t==="$stable",co=t=>H(t)?t.map(at):[at(t)],od=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>co(e(...i)),n);return s._c=!1,s},xa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ra(i))continue;const r=t[i];if(W(r))e[i]=od(i,r,s);else if(r!=null){const o=co(r);e[i]=()=>o}}},Na=(t,e)=>{const n=co(e);t.slots.default=()=>n},ld=(t,e)=>{const n=t.slots=wa();if(t.vnode.shapeFlag&32){const s=e._;s?(Ie(n,e),Wc(n,"_",s,!0)):xa(e,n)}else e&&Na(t,e)},cd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=he;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ie(i,e),!n&&l===1&&delete i._):(r=!e.$stable,xa(e,i)),o=e}else e&&(Na(t,e),o={default:1});if(r)for(const l in i)!Ra(l)&&o[l]==null&&delete i[l]};function wr(t,e,n,s,i=!1){if(H(t)){t.forEach((d,_)=>wr(d,e&&(H(e)?e[_]:e),n,s,i));return}if(Yn(s)&&!i)return;const r=s.shapeFlag&4?Oi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===he?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(ve(a)?(u[a]=null,Y(h,a)&&(h[a]=null)):He(a)&&(a.value=null)),W(c))kt(c,l,12,[o,u]);else{const d=ve(c),_=He(c);if(d||_){const E=()=>{if(t.f){const w=d?Y(h,c)?h[c]:u[c]:c.value;i?H(w)&&qr(w,r):H(w)?w.includes(r)||w.push(r):d?(u[c]=[r],Y(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Y(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Me(E,n)):E()}}}const Me=$f;function ad(t){return ud(t)}function ud(t,e){const n=Vc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ge,insertStaticContent:E}=t,w=(f,p,g,v=null,m=null,S=null,R=void 0,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Bn(f,p)&&(v=y(f),ke(f,m,S,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:F}=p;switch(C){case Ni:D(f,p,g,v);break;case Ht:B(f,p,g,v);break;case Xi:f==null&&M(p,g,v,R);break;case Oe:Kt(f,p,g,v,m,S,R,b,T);break;default:F&1?ge(f,p,g,v,m,S,R,b,T):F&6?it(f,p,g,v,m,S,R,b,T):(F&64||F&128)&&C.process(f,p,g,v,m,S,R,b,T,O)}A!=null&&m&&wr(A,f&&f.ref,S,p||f,!p)},D=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&a(m,p.children)}},B=(f,p,g,v)=>{f==null?s(p.el=c(p.children||""),g,v):p.el=f.el},M=(f,p,g,v)=>{[f.el,f.anchor]=E(f.children,p,g,v,f.el,f.anchor)},P=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},Q=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ge=(f,p,g,v,m,S,R,b,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?V(p,g,v,m,S,R,b,T):qt(f,p,m,S,R,b,T)},V=(f,p,g,v,m,S,R,b)=>{let T,C;const{props:A,shapeFlag:F,transition:k,dirs:U}=f;if(T=f.el=o(f.type,S,A&&A.is,A),F&8?u(T,f.children):F&16&&je(f.children,T,null,v,m,Qi(f,S),R,b),U&&Yt(f,null,v,"created"),pe(T,f,f.scopeId,R,v),A){for(const ae in A)ae!=="value"&&!qn(ae)&&r(T,ae,null,A[ae],S,f.children,v,m,Re);"value"in A&&r(T,"value",null,A.value,S),(C=A.onVnodeBeforeMount)&&lt(C,v,f)}U&&Yt(f,null,v,"beforeMount");const G=hd(m,k);G&&k.beforeEnter(T),s(T,p,g),((C=A&&A.onVnodeMounted)||G||U)&&Me(()=>{C&&lt(C,v,f),G&&k.enter(T),U&&Yt(f,null,v,"mounted")},m)},pe=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let S=0;S<v.length;S++)_(f,v[S]);if(m){let S=m.subTree;if(p===S){const R=m.vnode;pe(f,R,R.scopeId,R.slotScopeIds,m.parent)}}},je=(f,p,g,v,m,S,R,b,T=0)=>{for(let C=T;C<f.length;C++){const A=f[C]=b?At(f[C]):at(f[C]);w(null,A,p,g,v,m,S,R,b)}},qt=(f,p,g,v,m,S,R)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:C,dirs:A}=p;T|=f.patchFlag&16;const F=f.props||he,k=p.props||he;let U;if(g&&Qt(g,!1),(U=k.onVnodeBeforeUpdate)&&lt(U,g,p,f),A&&Yt(p,f,g,"beforeUpdate"),g&&Qt(g,!0),C?st(f.dynamicChildren,C,b,g,v,Qi(p,m),S):R||J(f,p,b,null,g,v,Qi(p,m),S,!1),T>0){if(T&16)St(b,p,F,k,g,v,m);else if(T&2&&F.class!==k.class&&r(b,"class",null,k.class,m),T&4&&r(b,"style",F.style,k.style,m),T&8){const G=p.dynamicProps;for(let ae=0;ae<G.length;ae++){const Z=G[ae],Ce=F[Z],ze=k[Z];(ze!==Ce||Z==="value")&&r(b,Z,Ce,ze,m,f.children,g,v,Re)}}T&1&&f.children!==p.children&&u(b,p.children)}else!R&&C==null&&St(b,p,F,k,g,v,m);((U=k.onVnodeUpdated)||A)&&Me(()=>{U&&lt(U,g,p,f),A&&Yt(p,f,g,"updated")},v)},st=(f,p,g,v,m,S,R)=>{for(let b=0;b<p.length;b++){const T=f[b],C=p[b],A=T.el&&(T.type===Oe||!Bn(T,C)||T.shapeFlag&70)?h(T.el):g;w(T,C,A,null,v,m,S,R,!0)}},St=(f,p,g,v,m,S,R)=>{if(g!==v){if(g!==he)for(const b in g)!qn(b)&&!(b in v)&&r(f,b,g[b],null,R,p.children,m,S,Re);for(const b in v){if(qn(b))continue;const T=v[b],C=g[b];T!==C&&b!=="value"&&r(f,b,C,T,R,p.children,m,S,Re)}"value"in v&&r(f,"value",g.value,v.value,R)}},Kt=(f,p,g,v,m,S,R,b,T)=>{const C=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:F,dynamicChildren:k,slotScopeIds:U}=p;U&&(b=b?b.concat(U):U),f==null?(s(C,g,v),s(A,g,v),je(p.children||[],g,A,m,S,R,b,T)):F>0&&F&64&&k&&f.dynamicChildren?(st(f.dynamicChildren,k,g,m,S,R,b),(p.key!=null||m&&p===m.subTree)&&Aa(f,p,!0)):J(f,p,g,A,m,S,R,b,T)},it=(f,p,g,v,m,S,R,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,R,T):Fn(p,g,v,m,S,R,T):an(f,p,T)},Fn=(f,p,g,v,m,S,R)=>{const b=f.component=Rd(f,v,m);if(ka(f)&&(b.ctx.renderer=O),xd(b),b.asyncDep){if(m&&m.registerDep(b,Ee,R),!f.el){const T=b.subTree=K(Ht);B(null,T,p,g)}}else Ee(b,f,p,g,m,S,R)},an=(f,p,g)=>{const v=p.component=f.component;if(Df(f,p,g))if(v.asyncDep&&!v.asyncResolved){ie(v,p,g);return}else v.next=p,Rf(v.update),v.effect.dirty=!0,v.update();else p.el=f.el,v.vnode=p},Ee=(f,p,g,v,m,S,R)=>{const b=()=>{if(f.isMounted){let{next:A,bu:F,u:k,parent:U,vnode:G}=f;{const fn=Pa(f);if(fn){A&&(A.el=G.el,ie(f,A,R)),fn.asyncDep.then(()=>{f.isUnmounted||b()});return}}let ae=A,Z;Qt(f,!1),A?(A.el=G.el,ie(f,A,R)):A=G,F&&zi(F),(Z=A.props&&A.props.onVnodeBeforeUpdate)&&lt(Z,U,A,G),Qt(f,!0);const Ce=Ki(f),ze=f.subTree;f.subTree=Ce,w(ze,Ce,h(ze.el),y(ze),f,m,S),A.el=Ce.el,ae===null&&kf(f,Ce.el),k&&Me(k,m),(Z=A.props&&A.props.onVnodeUpdated)&&Me(()=>lt(Z,U,A,G),m)}else{let A;const{el:F,props:k}=p,{bm:U,m:G,parent:ae}=f,Z=Yn(p);if(Qt(f,!1),U&&zi(U),!Z&&(A=k&&k.onVnodeBeforeMount)&&lt(A,ae,p),Qt(f,!0),F&&de){const Ce=()=>{f.subTree=Ki(f),de(F,f.subTree,f,m,null)};Z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=Ki(f);w(null,Ce,g,v,f,m,S),p.el=Ce.el}if(G&&Me(G,m),!Z&&(A=k&&k.onVnodeMounted)){const Ce=p;Me(()=>lt(A,ae,Ce),m)}(p.shapeFlag&256||ae&&Yn(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Me(f.a,m),f.isMounted=!0,p=g=v=null}},T=f.effect=new Qr(b,Ge,()=>io(C),f.scope),C=f.update=()=>{T.dirty&&T.run()};C.id=f.uid,Qt(f,!0),C()},ie=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,rd(f,p.props,v,g),cd(f,p.children,g),jt(),rl(f),Gt()},J=(f,p,g,v,m,S,R,b,T=!1)=>{const C=f&&f.children,A=f?f.shapeFlag:0,F=p.children,{patchFlag:k,shapeFlag:U}=p;if(k>0){if(k&128){Tt(C,F,g,v,m,S,R,b,T);return}else if(k&256){pt(C,F,g,v,m,S,R,b,T);return}}U&8?(A&16&&Re(C,m,S),F!==C&&u(g,F)):A&16?U&16?Tt(C,F,g,v,m,S,R,b,T):Re(C,m,S,!0):(A&8&&u(g,""),U&16&&je(F,g,v,m,S,R,b,T))},pt=(f,p,g,v,m,S,R,b,T)=>{f=f||mn,p=p||mn;const C=f.length,A=p.length,F=Math.min(C,A);let k;for(k=0;k<F;k++){const U=p[k]=T?At(p[k]):at(p[k]);w(f[k],U,g,null,m,S,R,b,T)}C>A?Re(f,m,S,!0,!1,F):je(p,g,v,m,S,R,b,T,F)},Tt=(f,p,g,v,m,S,R,b,T)=>{let C=0;const A=p.length;let F=f.length-1,k=A-1;for(;C<=F&&C<=k;){const U=f[C],G=p[C]=T?At(p[C]):at(p[C]);if(Bn(U,G))w(U,G,g,null,m,S,R,b,T);else break;C++}for(;C<=F&&C<=k;){const U=f[F],G=p[k]=T?At(p[k]):at(p[k]);if(Bn(U,G))w(U,G,g,null,m,S,R,b,T);else break;F--,k--}if(C>F){if(C<=k){const U=k+1,G=U<A?p[U].el:v;for(;C<=k;)w(null,p[C]=T?At(p[C]):at(p[C]),g,G,m,S,R,b,T),C++}}else if(C>k)for(;C<=F;)ke(f[C],m,S,!0),C++;else{const U=C,G=C,ae=new Map;for(C=G;C<=k;C++){const We=p[C]=T?At(p[C]):at(p[C]);We.key!=null&&ae.set(We.key,C)}let Z,Ce=0;const ze=k-G+1;let fn=!1,Ko=0;const $n=new Array(ze);for(C=0;C<ze;C++)$n[C]=0;for(C=U;C<=F;C++){const We=f[C];if(Ce>=ze){ke(We,m,S,!0);continue}let ot;if(We.key!=null)ot=ae.get(We.key);else for(Z=G;Z<=k;Z++)if($n[Z-G]===0&&Bn(We,p[Z])){ot=Z;break}ot===void 0?ke(We,m,S,!0):($n[ot-G]=C+1,ot>=Ko?Ko=ot:fn=!0,w(We,p[ot],g,null,m,S,R,b,T),Ce++)}const Yo=fn?fd($n):mn;for(Z=Yo.length-1,C=ze-1;C>=0;C--){const We=G+C,ot=p[We],Qo=We+1<A?p[We+1].el:v;$n[C]===0?w(null,ot,g,Qo,m,S,R,b,T):fn&&(Z<0||C!==Yo[Z]?rt(ot,g,Qo,2):Z--)}}},rt=(f,p,g,v,m=null)=>{const{el:S,type:R,transition:b,children:T,shapeFlag:C}=f;if(C&6){rt(f.component.subTree,p,g,v);return}if(C&128){f.suspense.move(p,g,v);return}if(C&64){R.move(f,p,g,O);return}if(R===Oe){s(S,p,g);for(let F=0;F<T.length;F++)rt(T[F],p,g,v);s(f.anchor,p,g);return}if(R===Xi){P(f,p,g);return}if(v!==2&&C&1&&b)if(v===0)b.beforeEnter(S),s(S,p,g),Me(()=>b.enter(S),m);else{const{leave:F,delayLeave:k,afterLeave:U}=b,G=()=>s(S,p,g),ae=()=>{F(S,()=>{G(),U&&U()})};k?k(S,G,ae):ae()}else s(S,p,g)},ke=(f,p,g,v=!1,m=!1)=>{const{type:S,props:R,ref:b,children:T,dynamicChildren:C,shapeFlag:A,patchFlag:F,dirs:k,memoIndex:U}=f;if(b!=null&&wr(b,null,g,f,!0),U!=null&&(p.renderCache[U]=void 0),A&256){p.ctx.deactivate(f);return}const G=A&1&&k,ae=!Yn(f);let Z;if(ae&&(Z=R&&R.onVnodeBeforeUnmount)&&lt(Z,p,f),A&6)Ms(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}G&&Yt(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,g,m,O,v):C&&(S!==Oe||F>0&&F&64)?Re(C,p,g,!1,!0):(S===Oe&&F&384||!m&&A&16)&&Re(T,p,g),v&&un(f)}(ae&&(Z=R&&R.onVnodeUnmounted)||G)&&Me(()=>{Z&&lt(Z,p,f),G&&Yt(f,null,p,"unmounted")},g)},un=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Oe){hn(g,v);return}if(p===Xi){Q(f);return}const S=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:R,delayLeave:b}=m,T=()=>R(g,S);b?b(f.el,S,T):T()}else S()},hn=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ms=(f,p,g)=>{const{bum:v,scope:m,update:S,subTree:R,um:b,m:T,a:C}=f;gl(T),gl(C),v&&zi(v),m.stop(),S&&(S.active=!1,ke(R,f,p,g)),b&&Me(b,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Re=(f,p,g,v=!1,m=!1,S=0)=>{for(let R=S;R<f.length;R++)ke(f[R],p,g,v,m)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let N=!1;const x=(f,p,g)=>{f==null?p._vnode&&ke(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),N||(N=!0,rl(),da(),N=!1),p._vnode=f},O={p:w,um:ke,m:rt,r:un,mt:Fn,mc:je,pc:J,pbc:st,n:y,o:t};let ne,de;return{render:x,hydrate:ne,createApp:sd(x,ne)}}function Qi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Aa(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Aa(o,l)),l.type===Ni&&(l.el=o.el)}}function fd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Pa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pa(e)}function gl(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const dd=Symbol.for("v-scx"),pd=()=>ht(dd),Us={};function zs(t,e,n){return Oa(t,e,n)}function Oa(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=he){if(e&&r){const V=e;e=(...pe)=>{V(...pe),ge()}}const c=Ae,a=V=>s===!0?V:Ot(V,s===!1?1:void 0);let u,h=!1,d=!1;if(He(t)?(u=()=>t.value,h=Qs(t)):Kn(t)?(u=()=>a(t),h=!0):H(t)?(d=!0,h=t.some(V=>Kn(V)||Qs(V)),u=()=>t.map(V=>{if(He(V))return V.value;if(Kn(V))return a(V);if(W(V))return kt(V,c,2)})):W(t)?e?u=()=>kt(t,c,2):u=()=>(_&&_(),et(t,c,3,[E])):u=Ge,e&&s){const V=u;u=()=>Ot(V())}let _,E=V=>{_=P.onStop=()=>{kt(V,c,4),_=P.onStop=void 0}},w;if(Pi)if(E=Ge,e?n&&et(e,c,3,[u(),d?[]:void 0,E]):u(),i==="sync"){const V=pd();w=V.__watcherHandles||(V.__watcherHandles=[])}else return Ge;let D=d?new Array(t.length).fill(Us):Us;const B=()=>{if(!(!P.active||!P.dirty))if(e){const V=P.run();(s||h||(d?V.some((pe,je)=>Bt(pe,D[je])):Bt(V,D)))&&(_&&_(),et(e,c,3,[V,D===Us?void 0:d&&D[0]===Us?[]:D,E]),D=V)}else P.run()};B.allowRecurse=!!e;let M;i==="sync"?M=B:i==="post"?M=()=>Me(B,c&&c.suspense):(B.pre=!0,c&&(B.id=c.uid),M=()=>io(B));const P=new Qr(u,Ge,M),Q=Zh(),ge=()=>{P.stop(),Q&&qr(Q.effects,P)};return e?n?B():D=P.run():i==="post"?Me(P.run.bind(P),c&&c.suspense):P.run(),w&&w.push(ge),ge}function _d(t,e,n){const s=this.proxy,i=ve(t)?t.includes(".")?Da(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ss(this),l=Oa(i,r.bind(s),n);return o(),l}function Da(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ot(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))Ot(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)Ot(t[s],e,n);else if($c(t)||yn(t))t.forEach(s=>{Ot(s,e,n)});else if(Uc(t)){for(const s in t)Ot(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ot(t[s],e,n)}return t}const ka=t=>t.type.__isKeepAlive;function gd(t,e){Ma(t,"a",e)}function md(t,e){Ma(t,"da",e)}function Ma(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(xi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ka(i.parent.vnode)&&yd(s,e,n,i),i=i.parent}}function yd(t,e,n,s){const i=xi(e,t,s,!0);ma(()=>{qr(s[e],i)},n)}function La(t,e){t.shapeFlag&6&&t.component?La(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const vd=t=>t.__isTeleport,Oe=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),Jn=[];let Qe=null;function ee(t=!1){Jn.push(Qe=t?null:[])}function Ed(){Jn.pop(),Qe=Jn[Jn.length-1]||null}let hs=1;function ml(t){hs+=t}function Fa(t){return t.dynamicChildren=hs>0?Qe||mn:null,Ed(),hs>0&&Qe&&Qe.push(t),t}function le(t,e,n,s,i,r){return Fa(L(t,e,n,s,i,r,!0))}function Ai(t,e,n,s,i){return Fa(K(t,e,n,s,i,!0))}function Zs(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const $a=({key:t})=>t??null,qs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||He(t)||W(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,s=0,i=null,r=t===Oe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$a(e),ref:e&&qs(e),scopeId:Ri,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return l?(ao(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),hs>0&&!o&&Qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qe.push(c),c}const K=Cd;function Cd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Mf)&&(t=Ht),Zs(t)){const l=In(t,e,!0);return n&&ao(l,n),hs>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(t)]=l:Qe.push(l)),l.patchFlag=-2,l}if(Dd(t)&&(t=t.__vccOpts),e){e=bd(e);let{class:l,style:c}=e;l&&!ve(l)&&(e.class=Yr(l)),fe(c)&&(ra(c)&&!H(c)&&(c=Ie({},c)),e.style=vn(c))}const o=ve(t)?1:Ff(t)?128:vd(t)?64:fe(t)?4:W(t)?2:0;return L(t,e,n,s,i,o,r,!0)}function bd(t){return t?ra(t)||Ia(t)?Ie({},t):t:null}function In(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?Id(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$a(a),ref:e&&e.ref?n&&r?H(r)?r.concat(qs(e)):[r,qs(e)]:qs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&La(u,c.clone(u)),u}function Fe(t=" ",e=0){return K(Ni,null,t,e)}function wd(t="",e=!1){return e?(ee(),Ai(Ht,null,t)):K(Ht,null,t)}function at(t){return t==null||typeof t=="boolean"?K(Ht):H(t)?K(Oe,null,t.slice()):typeof t=="object"?At(t):K(Ni,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ia(e)?e._ctx=Te:i===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),s&64?(n=16,e=[Fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Id(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yr([e.class,s.class]));else if(i==="style")e.style=vn([e.style,s.style]);else if(vi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){et(t,e,7,[n,s])}const Sd=Ca();let Td=0;function Rd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sd,r={uid:Td++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ta(s,i),emitsOptions:_a(s,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Af.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,ei,Ir;{const t=Vc(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ei=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Ir=e("__VUE_SSR_SETTERS__",n=>Pi=n)}const Ss=t=>{const e=Ae;return ei(t),t.scope.on(),()=>{t.scope.off(),ei(e)}},yl=()=>{Ae&&Ae.scope.off(),ei(null)};function Ba(t){return t.vnode.shapeFlag&4}let Pi=!1;function xd(t,e=!1){e&&Ir(e);const{props:n,children:s}=t.vnode,i=Ba(t);id(t,n,i,e),ld(t,s);const r=i?Nd(t,e):void 0;return e&&Ir(!1),r}function Nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qf);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Pd(t):null,r=Ss(t);jt();const o=kt(s,t,0,[t.props,i]);if(Gt(),r(),Bc(o)){if(o.then(yl,yl),e)return o.then(l=>{vl(t,l,e)}).catch(l=>{Si(l,t,0)});t.asyncDep=o}else vl(t,o,e)}else Ha(t,e)}function vl(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=aa(e)),Ha(t,n)}let El;function Ha(t,e,n){const s=t.type;if(!t.render){if(!e&&El&&!s.render){const i=s.template||lo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Ie(Ie({isCustomElement:r,delimiters:l},o),c);s.render=El(i,a)}}t.render=s.render||Ge}{const i=Ss(t);jt();try{Xf(t)}finally{Gt(),i()}}}const Ad={get(t,e){return Be(t,"get",""),t[e]}};function Pd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ad),slots:t.slots,emit:t.emit,expose:e}}function Oi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(aa(Ef(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function Od(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Dd(t){return W(t)&&"__vccOpts"in t}const Ke=(t,e)=>Cf(t,e,Pi);function Ua(t,e,n){const s=arguments.length;return s===2?fe(e)&&!H(e)?Zs(e)?K(t,null,[e]):K(t,e):K(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zs(n)&&(n=[n]),K(t,e,n))}const kd="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Md="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",gt=typeof document<"u"?document:null,Cl=gt&&gt.createElement("template"),Fd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?gt.createElementNS(Md,t):e==="mathml"?gt.createElementNS(Ld,t):n?gt.createElement(t,{is:n}):gt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>gt.createTextNode(t),createComment:t=>gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Cl.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Cl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$d=Symbol("_vtc");function Bd(t,e,n){const s=t[$d];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ti=Symbol("_vod"),Wa=Symbol("_vsh"),Hd={beforeMount(t,{value:e},{transition:n}){t[ti]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Hn(t,!0),s.enter(t)):s.leave(t,()=>{Hn(t,!1)}):Hn(t,e))},beforeUnmount(t,{value:e}){Hn(t,e)}};function Hn(t,e){t.style.display=e?t[ti]:"none",t[Wa]=!e}const Ud=Symbol(""),Wd=/(^|;)\s*display\s*:/;function Vd(t,e,n){const s=t.style,i=ve(n);let r=!1;if(n&&!i){if(e)if(ve(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ks(s,l,"")}else for(const o in e)n[o]==null&&Ks(s,o,"");for(const o in n)o==="display"&&(r=!0),Ks(s,o,n[o])}else if(i){if(e!==n){const o=s[Ud];o&&(n+=";"+o),s.cssText=n,r=Wd.test(n)}}else e&&t.removeAttribute("style");ti in t&&(t[ti]=r?s.display:"",t[Wa]&&(s.display="none"))}const bl=/\s*!important$/;function Ks(t,e,n){if(H(n))n.forEach(s=>Ks(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jd(t,e);bl.test(n)?t.setProperty(Pn(s),n.replace(bl,""),"important"):t[s]=n}}const wl=["Webkit","Moz","ms"],Ji={};function jd(t,e){const n=Ji[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return Ji[e]=s;s=bi(s);for(let i=0;i<wl.length;i++){const r=wl[i]+s;if(r in t)return Ji[e]=r}return e}const Il="http://www.w3.org/1999/xlink";function Sl(t,e,n,s,i,r=Qh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Il,e.slice(6,e.length)):t.setAttributeNS(Il,e,n):n==null||r&&!jc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":String(n))}function Gd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?"":String(n);(a!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jc(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function zd(t,e,n,s){t.addEventListener(e,n,s)}function qd(t,e,n,s){t.removeEventListener(e,n,s)}const Tl=Symbol("_vei");function Kd(t,e,n,s,i=null){const r=t[Tl]||(t[Tl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Yd(e);if(s){const a=r[e]=Jd(s,i);zd(t,l,a,c)}else o&&(qd(t,l,o,c),r[e]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function Yd(t){let e;if(Rl.test(t)){e={};let s;for(;s=t.match(Rl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}let Zi=0;const Qd=Promise.resolve(),Xd=()=>Zi||(Qd.then(()=>Zi=0),Zi=Date.now());function Jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;et(Zd(s,n.value),e,5,[s])};return n.value=t,n.attached=Xd(),n}function Zd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const xl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ep=(t,e,n,s,i,r,o,l,c)=>{const a=i==="svg";e==="class"?Bd(t,s,a):e==="style"?Vd(t,n,s):vi(e)?zr(e)||Kd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tp(t,e,s,a))?(Gd(t,e,s,r,o,l,c),(e==="value"||e==="checked"||e==="selected")&&Sl(t,e,s,a,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sl(t,e,s,a))};function tp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&xl(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return xl(e)&&ve(n)?!1:e in t}const np=Ie({patchProp:ep},Fd);let Nl;function sp(){return Nl||(Nl=ad(np))}const ip=(...t)=>{const e=sp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=op(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,rp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function rp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function op(t){return ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof document<"u";function lp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const se=Object.assign;function er(t,e){const n={};for(const s in e){const i=e[s];n[s]=nt(i)?i.map(t):t(i)}return n}const Zn=()=>{},nt=Array.isArray,Va=/#/g,cp=/&/g,ap=/\//g,up=/=/g,hp=/\?/g,ja=/\+/g,fp=/%5B/g,dp=/%5D/g,Ga=/%5E/g,pp=/%60/g,za=/%7B/g,_p=/%7C/g,qa=/%7D/g,gp=/%20/g;function uo(t){return encodeURI(""+t).replace(_p,"|").replace(fp,"[").replace(dp,"]")}function mp(t){return uo(t).replace(za,"{").replace(qa,"}").replace(Ga,"^")}function Sr(t){return uo(t).replace(ja,"%2B").replace(gp,"+").replace(Va,"%23").replace(cp,"%26").replace(pp,"`").replace(za,"{").replace(qa,"}").replace(Ga,"^")}function yp(t){return Sr(t).replace(up,"%3D")}function vp(t){return uo(t).replace(Va,"%23").replace(hp,"%3F")}function Ep(t){return t==null?"":vp(t).replace(ap,"%2F")}function fs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Cp=/\/$/,bp=t=>t.replace(Cp,"");function tr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Tp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:fs(o)}}function wp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Al(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ip(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Sn(e.matched[s],n.matched[i])&&Ka(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ka(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sp(t[n],e[n]))return!1;return!0}function Sp(t,e){return nt(t)?Pl(t,e):nt(e)?Pl(e,t):t===e}function Pl(t,e){return nt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Tp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ds;(function(t){t.pop="pop",t.push="push"})(ds||(ds={}));var es;(function(t){t.back="back",t.forward="forward",t.unknown=""})(es||(es={}));function Rp(t){if(!t)if(pn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bp(t)}const xp=/^[^#]+#/;function Np(t,e){return t.replace(xp,"#")+e}function Ap(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Di=()=>({left:window.scrollX,top:window.scrollY});function Pp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Ap(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ol(t,e){return(history.state?history.state.position-e:-1)+t}const Tr=new Map;function Op(t,e){Tr.set(t,e)}function Dp(t){const e=Tr.get(t);return Tr.delete(t),e}let kp=()=>location.protocol+"//"+location.host;function Ya(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Al(c,"")}return Al(n,t)+s+i}function Mp(t,e,n,s){let i=[],r=[],o=null;const l=({state:d})=>{const _=Ya(t,location),E=n.value,w=e.value;let D=0;if(d){if(n.value=_,e.value=d,o&&o===E){o=null;return}D=w?d.position-w.position:0}else s(_);i.forEach(B=>{B(n.value,E,{delta:D,type:ds.pop,direction:D?D>0?es.forward:es.back:es.unknown})})};function c(){o=n.value}function a(d){i.push(d);const _=()=>{const E=i.indexOf(d);E>-1&&i.splice(E,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(se({},d.state,{scroll:Di()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function Dl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Di():null}}function Lp(t){const{history:e,location:n}=window,s={value:Ya(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:kp()+t+c;try{e[u?"replaceState":"pushState"](a,"",d),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(c,a){const u=se({},e.state,Dl(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=se({},i.value,e.state,{forward:c,scroll:Di()});r(u.current,u,!0);const h=se({},Dl(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Fp(t){t=Rp(t);const e=Lp(t),n=Mp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=se({location:"",base:t,go:s,createHref:Np.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function $p(t){return typeof t=="string"||t&&typeof t=="object"}function Qa(t){return typeof t=="string"||typeof t=="symbol"}const Xa=Symbol("");var kl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kl||(kl={}));function Tn(t,e){return se(new Error,{type:t,[Xa]:!0},e)}function _t(t,e){return t instanceof Error&&Xa in t&&(e==null||!!(t.type&e))}const Ml="[^/]+?",Bp={sensitive:!1,strict:!1,start:!0,end:!0},Hp=/[.+*?^${}()[\]/\\]/g;function Up(t,e){const n=se({},Bp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const d=a[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Hp,"\\$&"),_+=40;else if(d.type===1){const{value:E,repeatable:w,optional:D,regexp:B}=d;r.push({name:E,repeatable:w,optional:D});const M=B||Ml;if(M!==Ml){_+=10;try{new RegExp(`(${M})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+Q.message)}}let P=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(P=D&&a.length<2?`(?:/${P})`:"/"+P),D&&(P+="?"),i+=P,_+=20,D&&(_+=-8),w&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",E=r[d-1];h[E.name]=_&&E.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:E,repeatable:w,optional:D}=_,B=E in a?a[E]:"";if(nt(B)&&!w)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=nt(B)?B.join("/"):B;if(!M)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Wp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ja(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Wp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ll(s))return 1;if(Ll(i))return-1}return i.length-s.length}function Ll(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vp={type:0,value:""},jp=/[a-zA-Z0-9_]/;function Gp(t){if(!t)return[[]];if(t==="/")return[[Vp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function d(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:jp.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function zp(t,e,n){const s=Up(Gp(t.path),n),i=se(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function qp(t,e){const n=[],s=new Map;e=Bl({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const E=!_,w=Kp(h);w.aliasOf=_&&_.record;const D=Bl(e,h),B=[w];if("alias"in h){const Q=typeof h.alias=="string"?[h.alias]:h.alias;for(const ge of Q)B.push(se({},w,{components:_?_.record.components:w.components,path:ge,aliasOf:_?_.record:w}))}let M,P;for(const Q of B){const{path:ge}=Q;if(d&&ge[0]!=="/"){const V=d.record.path,pe=V[V.length-1]==="/"?"":"/";Q.path=d.record.path+(ge&&pe+ge)}if(M=zp(Q,d,D),_?_.alias.push(M):(P=P||M,P!==M&&P.alias.push(M),E&&h.name&&!$l(M)&&o(h.name)),Za(M)&&c(M),w.children){const V=w.children;for(let pe=0;pe<V.length;pe++)r(V[pe],M,_&&_.children[pe])}_=_||M}return P?()=>{o(P)}:Zn}function o(h){if(Qa(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function c(h){const d=Xp(h,n);n.splice(d,0,h),h.record.name&&!$l(h)&&s.set(h.record.name,h)}function a(h,d){let _,E={},w,D;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Tn(1,{location:h});D=_.record.name,E=se(Fl(d.params,_.keys.filter(P=>!P.optional).concat(_.parent?_.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),h.params&&Fl(h.params,_.keys.map(P=>P.name))),w=_.stringify(E)}else if(h.path!=null)w=h.path,_=n.find(P=>P.re.test(w)),_&&(E=_.parse(w),D=_.record.name);else{if(_=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!_)throw Tn(1,{location:h,currentLocation:d});D=_.record.name,E=se({},d.params,h.params),w=_.stringify(E)}const B=[];let M=_;for(;M;)B.unshift(M.record),M=M.parent;return{name:D,path:w,params:E,matched:B,meta:Qp(B)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:a,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function Fl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Kp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Yp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $l(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qp(t){return t.reduce((e,n)=>se(e,n.meta),{})}function Bl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xp(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Ja(t,e[r])<0?s=r:n=r+1}const i=Jp(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Jp(t){let e=t;for(;e=e.parent;)if(Za(e)&&Ja(t,e)===0)return e}function Za({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zp(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ja," "),o=r.indexOf("="),l=fs(o<0?r:r.slice(0,o)),c=o<0?null:fs(r.slice(o+1));if(l in e){let a=e[l];nt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function Hl(t){let e="";for(let n in t){const s=t[n];if(n=yp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&Sr(r)):[s&&Sr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function e_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const t_=Symbol(""),Ul=Symbol(""),ho=Symbol(""),fo=Symbol(""),Rr=Symbol("");function Un(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const a=d=>{d===!1?c(Tn(4,{from:n,to:e})):d instanceof Error?c(d):$p(d)?c(Tn(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),l())},u=r(()=>t.call(s&&s.instances[i],e,n,a));let h=Promise.resolve(u);t.length<3&&(h=h.then(a)),h.catch(d=>c(d))})}function nr(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(n_(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Pt(u,n,s,o,l,i))}else{let a=c();r.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const h=lp(u)?u.default:u;o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&Pt(_,n,s,o,l,i)()}))}}return r}function n_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wl(t){const e=ht(ho),n=ht(fo),s=Ke(()=>{const c=Ze(t.to);return e.resolve(c)}),i=Ke(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Sn.bind(null,u));if(d>-1)return d;const _=Vl(c[a-2]);return a>1&&Vl(u)===_&&h[h.length-1].path!==_?h.findIndex(Sn.bind(null,c[a-2])):d}),r=Ke(()=>i.value>-1&&r_(n.params,s.value.params)),o=Ke(()=>i.value>-1&&i.value===n.matched.length-1&&Ka(n.params,s.value.params));function l(c={}){return i_(c)?e[Ze(t.replace)?"replace":"push"](Ze(t.to)).catch(Zn):Promise.resolve()}return{route:s,href:Ke(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const s_=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wl,setup(t,{slots:e}){const n=Ii(Wl(t)),{options:s}=ht(ho),i=Ke(()=>({[jl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ua("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),po=s_;function i_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function r_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Vl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jl=(t,e,n)=>t??e??n,o_=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(Rr),i=Ke(()=>t.route||s.value),r=ht(Ul,0),o=Ke(()=>{let a=Ze(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Ke(()=>i.value.matched[o.value]);Gs(Ul,Ke(()=>o.value+1)),Gs(t_,l),Gs(Rr,i);const c=cs();return zs(()=>[c.value,l.value,t.name],([a,u,h],[d,_,E])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Sn(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return Gl(n.default,{Component:d,route:a});const _=h.props[u],E=_?_===!0?a.params:typeof _=="function"?_(a):_:null,D=Ua(d,se({},E,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Gl(n.default,{Component:D,route:a})||D}}});function Gl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eu=o_;function l_(t){const e=qp(t.routes,t),n=t.parseQuery||Zp,s=t.stringifyQuery||Hl,i=t.history,r=Un(),o=Un(),l=Un(),c=bf(xt);let a=xt;pn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=er.bind(null,y=>""+y),h=er.bind(null,Ep),d=er.bind(null,fs);function _(y,N){let x,O;return Qa(y)?(x=e.getRecordMatcher(y),O=N):O=y,e.addRoute(O,x)}function E(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function w(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function B(y,N){if(N=se({},N||c.value),typeof y=="string"){const p=tr(n,y,N.path),g=e.resolve({path:p.path},N),v=i.createHref(p.fullPath);return se(p,g,{params:d(g.params),hash:fs(p.hash),redirectedFrom:void 0,href:v})}let x;if(y.path!=null)x=se({},y,{path:tr(n,y.path,N.path).path});else{const p=se({},y.params);for(const g in p)p[g]==null&&delete p[g];x=se({},y,{params:h(p)}),N.params=h(N.params)}const O=e.resolve(x,N),ne=y.hash||"";O.params=u(d(O.params));const de=wp(s,se({},y,{hash:mp(ne),path:O.path})),f=i.createHref(de);return se({fullPath:de,hash:ne,query:s===Hl?e_(y.query):y.query||{}},O,{redirectedFrom:void 0,href:f})}function M(y){return typeof y=="string"?tr(n,y,c.value.path):se({},y)}function P(y,N){if(a!==y)return Tn(8,{from:N,to:y})}function Q(y){return pe(y)}function ge(y){return Q(se(M(y),{replace:!0}))}function V(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:x}=N;let O=typeof x=="function"?x(y):x;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),se({query:y.query,hash:y.hash,params:O.path!=null?{}:y.params},O)}}function pe(y,N){const x=a=B(y),O=c.value,ne=y.state,de=y.force,f=y.replace===!0,p=V(x);if(p)return pe(se(M(p),{state:typeof p=="object"?se({},ne,p.state):ne,force:de,replace:f}),N||x);const g=x;g.redirectedFrom=N;let v;return!de&&Ip(s,O,x)&&(v=Tn(16,{to:g,from:O}),rt(O,O,!0,!1)),(v?Promise.resolve(v):st(g,O)).catch(m=>_t(m)?_t(m,2)?m:Tt(m):J(m,g,O)).then(m=>{if(m){if(_t(m,2))return pe(se({replace:f},M(m.to),{state:typeof m.to=="object"?se({},ne,m.to.state):ne,force:de}),N||g)}else m=Kt(g,O,!0,f,ne);return St(g,O,m),m})}function je(y,N){const x=P(y,N);return x?Promise.reject(x):Promise.resolve()}function qt(y){const N=hn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function st(y,N){let x;const[O,ne,de]=c_(y,N);x=nr(O.reverse(),"beforeRouteLeave",y,N);for(const p of O)p.leaveGuards.forEach(g=>{x.push(Pt(g,y,N))});const f=je.bind(null,y,N);return x.push(f),Re(x).then(()=>{x=[];for(const p of r.list())x.push(Pt(p,y,N));return x.push(f),Re(x)}).then(()=>{x=nr(ne,"beforeRouteUpdate",y,N);for(const p of ne)p.updateGuards.forEach(g=>{x.push(Pt(g,y,N))});return x.push(f),Re(x)}).then(()=>{x=[];for(const p of de)if(p.beforeEnter)if(nt(p.beforeEnter))for(const g of p.beforeEnter)x.push(Pt(g,y,N));else x.push(Pt(p.beforeEnter,y,N));return x.push(f),Re(x)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),x=nr(de,"beforeRouteEnter",y,N,qt),x.push(f),Re(x))).then(()=>{x=[];for(const p of o.list())x.push(Pt(p,y,N));return x.push(f),Re(x)}).catch(p=>_t(p,8)?p:Promise.reject(p))}function St(y,N,x){l.list().forEach(O=>qt(()=>O(y,N,x)))}function Kt(y,N,x,O,ne){const de=P(y,N);if(de)return de;const f=N===xt,p=pn?history.state:{};x&&(O||f?i.replace(y.fullPath,se({scroll:f&&p&&p.scroll},ne)):i.push(y.fullPath,ne)),c.value=y,rt(y,N,x,f),Tt()}let it;function Fn(){it||(it=i.listen((y,N,x)=>{if(!Ms.listening)return;const O=B(y),ne=V(O);if(ne){pe(se(ne,{replace:!0}),O).catch(Zn);return}a=O;const de=c.value;pn&&Op(Ol(de.fullPath,x.delta),Di()),st(O,de).catch(f=>_t(f,12)?f:_t(f,2)?(pe(f.to,O).then(p=>{_t(p,20)&&!x.delta&&x.type===ds.pop&&i.go(-1,!1)}).catch(Zn),Promise.reject()):(x.delta&&i.go(-x.delta,!1),J(f,O,de))).then(f=>{f=f||Kt(O,de,!1),f&&(x.delta&&!_t(f,8)?i.go(-x.delta,!1):x.type===ds.pop&&_t(f,20)&&i.go(-1,!1)),St(O,de,f)}).catch(Zn)}))}let an=Un(),Ee=Un(),ie;function J(y,N,x){Tt(y);const O=Ee.list();return O.length?O.forEach(ne=>ne(y,N,x)):console.error(y),Promise.reject(y)}function pt(){return ie&&c.value!==xt?Promise.resolve():new Promise((y,N)=>{an.add([y,N])})}function Tt(y){return ie||(ie=!y,Fn(),an.list().forEach(([N,x])=>y?x(y):N()),an.reset()),y}function rt(y,N,x,O){const{scrollBehavior:ne}=t;if(!pn||!ne)return Promise.resolve();const de=!x&&Dp(Ol(y.fullPath,0))||(O||!x)&&history.state&&history.state.scroll||null;return ha().then(()=>ne(y,N,de)).then(f=>f&&Pp(f)).catch(f=>J(f,y,N))}const ke=y=>i.go(y);let un;const hn=new Set,Ms={currentRoute:c,listening:!0,addRoute:_,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:w,resolve:B,options:t,push:Q,replace:ge,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Ee.add,isReady:pt,install(y){const N=this;y.component("RouterLink",po),y.component("RouterView",eu),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(c)}),pn&&!un&&c.value===xt&&(un=!0,Q(i.location).catch(ne=>{}));const x={};for(const ne in xt)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});y.provide(ho,N),y.provide(fo,sa(x)),y.provide(Rr,c);const O=y.unmount;hn.add(y),y.unmount=function(){hn.delete(y),hn.size<1&&(a=xt,it&&it(),it=null,c.value=xt,un=!1,ie=!1),O()}}};function Re(y){return y.reduce((N,x)=>N.then(()=>qt(x)),Promise.resolve())}return Ms}function c_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Sn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Sn(a,c))||i.push(c))}return[n,s,i]}function a_(t){return ht(fo)}const u_="/vue-personal-page/assets/DSCF5279-DwifKIW0.jpg",dt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},ki=t=>(On("data-v-1070b82f"),t=t(),Dn(),t),h_={class:"Hero"},f_={class:"icon-part"},d_=["src"],p_={class:"hero-text"},__=ki(()=>L("h1",null,"Hello, I'm Ken Wong",-1)),g_=ki(()=>L("br",null,null,-1)),m_=ki(()=>L("h3",null,[Fe("an ordinary "),L("span",null,"Computer Science"),Fe(" student with enthusiasm")],-1)),y_={class:"buttonmain"},v_=ki(()=>L("button",{class:"linkinb"},[L("a",{href:"https://www.linkedin.com/in/ken-wong-1a86a5294/"},"LinkedIn")],-1)),E_={__name:"hero",setup(t){const e=u_;return(n,s)=>(ee(),le("div",h_,[L("div",f_,[L("img",{src:Ze(e),alt:"my face"},null,8,d_)]),L("div",p_,[__,g_,m_,L("div",y_,[K(Ze(po),{to:"/cv",class:"contactb"},{default:Le(()=>[Fe("Contact Me")]),_:1}),v_])])]))}},C_=dt(E_,[["__scopeId","data-v-1070b82f"]]),b_={},w_={className:"card"};function I_(t,e){return ee(),le("div",w_,[Yf(t.$slots,"default",{},void 0)])}const S_=dt(b_,[["render",I_],["__scopeId","data-v-4e93d2da"]]),T_={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},R_={class:"v-spinner"};function x_(t,e,n,s,i,r){return qf((ee(),le("div",R_,[L("div",{class:"v-pulse v-pulse1",style:vn([i.spinnerStyle,i.spinnerDelay1])},null,4),L("div",{class:"v-pulse v-pulse2",style:vn([i.spinnerStyle,i.spinnerDelay2])},null,4),L("div",{class:"v-pulse v-pulse3",style:vn([i.spinnerStyle,i.spinnerDelay3])},null,4)],512)),[[Hd,n.loading]])}const tu=dt(T_,[["render",x_]]);var zl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw kn(e)},kn=function(t){return new Error("Firebase Database ("+nu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(su(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new A_;const d=r<<2|l>>4;if(s.push(d),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const E=a<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iu=function(t){const e=su(t);return _o.encodeByteArray(e,!0)},ni=function(t){return iu(t).replace(/\./g,"")},xr=function(t){try{return _o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){return ru(void 0,t)}function ru(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!O_(n)||(t[n]=ru(t[n],e[n]));return t}function O_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=()=>D_().__FIREBASE_DEFAULTS__,M_=()=>{if(typeof process>"u"||typeof zl>"u")return;const t=zl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xr(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return k_()||M_()||L_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},F_=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$_=t=>{const e=F_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lu=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ni(JSON.stringify(n)),ni(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H_())}function U_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function au(){return nu.NODE_ADMIN===!0}function W_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="FirebaseError";class Ts extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=j_,Object.setPrototypeOf(this,Ts.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uu.prototype.create)}}class uu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?G_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ts(i,l,s)}}function G_(t,e){return t.replace(z_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const z_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ps(xr(r[0])||""),n=ps(xr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},q_=function(t){const e=hu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K_=function(t){const e=hu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ql(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kl(r)&&Kl(o)){if(!Nr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function fu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new go;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Z_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z_(t){return t===Xt?void 0:t}function eg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ng={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},sg=oe.INFO,ig={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},rg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ig[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=sg,this._logHandler=rg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const og=(t,e)=>e.some(n=>t instanceof n);let Yl,Ql;function lg(){return Yl||(Yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cg(){return Ql||(Ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,Ar=new WeakMap,_u=new WeakMap,sr=new WeakMap,mo=new WeakMap;function ag(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pu.set(n,t)}).catch(()=>{}),mo.set(e,t),e}function ug(t){if(Ar.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ar.set(t,e)}let Pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ar.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_u.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hg(t){Pr=t(Pr)}function fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ir(this),e,...n);return _u.set(s,e.sort?e.sort():[e]),Mt(s)}:cg().includes(t)?function(...e){return t.apply(ir(this),e),Mt(pu.get(this))}:function(...e){return Mt(t.apply(ir(this),e))}}function dg(t){return typeof t=="function"?fg(t):(t instanceof IDBTransaction&&ug(t),og(t,lg())?new Proxy(t,Pr):t)}function Mt(t){if(t instanceof IDBRequest)return ag(t);if(sr.has(t))return sr.get(t);const e=dg(t);return e!==t&&(sr.set(t,e),mo.set(e,t)),e}const ir=t=>mo.get(t);function pg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const _g=["get","getKey","getAll","getAllKeys","count"],gg=["put","add","delete","clear"],rr=new Map;function Xl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_g.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return rr.set(e,r),r}hg(t=>({...t,get:(e,n,s)=>Xl(e,n)||t.get(e,n,s),has:(e,n)=>!!Xl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Or="@firebase/app",Jl="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new du("@firebase/app"),vg="@firebase/app-compat",Eg="@firebase/analytics-compat",Cg="@firebase/analytics",bg="@firebase/app-check-compat",wg="@firebase/app-check",Ig="@firebase/auth",Sg="@firebase/auth-compat",Tg="@firebase/database",Rg="@firebase/database-compat",xg="@firebase/functions",Ng="@firebase/functions-compat",Ag="@firebase/installations",Pg="@firebase/installations-compat",Og="@firebase/messaging",Dg="@firebase/messaging-compat",kg="@firebase/performance",Mg="@firebase/performance-compat",Lg="@firebase/remote-config",Fg="@firebase/remote-config-compat",$g="@firebase/storage",Bg="@firebase/storage-compat",Hg="@firebase/firestore",Ug="@firebase/vertexai-preview",Wg="@firebase/firestore-compat",Vg="firebase",jg="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",Gg={[Or]:"fire-core",[vg]:"fire-core-compat",[Cg]:"fire-analytics",[Eg]:"fire-analytics-compat",[wg]:"fire-app-check",[bg]:"fire-app-check-compat",[Ig]:"fire-auth",[Sg]:"fire-auth-compat",[Tg]:"fire-rtdb",[Rg]:"fire-rtdb-compat",[xg]:"fire-fn",[Ng]:"fire-fn-compat",[Ag]:"fire-iid",[Pg]:"fire-iid-compat",[Og]:"fire-fcm",[Dg]:"fire-fcm-compat",[kg]:"fire-perf",[Mg]:"fire-perf-compat",[Lg]:"fire-rc",[Fg]:"fire-rc-compat",[$g]:"fire-gcs",[Bg]:"fire-gcs-compat",[Hg]:"fire-fst",[Wg]:"fire-fst-compat",[Ug]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Map,zg=new Map,kr=new Map;function Zl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(kr.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;kr.set(e,t);for(const n of ii.values())Zl(n,t);for(const n of zg.values())Zl(n,t);return!0}function qg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new uu("app","Firebase",Kg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=jg;function yo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=lu()),!n)throw Lt.create("no-options");const r=ii.get(i);if(r){if(Nr(n,r.options)&&Nr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new tg(i);for(const c of kr.values())o.addComponent(c);const l=new Yg(n,s,o);return ii.set(i,l),l}function Xg(t=Dr){const e=ii.get(t);if(!e&&t===Dr&&lu())return yo();if(!e)throw Lt.create("no-app",{appName:t});return e}function Cn(t,e,n){var s;let i=(s=Gg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ri(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="firebase-heartbeat-database",Zg=1,gs="firebase-heartbeat-store";let or=null;function gu(){return or||(or=pg(Jg,Zg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),or}async function em(t){try{const n=(await gu()).transaction(gs),s=await n.objectStore(gs).get(mu(t));return await n.done,s}catch(e){if(e instanceof Ts)Et.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function ec(t,e){try{const s=(await gu()).transaction(gs,"readwrite");await s.objectStore(gs).put(e,mu(t)),await s.done}catch(n){if(n instanceof Ts)Et.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function mu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=1024,nm=30*24*60*60*1e3;class sm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nm}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tc(),{heartbeatsToSend:s,unsentEntries:i}=im(this._heartbeatsCache.heartbeats),r=ni(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function tc(){return new Date().toISOString().substring(0,10)}function im(t,e=tm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),nc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await em(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nc(t){return ni(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){ri(new _s("platform-logger",e=>new mg(e),"PRIVATE")),ri(new _s("heartbeat",e=>new sm(e),"PRIVATE")),Cn(Or,Jl,t),Cn(Or,Jl,"esm2017"),Cn("fire-js","")}om("");var lm="firebase",cm="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(lm,cm,"app");var sc={};const ic="@firebase/database",rc="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu="";function am(t){yu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new um(e)}}catch{}return new hm},en=vu("localStorage"),fm=vu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new du("@firebase/database"),dm=function(){let t=1;return function(){return t++}}(),Eu=function(t){const e=X_(t),n=new Q_;n.update(e);const s=n.digest();return _o.encodeByteArray(s)},xs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xs.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let ts=null,oc=!0;const pm=function(t,e){I(!e,"Can't turn on custom loggers persistently."),bn.logLevel=oe.VERBOSE,ts=bn.log.bind(bn)},xe=function(...t){if(oc===!0&&(oc=!1,ts===null&&fm.get("logging_enabled")===!0&&pm()),ts){const e=xs.apply(null,t);ts(e)}},Ns=function(t){return function(...e){xe(t,...e)}},Mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+xs(...t);bn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${xs(...t)}`;throw bn.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+xs(...t);bn.warn(e)},_m=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xn="[MIN_NAME]",sn="[MAX_NAME]",Mn=function(t,e){if(t===e)return 0;if(t===xn||e===sn)return-1;if(e===xn||t===sn)return 1;{const n=lc(t),s=lc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mm=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},vo=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=vo(t[e[s]]);return n+="}",n},bu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wu=function(t){I(!Cu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ym=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Em(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Cm=new RegExp("^-?(0*)\\d{1,10}$"),bm=-2147483648,wm=2147483647,lc=function(t){if(Cm.test(t)){const e=Number(t);if(e>=bm&&e<=wm)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},Im=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class Ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ys.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="5",Iu="v",Su="s",Tu="r",Ru="f",xu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nu="ls",Au="p",Lr="ac",Pu="websocket",Ou="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Rm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ku(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Pu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ou)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Rm(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return P_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={},cr={};function Co(t){const e=t.toString();return lr[e]||(lr[e]=new xm),lr[e]}function Nm(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&As(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="start",Pm="close",Om="pLPCommand",Dm="pRTLPCB",Mu="id",Lu="pw",Fu="ser",km="cb",Mm="seg",Lm="ts",Fm="d",$m="dframe",$u=1870,Bu=30,Bm=$u-Bu,Hm=25e3,Um=3e4;class _n{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(e),this.stats_=Co(n),this.urlFn=c=>(this.appCheckToken&&(c[Lr]=this.appCheckToken),ku(n,Ou,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Am(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Um)),gm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cc)this.id=l,this.password=c;else if(o===Pm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[cc]="t",s[Fu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[km]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Iu]=Eo,this.transportSessionId&&(s[Su]=this.transportSessionId),this.lastSessionId&&(s[Nu]=this.lastSessionId),this.applicationId&&(s[Au]=this.applicationId),this.appCheckToken&&(s[Lr]=this.appCheckToken),typeof location<"u"&&location.hostname&&xu.test(location.hostname)&&(s[Tu]=Ru);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ym()&&!vm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=iu(n),i=bu(s,Bm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[$m]="t",s[Mu]=e,s[Lu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dm(),window[Om+this.uniqueCallbackIdentifier]=e,window[Dm+this.uniqueCallbackIdentifier]=n,this.myIFrame=bo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mu]=this.myID,e[Lu]=this.myPW,e[Fu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bu+s.length<=$u;){const o=this.pendingSegs.shift();s=s+"&"+Mm+i+"="+o.seg+"&"+Lm+i+"="+o.ts+"&"+Fm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Hm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=16384,Vm=45e3;let oi=null;typeof MozWebSocket<"u"?oi=MozWebSocket:typeof WebSocket<"u"&&(oi=WebSocket);class Ye{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=Co(n),this.connURL=Ye.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Iu]=Eo,typeof location<"u"&&location.hostname&&xu.test(location.hostname)&&(o[Tu]=Ru),n&&(o[Su]=n),s&&(o[Nu]=s),i&&(o[Lr]=i),r&&(o[Au]=r),ku(e,Pu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{let s;au(),this.mySock=new oi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&oi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||en.get("previous_websocket_failure")===!0}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bu(n,Wm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=6e4,Gm=5e3,zm=10*1024,qm=100*1024,ar="t",ac="d",Km="s",uc="r",Ym="e",hc="o",fc="a",dc="n",pc="p",Qm="h";class Xm{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ar in e){const n=e[ar];n===fc?this.upgradeIfSecondaryHealthy_():n===uc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(ar,e);if(ac in e){const s=e[ac];if(n===Qm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Km?this.onConnectionShutdown_(s):n===uc?this.onReset_(s):n===Ym?Mr("Server Error: "+s):n===hc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eo!==s&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Uu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new li}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=32,gc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ut(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Wu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ju(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return De(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gu(t,e){if(Ut(t)!==Ut(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ut(t)>Ut(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Zm{constructor(e,n){this.errorPrefix_=n,this.parts_=Vu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Mi(this.parts_[s]);zu(this)}}function ey(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Mi(e),zu(t)}function ty(t){const e=t.parts_.pop();t.byteLength_-=Mi(e),t.parts_.length>0&&(t.byteLength_-=1)}function zu(t){if(t.byteLength_>gc)throw new Error(t.errorPrefix_+"has a key path longer than "+gc+" bytes ("+t.byteLength_+").");if(t.parts_.length>_c)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_c+") or object contains a cycle "+Jt(t))}function Jt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Uu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new wo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=1e3,ny=60*5*1e3,mc=30*1e3,sy=1.3,iy=3e4,ry="server_kill",yc=3;class vt extends Hu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=ny,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!au())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new go,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=Rn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=q_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iy&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Xm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ry)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ve(h),c())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ql(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>vo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yc&&(this.reconnectDelay_=mc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yu.replace(/\./g,"-")]=1,cu()?e["framework.cordova"]=1:U_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=li.getInstance().currentlyOnline();return ql(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(xn,e),i=new j(xn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class qu extends Li{static get __EMPTY_NODE(){return Ws}static set __EMPTY_NODE(e){Ws=e}compare(e,n){return Mn(e.name,n.name)}isDefinedOn(e){throw kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(sn,Ws)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ws)}toString(){return".key"}}const wn=new qu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??$e.EMPTY_NODE,this.right=r??$e.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class oy{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new oy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e){return Mn(t.name,e.name)}function Io(t,e){return Mn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function cy(t){Fr=t}const Ku=function(t){return typeof t=="number"?"number:"+wu(t):"string:"+t},Yu=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else I(t===Fr||t.isEmpty(),"priority of unexpected type.");I(t===Fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yu(this.priorityNode_)}static set __childrenNodeConstructor(e){vc=e}static get __childrenNodeConstructor(){return vc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:q(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ku(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wu(this.value_):e+=this.value_,this.lazyHash_=Eu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu,Xu;function ay(t){Qu=t}function uy(t){Xu=t}class hy extends Li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Mn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(sn,new be("[PRIORITY-POST]",Xu))}makePost(e,n){const s=Qu(e);return new j(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new hy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=Math.log(2);class dy{constructor(e){const n=r=>parseInt(Math.log(r)/fy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ci=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new we(d,h.node,we.BLACK,null,null);{const _=parseInt(u/2,10)+c,E=i(c,_),w=i(_+1,a);return h=t[_],d=n?n(h):h,new we(d,h.node,we.BLACK,E,w)}},r=function(c){let a=null,u=null,h=t.length;const d=function(E,w){const D=h-E,B=h;h-=E;const M=i(D+1,B),P=t[D],Q=n?n(P):P;_(new we(Q,P.node,w,null,M))},_=function(E){a?(a.left=E,a=E):(u=E,a=E)};for(let E=0;E<c.count;++E){const w=c.nextBitIsOne(),D=Math.pow(2,c.count-(E+1));w?d(D,we.BLACK):(d(D,we.BLACK),d(D,we.RED))}return u},o=new dy(t.length),l=r(o);return new $e(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const dn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(dn&&_e,"ChildrenNode.ts has not been loaded"),ur=ur||new mt({".priority":dn},{".priority":_e}),ur}get(e){const n=Rn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ci(s,e.getCompare()):l=dn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new mt(u,a)}addToIndexes(e,n){const s=si(this.indexes_,(i,r)=>{const o=Rn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(j.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),ci(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new j(e.name,l))),c.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=si(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yu(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jn||(jn=new $(new $e(Io),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jn}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?jn:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{I(q(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ku(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Eu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class py extends ${constructor(){super(new $e(Io),$.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Ps=new py;Object.defineProperties(j,{MIN:{value:new j(xn,$.EMPTY_NODE)},MAX:{value:new j(sn,Ps)}});qu.__EMPTY_NODE=$.EMPTY_NODE;be.__childrenNodeConstructor=$;cy(Ps);uy(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=!0;function Se(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Se(e))}if(!(t instanceof Array)&&_y){const n=[];let s=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new j(o,c)))}}),n.length===0)return $.EMPTY_NODE;const r=ci(n,ly,o=>o.name,Io);if(s){const o=ci(n,_e.getCompare());return new $(r,Se(e),new mt({".priority":o},{".priority":_e}))}else return new $(r,Se(e),mt.Default)}else{let n=$.EMPTY_NODE;return Ue(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}ay(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends Li{constructor(e){super(),this.indexPath_=e,I(!z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Mn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new j(sn,e)}toString(){return Vu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends Li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Mn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Se(e);return new j(n,s)}toString(){return".value"}}const yy=new my;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ys(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Nn(n,s)):o.trackChildChange(vs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(ys(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(vs(i,r,o))}else s.trackChildChange(Nn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.indexedFilter_=new So(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const c=new j(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,a,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(vs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ys(n,h));const w=l.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Nn(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ys(a.name,a.node)),r.trackChildChange(Nn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new To;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cy(t){return t.loadsAllData()?new So(t.getIndex()):t.hasLimit()?new Ey(t):new Es(t)}function Ec(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===yy?n="$value":t.index_===wn?n="$key":(I(t.index_ instanceof gy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Hu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ai.getListenId_(e,s),l={};this.listens_[o]=l;const c=Ec(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Rn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ec(e._queryParams),s=e._path.toString(),i=new go;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Y_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ps(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return{value:null,children:new Map}}function Zu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,ui());const i=t.children.get(s);e=ce(e),Zu(i,e,n)}}function $r(t,e,n){t.value!==null?n(e,t.value):wy(t,(s,i)=>{const r=new re(e.toString()+"/"+s);$r(i,r,n)})}function wy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=10*1e3,Sy=30*1e3,Ty=5*60*1e3;class Ry{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Iy(e);const s=bc+(Sy-bc)*Math.random();ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ue(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ty))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function eh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ro(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=eh()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new hi(X(),n,this.revert)}}else return I(q(this.path)===e,"operationForChild called for unrelated child."),new hi(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Cs(this.source,X()):new Cs(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return z(this.path)?new rn(this.source,X(),this.snap.getImmediateChild(e)):new rn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new rn(this.source,X(),n.value):new bs(this.source,X(),n)}else return I(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ny(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vy(o.childName,o.snapshotNode))}),Gn(t,i,"child_removed",e,s,n),Gn(t,i,"child_added",e,s,n),Gn(t,i,"child_moved",r,s,n),Gn(t,i,"child_changed",e,s,n),Gn(t,i,"value",e,s,n),i}function Gn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Py(t,l,c)),o.forEach(l=>{const c=Ay(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Ay(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Py(t,e,n){if(e.childName==null||n.childName==null)throw kn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){return{eventCache:t,serverCache:e}}function ss(t,e,n,s){return Fi(new Wt(e,n,s),t.serverCache)}function th(t,e,n,s){return Fi(t.eventCache,new Wt(e,n,s))}function fi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr;const Oy=()=>(hr||(hr=new $e(mm)),hr);class ue{constructor(e,n=Oy()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Ue(e,(s,i)=>{n=n.set(new re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(z(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:ye(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ue(null)}}set(e,n){if(z(e))return new ue(n,this.children);{const s=q(e),r=(this.children.get(s)||new ue(null)).set(ce(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(z(e))return n;{const s=q(e),r=(this.children.get(s)||new ue(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),ye(n,i),s):new ue(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ue(null))}}function is(t,e,n){if(z(e))return new tt(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function wc(t,e,n){let s=t;return Ue(n,(i,r)=>{s=is(s,ye(e,i),r)}),s}function Ic(t,e){if(z(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new tt(n)}}function Br(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Sc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Ft(t,e){if(z(e))return t;{const n=cn(t,e);return n!=null?new tt(new ue(n)):new tt(t.writeTree_.subtree(e))}}function Hr(t){return t.writeTree_.isEmpty()}function An(t,e){return nh(X(),t.writeTree_,e)}function nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nh(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){return oh(e,t)}function Dy(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=s}function ky(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function My(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ly(l,s.path)?i=!1:Xe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Fy(t),!0;if(s.snap)t.visibleWrites=Ic(t.visibleWrites,s.path);else{const l=s.children;Ue(l,c=>{t.visibleWrites=Ic(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function Ly(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(ye(t.path,n),e))return!0;return!1}function Fy(t){t.visibleWrites=sh(t.allWrites,$y,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $y(t){return t.visible}function sh(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=De(n,o),s=is(s,l,r.snap)):Xe(o,n)&&(l=De(o,n),s=is(s,X(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=De(n,o),s=wc(s,l,r.children);else if(Xe(o,n))if(l=De(o,n),z(l))s=wc(s,X(),r.children);else{const c=Rn(r.children,q(l));if(c){const a=c.getChild(ce(l));s=is(s,X(),a)}}}else throw kn("WriteRecord should have .snap or .children")}}return s}function ih(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(Hr(o))return n;if(n==null&&!Br(o,X()))return null;{const l=n||$.EMPTY_NODE;return An(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&Hr(r))return n;if(!i&&n==null&&!Br(r,X()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Xe(a.path,e)||Xe(e,a.path))},l=sh(t.allWrites,o,e),c=n||$.EMPTY_NODE;return An(l,c)}}}function By(t,e,n){let s=$.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=An(Ft(r,new re(o)),l);s=s.updateImmediateChild(o,c)}),Sc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Sc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Hy(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Br(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return Hr(o)?i.getChild(n):An(o,i.getChild(n))}}function Uy(t,e,n,s){const i=ye(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return An(o,s.getNode().getImmediateChild(n))}else return null}function Wy(t,e){return cn(t.visibleWrites,e)}function Vy(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=cn(c,X());if(a!=null)l=a;else if(n!=null)l=An(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function jy(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function di(t,e,n,s){return ih(t.writeTree,t.treePath,e,n,s)}function No(t,e){return By(t.writeTree,t.treePath,e)}function Tc(t,e,n,s){return Hy(t.writeTree,t.treePath,e,n,s)}function pi(t,e){return Wy(t.writeTree,ye(t.treePath,e))}function Gy(t,e,n,s,i,r){return Vy(t.writeTree,t.treePath,e,n,s,i,r)}function Ao(t,e,n){return Uy(t.writeTree,t.treePath,e,n)}function rh(t,e){return oh(ye(t.treePath,e),t.writeTree)}function oh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,vs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Nn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,vs(s,e.snapshotNode,i.oldSnap));else throw kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const lh=new qy;class Po{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ao(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Gy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){return{filter:t}}function Yy(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qy(t,e,n,s,i){const r=new zy;let o,l;if(n.type===Je.OVERWRITE){const a=n;a.source.fromUser?o=Ur(t,e,a.path,a.snap,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=_i(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Je.MERGE){const a=n;a.source.fromUser?o=Jy(t,e,a.path,a.children,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Wr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Je.ACK_USER_WRITE){const a=n;a.revert?o=tv(t,e,a.path,s,i,r):o=Zy(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=ev(t,e,n.path,s,r);else throw kn("Unknown operation type: "+n.type);const c=r.getChanges();return Xy(e,o,c),{viewCache:o,changes:c}}function Xy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ju(fi(e)))}}function ch(t,e,n,s,i,r){const o=e.eventCache;if(pi(s,n)!=null)return e;{let l,c;if(z(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=on(e),u=a instanceof $?a:$.EMPTY_NODE,h=No(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=di(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=q(n);if(a===".priority"){I(Ut(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Tc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=Tc(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(a).updateChild(u,d):h=o.getNode().getImmediateChild(a)}else h=Ao(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return ss(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function _i(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=q(n);if(!c.isCompleteForPath(n)&&Ut(n)>1)return e;const E=ce(n),D=c.getNode().getImmediateChild(_).updateChild(E,s);_===".priority"?a=u.updatePriority(c.getNode(),D):a=u.updateChild(c.getNode(),_,D,E,lh,null)}const h=th(e,a,c.isFullyInitialized()||z(n),u.filtersNodes()),d=new Po(i,h,r);return ch(t,h,n,i,d,l)}function Ur(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Po(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ss(e,a,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ss(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=ce(n),_=l.getNode().getImmediateChild(h);let E;if(z(d))E=s;else{const w=u.getCompleteChild(h);w!=null?Wu(d)===".priority"&&w.getChild(ju(d)).isEmpty()?E=w:E=w.updateChild(d,s):E=$.EMPTY_NODE}if(_.equals(E))c=e;else{const w=t.filter.updateChild(l.getNode(),h,E,d,u,o);c=ss(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Rc(t,e){return t.eventCache.isCompleteForChild(e)}function Jy(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ye(n,c);Rc(e,q(u))&&(l=Ur(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ye(n,c);Rc(e,q(u))||(l=Ur(t,l,u,a,i,r,o))}),l}function xc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Wr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),E=xc(t,_,d);c=_i(t,c,new re(h),E,i,r,o,l)}}),a.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const E=e.serverCache.getNode().getImmediateChild(h),w=xc(t,E,d);c=_i(t,c,new re(h),w,i,r,o,l)}}),c}function Zy(t,e,n,s,i,r,o){if(pi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _i(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new ue(null);return c.getNode().forEachChild(wn,(u,h)=>{a=a.set(new re(u),h)}),Wr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ue(null);return s.foreach((u,h)=>{const d=ye(n,u);c.isCompleteForPath(d)&&(a=a.set(u,c.getNode().getChild(d)))}),Wr(t,e,n,a,i,r,l,o)}}function ev(t,e,n,s,i){const r=e.serverCache,o=th(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return ch(t,o,n,s,lh,i)}function tv(t,e,n,s,i,r){let o;if(pi(s,n)!=null)return e;{const l=new Po(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=di(s,on(e));else{const h=e.serverCache.getNode();I(h instanceof $,"serverChildren would be complete if leaf node"),u=No(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=q(n);let h=Ao(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,$.EMPTY_NODE,ce(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=di(s,on(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||pi(s,X())!=null,ss(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new So(s.getIndex()),r=Cy(s);this.processor_=Ky(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode($.EMPTY_NODE,l.getNode(),null),u=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Fi(h,u),this.eventGenerator_=new xy(this.query_)}get query(){return this.query_}}function sv(t){return t.viewCache_.serverCache.getNode()}function iv(t){return fi(t.viewCache_)}function rv(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Nc(t){return t.eventRegistrations_.length===0}function ov(t,e){t.eventRegistrations_.push(e)}function Ac(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Pc(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(I(on(t.viewCache_),"We should always have a full cache before handling merges"),I(fi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Qy(t.processor_,i,e,n,s);return Yy(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ah(t,r.changes,r.viewCache.eventCache.getNode(),null)}function lv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Nn(r,o))}),n.isFullyInitialized()&&s.push(Ju(n.getNode())),ah(t,s,n.getNode(),e)}function ah(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ny(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;class uh{constructor(){this.views=new Map}}function cv(t){I(!gi,"__referenceConstructor has already been defined"),gi=t}function av(){return I(gi,"Reference.ts has not been loaded"),gi}function uv(t){return t.views.size===0}function Oo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Pc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Pc(o,e,n,s));return r}}function hh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=di(n,i?s:null),c=!1;l?c=!0:s instanceof $?(l=No(n,s),c=!1):(l=$.EMPTY_NODE,c=!1);const a=Fi(new Wt(l,c,!1),new Wt(s,i,!1));return new nv(e,a)}return o}function hv(t,e,n,s,i,r){const o=hh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ov(o,n),lv(o,n)}function fv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Vt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Ac(a,n,s)),Nc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Ac(c,n,s)),Nc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Vt(t)&&r.push(new(av())(e._repo,e._path)),{removed:r,events:o}}function fh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $t(t,e){let n=null;for(const s of t.views.values())n=n||rv(s,e);return n}function dh(t,e){if(e._queryParams.loadsAllData())return Bi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ph(t,e){return dh(t,e)!=null}function Vt(t){return Bi(t)!=null}function Bi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;function dv(t){I(!mi,"__referenceConstructor has already been defined"),mi=t}function pv(){return I(mi,"Reference.ts has not been loaded"),mi}let _v=1;class Oc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=jy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gv(t,e,n,s,i){return Dy(t.pendingWriteTree_,e,n,s,i),i?Ds(t,new rn(eh(),e,n)):[]}function gn(t,e,n=!1){const s=ky(t.pendingWriteTree_,e);if(My(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(X(),!0):Ue(s.children,o=>{r=r.set(new re(o),!0)}),Ds(t,new hi(s.path,r,n))}else return[]}function Os(t,e,n){return Ds(t,new rn(Ro(),e,n))}function mv(t,e,n){const s=ue.fromObject(n);return Ds(t,new bs(Ro(),e,s))}function yv(t,e){return Ds(t,new Cs(Ro(),e))}function vv(t,e,n){const s=Do(t,n);if(s){const i=ko(s),r=i.path,o=i.queryId,l=De(r,e),c=new Cs(xo(o),l);return Mo(t,r,c)}else return[]}function _h(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ph(o,e))){const c=fv(o,e,n,s);uv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Vt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=wv(d);for(let E=0;E<_.length;++E){const w=_[E],D=w.query,B=Eh(t,w);t.listenProvider_.startListening(rs(D),ws(t,D),B.hashFn,B.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(rs(e),null):a.forEach(d=>{const _=t.queryToTagMap.get(Hi(d));t.listenProvider_.stopListening(rs(d),_)}))}Iv(t,a)}return l}function gh(t,e,n,s){const i=Do(t,s);if(i!=null){const r=ko(i),o=r.path,l=r.queryId,c=De(o,e),a=new rn(xo(l),c,n);return Mo(t,o,a)}else return[]}function Ev(t,e,n,s){const i=Do(t,s);if(i){const r=ko(i),o=r.path,l=r.queryId,c=De(o,e),a=ue.fromObject(n),u=new bs(xo(l),c,a);return Mo(t,o,u)}else return[]}function Cv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const E=De(d,i);r=r||$t(_,E),o=o||Vt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Vt(l),r=r||$t(l,X())):(l=new uh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const w=$t(E,X());w&&(r=r.updateImmediateChild(_,w))}));const a=ph(l,e);if(!a&&!e._queryParams.loadsAllData()){const d=Hi(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Sv();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=$i(t.pendingWriteTree_,i);let h=hv(l,e,n,u,r,c);if(!a&&!o&&!s){const d=dh(l,e);h=h.concat(Tv(t,e,d))}return h}function mh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=De(o,e),a=$t(l,c);if(a)return a});return ih(i,e,r,n,!0)}function bv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=De(a,n);s=s||$t(u,h)});let i=t.syncPointTree_.get(n);i?s=s||$t(i,X()):(i=new uh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=$i(t.pendingWriteTree_,e._path),c=hh(i,e,l,r?o.getNode():$.EMPTY_NODE,r);return iv(c)}function Ds(t,e){return yh(e,t.syncPointTree_,null,$i(t.pendingWriteTree_,X()))}function yh(t,e,n,s){if(z(t.path))return vh(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=$t(i,X()));let r=[];const o=q(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=rh(s,o);r=r.concat(yh(l,c,a,u))}return i&&(r=r.concat(Oo(i,t,s,n))),r}}function vh(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=$t(i,X()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=rh(s,o),u=t.operationForChild(o);u&&(r=r.concat(vh(u,l,c,a)))}),i&&(r=r.concat(Oo(i,t,s,n))),r}function Eh(t,e){const n=e.query,s=ws(t,n);return{hashFn:()=>(sv(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vv(t,n._path,s):yv(t,n._path);{const r=Em(i,n);return _h(t,n,null,r)}}}}function ws(t,e){const n=Hi(e);return t.queryToTagMap.get(n)}function Hi(t){return t._path.toString()+"$"+t._queryIdentifier}function Do(t,e){return t.tagToQueryMap.get(e)}function ko(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Mo(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=$i(t.pendingWriteTree_,e);return Oo(s,n,i,null)}function wv(t){return t.fold((e,n,s)=>{if(n&&Vt(n))return[Bi(n)];{let i=[];return n&&(i=fh(n)),Ue(s,(r,o)=>{i=i.concat(o)}),i}})}function rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pv())(t._repo,t._path):t}function Iv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Hi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Sv(){return _v++}function Tv(t,e,n){const s=e._path,i=ws(t,e),r=Eh(t,n),o=t.listenProvider_.startListening(rs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!Vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!z(a)&&u&&Vt(u))return[Bi(u).query];{let d=[];return u&&(d=d.concat(fh(u).map(_=>_.query))),Ue(h,(_,E)=>{d=d.concat(E)}),d}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(rs(u),ws(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lo(n)}node(){return this.node_}}class Fo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Fo(this.syncTree_,n)}node(){return mh(this.syncTree_,this.path_)}}const Rv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dc=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Nv(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Nv=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Av=function(t,e,n,s){return $o(e,new Fo(n,t),s)},Pv=function(t,e,n){return $o(t,new Lo(e),n)};function $o(t,e,n){const s=t.getPriority().val(),i=Dc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Dc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(l,c)=>{const a=$o(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ho(t,e){let n=e instanceof re?e:new re(e),s=t,i=q(n);for(;i!==null;){const r=Rn(s.node.children,i)||{children:{},childCount:0};s=new Bo(i,s,r),n=ce(n),i=q(n)}return s}function Ln(t){return t.node.value}function Ch(t,e){t.node.value=e,Vr(t)}function bh(t){return t.node.childCount>0}function Ov(t){return Ln(t)===void 0&&!bh(t)}function Ui(t,e){Ue(t.node.children,(n,s)=>{e(new Bo(n,t,s))})}function wh(t,e,n,s){n&&!s&&e(t),Ui(t,i=>{wh(i,e,!0,s)}),n&&s&&e(t)}function Dv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ks(t){return new re(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function Vr(t){t.parent!==null&&kv(t.parent,t.name,t)}function kv(t,e,n){const s=Ov(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Vr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=/[\[\].#$\/\u0000-\u001F\u007F]/,Lv=/[\[\].#$\u0000-\u001F\u007F]/,fr=10*1024*1024,Ih=function(t){return typeof t=="string"&&t.length!==0&&!Mv.test(t)},Sh=function(t){return typeof t=="string"&&t.length!==0&&!Lv.test(t)},Fv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sh(t)},Th=function(t,e,n){const s=n instanceof re?new Zm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jt(s)+" with contents = "+e.toString());if(Cu(e))throw new Error(t+"contains "+e.toString()+" "+Jt(s));if(typeof e=="string"&&e.length>fr/3&&Mi(e)>fr)throw new Error(t+"contains a string greater than "+fr+" utf8 bytes "+Jt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ih(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ey(s,o),Th(t,l,s),ty(s)}),i&&r)throw new Error(t+' contains ".value" child '+Jt(s)+" in addition to actual children.")}},Rh=function(t,e,n,s){if(!Sh(n))throw new Error(fu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$v=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Rh(t,e,n)},Bv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fv(n))throw new Error(fu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uv(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Gu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zt(t,e,n){Uv(t,n),Wv(t,s=>Xe(s,e)||Xe(e,s))}function Wv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Vv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Vv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ts&&xe("event: "+n.toString()),As(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="repo_interrupt",Gv=25;class zv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ui(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qv(t,e,n){if(t.stats_=Co(t.repoInfo_),t.forceRestClient_||Im())t.server_=new ai(t.repoInfo_,(s,i,r,o)=>{kc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{kc(t,s,i,r,o)},s=>{Mc(t,s)},s=>{Yv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Nm(t.repoInfo_,()=>new Ry(t.stats_,t.server_)),t.infoData_=new by,t.infoSyncTree_=new Oc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Os(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Uo(t,"connected",!1),t.serverSyncTree_=new Oc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);zt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Kv(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xh(t){return Rv({timestamp:Kv(t)})}function kc(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=si(n,a=>Se(a));o=Ev(t.serverSyncTree_,r,c,i)}else{const c=Se(n);o=gh(t.serverSyncTree_,r,c,i)}else if(s){const c=si(n,a=>Se(a));o=mv(t.serverSyncTree_,r,c)}else{const c=Se(n);o=Os(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=jo(t,r)),zt(t.eventQueue_,l,o)}function Mc(t,e){Uo(t,"connected",e),e===!1&&Jv(t)}function Yv(t,e){Ue(e,(n,s)=>{Uo(t,n,s)})}function Uo(t,e,n){const s=new re("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=Os(t.infoSyncTree_,s,i);zt(t.eventQueue_,s,r)}function Qv(t){return t.nextWriteId_++}function Xv(t,e,n){const s=bv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());Cv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Os(t.serverSyncTree_,e._path,r);else{const l=ws(t.serverSyncTree_,e);o=gh(t.serverSyncTree_,e._path,r,l)}return zt(t.eventQueue_,e._path,o),_h(t.serverSyncTree_,e,n,null,!0),r},i=>(Wo(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function Jv(t){Wo(t,"onDisconnectEvents");const e=xh(t),n=ui();$r(t.onDisconnect_,X(),(i,r)=>{const o=Av(i,r,t.serverSyncTree_,e);Zu(n,i,o)});let s=[];$r(n,X(),(i,r)=>{s=s.concat(Os(t.serverSyncTree_,i,r));const o=nE(t,i);jo(t,o)}),t.onDisconnect_=ui(),zt(t.eventQueue_,X(),s)}function Zv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jv)}function Wo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function Nh(t,e,n){return mh(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Vo(t,e=t.transactionQueueTree_){if(e||Wi(t,e),Ln(e)){const n=Ph(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eE(t,ks(e),n)}else bh(e)&&Ui(e,n=>{Vo(t,n)})}function eE(t,e,n){const s=n.map(a=>a.currentWriteId),i=Nh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=De(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Wo(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(gn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wi(t,Ho(t.transactionQueueTree_,e)),Vo(t,t.transactionQueueTree_),zt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)As(h[d])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ve("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}jo(t,e)}},o)}function jo(t,e){const n=Ah(t,e),s=ks(n),i=Ph(t,n);return tE(t,i,s),s}function tE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=De(n,c.path);let u=!1,h;if(I(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(gn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Gv)u=!0,h="maxretry",i=i.concat(gn(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Nh(t,c.path,o);c.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Th("transaction failed: Data returned ",_,c.path);let E=Se(_);typeof _=="object"&&_!=null&&wt(_,".priority")||(E=E.updatePriority(d.getPriority()));const D=c.currentWriteId,B=xh(t),M=Pv(E,d,B);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=M,c.currentWriteId=Qv(t),o.splice(o.indexOf(D),1),i=i.concat(gv(t.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),i=i.concat(gn(t.serverSyncTree_,D,!0))}else u=!0,h="nodata",i=i.concat(gn(t.serverSyncTree_,c.currentWriteId,!0))}zt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Wi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)As(s[l]);Vo(t,t.transactionQueueTree_)}function Ah(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&Ln(s)===void 0;)s=Ho(s,n),e=ce(e),n=q(e);return s}function Ph(t,e){const n=[];return Oh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Oh(t,e,n){const s=Ln(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ui(e,i=>{Oh(t,i,n)})}function Wi(t,e){const n=Ln(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ch(e,n.length>0?n:void 0)}Ui(e,s=>{Wi(t,s)})}function nE(t,e){const n=ks(Ah(t,e)),s=Ho(t.transactionQueueTree_,e);return Dv(s,i=>{dr(t,i)}),dr(t,s),wh(s,i=>{dr(t,i)}),n}function dr(t,e){const n=Ln(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ch(e,void 0):n.length=r+1,zt(t.eventQueue_,ks(e),i);for(let o=0;o<s.length;o++)As(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lc=function(t,e){const n=rE(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_m();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Du(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},rE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=sE(t.substring(u,h)));const d=iE(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class lE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Wu(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Cc(this._queryParams),n=vo(e);return n==="{}"?"default":n}get _queryObject(){return Cc(this._queryParams)}isEqual(e){if(e=Rs(e),!(e instanceof Go))return!1;const n=this._repo===e._repo,s=Gu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jm(this._path)}}class It extends Go{constructor(e,n){super(e,n,new To,!1)}get parent(){const e=ju(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Is{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=yi(this.ref,e);return new Is(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Is(i,yi(this.ref,s),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dh(t,e){return t=Rs(t),t._checkNotDeleted("ref"),e!==void 0?yi(t._root,e):t._root}function yi(t,e){return t=Rs(t),q(t._path)===null?$v("child","path",e):Rh("child","path",e),new It(t._repo,ye(t._path,e))}function kh(t){t=Rs(t);const e=new cE(()=>{}),n=new zo(e);return Xv(t._repo,t,n).then(s=>new Is(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class zo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new oE("value",this,new Is(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lE(this,e,n):null}matches(e){return e instanceof zo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}cv(It);dv(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="FIREBASE_DATABASE_EMULATOR_HOST",jr={};let uE=!1;function hE(t,e,n,s){t.repoInfo_=new Du(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function fE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lc(r,i),l=o.repoInfo,c;typeof process<"u"&&sc&&(c=sc[aE]),c?(r=`http://${c}?ns=${l.namespace}`,o=Lc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new Tm(t.name,t.options,e);Bv("Invalid Firebase Database URL",o),z(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const u=pE(l,t,a,new Sm(t.name,n));return new _E(u,t)}function dE(t,e){const n=jr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Zv(t),delete n[t.key]}function pE(t,e,n,s){let i=jr[e.name];i||(i={},jr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new zv(t,uE,n,s),i[t.toURLString()]=r,r}class _E{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function Mh(t=Xg(),e){const n=qg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=$_("database");s&&gE(n,...s)}return n}function gE(t,e,n,s={}){t=Rs(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ys(Ys.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:B_(s.mockUserToken,t.app.options.projectId);r=new Ys(o)}hE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){am(Qg),ri(new _s("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Cn(ic,rc,t),Cn(ic,rc,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mE();const qo=t=>(On("data-v-32d0e359"),t=t(),Dn(),t),yE={class:"Area"},vE={class:"header-container"},EE=qo(()=>L("h1",null,"My Experience",-1)),CE={key:0,class:"loading"},bE={key:1,class:"area-card"},wE={key:0,class:"intern"},IE={key:1,class:"volunteer"},SE={key:2,class:"project"},TE={class:"title"},RE=qo(()=>L("br",null,null,-1)),xE={class:"company"},NE=qo(()=>L("br",null,null,-1)),AE={class:"content"},PE={__name:"Explist",props:{limit:Number,showButton:{type:Boolean,default:!1}},setup(t){const n=yo({apiKey:"AIzaSyAgBmfWRbE_fNzx-gaGAPAuytRdRmEXR8A",authDomain:"personal-use-1857a.firebaseapp.com",projectId:"personal-use-1857a",storageBucket:"personal-use-1857a.appspot.com",messagingSenderId:"123791548487",databaseURL:"https://personal-use-1857a-default-rtdb.asia-southeast1.firebasedatabase.app",appId:"1:123791548487:web:c099989d47700c36981162",measurementId:"G-ZLTH39PEQ1"}),s=Mh(n);let i=cs(!0);const r=cs([]);return oo(async()=>{try{console.log("Fetching data...");const l=Dh(s,"experiences"),c=await kh(l);console.log("Snapshot received:",c),c.exists()?(r.value=c.val(),console.log("Data loaded:",r.value)):console.log("No data available")}catch(l){console.error("Error fetching data:",l)}finally{i.value=!1}}),(l,c)=>{const a=ro("RouterLink");return ee(),le("div",yE,[L("div",vE,[EE,t.showButton?(ee(),Ai(a,{key:0,to:"/experience",class:"viewmore"},{default:Le(()=>[Fe(" View More ")]),_:1})):wd("",!0)]),Ze(i)?(ee(),le("div",CE,[K(tu)])):(ee(),le("div",bE,[(ee(!0),le(Oe,null,Kf(r.value.slice(0,t.limit||r.value.length),u=>(ee(),le("div",{class:"each-exp",key:u.id},[K(S_,null,{default:Le(()=>[u.type=="intern"?(ee(),le("p",wE,"Intern")):u.type=="volunteer"?(ee(),le("p",IE,"Volunteer")):(ee(),le("p",SE,"Project")),L("p",TE,ct(u.title),1),RE,L("p",xE,ct(u.company),1),NE,L("p",AE,ct(u.content),1),K(a,{class:"readm",to:"/experience/"+u.id},{default:Le(()=>[Fe("Read More")]),_:2},1032,["to"])]),_:2},1024)]))),128))]))])}}},Lh=dt(PE,[["__scopeId","data-v-32d0e359"]]),OE={__name:"Home",setup(t){return(e,n)=>(ee(),le(Oe,null,[K(C_),K(Lh,{limit:3,showButton:!0})],64))}},DE={__name:"Experience",setup(t){return(e,n)=>(ee(),Ai(Lh))}},Vi=t=>(On("data-v-e5adcd5a"),t=t(),Dn(),t),kE={class:"not-found-container"},ME=Vi(()=>L("h1",null,"404",-1)),LE=Vi(()=>L("h2",null,"Page Not Found",-1)),FE=Vi(()=>L("p",null,"Sorry, the page you are looking for does not exist.",-1)),$E=Vi(()=>L("p",null,"You may have mistyped the address or the page may have moved.",-1)),BE={__name:"Notfound",setup(t){return(e,n)=>{const s=ro("RouterLink");return ee(),le("div",kE,[ME,LE,FE,$E,K(s,{to:"/"},{default:Le(()=>[Fe("Go Home")]),_:1})])}}},HE=dt(BE,[["__scopeId","data-v-e5adcd5a"]]),UE={className:"backbutton"},WE={__name:"BackButton",setup(t){return(e,n)=>(ee(),le("div",UE,[K(Ze(po),{to:"/experience"},{default:Le(()=>[Fe("<- Back to Experience list")]),_:1})]))}},Fc=dt(WE,[["__scopeId","data-v-0fe6388e"]]),ji=t=>(On("data-v-06ef476b"),t=t(),Dn(),t),VE={key:0,class:"loading"},jE={key:1,class:"exp-area"},GE={class:"exp-basic"},zE={class:"type"},qE={class:"title"},KE={key:0,class:"company"},YE={key:1},QE={class:"exp-adv"},XE={class:"exp-desc"},JE=ji(()=>L("h1",null,"Description",-1)),ZE={class:"content"},eC=ji(()=>L("h1",null,"Duration",-1)),tC={class:"exp-org"},nC=ji(()=>L("h1",null,"Company/Organization Info",-1)),sC={key:0,class:"desc"},iC={key:1,class:"desc"},rC=ji(()=>L("h1",null,"Company/Organization Website",-1)),oC=["href"],lC={key:3},cC={__name:"Expview",setup(t){const n=yo({apiKey:"AIzaSyAgBmfWRbE_fNzx-gaGAPAuytRdRmEXR8A",authDomain:"personal-use-1857a.firebaseapp.com",projectId:"personal-use-1857a",storageBucket:"personal-use-1857a.appspot.com",messagingSenderId:"123791548487",databaseURL:"https://personal-use-1857a-default-rtdb.asia-southeast1.firebasedatabase.app",appId:"1:123791548487:web:c099989d47700c36981162",measurementId:"G-ZLTH39PEQ1"}),s=Mh(n),i=cs(!0),r=cs(null),l=a_().params.id;return oo(async()=>{const a=Dh(s);try{console.log("Fetching data...");const u=await kh(yi(a,`experiences/${l-1}`));if(console.log("Snapshot received:",u),u.exists()){const h=u.val();r.value=Array.isArray(h)?h[0]:h,console.log("Data loaded:",r.value)}else console.log("No data available")}catch(u){console.error("Error fetching data:",u)}finally{i.value=!1}}),(a,u)=>i.value?(ee(),le("div",VE,[K(Fc),K(tu)])):(ee(),le("div",jE,[K(Fc),L("div",GE,[L("p",zE,ct(r.value.type),1),L("p",qE,ct(r.value.title),1),r.value.company?(ee(),le("p",KE,ct(r.value.company),1)):(ee(),le("p",YE,"-"))]),L("div",QE,[L("div",XE,[JE,L("p",ZE,ct(r.value.content),1),eC,L("p",null,ct(r.value.duration),1)]),L("div",tC,[nC,r.value.companydesc?(ee(),le("p",sC,ct(r.value.companydesc),1)):(ee(),le("p",iC,"-")),rC,r.value.web?(ee(),le("a",{key:2,href:r.value.web},ct(r.value.web),9,oC)):(ee(),le("p",lC,"-"))])])]))}},aC=dt(cC,[["__scopeId","data-v-06ef476b"]]),uC={},hC={src:"https://drive.google.com/file/d/1Eh6HpGEyLnnXHBBz4YG_cQm6Uk12Hn3L/preview"};function fC(t,e){return ee(),le("iframe",hC)}const dC=dt(uC,[["render",fC],["__scopeId","data-v-4586f64e"]]),pC=l_({history:Fp("/vue-personal-page/"),routes:[{path:"/",name:"home",component:OE},{path:"/experience",name:"experience",component:DE},{path:"/:catchAll(.*)",name:"not-found",component:HE},{path:"/experience/:id",name:"experienceid",component:aC},{path:"/cv",name:"cv",component:dC}]}),_C={methods:{toggle(){let t=document.querySelector(".Navbar2");t.style.display==="none"?t.style.display="flex":t.style.display="none"}}},Fh=t=>(On("data-v-dbd94eb2"),t=t(),Dn(),t),gC={class:"Navbar"},mC=Fh(()=>L("span",{class:"icon"},"< WHL />",-1)),yC={class:"navitems"},vC={class:"nav1"},EC={class:"nav1"},CC={class:"nav1"},bC=Fh(()=>L("svg",{xmlns:"http://www.w3.org/2000/svg",class:"menu",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368"},[L("path",{d:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"})],-1)),wC=[bC],IC={class:"Navbar2"},SC={class:"navitems1"},TC={class:"home1"},RC={class:"exp1"},xC={class:"cv1"};function NC(t,e,n,s,i,r){const o=ro("RouterLink");return ee(),le(Oe,null,[L("div",gC,[K(o,{to:"/"},{default:Le(()=>[mC]),_:1}),L("ul",yC,[L("li",vC,[K(o,{to:"/"},{default:Le(()=>[Fe("Home")]),_:1})]),L("li",EC,[K(o,{to:"/experience"},{default:Le(()=>[Fe("Experience")]),_:1})]),L("li",CC,[K(o,{to:"/cv"},{default:Le(()=>[Fe("CV")]),_:1})])]),L("div",{onClick:e[0]||(e[0]=(...l)=>r.toggle&&r.toggle(...l)),class:"menu-container"},wC)]),L("div",IC,[L("ul",SC,[L("li",TC,[K(o,{to:"/"},{default:Le(()=>[Fe("Home")]),_:1})]),L("li",RC,[K(o,{to:"/experience"},{default:Le(()=>[Fe("Experience")]),_:1})]),L("li",xC,[K(o,{to:"/cv"},{default:Le(()=>[Fe("CV")]),_:1})])])])],64)}const AC=dt(_C,[["render",NC],["__scopeId","data-v-dbd94eb2"]]),PC={},OC=t=>(On("data-v-131b7e37"),t=t(),Dn(),t),DC={className:"footer"},kC=OC(()=>L("p",null,"© Ken Wong",-1)),MC=[kC];function LC(t,e){return ee(),le("div",DC,MC)}const FC=dt(PC,[["render",LC],["__scopeId","data-v-131b7e37"]]),$C={__name:"App",setup(t){return(e,n)=>(ee(),le(Oe,null,[K(AC),K(Ze(eu)),K(FC)],64))}},$h=ip($C);$h.use(pC);$h.mount("#app");
