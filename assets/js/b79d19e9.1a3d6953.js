"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"setup-codium",title:"Setup Codium",tags:["setup","ubuntu","codium"]},u=void 0,i={unversionedId:"config-and-setup/setup-codium",id:"config-and-setup/setup-codium",title:"Setup Codium",description:"Install Codium",source:"@site/docs/config-and-setup/setup-codium.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-codium",permalink:"/app/docs/config-and-setup/setup-codium",draft:!1,tags:[{label:"setup",permalink:"/app/docs/tags/setup"},{label:"ubuntu",permalink:"/app/docs/tags/ubuntu"},{label:"codium",permalink:"/app/docs/tags/codium"}],version:"current",frontMatter:{id:"setup-codium",title:"Setup Codium",tags:["setup","ubuntu","codium"]},sidebar:"tutorialSidebar",previous:{title:"ppa",permalink:"/app/docs/config-and-setup/ppa"},next:{title:"Setup Deluge For Raspberry Pi",permalink:"/app/docs/config-and-setup/setup-deluge-for-raspberry-pi"}},p={},s=[{value:"Install Codium",id:"install-codium",level:2}],c={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install-codium"},"Install Codium"),(0,o.kt)("p",null,"Add the GPG key of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg \\\n    | gpg --dearmor \\\n    | sudo dd ... ... ... of=/usr/share/keyrings/vscodium-archive-keyring.gpg\n")),(0,o.kt)("p",null,"Add the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'deb [ signed-by=/usr/share/keyrings/vscodium-archive-keyring.gpg ] https://download.vscodium.com/debs vscodium main' \\\n    | sudo tee /etc/apt/sources.list.d/vscodium.list\n")),(0,o.kt)("p",null,"Update then install vscodium (if you want vscodium-insiders, then replace codium by codium-insiders):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update && sudo apt install codium\n")))}l.isMDXComponent=!0}}]);