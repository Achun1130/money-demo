import{E as v,a as k}from"./Ih8nvB3n.js";import{_ as b}from"./fNntW1yk.js";import{E as y}from"./B6vY2dKL.js";import{d as u,t as s,v as l,x as o,y as r,z as e,A as n,B as m,M as d,U as $}from"./BS5F09bH.js";import"./GlG2frJt.js";import"./B8x3cXTq.js";const g={class:"border-b border-b-black/20 pb-6"},B={class:"flex items-center gap-4"},C={class:"mr-auto text-title-m font-bold"},w={key:0,class:"mt-4 text-headline-s font-bold text-primary-10"},S={key:1,class:"mt-2 line-clamp-2 break-words text-button-l text-surface-on"},E=u({__name:"Index",props:{title:String,content:String,date:String},emits:["onClickBtn"],setup(t){return(i,a)=>{const _=b,c=y;return s(),l("div",g,[o("div",B,[o("span",C,r(t.date),1),e(c,{type:"primary",text:"",style:{"--button-padding-horizontal":"1rem","--button-padding-vertical":"0.75rem"},onClick:a[0]||(a[0]=f=>i.$emit("onClickBtn"))},{default:n(()=>[m(r(i.$t("button.more"))+" ",1),e(_,{class:"ml-1"},{default:n(()=>[m(" keyboard_arrow_right ")]),_:1})]),_:1})]),t.title?(s(),l("div",w,r(t.title),1)):d("",!0),t.content?(s(),l("p",S,r(t.content),1)):d("",!0)])}}}),N={class:"flex gap-4 border-b border-b-black/20 pb-6"},V={key:0,class:"flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-container text-primary-on-container"},z={key:0,class:"text-title-l font-bold text-primary-10"},A={key:1,class:"mt-2 line-clamp-1 break-words text-button-l text-surface-on"},I=u({__name:"WithAvatar",props:{title:String,content:String},setup(t){return(i,a)=>(s(),l("div",N,[i.$slots.icon?(s(),l("div",V,[$(i.$slots,"icon")])):d("",!0),o("div",null,[t.title?(s(),l("div",z,r(t.title),1)):d("",!0),t.content?(s(),l("p",A,r(t.content),1)):d("",!0)])]))}}),L={class:"flex flex-col gap-[6.25rem] p-[9.25rem]"},W=o("div",{class:"mb-24 text-display-s"},"Basic List",-1),G=o("div",{class:"text-title-l"},"default",-1),j=o("div",{class:"mb-24 text-display-s"},"With avatar",-1),D=o("div",{class:"text-title-l"},"default",-1),H=u({__name:"list",setup(t){function i(a){console.log(a)}return(a,_)=>{const c=k,f=E,p=v,x=b,h=I;return s(),l("div",L,[o("div",null,[W,e(p,null,{default:n(()=>[e(c,{span:3,offset:3},{default:n(()=>[G]),_:1}),e(c,{span:8},{default:n(()=>[e(f,{title:"最新消息標題文字",content:"最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字",date:"2024/04/04",onOnClickBtn:_[0]||(_[0]=M=>i("點擊查看更多"))})]),_:1})]),_:1})]),o("div",null,[j,e(p,null,{default:n(()=>[e(c,{span:3,offset:3},{default:n(()=>[D]),_:1}),e(c,{span:8},{default:n(()=>[e(h,{title:"標題文字",content:"列表文字列表文字列表文字列表文字列表文字列表文字列表文字列"},{icon:n(()=>[e(x,{"icon-size":"3rem",class:"mt-4"},{default:n(()=>[m(" person_outline ")]),_:1})]),_:1})]),_:1})]),_:1})])])}}});export{H as default};
