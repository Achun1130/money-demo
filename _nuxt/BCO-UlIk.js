import{_ as S,T as I,F as M}from"./DZ1miFiv.js";import{E as h}from"./CNwdqdYp.js";import{E as Z,a as ee}from"./BXAaP87h.js";import{E as te}from"./B3Bhg_3y.js";import{_ as q}from"./DASqlfDG.js";import{b as le,E as oe,a as ne}from"./DDls1Ksy.js";import{_ as ae}from"./BtxxwFHF.js";import{E as N}from"./CWIWAHYr.js";import{G as ie,H as se,n as F,r as V,o as b,c as D,a as _,b as t,w as e,d as p,v as P,u as d,E as re,I as me,F as T,_ as ue,z as U,s as de,q as ce,t as E,J as z,K as j,C as L,x as pe,y as R,B as fe,L as _e}from"./Dwv-tNMU.js";import{E as ge,a as be}from"./zy0uT1Ly.js";import{E as ve,u as ye}from"./CF18otPU.js";import"./TUFWRr5W.js";/* empty css        */import"./CEStyuf4.js";import{r as Ce,s as xe,a as ke}from"./Cynbaqro.js";import"./vpUwuRvH.js";import"./DhbvpM10.js";import"./jeCagBFP.js";import"./dIHpSHg7.js";import"./BkQL_UfY.js";import"./CDk1GorF.js";import"./o8To9XYI.js";import"./y9GKukHp.js";import"./BkVBIAPV.js";const $e=(o,i,a,l)=>{ie(()=>{o.addEventListener(i,a,l)}),se(()=>{o.removeEventListener(i,a,l)})},Be={class:"upload-image__actions"},we=["src"],Ie=F({__name:"UploadImage",props:{url:{type:String,required:!0}},emits:["onClickDeleteBtn"],setup(o){const i=V(),a=V(!1),l=V(!1);function s(m){a.value=m}function c(){l.value=!0}return $e(document,"click",m=>{var n;s(!!(i.value===m.target||(n=i.value)!=null&&n.contains(m.target)))}),(m,n)=>{const v=S,y=h,$=N,B=q;return b(),D(T,null,[_("div",{ref_key:"uploadImageRef",ref:i,class:P(["upload-image",{active:d(a)}]),style:re({backgroundImage:`url(${o.url})`})},[_("div",Be,[t(y,{type:"primary",text:"",circle:"",style:{"--button-circle-size":"1.5rem"},onClick:c},{default:e(()=>[t(v,null,{default:e(()=>[p(" zoom_in ")]),_:1})]),_:1}),t(y,{type:"primary",text:"",circle:"",style:{"--button-circle-size":"1.5rem"},onClick:n[0]||(n[0]=x=>m.$emit("onClickDeleteBtn"))},{default:e(()=>[t(v,null,{default:e(()=>[p(" delete ")]),_:1})]),_:1})])],6),t(B,null,{default:e(()=>[t($,{modelValue:d(l),"onUpdate:modelValue":n[1]||(n[1]=x=>me(l)?l.value=x:null),"align-center":"",class:"max-w-fit"},{default:e(()=>[_("img",{src:o.url,alt:"Preview Image"},null,8,we)]),_:1},8,["modelValue"])]),_:1})],64)}}}),Ee=ue(Ie,[["__scopeId","data-v-f60e5b70"]]),he=F({__name:"Upload",props:{images:{required:!0,type:Array},uploadBtnText:{type:String,default:"新增檔案"}},emits:["onUploadImage","onDeleteImage"],setup(o,{emit:i}){const a=i;function l(c){a("onUploadImage",c)}function s(c){a("onDeleteImage",c)}return(c,m)=>{const n=Ee,v=ge,y=be,$=S,B=h,x=ve;return b(),D(T,null,[o.images.length?(b(),U(y,{key:0,gutter:20,class:"mb-4 w-full gap-y-5"},{default:e(()=>[(b(!0),D(T,null,de(o.images,(f,r)=>(b(),U(v,{key:r,span:8},{default:e(()=>[t(n,{url:f.url,onOnClickDeleteBtn:g=>s(r)},null,8,["url","onOnClickDeleteBtn"])]),_:2},1024))),128))]),_:1})):ce("",!0),t(x,{"show-file-list":!1,"auto-upload":!1,"on-change":l},{default:e(()=>[t(B,{type:"primary",round:"",plain:"",size:"large"},{default:e(()=>[t($,{class:"mr-1"},{default:e(()=>[p(" add ")]),_:1}),p(" "+E(o.uploadBtnText),1)]),_:1})]),_:1})],64)}}}),Fe={class:"px-8 py-6"},Oe=F({__name:"Confirm",props:z({title:{type:String,default:""},dialogClass:{type:String,default:""},leftBtnText:{type:String,default:"取消"},rightBtnText:{type:String,default:"確定"}},{visible:{type:Boolean,required:!0},visibleModifiers:{}}),emits:z(["onClosed","onClickLeftBtn","onClickRightBtn"],["update:visible"]),setup(o){const i=j(o,"visible");return(a,l)=>{const s=h,c=N,m=q;return b(),U(m,null,{default:e(()=>[t(c,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=n=>i.value=n),title:o.title,"show-close":!1,class:P(o.dialogClass),"align-center":"",onClosed:l[3]||(l[3]=n=>a.$emit("onClosed"))},{header:e(()=>[L(a.$slots,"header")]),footer:e(()=>[_("div",Fe,[t(s,{type:"primary",round:"",plain:"",size:"large",style:{"--button-padding-horizontal-large":"2.625rem"},onClick:l[0]||(l[0]=n=>a.$emit("onClickLeftBtn"))},{default:e(()=>[p(E(o.leftBtnText),1)]),_:1}),t(s,{type:"primary",round:"",size:"large",style:{"--button-padding-horizontal-large":"2.625rem"},onClick:l[1]||(l[1]=n=>a.$emit("onClickRightBtn"))},{default:e(()=>[p(E(o.rightBtnText),1)]),_:1})])]),default:e(()=>[L(a.$slots,"default")]),_:3},8,["modelValue","title","class"])]),_:3})}}}),Ve={class:"flex justify-between gap-4 px-8 py-6"},De={class:"text-headline-s font-bold"},Te={class:"border-b border-t border-outline-variant px-8 py-10"},Ue=F({__name:"Form",props:z({title:{type:String,default:""},dialogClass:{type:String,default:""},leftBtnText:{type:String,default:"取消"},rightBtnText:{type:String,default:"儲存"}},{visible:{type:Boolean,required:!0},visibleModifiers:{}}),emits:z(["onClosed","onClickLeftBtn","onClickRightBtn"],["update:visible"]),setup(o){const i=j(o,"visible");return(a,l)=>{const s=S,c=h,m=Oe;return b(),U(m,{visible:i.value,"onUpdate:visible":l[1]||(l[1]=n=>i.value=n),title:o.title,"dialog-class":o.dialogClass,"left-btn-text":o.leftBtnText,"right-btn-text":o.rightBtnText,onOnClosed:l[2]||(l[2]=n=>a.$emit("onClosed")),onOnClickLeftBtn:l[3]||(l[3]=n=>a.$emit("onClickLeftBtn")),onOnClickRightBtn:l[4]||(l[4]=n=>a.$emit("onClickRightBtn"))},{header:e(()=>[_("div",Ve,[_("div",De,E(o.title),1),t(c,{type:"primary",text:"",circle:"",class:"flex-shrink-0",style:{"--button-circle-size":"2rem"},onClick:l[0]||(l[0]=n=>a.$emit("onClosed"))},{default:e(()=>[t(s,null,{default:e(()=>[p(" close ")]),_:1})]),_:1})])]),default:e(()=>[_("div",Te,[L(a.$slots,"default")])]),_:3},8,["visible","title","dialog-class","left-btn-text","right-btn-text"])}}});var k=(o=>(o.On="ON",o.Ing="ING",o.Off="OFF",o))(k||{});const ze={class:"mb-8"},Se={class:"flex items-center justify-center"},Re={class:"m-1 flex items-center justify-center"},Le={class:"m-1 flex items-center justify-center"},mt=F({__name:"service",setup(o){const{t:i}=pe(),a=R([{id:"1",name:"超級SPA",status:k.On,tag:{text:"已上架",type:I.Success}},{id:"2",name:"很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長",status:k.Ing,tag:{text:"已下架",type:I.Info}},{id:"3",name:"超級SPA",status:k.Ing,tag:{text:"已上架",type:I.Success}},{id:"4",name:"超級SPA",status:k.Off,tag:{text:"已下架",type:I.Info}},{id:"4",name:"超級SPA",status:k.Off,tag:{text:"已下架",type:I.Info}}]),l=R({visible:!1,title:""}),s=R({title:null,content:null,images:[],sort:null}),c=fe(()=>({title:[{required:!0,message:i("input.confirm_password.message")}],content:[{required:!0,message:i("input.confirm_password.message")}],images:[{required:!0,message:i("input.confirm_password.message")}],sort:[{required:!0,message:i("input.confirm_password.message")},{message:"排序需為正整數",validator:(f,r)=>ke(r)}]})),m=V();function n(f){l.visible=f}function v(f){l.title=i(`form.type.${f?M.Edit:M.Add}`)+"服務項目",n(!0)}function y(){Ce(m.value),n(!1)}function $(){xe(m.value,()=>{n(!1),console.log(_e(s).images)})}function B(f){const r=f,g=new FormData;g.append("image",r.raw,r.name),g.append("type","file"),g.append("title","title"),g.append("description","description"),ye().postObject(g).then(w=>{var C;(C=s.images)==null||C.push({url:w.data.link})})}function x(f){s.images.splice(f,1)}return(f,r)=>{const g=S,w=h,C=Z,G=te,H=ee,J=q,A=le,O=oe,K=ae,Q=he,W=ne,X=Ue;return b(),D(T,null,[_("div",ze,[t(w,{type:"primary",round:"",size:"large",onClick:r[0]||(r[0]=u=>v())},{default:e(()=>[t(g,{class:"mr-1"},{default:e(()=>[p(" add ")]),_:1}),p(" 新增服務項目 ")]),_:1})]),t(J,null,{default:e(()=>[t(H,{data:d(a)},{default:e(()=>[t(C,{prop:"name",label:"服務項目名稱","show-overflow-tooltip":""}),t(C,{label:"上架狀態",width:"104","header-align":"center","class-name":"table__cell--tag"},{default:e(u=>[_("div",Se,[t(G,{type:u.row.tag.type},{default:e(()=>[p(E(u.row.tag.text),1)]),_:2},1032,["type"])])]),_:1}),t(C,{label:"編輯",width:"100","header-align":"center","class-name":"table__cell--btn"},{default:e(u=>[_("div",Re,[t(w,{type:"primary",text:"",circle:"",style:{"--button-circle-size":"1.75rem"},onClick:Y=>v(u.row.id)},{default:e(()=>[t(g,null,{default:e(()=>[p(" edit ")]),_:1})]),_:2},1032,["onClick"])])]),_:1}),t(C,{label:"刪除",width:"100","header-align":"center","class-name":"table__cell--btn"},{default:e(u=>[_("div",Le,[t(w,{type:"primary",text:"",circle:"",style:{"--button-circle-size":"1.75rem"},onClick:Y=>console.log(u.row.id,"刪除")},{default:e(()=>[t(g,null,{default:e(()=>[p(" delete ")]),_:1})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])]),_:1}),t(X,{visible:d(l).visible,"onUpdate:visible":r[4]||(r[4]=u=>d(l).visible=u),title:d(l).title,"dialog-class":"dialog--md",onOnClosed:y,onOnClickLeftBtn:y,onOnClickRightBtn:$},{default:e(()=>[t(W,{ref_key:"formRef",ref:m,model:d(s),rules:d(c),"label-position":"top"},{default:e(()=>[t(O,{label:"標題",prop:"title"},{default:e(()=>[t(A,{modelValue:d(s).title,"onUpdate:modelValue":r[1]||(r[1]=u=>d(s).title=u),placeholder:"請輸入標題"},null,8,["modelValue"])]),_:1}),t(O,{label:"內文",prop:"content"},{default:e(()=>[t(K,{textarea:d(s).content,"onUpdate:textarea":r[2]||(r[2]=u=>d(s).content=u),placeholder:"請輸入內文"},null,8,["textarea"])]),_:1}),t(O,{label:"圖片",prop:"images"},{default:e(()=>[t(Q,{images:d(s).images,onOnUploadImage:B,onOnDeleteImage:x},null,8,["images"])]),_:1}),t(O,{label:"排序",prop:"sort"},{default:e(()=>[t(A,{modelValue:d(s).sort,"onUpdate:modelValue":r[3]||(r[3]=u=>d(s).sort=u),modelModifiers:{number:!0},placeholder:"請輸入排序",type:"number"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title"])],64)}}});export{mt as default};