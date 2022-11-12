"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[2353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||i[d]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"ubuntu-clean-up-command",title:"Ubuntu Clean Up Command",authors:["lejencodes"],tags:["ubuntu","clean-up"]},l=void 0,u={permalink:"/blog/ubuntu-clean-up-command",source:"@site/blog/2022-09-13-ubuntu-clean-up-command.md",title:"Ubuntu Clean Up Command",description:"1. Get rid of packages that are no longer required. If you read the apt-get commands guide, you might have come across the apt-get command option \u2018autoremove\u2019.",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"clean-up",permalink:"/blog/tags/clean-up"}],readingTime:1.08,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"ubuntu-clean-up-command",title:"Ubuntu Clean Up Command",authors:["lejencodes"],tags:["ubuntu","clean-up"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"Setup Visual Studio Code in Ubuntu",permalink:"/blog/setup-visual-studio-code-in-ubuntu"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get rid of packages that are no longer required. If you read the apt-get commands guide, you might have come across the apt-get command option \u2018autoremove\u2019.")),(0,r.kt)("p",null,"This option removes libs and packages that were installed automatically to satisfy the dependencies of an installed\npackage. If that package is removed, these automatically installed packages are useless in the system."),(0,r.kt)("p",null,"It also removes old Linux kernels that were installed from automatically in the system upgrade."),(0,r.kt)("p",null,"It\u2019s a no-brainer command that you can run from time to time to make some free space on your Ubuntu system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get autoremove\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can remove a program in Ubuntu from the software centre or using the command below with particular app name:")),(0,r.kt)("p",null,"sudo apt-get remove package-name1 package-name2"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Clean up APT cache in Ubuntu\nUbuntu uses APT (Advanced Package Tool) for installing, removing and managing software on the system, and in doing so\nit keeps a cache of previously downloaded and installed packages even after they\u2019ve been uninstalled.")),(0,r.kt)("p",null,"You can see the size of this cache with the du command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo du -sh /var/cache/apt \n")),(0,r.kt)("p",null,"Either remove only the outdated packages, like those superseded by a recent update, making them completely unnecessary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get autoclean\n")),(0,r.kt)("p",null,"Or delete apt cache in its entirety (frees more disk space):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get clean\n")))}i.isMDXComponent=!0}}]);