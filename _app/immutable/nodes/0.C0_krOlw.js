import{s as O,x as z,a as k,e as y,y as I,f as p,g as q,c as b,b as x,z as w,p as m,i as M,h as f,A as B,B as D,C as J,k as P,t as R,d as V}from"../chunks/scheduler.B6FAqlc6.js";import{S as F,i as G,t as K,b as Q}from"../chunks/index.CPJaTyM3.js";import{e as H,u as U,d as W}from"../chunks/each.BnXTOMGx.js";import{p as X}from"../chunks/stores.CX5N9_rm.js";import{b as g}from"../chunks/entry.B2fUd3ln.js";const Y=!0,ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y},Symbol.toStringTag,{value:"Module"}));function L(i,s,t){const l=i.slice();return l[4]=s[t],l}function N(i,s){let t,l=s[4].text+"",h,_,n;return{key:i,first:null,c(){t=y("a"),h=R(l),_=k(),this.h()},l(a){t=b(a,"A",{href:!0,class:!0});var u=x(t);h=V(u,l),_=q(u),u.forEach(p),this.h()},h(){m(t,"href",s[4].path),m(t,"class",n="menu__item "+(s[0].url.pathname===s[4].path?"menu__item_active":"")+" svelte-p34x9q"),this.first=t},m(a,u){M(a,t,u),f(t,h),f(t,_)},p(a,u){s=a,u&1&&n!==(n="menu__item "+(s[0].url.pathname===s[4].path?"menu__item_active":"")+" svelte-p34x9q")&&m(t,"class",n)},d(a){a&&p(t)}}}function Z(i){let s,t,l,h=`<h1 class="svelte-p34x9q"><a href="${g}" class="svelte-p34x9q">svelte-codemirror-editor</a></h1>`,_,n,a=[],u=new Map,E,d,v,$=H(i[1]);const T=e=>e[4].path;for(let e=0;e<$.length;e+=1){let r=L(i,$,e),o=T(r);u.set(o,a[e]=N(o,r))}const S=i[3].default,c=z(S,i,i[2],null);return{c(){s=k(),t=y("section"),l=y("header"),l.innerHTML=h,_=k(),n=y("nav");for(let e=0;e<a.length;e+=1)a[e].c();E=k(),d=y("main"),c&&c.c(),this.h()},l(e){I("svelte-asrruj",document.head).forEach(p),s=q(e),t=b(e,"SECTION",{class:!0});var o=x(t);l=b(o,"HEADER",{class:!0,"data-svelte-h":!0}),w(l)!=="svelte-15i3qr"&&(l.innerHTML=h),_=q(o),n=b(o,"NAV",{class:!0});var A=x(n);for(let C=0;C<a.length;C+=1)a[C].l(A);A.forEach(p),E=q(o),d=b(o,"MAIN",{class:!0});var j=x(d);c&&c.l(j),j.forEach(p),o.forEach(p),this.h()},h(){document.title="svelte-codemirror-editor",m(l,"class","header svelte-p34x9q"),m(n,"class","menu svelte-p34x9q"),m(d,"class","svelte-p34x9q"),m(t,"class","layout svelte-p34x9q")},m(e,r){M(e,s,r),M(e,t,r),f(t,l),f(t,_),f(t,n);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(n,null);f(t,E),f(t,d),c&&c.m(d,null),v=!0},p(e,[r]){r&3&&($=H(e[1]),a=U(a,r,T,1,e,$,u,n,W,N,null,L)),c&&c.p&&(!v||r&4)&&B(c,S,e,e[2],v?J(S,e[2],r,null):D(e[2]),null)},i(e){v||(K(c,e),v=!0)},o(e){Q(c,e),v=!1},d(e){e&&(p(s),p(t));for(let r=0;r<a.length;r+=1)a[r].d();c&&c.d(e)}}}function ee(i,s,t){let l;P(i,X,a=>t(0,l=a));let{$$slots:h={},$$scope:_}=s;const n=[{path:`${g}`,text:"Configurator"},{path:`${g}/javascript`,text:"Javascript"},{path:`${g}/typescript`,text:"Typescript"},{path:`${g}/html`,text:"HTML"},{path:`${g}/css`,text:"CSS"}];return i.$$set=a=>{"$$scope"in a&&t(2,_=a.$$scope)},[l,n,_,h]}class oe extends F{constructor(s){super(),G(this,s,ee,Z,O,{})}}export{oe as component,ne as universal};
