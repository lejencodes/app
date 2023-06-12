"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"personal-ubuntu-machine-setup",title:"Personal Ubuntu Machine Setup",tags:["setup","ubuntu"]},s=void 0,u={unversionedId:"linux/ubuntu/personal-ubuntu-machine-setup",id:"linux/ubuntu/personal-ubuntu-machine-setup",title:"Personal Ubuntu Machine Setup",description:"Ubuntu is a variation of the GNU-Linux operating system, similar to other distributions such as RedHat, Fedora, SUSE,",source:"@site/docs/linux/ubuntu/personal-ubuntu-machine-setup.md",sourceDirName:"linux/ubuntu",slug:"/linux/ubuntu/personal-ubuntu-machine-setup",permalink:"/app/docs/linux/ubuntu/personal-ubuntu-machine-setup",draft:!1,tags:[{label:"setup",permalink:"/app/docs/tags/setup"},{label:"ubuntu",permalink:"/app/docs/tags/ubuntu"}],version:"current",frontMatter:{id:"personal-ubuntu-machine-setup",title:"Personal Ubuntu Machine Setup",tags:["setup","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/app/docs/category/ubuntu"},next:{title:"Setup Ubuntu",permalink:"/app/docs/linux/ubuntu/setup-ubuntu"}},i={},l=[{value:"KeepassXC",id:"keepassxc",level:2},{value:"Dropbox 64-bit",id:"dropbox-64-bit",level:2},{value:"Install The Basics",id:"install-the-basics",level:2},{value:"Setup ohmyzsh",id:"setup-ohmyzsh",level:2},{value:"Set Default Shell",id:"set-default-shell",level:3},{value:"Config Setup For Zsh",id:"config-setup-for-zsh",level:3},{value:"Install Codium",id:"install-codium",level:2},{value:"Create ssh keys",id:"create-ssh-keys",level:2},{value:"Setup Kinto",id:"setup-kinto",level:2},{value:"Possible Kinto setup issue",id:"possible-kinto-setup-issue",level:3},{value:"Tkinter not found",id:"tkinter-not-found",level:4},{value:"journalctl command not found",id:"journalctl-command-not-found",level:4},{value:"Setup Chrome",id:"setup-chrome",level:2},{value:"Setup Brave",id:"setup-brave",level:2},{value:"Pi hole",id:"pi-hole",level:2},{value:"Setup Screenshot App",id:"setup-screenshot-app",level:2},{value:"Setup VNC Viewer",id:"setup-vnc-viewer",level:2},{value:"To connect",id:"to-connect",level:3}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ubuntu is a variation of the GNU-Linux operating system, similar to other distributions such as RedHat, Fedora, SUSE,\nand Debian. It is simply a combination of the Linux Kernel and GNU System Programs and Utilities. This open source and\nfree (as in freedom of speech, not financially) OS is funded and supported by South African millionaire Mark\nShuttleworth, who founded Canonical Inc. The term "ubuntu" originates from a southern African language and translates\nto "humanity towards others". It uses the GNOME desktop environment and comes complete with the OpenOffice suite,\nFirefox, Mozilla Thunderbird, Pidgin, and a selection of other tools and games. It is managed with the Advanced\nPackaging Tool (APT) from Debian. The first version of Ubuntu was released in October 2004 and since then, there have\nbeen two updates each year in April (YY-04) and October (YY-10) with some versions labelled Long Term Support (LTS).'),(0,o.kt)("h2",{id:"keepassxc"},"KeepassXC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install keepassxc\n")),(0,o.kt)("h2",{id:"dropbox-64-bit"},"Dropbox 64-bit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -\n')),(0,o.kt)("p",null,"Next, run the Dropbox daemon from the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},".dropbox-dist")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~/.dropbox-dist/dropboxd\n")),(0,o.kt)("h2",{id:"install-the-basics"},"Install The Basics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install curl wget git\n")),(0,o.kt)("h2",{id:"setup-ohmyzsh"},"Setup ohmyzsh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\nOR\nsh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"\n')),(0,o.kt)("h3",{id:"set-default-shell"},"Set Default Shell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chsh -s $(which zsh)\n")),(0,o.kt)("h3",{id:"config-setup-for-zsh"},"Config Setup For Zsh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zsh-custom.sh\n")),(0,o.kt)("h2",{id:"install-codium"},"Install Codium"),(0,o.kt)("p",null,"Add the GPG key of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg \\\n| gpg --dearmor \\\n| sudo dd of=/usr/share/keyrings/vscodium-archive-keyring.gpg\n")),(0,o.kt)("p",null,"Add the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo 'deb [ signed-by=/usr/share/keyrings/vscodium-archive-keyring.gpg ] https://download.vscodium.com/debs vscodium main' \\\n| sudo tee /etc/apt/sources.list.d/vscodium.list\n")),(0,o.kt)("p",null,"Update then install vscodium (if you want vscodium-insiders, then replace codium by codium-insiders):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt install codium\n")),(0,o.kt)("h2",{id:"create-ssh-keys"},"Create ssh keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod 600 if permission need fix\n")),(0,o.kt)("h2",{id:"setup-kinto"},"Setup Kinto"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rbreaves/kinto"},"https://github.com/rbreaves/kinto")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(wget -qO- https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh || curl\n-fsSL https://raw.githubusercontent.com/rbreaves/kinto/HEAD/install/linux.sh)"\n')),(0,o.kt)("h3",{id:"possible-kinto-setup-issue"},"Possible Kinto setup issue"),(0,o.kt)("h4",{id:"tkinter-not-found"},"Tkinter not found"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install python3-tk\n")),(0,o.kt)("h4",{id:"journalctl-command-not-found"},"journalctl command not found"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install systemd\n")),(0,o.kt)("h2",{id:"setup-chrome"},"Setup Chrome"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\nsudo dpkg -i google-chrome-stable_current_amd64.deb\n")),(0,o.kt)("h2",{id:"setup-brave"},"Setup Brave"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo apt install curl\nsudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list\nsudo apt update\nsudo apt install brave-browser\n')),(0,o.kt)("h2",{id:"pi-hole"},"Pi hole"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs"},"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs")),(0,o.kt)("h2",{id:"setup-screenshot-app"},"Setup Screenshot App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo add-apt-repository -y ppa:linuxuprising/shutter\nsudo apt-get install -y shutter\n")),(0,o.kt)("h2",{id:"setup-vnc-viewer"},"Setup VNC Viewer"),(0,o.kt)("p",null,"Download VNC viewer from ",(0,o.kt)("a",{parentName:"p",href:"https://www.realvnc.com/en/connect/download/viewer/"},"https://www.realvnc.com/en/connect/download/viewer/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/Downloads\nsudo dpkg -i VNC-Viewer-*-Linux-x64.deb\n")),(0,o.kt)("h3",{id:"to-connect"},"To connect"),(0,o.kt)("p",null,"Setup new connection and input ip address of the device"))}c.isMDXComponent=!0}}]);