"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={id:"setup-kinto",title:"Setup Kinto",tags:["setup","ubuntu","codium"]},i=void 0,s={unversionedId:"config-and-setup/setup-kinto",id:"config-and-setup/setup-kinto",title:"Setup Kinto",description:"Setup Kinto",source:"@site/docs/config-and-setup/setup-kinto.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-kinto",permalink:"/app/docs/config-and-setup/setup-kinto",draft:!1,tags:[{label:"setup",permalink:"/app/docs/tags/setup"},{label:"ubuntu",permalink:"/app/docs/tags/ubuntu"},{label:"codium",permalink:"/app/docs/tags/codium"}],version:"current",frontMatter:{id:"setup-kinto",title:"Setup Kinto",tags:["setup","ubuntu","codium"]},sidebar:"tutorialSidebar",previous:{title:"Setup Keepass",permalink:"/app/docs/config-and-setup/setup-keypass-xc"},next:{title:"Setup MongoDb",permalink:"/app/docs/config-and-setup/setup-mongodb"}},l={},p=[{value:"Setup Kinto",id:"setup-kinto",level:2},{value:"Possible Kinto Setup Issue",id:"possible-kinto-setup-issue",level:3},{value:"Tkinter not found",id:"tkinter-not-found",level:4},{value:"journalctl command not found",id:"journalctl-command-not-found",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup-kinto"},"Setup Kinto"),(0,r.kt)("p",null,"Mac-style shortcut keys for Linux & Windows. Seamless copy and paste with all apps and terminals. The zero effort\nsolution."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal and navigate to the Kinto GitHub repository by clicking ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rbreaves/kinto"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you're on the repository page, you'll find the installation command. Copy the following command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(wget -qO- https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh || curl -fsSL https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh)"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Paste the copied command into your terminal and press Enter. This command will download and run the Kinto\ninstallation script.")),(0,r.kt)("p",null,"The script will handle the installation process for you, setting up Kinto on your system."),(0,r.kt)("h3",{id:"possible-kinto-setup-issue"},"Possible Kinto Setup Issue"),(0,r.kt)("h4",{id:"tkinter-not-found"},"Tkinter not found"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-tk\n")),(0,r.kt)("h4",{id:"journalctl-command-not-found"},"journalctl command not found"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install systemd\n")))}c.isMDXComponent=!0}}]);