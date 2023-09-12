"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=p.createContext({}),l=function(e){var t=p.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return p.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,b=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?p.createElement(b,o(o({ref:t},u),{},{components:r})):p.createElement(b,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return p.createElement.apply(null,o)}return p.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var p=r(87462),n=(r(67294),r(3905));const a={id:"setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",tags:["pi-hole","raspberry-pi","setup"]},o=void 0,i={unversionedId:"config-and-setup/setup-pi-hole-for-raspberry-pi",id:"config-and-setup/setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",description:"Blocklist",source:"@site/docs/config-and-setup/setup-pi-hole-for-raspberry-pi.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-pi-hole-for-raspberry-pi",permalink:"/app/docs/config-and-setup/setup-pi-hole-for-raspberry-pi",draft:!1,tags:[{label:"pi-hole",permalink:"/app/docs/tags/pi-hole"},{label:"raspberry-pi",permalink:"/app/docs/tags/raspberry-pi"},{label:"setup",permalink:"/app/docs/tags/setup"}],version:"current",frontMatter:{id:"setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",tags:["pi-hole","raspberry-pi","setup"]},sidebar:"tutorialSidebar",previous:{title:"Setup Personal Ubuntu Machine",permalink:"/app/docs/config-and-setup/setup-personal-ubuntu-machine"},next:{title:"Setup Pycharm Ide",permalink:"/app/docs/config-and-setup/setup-pycharm-ide"}},s={},l=[{value:"Blocklist",id:"blocklist",level:2},{value:"oisd links",id:"oisd-links",level:2},{value:"Whitelist",id:"whitelist",level:2},{value:"Regex List",id:"regex-list",level:2},{value:"Backup database",id:"backup-database",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,p.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"blocklist"},"Blocklist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://firebog.net/"},"https://firebog.net/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/neodevpro/neodevhost"},"https://github.com/neodevpro/neodevhost")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.adblock"},"https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.adblock")),(0,n.kt)("h2",{id:"oisd-links"},"oisd links"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://big.oisd.nl"},"https://big.oisd.nl")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://small.oisd.nl"},"https://small.oisd.nl")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nsfw.oisd.nl"},"https://nsfw.oisd.nl")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dbl.oisd.nl/"},"https://dbl.oisd.nl/")),(0,n.kt)("h2",{id:"whitelist"},"Whitelist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/anudeepND/whitelist"},"https://github.com/anudeepND/whitelist")),(0,n.kt)("h2",{id:"regex-list"},"Regex List"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mmotti/pihole-regex/blob/master/regex.list"},"https://github.com/mmotti/pihole-regex/blob/master/regex.list")),(0,n.kt)("h2",{id:"backup-database"},"Backup database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo service pihole-FTL stop \nsudo mv /etc/pihole/pihole-FTL.db /media/backup/pihole-FTL_$(date +"%m-%y").db \nsudo service pihole-FTL start\n')))}c.isMDXComponent=!0}}]);