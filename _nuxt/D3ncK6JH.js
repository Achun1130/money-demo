import{a9 as g,d as f,a1 as _,c as n,aq as O,t as $,S as h,A as v,V as w,P as j,L as c,X as N,W as x,af as C,ax as E,aa as u,aI as r,ad as R,b3 as b,b9 as K}from"./BJP_0rNl.js";const S=Symbol("rowContextKey"),P=["start","center","end","space-around","space-between","space-evenly"],L=["top","middle","bottom"],k=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:P,default:"start"},align:{type:String,values:L}}),A=f({name:"ElRow"}),B=f({...A,props:k,setup(p){const e=p,l=_("row"),a=n(()=>e.gutter);O(S,{gutter:a});const i=n(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=n(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var I=C(B,[["__file","row.vue"]]);const X=E(I),q=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),D=f({name:"ElCol"}),J=f({...D,props:q,setup(p){const e=p,{gutter:l}=R(S,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=n(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const o=e[s];b(o)&&(s==="span"?t.push(a.b(`${e[s]}`)):o>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([o,y])=>{t.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var T=C(J,[["__file","col.vue"]]);const F=E(T);export{F as E,X as a};
