import{d as f,r as _,M as m,N as p,v as d,x,O as h,P as r,Q as v}from"./entry.4pGXjRtV.js";const w=["innerHTML"],k=f({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let s,t;const o=l,a=_("");let c=!1;async function i(){try{const n=await Object.assign({"/assets/icons/download.svg":()=>v(()=>import("./download.86oKTfXC.js"),__vite__mapDeps([]),import.meta.url).then(u=>u.default)})[`/assets/icons/${o.name}.svg`]();n.includes("stroke")&&(c=!0),a.value=n}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}return[s,t]=m(()=>i()),await s,t(),p(i),(e,n)=>(d(),x("span",{class:h(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":r(c)&&!e.filled}]),innerHTML:r(a)},null,10,w))}});export{k as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
