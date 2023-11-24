"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1414],{85526:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),a=s(11151);const i={id:"setup-personal-ubuntu-machine",title:"Setup Personal Ubuntu Machine",tags:["setup","ubuntu"]},r=void 0,o={id:"config-and-setup/setup-personal-ubuntu-machine",title:"Setup Personal Ubuntu Machine",description:"Ubuntu is a variation of the GNU-Linux operating system, similar to other distributions such as RedHat, Fedora, SUSE,",source:"@site/docs/config-and-setup/setup-personal-ubuntu-machine.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-personal-ubuntu-machine",permalink:"/app/docs/config-and-setup/setup-personal-ubuntu-machine",draft:!1,unlisted:!1,tags:[{label:"setup",permalink:"/app/docs/tags/setup"},{label:"ubuntu",permalink:"/app/docs/tags/ubuntu"}],version:"current",frontMatter:{id:"setup-personal-ubuntu-machine",title:"Setup Personal Ubuntu Machine",tags:["setup","ubuntu"]},sidebar:"docsSidebar",previous:{title:"Setup Oh My ZSH",permalink:"/app/docs/config-and-setup/setup-oh-my-zsh"},next:{title:"Setup Pi Hole For Raspberry Pi",permalink:"/app/docs/config-and-setup/setup-pi-hole-for-raspberry-pi"}},p={},l=[{value:"KeepassXC",id:"keepassxc",level:2},{value:"Dropbox 64-bit",id:"dropbox-64-bit",level:2},{value:"Install The Basics",id:"install-the-basics",level:2},{value:"Setup ohmyzsh",id:"setup-ohmyzsh",level:2},{value:"Install Codium",id:"install-codium",level:2},{value:"Create ssh keys",id:"create-ssh-keys",level:2},{value:"Setup Kinto",id:"setup-kinto",level:2},{value:"Setup Chrome",id:"setup-chrome",level:2},{value:"Setup Brave",id:"setup-brave",level:2},{value:"Pi hole",id:"pi-hole",level:2},{value:"Setup Screenshot App",id:"setup-screenshot-app",level:2},{value:"Setup VNC Viewer",id:"setup-vnc-viewer",level:2},{value:"PPA",id:"ppa",level:2},{value:"Flakpak Linux",id:"flakpak-linux",level:2},{value:"KRename",id:"krename",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Ubuntu is a variation of the GNU-Linux operating system, similar to other distributions such as RedHat, Fedora, SUSE,\nand Debian. It is simply a combination of the Linux Kernel and GNU System Programs and Utilities. This open source and\nfree (as in freedom of speech, not financially) OS is funded and supported by South African millionaire Mark\nShuttleworth, who founded Canonical Inc. The term "ubuntu" originates from a southern African language and translates\nto "humanity towards others". It uses the GNOME desktop environment and comes complete with the OpenOffice suite,\nFirefox, Mozilla Thunderbird, Pidgin, and a selection of other tools and games. It is managed with the Advanced\nPackaging Tool (APT) from Debian. The first version of Ubuntu was released in October 2004 and since then, there have\nbeen two updates each year in April (YY-04) and October (YY-10) with some versions labelled Long Term Support (LTS).'}),"\n",(0,t.jsx)(n.h2,{id:"keepassxc",children:"KeepassXC"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-keypass-xc",children:"[setup-keepassxc]"})}),"\n",(0,t.jsx)(n.h2,{id:"dropbox-64-bit",children:"Dropbox 64-bit"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-dropbox",children:"[setup-dropbox]"})}),"\n",(0,t.jsx)(n.h2,{id:"install-the-basics",children:"Install The Basics"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt install curl wget git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-ohmyzsh",children:"Setup ohmyzsh"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-oh-my-zsh",children:"[setup-oh-my-zsh]"})}),"\n",(0,t.jsx)(n.h2,{id:"install-codium",children:"Install Codium"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-codium",children:"[setup-codium]"})}),"\n",(0,t.jsx)(n.h2,{id:"create-ssh-keys",children:"Create ssh keys"}),"\n",(0,t.jsx)(n.p,{children:"chmod 600 if permission need fix"}),"\n",(0,t.jsx)(n.h2,{id:"setup-kinto",children:"Setup Kinto"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-kinto",children:"[setup-kinto]"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-chrome",children:"Setup Chrome"}),"\n",(0,t.jsxs)(n.p,{children:["wget ",(0,t.jsx)(n.a,{href:"https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb",children:"https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"}),"\nsudo dpkg -i google-chrome-stable_current_amd64.deb"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-brave",children:"Setup Brave"}),"\n",(0,t.jsxs)(n.p,{children:["sudo apt install curl\nsudo curl -fsSLo\n/usr/share/keyrings/brave-browser-archive-keyring.gpg ",(0,t.jsx)(n.a,{href:"https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg",children:"https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg"}),'\necho "\ndeb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] ',(0,t.jsx)(n.a,{href:"https://brave-browser-apt-release.s3.brave.com/",children:"https://brave-browser-apt-release.s3.brave.com/"}),'\nstable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list\nsudo apt update\nsudo apt install brave-browser']}),"\n",(0,t.jsx)(n.h2,{id:"pi-hole",children:"Pi hole"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-pi-hole-for-raspberry-pi",children:"[setup-pi-hole-for-raspberry-pi]"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs",children:"https://github.com/rajannpatel/Pi-Hole-PiVPN-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-OpenVPN-Configs"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-screenshot-app",children:"Setup Screenshot App"}),"\n",(0,t.jsxs)(n.p,{children:["sudo add-apt-repository -y ppa",":linuxuprising","/shutter\nsudo apt-get install -y shutter"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-vnc-viewer",children:"Setup VNC Viewer"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-vnc-viewer",children:"[setup-vnc-viewer]"})}),"\n",(0,t.jsx)(n.h2,{id:"ppa",children:"PPA"}),"\n",(0,t.jsxs)(n.p,{children:["To manage PPA (Personal Package Archive) repositories ",(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/ppa",children:"[ppa]"})]}),"\n",(0,t.jsx)(n.h2,{id:"flakpak-linux",children:"Flakpak Linux"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/app/docs/config-and-setup/setup-flathub",children:"[setup-flathub]"})}),"\n",(0,t.jsx)(n.h2,{id:"krename",children:"KRename"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install krename\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(67294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);