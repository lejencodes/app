"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4275],{13852:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(85893),a=t(11151);const i={id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},r="C# Inherited Classes (Derived Classes)",c={id:"programming/understanding/what-is-csharp-inherit-class",title:"What Is C# Inherit Class",description:"Inherited Classes (Derived Classes)",source:"@site/docs/programming/understanding/what-is-csharp-inherit-class.md",sourceDirName:"programming/understanding",slug:"/programming/understanding/what-is-csharp-inherit-class",permalink:"/docs/programming/understanding/what-is-csharp-inherit-class",draft:!1,unlisted:!1,tags:[{label:"c#",permalink:"/docs/tags/c"}],version:"current",frontMatter:{id:"what-is-csharp-inherit-class",title:"What Is C# Inherit Class",tags:["c#"]},sidebar:"docsSidebar",previous:{title:"Understanding",permalink:"/docs/category/understanding"},next:{title:"What is POCO",permalink:"/docs/programming/understanding/what-is-poco"}},l={},d=[{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Creating an Inherited Class",id:"creating-an-inherited-class",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"c-inherited-classes-derived-classes",children:"C# Inherited Classes (Derived Classes)"}),"\n",(0,n.jsx)(s.p,{children:"In C#, inheritance is a fundamental concept that allows you to create new classes (derived or child classes) based on\nexisting classes (base or parent classes). It enables you to achieve abstraction and build a hierarchy of classes. One\nessential aspect of inheritance is the use of abstract classes."}),"\n",(0,n.jsx)(s.h2,{id:"abstract-classes",children:"Abstract Classes"}),"\n",(0,n.jsx)(s.p,{children:"An abstract class is a class that cannot be instantiated directly. Instead, it serves as a blueprint for other classes,\ndefining rules and requirements that must be followed by derived classes. To declare an abstract class:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It must have at least one abstract method (a method without implementation)."}),"\n",(0,n.jsxs)(s.li,{children:["It is marked with the ",(0,n.jsx)(s.code,{children:"abstract"})," keyword within the class definition."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Derived classes (classes that inherit from an abstract class) are obligated to provide implementations for the abstract\nmethods defined in the base abstract class."}),"\n",(0,n.jsx)(s.h2,{id:"creating-an-inherited-class",children:"Creating an Inherited Class"}),"\n",(0,n.jsx)(s.p,{children:"Here's an example of creating an inherited class in C#:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"public class QueryRequest\n{\n    // Properties for query\n    public int? from { get; set; }\n    public int? size { get; set; }\n    public int? memberId { get; set; }\n    public List<Filter> filters { get; set; }\n    public Sort sort { get; set; }\n}\n\npublic class QueryRequestWithQ : QueryRequest\n{\n    // Additional property for query\n    public string q { get; set; }\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);