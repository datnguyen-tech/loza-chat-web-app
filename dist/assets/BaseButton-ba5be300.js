import{b3 as d,r as i,b4 as b,b5 as u,aQ as M,f as x,k as A,b6 as o,b7 as C,D as p,E as $,a2 as B,x as V,X as T,W as L,O as E,a1 as I,F as P,G as j,aJ as D,aa as G}from"./index-0b0cc1b5.js";import"./base-a2302b2d.js";var O=d(i,"WeakMap");const f=O;function W(t,a){for(var e=-1,s=a.length,r=t.length;++e<s;)t[r+e]=a[e];return t}function N(){this.__data__=new b,this.size=0}function U(t){var a=this.__data__,e=a.delete(t);return this.size=a.size,e}function H(t){return this.__data__.get(t)}function R(t){return this.__data__.has(t)}var F=200;function K(t,a){var e=this.__data__;if(e instanceof b){var s=e.__data__;if(!u||s.length<F-1)return s.push([t,a]),this.size=++e.size,this;e=this.__data__=new M(s)}return e.set(t,a),this.size=e.size,this}function c(t){var a=this.__data__=new b(t);this.size=a.size}c.prototype.clear=N;c.prototype.delete=U;c.prototype.get=H;c.prototype.has=R;c.prototype.set=K;function J(t,a){for(var e=-1,s=t==null?0:t.length,r=0,l=[];++e<s;){var _=t[e];a(_,e,t)&&(l[r++]=_)}return l}function Q(){return[]}var X=Object.prototype,Y=X.propertyIsEnumerable,v=Object.getOwnPropertySymbols,Z=v?function(t){return t==null?[]:(t=Object(t),J(v(t),function(a){return Y.call(t,a)}))}:Q;const q=Z;function tt(t,a,e){var s=a(t);return x(t)?s:W(s,e(t))}function wt(t){return tt(t,A,q)}var et=d(i,"DataView");const g=et;var at=d(i,"Promise");const h=at;var st=d(i,"Set");const m=st;var y="[object Map]",nt="[object Object]",w="[object Promise]",k="[object Set]",z="[object WeakMap]",S="[object DataView]",rt=o(g),ot=o(u),it=o(h),ct=o(m),lt=o(f),n=C;(g&&n(new g(new ArrayBuffer(1)))!=S||u&&n(new u)!=y||h&&n(h.resolve())!=w||m&&n(new m)!=k||f&&n(new f)!=z)&&(n=function(t){var a=C(t),e=a==nt?t.constructor:void 0,s=e?o(e):"";if(s)switch(s){case rt:return S;case ot:return y;case it:return w;case ct:return k;case lt:return z}return a});const kt=n;var _t=i.Uint8Array;const zt=_t;const ut={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},dt=B("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),pt=[dt];function ft(t,a){return p(),$("svg",ut,pt)}const gt={name:"ep-loading",render:ft},ht={class:"text-base font-semibold title"},mt=V({__name:"BaseButton",props:{size:{default:"large"},type:{default:"primary"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:a}){const e=t;return(s,r)=>{const l=gt,_=D;return p(),$("div",{class:j(["button",[`button--${e.size}`,`button--${e.type}`,{"button--loading":e.loading,"button--disabled":e.disabled}]]),onClick:r[0]||(r[0]=bt=>a("click"))},[e.loading?(p(),T(_,{key:0,class:"is-loading"},{default:L(()=>[E(l)]),_:1})):I("",!0),B("div",ht,[P(s.$slots,"default",{},void 0,!0)])],2)}}});const St=G(mt,[["__scopeId","data-v-dcd327bf"]]);export{c as S,zt as U,St as _,W as a,tt as b,kt as c,wt as d,J as e,q as g,Q as s};