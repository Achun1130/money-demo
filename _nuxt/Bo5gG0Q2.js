import{P as g,d as f,R as _,c as n,aq as O,t as $,a4 as h,A as v,a2 as w,$ as j,a0 as c,a1 as N,a5 as x,a7 as C,a8 as E,Q as u,aa as r,al as S,aX as b,b3 as K}from"./CwEzvrtd.js";const R=Symbol("rowContextKey"),P=["start","center","end","space-around","space-between","space-evenly"],k=["top","middle","bottom"],A=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:P,default:"start"},align:{type:String,values:k}}),B=f({name:"ElRow"}),L=f({...B,props:A,setup(p){const e=p,l=_("row"),a=n(()=>e.gutter);O(R,{gutter:a});const i=n(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=n(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var q=C(L,[["__file","row.vue"]]);const F=E(q),D=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),I=f({name:"ElCol"}),J=f({...I,props:D,setup(p){const e=p,{gutter:l}=S(R,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=n(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const o=e[s];b(o)&&(s==="span"?t.push(a.b(`${e[s]}`)):o>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([o,y])=>{t.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var Q=C(J,[["__file","col.vue"]]);const G=E(Q);export{F as E,G as a};