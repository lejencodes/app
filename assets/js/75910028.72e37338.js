"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9739],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={tags:["CheatSheet"]},a=void 0,l={unversionedId:"Obsidian Guide/Admonition",id:"Obsidian Guide/Admonition",title:"Admonition",description:"Admonition",source:"@site/docs/Obsidian Guide/Admonition.md",sourceDirName:"Obsidian Guide",slug:"/Obsidian Guide/Admonition",permalink:"/docs/Obsidian Guide/Admonition",draft:!1,tags:[{label:"CheatSheet",permalink:"/docs/tags/cheat-sheet"}],version:"current",frontMatter:{tags:["CheatSheet"]},sidebar:"tutorialSidebar",previous:{title:"The continuous integration platform for the world\u2019s best engineering teams",permalink:"/docs/Continuous Integration/CircleCI"},next:{title:"Planning",permalink:"/docs/category/planning"}},c={},s=[{value:"Admonition",id:"admonition",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"admonition"},"Admonition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ad-note"},"")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ad-note"},"title: Nested Admonitions\ncollapse: open\n\nHello!\n\n````ad-note\ntitle: This admonition is nested.\nThis is a nested admonition!\n\n```ad-warning\ntitle: This admonition is closed.\ncollapse: close\n```\n\n````\n\nThis is in the original admonition.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ad-info"},'\n```ad-bug\ntitle: I\'m Nested!\n~~~javascript\nthrow new Error("Oops, I\'m a bug.");\n~~~\n```\n\n```javascript\nconsole.log("Hello!");\n```\n\n')),(0,o.kt)("p",null,"[","[Markdown-Cheat-Sheet]","]"))}d.isMDXComponent=!0}}]);