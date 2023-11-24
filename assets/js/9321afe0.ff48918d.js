"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6698],{61102:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(85893),r=o(11151);const s={id:"setup-dropbox",title:"Setup Dropbox",tags:["setup","ubuntu","dropbox"]},a=void 0,l={id:"config-and-setup/setup-dropbox",title:"Setup Dropbox",description:"Dropbox 64-bit",source:"@site/docs/config-and-setup/setup-dropbox.md",sourceDirName:"config-and-setup",slug:"/config-and-setup/setup-dropbox",permalink:"/app/docs/config-and-setup/setup-dropbox",draft:!1,unlisted:!1,tags:[{label:"setup",permalink:"/app/docs/tags/setup"},{label:"ubuntu",permalink:"/app/docs/tags/ubuntu"},{label:"dropbox",permalink:"/app/docs/tags/dropbox"}],version:"current",frontMatter:{id:"setup-dropbox",title:"Setup Dropbox",tags:["setup","ubuntu","dropbox"]},sidebar:"docsSidebar",previous:{title:"Setup Deluge For Raspberry Pi",permalink:"/app/docs/config-and-setup/setup-deluge-for-raspberry-pi"},next:{title:"Setup Flathub",permalink:"/app/docs/config-and-setup/setup-flathub"}},i={},d=[{value:"Dropbox 64-bit",id:"dropbox-64-bit",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dropbox-64-bit",children:"Dropbox 64-bit"}),"\n",(0,t.jsx)(n.p,{children:"To install Dropbox on your Linux machine with a 64-bit architecture, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open your terminal and navigate to your home directory by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd ~\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Download the Dropbox installation package using the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -\n'})}),"\n",(0,t.jsx)(n.p,{children:"This command will download the Dropbox installation package and extract its contents."}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Once the download and extraction are complete, you can run the Dropbox daemon. Navigate to the newly\ncreated ",(0,t.jsx)(n.code,{children:".dropbox-dist"})," folder by running the following command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd ~/.dropbox-dist\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Finally, start the Dropbox daemon by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./dropboxd\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Add a shortcut to open dropbox, create a ",(0,t.jsx)(n.code,{children:".sh"})," file"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#!/bin/bash\n~/.dropbox-dist/dropboxd\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Dropbox daemon will now run in the background, and you can access your Dropbox files through the Dropbox application\non your Linux machine."}),"\n",(0,t.jsx)(n.p,{children:"That's it! You have successfully installed and set up Dropbox on your Linux machine with a 64-bit architecture. Enjoy\nusing Dropbox to sync and share your files!"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>a});var t=o(67294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);