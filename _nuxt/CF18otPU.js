import{M as K,N as h,n as j,O as M,B as S,P as Re,Q as pe,R as Le,S as fe,T as ve,U as ye,V as ee,o as g,c as w,v,u as e,a as N,E as I,C as R,t as W,q as k,z as O,w as T,D as Te,W as A,X as H,Y as me,Z as ge,$ as he,a0 as J,a1 as C,a2 as _e,r as be,F as Ue,s as Oe,a3 as ke,a4 as z,b as B,a5 as De,a6 as Be,a7 as Ne,a8 as je,a9 as Ie,aa as Q,ab as te,ac as Ae,ad as qe,h as se,j as Me,ae as ze,af as Ke,ag as ae,ah as oe,ai as ne,aj as He}from"./Dwv-tNMU.js";import{t as x,d as We}from"./jeCagBFP.js";import{u as V}from"./DhbvpM10.js";import{b as Ve}from"./o8To9XYI.js";import{i as Xe}from"./CDk1GorF.js";var Ge=1,Ye=4;function re(s){return Ve(s,Ge|Ye)}const Je=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:s=>s>=0&&s<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:h(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:h([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:h(Function),default:s=>`${s}%`}}),Qe=["aria-valuenow"],Ze={viewBox:"0 0 100 100"},xe=["d","stroke","stroke-linecap","stroke-width"],et=["d","stroke","opacity","stroke-linecap","stroke-width"],tt={key:0},st=j({name:"ElProgress"}),at=j({...st,props:Je,setup(s){const t=s,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},i=M("progress"),p=S(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,background:P(t.percentage)})),d=S(()=>(t.strokeWidth/t.width*100).toFixed(1)),y=S(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),E=S(()=>{const n=y.value,F=t.type==="dashboard";return`
          M 50 50
          m 0 ${F?"":"-"}${n}
          a ${n} ${n} 0 1 1 0 ${F?"-":""}${n*2}
          a ${n} ${n} 0 1 1 0 ${F?"":"-"}${n*2}
          `}),b=S(()=>2*Math.PI*y.value),$=S(()=>t.type==="dashboard"?.75:1),L=S(()=>`${-1*b.value*(1-$.value)/2}px`),m=S(()=>({strokeDasharray:`${b.value*$.value}px, ${b.value}px`,strokeDashoffset:L.value})),l=S(()=>({strokeDasharray:`${b.value*$.value*(t.percentage/100)}px, ${b.value}px`,strokeDashoffset:L.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),o=S(()=>{let n;return t.color?n=P(t.percentage):n=a[t.status]||a.default,n}),c=S(()=>t.status==="warning"?Re:t.type==="line"?t.status==="success"?pe:Le:t.status==="success"?fe:ve),r=S(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),f=S(()=>t.format(t.percentage));function u(n){const F=100/n.length;return n.map((_,U)=>ee(_)?{color:_,percentage:(U+1)*F}:_).sort((_,U)=>_.percentage-U.percentage)}const P=n=>{var F;const{color:D}=t;if(ye(D))return D(n);if(ee(D))return D;{const _=u(D);for(const U of _)if(U.percentage>n)return U.color;return(F=_[_.length-1])==null?void 0:F.color}};return(n,F)=>(g(),w("div",{class:v([e(i).b(),e(i).m(n.type),e(i).is(n.status),{[e(i).m("without-text")]:!n.showText,[e(i).m("text-inside")]:n.textInside}]),role:"progressbar","aria-valuenow":n.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[n.type==="line"?(g(),w("div",{key:0,class:v(e(i).b("bar"))},[N("div",{class:v(e(i).be("bar","outer")),style:I({height:`${n.strokeWidth}px`})},[N("div",{class:v([e(i).be("bar","inner"),{[e(i).bem("bar","inner","indeterminate")]:n.indeterminate},{[e(i).bem("bar","inner","striped")]:n.striped},{[e(i).bem("bar","inner","striped-flow")]:n.stripedFlow}]),style:I(e(p))},[(n.showText||n.$slots.default)&&n.textInside?(g(),w("div",{key:0,class:v(e(i).be("bar","innerText"))},[R(n.$slots,"default",{percentage:n.percentage},()=>[N("span",null,W(e(f)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),w("div",{key:1,class:v(e(i).b("circle")),style:I({height:`${n.width}px`,width:`${n.width}px`})},[(g(),w("svg",Ze,[N("path",{class:v(e(i).be("circle","track")),d:e(E),stroke:`var(${e(i).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":n.strokeLinecap,"stroke-width":e(d),fill:"none",style:I(e(m))},null,14,xe),N("path",{class:v(e(i).be("circle","path")),d:e(E),stroke:e(o),fill:"none",opacity:n.percentage?1:0,"stroke-linecap":n.strokeLinecap,"stroke-width":e(d),style:I(e(l))},null,14,et)]))],6)),(n.showText||n.$slots.default)&&!n.textInside?(g(),w("div",{key:2,class:v(e(i).e("text")),style:I({fontSize:`${e(r)}px`})},[R(n.$slots,"default",{percentage:n.percentage},()=>[n.status?(g(),O(e(A),{key:1},{default:T(()=>[(g(),O(Te(e(c))))]),_:1})):(g(),w("span",tt,W(e(f)),1))])],6)):k("v-if",!0)],10,Qe))}});var ot=H(at,[["__file","progress.vue"]]);const nt=me(ot),$e=Symbol("uploadContextKey"),rt="ElUpload";class lt extends Error{constructor(t,a,i,p){super(t),this.name="UploadAjaxError",this.status=a,this.method=i,this.url=p}}function le(s,t,a){let i;return a.response?i=`${a.response.error||a.response}`:a.responseText?i=`${a.responseText}`:i=`fail to ${t.method} ${s} ${a.status}`,new lt(i,a.status,t.method,s)}function it(s){const t=s.responseText||s.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const ut=s=>{typeof XMLHttpRequest>"u"&&x(rt,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=s.action;t.upload&&t.upload.addEventListener("progress",d=>{const y=d;y.percent=d.total>0?d.loaded/d.total*100:0,s.onProgress(y)});const i=new FormData;if(s.data)for(const[d,y]of Object.entries(s.data))ge(y)&&y.length?i.append(d,...y):i.append(d,y);i.append(s.filename,s.file,s.file.name),t.addEventListener("error",()=>{s.onError(le(a,s,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return s.onError(le(a,s,t));s.onSuccess(it(t))}),t.open(s.method,a,!0),s.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=s.headers||{};if(p instanceof Headers)p.forEach((d,y)=>t.setRequestHeader(y,d));else for(const[d,y]of Object.entries(p))he(y)||t.setRequestHeader(d,String(y));return t.send(i),t},we=["text","picture","picture-card"];let dt=1;const Z=()=>Date.now()+dt++,Ee=K({action:{type:String,default:"#"},headers:{type:h(Object)},method:{type:String,default:"post"},data:{type:h([Object,Function,Promise]),default:()=>J({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:h(Array),default:()=>J([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:we,default:"text"},httpRequest:{type:h(Function),default:ut},disabled:Boolean,limit:Number}),ct=K({...Ee,beforeUpload:{type:h(Function),default:C},beforeRemove:{type:h(Function)},onRemove:{type:h(Function),default:C},onChange:{type:h(Function),default:C},onPreview:{type:h(Function),default:C},onSuccess:{type:h(Function),default:C},onProgress:{type:h(Function),default:C},onError:{type:h(Function),default:C},onExceed:{type:h(Function),default:C},crossorigin:{type:h(String)}}),pt=K({files:{type:h(Array),default:()=>J([])},disabled:{type:Boolean,default:!1},handlePreview:{type:h(Function),default:C},listType:{type:String,values:we,default:"text"},crossorigin:{type:h(String)}}),ft={remove:s=>!!s},vt=["onKeydown"],yt=["src","crossorigin"],mt=["onClick"],gt=["title"],ht=["onClick"],bt=["onClick"],kt=j({name:"ElUploadList"}),$t=j({...kt,props:pt,emits:ft,setup(s,{emit:t}){const a=s,{t:i}=_e(),p=M("upload"),d=M("icon"),y=M("list"),E=V(),b=be(!1),$=S(()=>[p.b("list"),p.bm("list",a.listType),p.is("disabled",a.disabled)]),L=m=>{t("remove",m)};return(m,l)=>(g(),O(je,{tag:"ul",class:v(e($)),name:e(y).b()},{default:T(()=>[(g(!0),w(Ue,null,Oe(m.files,o=>(g(),w("li",{key:o.uid||o.name,class:v([e(p).be("list","item"),e(p).is(o.status),{focusing:b.value}]),tabindex:"0",onKeydown:ke(c=>!e(E)&&L(o),["delete"]),onFocus:l[0]||(l[0]=c=>b.value=!0),onBlur:l[1]||(l[1]=c=>b.value=!1),onClick:l[2]||(l[2]=c=>b.value=!1)},[R(m.$slots,"default",{file:o},()=>[m.listType==="picture"||o.status!=="uploading"&&m.listType==="picture-card"?(g(),w("img",{key:0,class:v(e(p).be("list","item-thumbnail")),src:o.url,crossorigin:m.crossorigin,alt:""},null,10,yt)):k("v-if",!0),o.status==="uploading"||m.listType!=="picture-card"?(g(),w("div",{key:1,class:v(e(p).be("list","item-info"))},[N("a",{class:v(e(p).be("list","item-name")),onClick:z(c=>m.handlePreview(o),["prevent"])},[B(e(A),{class:v(e(d).m("document"))},{default:T(()=>[B(e(De))]),_:1},8,["class"]),N("span",{class:v(e(p).be("list","item-file-name")),title:o.name},W(o.name),11,gt)],10,mt),o.status==="uploading"?(g(),O(e(nt),{key:0,type:m.listType==="picture-card"?"circle":"line","stroke-width":m.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:I(m.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:v(e(p).be("list","item-status-label"))},[m.listType==="text"?(g(),O(e(A),{key:0,class:v([e(d).m("upload-success"),e(d).m("circle-check")])},{default:T(()=>[B(e(pe))]),_:1},8,["class"])):["picture-card","picture"].includes(m.listType)?(g(),O(e(A),{key:1,class:v([e(d).m("upload-success"),e(d).m("check")])},{default:T(()=>[B(e(fe))]),_:1},8,["class"])):k("v-if",!0)],2),e(E)?k("v-if",!0):(g(),O(e(A),{key:2,class:v(e(d).m("close")),onClick:c=>L(o)},{default:T(()=>[B(e(ve))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(E)?k("v-if",!0):(g(),w("i",{key:3,class:v(e(d).m("close-tip"))},W(e(i)("el.upload.deleteTip")),3)),m.listType==="picture-card"?(g(),w("span",{key:4,class:v(e(p).be("list","item-actions"))},[N("span",{class:v(e(p).be("list","item-preview")),onClick:c=>m.handlePreview(o)},[B(e(A),{class:v(e(d).m("zoom-in"))},{default:T(()=>[B(e(Be))]),_:1},8,["class"])],10,ht),e(E)?k("v-if",!0):(g(),w("span",{key:0,class:v(e(p).be("list","item-delete")),onClick:c=>L(o)},[B(e(A),{class:v(e(d).m("delete"))},{default:T(()=>[B(e(Ne))]),_:1},8,["class"])],10,bt))],2)):k("v-if",!0)])],42,vt))),128)),R(m.$slots,"append")]),_:3},8,["class","name"]))}});var ie=H($t,[["__file","upload-list.vue"]]);const wt=K({disabled:{type:Boolean,default:!1}}),Et={file:s=>ge(s)},St=["onDrop","onDragover"],Se="ElUploadDrag",Ct=j({name:Se}),Pt=j({...Ct,props:wt,emits:Et,setup(s,{emit:t}){Ie($e)||x(Se,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=M("upload"),p=be(!1),d=V(),y=b=>{if(d.value)return;p.value=!1,b.stopPropagation();const $=Array.from(b.dataTransfer.files);t("file",$)},E=()=>{d.value||(p.value=!0)};return(b,$)=>(g(),w("div",{class:v([e(i).b("dragger"),e(i).is("dragover",p.value)]),onDrop:z(y,["prevent"]),onDragover:z(E,["prevent"]),onDragleave:$[0]||($[0]=z(L=>p.value=!1,["prevent"]))},[R(b.$slots,"default")],42,St))}});var Ft=H(Pt,[["__file","upload-dragger.vue"]]);const Rt=K({...Ee,beforeUpload:{type:h(Function),default:C},onRemove:{type:h(Function),default:C},onStart:{type:h(Function),default:C},onSuccess:{type:h(Function),default:C},onProgress:{type:h(Function),default:C},onError:{type:h(Function),default:C},onExceed:{type:h(Function),default:C}}),Lt=["onKeydown"],Tt=["name","multiple","accept"],_t=j({name:"ElUploadContent",inheritAttrs:!1}),Ut=j({..._t,props:Rt,setup(s,{expose:t}){const a=s,i=M("upload"),p=V(),d=Q({}),y=Q(),E=r=>{if(r.length===0)return;const{autoUpload:f,limit:u,fileList:P,multiple:n,onStart:F,onExceed:D}=a;if(u&&P.length+r.length>u){D(r,P);return}n||(r=r.slice(0,1));for(const _ of r){const U=_;U.uid=Z(),F(U),f&&b(U)}},b=async r=>{if(y.value.value="",!a.beforeUpload)return L(r);let f,u={};try{const n=a.data,F=a.beforeUpload(r);u=te(a.data)?re(a.data):a.data,f=await F,te(a.data)&&Xe(n,u)&&(u=re(a.data))}catch{f=!1}if(f===!1){a.onRemove(r);return}let P=r;f instanceof Blob&&(f instanceof File?P=f:P=new File([f],r.name,{type:r.type})),L(Object.assign(P,{uid:r.uid}),u)},$=async(r,f)=>ye(r)?r(f):r,L=async(r,f)=>{const{headers:u,data:P,method:n,withCredentials:F,name:D,action:_,onProgress:U,onSuccess:Ce,onError:Pe,httpRequest:Fe}=a;try{f=await $(f??P,r)}catch{a.onRemove(r);return}const{uid:X}=r,G={headers:u||{},withCredentials:F,file:r,data:f,method:n,filename:D,action:_,onProgress:q=>{U(q,r)},onSuccess:q=>{Ce(q,r),delete d.value[X]},onError:q=>{Pe(q,r),delete d.value[X]}},Y=Fe(G);d.value[X]=Y,Y instanceof Promise&&Y.then(G.onSuccess,G.onError)},m=r=>{const f=r.target.files;f&&E(Array.from(f))},l=()=>{p.value||(y.value.value="",y.value.click())},o=()=>{l()};return t({abort:r=>{Ae(d.value).filter(r?([u])=>String(r.uid)===u:()=>!0).forEach(([u,P])=>{P instanceof XMLHttpRequest&&P.abort(),delete d.value[u]})},upload:b}),(r,f)=>(g(),w("div",{class:v([e(i).b(),e(i).m(r.listType),e(i).is("drag",r.drag)]),tabindex:"0",onClick:l,onKeydown:ke(z(o,["self"]),["enter","space"])},[r.drag?(g(),O(Ft,{key:0,disabled:e(p),onFile:E},{default:T(()=>[R(r.$slots,"default")]),_:3},8,["disabled"])):R(r.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:y,class:v(e(i).e("input")),name:r.name,multiple:r.multiple,accept:r.accept,type:"file",onChange:m,onClick:f[0]||(f[0]=z(()=>{},["stop"]))},null,42,Tt)],42,Lt))}});var ue=H(Ut,[["__file","upload-content.vue"]]);const de="ElUpload",ce=s=>{var t;(t=s.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(s.url)},Ot=(s,t)=>{const a=qe(s,"fileList",void 0,{passive:!0}),i=l=>a.value.find(o=>o.uid===l.uid);function p(l){var o;(o=t.value)==null||o.abort(l)}function d(l=["ready","uploading","success","fail"]){a.value=a.value.filter(o=>!l.includes(o.status))}const y=(l,o)=>{const c=i(o);c&&(console.error(l),c.status="fail",a.value.splice(a.value.indexOf(c),1),s.onError(l,c,a.value),s.onChange(c,a.value))},E=(l,o)=>{const c=i(o);c&&(s.onProgress(l,c,a.value),c.status="uploading",c.percentage=Math.round(l.percent))},b=(l,o)=>{const c=i(o);c&&(c.status="success",c.response=l,s.onSuccess(l,c,a.value),s.onChange(c,a.value))},$=l=>{he(l.uid)&&(l.uid=Z());const o={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(s.listType==="picture-card"||s.listType==="picture")try{o.url=URL.createObjectURL(l)}catch(c){We(de,c.message),s.onError(c,o,a.value)}a.value=[...a.value,o],s.onChange(o,a.value)},L=async l=>{const o=l instanceof File?i(l):l;o||x(de,"file to be removed not found");const c=r=>{p(r);const f=a.value;f.splice(f.indexOf(r),1),s.onRemove(r,f),ce(r)};s.beforeRemove?await s.beforeRemove(o,a.value)!==!1&&c(o):c(o)};function m(){a.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var o;return l&&((o=t.value)==null?void 0:o.upload(l))})}return se(()=>s.listType,l=>{l!=="picture-card"&&l!=="picture"||(a.value=a.value.map(o=>{const{raw:c,url:r}=o;if(!r&&c)try{o.url=URL.createObjectURL(c)}catch(f){s.onError(f,o,a.value)}return o}))}),se(a,l=>{for(const o of l)o.uid||(o.uid=Z()),o.status||(o.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:p,clearFiles:d,handleError:y,handleProgress:E,handleStart:$,handleSuccess:b,handleRemove:L,submit:m,revokeFileObjectURL:ce}},Dt=j({name:"ElUpload"}),Bt=j({...Dt,props:ct,setup(s,{expose:t}){const a=s,i=V(),p=Q(),{abort:d,submit:y,clearFiles:E,uploadFiles:b,handleStart:$,handleError:L,handleRemove:m,handleSuccess:l,handleProgress:o,revokeFileObjectURL:c}=Ot(a,p),r=S(()=>a.listType==="picture-card"),f=S(()=>({...a,fileList:b.value,onStart:$,onProgress:o,onSuccess:l,onError:L,onRemove:m}));return Me(()=>{b.value.forEach(c)}),ze($e,{accept:Ke(a,"accept")}),t({abort:d,submit:y,clearFiles:E,handleStart:$,handleRemove:m}),(u,P)=>(g(),w("div",null,[e(r)&&u.showFileList?(g(),O(ie,{key:0,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({append:T(()=>[B(ue,oe({ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?R(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?R(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[u.$slots.file?{name:"default",fn:T(({file:n})=>[R(u.$slots,"file",{file:n})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0),!e(r)||e(r)&&!u.showFileList?(g(),O(ue,oe({key:1,ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?R(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?R(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),u.$slots.trigger?R(u.$slots,"default",{key:2}):k("v-if",!0),R(u.$slots,"tip"),!e(r)&&u.showFileList?(g(),O(ie,{key:3,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({_:2},[u.$slots.file?{name:"default",fn:T(({file:n})=>[R(u.$slots,"file",{file:n})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0)]))}});var Nt=H(Bt,[["__file","upload.vue"]]);const zt=me(Nt),Kt=()=>{const{$request:s}=He();return{getImage(t){return s(ne.GetImage,{imageHash:t})},postObject(t){return s(ne.PostImage,{},t)}}};export{zt as E,Kt as u};