import{E as h,a as v}from"./BCh943Ul.js";import{b as k,E as $,a as y,p as g}from"./DtMxJl-t.js";import"./kAMYG8_A.js";import{d as b,t as l,v as a,x as o,y as c,z as t,A as n,B,M as _,a3 as w}from"./6ybpBv-i.js";const C={class:"border-b border-b-black/20 pb-6"},E={class:"flex items-center gap-4"},S={class:"mr-auto text-title-m font-bold"},N={key:0,class:"mt-4 text-headline-s font-bold text-primary-10"},V={key:1,class:"mt-2 line-clamp-2 break-words text-button-l text-surface-on"},A=b({__name:"Index",props:{title:String,content:String,date:String},emits:["onClickBtn"],setup(d,{emit:s}){const e=d,r=s;return(i,p)=>{const m=k,u=$,f=y;return l(),a("div",C,[o("div",E,[o("span",S,c(e.date),1),t(f,{type:"primary",text:"",onClick:p[0]||(p[0]=x=>r("onClickBtn"))},{default:n(()=>[B(c(i.$t("button.more"))+" ",1),t(u,{size:"1rem",class:"ml-2"},{default:n(()=>[t(m)]),_:1})]),_:1})]),e.title?(l(),a("div",N,c(e.title),1)):_("",!0),e.content?(l(),a("p",V,c(e.content),1)):_("",!0)])}}}),L={class:"flex gap-4 border-b border-b-black/20 pb-6"},W={key:0,class:"flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-container text-primary-on-container"},z={class:"h-8 w-8"},I={key:0,class:"text-title-l font-bold text-primary-10"},j={key:1,class:"mt-2 line-clamp-1 break-words text-button-l text-surface-on"},D=b({__name:"WithAvatar",props:{title:String,content:String},setup(d){const s=d;return(e,r)=>(l(),a("div",L,[e.$slots.icon?(l(),a("div",W,[o("div",z,[w(e.$slots,"icon")])])):_("",!0),o("div",null,[s.title?(l(),a("div",I,c(s.title),1)):_("",!0),s.content?(l(),a("p",j,c(s.content),1)):_("",!0)])]))}}),M={class:"flex flex-col gap-[6.25rem] p-[9.25rem]"},O=o("div",{class:"mb-24 text-display-s"},"Basic List",-1),R=o("div",{class:"text-title-l"},"default",-1),T=o("div",{class:"mb-24 text-display-s"},"With avatar",-1),q=o("div",{class:"text-title-l"},"default",-1),K=b({__name:"list",setup(d){function s(e){console.log(e)}return(e,r)=>{const i=h,p=A,m=v,u=g,f=D;return l(),a("div",M,[o("div",null,[O,t(m,null,{default:n(()=>[t(i,{span:3,offset:3},{default:n(()=>[R]),_:1}),t(i,{span:8},{default:n(()=>[t(p,{title:"最新消息標題文字",content:"最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字",date:"2024/04/04",onOnClickBtn:r[0]||(r[0]=x=>s("點擊查看更多"))})]),_:1})]),_:1})]),o("div",null,[T,t(m,null,{default:n(()=>[t(i,{span:3,offset:3},{default:n(()=>[q]),_:1}),t(i,{span:8},{default:n(()=>[t(f,{title:"標題文字",content:"列表文字列表文字列表文字列表文字列表文字列表文字列表文字列"},{icon:n(()=>[t(u)]),_:1})]),_:1})]),_:1})])])}}});export{K as default};