import{ao as s,ap as u}from"./CdoEpQFN.js";var i=9007199254740991;function f(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=i}var p="[object Arguments]";function n(r){return s(r)&&u(r)==p}var o=Object.prototype,g=o.hasOwnProperty,m=o.propertyIsEnumerable,h=n(function(){return arguments}())?n:function(r){return s(r)&&g.call(r,"callee")&&!m.call(r,"callee")};function E(r,e){for(var t=-1,a=e.length,c=r.length;++t<a;)r[c+t]=e[t];return r}class l extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function w(r,e){throw new l(`[${r}] ${e}`)}function P(r,e){}export{E as a,f as b,P as d,h as i,w as t};
