"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},o=Object.keys(e);for(p=0;p<o.length;p++)r=o[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)r=o[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=p.createContext({}),l=function(e){var t=p.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return p.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?p.createElement(b,i(i({ref:t},c),{},{components:r})):p.createElement(b,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return p.createElement.apply(null,i)}return p.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var p=r(87462),n=(r(67294),r(3905));const o={id:"setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",tags:["pi-hole"]},i=void 0,a={unversionedId:"raspberry-pi/setup-pi-hole-for-raspberry-pi",id:"raspberry-pi/setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",description:"Link to",source:"@site/docs/raspberry-pi/setup-pi-hole-for-raspberry-pi.md",sourceDirName:"raspberry-pi",slug:"/raspberry-pi/setup-pi-hole-for-raspberry-pi",permalink:"/app/docs/raspberry-pi/setup-pi-hole-for-raspberry-pi",draft:!1,tags:[{label:"pi-hole",permalink:"/app/docs/tags/pi-hole"}],version:"current",frontMatter:{id:"setup-pi-hole-for-raspberry-pi",title:"Setup Pi Hole For Raspberry Pi",tags:["pi-hole"]},sidebar:"tutorialSidebar",previous:{title:"Setup Deluge For Raspberry Pi",permalink:"/app/docs/raspberry-pi/setup-deluge-for-raspberry-pi"},next:{title:"Standard Raspberry Pi Setup",permalink:"/app/docs/raspberry-pi/standard-raspberry-pi-setup"}},s={},l=[{value:"Blocklist",id:"blocklist",level:2},{value:"oisd links",id:"oisd-links",level:2},{value:"Whitelist",id:"whitelist",level:2},{value:"Regex List",id:"regex-list",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,p.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Link to\nBlog ",(0,n.kt)("a",{parentName:"p",href:"https://lejencodes.com/blog/a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing"},"[Setup pi-hole]")),(0,n.kt)("h2",{id:"blocklist"},"Blocklist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://firebog.net/"},"https://firebog.net/"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/neodevpro/neodevhost"},"https://github.com/neodevpro/neodevhost"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.adblock"},"https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.adblock")),(0,n.kt)("h2",{id:"oisd-links"},"oisd links"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://big.oisd.nl"},"https://big.oisd.nl"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://small.oisd.nl"},"https://small.oisd.nl"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://nsfw.oisd.nl"},"https://nsfw.oisd.nl")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dbl.oisd.nl/"},"https://dbl.oisd.nl/")),(0,n.kt)("h2",{id:"whitelist"},"Whitelist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/anudeepND/whitelist"},"https://github.com/anudeepND/whitelist")),(0,n.kt)("h2",{id:"regex-list"},"Regex List"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mmotti/pihole-regex/blob/master/regex.list"},"https://github.com/mmotti/pihole-regex/blob/master/regex.list")))}u.isMDXComponent=!0}}]);