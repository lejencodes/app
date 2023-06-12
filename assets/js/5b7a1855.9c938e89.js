"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[7257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,y=m["".concat(i,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={slug:"repo-clone-with-ssh",title:"Repo Clone with SSH",authors:["lejencodes"],tags:["repo","ssh"]},l=void 0,s={permalink:"/app/blog/repo-clone-with-ssh",source:"@site/blog/2022-11-06-repo-clone-with-ssh.md",title:"Repo Clone with SSH",description:"This will save up a lot of your time trying to fix SSL Error, certification problem",date:"2022-11-06T00:00:00.000Z",formattedDate:"November 6, 2022",tags:[{label:"repo",permalink:"/app/blog/tags/repo"},{label:"ssh",permalink:"/app/blog/tags/ssh"}],readingTime:1.015,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"repo-clone-with-ssh",title:"Repo Clone with SSH",authors:["lejencodes"],tags:["repo","ssh"]},prevItem:{title:"Python SEO Analyzer",permalink:"/app/blog/python-seo-analyzer"},nextItem:{title:"Welcome",permalink:"/app/blog/welcome"}},i={authorsImageUrls:[void 0]},p=[{value:"Turn on the credential helper so that Git will save your password",id:"turn-on-the-credential-helper-so-that-git-will-save-your-password",level:3},{value:"Common Error",id:"common-error",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This will save up a lot of your time trying to fix SSL Error, certification problem"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your dir to check if key exist C:\\Users\\username",".","ssh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\.ssh`\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use putty to gen a key and convert openssh"),(0,o.kt)("li",{parentName:"ol"},"Open putty key generator, under key menu select generate key pair"),(0,o.kt)("li",{parentName:"ol"},"Move your mouse to generate randomness"),(0,o.kt)("li",{parentName:"ol"},"Put in your password, save your private key and public key"),(0,o.kt)("li",{parentName:"ol"},"Copy pub key to Bitbucket / GitHub personal acc"),(0,o.kt)("li",{parentName:"ol"},"Go to your profile > ssh keys"),(0,o.kt)("li",{parentName:"ol"},"Copy from putty and paste there"),(0,o.kt)("li",{parentName:"ol"},"Open git bash, right click on directory - select git bash) into place you wanna clone"),(0,o.kt)("li",{parentName:"ol"},"Activate ssh agent and add your key to ssh agent, and type your ssh key password")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eval $(ssh-agent -s)\nssh-add ~/.ssh/id_rsa\n")),(0,o.kt)("h3",{id:"turn-on-the-credential-helper-so-that-git-will-save-your-password"},"Turn on the credential helper so that Git will save your password"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By default, Git will cache your password for 15 minutes."),(0,o.kt)("li",{parentName:"ol"},"In Terminal, enter the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Set git to use the credential memory cache\ngit config --global credential.helper cache\n")),(0,o.kt)("h2",{id:"common-error"},"Common Error"),(0,o.kt)("p",null,"FATAL ERROR: No supported authentication methods available (server sent: publickey)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Pageant add private key")))}u.isMDXComponent=!0}}]);