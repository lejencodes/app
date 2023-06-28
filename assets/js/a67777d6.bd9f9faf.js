"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},i=void 0,c={unversionedId:"programming/understanding/what-is-csharp-inherit-class",id:"programming/understanding/what-is-csharp-inherit-class",title:"What Is C# Inherit Class",description:"Inherit Class / Derived Class",source:"@site/docs/programming/understanding/what-is-csharp-inherit-class.md",sourceDirName:"programming/understanding",slug:"/programming/understanding/what-is-csharp-inherit-class",permalink:"/app/docs/programming/understanding/what-is-csharp-inherit-class",draft:!1,tags:[{label:"c#",permalink:"/app/docs/tags/c"}],version:"current",frontMatter:{id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},sidebar:"tutorialSidebar",previous:{title:"Understanding",permalink:"/app/docs/category/understanding"},next:{title:"What is POCO",permalink:"/app/docs/programming/understanding/what-is-poco"}},l={},o=[{value:"Inherit Class / Derived Class",id:"inherit-class--derived-class",level:2},{value:"Create an inherited class.",id:"create-an-inherited-class",level:2}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inherit-class--derived-class"},"Inherit Class / Derived Class"),(0,a.kt)("p",null,"This is the way that we achieve abstraction. An abstract class is a class that will never be instantiated directly. In\norder to achieve this, the class must have at least one abstract method and be marked with the abstract keyword within\nthe class definition. In the main purpose of this class, it sets out the rules that must be followed by derived classes\nwhen they inherit an abstract class in order to give a blueprint for derived classes. A base class can be derived from\nan abstract class and the abstract definitions must be implemented by all derived classes."),(0,a.kt)("h2",{id:"create-an-inherited-class"},"Create an inherited class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public class QueryRequest\n    {\n        //query\n        public int? from { get; set; }\n        public int? size { get; set; }\n        public int? memberId { get; set; }\n        public List<Filter> filters { get; set; }\n        public Sort sort { get; set; }\n    }\n\npublic class QueryRequestWithQ : QueryRequest{\n       public class QueryRequest\n    {\n\n        //query\n        public string q { get; set; }\n    }\n}\n")))}u.isMDXComponent=!0}}]);