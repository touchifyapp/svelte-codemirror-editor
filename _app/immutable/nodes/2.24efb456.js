import{s as Nt,C as wt,p as xt,f as r,a as b,g as c,h as v,c as g,v as y,d as m,j as t,D as ft,i as Ye,w as e,E as Ne,F as Be,G as D,H as St,I as Tt,J as pt,K as jt,l as It,m as Bt,B as Dt,L as bt}from"../chunks/scheduler.72f230eb.js";import{S as Pt,i as At,f as Ht,b as Wt,d as Ut,m as Mt,a as Ot,t as qt,e as Gt}from"../chunks/index.ed221001.js";import{e as De}from"../chunks/each.8cb06f1a.js";import{s as Kt,E as Ft,H as Jt,t as s,C as Rt,c as Qt,h as Xt,a as Yt,j as Zt}from"../chunks/code.090445dd.js";import{c as $t}from"../chunks/index.6a28fa7a.js";import{h as el}from"../chunks/index.b11f9c10.js";import{j as gt}from"../chunks/index.ab5226a4.js";function tl(l,i){const n={},f={},a={$$scope:1};let u=l.length;for(;u--;){const _=l[u],I=i[u];if(I){for(const k in _)k in I||(f[k]=1);for(const k in I)a[k]||(n[k]=I[k],a[k]=1);l[u]=I}else for(const k in _)a[k]=1}for(const _ in f)_ in n||(n[_]=void 0);return n}function ll(l){return typeof l=="object"&&l!==null?l:{}}const ol="#e5c07b",mt="#e06c75",al="#56b6c2",nl="#ffffff",Ve="#abb2bf",Xe="#7d8799",sl="#61afef",rl="#98c379",vt="#d19a66",cl="#c678dd",il="#21252b",_t="#2c313a",kt="#282c34",Qe="#353a42",ul="#3E4451",Ct="#528bff",dl=Ft.theme({"&":{color:Ve,backgroundColor:kt},".cm-content":{caretColor:Ct},".cm-cursor, .cm-dropCursor":{borderLeftColor:Ct},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:ul},".cm-panels":{backgroundColor:il,color:Ve},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:kt,color:Xe,border:"none"},".cm-activeLineGutter":{backgroundColor:_t},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Qe},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Qe,borderBottomColor:Qe},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:_t,color:Ve}}},{dark:!0}),hl=Jt.define([{tag:s.keyword,color:cl},{tag:[s.name,s.deleted,s.character,s.propertyName,s.macroName],color:mt},{tag:[s.function(s.variableName),s.labelName],color:sl},{tag:[s.color,s.constant(s.name),s.standard(s.name)],color:vt},{tag:[s.definition(s.name),s.separator],color:Ve},{tag:[s.typeName,s.className,s.number,s.changed,s.annotation,s.modifier,s.self,s.namespace],color:ol},{tag:[s.operator,s.operatorKeyword,s.url,s.escape,s.regexp,s.link,s.special(s.string)],color:al},{tag:[s.meta,s.comment],color:Xe},{tag:s.strong,fontWeight:"bold"},{tag:s.emphasis,fontStyle:"italic"},{tag:s.strikethrough,textDecoration:"line-through"},{tag:s.link,color:Xe,textDecoration:"underline"},{tag:s.heading,fontWeight:"bold",color:mt},{tag:[s.atom,s.bool,s.special(s.variableName)],color:vt},{tag:[s.processingInstruction,s.string,s.inserted],color:rl},{tag:s.invalid,color:nl}]),fl=[dl,Kt(hl)];function zt(l,i,n){const f=l.slice();return f[18]=i[n],f}function Et(l,i,n){const f=l.slice();return f[21]=i[n],f}function yt(l){let i,n=l[21]+"",f;return{c(){i=r("option"),f=It(n),this.h()},l(a){i=c(a,"OPTION",{});var u=v(i);f=Bt(u,n),u.forEach(m),this.h()},h(){i.__value=l[21],Ne(i,i.__value)},m(a,u){Ye(a,i,u),e(i,f)},p:Dt,d(a){a&&m(i)}}}function Lt(l){let i,n=l[18]+"",f;return{c(){i=r("option"),f=It(n),this.h()},l(a){i=c(a,"OPTION",{});var u=v(i);f=Bt(u,n),u.forEach(m),this.h()},h(){i.__value=l[18],Ne(i,i.__value)},m(a,u){Ye(a,i,u),e(i,f)},p:Dt,d(a){a&&m(i)}}}function pl(l){let i,n,f,a,u,_,I="Basic setup",k,E,V,N,ue,w,pe="Use basic setup",de,x,S,he,j,be="Editable",fe,A,H,we,W,Ze="Read-only",xe,U,M,Se,O,$e="Line Wrapping",je,q,G,Pe,K,et="No debounce",Ae,le,tt="Tab",He,F,J,R,We,Q,lt="Enable Tab",Ue,X,Y,ot="Tab size",Me,B,Oe,oe,at="Language",qe,se,Z,$,nt="Language",Ge,L,Ke,ae,st="Theme",Fe,re,ee,te,rt="Theme",Je,T,ge,Re,ct;const me=[{class:"editor"},l[1]];function Vt(o){l[8](o)}let ve={};for(let o=0;o<me.length;o+=1)ve=wt(ve,me[o]);l[0]!==void 0&&(ve.value=l[0]),n=new Rt({props:ve}),xt.push(()=>Ht(n,"value",Vt));let ce=De(l[4]),C=[];for(let o=0;o<ce.length;o+=1)C[o]=yt(Et(l,ce,o));let ie=De(l[5]),z=[];for(let o=0;o<ie.length;o+=1)z[o]=Lt(zt(l,ie,o));return{c(){i=r("div"),Wt(n.$$.fragment),a=b(),u=r("div"),_=r("h5"),_.textContent=I,k=b(),E=r("div"),V=r("div"),N=r("input"),ue=b(),w=r("label"),w.textContent=pe,de=b(),x=r("div"),S=r("input"),he=b(),j=r("label"),j.textContent=be,fe=b(),A=r("div"),H=r("input"),we=b(),W=r("label"),W.textContent=Ze,xe=b(),U=r("div"),M=r("input"),Se=b(),O=r("label"),O.textContent=$e,je=b(),q=r("div"),G=r("input"),Pe=b(),K=r("label"),K.textContent=et,Ae=b(),le=r("h5"),le.textContent=tt,He=b(),F=r("div"),J=r("div"),R=r("input"),We=b(),Q=r("label"),Q.textContent=lt,Ue=b(),X=r("div"),Y=r("label"),Y.textContent=ot,Me=b(),B=r("input"),Oe=b(),oe=r("h5"),oe.textContent=at,qe=b(),se=r("div"),Z=r("div"),$=r("label"),$.textContent=nt,Ge=b(),L=r("select");for(let o=0;o<C.length;o+=1)C[o].c();Ke=b(),ae=r("h5"),ae.textContent=st,Fe=b(),re=r("div"),ee=r("div"),te=r("label"),te.textContent=rt,Je=b(),T=r("select");for(let o=0;o<z.length;o+=1)z[o].c();this.h()},l(o){i=c(o,"DIV",{class:!0});var p=v(i);Ut(n.$$.fragment,p),a=g(p),u=c(p,"DIV",{class:!0});var h=v(u);_=c(h,"H5",{class:!0,"data-svelte-h":!0}),y(_)!=="svelte-kydz0b"&&(_.textContent=I),k=g(h),E=c(h,"DIV",{class:!0});var d=v(E);V=c(d,"DIV",{class:!0});var P=v(V);N=c(P,"INPUT",{id:!0,type:!0}),ue=g(P),w=c(P,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(w)!=="svelte-20mxsg"&&(w.textContent=pe),P.forEach(m),de=g(d),x=c(d,"DIV",{class:!0});var _e=v(x);S=c(_e,"INPUT",{id:!0,type:!0}),he=g(_e),j=c(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(j)!=="svelte-1rda9fm"&&(j.textContent=be),_e.forEach(m),fe=g(d),A=c(d,"DIV",{class:!0});var ke=v(A);H=c(ke,"INPUT",{id:!0,type:!0}),we=g(ke),W=c(ke,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(W)!=="svelte-16ougqv"&&(W.textContent=Ze),ke.forEach(m),xe=g(d),U=c(d,"DIV",{class:!0});var Ce=v(U);M=c(Ce,"INPUT",{id:!0,type:!0}),Se=g(Ce),O=c(Ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(O)!=="svelte-tjsgwa"&&(O.textContent=$e),Ce.forEach(m),je=g(d),q=c(d,"DIV",{class:!0});var ze=v(q);G=c(ze,"INPUT",{id:!0,type:!0}),Pe=g(ze),K=c(ze,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(K)!=="svelte-1fmwodk"&&(K.textContent=et),ze.forEach(m),d.forEach(m),Ae=g(h),le=c(h,"H5",{class:!0,"data-svelte-h":!0}),y(le)!=="svelte-133e6dz"&&(le.textContent=tt),He=g(h),F=c(h,"DIV",{class:!0});var Ee=v(F);J=c(Ee,"DIV",{class:!0});var ye=v(J);R=c(ye,"INPUT",{id:!0,type:!0}),We=g(ye),Q=c(ye,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(Q)!=="svelte-1n8orcw"&&(Q.textContent=lt),ye.forEach(m),Ue=g(Ee),X=c(Ee,"DIV",{class:!0});var Le=v(X);Y=c(Le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(Y)!=="svelte-1submjs"&&(Y.textContent=ot),Me=g(Le),B=c(Le,"INPUT",{id:!0,type:!0,step:!0,class:!0}),Le.forEach(m),Ee.forEach(m),Oe=g(h),oe=c(h,"H5",{class:!0,"data-svelte-h":!0}),y(oe)!=="svelte-9krrf6"&&(oe.textContent=at),qe=g(h),se=c(h,"DIV",{class:!0});var it=v(se);Z=c(it,"DIV",{class:!0});var Te=v(Z);$=c(Te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y($)!=="svelte-1gz0fpm"&&($.textContent=nt),Ge=g(Te),L=c(Te,"SELECT",{id:!0});var ut=v(L);for(let ne=0;ne<C.length;ne+=1)C[ne].l(ut);ut.forEach(m),Te.forEach(m),it.forEach(m),Ke=g(h),ae=c(h,"H5",{class:!0,"data-svelte-h":!0}),y(ae)!=="svelte-1e1wo09"&&(ae.textContent=st),Fe=g(h),re=c(h,"DIV",{class:!0});var dt=v(re);ee=c(dt,"DIV",{class:!0});var Ie=v(ee);te=c(Ie,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),y(te)!=="svelte-1ho886c"&&(te.textContent=rt),Je=g(Ie),T=c(Ie,"SELECT",{id:!0});var ht=v(T);for(let ne=0;ne<z.length;ne+=1)z[ne].l(ht);ht.forEach(m),Ie.forEach(m),dt.forEach(m),h.forEach(m),p.forEach(m),this.h()},h(){t(_,"class","svelte-z99br2"),t(N,"id","basic"),t(N,"type","checkbox"),t(w,"for","basic"),t(w,"class","svelte-z99br2"),t(V,"class","toggle svelte-z99br2"),t(S,"id","editable"),t(S,"type","checkbox"),t(j,"for","editable"),t(j,"class","svelte-z99br2"),t(x,"class","toggle svelte-z99br2"),t(H,"id","readonly"),t(H,"type","checkbox"),t(W,"for","readonly"),t(W,"class","svelte-z99br2"),t(A,"class","toggle svelte-z99br2"),t(M,"id","lineWrapping"),t(M,"type","checkbox"),t(O,"for","lineWrapping"),t(O,"class","svelte-z99br2"),t(U,"class","toggle svelte-z99br2"),t(G,"id","nodebounce"),t(G,"type","checkbox"),t(K,"for","nodebounce"),t(K,"class","svelte-z99br2"),t(q,"class","toggle svelte-z99br2"),t(E,"class","props-section svelte-z99br2"),t(le,"class","svelte-z99br2"),t(R,"id","useTab"),t(R,"type","checkbox"),t(Q,"for","useTab"),t(Q,"class","svelte-z99br2"),t(J,"class","toggle svelte-z99br2"),t(Y,"for","tabSize"),t(Y,"class","svelte-z99br2"),t(B,"id","tabSize"),t(B,"type","number"),t(B,"step","1"),t(B,"class","svelte-z99br2"),t(X,"class","input svelte-z99br2"),t(F,"class","props-section svelte-z99br2"),t(oe,"class","svelte-z99br2"),t($,"for","language"),t($,"class","svelte-z99br2"),t(L,"id","language"),l[2]===void 0&&ft(()=>l[16].call(L)),t(Z,"class","input svelte-z99br2"),t(se,"class","props-section svelte-z99br2"),t(ae,"class","svelte-z99br2"),t(te,"for","theme"),t(te,"class","svelte-z99br2"),t(T,"id","theme"),l[3]===void 0&&ft(()=>l[17].call(T)),t(ee,"class","input svelte-z99br2"),t(re,"class","props-section svelte-z99br2"),t(u,"class","props svelte-z99br2"),t(i,"class","demo svelte-z99br2")},m(o,p){Ye(o,i,p),Mt(n,i,null),e(i,a),e(i,u),e(u,_),e(u,k),e(u,E),e(E,V),e(V,N),N.checked=l[1].basic,e(V,ue),e(V,w),e(E,de),e(E,x),e(x,S),S.checked=l[1].editable,e(x,he),e(x,j),e(E,fe),e(E,A),e(A,H),H.checked=l[1].readonly,e(A,we),e(A,W),e(E,xe),e(E,U),e(U,M),M.checked=l[1].lineWrapping,e(U,Se),e(U,O),e(E,je),e(E,q),e(q,G),G.checked=l[1].nodebounce,e(q,Pe),e(q,K),e(u,Ae),e(u,le),e(u,He),e(u,F),e(F,J),e(J,R),R.checked=l[1].useTab,e(J,We),e(J,Q),e(F,Ue),e(F,X),e(X,Y),e(X,Me),e(X,B),Ne(B,l[1].tabSize),e(u,Oe),e(u,oe),e(u,qe),e(u,se),e(se,Z),e(Z,$),e(Z,Ge),e(Z,L);for(let h=0;h<C.length;h+=1)C[h]&&C[h].m(L,null);Be(L,l[2],!0),e(u,Ke),e(u,ae),e(u,Fe),e(u,re),e(re,ee),e(ee,te),e(ee,Je),e(ee,T);for(let h=0;h<z.length;h+=1)z[h]&&z[h].m(T,null);Be(T,l[3],!0),ge=!0,Re||(ct=[D(N,"change",l[9]),D(S,"change",l[10]),D(H,"change",l[11]),D(M,"change",l[12]),D(G,"change",l[13]),D(R,"change",l[14]),D(B,"input",l[15]),D(L,"change",l[16]),D(L,"change",l[6]),D(T,"change",l[17]),D(T,"change",l[7])],Re=!0)},p(o,[p]){const h=p&2?tl(me,[me[0],ll(o[1])]):{};if(!f&&p&1&&(f=!0,h.value=o[0],St(()=>f=!1)),n.$set(h),p&2&&(N.checked=o[1].basic),p&2&&(S.checked=o[1].editable),p&2&&(H.checked=o[1].readonly),p&2&&(M.checked=o[1].lineWrapping),p&2&&(G.checked=o[1].nodebounce),p&2&&(R.checked=o[1].useTab),p&2&&Tt(B.value)!==o[1].tabSize&&Ne(B,o[1].tabSize),p&16){ce=De(o[4]);let d;for(d=0;d<ce.length;d+=1){const P=Et(o,ce,d);C[d]?C[d].p(P,p):(C[d]=yt(P),C[d].c(),C[d].m(L,null))}for(;d<C.length;d+=1)C[d].d(1);C.length=ce.length}if(p&20&&Be(L,o[2]),p&32){ie=De(o[5]);let d;for(d=0;d<ie.length;d+=1){const P=zt(o,ie,d);z[d]?z[d].p(P,p):(z[d]=Lt(P),z[d].c(),z[d].m(T,null))}for(;d<z.length;d+=1)z[d].d(1);z.length=ie.length}p&40&&Be(T,o[3])},i(o){ge||(Ot(n.$$.fragment,o),ge=!0)},o(o){qt(n.$$.fragment,o),ge=!1},d(o){o&&m(i),Gt(n),pt(C,o),pt(z,o),Re=!1,jt(ct)}}}function bl(l,i,n){let f="",a={basic:!0,useTab:!0,editable:!0,lineWrapping:!1,readonly:!1,tabSize:2,placeholder:null,lang:null,theme:null,nodebounce:!1};const u=["custom","javascript","typescript","css","html"];let _="custom";const I=["default","onedark"];let k="default";function E(){switch(_){case"custom":n(1,a.lang=null,a);break;case"javascript":n(1,a.lang=gt(),a),n(0,f=Zt());break;case"typescript":n(1,a.lang=gt({typescript:!0}),a),n(0,f=Yt());break;case"html":n(1,a.lang=el({matchClosingTags:!0}),a),n(0,f=Xt());break;case"css":n(1,a.lang=$t(),a),n(0,f=Qt());break}}function V(){switch(k){case"default":n(1,a.theme=null,a);break;case"onedark":n(1,a.theme=fl,a);break}}function N(fe){f=fe,n(0,f)}function ue(){a.basic=this.checked,n(1,a)}function w(){a.editable=this.checked,n(1,a)}function pe(){a.readonly=this.checked,n(1,a)}function de(){a.lineWrapping=this.checked,n(1,a)}function x(){a.nodebounce=this.checked,n(1,a)}function S(){a.useTab=this.checked,n(1,a)}function he(){a.tabSize=Tt(this.value),n(1,a)}function j(){_=bt(this),n(2,_),n(4,u)}function be(){k=bt(this),n(3,k),n(5,I)}return[f,a,_,k,u,I,E,V,N,ue,w,pe,de,x,S,he,j,be]}class El extends Pt{constructor(i){super(),At(this,i,bl,pl,Nt,{})}}export{El as component};