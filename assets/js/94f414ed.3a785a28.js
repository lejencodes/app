"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3834],{36248:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(85893),r=o(11151);const s={id:"list-of-nord-vpn-command",title:"List Of Nord Vpn Command",description:"List of Nord VPN Command available in Linux",tags:["nordvpn","command"]},i="NordVPN",c={id:"cheatsheet/list-of-nord-vpn-command",title:"List Of Nord Vpn Command",description:"List of Nord VPN Command available in Linux",source:"@site/docs/cheatsheet/list-of-nord-vpn-command.md",sourceDirName:"cheatsheet",slug:"/cheatsheet/list-of-nord-vpn-command",permalink:"/docs/cheatsheet/list-of-nord-vpn-command",draft:!1,unlisted:!1,tags:[{label:"nordvpn",permalink:"/docs/tags/nordvpn"},{label:"command",permalink:"/docs/tags/command"}],version:"current",frontMatter:{id:"list-of-nord-vpn-command",title:"List Of Nord Vpn Command",description:"List of Nord VPN Command available in Linux",tags:["nordvpn","command"]},sidebar:"docsSidebar",previous:{title:"Linux Command",permalink:"/docs/cheatsheet/linux-command"},next:{title:"Markdown Cheat Sheet",permalink:"/docs/cheatsheet/markdown-cheat-sheet"}},a={},d=[];function p(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"nordvpn",children:"NordVPN"}),"\n",(0,t.jsx)(e.p,{children:"Here is the list of available commands:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"**nordvpn login** - Log in.\n**nordvpn connect** or **nordvpn c** - Connect to VPN.\xa0To connect to specific servers, use\xa0**nordvpn connect <_country_code\xa0server_number>_**\xa0(eg. **nordvpn** **connect uk715**)\n**nordvpn disconnect** or **nordvpn d** - Disconnect from VPN.\n**nordvpn c double_vpn** - Connect to the closest Double VPN server.\n**nordvpn connect --group double_vpn <country_code>** -\xa0Connect to a specific country using DoubleVPN servers.\n\n**nordvpn connect P2P** - connect to a P2P server.\n**nordvpn connect** **The_Americas** - connect to servers located in the Americas.\n**nordvpn connect Dedicated_IP** - connect to a Dedicated IP server.\n\n**nordvpn set** or **nordvpn s** - Set\xa0a configuration option.\nPossible options:\n**nordvpn set threatprotectionlite** **on** or **off** -\xa0Enable or disable [Threat Protection Lite](https://support.nordvpn.com/General-info/Features/1047407402/What-are-Threat-Protection-and-Threat-Protection-Lite.htm)\n**nordvpn set killswitch on** or **off** -\xa0Enable or disable\xa0[Kill Switch](https://support.nordvpn.com/General-info/Features/1047407832/What-is-Kill-Switch-and-how-does-it-work.htm)\n**nordvpn set autoconnect on** or **off** -\xa0Enable or disable auto-connect. You can set a specific server for automatic connection using\xa0**nordvpn set autoconnect on country_code+server_number**. Example:\xa0**nordvpn set autoconnect on us2435**.\n\n**nordvpn set notify\xa0on** or **off** - Enable or disable notifications\n**nordvpn set dns 1.1.1.1**\xa0**1.0.0.1**\xa0-\xa0Set custom DNS (you can set up a single DNS or two like shown in this command).\n**nordvpn set protocol udp** or **tcp** -\xa0Switch between [UDP and TCP protocols](https://support.nordvpn.com/General-info/1047408102/What-are-the-pros-and-cons-of-TCP-and-UDP.htm)\n**nordvpn set obfuscate on** or **off** - Enable or disable [Obfuscated Servers](https://support.nordvpn.com/General-info/Features/1047407962/What-do-the-different-NordVPN-server-categories-mean.htm).\n**nordvpn set technology** - Set connection technology (OpenVPN or [NordLynx](https://support.nordvpn.com/Connectivity/Linux/1362931332/How-can-I-use-NordLynx-in-the-NordVPN-app-for-Linux.htm))\n\n**nordvpn whitelist add port 22** - Add a rule to whitelist a specified incoming port. You can also whitelist multiple ports \u2014 just separate their numbers with a space.\n**nordvpn whitelist remove port 22** - Remove the rule to whitelist a specified port.\n**nordvpn whitelist add subnet 192.168.0.0/16** - Add a rule to whitelist a specified subnet.\n**nordvpn whitelist remove subnet 192.168.0.0/16**\xa0 - Remove the rule to whitelist a specified subnet.\n\n**nordvpn account** - See account information\n**nordvpn register** - Register a new user account\n**nordvpn rate** - Rate your last connection quality (1-5)\n**nordvpn settings** - See the current settings.\n**nordvpn status** - See the connection status.\n**nordvpn countries** - See the country list.\n**nordvpn cities**- See the city\xa0list. E.g.: **nordvpn cities united_states**\n**nordvpn groups** - See a\xa0list of available server groups.\n**nordvpn logout** - Log\xa0out.\n**nordvpn help** or **nordvpn h** - See the list of available commands or help for a specific command.\n"})})]})}function l(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>c,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);