"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={tags:["C#"]},i="Inherit Class",o={unversionedId:"Dev Notes/Understanding/What-is-Inherit-Class",id:"Dev Notes/Understanding/What-is-Inherit-Class",title:"Inherit Class",description:"Create an inherited class.",source:"@site/docs/Dev Notes/Understanding/What-is-Inherit-Class.md",sourceDirName:"Dev Notes/Understanding",slug:"/Dev Notes/Understanding/What-is-Inherit-Class",permalink:"/docs/Dev Notes/Understanding/What-is-Inherit-Class",draft:!1,tags:[{label:"C#",permalink:"/docs/tags/c"}],version:"current",frontMatter:{tags:["C#"]},sidebar:"tutorialSidebar",previous:{title:"Vim-Visual-Block",permalink:"/docs/Dev Notes/Tools/Vim-Visual-Block"},next:{title:"POCO",permalink:"/docs/Dev Notes/Understanding/What-is-POCO"}},c={},l=[{value:"Create an inherited class.",id:"create-an-inherited-class",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inherit-class"},"Inherit Class"),(0,a.kt)("h2",{id:"create-an-inherited-class"},"Create an inherited class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class QueryRequest\n    {\n        //query\n        public int? from { get; set; }\n        public int? size { get; set; }\n        public int? memberId { get; set; }\n        public List<Filter> filters { get; set; }\n        public Sort sort { get; set; }\n    }\n\npublic class QueryRequestWithQ : QueryRequest{\n       public class QueryRequest\n    {\n\n        //query\n        public string q { get; set; }\n    }\n}\n")))}p.isMDXComponent=!0}}]);