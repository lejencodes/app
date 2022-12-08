"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[8629],{3905:(e,n,r)=>{r.d(n,{Zo:()=>a,kt:()=>g});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},a=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?t.createElement(m,l(l({ref:n},a),{},{components:r})):t.createElement(m,l({ref:n},a))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2500:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const o={id:"single-responsibility-principle",title:"Single Responsibility Principle",tag:["solid","srp"]},l=void 0,p={unversionedId:"programming/object-oriented-design/single-responsibility-principle",id:"programming/object-oriented-design/single-responsibility-principle",title:"Single Responsibility Principle",description:"Single-responsibility Principle (SRP) states:",source:"@site/docs/programming/object-oriented-design/single-responsibility-principle.md",sourceDirName:"programming/object-oriented-design",slug:"/programming/object-oriented-design/single-responsibility-principle",permalink:"/docs/programming/object-oriented-design/single-responsibility-principle",draft:!1,tags:[],version:"current",frontMatter:{id:"single-responsibility-principle",title:"Single Responsibility Principle",tag:["solid","srp"]},sidebar:"tutorialSidebar",previous:{title:"Open Closed Principle",permalink:"/docs/programming/object-oriented-design/open-closed-principle"},next:{title:"Solid Principle",permalink:"/docs/programming/object-oriented-design/solid-principle"}},s={},c=[],a={toc:c};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},a,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Single-responsibility Principle (SRP) states:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A class should have one and only one reason to change, meaning that a class should have only one job.")))}u.isMDXComponent=!0}}]);