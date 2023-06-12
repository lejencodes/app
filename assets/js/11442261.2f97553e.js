"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=a(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var a=2;a<i;a++)p[a]=r[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={id:"open-closed-principle",title:"Open Closed Principle",tags:["solid","ocp"]},p=void 0,c={unversionedId:"programming/object-oriented-design/open-closed-principle",id:"programming/object-oriented-design/open-closed-principle",title:"Open Closed Principle",description:"Open-closed Principle (OCP) states:",source:"@site/docs/programming/object-oriented-design/open-closed-principle.md",sourceDirName:"programming/object-oriented-design",slug:"/programming/object-oriented-design/open-closed-principle",permalink:"/app/docs/programming/object-oriented-design/open-closed-principle",draft:!1,tags:[{label:"solid",permalink:"/app/docs/tags/solid"},{label:"ocp",permalink:"/app/docs/tags/ocp"}],version:"current",frontMatter:{id:"open-closed-principle",title:"Open Closed Principle",tags:["solid","ocp"]},sidebar:"tutorialSidebar",previous:{title:"Liskov Substitution Principle",permalink:"/app/docs/programming/object-oriented-design/liskov-substitution-principle"},next:{title:"Single Responsibility Principle",permalink:"/app/docs/programming/object-oriented-design/single-responsibility-principle"}},l={},a=[],s={toc:a};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open-closed Principle (OCP) states:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Objects or entities should be open for extension but closed for modification.")))}d.isMDXComponent=!0}}]);