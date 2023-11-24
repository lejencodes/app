"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6814],{43438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(85893),s=n(11151);const a={slug:"setup-visual-studio-code-in-ubuntu",title:"Setup Visual Studio Code in Ubuntu",authors:["koficodes"],tags:["vscode","ubuntu"]},u=void 0,i={permalink:"/app/blog/setup-visual-studio-code-in-ubuntu",source:"@site/blog/2022-07-17-setup-visual-studio-code-in-ubuntu.md",title:"Setup Visual Studio Code in Ubuntu",description:"You could install Visual Studio Code using apt:",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"vscode",permalink:"/app/blog/tags/vscode"},{label:"ubuntu",permalink:"/app/blog/tags/ubuntu"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"koficodes",title:"Just a person",url:"https://koficodes.xyz",imageURL:"https://github.com/lejencodes.png",key:"koficodes"}],frontMatter:{slug:"setup-visual-studio-code-in-ubuntu",title:"Setup Visual Studio Code in Ubuntu",authors:["koficodes"],tags:["vscode","ubuntu"]},unlisted:!1,prevItem:{title:"Ubuntu Clean Up Command",permalink:"/app/blog/ubuntu-clean-up-command"},nextItem:{title:"Create Python Virtual Environment",permalink:"/app/blog/create-python-virtual-environment"}},l={authorsImageUrls:[void 0]},c=[];function r(e){const t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You could install Visual Studio Code using apt:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -\necho "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" | sudo tee /etc/apt/sources.list.d/vscode.list\nsudo apt update\nsudo apt install code\n'})}),"\n",(0,o.jsx)(t.p,{children:"or snap:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"sudo snap install code --classic\n"})}),"\n",(0,o.jsx)(t.p,{children:"After the C# package installing, the next dialog box appears:\nClicking the marked button opens the next page, which provides the instructions for .Net Core SDK installation (along\nwith ASP.Net Core runtime and .Net Core runtime installation instructions):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"wget https://packages.microsoft.com/config/ubuntu/19.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb\nsudo apt install ./packages-microsoft-prod.deb\nsudo apt-get update\nsudo apt-get install apt-transport-https\nsudo apt-get update\nsudo apt-get install dotnet-sdk-3.1\n"})}),"\n",(0,o.jsx)(t.p,{children:"monodevelop IDE seems is not an option now, because of I could not find it. But if you want to install the current mono\nversion (For example, on 20.04, amd64 architecture) you could use official mono repository:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'sudo apt install gnupg ca-certificates\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF\necho "deb [arch=amd64] https://download.mono-project.com/repo/ubuntu stable-focal main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list\nsudo apt update\nsudo apt install mono-devel\n'})}),"\n",(0,o.jsx)(t.p,{children:"You could also install additional mono packages, which you could find by:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"apt-cache search mono\n"})}),"\n",(0,o.jsx)(t.p,{children:"The man mono will introduce you to its usage:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"    DESCRIPTION\n        mono is a runtime implementation of the ECMA Common  Lan\u2010\n        guage  Infrastructure.   This can be used to run ECMA and\n        .NET applications.\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>u});var o=n(67294);const s={},a=o.createContext(s);function u(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);