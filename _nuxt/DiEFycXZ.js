import{E as $,a as k}from"./Ih8nvB3n.js";import{_ as p}from"./fNntW1yk.js";import{E as x}from"./B6vY2dKL.js";import{d as m,t as d,v as r,x as e,y as c,z as t,A as n,B as _,M as h,N as y}from"./BS5F09bH.js";import"./GlG2frJt.js";import"./B8x3cXTq.js";const C={class:"flex flex-col gap-4 rounded-2xl p-5 shadow-card"},w={class:"flex"},B={class:"mr-auto text-headline-l font-bold text-surface-on"},S={class:"flex h-12 items-center self-start"},E={key:0,class:"line-clamp-3 break-words text-content-l text-surface-on"},I=m({__name:"Index",props:{title:String,content:String},emits:["onClickBtn"],setup(o){return(l,a)=>{const i=p,s=x;return d(),r("div",C,[e("div",w,[e("div",B,c(o.title),1),e("div",S,[t(s,{type:"primary",text:"",style:{"--button-padding-horizontal":"1rem","--button-padding-vertical":"0.75rem"},onClick:a[0]||(a[0]=u=>l.$emit("onClickBtn"))},{default:n(()=>[_(c(l.$t("button.more"))+" ",1),t(i,{class:"ml-1"},{default:n(()=>[_(" keyboard_arrow_right ")]),_:1})]),_:1})])]),o.content?(d(),r("p",E,c(o.content),1)):h("",!0)])}}}),D={class:"overflow-hidden rounded-2xl shadow-card"},N={class:"p-5"},V={class:"text-headline-l font-bold text-surface-on"},z={key:0,class:"mt-4 line-clamp-3 break-words text-content-l text-surface-on"},G={class:"text-right"},M=m({__name:"WithImage",props:{title:String,content:String,image:String},emits:["onClickBtn"],setup(o){return(l,a)=>{const i=p,s=x;return d(),r("div",D,[e("div",{class:"aspect-[429/308] bg-cover bg-center bg-no-repeat",style:y({backgroundImage:`url(${o.image})`})},null,4),e("div",N,[e("div",V,c(o.title),1),o.content?(d(),r("p",z,c(o.content),1)):h("",!0),e("div",G,[t(s,{type:"primary",round:"",plain:"",size:"large",class:"mt-[1.875rem]",onClick:a[0]||(a[0]=u=>l.$emit("onClickBtn"))},{default:n(()=>[t(i,{class:"mr-1"},{default:n(()=>[_(" arrow_forward ")]),_:1}),_(" "+c(l.$t("button.info")),1)]),_:1})])])])}}}),T={class:"rounded-2xl border-l-[10px] border-l-primary-40 p-[2.625rem] text-headline-l font-bold text-surface-on shadow-card"},W=m({__name:"Title",props:{title:String},setup(o){return(l,a)=>(d(),r("div",T,c(o.title),1))}}),A={class:"flex flex-col gap-[6.25rem] p-[9.25rem]"},H=e("div",{class:"mb-24 text-display-s"},"Basic Card",-1),O=e("div",{class:"text-title-l"},"default",-1),j=e("div",{class:"mb-24 text-display-s"},"With images",-1),q=e("div",{class:"text-title-l"},"default",-1),R=e("div",{class:"mb-24 text-display-s"},"Title card",-1),Y=e("div",{class:"text-title-l"},"default",-1),U=m({__name:"card",setup(o){function l(a){console.log(a)}return(a,i)=>{const s=k,u=I,f=$,g=M,v=W;return d(),r("div",A,[e("div",null,[H,t(f,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[O]),_:1}),t(s,{span:8},{default:n(()=>[t(u,{title:"產品名稱",content:"內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明",onOnClickBtn:i[0]||(i[0]=b=>l("點擊查看更多"))})]),_:1})]),_:1})]),e("div",null,[j,t(f,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[q]),_:1}),t(s,{span:8},{default:n(()=>[t(g,{title:"產品名稱",content:"內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明",image:"https://images.unsplash.com/photo-1716872491340-4626a22c582d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",onOnClickBtn:i[1]||(i[1]=b=>l("點擊詳細資訊"))})]),_:1})]),_:1})]),e("div",null,[R,t(f,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[Y]),_:1}),t(s,{span:12},{default:n(()=>[t(v,{title:"產品名稱"})]),_:1})]),_:1})])])}}});export{U as default};