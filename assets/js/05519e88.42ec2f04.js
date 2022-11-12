"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={},a=void 0,s={unversionedId:"Ubuntu/Setup",id:"Ubuntu/Setup",title:"Setup",description:"KeepassXC",source:"@site/docs/Ubuntu/Setup.md",sourceDirName:"Ubuntu",slug:"/Ubuntu/Setup",permalink:"/docs/Ubuntu/Setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/Tutorial/tutorial-extras/translate-your-site"}},u={},i=[{value:"KeepassXC",id:"keepassxc",level:2},{value:"Dropbox 64-bit",id:"dropbox-64-bit",level:2},{value:"Install curl wget git",id:"install-curl-wget-git",level:2},{value:"Setup ohmyzsh",id:"setup-ohmyzsh",level:2},{value:"Set default shell",id:"set-default-shell",level:3},{value:"then run config setup for zsh",id:"then-run-config-setup-for-zsh",level:3},{value:"Install Codium",id:"install-codium",level:2},{value:"Create ssh keys",id:"create-ssh-keys",level:2},{value:"Setup Kinto",id:"setup-kinto",level:2},{value:"Possible Kinto setup issue",id:"possible-kinto-setup-issue",level:3},{value:"Tkinter not found",id:"tkinter-not-found",level:4},{value:"journalctl command not found",id:"journalctl-command-not-found",level:4},{value:"Setup Chrome",id:"setup-chrome",level:2},{value:"Setup Brave",id:"setup-brave",level:2},{value:"Pi hole",id:"pi-hole",level:2}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keepassxc"},"KeepassXC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install keepassxc\n")),(0,o.kt)("h2",{id:"dropbox-64-bit"},"Dropbox 64-bit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -\n')),(0,o.kt)("p",null,"Next, run the Dropbox daemon from the newly created .dropbox-dist folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~/.dropbox-dist/dropboxd\n")),(0,o.kt)("h2",{id:"install-curl-wget-git"},"Install curl wget git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install curl wget git\n")),(0,o.kt)("h2",{id:"setup-ohmyzsh"},"Setup ohmyzsh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\nOR\nsh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"\n')),(0,o.kt)("h3",{id:"set-default-shell"},"Set default shell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chsh -s $(which zsh)\n")),(0,o.kt)("h3",{id:"then-run-config-setup-for-zsh"},"then run config setup for zsh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zsh-custom.sh\n")),(0,o.kt)("h2",{id:"install-codium"},"Install Codium"),(0,o.kt)("p",null,"Add the GPG key of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg \\\n| gpg --dearmor \\\n| sudo dd of=/usr/share/keyrings/vscodium-archive-keyring.gpg\n")),(0,o.kt)("p",null,"Add the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo 'deb [ signed-by=/usr/share/keyrings/vscodium-archive-keyring.gpg ] https://download.vscodium.com/debs vscodium main' \\\n| sudo tee /etc/apt/sources.list.d/vscodium.list\n")),(0,o.kt)("p",null,"Update then install vscodium (if you want vscodium-insiders, then replace codium by codium-insiders):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt install codium\n")),(0,o.kt)("h2",{id:"create-ssh-keys"},"Create ssh keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod 600 if permission need fix\n")),(0,o.kt)("h2",{id:"setup-kinto"},"Setup Kinto"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rbreaves/kinto"},"https://github.com/rbreaves/kinto")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(wget -qO- https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh || curl\n-fsSL https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh)"\n')),(0,o.kt)("h3",{id:"possible-kinto-setup-issue"},"Possible Kinto setup issue"),(0,o.kt)("h4",{id:"tkinter-not-found"},"Tkinter not found"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install python3-tk\n")),(0,o.kt)("h4",{id:"journalctl-command-not-found"},"journalctl command not found"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install systemd\n")),(0,o.kt)("h2",{id:"setup-chrome"},"Setup Chrome"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\nsudo dpkg -i google-chrome-stable_current_amd64.deb\n")),(0,o.kt)("h2",{id:"setup-brave"},"Setup Brave"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo apt install apt-transport-https curl\ncurl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -\necho "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list\nsudo apt update && sudo apt install brave-browser\n')),(0,o.kt)("h2",{id:"pi-hole"},"Pi hole"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs"},"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs")))}c.isMDXComponent=!0}}]);