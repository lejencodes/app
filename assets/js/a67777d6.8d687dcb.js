"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},i="C# Inherited Classes (Derived Classes)",l={unversionedId:"programming/understanding/what-is-csharp-inherit-class",id:"programming/understanding/what-is-csharp-inherit-class",title:"What Is C# Inherit Class",description:"Inherited Classes (Derived Classes)",source:"@site/docs/programming/understanding/what-is-csharp-inherit-class.md",sourceDirName:"programming/understanding",slug:"/programming/understanding/what-is-csharp-inherit-class",permalink:"/app/docs/programming/understanding/what-is-csharp-inherit-class",draft:!1,tags:[{label:"c#",permalink:"/app/docs/tags/c"}],version:"current",frontMatter:{id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},sidebar:"tutorialSidebar",previous:{title:"Understanding",permalink:"/app/docs/category/understanding"},next:{title:"What is POCO",permalink:"/app/docs/programming/understanding/what-is-poco"}},c={},o=[{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Creating an Inherited Class",id:"creating-an-inherited-class",level:2}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-inherited-classes-derived-classes"},"C# Inherited Classes (Derived Classes)"),(0,a.kt)("p",null,"In C#, inheritance is a fundamental concept that allows you to create new classes (derived or child classes) based on\nexisting classes (base or parent classes). It enables you to achieve abstraction and build a hierarchy of classes. One\nessential aspect of inheritance is the use of abstract classes."),(0,a.kt)("h2",{id:"abstract-classes"},"Abstract Classes"),(0,a.kt)("p",null,"An abstract class is a class that cannot be instantiated directly. Instead, it serves as a blueprint for other classes,\ndefining rules and requirements that must be followed by derived classes. To declare an abstract class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It must have at least one abstract method (a method without implementation)."),(0,a.kt)("li",{parentName:"ul"},"It is marked with the ",(0,a.kt)("inlineCode",{parentName:"li"},"abstract")," keyword within the class definition.")),(0,a.kt)("p",null,"Derived classes (classes that inherit from an abstract class) are obligated to provide implementations for the abstract\nmethods defined in the base abstract class."),(0,a.kt)("h2",{id:"creating-an-inherited-class"},"Creating an Inherited Class"),(0,a.kt)("p",null,"Here's an example of creating an inherited class in C#:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class QueryRequest\n{\n    // Properties for query\n    public int? from { get; set; }\n    public int? size { get; set; }\n    public int? memberId { get; set; }\n    public List<Filter> filters { get; set; }\n    public Sort sort { get; set; }\n}\n\npublic class QueryRequestWithQ : QueryRequest\n{\n    // Additional property for query\n    public string q { get; set; }\n}\n")))}d.isMDXComponent=!0}}]);