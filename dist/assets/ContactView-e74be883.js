import{aQ as de,S as Z,aR as fe,f as O,j as z,aS as _e,g as J,i as ve,k as ge,aT as pe,aU as K,aV as he,aW as me,aX as be,aY as re,aZ as xe,a_ as ye,a$ as we,b0 as Ae,aa as B,w as P,D as c,E as d,Z as Re,a2 as i,H as h,x as I,aP as ae,G as N,P as $,aM as L,a0 as b,a1 as M,O as y,W as T,$ as E,a7 as $e,a8 as Te,v as C,X as W,b1 as q,b2 as Ee}from"./index-0b0cc1b5.js";import{a as ie,_ as Pe}from"./index-ea62a7ae.js";import{U as k,d as V,c as j,S as G,e as Oe,_ as Le}from"./BaseButton-ba5be300.js";import"./base-a2302b2d.js";import"./el-input-6f746ab8.js";var Ie="__lodash_hash_undefined__";function De(e){return this.__data__.set(e,Ie),this}function Se(e){return this.__data__.has(e)}function U(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new de;++n<t;)this.add(e[n])}U.prototype.add=U.prototype.push=De;U.prototype.has=Se;function Ce(e,n){for(var t=-1,s=e==null?0:e.length;++t<s;)if(n(e[t],t,e))return!0;return!1}function Fe(e,n){return e.has(n)}var Ne=1,Ge=2;function oe(e,n,t,s,a,r){var l=t&Ne,u=e.length,_=n.length;if(u!=_&&!(l&&_>u))return!1;var v=r.get(e),p=r.get(n);if(v&&p)return v==n&&p==e;var g=-1,f=!0,x=t&Ge?new U:void 0;for(r.set(e,n),r.set(n,e);++g<u;){var o=e[g],m=n[g];if(s)var w=l?s(m,o,g,n,e,r):s(o,m,g,e,n,r);if(w!==void 0){if(w)continue;f=!1;break}if(x){if(!Ce(n,function(A,R){if(!Fe(x,R)&&(o===A||a(o,A,t,s,r)))return x.push(R)})){f=!1;break}}else if(!(o===m||a(o,m,t,s,r))){f=!1;break}}return r.delete(e),r.delete(n),f}function Me(e){var n=-1,t=Array(e.size);return e.forEach(function(s,a){t[++n]=[a,s]}),t}function Ue(e){var n=-1,t=Array(e.size);return e.forEach(function(s){t[++n]=s}),t}var Be=1,qe=2,He="[object Boolean]",Ke="[object Date]",Qe="[object Error]",Ye="[object Map]",Xe="[object Number]",Ze="[object RegExp]",ze="[object Set]",Je="[object String]",We="[object Symbol]",ke="[object ArrayBuffer]",Ve="[object DataView]",ee=Z?Z.prototype:void 0,H=ee?ee.valueOf:void 0;function je(e,n,t,s,a,r,l){switch(t){case Ve:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ke:return!(e.byteLength!=n.byteLength||!r(new k(e),new k(n)));case He:case Ke:case Xe:return fe(+e,+n);case Qe:return e.name==n.name&&e.message==n.message;case Ze:case Je:return e==n+"";case Ye:var u=Me;case ze:var _=s&Be;if(u||(u=Ue),e.size!=n.size&&!_)return!1;var v=l.get(e);if(v)return v==n;s|=qe,l.set(e,n);var p=oe(u(e),u(n),s,a,r,l);return l.delete(e),p;case We:if(H)return H.call(e)==H.call(n)}return!1}var en=1,nn=Object.prototype,tn=nn.hasOwnProperty;function sn(e,n,t,s,a,r){var l=t&en,u=V(e),_=u.length,v=V(n),p=v.length;if(_!=p&&!l)return!1;for(var g=_;g--;){var f=u[g];if(!(l?f in n:tn.call(n,f)))return!1}var x=r.get(e),o=r.get(n);if(x&&o)return x==n&&o==e;var m=!0;r.set(e,n),r.set(n,e);for(var w=l;++g<_;){f=u[g];var A=e[f],R=n[f];if(s)var X=l?s(R,A,f,n,e,r):s(A,R,f,e,n,r);if(!(X===void 0?A===R||a(A,R,t,s,r):X)){m=!1;break}w||(w=f=="constructor")}if(m&&!w){var D=e.constructor,S=n.constructor;D!=S&&"constructor"in e&&"constructor"in n&&!(typeof D=="function"&&D instanceof D&&typeof S=="function"&&S instanceof S)&&(m=!1)}return r.delete(e),r.delete(n),m}var rn=1,ne="[object Arguments]",te="[object Array]",F="[object Object]",an=Object.prototype,se=an.hasOwnProperty;function on(e,n,t,s,a,r){var l=O(e),u=O(n),_=l?te:j(e),v=u?te:j(n);_=_==ne?F:_,v=v==ne?F:v;var p=_==F,g=v==F,f=_==v;if(f&&z(e)){if(!z(n))return!1;l=!0,p=!1}if(f&&!p)return r||(r=new G),l||_e(e)?oe(e,n,t,s,a,r):je(e,n,_,t,s,a,r);if(!(t&rn)){var x=p&&se.call(e,"__wrapped__"),o=g&&se.call(n,"__wrapped__");if(x||o){var m=x?e.value():e,w=o?n.value():n;return r||(r=new G),a(m,w,t,s,r)}}return f?(r||(r=new G),sn(e,n,t,s,a,r)):!1}function Q(e,n,t,s,a){return e===n?!0:e==null||n==null||!J(e)&&!J(n)?e!==e&&n!==n:on(e,n,t,s,Q,a)}var ln=1,un=2;function cn(e,n,t,s){var a=t.length,r=a,l=!s;if(e==null)return!r;for(e=Object(e);a--;){var u=t[a];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++a<r;){u=t[a];var _=u[0],v=e[_],p=u[1];if(l&&u[2]){if(v===void 0&&!(_ in e))return!1}else{var g=new G;if(s)var f=s(v,p,_,e,n,g);if(!(f===void 0?Q(p,v,ln|un,s,g):f))return!1}}return!0}function le(e){return e===e&&!ve(e)}function dn(e){for(var n=ge(e),t=n.length;t--;){var s=n[t],a=e[s];n[t]=[s,a,le(a)]}return n}function ue(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function fn(e){var n=dn(e);return n.length==1&&n[0][2]?ue(n[0][0],n[0][1]):function(t){return t===e||cn(t,e,n)}}function _n(e,n){return e!=null&&n in Object(e)}function vn(e,n,t){n=pe(n,e);for(var s=-1,a=n.length,r=!1;++s<a;){var l=K(n[s]);if(!(r=e!=null&&t(e,l)))break;e=e[l]}return r||++s!=a?r:(a=e==null?0:e.length,!!a&&he(a)&&me(l,a)&&(O(e)||be(e)))}function gn(e,n){return e!=null&&vn(e,n,_n)}var pn=1,hn=2;function mn(e,n){return re(e)&&le(n)?ue(K(e),n):function(t){var s=xe(t,e);return s===void 0&&s===n?gn(t,e):Q(n,s,pn|hn)}}function bn(e){return function(n){return n==null?void 0:n[e]}}function xn(e){return function(n){return ye(n,e)}}function yn(e){return re(e)?bn(K(e)):xn(e)}function wn(e){return typeof e=="function"?e:e==null?we:typeof e=="object"?O(e)?mn(e[0],e[1]):fn(e):yn(e)}function An(e,n){var t=[];return Ae(e,function(s,a,r){n(s,a,r)&&t.push(s)}),t}function Rn(e,n){var t=O(e)?Oe:An;return t(e,wn(n))}const $n={class:"square-icon"},Tn=["href","fill"],En={__name:"BaseIcon",props:{name:{type:String,default:"icon",required:!0},size:{type:String,default:"16",required:!1},color:{type:String,default:"#000",required:!1}},setup(e){const n=e,t=P(()=>`#icon-${n.name}`);return(s,a)=>(c(),d("span",$n,[(c(),d("svg",{"aria-hidden":"true",class:"svg-icon",style:Re({width:e.size,height:e.size})},[i("use",{href:h(t),fill:e.color},null,8,Tn)],4))]))}},ce=B(En,[["__scopeId","data-v-dd32d56d"]]),Pn={key:0,class:"thumb-conversation mr-[10px] h-12 w-12"},On=["src"],Ln={key:1,class:"h-full w-full"},In=["src"],Dn={key:0,class:"avatar"},Sn={class:"text-xs font-medium text-description"},Cn=["src"],Fn=I({__name:"ThumbConversation",props:{conversation:{default:()=>({})}},setup(e){const n=e,{user:t}=ae(ie),s=P(()=>n.conversation.conversationType==="DM"?Rn(n.conversation.members,l=>l._id!==t.value._id)[0].avatar:""),a=r=>n.conversation.members[r-1].avatar;return(r,l)=>r.conversation._id?(c(),d("div",Pn,[r.conversation.conversationType==="GROUP"?(c(),d("div",{key:0,class:N(["h-full w-full",r.conversation.members.length>3?"group-four":"group-three"])},[r.conversation.conversationThumb?(c(),d("img",{key:0,src:r.conversation.conversationThumb,alt:"",class:"h-full w-full rounded-full object-cover"},null,8,On)):(c(),d("div",Ln,[(c(),d($,null,L(3,u=>i("div",{key:u,class:"avatar"},[i("img",{src:a(u),alt:"",class:"rounded-full object-cover"},null,8,In)])),64)),r.conversation.members.length>3?(c(),d("div",Dn,[i("span",Sn,b(r.conversation.members.length),1)])):M("",!0)]))],2)):(c(),d("img",{key:1,src:h(s),alt:"",class:"h-full w-full rounded-full object-cover"},null,8,Cn))])):M("",!0)}});const Nn=B(Fn,[["__scopeId","data-v-ebb3857c"]]),Gn={class:"bg-white mx-4 rounded-md"},Mn={key:0,class:"w-full"},Un=["src"],Bn={class:"ml-3 text-base font-medium"},qn={key:1},Hn={class:"ml-3"},Kn={class:"text-base font-medium"},Qn={class:"text-[13px] mt-1 text-[#7589a3] hover:underline hover:decoration-hyperlink hover:text-hyperlink"},Yn=I({__name:"ListContact",props:{data:{default:()=>[]},tab:{}},setup(e){return(n,t)=>{const s=Nn;return c(),d("div",Gn,[n.tab==="FRIEND"?(c(),d("div",Mn,[(c(!0),d($,null,L(n.data,a=>(c(),d("div",{key:a._id,class:"user h-18 flex items-center px-4 cursor-pointer hover:bg-background-hover"},[i("img",{src:a.avatar,alt:"",class:"w-12 h-12 rounded-full object-cover"},null,8,Un),i("p",Bn,b(a.fullName),1)]))),128))])):M("",!0),n.tab==="GROUP"?(c(),d("div",qn,[(c(!0),d($,null,L(n.data,a=>(c(),d("div",{key:a._id,class:"conversation h-18 flex items-center px-4 cursor-pointer hover:bg-background-hover"},[y(s,{conversation:a},null,8,["conversation"]),i("div",Hn,[i("p",Kn,b(a.conversationName),1),i("p",Qn,b(a.members.length)+" thành viên ",1)])]))),128))])):M("",!0)])}}});const Xn=B(Yn,[["__scopeId","data-v-9ca00959"]]);function Zn(e){if(!e)return"";const n=new Date(e);return(n.getDate()<10?"0"+n.getDate():n.getDate())+"/"+(n.getMonth()<9?"0"+(n.getMonth()+1):n.getMonth()+1)+"/"+n.getFullYear()}const zn={class:"grid grid-cols-3 gap-[10px] mx-4"},Jn={class:"flex items-center"},Wn=["src"],kn={class:"flex flex-col ml-2"},Vn={class:"text-base mb-[2px] font-medium"},jn={class:"text-[13px] text-[#7589a3]"},et={class:"mt-[17px] mb-4 h-12 p-2 border border-solid border-[#d8dbdf] rounded bg-[#f9fafb] overflow-y-auto"},nt={class:"mr-2 text-sm break-words"},tt={class:"flex justify-between"},st={class:"px-4 h-16 flex items-center text-sm font-medium"},rt={class:"grid grid-cols-3 gap-[10px] mx-4"},at={class:"flex items-center"},it=["src"],ot={class:"flex flex-col ml-2"},lt={class:"text-base mb-[2px] font-medium"},ut=i("p",{class:"text-[13px] text-[#7589a3]"},"Có thể bạn quen",-1),ct={class:"flex justify-between mt-[17px]"},dt=I({__name:"InvitationReceived",props:{data:{default:()=>[]},listSuggestFriend:{default:()=>[]}},setup(e){return(n,t)=>{const s=Le;return c(),d($,null,[i("div",zn,[(c(!0),d($,null,L(n.data,a=>(c(),d("div",{key:a._id,class:"h-[216px] bg-white rounded-md p-4 cursor-pointer shadow-sm"},[i("div",Jn,[i("img",{src:a.fromId.avatar,alt:"avatar",class:"w-12 h-12 rounded-full object-cover"},null,8,Wn),i("div",kn,[i("p",Vn,b(a.fromId.fullName),1),i("p",jn,b(h(Zn)(a.createdAt)),1)])]),i("div",et,[i("p",nt,b(a.message),1)]),i("div",tt,[y(s,{class:"flex-1 mr-2",type:"neutral"},{default:T(()=>[E("Từ chối")]),_:1}),y(s,{type:"secondary",class:"flex-1"},{default:T(()=>[E("Đồng ý")]),_:1})])]))),128))]),i("div",st,"Gợi ý kết bạn ("+b(n.listSuggestFriend.length)+")",1),i("div",rt,[(c(!0),d($,null,L(n.listSuggestFriend,a=>(c(),d("div",{key:a._id,class:"h-[138px] bg-white rounded-md p-4 cursor-pointer shadow-sm"},[i("div",at,[i("img",{src:a.avatar,alt:"avatar",class:"w-12 h-12 rounded-full object-cover"},null,8,it),i("div",ot,[i("p",lt,b(a.fullName),1),ut])]),i("div",ct,[y(s,{class:"flex-1 mr-2",type:"neutral"},{default:T(()=>[E("Bỏ qua")]),_:1}),y(s,{type:"neutral",class:"flex-1"},{default:T(()=>[E("Kết bạn")]),_:1})])]))),128))])],64)}}}),Y=e=>($e("data-v-796a1f50"),e=e(),Te(),e),ft=Y(()=>i("p",{class:"ml-[14px] text-base font-medium"},"Danh sách bạn bè",-1)),_t=Y(()=>i("p",{class:"ml-[14px] text-base font-medium"},"Danh sách nhóm",-1)),vt=Y(()=>i("p",{class:"ml-[14px] text-base font-medium"},"Lời mời kết bạn",-1)),gt=I({__name:"NavContact",props:{tabActive:{}},emits:["change"],setup(e,{emit:n}){return(t,s)=>{const a=ce;return c(),d($,null,[i("div",{class:N(["h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover",{"bg-background-selected":t.tabActive==="FRIEND"}]),onClick:s[0]||(s[0]=r=>n("change","FRIEND"))},[y(a,{name:"user",size:"24"}),ft],2),i("div",{class:N(["h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover",{"bg-background-selected":t.tabActive==="GROUP"}]),onClick:s[1]||(s[1]=r=>n("change","GROUP"))},[y(a,{name:"user-three",size:"24"}),_t],2),i("div",{class:N(["h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover",{"bg-background-selected":t.tabActive==="REQUEST"}]),onClick:s[2]||(s[2]=r=>n("change","REQUEST"))},[y(a,{name:"letter",size:"24"}),vt],2)],64)}}});const pt=B(gt,[["__scopeId","data-v-796a1f50"]]),ht={class:"flex w-full"},mt={class:"w-full bg-[#f7f7f8]"},bt={class:"h-16 text-base font-medium px-[19px] border-b border-solid bg-white border-[#c5c9ce] flex items-center"},xt={class:"px-4 h-16 flex items-center text-sm font-medium"},Tt=I({__name:"ContactView",setup(e){const{user:n}=ae(ie),t=C("FRIEND"),s=C([]),a=C([]),r=C(0),l=P(()=>t.value==="FRIEND"?"Danh sách bạn bè":t.value==="GROUP"?"Danh sách nhóm":"Lời mời kết bạn"),u=P(()=>t.value==="FRIEND"?"user":t.value==="GROUP"?"user-three":"letter"),_=P(()=>t.value==="FRIEND"?"Bạn bè":t.value==="GROUP"?"Nhóm":"Lời mời đã nhận"),v=async()=>{try{const o=await q.getListFriend(n.value._id);s.value=o.content,r.value=o.total}catch{s.value=[],r.value=0}};v();const p=async()=>{try{const o=await Ee.getListChatGroup(n.value._id);s.value=o.content,r.value=o.total}catch{s.value=[],r.value=0}},g=async()=>{try{const o=await q.getListRequestFriend();s.value=o.content,r.value=o.total}catch{s.value=[],r.value=0}},f=async()=>{try{const o=await q.getListSuggestFriend();a.value=o.content}catch{a.value=[]}},x=async o=>{o==="FRIEND"?await v():o==="GROUP"?await p():await Promise.all([g(),f()]),t.value=o};return(o,m)=>{const w=Pe,A=ce;return c(),d("div",ht,[y(w,null,{default:T(()=>[y(pt,{"tab-active":h(t),onChange:x},null,8,["tab-active"])]),_:1}),i("div",mt,[i("div",bt,[y(A,{name:h(u),size:"24",class:"mr-[11px]"},null,8,["name"]),E(" "+b(h(l)),1)]),i("div",xt,b(h(_))+" ("+b(h(r))+")",1),h(t)!=="REQUEST"?(c(),W(Xn,{key:0,data:h(s),tab:h(t)},null,8,["data","tab"])):(c(),W(dt,{key:1,data:h(s),"list-suggest-friend":h(a)},null,8,["data","list-suggest-friend"]))])])}}});export{Tt as default};