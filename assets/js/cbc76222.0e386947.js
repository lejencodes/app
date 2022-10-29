"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={tags:["C#"]},o="POCO",s={unversionedId:"mind-garden/Dev Notes/Understanding/What-is-POCO",id:"mind-garden/Dev Notes/Understanding/What-is-POCO",title:"POCO",description:"An Example POCO",source:"@site/docs/mind-garden/Dev Notes/Understanding/What-is-POCO.md",sourceDirName:"mind-garden/Dev Notes/Understanding",slug:"/mind-garden/Dev Notes/Understanding/What-is-POCO",permalink:"/docs/mind-garden/Dev Notes/Understanding/What-is-POCO",draft:!1,tags:[{label:"C#",permalink:"/docs/tags/c"}],version:"current",frontMatter:{tags:["C#"]},sidebar:"tutorialSidebar",previous:{title:"Inherit Class",permalink:"/docs/mind-garden/Dev Notes/Understanding/What-is-Inherit-Class"},next:{title:"Package.json sample",permalink:"/docs/mind-garden/Dev Notes/Website/package.json sample"}},c={},l=[{value:"An Example POCO",id:"an-example-poco",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"poco"},"POCO"),(0,a.kt)("h2",{id:"an-example-poco"},"An Example POCO"),(0,a.kt)("p",null,"Below is an example Plain Old C# Object for a Product."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class Product\n{\n  public Product(int id)\n  {\n    Id = id;\n  }\n\n  private Product()\n  {\n    // required for EF\n  }\n\n  public int Id { get; private set; }\n  // other properties and methods\n}\n")),(0,a.kt)("p",null,"This Product class is a POCO because it has no dependencies on third-party frameworks for behavior, especially persistence behavior. It doesn't require a base class, especially a base class in another library. It doesn't have any tight coupling to static helpers. It can be instantiated anywhere without difficulty. It is much more persistence ignorant than the previous example, but it's not entirely ignorant of persistence, since it has an otherwise useless private constructor declaration. As you can see from the comment, that private parameterless constructor is only there because Entity Framework needs it to instantiate the class when it is reading it from persistence."))}d.isMDXComponent=!0}}]);