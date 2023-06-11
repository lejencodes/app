"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3191],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?n.createElement(g,p(p({ref:a},u),{},{components:t})):n.createElement(g,p({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1754:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const l={id:"linux-command",title:"Linux Command",tags:["Linux","Command"]},p=void 0,o={unversionedId:"linux/linux-command",id:"linux/linux-command",title:"Linux Command",description:"Basic",source:"@site/docs/linux/linux-command.md",sourceDirName:"linux",slug:"/linux/linux-command",permalink:"/app/docs/linux/linux-command",draft:!1,tags:[{label:"Linux",permalink:"/app/docs/tags/linux"},{label:"Command",permalink:"/app/docs/tags/command"}],version:"current",frontMatter:{id:"linux-command",title:"Linux Command",tags:["Linux","Command"]},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/app/docs/category/linux"},next:{title:"Ubuntu",permalink:"/app/docs/category/ubuntu"}},s={},i=[{value:"Basic",id:"basic",level:2},{value:"AIO Update",id:"aio-update",level:2},{value:"Install tar gz",id:"install-tar-gz",level:2},{value:"Remove snap app",id:"remove-snap-app",level:2},{value:"List Snap app",id:"list-snap-app",level:2},{value:"Update snap",id:"update-snap",level:2},{value:"Check DNS Ubuntu",id:"check-dns-ubuntu",level:2},{value:"Restart Wifi after changing DNS",id:"restart-wifi-after-changing-dns",level:2}],u={toc:i};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic"},"Basic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update        # Fetches the list of available updates\nsudo apt upgrade       # Installs some updates; does not remove packages\nsudo apt full-upgrade  # Installs updates; may also remove some packages, if needed\nsudo apt autoremove    # Removes any old packages that are no longer needed\n")),(0,r.kt)("h2",{id:"aio-update"},"AIO Update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -- sh -c 'apt-get update; apt-get upgrade -y; apt-get full-upgrade -y; apt-get autoremove -y; apt-get autoclean -y'\n")),(0,r.kt)("h2",{id:"install-tar-gz"},"Install tar gz"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tar xfz rider-*.tar.gz -C /opt/\n")),(0,r.kt)("h2",{id:"remove-snap-app"},"Remove snap app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap remove appname\n")),(0,r.kt)("h2",{id:"list-snap-app"},"List Snap app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"snap list\n")),(0,r.kt)("h2",{id:"update-snap"},"Update snap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap refresh appname\nsnap refresh --list\n")),(0,r.kt)("h2",{id:"check-dns-ubuntu"},"Check DNS Ubuntu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmcli dev show | grep DNS\n")),(0,r.kt)("h2",{id:"restart-wifi-after-changing-dns"},"Restart Wifi after changing DNS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart NetworkManager\n")))}c.isMDXComponent=!0}}]);