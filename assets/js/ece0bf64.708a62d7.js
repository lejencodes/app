"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5188],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,g=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,p(p({ref:n},l),{},{components:t})):r.createElement(g,p({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={id:"dependency-inversion-principle",title:"Dependency Inversion Principle",tags:["solid","dip"]},p="Dependency inversion principle",c={unversionedId:"programming/object-oriented-design/dependency-inversion-principle",id:"programming/object-oriented-design/dependency-inversion-principle",title:"Dependency Inversion Principle",description:"Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the",source:"@site/docs/programming/object-oriented-design/dependency-inversion-principle.md",sourceDirName:"programming/object-oriented-design",slug:"/programming/object-oriented-design/dependency-inversion-principle",permalink:"/app/docs/programming/object-oriented-design/dependency-inversion-principle",draft:!1,tags:[{label:"solid",permalink:"/app/docs/tags/solid"},{label:"dip",permalink:"/app/docs/tags/dip"}],version:"current",frontMatter:{id:"dependency-inversion-principle",title:"Dependency Inversion Principle",tags:["solid","dip"]},sidebar:"tutorialSidebar",previous:{title:"Object-Oriented-Design",permalink:"/app/docs/category/object-oriented-design"},next:{title:"Interface Segregation Principle",permalink:"/app/docs/programming/object-oriented-design/interface-segregation-principle"}},a={},s=[],l={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-inversion-principle"},"Dependency inversion principle"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the\nlow-level module, but they should depend on abstractions.")))}d.isMDXComponent=!0}}]);