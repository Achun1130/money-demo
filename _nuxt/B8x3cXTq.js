import{c as r,K as c,r as v,bW as f,aa as n,L as i}from"./BS5F09bH.js";const m=s=>{const o=c();return r(()=>{var e,t;return(t=(e=o==null?void 0:o.proxy)==null?void 0:e.$props)==null?void 0:t[s]})},u=Symbol("formContextKey"),b=Symbol("formItemContextKey"),y=(s,o={})=>{const e=v(void 0),t=o.prop?e:m("size"),d=o.global?e:f(),l=o.form?{size:void 0}:n(u,void 0),a=o.formItem?{size:void 0}:n(b,void 0);return r(()=>t.value||i(s)||(a==null?void 0:a.size)||(l==null?void 0:l.size)||d.value||"")},z=s=>{const o=m("disabled"),e=n(u,void 0);return r(()=>o.value||i(s)||(e==null?void 0:e.disabled)||!1)};export{y as a,b,u as f,z as u};