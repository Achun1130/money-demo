import{_ as u}from"./DZ1miFiv.js";import{E as p}from"./CNwdqdYp.js";import{n as f,o,c as n,a as l,t as e,b as r,w as s,d,q as c,E as y}from"./Dwv-tNMU.js";const _={class:"border-b border-b-black/20 pb-6"},k={class:"flex items-center gap-4"},x={class:"mr-auto text-title-m font-bold"},g={key:0,class:"mt-4 text-headline-s font-bold text-primary-10"},B=f({__name:"Index",props:{title:{type:String,default:""},content:{type:String,default:""},date:{type:String,default:""},lineClamp:{type:[String,Number],default:2}},emits:["onClickBtn"],setup(t){return(a,i)=>{const m=u,b=p;return o(),n("div",_,[l("div",k,[l("span",x,e(t.date),1),r(b,{type:"primary",text:"",style:{"--button-padding-horizontal":"1rem","--button-padding-vertical":"0.75rem"},onClick:i[0]||(i[0]=h=>a.$emit("onClickBtn"))},{default:s(()=>[d(e(a.$t("button.more"))+" ",1),r(m,{class:"ml-1"},{default:s(()=>[d(" keyboard_arrow_right ")]),_:1})]),_:1})]),t.title?(o(),n("div",g,e(t.title),1)):c("",!0),t.content?(o(),n("p",{key:1,class:"mt-2 break-words text-button-l text-surface-on",style:y([{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical"},{"-webkit-line-clamp":t.lineClamp}])},e(t.content),5)):c("",!0)])}}});export{B as _};