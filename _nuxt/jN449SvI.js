import{E as $,a as C}from"./C06s6KMp.js";import{d as f,t as _,v as m,x as e,y as d,z as t,A as n,B as h,R as g,Q as k,O as v,S as y,P as w}from"./DwzzRD8k.js";import{E as b}from"./DllE8sXl.js";const B={class:"flex flex-col gap-4 rounded-2xl p-5 shadow-card"},S={class:"flex"},E={class:"mr-auto text-headline-l font-bold text-surface-on"},z={class:"flex h-12 items-center self-start"},D={key:0,class:"line-clamp-3 break-words text-content-l text-surface-on"},I=f({__name:"Index",props:{title:String,content:String},emits:["onClickBtn"],setup(i,{emit:a}){const o=i,l=a;return(s,c)=>{const r=k,p=v,u=b;return _(),m("div",B,[e("div",S,[e("div",E,d(o.title),1),e("div",z,[t(u,{type:"primary",text:"",style:{"--button-padding-horizontal":"1rem","--button-padding-vertical":"0.75rem"},onClick:c[0]||(c[0]=x=>l("onClickBtn"))},{default:n(()=>[h(d(s.$t("button.more"))+" ",1),t(p,{size:"1rem",class:"ml-2"},{default:n(()=>[t(r)]),_:1})]),_:1})])]),o.content?(_(),m("p",D,d(o.content),1)):g("",!0)])}}}),V={class:"overflow-hidden rounded-2xl shadow-card"},N={class:"p-5"},T={class:"text-headline-l font-bold text-surface-on"},W={key:0,class:"mt-4 line-clamp-3 break-words text-content-l text-surface-on"},A={class:"text-right"},H=f({__name:"WithImage",props:{title:String,content:String,image:String},emits:["onClickBtn"],setup(i,{emit:a}){const o=i,l=a;return(s,c)=>{const r=w,p=v,u=b;return _(),m("div",V,[e("div",{class:"aspect-[429/308] bg-cover bg-center bg-no-repeat",style:y({backgroundImage:`url(${i.image})`})},null,4),e("div",N,[e("div",T,d(o.title),1),o.content?(_(),m("p",W,d(o.content),1)):g("",!0),e("div",A,[t(u,{type:"primary",round:"",plain:"",size:"small",class:"mt-[1.875rem]",onClick:c[0]||(c[0]=x=>l("onClickBtn"))},{default:n(()=>[t(p,{size:"1rem",class:"mr-2"},{default:n(()=>[t(r)]),_:1}),h(" "+d(s.$t("button.info")),1)]),_:1})])])])}}}),M={class:"rounded-2xl border-l-[10px] border-l-primary-40 p-[2.625rem] text-headline-l font-bold text-surface-on shadow-card"},O=f({__name:"Title",props:{title:String},setup(i){const a=i;return(o,l)=>(_(),m("div",M,d(a.title),1))}}),G={class:"flex flex-col gap-[6.25rem] p-[9.25rem]"},R=e("div",{class:"mb-24 text-display-s"},"Basic Card",-1),j=e("div",{class:"text-title-l"},"default",-1),q=e("div",{class:"mb-24 text-display-s"},"With images",-1),P=e("div",{class:"text-title-l"},"default",-1),Q=e("div",{class:"mb-24 text-display-s"},"Title card",-1),Y=e("div",{class:"text-title-l"},"default",-1),L=f({__name:"card",setup(i){function a(o){console.log(o)}return(o,l)=>{const s=C,c=I,r=$,p=H,u=O;return _(),m("div",G,[e("div",null,[R,t(r,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[j]),_:1}),t(s,{span:8},{default:n(()=>[t(c,{title:"產品名稱",content:"內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明",onOnClickBtn:l[0]||(l[0]=x=>a("點擊查看更多"))})]),_:1})]),_:1})]),e("div",null,[q,t(r,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[P]),_:1}),t(s,{span:8},{default:n(()=>[t(p,{title:"產品名稱",content:"內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明",image:"https://images.unsplash.com/photo-1716872491340-4626a22c582d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",onOnClickBtn:l[1]||(l[1]=x=>a("點擊詳細資訊"))})]),_:1})]),_:1})]),e("div",null,[Q,t(r,null,{default:n(()=>[t(s,{span:3,offset:3},{default:n(()=>[Y]),_:1}),t(s,{span:12},{default:n(()=>[t(u,{title:"產品名稱"})]),_:1})]),_:1})])])}}});export{L as default};
