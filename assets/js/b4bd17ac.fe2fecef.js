"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,f=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={id:"interface-segregation-principle",title:"Interface Segregation Principle",tags:["solid","isp"]},a=void 0,c={unversionedId:"programming/object-oriented-design/interface-segregation-principle",id:"programming/object-oriented-design/interface-segregation-principle",title:"Interface Segregation Principle",description:"Interface segregation principle states:",source:"@site/docs/programming/object-oriented-design/interface-segregation-principle.md",sourceDirName:"programming/object-oriented-design",slug:"/programming/object-oriented-design/interface-segregation-principle",permalink:"/app/docs/programming/object-oriented-design/interface-segregation-principle",draft:!1,tags:[{label:"solid",permalink:"/app/docs/tags/solid"},{label:"isp",permalink:"/app/docs/tags/isp"}],version:"current",frontMatter:{id:"interface-segregation-principle",title:"Interface Segregation Principle",tags:["solid","isp"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Inversion Principle",permalink:"/app/docs/programming/object-oriented-design/dependency-inversion-principle"},next:{title:"Liskov Substitution Principle",permalink:"/app/docs/programming/object-oriented-design/liskov-substitution-principle"}},p={},s=[],l={toc:s};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interface segregation principle states:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A client should never be forced to implement an interface that it doesn\u2019t use, or clients shouldn\u2019t be forced to\ndepend on methods they do not use.")))}g.isMDXComponent=!0}}]);