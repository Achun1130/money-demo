import{E as v,a as g}from"./D30xTop-.js";import{_ as b}from"./CVA6azDD.js";import{E as k}from"./DPtPyue8.js";import{d as u,t as s,v as i,x as n,y as r,z as e,A as o,B as m,M as d,U as y}from"./BDaFmbO_.js";import"./CZwplaMT.js";import"./Dnj8X3EN.js";import"./D1tVy44S.js";import"./r5W6hzzQ.js";const $={class:"border-b border-b-black/20 pb-6"},B={class:"flex items-center gap-4"},C={class:"mr-auto text-title-m font-bold"},w={key:0,class:"mt-4 text-headline-s font-bold text-primary-10"},S={key:1,class:"mt-2 line-clamp-2 break-words text-button-l text-surface-on"},E=u({__name:"Index",props:{title:String,content:String,date:String},emits:["onClickBtn"],setup(t){return(l,a)=>{const _=b,c=k;return s(),i("div",$,[n("div",B,[n("span",C,r(t.date),1),e(c,{type:"primary",text:"",style:{"--button-padding-horizontal":"1rem","--button-padding-vertical":"0.75rem"},onClick:a[0]||(a[0]=f=>l.$emit("onClickBtn"))},{default:o(()=>[m(r(l.$t("button.more"))+" ",1),e(_,{class:"ml-1"},{default:o(()=>[m(" keyboard_arrow_right ")]),_:1})]),_:1})]),t.title?(s(),i("div",w,r(t.title),1)):d("",!0),t.content?(s(),i("p",S,r(t.content),1)):d("",!0)])}}}),N={class:"flex gap-4 border-b border-b-black/20 pb-6"},V={key:0,class:"flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-container text-primary-on-container"},z={key:0,class:"text-title-l font-bold text-primary-10"},A={key:1,class:"mt-2 line-clamp-1 break-words text-button-l text-surface-on"},L=u({__name:"WithAvatar",props:{title:String,content:String},setup(t){return(l,a)=>(s(),i("div",N,[l.$slots.icon?(s(),i("div",V,[y(l.$slots,"icon")])):d("",!0),n("div",null,[t.title?(s(),i("div",z,r(t.title),1)):d("",!0),t.content?(s(),i("p",A,r(t.content),1)):d("",!0)])]))}}),W={class:"flex flex-col gap-[6.25rem] p-[9.25rem]"},j=n("div",{class:"mb-24 text-display-s"},"Basic List",-1),D=n("div",{class:"text-title-l"},"default",-1),I=n("div",{class:"mb-24 text-display-s"},"With avatar",-1),M=n("div",{class:"text-title-l"},"default",-1),K=u({__name:"list",setup(t){function l(a){console.log(a)}return(a,_)=>{const c=v,f=E,p=g,x=b,h=L;return s(),i("div",W,[n("div",null,[j,e(p,null,{default:o(()=>[e(c,{span:3,offset:3},{default:o(()=>[D]),_:1}),e(c,{span:8},{default:o(()=>[e(f,{title:"最新消息標題文字",content:"最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字",date:"2024/04/04",onOnClickBtn:_[0]||(_[0]=O=>l("點擊查看更多"))})]),_:1})]),_:1})]),n("div",null,[I,e(p,null,{default:o(()=>[e(c,{span:3,offset:3},{default:o(()=>[M]),_:1}),e(c,{span:8},{default:o(()=>[e(h,{title:"標題文字",content:"列表文字列表文字列表文字列表文字列表文字列表文字列表文字列"},{icon:o(()=>[e(x,{"icon-size":"3rem",class:"mt-4"},{default:o(()=>[m(" person_outline ")]),_:1})]),_:1})]),_:1})]),_:1})])])}}});export{K as default};
