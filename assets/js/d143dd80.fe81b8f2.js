"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,v=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(v,a(a({ref:t},m),{},{components:n})):r.createElement(v,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={id:"vim-visual-block",title:"Vim Visual Block",tags:["vim"]},a=void 0,l={unversionedId:"programming/tools/vim-visual-block",id:"programming/tools/vim-visual-block",title:"Vim Visual Block",description:"Visual Modes and Text Manipulation Commands",source:"@site/docs/programming/tools/vim-visual-block.md",sourceDirName:"programming/tools",slug:"/programming/tools/vim-visual-block",permalink:"/app/docs/programming/tools/vim-visual-block",draft:!1,tags:[{label:"vim",permalink:"/app/docs/tags/vim"}],version:"current",frontMatter:{id:"vim-visual-block",title:"Vim Visual Block",tags:["vim"]},sidebar:"tutorialSidebar",previous:{title:"SSH",permalink:"/app/docs/programming/tools/ssh"},next:{title:"TypeScript",permalink:"/app/docs/category/typescript"}},p={},s=[{value:"Visual Modes and Text Manipulation Commands",id:"visual-modes-and-text-manipulation-commands",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"visual-modes-and-text-manipulation-commands"},"Visual Modes and Text Manipulation Commands"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To enter visual block mode, press ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl + V"),"."),(0,o.kt)("li",{parentName:"ol"},"To enter visual line mode, press ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift + V"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," command to delete selected text in visual mode."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift + I")," to enter insert mode at the beginning of the selected block."),(0,o.kt)("li",{parentName:"ol"},"Enter the desired text."),(0,o.kt)("li",{parentName:"ol"},"Hit ",(0,o.kt)("inlineCode",{parentName:"li"},"Esc")," to exit insert mode."),(0,o.kt)("li",{parentName:"ol"},"Move the cursor down to the next line."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"yy")," to yank (copy) the selected line."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"p")," to paste the yanked line."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"d")," to delete the line if needed."),(0,o.kt)("li",{parentName:"ol"},"The command ",(0,o.kt)("inlineCode",{parentName:"li"},":%w !pbcopy")," saves the modified note and copies it to the clipboard.")))}c.isMDXComponent=!0}}]);