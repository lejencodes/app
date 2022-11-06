"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={permalink:"/blog/2022/11/06/index",source:"@site/blog/2022-11-06/index.md",title:"index",description:"Repo Clone with SSH",date:"2022-11-06T00:00:00.000Z",formattedDate:"November 6, 2022",tags:[],readingTime:1.03,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},p={authorsImageUrls:[]},s=[{value:"Turn on the credential helper so that Git will save your password",id:"turn-on-the-credential-helper-so-that-git-will-save-your-password",level:3},{value:"Common Error",id:"common-error",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Repo Clone with SSH"),(0,a.kt)("p",null,"This will save up alot of your time trying to fix SSL Error, certification problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your dir to check if key exist C:\\Users\\username",".","ssh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\\\.ssh`\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Use putty to gen a key and convert openssh"),(0,a.kt)("li",{parentName:"ol"},"Open putty key generator, under key menu select generate key pair"),(0,a.kt)("li",{parentName:"ol"},"Move your mouse to generate randomness"),(0,a.kt)("li",{parentName:"ol"},"Put in your password, save your private key and public key"),(0,a.kt)("li",{parentName:"ol"},"Copy pub key to Bitbucket / GitHub personal acc"),(0,a.kt)("li",{parentName:"ol"},"Go to your profile > ssh keys"),(0,a.kt)("li",{parentName:"ol"},"Copy from putty and paste there"),(0,a.kt)("li",{parentName:"ol"},"Open git bash, right click on directory - select git bash) into place you wanna clone"),(0,a.kt)("li",{parentName:"ol"},"Activate ssh agent and add your key to ssh agent, and type your ssh key password")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"eval $(ssh-agent -s)\nssh-add ~/.ssh/id_rsa\n")),(0,a.kt)("h3",{id:"turn-on-the-credential-helper-so-that-git-will-save-your-password"},"Turn on the credential helper so that Git will save your password"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By default, Git will cache your password for 15 minutes."),(0,a.kt)("li",{parentName:"ol"},"In Terminal, enter the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Set git to use the credential memory cache\ngit config --global credential.helper cache\n")),(0,a.kt)("h2",{id:"common-error"},"Common Error"),(0,a.kt)("p",null,"FATAL ERROR: No supported authentication methods available (server sent: publickey)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Pageant add private key")))}u.isMDXComponent=!0}}]);