function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-lt-7Rxqn.js","assets/modules/unplugin-icons-DVPgGpWI.js","assets/modules/vue-E2274tjY.js","assets/modules/shiki-aBBLN-a2.js","assets/modules/shiki-UnITDZrU.css","assets/slidev/DrawingPreview-vF6vRR4V.js","assets/index-ugccqRLv.js","assets/index-IDp_ebOm.css","assets/slidev/bottom-gj3tlmYI.js","assets/bottom-2yFrefRR.css","assets/DrawingControls-uU9aGS-d.css","assets/slidev/DrawingLayer-D6iu_RqP.js","assets/slidev/context-tbC5xYTm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Ot,y as A,ab as N,ac as K,U as Pt,D as ye,ad as Dt,d as Y,ae as Ft,C as st,_ as Vt,Y as jt,b as k,e as v,f as le,h as ce,i as F,o as f,a7 as Ve,x as X,F as z,Z as we,A as d,l as b,$ as oe,a6 as Bt,af as Gt,c as E,g as S,a8 as Kt,k as R,ag as nt,M as Ie,r as Ut,ah as Wt,ai as zt,a1 as ot,aj as it,j as he,ak as Ht,N as Yt,m as Qt,al as Xt}from"../modules/vue-E2274tjY.js";import{e as se,l as Jt,t as Le,f as be,a as xe,s as Zt,c as me,g as qt,b as H,m as We,_ as rt,n as es,o as ze,d as ts,C as ss,p as He,k as Se,q as Ye}from"../index-ugccqRLv.js";import{u as je,D as ns}from"./DrawingPreview-vF6vRR4V.js";import{b as G,t as Re,m as q,n as at,o as lt,q as os,r as is,u as rs,v as ct,k as Me,x as Ae,s as fe,p as as,y as ls,f as Qe,z as ae,w as $e,S as ut,g as dt,G as cs,a as us}from"./bottom-gj3tlmYI.js";import{e as ds,f as hs,g as fs,h as ps,i as vs,j as ms,k as _s,l as ht,m as gs,n as ys,o as ks,p as ws,q as bs,r as xs,s as Ss,t as Ms,u as $s,v as Cs}from"../modules/unplugin-icons-DVPgGpWI.js";import{t as Es}from"../modules/shiki-aBBLN-a2.js";function Ro(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:i}=je(),r=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){i.value||(r.value=Ot())},onSwipeEnd(){if(!r.value||i.value)return;const u=Math.abs(l.value),h=Math.abs(c.value);u/window.innerWidth>.3||u>75?a.value==="left"?e():n():(h/window.innerHeight>.4||h>200)&&(a.value==="down"?o():s())}})}const _e=D(1),ge=A(()=>Jt.value.length),P=D(0),Be=D(0);function Is(){P.value>_e.value&&(P.value-=1)}function Ls(){P.value<ge.value&&(P.value+=1)}function Rs(){if(P.value>_e.value){let t=P.value-Be.value;t<_e.value&&(t=_e.value),P.value=t}}function As(){if(P.value<ge.value){let t=P.value+Be.value;t>ge.value&&(t=ge.value),P.value=t}}const Ns=[];function Ts(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:i,prevSlide:r}=se(),{drawingEnabled:a}=je(),{escape:l,space:c,shift:u,left:h,right:p,up:m,down:x,enter:y,d:$,g:M,o:L,"`":w}=at,T={next:n,prev:i,nextSlide:o,prevSlide:r,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Le,toggleOverview:Re,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>G.value=!1,showGotoDialog:()=>q.value=!q.value};let _=[{name:"next_space",key:N(c,K(u)),fn:n,autoRepeat:!0},{name:"prev_space",key:N(c,u),fn:i,autoRepeat:!0},{name:"next_right",key:N(p,K(u),K(G)),fn:n,autoRepeat:!0},{name:"prev_left",key:N(h,K(u),K(G)),fn:i,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:i,autoRepeat:!0},{name:"next_down",key:N(x,K(G)),fn:o,autoRepeat:!0},{name:"prev_up",key:N(m,K(G)),fn:()=>r(!1),autoRepeat:!0},{name:"next_shift",key:N(p,u),fn:o,autoRepeat:!0},{name:"prev_shift",key:N(h,u),fn:()=>r(!1),autoRepeat:!0},{name:"toggle_dark",key:N($,K(a)),fn:Le},{name:"toggle_overview",key:N(Pt(L,w),K(a)),fn:Re},{name:"hide_overview",key:N(l,K(a)),fn:()=>G.value=!1},{name:"goto",key:N(M,K(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:N(p,G),fn:Ls},{name:"prev_overview",key:N(h,G),fn:Is},{name:"up_overview",key:N(m,G),fn:Rs},{name:"down_overview",key:N(x,G),fn:As},{name:"goto_from_overview",key:N(y,G),fn:()=>{t(P.value),G.value=!1}}];const O=new Set(_.map(C=>C.name));for(const C of Ns){const j=C(T,_);_=_.concat(j)}if(_.filter(C=>C.name&&O.has(C.name)).length===0){const C=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(C),console.warn(C)}return _}const ft=N(K(rs),K(is),os);function Os(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=N(t,ft);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}s&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return ye(n,r,{flush:"sync"})}function Ps(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function Ao(){const t=Ts();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Os(s.key,s.fn,s.autoRepeat)}),Ps("f",()=>ct.toggle())}const Ds=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),i=Ft(o),r=A(()=>e.width?e.width:i.width.value),a=A(()=>e.width?e.width/be.value:i.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const l=A(()=>r.value/a.value),c=A(()=>e.scale&&!n.value?e.scale:l.value<be.value?r.value/xe.value:a.value*be.value/xe.value),u=A(()=>({height:`${Zt.value}px`,width:`${xe.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),h=A(()=>({"select-none":!me.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Vt(A(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),jt(qt,c),(p,m)=>(f(),k("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",h.value])},[v("div",{id:"slide-content",class:"slidev-slide-content",style:ce(u.value)},[le(p.$slots,"default")],4),le(p.$slots,"controls")],2))}}),Fs=H(Ds,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Vs={class:"select-list"},js={class:"title"},Bs={class:"items"},Gs=["onClick"],Ks=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0});return(i,r)=>{const a=ds;return f(),k("div",Vs,[v("div",js,X(t.title),1),v("div",Bs,[(f(!0),k(z,null,we(t.items,l=>(f(),k("div",{key:l.value,class:F(["item",{active:d(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[b(a,{class:F(["text-green-500",{"opacity-0":d(o)!==l.value}])},null,8,["class"]),oe(" "+X(l.display||l.value),1)],10,Gs))),128))])])}}}),Us=H(Ks,[["__scopeId","data-v-3f89fa11"],["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/SelectList.vue"]]),Ws={class:"text-sm"},zs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(f(),k("div",Ws,[b(Us,{modelValue:d(Me),"onUpdate:modelValue":n[0]||(n[0]=o=>Bt(Me)?Me.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Hs=H(zs,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/Settings.vue"]]),Ys={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Qs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0}),i=D();return Gt(i,()=>{o.value=!1}),(r,a)=>(f(),k("div",{ref_key:"el",ref:i,class:"flex relative"},[v("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!d(o))},[le(r.$slots,"button",{class:F({disabled:t.disabled})})],2),(f(),E(Kt,null,[d(o)?(f(),k("div",Ys,[le(r.$slots,"menu")])):S("v-if",!0)],1024))],512))}}),Xs=H(Qs,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/MenuButton.vue"]]),Js={},Zs={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function qs(t,e){return f(),k("div",Zs)}const pe=H(Js,[["render",qs],["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),en={class:"sr-only"},tn=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(f(),E(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[v("span",en,X(e.title),1),le(e.$slots,"default",{},()=>[v("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),W=H(tn,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/IconButton.vue"]]),sn={render(){return[]}},nn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},on={class:"my-auto"},rn={class:"opacity-50"},an=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:i,isEmbedded:r,isPresenter:a,isPresenterAvailable:l,next:c,prev:u,total:h}=se(),{brush:p,drawingEnabled:m}=je(),x=Ae.smaller("md"),{isFullscreen:y,toggle:$}=ct,M=A(()=>s.value.query.password),L=A(()=>M.value?`?password=${M.value}`:""),w=A(()=>`${We(n.value,!0)}${L.value}`),T=A(()=>`${We(n.value,!1)}${L.value}`),_=D();function O(){_.value&&ae.value&&_.value.contains(ae.value)&&ae.value.blur()}const I=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),C=Ie(),j=Ie();return rt(()=>import("./DrawingControls-lt-7Rxqn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(re=>j.value=re.default),(re,V)=>{const Z=hs,Ke=fs,B=ps,ne=vs,ue=ws,xt=ms,St=_s,Mt=ht,$t=gs,Ct=ys,Et=bs,Ue=Ut("RouterLink"),It=xs,Lt=Ss,Rt=Ms,At=$s,Nt=ks;return f(),k("nav",{ref_key:"root",ref:_,class:"flex flex-col"},[v("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",I.value]),onMouseleave:O},[d(r)?S("v-if",!0):(f(),E(W,{key:0,title:d(y)?"Close fullscreen":"Enter fullscreen",onClick:d($)},{default:R(()=>[d(y)?(f(),E(Z,{key:0})):(f(),E(Ke,{key:1}))]),_:1},8,["title","onClick"])),b(W,{class:F({disabled:!d(i)}),title:"Go to previous slide",onClick:d(u)},{default:R(()=>[b(B)]),_:1},8,["class","onClick"]),b(W,{class:F({disabled:!d(o)}),title:"Go to next slide",onClick:d(c)},{default:R(()=>[b(ne)]),_:1},8,["class","onClick"]),d(r)?S("v-if",!0):(f(),E(W,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=de=>d(Re)())},{default:R(()=>[b(ue)]),_:1})),d(es)?S("v-if",!0):(f(),E(W,{key:2,title:d(ze)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=de=>d(Le)())},{default:R(()=>[d(ze)?(f(),E(xt,{key:0})):(f(),E(St,{key:1}))]),_:1},8,["title"])),b(pe),d(r)?S("v-if",!0):(f(),k(z,{key:3},[!d(a)&&!d(x)&&C.value?(f(),k(z,{key:0},[b(d(C)),b(pe)],64)):S("v-if",!0),d(a)?(f(),E(W,{key:1,title:d(fe)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=de=>fe.value=!d(fe))},{default:R(()=>[d(fe)?(f(),E(Mt,{key:0})):(f(),E($t,{key:1}))]),_:1},8,["title"])):S("v-if",!0)],64)),(!d(me).drawings.presenterOnly||d(a))&&!d(r)?(f(),k(z,{key:4},[b(W,{class:"relative",title:d(m)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=de=>m.value=!d(m))},{default:R(()=>[b(Ct),d(m)?(f(),k("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ce({background:d(p).color})},null,4)):S("v-if",!0)]),_:1},8,["title"]),b(pe)],64)):S("v-if",!0),d(r)?S("v-if",!0):(f(),k(z,{key:5},[d(a)?(f(),E(Ue,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[b(Et)]),_:1},8,["to"])):S("v-if",!0),d(l)?(f(),E(Ue,{key:1,to:w.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[b(It)]),_:1},8,["to"])):S("v-if",!0),S("v-if",!0),d(a)?(f(),E(W,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:d(ls)},{default:R(()=>[b(Lt),oe(" "+X(d(as)),1)]),_:1},8,["onClick"])):S("v-if",!0)],64)),(f(),k(z,{key:6},[d(me).download?(f(),E(W,{key:0,title:"Download as PDF",onClick:d(lt)},{default:R(()=>[b(Rt)]),_:1},8,["onClick"])):S("v-if",!0)],64)),!d(a)&&d(me).info&&!d(r)?(f(),E(W,{key:7,title:"Show info",onClick:V[5]||(V[5]=de=>Qe.value=!d(Qe))},{default:R(()=>[b(At)]),_:1})):S("v-if",!0),!d(a)&&!d(r)?(f(),E(Xs,{key:8},{button:R(()=>[b(W,{title:"Adjust settings"},{default:R(()=>[b(Nt)]),_:1})]),menu:R(()=>[b(Hs)]),_:1})):S("v-if",!0),d(r)?S("v-if",!0):(f(),E(pe,{key:9})),v("div",nn,[v("div",on,[oe(X(d(n))+" ",1),v("span",rn,"/ "+X(d(h)),1)])]),b(d(sn))],34)],512)}}}),No=H(an,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/NavControls.vue"]]),ln=["onClick"],cn={class:"text-green font-bold"},un={class:"opacity-50"},dn={key:1,class:"opacity-50"},hn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},Ce=4*16*2,Xe=2*16,fn=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Ve(t,"modelValue",e),{currentSlideNo:i,go:r,slides:a}=se();function l(){o.value=!1}function c($){r($),l()}function u($){return $===P.value}const h=Ae.smaller("xs"),p=Ae.smaller("sm"),m=A(()=>h.value?$e.width.value-Ce:p.value?($e.width.value-Ce-Xe)/2:300),x=A(()=>Math.floor(($e.width.value-Ce)/(m.value+Xe))),y=D("");return Wt("keypress",$=>{if(!G.value){y.value="";return}if($.key==="Enter"){$.preventDefault(),y.value?(c(+y.value),y.value=""):c(P.value);return}const M=Number.parseInt($.key.replace(/[^0-9]/g,""));if(Number.isNaN(M)){y.value="";return}if(!y.value&&M===0)return;if(y.value+=String(M),+y.value>=a.value.length){y.value="";return}const L=a.value.findIndex(w=>`/${w.no}`===y.value);L!==-1&&(P.value=L+1),+y.value*10>a.value.length&&(c(+y.value),y.value="")}),st(()=>{P.value=i.value,Be.value=x.value}),($,M)=>{const L=Cs;return f(),k(z,null,[b(zt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(v("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:M[0]||(M[0]=w=>l())},[v("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ce(`grid-template-columns: repeat(auto-fit,minmax(${m.value}px,1fr))`)},[(f(!0),k(z,null,we(d(a),(w,T)=>(f(),k("div",{key:w.no,class:"relative"},[v("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",u(T+1)||d(P)===T+1?"border-primary":"border-main"]),onClick:_=>c(w.no)},[(f(),E(Fs,{key:w.no,width:m.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:R(()=>[w!=null&&w.component?(f(),E(ut,{key:0,is:w.component,"clicks-context":d(ts)(w,d(ss)),class:F(d(dt)(w)),route:w,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):S("v-if",!0),b(ns,{page:w.no},null,8,["page"])]),_:2},1032,["width"]))],10,ln),v("div",{class:"absolute top-0",style:ce(`left: ${m.value+5}px`)},[y.value&&String(T+1).startsWith(y.value)?(f(),k(z,{key:0},[v("span",cn,X(y.value),1),v("span",un,X(String(T+1).slice(y.value.length)),1)],64)):(f(),k("span",dn,X(T+1),1))],4)]))),128))],4)],512),[[it,d(o)]])]),_:1}),d(o)?(f(),k("div",hn,[b(W,{title:"Close",class:"text-2xl",onClick:l},{default:R(()=>[b(L)]),_:1}),S("v-if",!0)])):S("v-if",!0)],64)}}}),To=H(fn,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):mt(t)==="[object Array]"}const pn=1/0;function vn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-pn?"-0":e}function mn(t){return t==null?"":vn(t)}function Q(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function _n(t){return t===!0||t===!1||gn(t)&&mt(t)=="[object Boolean]"}function vt(t){return typeof t=="object"}function gn(t){return vt(t)&&t!==null}function U(t){return t!=null}function Ee(t){return!t.trim().length}function mt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const yn="Incorrect 'index' type",kn=t=>`Invalid value for key ${t}`,wn=t=>`Pattern length exceeds max of ${t}.`,bn=t=>`Missing ${t} property in key`,xn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Sn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=_t(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function _t(t){let e=null,s=null,n=null,o=1,i=null;if(Q(t)||J(t))n=t,e=Ze(t),s=Ne(t);else{if(!Je.call(t,"name"))throw new Error(bn("name"));const r=t.name;if(n=r,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(xn(r));e=Ze(r),s=Ne(r),i=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:i}}function Ze(t){return J(t)?t:t.split(".")}function Ne(t){return J(t)?t.join("."):t}function Mn(t,e){let s=[],n=!1;const o=(i,r,a)=>{if(U(i))if(!r[a])s.push(i);else{let l=r[a];const c=i[l];if(!U(c))return;if(a===r.length-1&&(Q(c)||pt(c)||_n(c)))s.push(mn(c));else if(J(c)){n=!0;for(let u=0,h=c.length;u<h;u+=1)o(c[u],r,a+1)}else r.length&&o(c,r,a+1)}};return o(t,Q(e)?e.split("."):e,0),n?s:s[0]}const $n={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Cn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},En={location:0,threshold:.6,distance:100},In={useExtendedSearch:!1,getFn:Mn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Cn,...$n,...En,...In};const Ln=/[^ ]+/g;function Rn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(Ln).length;if(s.has(i))return s.get(i);const r=1/Math.pow(i,.5*t),a=parseFloat(Math.round(r*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class Ge{constructor({getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=Rn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!U(e)||Ee(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(U(r)){if(J(r)){let a=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(U(u))if(Q(u)&&!Ee(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else J(u)&&u.forEach((h,p)=>{l.push({nestedArrIndex:p,value:h})})}n.$[i]=a}else if(Q(r)&&!Ee(r)){let a={v:r,n:this.norm.get(r)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function gt(t,e,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const o=new Ge({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(_t)),o.setSources(e),o.create(),o}function An(t,{getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:o}=t,i=new Ge({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(o),i}function ve(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const r=e/t.length;if(i)return r;const a=Math.abs(n-s);return o?r+a/o:a?1:r}function Nn(t=[],e=g.minMatchCharLength){let s=[],n=-1,o=-1,i=0;for(let r=t.length;i<r;i+=1){let a=t[i];a&&n===-1?n=i:!a&&n!==-1&&(o=i-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const te=32;function Tn(t,e,s,{location:n=g.location,distance:o=g.distance,threshold:i=g.threshold,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:c=g.ignoreLocation}={}){if(e.length>te)throw new Error(wn(te));const u=e.length,h=t.length,p=Math.max(0,Math.min(n,h));let m=i,x=p;const y=a>1||l,$=y?Array(h):[];let M;for(;(M=t.indexOf(e,x))>-1;){let I=ve(e,{currentLocation:M,expectedLocation:p,distance:o,ignoreLocation:c});if(m=Math.min(I,m),x=M+u,y){let C=0;for(;C<u;)$[M+C]=1,C+=1}}x=-1;let L=[],w=1,T=u+h;const _=1<<u-1;for(let I=0;I<u;I+=1){let C=0,j=T;for(;C<j;)ve(e,{errors:I,currentLocation:p+j,expectedLocation:p,distance:o,ignoreLocation:c})<=m?C=j:T=j,j=Math.floor((T-C)/2+C);T=j;let re=Math.max(1,p-j+1),V=r?h:Math.min(p+j,h)+u,Z=Array(V+2);Z[V+1]=(1<<I)-1;for(let B=V;B>=re;B-=1){let ne=B-1,ue=s[t.charAt(ne)];if(y&&($[ne]=+!!ue),Z[B]=(Z[B+1]<<1|1)&ue,I&&(Z[B]|=(L[B+1]|L[B])<<1|1|L[B+1]),Z[B]&_&&(w=ve(e,{errors:I,currentLocation:ne,expectedLocation:p,distance:o,ignoreLocation:c}),w<=m)){if(m=w,x=ne,x<=p)break;re=Math.max(1,2*p-x)}}if(ve(e,{errors:I+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:c})>m)break;L=Z}const O={isMatch:x>=0,score:Math.max(.001,w)};if(y){const I=Nn($,a);I.length?l&&(O.indices=I):O.isMatch=!1}return O}function On(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(p,m)=>{this.chunks.push({pattern:p,alphabet:On(p),startIndex:m})},h=this.pattern.length;if(h>te){let p=0;const m=h%te,x=h-m;for(;p<x;)u(this.pattern.substr(p,te),p),p+=te;if(m){const y=h-te;u(this.pattern.substr(y),y)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let x={isMatch:!0,score:0};return n&&(x.indices=[[0,e.length-1]]),x}const{location:o,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,p=!1;this.chunks.forEach(({pattern:x,alphabet:y,startIndex:$})=>{const{isMatch:M,score:L,indices:w}=Tn(e,x,y,{location:o+$,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});M&&(p=!0),h+=L,M&&w&&(u=[...u,...w])});let m={isMatch:p,score:p?h/this.chunks.length:1};return p&&n&&(m.indices=u),m}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Pn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Dn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Fn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Vn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends ee{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class wt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,o.push([n,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const Te=[Pn,wt,Fn,Vn,Bn,jn,Dn,kt],et=Te.length,Gn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Kn="|";function Un(t,e={}){return t.split(Kn).map(s=>{let n=s.trim().split(Gn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const a=n[i];let l=!1,c=-1;for(;!l&&++c<et;){const u=Te[c];let h=u.isMultiMatch(a);h&&(o.push(new u(h,e)),l=!0)}if(!l)for(c=-1;++c<et;){const u=Te[c];let h=u.isSingleMatch(a);if(h){o.push(new u(h,e));break}}}return o})}const Wn=new Set([kt.type,wt.type]);class zn{constructor(e,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:o=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:r=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:c=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=Un(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const u=s[l];r.length=0,i=0;for(let h=0,p=u.length;h<p;h+=1){const m=u[h],{isMatch:x,indices:y,score:$}=m.search(e);if(x){if(i+=1,a+=$,n){const M=m.constructor.type;Wn.has(M)?r=[...r,...y]:r.push(y)}}else{a=0,i=0,r.length=0;break}}if(i){let h={isMatch:!0,score:a/i};return n&&(h.indices=r),h}}return{isMatch:!1,score:1}}}const Oe=[];function Hn(...t){Oe.push(...t)}function Pe(t,e){for(let s=0,n=Oe.length;s<n;s+=1){let o=Oe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ke={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ke.AND]||t[ke.OR]),Yn=t=>!!t[De.PATH],Qn=t=>!J(t)&&vt(t)&&!Fe(t),tt=t=>({[ke.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let i=Object.keys(o);const r=Yn(o);if(!r&&i.length>1&&!Fe(o))return n(tt(o));if(Qn(o)){const l=r?o[De.PATH]:i[0],c=r?o[De.PATTERN]:o[l];if(!Q(c))throw new Error(kn(l));const u={keyId:Ne(l),pattern:c};return s&&(u.searcher=Pe(c,e)),u}let a={children:[],operator:i[0]};return i.forEach(l=>{const c=o[l];J(c)&&c.forEach(u=>{a.children.push(n(u))})}),a};return Fe(t)||(t=tt(t)),n(t)}function Xn(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:i,score:r})=>{const a=o?o.weight:null;n*=Math.pow(r===0&&a?Number.EPSILON:r,(a||1)*(e?1:i))}),s.score=n})}function Jn(t,e){const s=t.matches;e.matches=[],U(s)&&s.forEach(n=>{if(!U(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function Zn(t,e){e.score=t.score}function qn(t,e,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const o=[];return s&&o.push(Jn),n&&o.push(Zn),t.map(i=>{const{idx:r}=i,a={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(i,a)}),a})}class ie{constructor(e,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new Sn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ge))throw new Error(yn);this._myIndex=s||gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){U(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Xn(l,{ignoreFieldNorm:a}),i&&l.sort(r),pt(s)&&s>-1&&(l=l.slice(0,s)),qn(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:a})=>{if(!U(i))return;const{isMatch:l,score:c,indices:u}=s.searchIn(i);l&&o.push({item:i,idx:r,matches:[{score:c,value:i,norm:a,indices:u}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:p}=a,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:p});return m&&m.length?[{idx:c,item:l,matches:m}]:[]}const u=[];for(let h=0,p=a.children.length;h<p;h+=1){const m=a.children[h],x=n(m,l,c);if(x.length)u.push(...x);else if(a.operator===ke.AND)return[]}return u},o=this._myIndex.records,i={},r=[];return o.forEach(({$:a,i:l})=>{if(U(a)){let c=n(s,a,l);c.length&&(i[l]||(i[l]={idx:l,item:a,matches:[]},r.push(i[l])),c.forEach(({matches:u})=>{i[l].matches.push(...u)}))}}),r}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:a})=>{if(!U(r))return;let l=[];n.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:r[u],searcher:s}))}),l.length&&i.push({idx:a,item:r,matches:l})}),i}_findMatches({key:e,value:s,searcher:n}){if(!U(s))return[];let o=[];if(J(s))s.forEach(({v:i,i:r,n:a})=>{if(!U(i))return;const{isMatch:l,score:c,indices:u}=n.searchIn(i);l&&o.push({score:c,key:e,value:i,idx:r,norm:a,indices:u})});else{const{v:i,n:r}=s,{isMatch:a,score:l,indices:c}=n.searchIn(i);a&&o.push({score:l,key:e,value:i,norm:r,indices:c})}return o}}ie.version="7.0.0";ie.createIndex=gt;ie.parseIndex=An;ie.config=g;ie.parseQuery=bt;Hn(zn);const eo={key:0},to={key:1},so={key:2},no={key:3},oo={key:4},io={key:5},ro={key:6},ao=v("span",{class:"katex"},[v("span",{class:"katex-mathml"},[v("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[v("semantics",null,[v("mrow",null,[v("mi",{mathvariant:"bold-italic"},"k")]),v("annotation",{encoding:"application/x-tex"},"\\bm{k}")])])]),v("span",{class:"katex-html","aria-hidden":"true"},[v("span",{class:"base"},[v("span",{class:"strut",style:{height:"0.6944em"}}),v("span",{class:"mord"},[v("span",{class:"mord"},[v("span",{class:"mord boldsymbol",style:{"margin-right":"0.01852em"}},"k")])])])])],-1),lo={key:7},co={key:8},uo=v("span",{class:"katex"},[v("span",{class:"katex-mathml"},[v("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[v("semantics",null,[v("mrow",null,[v("mi",{mathvariant:"bold-italic"},"k")]),v("annotation",{encoding:"application/x-tex"},"\\bm{k}")])])]),v("span",{class:"katex-html","aria-hidden":"true"},[v("span",{class:"base"},[v("span",{class:"strut",style:{height:"0.6944em"}}),v("span",{class:"mord"},[v("span",{class:"mord"},[v("span",{class:"mord boldsymbol",style:{"margin-right":"0.01852em"}},"k")])])])])],-1),ho=v("span",{class:"katex"},[v("span",{class:"katex-mathml"},[v("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[v("semantics",null,[v("mrow",null,[v("mi",{mathvariant:"bold-italic"},"G")]),v("annotation",{encoding:"application/x-tex"},"\\bm{G}")])])]),v("span",{class:"katex-html","aria-hidden":"true"},[v("span",{class:"base"},[v("span",{class:"strut",style:{height:"0.6861em"}}),v("span",{class:"mord"},[v("span",{class:"mord"},[v("span",{class:"mord boldsymbol"},"G")])])])])],-1),fo=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(f(),k("div",null,[+e.no==1?(f(),k("p",eo,"k点分割とは何か")):+e.no==2?(f(),k("p",to,"はじめに")):+e.no==3?(f(),k("p",so,"数学の復習")):+e.no==4?(f(),k("p",no,"周期境界条件と平面波基底")):+e.no==5?(f(),k("p",oo,"周期境界条件とk点分割")):+e.no==6?(f(),k("p",io,"k点分割と計算精度")):+e.no==7?(f(),k("p",ro,[ao,oe("は”良い量子数”")])):+e.no==8?(f(),k("p",lo,"まとめ")):+e.no==9?(f(),k("p",co,[oe("補足："),uo,oe("と"),ho])):S("v-if",!0)]))}}),po=H(fo,[["__file","/@slidev/title-renderer.md"]]),vo={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},mo=["value","disabled"],_o=["border","onClick"],go={"w-4":"","text-right":"",op50:"","text-sm":""},yo=Y({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),i=D(""),r=D(0),{go:a,slides:l}=se();function c(_){return _!=null}const u=A(()=>new ie(l.value.map(_=>{var O;return(O=_.meta)==null?void 0:O.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=A(()=>i.value.startsWith("/")?i.value.substring(1):i.value),p=A(()=>u.value.search(h.value).map(_=>_.item)),m=A(()=>!!p.value.length);function x(){if(m.value){const _=p.value.at(r.value||0);_&&a(_.no)}y()}function y(){i.value="",q.value=!1}function $(_){_.preventDefault(),r.value++,r.value>=p.value.length&&(r.value=0),L()}function M(_){_.preventDefault(),r.value--,r.value<=-2&&(r.value=p.value.length-1),L()}function L(){var O;const _=(O=o.value)==null?void 0:O[r.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function w(_){r.value=0,i.value=_.target.value}function T(_){a(_),y()}return ye(q,async _=>{var O;_?(i.value="",r.value=0,setTimeout(()=>{var I;return(I=s.value)==null?void 0:I.focus()},0)):(O=s.value)==null||O.blur()}),ye(ae,()=>{var _;(_=e.value)!=null&&_.contains(ae.value)||y()}),(_,O)=>(f(),k("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",d(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[v("div",vo,[v("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:i.value,type:"text",disabled:!d(q),class:F(["outline-none bg-transparent",{"text-red-400":!m.value&&i.value}]),placeholder:"Goto...",onKeydown:[he(x,["enter"]),he(y,["escape"]),he($,["down"]),he(M,["up"])],onInput:w},null,42,mo)]),p.value.length>0?(f(),k("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(f(!0),k(z,null,we(p.value,(I,C)=>(f(),k("li",{ref_for:!0,ref_key:"items",ref:o,key:I.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:C===0?"":"t main",class:F(r.value===C?"bg-active op100":"op80"),onClick:Ht(j=>T(I.no),["stop","prevent"])},[v("div",go,X(I.no),1),b(d(po),{no:I.no},null,8,["no"])],10,_o))),128))],512)):S("v-if",!0)],2))}}),Oo=H(yo,[["__scopeId","data-v-f5ee02a7"],["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/Goto.vue"]]);function ko(){const t=Yt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((i,r)=>{var y,$,M,L;const a=(y=He(r.params.no))==null?void 0:y.meta,l=($=He(i.params.no))==null?void 0:$.meta,c=(M=a==null?void 0:a.slide)==null?void 0:M.no,u=(L=l==null?void 0:l.slide)==null?void 0:L.no;if(!(c!==void 0&&u!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&c<u||(l==null?void 0:l.transition)==="view-transition"&&u<c))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const h=new Promise((w,T)=>{s=w,n=T});let p;const m=new Promise(w=>p=w);return document.startViewTransition(()=>(p(),h)).finished.then(()=>{n=void 0,s=void 0}),m}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const wo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},bo=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return d(Se).cursor?(f(),k("div",wo,[b(n,{class:"absolute",style:ce({left:`${d(Se).cursor.x}%`,top:`${d(Se).cursor.y}%`})},null,8,["style"])])):S("v-if",!0)}}}),xo=H(bo,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),So=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:i,slides:r}=se();ye(e,()=>{var h,p;(h=e.value)!=null&&h.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(p=i.value)!=null&&p.meta&&i.value.meta.preload!==!1&&(i.value.meta.__preloaded=!0)},{immediate:!0});const a=ko(),l=Ie();rt(()=>import("./DrawingLayer-D6iu_RqP.js"),__vite__mapDeps([11,2,12,6,3,4,7,5,8,9])).then(h=>l.value=h.default);const c=A(()=>r.value.filter(h=>{var p;return((p=h.meta)==null?void 0:p.__preloaded)||h===e.value}));function u(){Ye.value=!0,Es()}return(h,p)=>(f(),k(z,null,[S(" Global Bottom "),b(d(cs)),S(" Slides "),(f(),E(nt(d(a)?"div":Xt),Qt(d(Ye)?{}:d(s),{id:"slideshow",tag:"div",onAfterLeave:u}),{default:R(()=>[(f(!0),k(z,null,we(c.value,m=>ot((f(),k("div",{key:m.no},[b(ut,{is:m.component,"clicks-context":d(n)(m),class:F([d(dt)(m),"overflow-hidden"]),route:m,"render-context":h.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[it,m===d(e)]])),128))]),_:1},16)),S(" Global Top "),b(d(us)),l.value?(f(),E(d(l),{key:0})):S("v-if",!0),d(o)?S("v-if",!0):(f(),E(xo,{key:1}))],64))}}),Po=H(So,[["__scopeId","data-v-afb4231e"],["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Oo as G,W as I,No as N,To as Q,Fs as S,pe as V,Po as a,Ao as r,Ro as u};