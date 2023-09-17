"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={id:"vim-visual-block",title:"Vim Visual Block",tags:["vim"]},a="Vim Visual Block",l={unversionedId:"programming/tools/vim-visual-block",id:"programming/tools/vim-visual-block",title:"Vim Visual Block",description:"In Vim, the Visual Block mode is a powerful feature that allows you to select text in a block, enabling efficient text",source:"@site/docs/programming/tools/vim-visual-block.md",sourceDirName:"programming/tools",slug:"/programming/tools/vim-visual-block",permalink:"/app/docs/programming/tools/vim-visual-block",draft:!1,tags:[{label:"vim",permalink:"/app/docs/tags/vim"}],version:"current",frontMatter:{id:"vim-visual-block",title:"Vim Visual Block",tags:["vim"]},sidebar:"tutorialSidebar",previous:{title:"SSH",permalink:"/app/docs/programming/tools/ssh"},next:{title:"TypeScript",permalink:"/app/docs/category/typescript"}},s={},c=[{value:"Visual Modes and Text Manipulation Commands",id:"visual-modes-and-text-manipulation-commands",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vim-visual-block"},"Vim Visual Block"),(0,r.kt)("p",null,"In Vim, the Visual Block mode is a powerful feature that allows you to select text in a block, enabling efficient text\nmanipulation. Here are some essential commands and shortcuts for working with Visual Block:"),(0,r.kt)("h2",{id:"visual-modes-and-text-manipulation-commands"},"Visual Modes and Text Manipulation Commands"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To enter Visual Block mode, press ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl + V"),"."),(0,r.kt)("li",{parentName:"ol"},"To enter Visual Line mode, press ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + V"),"."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"d")," command to delete selected text in Visual mode."),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + I")," to enter insert mode at the beginning of the selected block."),(0,r.kt)("li",{parentName:"ol"},"Enter the desired text."),(0,r.kt)("li",{parentName:"ol"},"Hit ",(0,r.kt)("inlineCode",{parentName:"li"},"Esc")," to exit insert mode."),(0,r.kt)("li",{parentName:"ol"},"Move the cursor down to the next line."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"yy")," to yank (copy) the selected line."),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"p")," to paste the yanked line."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"d")," to delete the line if needed."),(0,r.kt)("li",{parentName:"ol"},"The command ",(0,r.kt)("inlineCode",{parentName:"li"},":%w !pbcopy")," saves the modified note and copies it to the clipboard.")),(0,r.kt)("p",null,"These commands and shortcuts make Vim a versatile text editor for various tasks, especially when dealing with blocks of\ntext."))}m.isMDXComponent=!0}}]);