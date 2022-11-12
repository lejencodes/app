"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),f=l,g=b["".concat(u,".").concat(f)]||b[f]||c[f]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={tags:["C#"]},a=void 0,i={unversionedId:"Dev Notes/Dotnet/CSharp-NullableSolution",id:"Dev Notes/Dotnet/CSharp-NullableSolution",title:"CSharp-NullableSolution",description:"C NullableSolution 1",source:"@site/docs/Dev Notes/Dotnet/CSharp-NullableSolution.md",sourceDirName:"Dev Notes/Dotnet",slug:"/Dev Notes/Dotnet/CSharp-NullableSolution",permalink:"/docs/Dev Notes/Dotnet/CSharp-NullableSolution",draft:!1,tags:[{label:"C#",permalink:"/docs/tags/c"}],version:"current",frontMatter:{tags:["C#"]},sidebar:"tutorialSidebar",previous:{title:"CSharp Dotnet Snippet",permalink:"/docs/Dev Notes/Dotnet/CSharp Snippet"},next:{title:"CSharp",permalink:"/docs/Dev Notes/Dotnet/CSharp"}},u={},p=[{value:"C# NullableSolution 1",id:"c-nullablesolution-1",level:2},{value:"Solution 2",id:"solution-2",level:2},{value:"Solution 3",id:"solution-3",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"c-nullablesolution-1"},"C# NullableSolution 1"),(0,l.kt)("p",null,"We can simply make the properties nullable, as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class AppSetting {\n    public string? ReferenceKey { get; set; }\n    public string? Value { get; set; }\n    public string? Description { get; set; }\n}\n")),(0,l.kt)("h2",{id:"solution-2"},"Solution 2"),(0,l.kt)("p",null,"We can assign a default value to those properties as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public class AppSetting {\n    public string ReferenceKey { get; set; } = \u201cDefault Key\u201d\n    public string Value { get; set; } = \u201cDefault Value\u201d\n    public string Description { get; set; } = \u201cDefault Description\u201d\n}\n")),(0,l.kt)("p",null,"Alternatively, you can give a reasonable default value for non-nullable strings as string.empty."),(0,l.kt)("h2",{id:"solution-3"},"Solution 3"),(0,l.kt)("p",null,"You can disable this warning from project level. You can disable by removing the below line from project file csproj or\nsetting."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<Nullable>enable</Nullable>\n")))}c.isMDXComponent=!0}}]);