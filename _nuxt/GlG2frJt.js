import{f as p,b as t}from"./B8x3cXTq.js";import{aa as r,r as e,c as f,o as I,H as h,ah as w,aT as m,aw as y}from"./BS5F09bH.js";const L=()=>{const v=r(p,void 0),u=r(t,void 0);return{form:v,formItem:u}},U=(v,{formItemContext:u,disableIdGeneration:i,disableIdManagement:s})=>{i||(i=e(!1)),s||(s=e(!1));const a=e();let d;const c=f(()=>{var l;return!!(!(v.label||v.ariaLabel)&&u&&u.inputIds&&((l=u.inputIds)==null?void 0:l.length)<=1)});return I(()=>{d=h([m(v,"id"),i],([l,n])=>{const o=l??(n?void 0:w().value);o!==a.value&&(u!=null&&u.removeInputId&&(a.value&&u.removeInputId(a.value),!(s!=null&&s.value)&&!n&&o&&u.addInputId(o)),a.value=o)},{immediate:!0})}),y(()=>{d&&d(),u!=null&&u.removeInputId&&a.value&&u.removeInputId(a.value)}),{isLabeledByFormItem:c,inputId:a}};export{U as a,L as u};