(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ue={},gn=[],Ve=()=>{},kh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mh=Object.prototype.hasOwnProperty,K=(t,e)=>Mh.call(t,e),B=Array.isArray,mn=t=>vi(t)==="[object Map]",Dc=t=>vi(t)==="[object Set]",W=t=>typeof t=="function",ve=t=>typeof t=="string",ln=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",kc=t=>(fe(t)||W(t))&&W(t.then)&&W(t.catch),Mc=Object.prototype.toString,vi=t=>Mc.call(t),Lh=t=>vi(t).slice(8,-1),Lc=t=>vi(t)==="[object Object]",zr=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=Vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fh=/-(\w)/g,ht=Ei(t=>t.replace(Fh,(e,n)=>n?n.toUpperCase():"")),$h=/\B([A-Z])/g,An=Ei(t=>t.replace($h,"-$1").toLowerCase()),Ci=Ei(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vi=Ei(t=>t?`on${Ci(t)}`:""),Bt=(t,e)=>!Object.is(t,e),ji=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const $c=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yn(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ve(s)?Vh(s):yn(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ve(t)||fe(t))return t}const Hh=/;(?![^(]*\))/g,Uh=/:([^]+)/,Wh=/\/\*[^]*?\*\//g;function Vh(t){const e={};return t.replace(Wh,"").split(Hh).forEach(n=>{if(n){const s=n.split(Uh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qr(t){let e="";if(ve(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=qr(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gh=Vr(jh);function Bc(t){return!!t||t===""}const ct=t=>ve(t)?t:t==null?"":B(t)||fe(t)&&(t.toString===Mc||!W(t.toString))?JSON.stringify(t,Hc,2):String(t),Hc=(t,e)=>e&&e.__v_isRef?Hc(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Gi(s,r)+" =>"]=i,n),{})}:Dc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gi(n))}:ln(e)?Gi(e):fe(e)&&!B(e)&&!Lc(e)?String(e):e,Gi=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ge;try{return Ge=this,e()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qh(t,e=Ge){e&&e.active&&e.effects.push(t)}function Kh(){return Ge}let tn;class Kr{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qh(this,i)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,jt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(Yh(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Gt()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dt,n=tn;try{return Dt=!0,tn=this,this._runnings++,Ko(this),this.fn()}finally{Yo(this),this._runnings--,tn=n,Dt=e}}stop(){this.active&&(Ko(this),Yo(this),this.onStop&&this.onStop(),this.active=!1)}}function Yh(t){return t.value}function Ko(t){t._trackId++,t._depsLength=0}function Yo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Uc(t.deps[e],t);t.deps.length=t._depsLength}}function Uc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dt=!0,fr=0;const Wc=[];function jt(){Wc.push(Dt),Dt=!1}function Gt(){const t=Wc.pop();Dt=t===void 0?!0:t}function Yr(){fr++}function Qr(){for(fr--;!fr&&dr.length;)dr.shift()()}function Vc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Uc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const dr=[];function jc(t,e,n){Yr();for(const s of t.keys()){if(!t.computed&&s.computed&&t.get(s)===s._trackId&&s._runnings>0){s._dirtyLevel=2;continue}let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s.computed&&s._dirtyLevel===2&&(s._shouldSchedule=!0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==3&&(s._shouldSchedule=!1,s.scheduler&&dr.push(s.scheduler)))}Qr()}const Gc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},pr=new WeakMap,nn=Symbol(""),_r=Symbol("");function Fe(t,e,n){if(Dt&&tn){let s=pr.get(t);s||pr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Gc(()=>s.delete(n))),Vc(tn,i)}}function mt(t,e,n,s,i,r){const o=pr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&B(t)){const c=Number(s);o.forEach((a,h)=>{(h==="length"||!ln(h)&&h>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":B(t)?zr(n)&&l.push(o.get("length")):(l.push(o.get(nn)),mn(t)&&l.push(o.get(_r)));break;case"delete":B(t)||(l.push(o.get(nn)),mn(t)&&l.push(o.get(_r)));break;case"set":mn(t)&&l.push(o.get(nn));break}Yr();for(const c of l)c&&jc(c,5);Qr()}const Qh=Vr("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln)),Qo=Xh();function Xh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Fe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jt(),Yr();const s=te(this)[e].apply(this,n);return Qr(),Gt(),s}}),t}function Jh(t){ln(t)||(t=String(t));const e=te(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class qc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?ff:Xc:r?Qc:Yc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=B(e);if(!i){if(o&&K(Qo,n))return Reflect.get(Qo,n,s);if(n==="hasOwnProperty")return Jh}const l=Reflect.get(e,n,s);return(ln(n)?zc.has(n):Qh(n))||(i||Fe(e,"get",n),r)?l:$e(l)?o&&zr(n)?l:l.value:fe(l)?i?Zc(l):wi(l):l}}class Kc extends qc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=rs(r);if(!Ks(s)&&!rs(s)&&(r=te(r),s=te(s)),!B(e)&&$e(r)&&!$e(s))return c?!1:(r.value=s,!0)}const o=B(e)&&zr(n)?Number(n)<e.length:K(e,n),l=Reflect.set(e,n,s,i);return e===te(i)&&(o?Bt(s,r)&&mt(e,"set",n,s):mt(e,"add",n,s)),l}deleteProperty(e,n){const s=K(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&mt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ln(n)||!zc.has(n))&&Fe(e,"has",n),s}ownKeys(e){return Fe(e,"iterate",B(e)?"length":nn),Reflect.ownKeys(e)}}class Zh extends qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ef=new Kc,tf=new Zh,nf=new Kc(!0);const Xr=t=>t,bi=t=>Reflect.getPrototypeOf(t);function ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(Bt(e,r)&&Fe(i,"get",e),Fe(i,"get",r));const{has:o}=bi(i),l=s?Xr:n?eo:os;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ms(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(Bt(t,i)&&Fe(s,"has",t),Fe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ls(t,e=!1){return t=t.__v_raw,!e&&Fe(te(t),"iterate",nn),Reflect.get(t,"size",t)}function Xo(t){t=te(t);const e=te(this);return bi(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function Jo(t,e){e=te(e);const n=te(this),{has:s,get:i}=bi(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Bt(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function Zo(t){const e=te(this),{has:n,get:s}=bi(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&mt(e,"delete",t,void 0),r}function el(){const t=te(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function Fs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=te(o),c=e?Xr:t?eo:os;return!t&&Fe(l,"iterate",nn),o.forEach((a,h)=>s.call(i,c(a),c(h),r))}}function $s(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?Xr:e?eo:os;return!e&&Fe(r,"iterate",c?_r:nn),{next(){const{value:u,done:d}=a.next();return d?{value:u,done:d}:{value:l?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Rt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sf(){const t={get(r){return ks(this,r)},get size(){return Ls(this)},has:Ms,add:Xo,set:Jo,delete:Zo,clear:el,forEach:Fs(!1,!1)},e={get(r){return ks(this,r,!1,!0)},get size(){return Ls(this)},has:Ms,add:Xo,set:Jo,delete:Zo,clear:el,forEach:Fs(!1,!0)},n={get(r){return ks(this,r,!0)},get size(){return Ls(this,!0)},has(r){return Ms.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Fs(!0,!1)},s={get(r){return ks(this,r,!0,!0)},get size(){return Ls(this,!0)},has(r){return Ms.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$s(r,!1,!1),n[r]=$s(r,!0,!1),e[r]=$s(r,!1,!0),s[r]=$s(r,!0,!0)}),[t,n,e,s]}const[rf,of,lf,cf]=sf();function Jr(t,e){const n=e?t?cf:lf:t?of:rf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const af={get:Jr(!1,!1)},uf={get:Jr(!1,!0)},hf={get:Jr(!0,!1)};const Yc=new WeakMap,Qc=new WeakMap,Xc=new WeakMap,ff=new WeakMap;function df(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pf(t){return t.__v_skip||!Object.isExtensible(t)?0:df(Lh(t))}function wi(t){return rs(t)?t:Zr(t,!1,ef,af,Yc)}function Jc(t){return Zr(t,!1,nf,uf,Qc)}function Zc(t){return Zr(t,!0,tf,hf,Xc)}function Zr(t,e,n,s,i){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Kn(t){return rs(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function Ks(t){return!!(t&&t.__v_isShallow)}function ea(t){return t?!!t.__v_raw:!1}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function _f(t){return Object.isExtensible(t)&&Fc(t,"__v_skip",!0),t}const os=t=>fe(t)?wi(t):t,eo=t=>fe(t)?Zc(t):t;class ta{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Kr(()=>e(this._value),()=>Ws(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return(!e._cacheable||e.effect.dirty)&&Bt(e._value,e._value=e.effect.run())&&Ws(e,5),na(e),e.effect._dirtyLevel>=2&&Ws(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function gf(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Ve):(s=t.get,i=t.set),new ta(s,i,r||!i,n)}function na(t){var e;Dt&&tn&&(t=te(t),Vc(tn,(e=t.dep)!=null?e:t.dep=Gc(()=>t.dep=void 0,t instanceof ta?t:void 0)))}function Ws(t,e=5,n,s){t=te(t);const i=t.dep;i&&jc(i,e)}function $e(t){return!!(t&&t.__v_isRef===!0)}function ls(t){return sa(t,!1)}function mf(t){return sa(t,!0)}function sa(t,e){return $e(t)?t:new yf(t,e)}class yf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:os(e)}get value(){return na(this),this._value}set value(e){const n=this.__v_isShallow||Ks(e)||rs(e);e=n?e:te(e),Bt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:os(e),Ws(this,5))}}function Je(t){return $e(t)?t.value:t}const vf={get:(t,e,n)=>Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ia(t){return Kn(t)?t:new Proxy(t,vf)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kt(t,e,n,s){try{return s?t(...s):t()}catch(i){Ii(i,e,n)}}function Ze(t,e,n,s){if(W(t)){const i=kt(t,e,n,s);return i&&kc(i)&&i.catch(r=>{Ii(r,e,n)}),i}if(B(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}}function Ii(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const a=r.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){jt(),kt(c,null,10,[t,o,l]),Gt();return}}Ef(t,n,i,s)}function Ef(t,e,n,s=!0){console.error(t)}let cs=!1,gr=!1;const Ne=[];let ut=0;const vn=[];let Nt=null,Zt=0;const ra=Promise.resolve();let to=null;function oa(t){const e=to||ra;return t?e.then(this?t.bind(this):t):e}function Cf(t){let e=ut+1,n=Ne.length;for(;e<n;){const s=e+n>>>1,i=Ne[s],r=as(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function no(t){(!Ne.length||!Ne.includes(t,cs&&t.allowRecurse?ut+1:ut))&&(t.id==null?Ne.push(t):Ne.splice(Cf(t.id),0,t),la())}function la(){!cs&&!gr&&(gr=!0,to=ra.then(aa))}function bf(t){const e=Ne.indexOf(t);e>ut&&Ne.splice(e,1)}function wf(t){B(t)?vn.push(...t):(!Nt||!Nt.includes(t,t.allowRecurse?Zt+1:Zt))&&vn.push(t),la()}function tl(t,e,n=cs?ut+1:0){for(;n<Ne.length;n++){const s=Ne[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ne.splice(n,1),n--,s()}}}function ca(t){if(vn.length){const e=[...new Set(vn)].sort((n,s)=>as(n)-as(s));if(vn.length=0,Nt){Nt.push(...e);return}for(Nt=e,Zt=0;Zt<Nt.length;Zt++){const n=Nt[Zt];n.active!==!1&&n()}Nt=null,Zt=0}}const as=t=>t.id==null?1/0:t.id,If=(t,e)=>{const n=as(t)-as(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function aa(t){gr=!1,cs=!0,Ne.sort(If);try{for(ut=0;ut<Ne.length;ut++){const e=Ne[ut];e&&e.active!==!1&&kt(e,null,14)}}finally{ut=0,Ne.length=0,ca(),cs=!1,to=null,(Ne.length||vn.length)&&aa()}}function Sf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||ue;d&&(i=n.map(_=>ve(_)?_.trim():_)),u&&(i=n.map(Bh))}let l,c=s[l=Vi(e)]||s[l=Vi(ht(e))];!c&&r&&(c=s[l=Vi(An(e))]),c&&Ze(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(a,t,6,i)}}function ua(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const c=a=>{const h=ua(a,e,!0);h&&(l=!0,Ie(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(fe(t)&&s.set(t,null),null):(B(r)?r.forEach(c=>o[c]=null):Ie(o,r),fe(t)&&s.set(t,o),o)}function Si(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,An(e))||K(t,e))}let Te=null,Ti=null;function Ys(t){const e=Te;return Te=t,Ti=t&&t.type.__scopeId||null,e}function Pn(t){Ti=t}function On(){Ti=null}function Ke(t,e=Te,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dl(-1);const r=Ys(e);let o;try{o=t(...i)}finally{Ys(r),s._d&&dl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zi(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:h,props:u,data:d,setupState:_,ctx:C,inheritAttrs:S}=t,L=Ys(t);let $,k;try{if(n.shapeFlag&4){const Y=i||s,ge=Y;$=at(a.call(ge,Y,h,u,_,d,C)),k=l}else{const Y=e;$=at(Y.length>1?Y(u,{attrs:l,slots:o,emit:c}):Y(u,null)),k=e.props?l:Tf(l)}}catch(Y){Jn.length=0,Ii(Y,t,1),$=X(Ht)}let P=$;if(k&&S!==!1){const Y=Object.keys(k),{shapeFlag:ge}=P;Y.length&&ge&7&&(r&&Y.some(jr)&&(k=Rf(k,r)),P=wn(P,k,!1,!0))}return n.dirs&&(P=wn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),$=P,Ys(L),$}const Tf=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},Rf=(t,e)=>{const n={};for(const s in t)(!jr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?nl(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!Si(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?nl(s,o,a):!0:!!o;return!1}function nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Si(n,r))return!0}return!1}function Nf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ha="components";function so(t,e){return Pf(ha,t,!0,e)||t}const Af=Symbol.for("v-ndc");function Pf(t,e,n=!0,s=!1){const i=Te||Ae;if(i){const r=i.type;if(t===ha){const l=Rd(r,!1);if(l&&(l===e||l===ht(e)||l===Ci(ht(e))))return r}const o=sl(i[t]||r[t],e)||sl(i.appContext[t],e);return!o&&s?r:o}}function sl(t,e){return t&&(t[e]||t[ht(e)]||t[Ci(ht(e))])}const Of=t=>t.__isSuspense;function Df(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):wf(t)}function Ri(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{jt();const l=ws(n),c=Ze(e,n,t,o);return l(),Gt(),c});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=Ae)=>{(!Ai||t==="sp")&&Ri(t,(...s)=>e(...s),n)},kf=bt("bm"),io=bt("m"),Mf=bt("bu"),Lf=bt("u"),Ff=bt("bum"),fa=bt("um"),$f=bt("sp"),Bf=bt("rtg"),Hf=bt("rtc");function Uf(t,e=Ae){Ri("ec",t,e)}function Wf(t,e){if(Te===null)return t;const n=Pi(Te),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=ue]=e[i];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&Ot(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Yt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(jt(),Ze(c,n,8,[t.el,l,t,e]),Gt())}}function Vf(t,e,n,s){let i;const r=n;if(B(t)||ve(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(fe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function da(t,e){return W(t)?Ie({name:t.name},e,{setup:t}):t}const Yn=t=>!!t.type.__asyncLoader;function jf(t,e,n={},s,i){if(Te.isCE||Te.parent&&Yn(Te.parent)&&Te.parent.isCE)return X("slot",n,s);let r=t[e];r&&r._c&&(r._d=!1),ee();const o=r&&pa(r(n)),l=Ni(Me,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),l}function pa(t){return t.some(e=>Xs(e)?!(e.type===Ht||e.type===Me&&!pa(e.children)):!0)?t:null}const mr=t=>t?ka(t)?Pi(t):mr(t.parent):null,Qn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mr(t.parent),$root:t=>mr(t.root),$emit:t=>t.emit,$options:t=>ro(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,no(t.update)}),$nextTick:t=>t.n||(t.n=oa.bind(t.proxy)),$watch:t=>ud.bind(t)}),qi=(t,e)=>t!==ue&&!t.__isScriptSetup&&K(t,e),Gf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(qi(s,e))return o[e]=1,s[e];if(i!==ue&&K(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&K(a,e))return o[e]=3,r[e];if(n!==ue&&K(n,e))return o[e]=4,n[e];yr&&(o[e]=0)}}const h=Qn[e];let u,d;if(h)return e==="$attrs"&&Fe(t.attrs,"get",""),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==ue&&K(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,K(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return qi(i,e)?(i[e]=n,!0):s!==ue&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ue&&K(t,o)||qi(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(Qn,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function il(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yr=!0;function zf(t){const e=ro(t),n=t.proxy,s=t.ctx;yr=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:u,mounted:d,beforeUpdate:_,updated:C,activated:S,deactivated:L,beforeDestroy:$,beforeUnmount:k,destroyed:P,unmounted:Y,render:ge,renderTracked:V,renderTriggered:pe,errorCaptured:We,serverPrefetch:qt,expose:st,inheritAttrs:St,components:Kt,directives:it,filters:Ln}=e;if(a&&qf(a,s,null),o)for(const se in o){const J=o[se];W(J)&&(s[se]=J.bind(n))}if(i){const se=i.call(n,n);fe(se)&&(t.data=wi(se))}if(yr=!0,r)for(const se in r){const J=r[se],dt=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):Ve,Tt=!W(J)&&W(J.set)?J.set.bind(n):Ve,rt=ze({get:dt,set:Tt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>rt.value,set:De=>rt.value=De})}if(l)for(const se in l)_a(l[se],s,n,se);if(c){const se=W(c)?c.call(n):c;Reflect.ownKeys(se).forEach(J=>{Vs(J,se[J])})}h&&rl(h,t,"c");function Ee(se,J){B(J)?J.forEach(dt=>se(dt.bind(n))):J&&se(J.bind(n))}if(Ee(kf,u),Ee(io,d),Ee(Mf,_),Ee(Lf,C),Ee(hd,S),Ee(fd,L),Ee(Uf,We),Ee(Hf,V),Ee(Bf,pe),Ee(Ff,k),Ee(fa,Y),Ee($f,qt),B(st))if(st.length){const se=t.exposed||(t.exposed={});st.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:dt=>n[J]=dt})})}else t.exposed||(t.exposed={});ge&&t.render===Ve&&(t.render=ge),St!=null&&(t.inheritAttrs=St),Kt&&(t.components=Kt),it&&(t.directives=it)}function qf(t,e,n=Ve){B(t)&&(t=vr(t));for(const s in t){const i=t[s];let r;fe(i)?"default"in i?r=yt(i.from||s,i.default,!0):r=yt(i.from||s):r=yt(i),$e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rl(t,e,n){Ze(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _a(t,e,n,s){const i=s.includes(".")?xa(n,s):()=>n[s];if(ve(t)){const r=e[t];W(r)&&js(i,r)}else if(W(t))js(i,t.bind(n));else if(fe(t))if(B(t))t.forEach(r=>_a(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&js(i,r,t)}}function ro(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Qs(c,a,o,!0)),Qs(c,e,o)),fe(e)&&r.set(e,c),c}function Qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Qs(t,r,n,!0),i&&i.forEach(o=>Qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Kf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Kf={data:ol,props:ll,emits:ll,methods:zn,computed:zn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:zn,directives:zn,watch:Qf,provide:ol,inject:Yf};function ol(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Yf(t,e){return zn(vr(t),vr(e))}function vr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?Ie(Object.create(null),t,e):e}function ll(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Ie(Object.create(null),il(t),il(e??{})):e}function Qf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function ga(){return{app:null,config:{isNativeTag:kh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xf=0;function Jf(t,e){return function(s,i=null){W(s)||(s=Ie({},s)),i!=null&&!fe(i)&&(i=null);const r=ga(),o=new WeakSet;let l=!1;const c=r.app={_uid:Xf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Nd,get config(){return r.config},set config(a){},use(a,...h){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(c,...h)):W(a)&&(o.add(a),a(c,...h))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,h){return h?(r.components[a]=h,c):r.components[a]},directive(a,h){return h?(r.directives[a]=h,c):r.directives[a]},mount(a,h,u){if(!l){const d=X(s,i);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),h&&e?e(d,a):t(d,a,u),l=!0,c._container=a,a.__vue_app__=c,Pi(d.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,h){return r.provides[a]=h,c},runWithContext(a){const h=Xn;Xn=c;try{return a()}finally{Xn=h}}};return c}}let Xn=null;function Vs(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function yt(t,e,n=!1){const s=Ae||Te;if(s||Xn){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Xn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}const ma={},ya=()=>Object.create(ma),va=t=>Object.getPrototypeOf(t)===ma;function Zf(t,e,n,s=!1){const i={},r=ya();t.propsDefaults=Object.create(null),Ea(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ed(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=te(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Si(t.emitsOptions,d))continue;const _=e[d];if(c)if(K(r,d))_!==r[d]&&(r[d]=_,a=!0);else{const C=ht(d);i[C]=Er(c,l,C,_,t,!1)}else _!==r[d]&&(r[d]=_,a=!0)}}}else{Ea(t,e,i,r)&&(a=!0);let h;for(const u in l)(!e||!K(e,u)&&((h=An(u))===u||!K(e,h)))&&(c?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Er(c,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!K(e,u))&&(delete r[u],a=!0)}a&&mt(t.attrs,"set","")}function Ea(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(qn(c))continue;const a=e[c];let h;i&&K(i,h=ht(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:Si(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=te(n),a=l||ue;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Er(i,c,u,a[u],t,!K(a,u))}}return o}function Er(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const h=ws(i);s=a[n]=c.call(null,e),h()}}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===An(n))&&(s=!0))}return s}function Ca(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!W(t)){const h=u=>{c=!0;const[d,_]=Ca(u,e,!0);Ie(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return fe(t)&&s.set(t,gn),gn;if(B(r))for(let h=0;h<r.length;h++){const u=ht(r[h]);cl(u)&&(o[u]=ue)}else if(r)for(const h in r){const u=ht(h);if(cl(u)){const d=r[h],_=o[u]=B(d)||W(d)?{type:d}:Ie({},d);if(_){const C=hl(Boolean,_.type),S=hl(String,_.type);_[0]=C>-1,_[1]=S<0||C<S,(C>-1||K(_,"default"))&&l.push(u)}}}const a=[o,l];return fe(t)&&s.set(t,a),a}function cl(t){return t[0]!=="$"&&!qn(t)}function al(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ul(t,e){return al(t)===al(e)}function hl(t,e){return B(e)?e.findIndex(n=>ul(n,t)):W(e)&&ul(e,t)?0:-1}const ba=t=>t[0]==="_"||t==="$stable",oo=t=>B(t)?t.map(at):[at(t)],td=(t,e,n)=>{if(e._n)return e;const s=Ke((...i)=>oo(e(...i)),n);return s._c=!1,s},wa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ba(i))continue;const r=t[i];if(W(r))e[i]=td(i,r,s);else if(r!=null){const o=oo(r);e[i]=()=>o}}},Ia=(t,e)=>{const n=oo(e);t.slots.default=()=>n},nd=(t,e)=>{const n=t.slots=ya();if(t.vnode.shapeFlag&32){const s=e._;s?(Ie(n,e),Fc(n,"_",s,!0)):wa(e,n)}else e&&Ia(t,e)},sd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ie(i,e),!n&&l===1&&delete i._):(r=!e.$stable,wa(e,i)),o=e}else e&&(Ia(t,e),o={default:1});if(r)for(const l in i)!ba(l)&&o[l]==null&&delete i[l]};function Cr(t,e,n,s,i=!1){if(B(t)){t.forEach((d,_)=>Cr(d,e&&(B(e)?e[_]:e),n,s,i));return}if(Yn(s)&&!i)return;const r=s.shapeFlag&4?Pi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===ue?l.refs={}:l.refs,u=l.setupState;if(a!=null&&a!==c&&(ve(a)?(h[a]=null,K(u,a)&&(u[a]=null)):$e(a)&&(a.value=null)),W(c))kt(c,l,12,[o,h]);else{const d=ve(c),_=$e(c);if(d||_){const C=()=>{if(t.f){const S=d?K(u,c)?u[c]:h[c]:c.value;i?B(S)&&Gr(S,r):B(S)?S.includes(r)||S.push(r):d?(h[c]=[r],K(u,c)&&(u[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else d?(h[c]=o,K(u,c)&&(u[c]=o)):_&&(c.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,ke(C,n)):C()}}}const ke=Df;function id(t){return rd(t)}function rd(t,e){const n=$c();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:u,nextSibling:d,setScopeId:_=Ve,insertStaticContent:C}=t,S=(f,p,g,v=null,m=null,I=null,R=void 0,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!$n(f,p)&&(v=y(f),De(f,m,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:A,shapeFlag:M}=p;switch(E){case xi:L(f,p,g,v);break;case Ht:$(f,p,g,v);break;case Yi:f==null&&k(p,g,v,R);break;case Me:Kt(f,p,g,v,m,I,R,b,T);break;default:M&1?ge(f,p,g,v,m,I,R,b,T):M&6?it(f,p,g,v,m,I,R,b,T):(M&64||M&128)&&E.process(f,p,g,v,m,I,R,b,T,O)}A!=null&&m&&Cr(A,f&&f.ref,I,p||f,!p)},L=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const m=p.el=f.el;p.children!==f.children&&a(m,p.children)}},$=(f,p,g,v)=>{f==null?s(p.el=c(p.children||""),g,v):p.el=f.el},k=(f,p,g,v)=>{[f.el,f.anchor]=C(f.children,p,g,v,f.el,f.anchor)},P=({el:f,anchor:p},g,v)=>{let m;for(;f&&f!==p;)m=d(f),s(f,g,v),f=m;s(p,g,v)},Y=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},ge=(f,p,g,v,m,I,R,b,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?V(p,g,v,m,I,R,b,T):qt(f,p,m,I,R,b,T)},V=(f,p,g,v,m,I,R,b)=>{let T,E;const{props:A,shapeFlag:M,transition:D,dirs:U}=f;if(T=f.el=o(f.type,I,A&&A.is,A),M&8?h(T,f.children):M&16&&We(f.children,T,null,v,m,Ki(f,I),R,b),U&&Yt(f,null,v,"created"),pe(T,f,f.scopeId,R,v),A){for(const ce in A)ce!=="value"&&!qn(ce)&&r(T,ce,null,A[ce],I,f.children,v,m,Re);"value"in A&&r(T,"value",null,A.value,I),(E=A.onVnodeBeforeMount)&&lt(E,v,f)}U&&Yt(f,null,v,"beforeMount");const G=od(m,D);G&&D.beforeEnter(T),s(T,p,g),((E=A&&A.onVnodeMounted)||G||U)&&ke(()=>{E&&lt(E,v,f),G&&D.enter(T),U&&Yt(f,null,v,"mounted")},m)},pe=(f,p,g,v,m)=>{if(g&&_(f,g),v)for(let I=0;I<v.length;I++)_(f,v[I]);if(m){let I=m.subTree;if(p===I){const R=m.vnode;pe(f,R,R.scopeId,R.slotScopeIds,m.parent)}}},We=(f,p,g,v,m,I,R,b,T=0)=>{for(let E=T;E<f.length;E++){const A=f[E]=b?At(f[E]):at(f[E]);S(null,A,p,g,v,m,I,R,b)}},qt=(f,p,g,v,m,I,R)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:A}=p;T|=f.patchFlag&16;const M=f.props||ue,D=p.props||ue;let U;if(g&&Qt(g,!1),(U=D.onVnodeBeforeUpdate)&&lt(U,g,p,f),A&&Yt(p,f,g,"beforeUpdate"),g&&Qt(g,!0),E?st(f.dynamicChildren,E,b,g,v,Ki(p,m),I):R||J(f,p,b,null,g,v,Ki(p,m),I,!1),T>0){if(T&16)St(b,p,M,D,g,v,m);else if(T&2&&M.class!==D.class&&r(b,"class",null,D.class,m),T&4&&r(b,"style",M.style,D.style,m),T&8){const G=p.dynamicProps;for(let ce=0;ce<G.length;ce++){const Z=G[ce],Ce=M[Z],je=D[Z];(je!==Ce||Z==="value")&&r(b,Z,Ce,je,m,f.children,g,v,Re)}}T&1&&f.children!==p.children&&h(b,p.children)}else!R&&E==null&&St(b,p,M,D,g,v,m);((U=D.onVnodeUpdated)||A)&&ke(()=>{U&&lt(U,g,p,f),A&&Yt(p,f,g,"updated")},v)},st=(f,p,g,v,m,I,R)=>{for(let b=0;b<p.length;b++){const T=f[b],E=p[b],A=T.el&&(T.type===Me||!$n(T,E)||T.shapeFlag&70)?u(T.el):g;S(T,E,A,null,v,m,I,R,!0)}},St=(f,p,g,v,m,I,R)=>{if(g!==v){if(g!==ue)for(const b in g)!qn(b)&&!(b in v)&&r(f,b,g[b],null,R,p.children,m,I,Re);for(const b in v){if(qn(b))continue;const T=v[b],E=g[b];T!==E&&b!=="value"&&r(f,b,E,T,R,p.children,m,I,Re)}"value"in v&&r(f,"value",g.value,v.value,R)}},Kt=(f,p,g,v,m,I,R,b,T)=>{const E=p.el=f?f.el:l(""),A=p.anchor=f?f.anchor:l("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:U}=p;U&&(b=b?b.concat(U):U),f==null?(s(E,g,v),s(A,g,v),We(p.children||[],g,A,m,I,R,b,T)):M>0&&M&64&&D&&f.dynamicChildren?(st(f.dynamicChildren,D,g,m,I,R,b),(p.key!=null||m&&p===m.subTree)&&Sa(f,p,!0)):J(f,p,g,A,m,I,R,b,T)},it=(f,p,g,v,m,I,R,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,g,v,R,T):Ln(p,g,v,m,I,R,T):an(f,p,T)},Ln=(f,p,g,v,m,I,R)=>{const b=f.component=bd(f,v,m);if(Na(f)&&(b.ctx.renderer=O),wd(b),b.asyncDep){if(m&&m.registerDep(b,Ee,R),!f.el){const T=b.subTree=X(Ht);$(null,T,p,g)}}else Ee(b,f,p,g,m,I,R)},an=(f,p,g)=>{const v=p.component=f.component;if(xf(f,p,g))if(v.asyncDep&&!v.asyncResolved){se(v,p,g);return}else v.next=p,bf(v.update),v.effect.dirty=!0,v.update();else p.el=f.el,v.vnode=p},Ee=(f,p,g,v,m,I,R)=>{const b=()=>{if(f.isMounted){let{next:A,bu:M,u:D,parent:U,vnode:G}=f;{const fn=Ta(f);if(fn){A&&(A.el=G.el,se(f,A,R)),fn.asyncDep.then(()=>{f.isUnmounted||b()});return}}let ce=A,Z;Qt(f,!1),A?(A.el=G.el,se(f,A,R)):A=G,M&&ji(M),(Z=A.props&&A.props.onVnodeBeforeUpdate)&&lt(Z,U,A,G),Qt(f,!0);const Ce=zi(f),je=f.subTree;f.subTree=Ce,S(je,Ce,u(je.el),y(je),f,m,I),A.el=Ce.el,ce===null&&Nf(f,Ce.el),D&&ke(D,m),(Z=A.props&&A.props.onVnodeUpdated)&&ke(()=>lt(Z,U,A,G),m)}else{let A;const{el:M,props:D}=p,{bm:U,m:G,parent:ce}=f,Z=Yn(p);if(Qt(f,!1),U&&ji(U),!Z&&(A=D&&D.onVnodeBeforeMount)&&lt(A,ce,p),Qt(f,!0),M&&de){const Ce=()=>{f.subTree=zi(f),de(M,f.subTree,f,m,null)};Z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=zi(f);S(null,Ce,g,v,f,m,I),p.el=Ce.el}if(G&&ke(G,m),!Z&&(A=D&&D.onVnodeMounted)){const Ce=p;ke(()=>lt(A,ce,Ce),m)}(p.shapeFlag&256||ce&&Yn(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&ke(f.a,m),f.isMounted=!0,p=g=v=null}},T=f.effect=new Kr(b,Ve,()=>no(E),f.scope),E=f.update=()=>{T.dirty&&T.run()};E.id=f.uid,Qt(f,!0),E()},se=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,ed(f,p.props,v,g),sd(f,p.children,g),jt(),tl(f),Gt()},J=(f,p,g,v,m,I,R,b,T=!1)=>{const E=f&&f.children,A=f?f.shapeFlag:0,M=p.children,{patchFlag:D,shapeFlag:U}=p;if(D>0){if(D&128){Tt(E,M,g,v,m,I,R,b,T);return}else if(D&256){dt(E,M,g,v,m,I,R,b,T);return}}U&8?(A&16&&Re(E,m,I),M!==E&&h(g,M)):A&16?U&16?Tt(E,M,g,v,m,I,R,b,T):Re(E,m,I,!0):(A&8&&h(g,""),U&16&&We(M,g,v,m,I,R,b,T))},dt=(f,p,g,v,m,I,R,b,T)=>{f=f||gn,p=p||gn;const E=f.length,A=p.length,M=Math.min(E,A);let D;for(D=0;D<M;D++){const U=p[D]=T?At(p[D]):at(p[D]);S(f[D],U,g,null,m,I,R,b,T)}E>A?Re(f,m,I,!0,!1,M):We(p,g,v,m,I,R,b,T,M)},Tt=(f,p,g,v,m,I,R,b,T)=>{let E=0;const A=p.length;let M=f.length-1,D=A-1;for(;E<=M&&E<=D;){const U=f[E],G=p[E]=T?At(p[E]):at(p[E]);if($n(U,G))S(U,G,g,null,m,I,R,b,T);else break;E++}for(;E<=M&&E<=D;){const U=f[M],G=p[D]=T?At(p[D]):at(p[D]);if($n(U,G))S(U,G,g,null,m,I,R,b,T);else break;M--,D--}if(E>M){if(E<=D){const U=D+1,G=U<A?p[U].el:v;for(;E<=D;)S(null,p[E]=T?At(p[E]):at(p[E]),g,G,m,I,R,b,T),E++}}else if(E>D)for(;E<=M;)De(f[E],m,I,!0),E++;else{const U=E,G=E,ce=new Map;for(E=G;E<=D;E++){const He=p[E]=T?At(p[E]):at(p[E]);He.key!=null&&ce.set(He.key,E)}let Z,Ce=0;const je=D-G+1;let fn=!1,jo=0;const Fn=new Array(je);for(E=0;E<je;E++)Fn[E]=0;for(E=U;E<=M;E++){const He=f[E];if(Ce>=je){De(He,m,I,!0);continue}let ot;if(He.key!=null)ot=ce.get(He.key);else for(Z=G;Z<=D;Z++)if(Fn[Z-G]===0&&$n(He,p[Z])){ot=Z;break}ot===void 0?De(He,m,I,!0):(Fn[ot-G]=E+1,ot>=jo?jo=ot:fn=!0,S(He,p[ot],g,null,m,I,R,b,T),Ce++)}const Go=fn?ld(Fn):gn;for(Z=Go.length-1,E=je-1;E>=0;E--){const He=G+E,ot=p[He],zo=He+1<A?p[He+1].el:v;Fn[E]===0?S(null,ot,g,zo,m,I,R,b,T):fn&&(Z<0||E!==Go[Z]?rt(ot,g,zo,2):Z--)}}},rt=(f,p,g,v,m=null)=>{const{el:I,type:R,transition:b,children:T,shapeFlag:E}=f;if(E&6){rt(f.component.subTree,p,g,v);return}if(E&128){f.suspense.move(p,g,v);return}if(E&64){R.move(f,p,g,O);return}if(R===Me){s(I,p,g);for(let M=0;M<T.length;M++)rt(T[M],p,g,v);s(f.anchor,p,g);return}if(R===Yi){P(f,p,g);return}if(v!==2&&E&1&&b)if(v===0)b.beforeEnter(I),s(I,p,g),ke(()=>b.enter(I),m);else{const{leave:M,delayLeave:D,afterLeave:U}=b,G=()=>s(I,p,g),ce=()=>{M(I,()=>{G(),U&&U()})};D?D(I,G,ce):ce()}else s(I,p,g)},De=(f,p,g,v=!1,m=!1)=>{const{type:I,props:R,ref:b,children:T,dynamicChildren:E,shapeFlag:A,patchFlag:M,dirs:D,memoIndex:U}=f;if(b!=null&&Cr(b,null,g,f,!0),U!=null&&(p.renderCache[U]=void 0),A&256){p.ctx.deactivate(f);return}const G=A&1&&D,ce=!Yn(f);let Z;if(ce&&(Z=R&&R.onVnodeBeforeUnmount)&&lt(Z,p,f),A&6)Ds(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}G&&Yt(f,null,p,"beforeUnmount"),A&64?f.type.remove(f,p,g,m,O,v):E&&(I!==Me||M>0&&M&64)?Re(E,p,g,!1,!0):(I===Me&&M&384||!m&&A&16)&&Re(T,p,g),v&&un(f)}(ce&&(Z=R&&R.onVnodeUnmounted)||G)&&ke(()=>{Z&&lt(Z,p,f),G&&Yt(f,null,p,"unmounted")},g)},un=f=>{const{type:p,el:g,anchor:v,transition:m}=f;if(p===Me){hn(g,v);return}if(p===Yi){Y(f);return}const I=()=>{i(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:R,delayLeave:b}=m,T=()=>R(g,I);b?b(f.el,I,T):T()}else I()},hn=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ds=(f,p,g)=>{const{bum:v,scope:m,update:I,subTree:R,um:b,m:T,a:E}=f;fl(T),fl(E),v&&ji(v),m.stop(),I&&(I.active=!1,De(R,f,p,g)),b&&ke(b,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Re=(f,p,g,v=!1,m=!1,I=0)=>{for(let R=I;R<f.length;R++)De(f[R],p,g,v,m)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let N=!1;const x=(f,p,g)=>{f==null?p._vnode&&De(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,g),N||(N=!0,tl(),ca(),N=!1),p._vnode=f},O={p:S,um:De,m:rt,r:un,mt:Ln,mc:We,pc:J,pbc:st,n:y,o:t};let ne,de;return{render:x,hydrate:ne,createApp:Jf(x,ne)}}function Ki({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function od(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sa(t,e,n=!1){const s=t.children,i=e.children;if(B(s)&&B(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Sa(o,l)),l.type===xi&&(l.el=o.el)}}function ld(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ta(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ta(e)}function fl(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const cd=Symbol.for("v-scx"),ad=()=>yt(cd),Bs={};function js(t,e,n){return Ra(t,e,n)}function Ra(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=ue){if(e&&r){const V=e;e=(...pe)=>{V(...pe),ge()}}const c=Ae,a=V=>s===!0?V:Ot(V,s===!1?1:void 0);let h,u=!1,d=!1;if($e(t)?(h=()=>t.value,u=Ks(t)):Kn(t)?(h=()=>a(t),u=!0):B(t)?(d=!0,u=t.some(V=>Kn(V)||Ks(V)),h=()=>t.map(V=>{if($e(V))return V.value;if(Kn(V))return a(V);if(W(V))return kt(V,c,2)})):W(t)?e?h=()=>kt(t,c,2):h=()=>(_&&_(),Ze(t,c,3,[C])):h=Ve,e&&s){const V=h;h=()=>Ot(V())}let _,C=V=>{_=P.onStop=()=>{kt(V,c,4),_=P.onStop=void 0}},S;if(Ai)if(C=Ve,e?n&&Ze(e,c,3,[h(),d?[]:void 0,C]):h(),i==="sync"){const V=ad();S=V.__watcherHandles||(V.__watcherHandles=[])}else return Ve;let L=d?new Array(t.length).fill(Bs):Bs;const $=()=>{if(!(!P.active||!P.dirty))if(e){const V=P.run();(s||u||(d?V.some((pe,We)=>Bt(pe,L[We])):Bt(V,L)))&&(_&&_(),Ze(e,c,3,[V,L===Bs?void 0:d&&L[0]===Bs?[]:L,C]),L=V)}else P.run()};$.allowRecurse=!!e;let k;i==="sync"?k=$:i==="post"?k=()=>ke($,c&&c.suspense):($.pre=!0,c&&($.id=c.uid),k=()=>no($));const P=new Kr(h,Ve,k),Y=Kh(),ge=()=>{P.stop(),Y&&Gr(Y.effects,P)};return e?n?$():L=P.run():i==="post"?ke(P.run.bind(P),c&&c.suspense):P.run(),S&&S.push(ge),ge}function ud(t,e,n){const s=this.proxy,i=ve(t)?t.includes(".")?xa(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=ws(this),l=Ra(i,r.bind(s),n);return o(),l}function xa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ot(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))Ot(t.value,e,n);else if(B(t))for(let s=0;s<t.length;s++)Ot(t[s],e,n);else if(Dc(t)||mn(t))t.forEach(s=>{Ot(s,e,n)});else if(Lc(t)){for(const s in t)Ot(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ot(t[s],e,n)}return t}const Na=t=>t.type.__isKeepAlive;function hd(t,e){Aa(t,"a",e)}function fd(t,e){Aa(t,"da",e)}function Aa(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ri(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Na(i.parent.vnode)&&dd(s,e,n,i),i=i.parent}}function dd(t,e,n,s){const i=Ri(e,t,s,!0);fa(()=>{Gr(s[e],i)},n)}function Pa(t,e){t.shapeFlag&6&&t.component?Pa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const pd=t=>t.__isTeleport,Me=Symbol.for("v-fgt"),xi=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),Jn=[];let Ye=null;function ee(t=!1){Jn.push(Ye=t?null:[])}function _d(){Jn.pop(),Ye=Jn[Jn.length-1]||null}let us=1;function dl(t){us+=t}function Oa(t){return t.dynamicChildren=us>0?Ye||gn:null,_d(),us>0&&Ye&&Ye.push(t),t}function oe(t,e,n,s,i,r){return Oa(H(t,e,n,s,i,r,!0))}function Ni(t,e,n,s,i){return Oa(X(t,e,n,s,i,!0))}function Xs(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Da=({key:t})=>t??null,Gs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||$e(t)||W(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,i=null,r=t===Me?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Da(e),ref:e&&Gs(e),scopeId:Ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return l?(lo(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),us>0&&!o&&Ye&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ye.push(c),c}const X=gd;function gd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Af)&&(t=Ht),Xs(t)){const l=wn(t,e,!0);return n&&lo(l,n),us>0&&!r&&Ye&&(l.shapeFlag&6?Ye[Ye.indexOf(t)]=l:Ye.push(l)),l.patchFlag=-2,l}if(xd(t)&&(t=t.__vccOpts),e){e=md(e);let{class:l,style:c}=e;l&&!ve(l)&&(e.class=qr(l)),fe(c)&&(ea(c)&&!B(c)&&(c=Ie({},c)),e.style=yn(c))}const o=ve(t)?1:Of(t)?128:pd(t)?64:fe(t)?4:W(t)?2:0;return H(t,e,n,s,i,o,r,!0)}function md(t){return t?ea(t)||va(t)?Ie({},t):t:null}function wn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?vd(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Da(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Gs(e)):[r,Gs(e)]:Gs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wn(t.ssContent),ssFallback:t.ssFallback&&wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Pa(h,c.clone(h)),h}function et(t=" ",e=0){return X(xi,null,t,e)}function yd(t="",e=!1){return e?(ee(),Ni(Ht,null,t)):X(Ht,null,t)}function at(t){return t==null||typeof t=="boolean"?X(Ht):B(t)?X(Me,null,t.slice()):typeof t=="object"?At(t):X(xi,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wn(t)}function lo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),lo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!va(e)?e._ctx=Te:i===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),s&64?(n=16,e=[et(e)]):n=8);t.children=e,t.shapeFlag|=n}function vd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qr([e.class,s.class]));else if(i==="style")e.style=yn([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){Ze(t,e,7,[n,s])}const Ed=ga();let Cd=0;function bd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Ed,r={uid:Cd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ca(s,i),emitsOptions:ua(s,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sf.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,Js,br;{const t=$c(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Js=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),br=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const ws=t=>{const e=Ae;return Js(t),t.scope.on(),()=>{t.scope.off(),Js(e)}},pl=()=>{Ae&&Ae.scope.off(),Js(null)};function ka(t){return t.vnode.shapeFlag&4}let Ai=!1;function wd(t,e=!1){e&&br(e);const{props:n,children:s}=t.vnode,i=ka(t);Zf(t,n,i,e),nd(t,s);const r=i?Id(t,e):void 0;return e&&br(!1),r}function Id(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Gf);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Td(t):null,r=ws(t);jt();const o=kt(s,t,0,[t.props,i]);if(Gt(),r(),kc(o)){if(o.then(pl,pl),e)return o.then(l=>{_l(t,l,e)}).catch(l=>{Ii(l,t,0)});t.asyncDep=o}else _l(t,o,e)}else Ma(t,e)}function _l(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=ia(e)),Ma(t,n)}let gl;function Ma(t,e,n){const s=t.type;if(!t.render){if(!e&&gl&&!s.render){const i=s.template||ro(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=Ie(Ie({isCustomElement:r,delimiters:l},o),c);s.render=gl(i,a)}}t.render=s.render||Ve}{const i=ws(t);jt();try{zf(t)}finally{Gt(),i()}}}const Sd={get(t,e){return Fe(t,"get",""),t[e]}};function Td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Pi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ia(_f(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qn)return Qn[n](t)},has(e,n){return n in e||n in Qn}})):t.proxy}function Rd(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function xd(t){return W(t)&&"__vccOpts"in t}const ze=(t,e)=>gf(t,e,Ai);function La(t,e,n){const s=arguments.length;return s===2?fe(e)&&!B(e)?Xs(e)?X(t,null,[e]):X(t,e):X(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xs(n)&&(n=[n]),X(t,e,n))}const Nd="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ad="http://www.w3.org/2000/svg",Pd="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,ml=_t&&_t.createElement("template"),Od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?_t.createElementNS(Ad,t):e==="mathml"?_t.createElementNS(Pd,t):n?_t.createElement(t,{is:n}):_t.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ml.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=ml.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dd=Symbol("_vtc");function kd(t,e,n){const s=t[Dd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zs=Symbol("_vod"),Fa=Symbol("_vsh"),Md={beforeMount(t,{value:e},{transition:n}){t[Zs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Bn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Bn(t,!0),s.enter(t)):s.leave(t,()=>{Bn(t,!1)}):Bn(t,e))},beforeUnmount(t,{value:e}){Bn(t,e)}};function Bn(t,e){t.style.display=e?t[Zs]:"none",t[Fa]=!e}const Ld=Symbol(""),Fd=/(^|;)\s*display\s*:/;function $d(t,e,n){const s=t.style,i=ve(n);let r=!1;if(n&&!i){if(e)if(ve(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&zs(s,l,"")}else for(const o in e)n[o]==null&&zs(s,o,"");for(const o in n)o==="display"&&(r=!0),zs(s,o,n[o])}else if(i){if(e!==n){const o=s[Ld];o&&(n+=";"+o),s.cssText=n,r=Fd.test(n)}}else e&&t.removeAttribute("style");Zs in t&&(t[Zs]=r?s.display:"",t[Fa]&&(s.display="none"))}const yl=/\s*!important$/;function zs(t,e,n){if(B(n))n.forEach(s=>zs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Bd(t,e);yl.test(n)?t.setProperty(An(s),n.replace(yl,""),"important"):t[s]=n}}const vl=["Webkit","Moz","ms"],Qi={};function Bd(t,e){const n=Qi[e];if(n)return n;let s=ht(e);if(s!=="filter"&&s in t)return Qi[e]=s;s=Ci(s);for(let i=0;i<vl.length;i++){const r=vl[i]+s;if(r in t)return Qi[e]=r}return e}const El="http://www.w3.org/1999/xlink";function Cl(t,e,n,s,i,r=Gh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(El,e.slice(6,e.length)):t.setAttributeNS(El,e,n):n==null||r&&!Bc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":String(n))}function Hd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?"":String(n);(a!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bc(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ud(t,e,n,s){t.addEventListener(e,n,s)}function Wd(t,e,n,s){t.removeEventListener(e,n,s)}const bl=Symbol("_vei");function Vd(t,e,n,s,i=null){const r=t[bl]||(t[bl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=jd(e);if(s){const a=r[e]=qd(s,i);Ud(t,l,a,c)}else o&&(Wd(t,l,o,c),r[e]=void 0)}}const wl=/(?:Once|Passive|Capture)$/;function jd(t){let e;if(wl.test(t)){e={};let s;for(;s=t.match(wl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):An(t.slice(2)),e]}let Xi=0;const Gd=Promise.resolve(),zd=()=>Xi||(Gd.then(()=>Xi=0),Xi=Date.now());function qd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(Kd(s,n.value),e,5,[s])};return n.value=t,n.attached=zd(),n}function Kd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yd=(t,e,n,s,i,r,o,l,c)=>{const a=i==="svg";e==="class"?kd(t,s,a):e==="style"?$d(t,n,s):yi(e)?jr(e)||Vd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qd(t,e,s,a))?(Hd(t,e,s,r,o,l,c),(e==="value"||e==="checked"||e==="selected")&&Cl(t,e,s,a,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cl(t,e,s,a))};function Qd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Il(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Il(e)&&ve(n)?!1:e in t}const Xd=Ie({patchProp:Yd},Od);let Sl;function Jd(){return Sl||(Sl=id(Xd))}const Zd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,ep(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ep(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tp(t){return ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hn=typeof document<"u";function np(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ji(t,e){const n={};for(const s in e){const i=e[s];n[s]=nt(i)?i.map(t):t(i)}return n}const Zn=()=>{},nt=Array.isArray,$a=/#/g,sp=/&/g,ip=/\//g,rp=/=/g,op=/\?/g,Ba=/\+/g,lp=/%5B/g,cp=/%5D/g,Ha=/%5E/g,ap=/%60/g,Ua=/%7B/g,up=/%7C/g,Wa=/%7D/g,hp=/%20/g;function co(t){return encodeURI(""+t).replace(up,"|").replace(lp,"[").replace(cp,"]")}function fp(t){return co(t).replace(Ua,"{").replace(Wa,"}").replace(Ha,"^")}function wr(t){return co(t).replace(Ba,"%2B").replace(hp,"+").replace($a,"%23").replace(sp,"%26").replace(ap,"`").replace(Ua,"{").replace(Wa,"}").replace(Ha,"^")}function dp(t){return wr(t).replace(rp,"%3D")}function pp(t){return co(t).replace($a,"%23").replace(op,"%3F")}function _p(t){return t==null?"":pp(t).replace(ip,"%2F")}function hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zi(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=vp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:hs(o)}}function gp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&In(e.matched[s],n.matched[i])&&Va(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Va(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yp(t[n],e[n]))return!1;return!0}function yp(t,e){return nt(t)?Tl(t,e):nt(e)?Tl(e,t):t===e}function Tl(t,e){return nt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var Rl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rl||(Rl={}));function Ep(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Cp=()=>({left:window.scrollX,top:window.scrollY});function bp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Ep(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xl(t,e){return(history.state?history.state.position-e:-1)+t}const Ir=new Map;function wp(t,e){Ir.set(t,e)}function Ip(t){const e=Ir.get(t);return Ir.delete(t),e}function Sp(t){return typeof t=="string"||t&&typeof t=="object"}function ja(t){return typeof t=="string"||typeof t=="symbol"}const Ga=Symbol("");var Nl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nl||(Nl={}));function Sn(t,e){return he(new Error,{type:t,[Ga]:!0},e)}function pt(t,e){return t instanceof Error&&Ga in t&&(e==null||!!(t.type&e))}const Al="[^/]+?",Tp={sensitive:!1,strict:!1,start:!0,end:!0},Rp=/[.+*?^${}()[\]/\\]/g;function xp(t,e){const n=he({},Tp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const h=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let u=0;u<a.length;u++){const d=a[u];let _=40+(n.sensitive?.25:0);if(d.type===0)u||(i+="/"),i+=d.value.replace(Rp,"\\$&"),_+=40;else if(d.type===1){const{value:C,repeatable:S,optional:L,regexp:$}=d;r.push({name:C,repeatable:S,optional:L});const k=$||Al;if(k!==Al){_+=10;try{new RegExp(`(${k})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+Y.message)}}let P=S?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;u||(P=L&&a.length<2?`(?:/${P})`:"/"+P),L&&(P+="?"),i+=P,_+=20,L&&(_+=-8),S&&(_+=-20),k===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const h=a.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const _=h[d]||"",C=r[d-1];u[C.name]=_&&C.repeatable?_.split("/"):_}return u}function c(a){let h="",u=!1;for(const d of t){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const _ of d)if(_.type===0)h+=_.value;else if(_.type===1){const{value:C,repeatable:S,optional:L}=_,$=C in a?a[C]:"";if(nt($)&&!S)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=nt($)?$.join("/"):$;if(!k)if(L)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${C}"`);h+=k}}return h||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Np(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function za(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Np(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Pl(s))return 1;if(Pl(i))return-1}return i.length-s.length}function Pl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ap={type:0,value:""},Pp=/[a-zA-Z0-9_]/;function Op(t){if(!t)return[[]];if(t==="/")return[[Ap]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",h="";function u(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function d(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&u(),o()):c===":"?(u(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Pp.test(c)?d():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),u(),o(),i}function Dp(t,e,n){const s=xp(Op(t.path),n),i=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function kp(t,e){const n=[],s=new Map;e=kl({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,_){const C=!_,S=Mp(u);S.aliasOf=_&&_.record;const L=kl(e,u),$=[S];if("alias"in u){const Y=typeof u.alias=="string"?[u.alias]:u.alias;for(const ge of Y)$.push(he({},S,{components:_?_.record.components:S.components,path:ge,aliasOf:_?_.record:S}))}let k,P;for(const Y of $){const{path:ge}=Y;if(d&&ge[0]!=="/"){const V=d.record.path,pe=V[V.length-1]==="/"?"":"/";Y.path=d.record.path+(ge&&pe+ge)}if(k=Dp(Y,d,L),_?_.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),C&&u.name&&!Dl(k)&&o(u.name)),qa(k)&&c(k),S.children){const V=S.children;for(let pe=0;pe<V.length;pe++)r(V[pe],k,_&&_.children[pe])}_=_||k}return P?()=>{o(P)}:Zn}function o(u){if(ja(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){const d=$p(u,n);n.splice(d,0,u),u.record.name&&!Dl(u)&&s.set(u.record.name,u)}function a(u,d){let _,C={},S,L;if("name"in u&&u.name){if(_=s.get(u.name),!_)throw Sn(1,{location:u});L=_.record.name,C=he(Ol(d.params,_.keys.filter(P=>!P.optional).concat(_.parent?_.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),u.params&&Ol(u.params,_.keys.map(P=>P.name))),S=_.stringify(C)}else if(u.path!=null)S=u.path,_=n.find(P=>P.re.test(S)),_&&(C=_.parse(S),L=_.record.name);else{if(_=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!_)throw Sn(1,{location:u,currentLocation:d});L=_.record.name,C=he({},d.params,u.params),S=_.stringify(C)}const $=[];let k=_;for(;k;)$.unshift(k.record),k=k.parent;return{name:L,path:S,params:C,matched:$,meta:Fp($)}}t.forEach(u=>r(u));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:a,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:i}}function Ol(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Mp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Lp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Lp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Dl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fp(t){return t.reduce((e,n)=>he(e,n.meta),{})}function kl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function $p(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;za(t,e[r])<0?s=r:n=r+1}const i=Bp(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Bp(t){let e=t;for(;e=e.parent;)if(qa(e)&&za(t,e)===0)return e}function qa({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Hp(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ba," "),o=r.indexOf("="),l=hs(o<0?r:r.slice(0,o)),c=o<0?null:hs(r.slice(o+1));if(l in e){let a=e[l];nt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function Ml(t){let e="";for(let n in t){const s=t[n];if(n=dp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(nt(s)?s.map(r=>r&&wr(r)):[s&&wr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Up(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Wp=Symbol(""),Ll=Symbol(""),ao=Symbol(""),Ka=Symbol(""),Sr=Symbol("");function Un(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const a=d=>{d===!1?c(Sn(4,{from:n,to:e})):d instanceof Error?c(d):Sp(d)?c(Sn(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),l())},h=r(()=>t.call(s&&s.instances[i],e,n,a));let u=Promise.resolve(h);t.length<3&&(u=u.then(a)),u.catch(d=>c(d))})}function er(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Vp(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Pt(h,n,s,o,l,i))}else{let a=c();r.push(()=>a.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const u=np(h)?h.default:h;o.components[l]=u;const _=(u.__vccOpts||u)[e];return _&&Pt(_,n,s,o,l,i)()}))}}return r}function Vp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fl(t){const e=yt(ao),n=yt(Ka),s=ze(()=>{const c=Je(t.to);return e.resolve(c)}),i=ze(()=>{const{matched:c}=s.value,{length:a}=c,h=c[a-1],u=n.matched;if(!h||!u.length)return-1;const d=u.findIndex(In.bind(null,h));if(d>-1)return d;const _=$l(c[a-2]);return a>1&&$l(h)===_&&u[u.length-1].path!==_?u.findIndex(In.bind(null,c[a-2])):d}),r=ze(()=>i.value>-1&&zp(n.params,s.value.params)),o=ze(()=>i.value>-1&&i.value===n.matched.length-1&&Va(n.params,s.value.params));function l(c={}){return Gp(c)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Zn):Promise.resolve()}return{route:s,href:ze(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const jp=da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fl,setup(t,{slots:e}){const n=wi(Fl(t)),{options:s}=yt(ao),i=ze(()=>({[Bl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:La("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),uo=jp;function Gp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zp(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function $l(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bl=(t,e,n)=>t??e??n,qp=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yt(Sr),i=ze(()=>t.route||s.value),r=yt(Ll,0),o=ze(()=>{let a=Je(r);const{matched:h}=i.value;let u;for(;(u=h[a])&&!u.components;)a++;return a}),l=ze(()=>i.value.matched[o.value]);Vs(Ll,ze(()=>o.value+1)),Vs(Wp,l),Vs(Sr,i);const c=ls();return js(()=>[c.value,l.value,t.name],([a,h,u],[d,_,C])=>{h&&(h.instances[u]=a,_&&_!==h&&a&&a===d&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),a&&h&&(!_||!In(h,_)||!d)&&(h.enterCallbacks[u]||[]).forEach(S=>S(a))},{flush:"post"}),()=>{const a=i.value,h=t.name,u=l.value,d=u&&u.components[h];if(!d)return Hl(n.default,{Component:d,route:a});const _=u.props[h],C=_?_===!0?a.params:typeof _=="function"?_(a):_:null,L=La(d,he({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(u.instances[h]=null)},ref:c}));return Hl(n.default,{Component:L,route:a})||L}}});function Hl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ya=qp;function Kp(t){const e=kp(t.routes,t),n=t.parseQuery||Hp,s=t.stringifyQuery||Ml,i=t.history,r=Un(),o=Un(),l=Un(),c=mf(xt);let a=xt;Hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ji.bind(null,y=>""+y),u=Ji.bind(null,_p),d=Ji.bind(null,hs);function _(y,N){let x,O;return ja(y)?(x=e.getRecordMatcher(y),O=N):O=y,e.addRoute(O,x)}function C(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(y=>y.record)}function L(y){return!!e.getRecordMatcher(y)}function $(y,N){if(N=he({},N||c.value),typeof y=="string"){const p=Zi(n,y,N.path),g=e.resolve({path:p.path},N),v=i.createHref(p.fullPath);return he(p,g,{params:d(g.params),hash:hs(p.hash),redirectedFrom:void 0,href:v})}let x;if(y.path!=null)x=he({},y,{path:Zi(n,y.path,N.path).path});else{const p=he({},y.params);for(const g in p)p[g]==null&&delete p[g];x=he({},y,{params:u(p)}),N.params=u(N.params)}const O=e.resolve(x,N),ne=y.hash||"";O.params=h(d(O.params));const de=gp(s,he({},y,{hash:fp(ne),path:O.path})),f=i.createHref(de);return he({fullPath:de,hash:ne,query:s===Ml?Up(y.query):y.query||{}},O,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?Zi(n,y,c.value.path):he({},y)}function P(y,N){if(a!==y)return Sn(8,{from:N,to:y})}function Y(y){return pe(y)}function ge(y){return Y(he(k(y),{replace:!0}))}function V(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:x}=N;let O=typeof x=="function"?x(y):x;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=k(O):{path:O},O.params={}),he({query:y.query,hash:y.hash,params:O.path!=null?{}:y.params},O)}}function pe(y,N){const x=a=$(y),O=c.value,ne=y.state,de=y.force,f=y.replace===!0,p=V(x);if(p)return pe(he(k(p),{state:typeof p=="object"?he({},ne,p.state):ne,force:de,replace:f}),N||x);const g=x;g.redirectedFrom=N;let v;return!de&&mp(s,O,x)&&(v=Sn(16,{to:g,from:O}),rt(O,O,!0,!1)),(v?Promise.resolve(v):st(g,O)).catch(m=>pt(m)?pt(m,2)?m:Tt(m):J(m,g,O)).then(m=>{if(m){if(pt(m,2))return pe(he({replace:f},k(m.to),{state:typeof m.to=="object"?he({},ne,m.to.state):ne,force:de}),N||g)}else m=Kt(g,O,!0,f,ne);return St(g,O,m),m})}function We(y,N){const x=P(y,N);return x?Promise.reject(x):Promise.resolve()}function qt(y){const N=hn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function st(y,N){let x;const[O,ne,de]=Yp(y,N);x=er(O.reverse(),"beforeRouteLeave",y,N);for(const p of O)p.leaveGuards.forEach(g=>{x.push(Pt(g,y,N))});const f=We.bind(null,y,N);return x.push(f),Re(x).then(()=>{x=[];for(const p of r.list())x.push(Pt(p,y,N));return x.push(f),Re(x)}).then(()=>{x=er(ne,"beforeRouteUpdate",y,N);for(const p of ne)p.updateGuards.forEach(g=>{x.push(Pt(g,y,N))});return x.push(f),Re(x)}).then(()=>{x=[];for(const p of de)if(p.beforeEnter)if(nt(p.beforeEnter))for(const g of p.beforeEnter)x.push(Pt(g,y,N));else x.push(Pt(p.beforeEnter,y,N));return x.push(f),Re(x)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),x=er(de,"beforeRouteEnter",y,N,qt),x.push(f),Re(x))).then(()=>{x=[];for(const p of o.list())x.push(Pt(p,y,N));return x.push(f),Re(x)}).catch(p=>pt(p,8)?p:Promise.reject(p))}function St(y,N,x){l.list().forEach(O=>qt(()=>O(y,N,x)))}function Kt(y,N,x,O,ne){const de=P(y,N);if(de)return de;const f=N===xt,p=Hn?history.state:{};x&&(O||f?i.replace(y.fullPath,he({scroll:f&&p&&p.scroll},ne)):i.push(y.fullPath,ne)),c.value=y,rt(y,N,x,f),Tt()}let it;function Ln(){it||(it=i.listen((y,N,x)=>{if(!Ds.listening)return;const O=$(y),ne=V(O);if(ne){pe(he(ne,{replace:!0}),O).catch(Zn);return}a=O;const de=c.value;Hn&&wp(xl(de.fullPath,x.delta),Cp()),st(O,de).catch(f=>pt(f,12)?f:pt(f,2)?(pe(f.to,O).then(p=>{pt(p,20)&&!x.delta&&x.type===ei.pop&&i.go(-1,!1)}).catch(Zn),Promise.reject()):(x.delta&&i.go(-x.delta,!1),J(f,O,de))).then(f=>{f=f||Kt(O,de,!1),f&&(x.delta&&!pt(f,8)?i.go(-x.delta,!1):x.type===ei.pop&&pt(f,20)&&i.go(-1,!1)),St(O,de,f)}).catch(Zn)}))}let an=Un(),Ee=Un(),se;function J(y,N,x){Tt(y);const O=Ee.list();return O.length?O.forEach(ne=>ne(y,N,x)):console.error(y),Promise.reject(y)}function dt(){return se&&c.value!==xt?Promise.resolve():new Promise((y,N)=>{an.add([y,N])})}function Tt(y){return se||(se=!y,Ln(),an.list().forEach(([N,x])=>y?x(y):N()),an.reset()),y}function rt(y,N,x,O){const{scrollBehavior:ne}=t;if(!Hn||!ne)return Promise.resolve();const de=!x&&Ip(xl(y.fullPath,0))||(O||!x)&&history.state&&history.state.scroll||null;return oa().then(()=>ne(y,N,de)).then(f=>f&&bp(f)).catch(f=>J(f,y,N))}const De=y=>i.go(y);let un;const hn=new Set,Ds={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:S,resolve:$,options:t,push:Y,replace:ge,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Ee.add,isReady:dt,install(y){const N=this;y.component("RouterLink",uo),y.component("RouterView",Ya),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(c)}),Hn&&!un&&c.value===xt&&(un=!0,Y(i.location).catch(ne=>{}));const x={};for(const ne in xt)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});y.provide(ao,N),y.provide(Ka,Jc(x)),y.provide(Sr,c);const O=y.unmount;hn.add(y),y.unmount=function(){hn.delete(y),hn.size<1&&(a=xt,it&&it(),it=null,c.value=xt,un=!1,se=!1),O()}}};function Re(y){return y.reduce((N,x)=>N.then(()=>qt(x)),Promise.resolve())}return Ds}function Yp(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>In(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>In(a,c))||i.push(c))}return[n,s,i]}const Qp="/vue-personal-page/assets/DSCF5279-DwifKIW0.jpg",ft=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Oi=t=>(Pn("data-v-1070b82f"),t=t(),On(),t),Xp={class:"Hero"},Jp={class:"icon-part"},Zp=["src"],e_={class:"hero-text"},t_=Oi(()=>H("h1",null,"Hello, I'm Ken Wong",-1)),n_=Oi(()=>H("br",null,null,-1)),s_=Oi(()=>H("h3",null,[et("an ordinary "),H("span",null,"Computer Science"),et(" student with enthusiasm")],-1)),i_={class:"buttonmain"},r_=Oi(()=>H("button",{class:"linkinb"},[H("a",{href:"https://www.linkedin.com/in/ken-wong-1a86a5294/"},"LinkedIn")],-1)),o_={__name:"hero",setup(t){const e=Qp;return(n,s)=>(ee(),oe("div",Xp,[H("div",Jp,[H("img",{src:Je(e),alt:"my face"},null,8,Zp)]),H("div",e_,[t_,n_,s_,H("div",i_,[X(Je(uo),{to:"/cv",class:"contactb"},{default:Ke(()=>[et("Contact Me")]),_:1}),r_])])]))}},l_=ft(o_,[["__scopeId","data-v-1070b82f"]]),c_={},a_={className:"card"};function u_(t,e){return ee(),oe("div",a_,[jf(t.$slots,"default",{},void 0)])}const h_=ft(c_,[["render",u_],["__scopeId","data-v-4e93d2da"]]),f_={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},d_={class:"v-spinner"};function p_(t,e,n,s,i,r){return Wf((ee(),oe("div",d_,[H("div",{class:"v-pulse v-pulse1",style:yn([i.spinnerStyle,i.spinnerDelay1])},null,4),H("div",{class:"v-pulse v-pulse2",style:yn([i.spinnerStyle,i.spinnerDelay2])},null,4),H("div",{class:"v-pulse v-pulse3",style:yn([i.spinnerStyle,i.spinnerDelay3])},null,4)],512)),[[Md,n.loading]])}const Qa=ft(f_,[["render",p_]]);var Ul={};/**
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
 */const Xa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw Dn(e)},Dn=function(t){return new Error("Firebase Database ("+Xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ja=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},__=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(d=64)),s.push(n[h],n[u],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):__(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||u==null)throw new g_;const d=r<<2|l>>4;if(s.push(d),a!==64){const _=l<<4&240|a>>2;if(s.push(_),u!==64){const C=a<<6&192|u;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class g_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Za=function(t){const e=Ja(t);return ho.encodeByteArray(e,!0)},ti=function(t){return Za(t).replace(/\./g,"")},Tr=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function m_(t){return eu(void 0,t)}function eu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!y_(n)||(t[n]=eu(t[n],e[n]));return t}function y_(t){return t!=="__proto__"}/**
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
 */function v_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const E_=()=>v_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process>"u"||typeof Ul>"u")return;const t=Ul.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tr(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return E_()||C_()||b_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},I_=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nu=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config};/**
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
 */class fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function S_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ti(JSON.stringify(n)),ti(JSON.stringify(o)),""].join(".")}/**
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
 */function T_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T_())}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iu(){return Xa.NODE_ADMIN===!0}function x_(){try{return typeof indexedDB=="object"}catch{return!1}}function N_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const A_="FirebaseError";class Is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=A_,Object.setPrototypeOf(this,Is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ru.prototype.create)}}class ru{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?P_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Is(i,l,s)}}function P_(t,e){return t.replace(O_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const O_=/\{\$([^}]+)}/g;/**
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
 */function fs(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
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
 */const ou=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=fs(Tr(r[0])||""),n=fs(Tr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},D_=function(t){const e=ou(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},k_=function(t){const e=ou(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vl(r)&&Vl(o)){if(!Rr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vl(t){return t!==null&&typeof t=="object"}/**
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
 */function M_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class L_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let u=0;u<80;u++){u<40?u<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):u<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+a+c+h+s[u]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function lu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const F_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ss(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class $_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H_(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:B_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B_(t){return t===Xt?void 0:t}function H_(t){return t.instantiationMode==="EAGER"}/**
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
 */class U_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const W_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},V_=re.INFO,j_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},G_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=j_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=V_,this._logHandler=G_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const z_=(t,e)=>e.some(n=>t instanceof n);let jl,Gl;function q_(){return jl||(jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K_(){return Gl||(Gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,xr=new WeakMap,uu=new WeakMap,tr=new WeakMap,po=new WeakMap;function Y_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&au.set(n,t)}).catch(()=>{}),po.set(e,t),e}function Q_(t){if(xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xr.set(t,e)}let Nr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X_(t){Nr=t(Nr)}function J_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(nr(this),e,...n);return uu.set(s,e.sort?e.sort():[e]),Mt(s)}:K_().includes(t)?function(...e){return t.apply(nr(this),e),Mt(au.get(this))}:function(...e){return Mt(t.apply(nr(this),e))}}function Z_(t){return typeof t=="function"?J_(t):(t instanceof IDBTransaction&&Q_(t),z_(t,q_())?new Proxy(t,Nr):t)}function Mt(t){if(t instanceof IDBRequest)return Y_(t);if(tr.has(t))return tr.get(t);const e=Z_(t);return e!==t&&(tr.set(t,e),po.set(e,t)),e}const nr=t=>po.get(t);function eg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const tg=["get","getKey","getAll","getAllKeys","count"],ng=["put","add","delete","clear"],sr=new Map;function zl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sr.get(e))return sr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ng.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||tg.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return sr.set(e,r),r}X_(t=>({...t,get:(e,n,s)=>zl(e,n)||t.get(e,n,s),has:(e,n)=>!!zl(e,n)||t.has(e,n)}));/**
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
 */class sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ig(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",ql="0.10.10";/**
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
 */const Et=new cu("@firebase/app"),rg="@firebase/app-compat",og="@firebase/analytics-compat",lg="@firebase/analytics",cg="@firebase/app-check-compat",ag="@firebase/app-check",ug="@firebase/auth",hg="@firebase/auth-compat",fg="@firebase/database",dg="@firebase/database-compat",pg="@firebase/functions",_g="@firebase/functions-compat",gg="@firebase/installations",mg="@firebase/installations-compat",yg="@firebase/messaging",vg="@firebase/messaging-compat",Eg="@firebase/performance",Cg="@firebase/performance-compat",bg="@firebase/remote-config",wg="@firebase/remote-config-compat",Ig="@firebase/storage",Sg="@firebase/storage-compat",Tg="@firebase/firestore",Rg="@firebase/vertexai-preview",xg="@firebase/firestore-compat",Ng="firebase",Ag="10.13.1";/**
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
 */const Pr="[DEFAULT]",Pg={[Ar]:"fire-core",[rg]:"fire-core-compat",[lg]:"fire-analytics",[og]:"fire-analytics-compat",[ag]:"fire-app-check",[cg]:"fire-app-check-compat",[ug]:"fire-auth",[hg]:"fire-auth-compat",[fg]:"fire-rtdb",[dg]:"fire-rtdb-compat",[pg]:"fire-fn",[_g]:"fire-fn-compat",[gg]:"fire-iid",[mg]:"fire-iid-compat",[yg]:"fire-fcm",[vg]:"fire-fcm-compat",[Eg]:"fire-perf",[Cg]:"fire-perf-compat",[bg]:"fire-rc",[wg]:"fire-rc-compat",[Ig]:"fire-gcs",[Sg]:"fire-gcs-compat",[Tg]:"fire-fst",[xg]:"fire-fst-compat",[Rg]:"fire-vertex","fire-js":"fire-js",[Ng]:"fire-js-all"};/**
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
 */const si=new Map,Og=new Map,Or=new Map;function Kl(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Or.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of si.values())Kl(n,t);for(const n of Og.values())Kl(n,t);return!0}function Dg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new ru("app","Firebase",kg);/**
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
 */class Mg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Lg=Ag;function hu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=nu()),!n)throw Lt.create("no-options");const r=si.get(i);if(r){if(Rr(n,r.options)&&Rr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new U_(i);for(const c of Or.values())o.addComponent(c);const l=new Mg(n,s,o);return si.set(i,l),l}function Fg(t=Pr){const e=si.get(t);if(!e&&t===Pr&&nu())return hu();if(!e)throw Lt.create("no-app",{appName:t});return e}function En(t,e,n){var s;let i=(s=Pg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ii(new ds(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $g="firebase-heartbeat-database",Bg=1,ps="firebase-heartbeat-store";let ir=null;function fu(){return ir||(ir=eg($g,Bg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),ir}async function Hg(t){try{const n=(await fu()).transaction(ps),s=await n.objectStore(ps).get(du(t));return await n.done,s}catch(e){if(e instanceof Is)Et.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function Yl(t,e){try{const s=(await fu()).transaction(ps,"readwrite");await s.objectStore(ps).put(e,du(t)),await s.done}catch(n){if(n instanceof Is)Et.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(s.message)}}}function du(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ug=1024,Wg=30*24*60*60*1e3;class Vg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ql();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Wg}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Et.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ql(),{heartbeatsToSend:s,unsentEntries:i}=jg(this._heartbeatsCache.heartbeats),r=ti(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Et.warn(n),""}}}function Ql(){return new Date().toISOString().substring(0,10)}function jg(t,e=Ug){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x_()?N_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xl(t){return ti(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zg(t){ii(new ds("platform-logger",e=>new sg(e),"PRIVATE")),ii(new ds("heartbeat",e=>new Vg(e),"PRIVATE")),En(Ar,ql,t),En(Ar,ql,"esm2017"),En("fire-js","")}zg("");var qg="firebase",Kg="10.13.1";/**
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
 */En(qg,Kg,"app");var Jl={};const Zl="@firebase/database",ec="1.0.7";/**
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
 */let pu="";function Yg(t){pu=t}/**
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
 */class Qg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const _u=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qg(e)}}catch{}return new Xg},en=_u("localStorage"),Jg=_u("sessionStorage");/**
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
 */const Cn=new cu("@firebase/database"),Zg=function(){let t=1;return function(){return t++}}(),gu=function(t){const e=F_(t),n=new L_;n.update(e);const s=n.digest();return ho.encodeByteArray(s)},Ts=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ts.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let es=null,tc=!0;const em=function(t,e){w(!e,"Can't turn on custom loggers persistently."),Cn.logLevel=re.VERBOSE,es=Cn.log.bind(Cn)},xe=function(...t){if(tc===!0&&(tc=!1,es===null&&Jg.get("logging_enabled")===!0&&em()),es){const e=Ts.apply(null,t);es(e)}},Rs=function(t){return function(...e){xe(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ts(...t);Cn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Ts(...t)}`;throw Cn.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Ts(...t);Cn.warn(e)},tm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",sn="[MAX_NAME]",kn=function(t,e){if(t===e)return 0;if(t===Rn||e===sn)return-1;if(e===Rn||t===sn)return 1;{const n=nc(t),s=nc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},sm=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},_o=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=_o(t[e[s]]);return n+="}",n},yu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vu=function(t){w(!mu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},im=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function om(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lm=new RegExp("^-?(0*)\\d{1,10}$"),cm=-2147483648,am=2147483647,nc=function(t){if(lm.test(t)){const e=Number(t);if(e>=cm&&e<=am)return e}return null},xs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},um=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class qs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qs.OWNER="owner";/**
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
 */const go="5",Eu="v",Cu="s",bu="r",wu="f",Iu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Su="ls",Tu="p",kr="ac",Ru="websocket",xu="long_polling";/**
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
 */class Nu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Au(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===Ru)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dm(t)&&(n.ns=t.namespace);const i=[];return Be(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class pm{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m_(this.counters_)}}/**
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
 */const rr={},or={};function mo(t){const e=t.toString();return rr[e]||(rr[e]=new pm),rr[e]}function _m(t,e){const n=t.toString();return or[n]||(or[n]=e()),or[n]}/**
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
 */class gm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sc="start",mm="close",ym="pLPCommand",vm="pRTLPCB",Pu="id",Ou="pw",Du="ser",Em="cb",Cm="seg",bm="ts",wm="d",Im="dframe",ku=1870,Mu=30,Sm=ku-Mu,Tm=25e3,Rm=3e4;class pn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=mo(n),this.urlFn=c=>(this.appCheckToken&&(c[kr]=this.appCheckToken),Au(n,xu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rm)),nm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yo((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sc)this.id=l,this.password=c;else if(o===mm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[sc]="t",s[Du]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Em]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Eu]=go,this.transportSessionId&&(s[Cu]=this.transportSessionId),this.lastSessionId&&(s[Su]=this.lastSessionId),this.applicationId&&(s[Tu]=this.applicationId),this.appCheckToken&&(s[kr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(s[bu]=wu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!im()&&!rm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Za(n),i=yu(s,Sm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Im]="t",s[Pu]=e,s[Ou]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zg(),window[ym+this.uniqueCallbackIdentifier]=e,window[vm+this.uniqueCallbackIdentifier]=n,this.myIFrame=yo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pu]=this.myID,e[Ou]=this.myPW,e[Du]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mu+s.length<=ku;){const o=this.pendingSegs.shift();s=s+"&"+Cm+i+"="+o.seg+"&"+bm+i+"="+o.ts+"&"+wm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Tm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xm=16384,Nm=45e3;let ri=null;typeof MozWebSocket<"u"?ri=MozWebSocket:typeof WebSocket<"u"&&(ri=WebSocket);class qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=mo(n),this.connURL=qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Eu]=go,typeof location<"u"&&location.hostname&&Iu.test(location.hostname)&&(o[bu]=wu),n&&(o[Cu]=n),s&&(o[Su]=s),i&&(o[kr]=i),r&&(o[Tu]=r),Au(e,Ru,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{let s;iu(),this.mySock=new ri(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ri!==null&&!qe.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||en.get("previous_websocket_failure")===!0}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yu(n,xm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2;qe.healthyTimeout=3e4;/**
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
 */class _s{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qe&&qe.isAvailable();let s=n&&!qe.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qe];else{const i=this.transports_=[];for(const r of _s.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
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
 */const Am=6e4,Pm=5e3,Om=10*1024,Dm=100*1024,lr="t",ic="d",km="s",rc="r",Mm="e",oc="o",lc="a",cc="n",ac="p",Lm="h";class Fm{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new _s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Om?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lr in e){const n=e[lr];n===lc?this.upgradeIfSecondaryHealthy_():n===rc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===oc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ac,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(lr,e);if(ic in e){const s=e[ic];if(n===Lm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===km?this.onConnectionShutdown_(s):n===rc?this.onReset_(s):n===Mm?Dr("Server Error: "+s):n===oc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),go!==s&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Am))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ac,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Lu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Fu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class oi extends Fu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!su()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oi}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const uc=32,hc=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ie("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ut(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function $u(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $m(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return Oe(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Uu(t,e){if(Ut(t)!==Ut(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ut(t)>Ut(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Bm{constructor(e,n){this.errorPrefix_=n,this.parts_=Bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Di(this.parts_[s]);Wu(this)}}function Hm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),Wu(t)}function Um(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wu(t){if(t.byteLength_>hc)throw new Error(t.errorPrefix_+"has a key path longer than "+hc+" bytes ("+t.byteLength_+").");if(t.parts_.length>uc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uc+") or object contains a cycle "+Jt(t))}function Jt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vo extends Fu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vo}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Vn=1e3,Wm=60*5*1e3,fc=30*1e3,Vm=1.3,jm=3e4,Gm="server_kill",dc=3;class vt extends Lu{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vn,this.maxReconnectDelay_=Wm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!iu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new fo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=Tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||k_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=D_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jm&&(this.reconnectDelay_=Vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Vm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(u){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new Fm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ue(u),c())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wl(this.interruptReasons_)&&(this.reconnectDelay_=Vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>_o(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dc&&(this.reconnectDelay_=fc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pu.replace(/\./g,"-")]=1,su()?e["framework.cordova"]=1:R_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oi.getInstance().currentlyOnline();return Wl(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
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
 */class ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Rn,e),i=new j(Rn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let Hs;class Vu extends ki{static get __EMPTY_NODE(){return Hs}static set __EMPTY_NODE(e){Hs=e}compare(e,n){return kn(e.name,n.name)}isDefinedOn(e){throw Dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(sn,Hs)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Hs)}toString(){return".key"}}const bn=new Vu;/**
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
 */class Us{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class zm{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Us(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new zm;/**
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
 */function qm(t,e){return kn(t.name,e.name)}function Eo(t,e){return kn(t,e)}/**
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
 */let Mr;function Km(t){Mr=t}const ju=function(t){return typeof t=="number"?"number:"+vu(t):"string:"+t},Gu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else w(t===Mr||t.isEmpty(),"priority of unexpected type.");w(t===Mr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let pc;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gu(this.priorityNode_)}static set __childrenNodeConstructor(e){pc=e}static get __childrenNodeConstructor(){return pc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:q(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ju(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vu(this.value_):e+=this.value_,this.lazyHash_=gu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let zu,qu;function Ym(t){zu=t}function Qm(t){qu=t}class Xm extends ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(sn,new be("[PRIORITY-POST]",qu))}makePost(e,n){const s=zu(e);return new j(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new Xm;/**
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
 */const Jm=Math.log(2);class Zm{constructor(e){const n=r=>parseInt(Math.log(r)/Jm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let u,d;if(h===0)return null;if(h===1)return u=t[c],d=n?n(u):u,new we(d,u.node,we.BLACK,null,null);{const _=parseInt(h/2,10)+c,C=i(c,_),S=i(_+1,a);return u=t[_],d=n?n(u):u,new we(d,u.node,we.BLACK,C,S)}},r=function(c){let a=null,h=null,u=t.length;const d=function(C,S){const L=u-C,$=u;u-=C;const k=i(L+1,$),P=t[L],Y=n?n(P):P;_(new we(Y,P.node,S,null,k))},_=function(C){a?(a.left=C,a=C):(h=C,a=C)};for(let C=0;C<c.count;++C){const S=c.nextBitIsOne(),L=Math.pow(2,c.count-(C+1));S?d(L,we.BLACK):(d(L,we.BLACK),d(L,we.RED))}return h},o=new Zm(t.length),l=r(o);return new Le(s||e,l)};/**
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
 */let cr;const dn={};class gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(dn&&_e,"ChildrenNode.ts has not been loaded"),cr=cr||new gt({".priority":dn},{".priority":_e}),cr}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=li(s,e.getCompare()):l=dn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new gt(h,a)}addToIndexes(e,n){const s=ni(this.indexes_,(i,r)=>{const o=Tn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===dn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(j.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),li(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new j(e.name,l))),c.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ni(this.indexes_,i=>{if(i===dn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
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
 */let jn;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Gu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jn||(jn=new F(new Le(Eo),null,gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jn}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?jn:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{w(q(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ju(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ns?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ey extends F{constructor(){super(new Le(Eo),F.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ns=new ey;Object.defineProperties(j,{MIN:{value:new j(Rn,F.EMPTY_NODE)},MAX:{value:new j(sn,Ns)}});Vu.__EMPTY_NODE=F.EMPTY_NODE;be.__childrenNodeConstructor=F;Km(Ns);Qm(Ns);/**
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
 */const ty=!0;function Se(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Se(e))}if(!(t instanceof Array)&&ty){const n=[];let s=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new j(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=li(n,qm,o=>o.name,Eo);if(s){const o=li(n,_e.getCompare());return new F(r,Se(e),new gt({".priority":o},{".priority":_e}))}else return new F(r,Se(e),gt.Default)}else{let n=F.EMPTY_NODE;return Be(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}Ym(Se);/**
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
 */class ny extends ki{constructor(e){super(),this.indexPath_=e,w(!z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ns);return new j(sn,e)}toString(){return Bu(this.indexPath_,0).join("/")}}/**
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
 */class sy extends ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?kn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Se(e);return new j(n,s)}toString(){return".value"}}const iy=new sy;/**
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
 */function Ku(t){return{type:"value",snapshotNode:t}}function xn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ry(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xn(n,s)):o.trackChildChange(ms(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(gs(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ms(i,r,o))}else s.trackChildChange(xn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ys{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class oy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const c=new j(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,a,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,c);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ms(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gs(n,u));const S=l.updateImmediateChild(n,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(xn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(gs(a.name,a.node)),r.trackChildChange(xn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
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
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ly(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new oy(t):new ys(t)}function _c(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===iy?n="$value":t.index_===bn?n="$key":(w(t.index_ instanceof ny,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class ci extends Lu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ci.getListenId_(e,s),l={};this.listens_[o]=l;const c=_c(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let u=h;if(a===404&&(u=null,a=null),a===null&&this.onDataUpdate_(r,u,!1,s),Tn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=ci.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_c(e._queryParams),s=e._path.toString(),i=new fo;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+M_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=fs(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class cy{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ai(){return{value:null,children:new Map}}function Yu(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,ai());const i=t.children.get(s);e=le(e),Yu(i,e,n)}}function Lr(t,e,n){t.value!==null?n(e,t.value):ay(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);Lr(i,r,n)})}function ay(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class uy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const mc=10*1e3,hy=30*1e3,fy=5*60*1e3;class dy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uy(e);const s=mc+(hy-mc)*Math.random();ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Be(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*fy))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Qu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ui{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Qu()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new ui(Q(),n,this.revert)}}else return w(q(this.path)===e,"operationForChild called for unrelated child."),new ui(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new vs(this.source,Q()):new vs(this.source,le(this.path))}}/**
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
 */class rn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return z(this.path)?new rn(this.source,Q(),this.snap.getImmediateChild(e)):new rn(this.source,le(this.path),this.snap)}}/**
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
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new rn(this.source,Q(),n.value):new Es(this.source,Q(),n)}else return w(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class py{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _y(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ry(o.childName,o.snapshotNode))}),Gn(t,i,"child_removed",e,s,n),Gn(t,i,"child_added",e,s,n),Gn(t,i,"child_moved",r,s,n),Gn(t,i,"child_changed",e,s,n),Gn(t,i,"value",e,s,n),i}function Gn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>my(t,l,c)),o.forEach(l=>{const c=gy(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function gy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function my(t,e,n){if(e.childName==null||n.childName==null)throw Dn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Mi(t,e){return{eventCache:t,serverCache:e}}function ns(t,e,n,s){return Mi(new Wt(e,n,s),t.serverCache)}function Xu(t,e,n,s){return Mi(t.eventCache,new Wt(e,n,s))}function hi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ar;const yy=()=>(ar||(ar=new Le(sm)),ar);class ae{constructor(e,n=yy()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Be(e,(s,i)=>{n=n.set(new ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(z(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:ye(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ae(null)}}set(e,n){if(z(e))return new ae(n,this.children);{const s=q(e),r=(this.children.get(s)||new ae(null)).set(le(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(z(e))return n;{const s=q(e),r=(this.children.get(s)||new ae(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(le(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),ye(n,i),s):new ae(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new ae(null))}}function ss(t,e,n){if(z(e))return new tt(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Oe(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function yc(t,e,n){let s=t;return Be(n,(i,r)=>{s=ss(s,ye(e,i),r)}),s}function vc(t,e){if(z(e))return tt.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new tt(n)}}function Fr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Ec(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Ft(t,e){if(z(e))return t;{const n=cn(t,e);return n!=null?new tt(new ae(n)):new tt(t.writeTree_.subtree(e))}}function $r(t){return t.writeTree_.isEmpty()}function Nn(t,e){return Ju(Q(),t.writeTree_,e)}function Ju(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ju(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
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
 */function Li(t,e){return nh(e,t)}function vy(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ss(t.visibleWrites,e,n)),t.lastWriteId=s}function Ey(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&by(l,s.path)?i=!1:Qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return wy(t),!0;if(s.snap)t.visibleWrites=vc(t.visibleWrites,s.path);else{const l=s.children;Be(l,c=>{t.visibleWrites=vc(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function by(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(ye(t.path,n),e))return!0;return!1}function wy(t){t.visibleWrites=Zu(t.allWrites,Iy,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Iy(t){return t.visible}function Zu(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Qe(n,o)?(l=Oe(n,o),s=ss(s,l,r.snap)):Qe(o,n)&&(l=Oe(o,n),s=ss(s,Q(),r.snap.getChild(l)));else if(r.children){if(Qe(n,o))l=Oe(n,o),s=yc(s,l,r.children);else if(Qe(o,n))if(l=Oe(o,n),z(l))s=yc(s,Q(),r.children);else{const c=Tn(r.children,q(l));if(c){const a=c.getChild(le(l));s=ss(s,Q(),a)}}}else throw Dn("WriteRecord should have .snap or .children")}}return s}function eh(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if($r(o))return n;if(n==null&&!Fr(o,Q()))return null;{const l=n||F.EMPTY_NODE;return Nn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&$r(r))return n;if(!i&&n==null&&!Fr(r,Q()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Qe(a.path,e)||Qe(e,a.path))},l=Zu(t.allWrites,o,e),c=n||F.EMPTY_NODE;return Nn(l,c)}}}function Sy(t,e,n){let s=F.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=Nn(Ft(r,new ie(o)),l);s=s.updateImmediateChild(o,c)}),Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ty(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Fr(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return $r(o)?i.getChild(n):Nn(o,i.getChild(n))}}function Ry(t,e,n,s){const i=ye(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Nn(o,s.getNode().getImmediateChild(n))}else return null}function xy(t,e){return cn(t.visibleWrites,e)}function Ny(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=cn(c,Q());if(a!=null)l=a;else if(n!=null)l=Nn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=d.getNext();return h}else return[]}function Ay(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function fi(t,e,n,s){return eh(t.writeTree,t.treePath,e,n,s)}function So(t,e){return Sy(t.writeTree,t.treePath,e)}function Cc(t,e,n,s){return Ty(t.writeTree,t.treePath,e,n,s)}function di(t,e){return xy(t.writeTree,ye(t.treePath,e))}function Py(t,e,n,s,i,r){return Ny(t.writeTree,t.treePath,e,n,s,i,r)}function To(t,e,n){return Ry(t.writeTree,t.treePath,e,n)}function th(t,e){return nh(ye(t.treePath,e),t.writeTree)}function nh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Oy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ms(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ms(s,e.snapshotNode,i.oldSnap));else throw Dn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Dy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sh=new Dy;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return To(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Py(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function ky(t){return{filter:t}}function My(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ly(t,e,n,s,i){const r=new Oy;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=Br(t,e,a.path,a.snap,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!z(a.path),o=pi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=$y(t,e,a.path,a.children,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Hr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=Uy(t,e,a.path,s,i,r):o=By(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Hy(t,e,n.path,s,r);else throw Dn("Unknown operation type: "+n.type);const c=r.getChanges();return Fy(e,o,c),{viewCache:o,changes:c}}function Fy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=hi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ku(hi(e)))}}function ih(t,e,n,s,i,r){const o=e.eventCache;if(di(s,n)!=null)return e;{let l,c;if(z(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=on(e),h=a instanceof F?a:F.EMPTY_NODE,u=So(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const a=fi(s,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=q(n);if(a===".priority"){w(Ut(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Cc(s,n,h,c);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=le(n);let u;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=Cc(s,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(a).updateChild(h,d):u=o.getNode().getImmediateChild(a)}else u=To(s,a,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),a,u,h,i,r):l=o.getNode()}}return ns(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function pi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),_,null)}else{const _=q(n);if(!c.isCompleteForPath(n)&&Ut(n)>1)return e;const C=le(n),L=c.getNode().getImmediateChild(_).updateChild(C,s);_===".priority"?a=h.updatePriority(c.getNode(),L):a=h.updateChild(c.getNode(),_,L,C,sh,null)}const u=Xu(e,a,c.isFullyInitialized()||z(n),h.filtersNodes()),d=new Ro(i,u,r);return ih(t,u,n,i,d,l)}function Br(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new Ro(i,e,r);if(z(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ns(e,a,!0,t.filter.filtersNodes());else{const u=q(n);if(u===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ns(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=le(n),_=l.getNode().getImmediateChild(u);let C;if(z(d))C=s;else{const S=h.getCompleteChild(u);S!=null?$u(d)===".priority"&&S.getChild(Hu(d)).isEmpty()?C=S:C=S.updateChild(d,s):C=F.EMPTY_NODE}if(_.equals(C))c=e;else{const S=t.filter.updateChild(l.getNode(),u,C,d,h,o);c=ns(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function bc(t,e){return t.eventCache.isCompleteForChild(e)}function $y(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=ye(n,c);bc(e,q(h))&&(l=Br(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=ye(n,c);bc(e,q(h))||(l=Br(t,l,h,a,i,r,o))}),l}function wc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;z(n)?a=s:a=new ae(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),C=wc(t,_,d);c=pi(t,c,new ie(u),C,i,r,o,l)}}),a.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const C=e.serverCache.getNode().getImmediateChild(u),S=wc(t,C,d);c=pi(t,c,new ie(u),S,i,r,o,l)}}),c}function By(t,e,n,s,i,r,o){if(di(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(z(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return pi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(z(n)){let a=new ae(null);return c.getNode().forEachChild(bn,(h,u)=>{a=a.set(new ie(h),u)}),Hr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ae(null);return s.foreach((h,u)=>{const d=ye(n,h);c.isCompleteForPath(d)&&(a=a.set(h,c.getNode().getChild(d)))}),Hr(t,e,n,a,i,r,l,o)}}function Hy(t,e,n,s,i){const r=e.serverCache,o=Xu(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return ih(t,o,n,s,sh,i)}function Uy(t,e,n,s,i,r){let o;if(di(s,n)!=null)return e;{const l=new Ro(s,e,i),c=e.eventCache.getNode();let a;if(z(n)||q(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=fi(s,on(e));else{const u=e.serverCache.getNode();w(u instanceof F,"serverChildren would be complete if leaf node"),h=So(s,u)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=q(n);let u=To(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?a=t.filter.updateChild(c,h,u,le(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,F.EMPTY_NODE,le(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fi(s,on(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||di(s,Q())!=null,ns(e,a,o,t.filter.filtersNodes())}}/**
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
 */class Wy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=ly(s);this.processor_=ky(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),h=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mi(u,h),this.eventGenerator_=new py(this.query_)}get query(){return this.query_}}function Vy(t){return t.viewCache_.serverCache.getNode()}function jy(t){return hi(t.viewCache_)}function Gy(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Ic(t){return t.eventRegistrations_.length===0}function zy(t,e){t.eventRegistrations_.push(e)}function Sc(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Tc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(w(on(t.viewCache_),"We should always have a full cache before handling merges"),w(hi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ly(t.processor_,i,e,n,s);return My(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(xn(r,o))}),n.isFullyInitialized()&&s.push(Ku(n.getNode())),rh(t,s,n.getNode(),e)}function rh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return _y(t.eventGenerator_,e,n,i)}/**
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
 */let _i;class oh{constructor(){this.views=new Map}}function Ky(t){w(!_i,"__referenceConstructor has already been defined"),_i=t}function Yy(){return w(_i,"Reference.ts has not been loaded"),_i}function Qy(t){return t.views.size===0}function xo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),Tc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Tc(o,e,n,s));return r}}function lh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=fi(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=So(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=Mi(new Wt(l,c,!1),new Wt(s,i,!1));return new Wy(e,a)}return o}function Xy(t,e,n,s,i,r){const o=lh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zy(o,n),qy(o,n)}function Jy(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Vt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Sc(a,n,s)),Ic(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Sc(c,n,s)),Ic(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Vt(t)&&r.push(new(Yy())(e._repo,e._path)),{removed:r,events:o}}function ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $t(t,e){let n=null;for(const s of t.views.values())n=n||Gy(s,e);return n}function ah(t,e){if(e._queryParams.loadsAllData())return Fi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function uh(t,e){return ah(t,e)!=null}function Vt(t){return Fi(t)!=null}function Fi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gi;function Zy(t){w(!gi,"__referenceConstructor has already been defined"),gi=t}function ev(){return w(gi,"Reference.ts has not been loaded"),gi}let tv=1;class Rc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Ay(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nv(t,e,n,s,i){return vy(t.pendingWriteTree_,e,n,s,i),i?Ps(t,new rn(Qu(),e,n)):[]}function _n(t,e,n=!1){const s=Ey(t.pendingWriteTree_,e);if(Cy(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(Q(),!0):Be(s.children,o=>{r=r.set(new ie(o),!0)}),Ps(t,new ui(s.path,r,n))}else return[]}function As(t,e,n){return Ps(t,new rn(wo(),e,n))}function sv(t,e,n){const s=ae.fromObject(n);return Ps(t,new Es(wo(),e,s))}function iv(t,e){return Ps(t,new vs(wo(),e))}function rv(t,e,n){const s=No(t,n);if(s){const i=Ao(s),r=i.path,o=i.queryId,l=Oe(r,e),c=new vs(Io(o),l);return Po(t,r,c)}else return[]}function hh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||uh(o,e))){const c=Jy(o,e,n,s);Qy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,_)=>Vt(_));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=av(d);for(let C=0;C<_.length;++C){const S=_[C],L=S.query,$=gh(t,S);t.listenProvider_.startListening(is(L),Cs(t,L),$.hashFn,$.onComplete)}}}!u&&a.length>0&&!s&&(h?t.listenProvider_.stopListening(is(e),null):a.forEach(d=>{const _=t.queryToTagMap.get($i(d));t.listenProvider_.stopListening(is(d),_)}))}uv(t,a)}return l}function fh(t,e,n,s){const i=No(t,s);if(i!=null){const r=Ao(i),o=r.path,l=r.queryId,c=Oe(o,e),a=new rn(Io(l),c,n);return Po(t,o,a)}else return[]}function ov(t,e,n,s){const i=No(t,s);if(i){const r=Ao(i),o=r.path,l=r.queryId,c=Oe(o,e),a=ae.fromObject(n),h=new Es(Io(l),c,a);return Po(t,o,h)}else return[]}function lv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const C=Oe(d,i);r=r||$t(_,C),o=o||Vt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Vt(l),r=r||$t(l,Q())):(l=new oh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,C)=>{const S=$t(C,Q());S&&(r=r.updateImmediateChild(_,S))}));const a=uh(l,e);if(!a&&!e._queryParams.loadsAllData()){const d=$i(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=hv();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const h=Li(t.pendingWriteTree_,i);let u=Xy(l,e,n,h,r,c);if(!a&&!o&&!s){const d=ah(l,e);u=u.concat(fv(t,e,d))}return u}function dh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Oe(o,e),a=$t(l,c);if(a)return a});return eh(i,e,r,n,!0)}function cv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,h)=>{const u=Oe(a,n);s=s||$t(h,u)});let i=t.syncPointTree_.get(n);i?s=s||$t(i,Q()):(i=new oh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=Li(t.pendingWriteTree_,e._path),c=lh(i,e,l,r?o.getNode():F.EMPTY_NODE,r);return jy(c)}function Ps(t,e){return ph(e,t.syncPointTree_,null,Li(t.pendingWriteTree_,Q()))}function ph(t,e,n,s){if(z(t.path))return _h(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=$t(i,Q()));let r=[];const o=q(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=th(s,o);r=r.concat(ph(l,c,a,h))}return i&&(r=r.concat(xo(i,t,s,n))),r}}function _h(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=$t(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=th(s,o),h=t.operationForChild(o);h&&(r=r.concat(_h(h,l,c,a)))}),i&&(r=r.concat(xo(i,t,s,n))),r}function gh(t,e){const n=e.query,s=Cs(t,n);return{hashFn:()=>(Vy(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?rv(t,n._path,s):iv(t,n._path);{const r=om(i,n);return hh(t,n,null,r)}}}}function Cs(t,e){const n=$i(e);return t.queryToTagMap.get(n)}function $i(t){return t._path.toString()+"$"+t._queryIdentifier}function No(t,e){return t.tagToQueryMap.get(e)}function Ao(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Po(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Li(t.pendingWriteTree_,e);return xo(s,n,i,null)}function av(t){return t.fold((e,n,s)=>{if(n&&Vt(n))return[Fi(n)];{let i=[];return n&&(i=ch(n)),Be(s,(r,o)=>{i=i.concat(o)}),i}})}function is(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ev())(t._repo,t._path):t}function uv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function hv(){return tv++}function fv(t,e,n){const s=e._path,i=Cs(t,e),r=gh(t,n),o=t.listenProvider_.startListening(is(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Vt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,u)=>{if(!z(a)&&h&&Vt(h))return[Fi(h).query];{let d=[];return h&&(d=d.concat(ch(h).map(_=>_.query))),Be(u,(_,C)=>{d=d.concat(C)}),d}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening(is(h),Cs(t,h))}}return o}/**
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
 */class Oo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oo(n)}node(){return this.node_}}class Do{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Do(this.syncTree_,n)}node(){return dh(this.syncTree_,this.path_)}}const dv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xc=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _v(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},_v=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gv=function(t,e,n,s){return ko(e,new Do(n,t),s)},mv=function(t,e,n){return ko(t,new Oo(e),n)};function ko(t,e,n){const s=t.getPriority().val(),i=xc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=xc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(l,c)=>{const a=ko(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class Mo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lo(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=q(n);for(;i!==null;){const r=Tn(s.node.children,i)||{children:{},childCount:0};s=new Mo(i,s,r),n=le(n),i=q(n)}return s}function Mn(t){return t.node.value}function mh(t,e){t.node.value=e,Ur(t)}function yh(t){return t.node.childCount>0}function yv(t){return Mn(t)===void 0&&!yh(t)}function Bi(t,e){Be(t.node.children,(n,s)=>{e(new Mo(n,t,s))})}function vh(t,e,n,s){n&&!s&&e(t),Bi(t,i=>{vh(i,e,!0,s)}),n&&s&&e(t)}function vv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Os(t){return new ie(t.parent===null?t.name:Os(t.parent)+"/"+t.name)}function Ur(t){t.parent!==null&&Ev(t.parent,t.name,t)}function Ev(t,e,n){const s=yv(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ur(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ur(t))}/**
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
 */const Cv=/[\[\].#$\/\u0000-\u001F\u007F]/,bv=/[\[\].#$\u0000-\u001F\u007F]/,ur=10*1024*1024,Eh=function(t){return typeof t=="string"&&t.length!==0&&!Cv.test(t)},Ch=function(t){return typeof t=="string"&&t.length!==0&&!bv.test(t)},wv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ch(t)},bh=function(t,e,n){const s=n instanceof ie?new Bm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jt(s)+" with contents = "+e.toString());if(mu(e))throw new Error(t+"contains "+e.toString()+" "+Jt(s));if(typeof e=="string"&&e.length>ur/3&&Di(e)>ur)throw new Error(t+"contains a string greater than "+ur+" utf8 bytes "+Jt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Eh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hm(s,o),bh(t,l,s),Um(s)}),i&&r)throw new Error(t+' contains ".value" child '+Jt(s)+" in addition to actual children.")}},wh=function(t,e,n,s){if(!Ch(n))throw new Error(lu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Iv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wh(t,e,n)},Sv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Eh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wv(n))throw new Error(lu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Tv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rv(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Uu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zt(t,e,n){Rv(t,n),xv(t,s=>Qe(s,e)||Qe(e,s))}function xv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Nv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Nv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();es&&xe("event: "+n.toString()),xs(s)}}}/**
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
 */const Av="repo_interrupt",Pv=25;class Ov{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ai(),this.transactionQueueTree_=new Mo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dv(t,e,n){if(t.stats_=mo(t.repoInfo_),t.forceRestClient_||um())t.server_=new ci(t.repoInfo_,(s,i,r,o)=>{Nc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ac(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{Nc(t,s,i,r,o)},s=>{Ac(t,s)},s=>{Mv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=_m(t.repoInfo_,()=>new dy(t.stats_,t.server_)),t.infoData_=new cy,t.infoSyncTree_=new Rc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=As(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Fo(t,"connected",!1),t.serverSyncTree_=new Rc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);zt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function kv(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ih(t){return dv({timestamp:kv(t)})}function Nc(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ni(n,a=>Se(a));o=ov(t.serverSyncTree_,r,c,i)}else{const c=Se(n);o=fh(t.serverSyncTree_,r,c,i)}else if(s){const c=ni(n,a=>Se(a));o=sv(t.serverSyncTree_,r,c)}else{const c=Se(n);o=As(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ho(t,r)),zt(t.eventQueue_,l,o)}function Ac(t,e){Fo(t,"connected",e),e===!1&&$v(t)}function Mv(t,e){Be(e,(n,s)=>{Fo(t,n,s)})}function Fo(t,e,n){const s=new ie("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=As(t.infoSyncTree_,s,i);zt(t.eventQueue_,s,r)}function Lv(t){return t.nextWriteId_++}function Fv(t,e,n){const s=cv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());lv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=As(t.serverSyncTree_,e._path,r);else{const l=Cs(t.serverSyncTree_,e);o=fh(t.serverSyncTree_,e._path,r,l)}return zt(t.eventQueue_,e._path,o),hh(t.serverSyncTree_,e,n,null,!0),r},i=>($o(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function $v(t){$o(t,"onDisconnectEvents");const e=Ih(t),n=ai();Lr(t.onDisconnect_,Q(),(i,r)=>{const o=gv(i,r,t.serverSyncTree_,e);Yu(n,i,o)});let s=[];Lr(n,Q(),(i,r)=>{s=s.concat(As(t.serverSyncTree_,i,r));const o=Wv(t,i);Ho(t,o)}),t.onDisconnect_=ai(),zt(t.eventQueue_,Q(),s)}function Bv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Av)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function Sh(t,e,n){return dh(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Bo(t,e=t.transactionQueueTree_){if(e||Hi(t,e),Mn(e)){const n=Rh(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Hv(t,Os(e),n)}else yh(e)&&Bi(e,n=>{Bo(t,n)})}function Hv(t,e,n){const s=n.map(a=>a.currentWriteId),i=Sh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];w(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Oe(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{$o(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(_n(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Hi(t,Lo(t.transactionQueueTree_,e)),Bo(t,t.transactionQueueTree_),zt(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)xs(u[d])}else{if(a==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ue("transaction at "+c.toString()+" failed: "+a);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=a}Ho(t,e)}},o)}function Ho(t,e){const n=Th(t,e),s=Os(n),i=Rh(t,n);return Uv(t,i,s),s}function Uv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Oe(n,c.path);let h=!1,u;if(w(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(_n(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Pv)h=!0,u="maxretry",i=i.concat(_n(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Sh(t,c.path,o);c.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){bh("transaction failed: Data returned ",_,c.path);let C=Se(_);typeof _=="object"&&_!=null&&wt(_,".priority")||(C=C.updatePriority(d.getPriority()));const L=c.currentWriteId,$=Ih(t),k=mv(C,d,$);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=k,c.currentWriteId=Lv(t),o.splice(o.indexOf(L),1),i=i.concat(nv(t.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),i=i.concat(_n(t.serverSyncTree_,L,!0))}else h=!0,u="nodata",i=i.concat(_n(t.serverSyncTree_,c.currentWriteId,!0))}zt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Hi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)xs(s[l]);Bo(t,t.transactionQueueTree_)}function Th(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&Mn(s)===void 0;)s=Lo(s,n),e=le(e),n=q(e);return s}function Rh(t,e){const n=[];return xh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function xh(t,e,n){const s=Mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bi(e,i=>{xh(t,i,n)})}function Hi(t,e){const n=Mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,mh(e,n.length>0?n:void 0)}Bi(e,s=>{Hi(t,s)})}function Wv(t,e){const n=Os(Th(t,e)),s=Lo(t.transactionQueueTree_,e);return vv(s,i=>{hr(t,i)}),hr(t,s),vh(s,i=>{hr(t,i)}),n}function hr(t,e){const n=Mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mh(e,void 0):n.length=r+1,zt(t.eventQueue_,Os(e),i);for(let o=0;o<s.length;o++)xs(s[o])}}/**
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
 */function Vv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pc=function(t,e){const n=Gv(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Nu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},Gv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Vv(t.substring(h,u)));const d=jv(t.substring(Math.min(t.length,u)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class zv{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class qv{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Kv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Uo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:$u(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=gc(this._queryParams),n=_o(e);return n==="{}"?"default":n}get _queryObject(){return gc(this._queryParams)}isEqual(e){if(e=Ss(e),!(e instanceof Uo))return!1;const n=this._repo===e._repo,s=Uu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$m(this._path)}}class It extends Uo{constructor(e,n){super(e,n,new bo,!1)}get parent(){const e=Hu(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=mi(this.ref,e);return new bs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bs(i,mi(this.ref,s),_e)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nh(t,e){return t=Ss(t),t._checkNotDeleted("ref"),t._root}function mi(t,e){return t=Ss(t),q(t._path)===null?Iv("child","path",e):wh("child","path",e),new It(t._repo,ye(t._path,e))}function Ah(t){t=Ss(t);const e=new Kv(()=>{}),n=new Wo(e);return Fv(t._repo,t,n).then(s=>new bs(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class Wo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new zv("value",this,new bs(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qv(this,e,n):null}matches(e){return e instanceof Wo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ky(It);Zy(It);/**
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
 */const Yv="FIREBASE_DATABASE_EMULATOR_HOST",Wr={};let Qv=!1;function Xv(t,e,n,s){t.repoInfo_=new Nu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Jv(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pc(r,i),l=o.repoInfo,c;typeof process<"u"&&Jl&&(c=Jl[Yv]),c?(r=`http://${c}?ns=${l.namespace}`,o=Pc(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new fm(t.name,t.options,e);Sv("Invalid Firebase Database URL",o),z(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=eE(l,t,a,new hm(t.name,n));return new tE(h,t)}function Zv(t,e){const n=Wr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Bv(t),delete n[t.key]}function eE(t,e,n,s){let i=Wr[e.name];i||(i={},Wr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ov(t,Qv,n,s),i[t.toURLString()]=r,r}class tE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function nE(t=Fg(),e){const n=Dg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=I_("database");s&&sE(n,...s)}return n}function sE(t,e,n,s={}){t=Ss(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new qs(qs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:S_(s.mockUserToken,t.app.options.projectId);r=new qs(o)}Xv(i,e,n,r)}/**
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
 */function iE(t){Yg(Lg),ii(new ds("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Jv(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),En(Zl,ec,t),En(Zl,ec,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iE();const rE={apiKey:"AIzaSyAgBmfWRbE_fNzx-gaGAPAuytRdRmEXR8A",authDomain:"personal-use-1857a.firebaseapp.com",projectId:"personal-use-1857a",storageBucket:"personal-use-1857a.appspot.com",messagingSenderId:"123791548487",databaseURL:"https://personal-use-1857a-default-rtdb.asia-southeast1.firebasedatabase.app",appId:"1:123791548487:web:c099989d47700c36981162",measurementId:"G-ZLTH39PEQ1"},oE=hu(rE),Ph=nE(oE),Vo=t=>(Pn("data-v-822eb15f"),t=t(),On(),t),lE={class:"Area"},cE={class:"header-container"},aE=Vo(()=>H("h1",null,"My Experience",-1)),uE={key:0,class:"loading"},hE={key:1,class:"area-card"},fE={key:0,class:"intern"},dE={key:1,class:"volunteer"},pE={key:2,class:"project"},_E={class:"title"},gE=Vo(()=>H("br",null,null,-1)),mE={class:"company"},yE=Vo(()=>H("br",null,null,-1)),vE={class:"content"},EE={__name:"Explist",props:{limit:Number,showButton:{type:Boolean,default:!1}},setup(t){let e=ls(!0);const n=ls([]);return io(async()=>{const i=Nh(Ph);try{console.log("Fetching data...");const r=await Ah(mi(i,"experiences"));console.log("Snapshot received:",r),r.exists()?(n.value=r.val(),console.log("Data loaded:",n.value)):console.log("No data available")}catch(r){console.error("Error fetching data:",r)}finally{e.value=!1}}),(i,r)=>{const o=so("RouterLink");return ee(),oe("div",lE,[H("div",cE,[aE,t.showButton?(ee(),Ni(o,{key:0,to:"/experience",class:"viewmore"},{default:Ke(()=>[et(" View More ")]),_:1})):yd("",!0)]),Je(e)?(ee(),oe("div",uE,[X(Qa)])):(ee(),oe("div",hE,[(ee(!0),oe(Me,null,Vf(n.value.slice(0,t.limit||n.value.length),l=>(ee(),oe("div",{class:"each-exp",key:l.id},[X(h_,null,{default:Ke(()=>[l.type=="intern"?(ee(),oe("p",fE,"Intern")):l.type=="volunteer"?(ee(),oe("p",dE,"Volunteer")):(ee(),oe("p",pE,"Project")),H("p",_E,ct(l.title),1),gE,H("p",mE,ct(l.company),1),yE,H("p",vE,ct(l.content),1),X(o,{class:"readm",to:"/experience/"+l.id},{default:Ke(()=>[et("Read More")]),_:2},1032,["to"])]),_:2},1024)]))),128))]))])}}},Oh=ft(EE,[["__scopeId","data-v-822eb15f"]]),CE={__name:"Home",setup(t){return(e,n)=>(ee(),oe(Me,null,[X(l_),X(Oh,{limit:3,showButton:!0})],64))}},bE={__name:"Experience",setup(t){return(e,n)=>(ee(),Ni(Oh))}},Ui=t=>(Pn("data-v-e5adcd5a"),t=t(),On(),t),wE={class:"not-found-container"},IE=Ui(()=>H("h1",null,"404",-1)),SE=Ui(()=>H("h2",null,"Page Not Found",-1)),TE=Ui(()=>H("p",null,"Sorry, the page you are looking for does not exist.",-1)),RE=Ui(()=>H("p",null,"You may have mistyped the address or the page may have moved.",-1)),xE={__name:"Notfound",setup(t){return(e,n)=>{const s=so("RouterLink");return ee(),oe("div",wE,[IE,SE,TE,RE,X(s,{to:"/"},{default:Ke(()=>[et("Go Home")]),_:1})])}}},NE=ft(xE,[["__scopeId","data-v-e5adcd5a"]]),AE={className:"backbutton"},PE={__name:"BackButton",setup(t){return(e,n)=>(ee(),oe("div",AE,[X(Je(uo),{to:"/experience"},{default:Ke(()=>[et("<- Back to Experience list")]),_:1})]))}},Oc=ft(PE,[["__scopeId","data-v-0fe6388e"]]),Wi=t=>(Pn("data-v-a17330d1"),t=t(),On(),t),OE={key:0,class:"loading"},DE={key:1,class:"exp-area"},kE={class:"exp-basic"},ME={class:"type"},LE={class:"title"},FE={key:0,class:"company"},$E={key:1},BE={class:"exp-adv"},HE={class:"exp-desc"},UE=Wi(()=>H("h1",null,"Description",-1)),WE={class:"content"},VE=Wi(()=>H("h1",null,"Duration",-1)),jE={class:"exp-org"},GE=Wi(()=>H("h1",null,"Company/Organization Info",-1)),zE={key:0,class:"desc"},qE={key:1,class:"desc"},KE=Wi(()=>H("h1",null,"Company/Organization Website",-1)),YE=["href"],QE={key:3},XE={__name:"Expview",setup(t){const e=ls(!0),n=ls(null);return io(async()=>{const i=Nh(Ph);try{console.log("Fetching data...");const r=await Ah(mi(i,"experiences"));if(console.log("Snapshot received:",r),r.exists()){const o=r.val();n.value=Array.isArray(o)?o[0]:o,console.log("Data loaded:",n.value)}else console.log("No data available")}catch(r){console.error("Error fetching data:",r)}finally{e.value=!1}}),(i,r)=>e.value?(ee(),oe("div",OE,[X(Oc),X(Qa)])):(ee(),oe("div",DE,[X(Oc),H("div",kE,[H("p",ME,ct(n.value.type),1),H("p",LE,ct(n.value.title),1),n.value.company?(ee(),oe("p",FE,ct(n.value.company),1)):(ee(),oe("p",$E,"-"))]),H("div",BE,[H("div",HE,[UE,H("p",WE,ct(n.value.content),1),VE,H("p",null,ct(n.value.duration),1)]),H("div",jE,[GE,n.value.companydesc?(ee(),oe("p",zE,ct(n.value.companydesc),1)):(ee(),oe("p",qE,"-")),KE,n.value.web?(ee(),oe("a",{key:2,href:n.value.web},ct(n.value.web),9,YE)):(ee(),oe("p",QE,"-"))])])]))}},JE=ft(XE,[["__scopeId","data-v-a17330d1"]]),ZE={},eC={src:"https://drive.google.com/file/d/1Eh6HpGEyLnnXHBBz4YG_cQm6Uk12Hn3L/preview"};function tC(t,e){return ee(),oe("iframe",eC)}const nC=ft(ZE,[["render",tC],["__scopeId","data-v-4586f64e"]]),sC=Kp({routes:[{path:"/",name:"home",component:CE},{path:"/experience",name:"experience",component:bE},{path:"/:catchAll(.*)",name:"not-found",component:NE},{path:"/experience/:id",name:"experienceid",component:JE},{path:"/cv",name:"cv",component:nC}]}),iC={},rC=t=>(Pn("data-v-6c695297"),t=t(),On(),t),oC={class:"Navbar"},lC=rC(()=>H("span",{class:"icon"},"< WHL />",-1)),cC={class:"navitems"};function aC(t,e){const n=so("RouterLink");return ee(),oe("div",oC,[X(n,{to:"/"},{default:Ke(()=>[lC]),_:1}),H("ul",cC,[H("li",null,[X(n,{to:"/"},{default:Ke(()=>[et("Home")]),_:1})]),H("li",null,[X(n,{to:"/experience"},{default:Ke(()=>[et("Experience")]),_:1})]),H("li",null,[X(n,{to:"/cv"},{default:Ke(()=>[et("CV")]),_:1})])])])}const uC=ft(iC,[["render",aC],["__scopeId","data-v-6c695297"]]),hC={},fC=t=>(Pn("data-v-131b7e37"),t=t(),On(),t),dC={className:"footer"},pC=fC(()=>H("p",null,"© Ken Wong",-1)),_C=[pC];function gC(t,e){return ee(),oe("div",dC,_C)}const mC=ft(hC,[["render",gC],["__scopeId","data-v-131b7e37"]]),yC={__name:"App",setup(t){return(e,n)=>(ee(),oe(Me,null,[X(uC),X(Je(Ya)),X(mC)],64))}},Dh=Zd(yC);Dh.use(sC);Dh.mount("#app");
