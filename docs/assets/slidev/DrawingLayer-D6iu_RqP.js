import{d as l,t as i,a3 as u,D as m,E as c,o as p,b as f,i as d,A as s}from"../modules/vue-E2274tjY.js";import{u as _}from"./context-tbC5xYTm.js";import{u as v}from"./DrawingPreview-vF6vRR4V.js";import{b as g}from"../index-ugccqRLv.js";import"./bottom-gj3tlmYI.js";import"../modules/shiki-aBBLN-a2.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:n,loadCanvas:t}=v(),r=_().$scale,a=i();return u(()=>{e.mount(a.value,a.value.parentElement),m(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),c(()=>{e.unmount()}),(o,b)=>(p(),f("svg",{ref_key:"svg",ref:a,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!s(n),"touch-none":s(n)}])},null,2))}}),B=g(w,[["__file","/Users/usami/matelier/slidev/kpoint_sampling/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};