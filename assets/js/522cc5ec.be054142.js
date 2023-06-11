"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(g,u(u({ref:t},p),{},{components:n})):o.createElement(g,u({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<r;i++)u[i]=n[i];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=n(7462),a=(n(7294),n(3905));const r={slug:"setup-visual-studio-code-in-ubuntu",title:"Setup Visual Studio Code in Ubuntu",authors:["lejencodes"],tags:["vscode","ubuntu"]},u=void 0,s={permalink:"/app/blog/setup-visual-studio-code-in-ubuntu",source:"@site/blog/2022-07-17-setup-visual-studio-code-in-ubuntu.md",title:"Setup Visual Studio Code in Ubuntu",description:"You could install Visual Studio Code using apt:",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"vscode",permalink:"/app/blog/tags/vscode"},{label:"ubuntu",permalink:"/app/blog/tags/ubuntu"}],readingTime:1.1,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"setup-visual-studio-code-in-ubuntu",title:"Setup Visual Studio Code in Ubuntu",authors:["lejencodes"],tags:["vscode","ubuntu"]},prevItem:{title:"Ubuntu Clean Up Command",permalink:"/app/blog/ubuntu-clean-up-command"},nextItem:{title:"Create Python Virtual Environment",permalink:"/app/blog/create-python-virtual-environment"}},l={authorsImageUrls:[void 0]},i=[],p={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You could install Visual Studio Code using apt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -\necho "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" | sudo tee /etc/apt/sources.list.d/vscode.list\nsudo apt update\nsudo apt install code\n')),(0,a.kt)("p",null,"or snap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo snap install code --classic\n")),(0,a.kt)("p",null,"After the C# package installing, the next dialog box appears:\nClicking the marked button opens the next page, which provides the instructions for .Net Core SDK installation (along\nwith ASP.Net Core runtime and .Net Core runtime installation instructions):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://packages.microsoft.com/config/ubuntu/19.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb\nsudo apt install ./packages-microsoft-prod.deb\nsudo apt-get update\nsudo apt-get install apt-transport-https\nsudo apt-get update\nsudo apt-get install dotnet-sdk-3.1\n")),(0,a.kt)("p",null,"monodevelop IDE seems is not an option now, because of I could not find it. But if you want to install the current mono\nversion (For example, on 20.04, amd64 architecture) you could use official mono repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt install gnupg ca-certificates\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF\necho "deb [arch=amd64] https://download.mono-project.com/repo/ubuntu stable-focal main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list\nsudo apt update\nsudo apt install mono-devel\n')),(0,a.kt)("p",null,"You could also install additional mono packages, which you could find by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-cache search mono\n")),(0,a.kt)("p",null,"The man mono will introduce you to its usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DESCRIPTION\n    mono is a runtime implementation of the ECMA Common  Lan\u2010\n    guage  Infrastructure.   This can be used to run ECMA and\n    .NET applications.\n")))}c.isMDXComponent=!0}}]);