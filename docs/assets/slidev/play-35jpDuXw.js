function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-lt-7Rxqn.js","assets/modules/unplugin-icons-DVPgGpWI.js","assets/modules/vue-E2274tjY.js","assets/modules/shiki-aBBLN-a2.js","assets/modules/shiki-UnITDZrU.css","assets/slidev/DrawingPreview-vF6vRR4V.js","assets/index-ugccqRLv.js","assets/index-IDp_ebOm.css","assets/slidev/bottom-gj3tlmYI.js","assets/bottom-2yFrefRR.css","assets/slidev/SlidesShow-72qS1Eaz.js","assets/SlidesShow-2QAJGIjA.css","assets/DrawingControls-uU9aGS-d.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as k,c as g,e as z,_ as E}from"../index-ugccqRLv.js";import{d as w,a7 as U,o as t,c as d,A as e,b as V,e as o,f as I,i as D,g as n,a8 as B,y as P,k as M,a6 as _,$ as R,M as y,l as u,F as $,t as A,h as O}from"../modules/vue-E2274tjY.js";import{b as x,e as C,f as S,h as T,j as N,w as L,k as W,l as j}from"./bottom-gj3tlmYI.js";import{Q as F,G,r as H,u as Q,S as J,a as K,N as X}from"./SlidesShow-72qS1Eaz.js";import{P as q}from"./PrintStyle-ntdn46a8.js";import{u as Y}from"./DrawingPreview-vF6vRR4V.js";import"../modules/shiki-aBBLN-a2.js";import"../modules/unplugin-icons-DVPgGpWI.js";const Z="/kpoint_sampling/assets/logo-WJB0mvzm.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},se=w({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,s=U(i,"modelValue",a);function l(){s.value=!1}return(m,r)=>(t(),d(B,null,[e(s)?(t(),V("div",ee,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>l())}),o("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[I(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),le=k(se,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/Modal.vue"]]),oe={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),R("dev ")])])],-1),ie=w({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const s=U(c,"modelValue",a),l=P(()=>typeof g.info=="string");return(m,r)=>(t(),d(le,{modelValue:e(s),"onUpdate:modelValue":r[0]||(r[0]=p=>_(s)?s.value=p:null),class:"px-6 py-4"},{default:M(()=>[o("div",oe,[l.value?(t(),V("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,te)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=k(ie,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=w({__name:"Controls",setup(c){const a=y(),i=y();return(f,s)=>(t(),V($,null,[u(F,{modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=l=>_(x)?x.value=l:null)},null,8,["modelValue"]),u(G),a.value?(t(),d(e(a),{key:0})):n("v-if",!0),i.value?(t(),d(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":s[1]||(s[1]=l=>_(C)?C.value=l:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(t(),d(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":s[2]||(s[2]=l=>_(S)?S.value=l:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=k(re,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/Controls.vue"]]),ue=w({__name:"play",setup(c){H();const{next:a,prev:i,isEmbedded:f,isPrintMode:s}=z(),{isDrawing:l}=Y(),m=A();function r(v){var b;N.value||((b=v.target)==null?void 0:b.id)==="slide-container"&&(v.screenX/window.innerWidth>.6?a():i())}Q(m);const p=P(()=>T.value||N.value);y();const h=y();return E(()=>import("./DrawingControls-lt-7Rxqn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(v=>h.value=v.default),(v,b)=>(t(),V($,null,[e(s)?(t(),d(q,{key:0})):n("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:m,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(J,{class:"w-full h-full",style:O({background:"var(--slidev-slide-container-background, black)"}),width:e(s)?e(L).width.value:void 0,scale:e(W),"is-main":!0,onPointerdown:r},{default:M(()=>[u(K,{"render-context":"slide"})]),controls:M(()=>[o("div",{class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[u(X,{class:"m-auto",persist:p.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(f)&&h.value?(t(),d(e(h),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),ke=k(ue,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/pages/play.vue"]]);export{ke as default};