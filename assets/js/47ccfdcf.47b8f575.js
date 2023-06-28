"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"setup-deluge-for-raspberry-pi",title:"Setup Deluge For Raspberry Pi",tags:["deluge","raspberry-pi","setup"]},l=void 0,i={unversionedId:"config-and-setup/setup-deluge-for-raspberry-pi",id:"config-and-setup/setup-deluge-for-raspberry-pi",title:"Setup Deluge For Raspberry Pi",description:"Fix Deluge Web Ui doesn't connect Automatically to Daemon",source:"@site/docs/config-and-setup/setup-deluge-for-raspberry-pi.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-deluge-for-raspberry-pi",permalink:"/app/docs/config-and-setup/setup-deluge-for-raspberry-pi",draft:!1,tags:[{label:"deluge",permalink:"/app/docs/tags/deluge"},{label:"raspberry-pi",permalink:"/app/docs/tags/raspberry-pi"},{label:"setup",permalink:"/app/docs/tags/setup"}],version:"current",frontMatter:{id:"setup-deluge-for-raspberry-pi",title:"Setup Deluge For Raspberry Pi",tags:["deluge","raspberry-pi","setup"]},sidebar:"tutorialSidebar",previous:{title:"Ghost Blog Migration",permalink:"/app/docs/config-and-setup/planning/ghost-blog-migration"},next:{title:"Setup Personal Ubuntu Machine",permalink:"/app/docs/config-and-setup/setup-personal-ubuntu-machine"}},s={},p=[{value:"Fix Deluge Web Ui doesn&#39;t connect Automatically to Daemon",id:"fix-deluge-web-ui-doesnt-connect-automatically-to-daemon",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fix-deluge-web-ui-doesnt-connect-automatically-to-daemon"},"Fix Deluge Web Ui doesn't connect Automatically to Daemon"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:58846")," as default daemon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 444 ~/.config/deluge/web.conf\nreboot\n")),(0,a.kt)("p",null,"Deluged (the background daemon) ships as disabled so we need to enable it before proceeding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/default/deluged\n")),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_DELUGED=0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ENABLE_DELUGED=1")),(0,a.kt)("p",null,"OSMC uses systemd instead of the older init.d method of starting services, so let's use that to deal with starting\nthings\nautomatically at boot time, it will make managing things easier later on."),(0,a.kt)("p",null,"Firstly, delete the old way to prevent future confusion:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-rc.d deluged remove\nsudo rm /etc/init.d/deluged\n")),(0,a.kt)("p",null,"Then create a systemd unit as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/deluged.service\n")),(0,a.kt)("p",null,"Add the following text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[Unit]\n\nDescription = Deluge Bittorent Daemon\nAfter = network-online.target\n\n[Service]\n\nType = simple\nUser = debian-deluged\nGroup = debian-deluged\nUMask = 007\nExecStart = /usr/bin/deluged -d\nRestart = on-failure\n\n# Configures the time to wait before service is stopped forcefully.\nTimeoutStopSec = 300\n\n[Install]\nWantedBy = multi-user.target\n\n")),(0,a.kt)("p",null,"Finally for this step systemd needs to be made aware of the new files and then reloaded to pick up the new unit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo systemctl enable deluged.service\n")),(0,a.kt)("p",null,"The daemon can now be started with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl start deluged")," and will run automatically when the machine boots up."))}d.isMDXComponent=!0}}]);