import{_ as d}from"./K5j8LCzW.js";import{u as m,E as u}from"./B8BZgNMg.js";import{n as _,r as f,o as r,c as s,b as l,w as c,u as i,d as h}from"./CdoEpQFN.js";import"./92VdOWeN.js";import"./Bg7676pk.js";import"./DE_Yx_r9.js";import"./DUbvVIgH.js";import"./DLHUKLtF.js";const g={class:"flex h-dvh items-center justify-center"},v=["src"],k={key:1,class:"avatar-uploader-container"},F=_({__name:"imgur",setup(w){const t=f("");function p(n){const o=n,e=new FormData;e.append("image",o.raw,o.name),e.append("type","file"),e.append("title","title"),e.append("description","description"),m().postObject(e).then(a=>{console.log(a),t.value=a.data.link})}return(n,o)=>{const e=d,a=u;return r(),s("div",g,[l(a,{class:"avatar-uploader","show-file-list":!1,"auto-upload":!1,"on-change":p,multiple:""},{default:c(()=>[i(t)?(r(),s("img",{key:0,src:i(t),class:"avatar-uploader-avatar",referrerpolicy:"no-referrer"},null,8,v)):(r(),s("div",k,[l(e,{class:"avatar-uploader-icon"},{default:c(()=>[h(" add ")]),_:1})]))]),_:1})])}}});export{F as default};
