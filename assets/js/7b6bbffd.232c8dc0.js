"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={tags:["Test"]},l="Header 1",i={unversionedId:"sandbox/test-with-toc-2",id:"sandbox/test-with-toc-2",title:"Header 1",description:"Table of Content",source:"@site/docs/sandbox/test-with-toc-2.md",sourceDirName:"sandbox",slug:"/sandbox/test-with-toc-2",permalink:"/app/docs/sandbox/test-with-toc-2",draft:!1,tags:[{label:"Test",permalink:"/app/docs/tags/test"}],version:"current",frontMatter:{tags:["Test"]},sidebar:"tutorialSidebar",previous:{title:"test-tag-pill-in-obsidian",permalink:"/app/docs/sandbox/test-tag-pill-in-obsidian"},next:{title:"Header 1",permalink:"/app/docs/sandbox/test-with-toc"}},s={},c=[{value:"Header Level 2",id:"header-level-2",level:2},{value:"Header Level 3",id:"header-level-3",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"header-1"},"Header 1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table of Content")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toc"},"    style: bullet | number | inline (default: bullet)\n    min_depth: number (default: 2)\n    max_depth: number (default: 6)\n    title: string (default: undefined)\n    allow_inconsistent_headings: boolean (default: false)\n    delimiter: string (default: |)\n    varied_style: boolean (default: false)\n")),(0,a.kt)("h2",{id:"header-level-2"},"Header Level 2"),(0,a.kt)("p",null,"Level 2 Body"),(0,a.kt)("h3",{id:"header-level-3"},"Header Level 3"),(0,a.kt)("p",null,"Level 3 body"),(0,a.kt)("h1",{id:"header-big"},"Header Big"))}d.isMDXComponent=!0}}]);