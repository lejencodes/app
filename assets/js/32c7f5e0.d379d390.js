"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[8318],{49880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151);const s={id:"git-repo-clone-with-ssh",title:"Git Repo Clone With SSH",tags:["git","repo","ssh"]},i=void 0,l={id:"programming/tools/git-repo-clone-with-ssh",title:"Git Repo Clone With SSH",description:"This will save up a lot of your time trying to fix SSL Error, certification problem",source:"@site/docs/programming/tools/git-repo-clone-with-ssh.md",sourceDirName:"programming/tools",slug:"/programming/tools/git-repo-clone-with-ssh",permalink:"/docs/programming/tools/git-repo-clone-with-ssh",draft:!1,unlisted:!1,tags:[{label:"git",permalink:"/docs/tags/git"},{label:"repo",permalink:"/docs/tags/repo"},{label:"ssh",permalink:"/docs/tags/ssh"}],version:"current",frontMatter:{id:"git-repo-clone-with-ssh",title:"Git Repo Clone With SSH",tags:["git","repo","ssh"]},sidebar:"docsSidebar",previous:{title:"Git Pull Upstream Changes",permalink:"/docs/programming/tools/git-pull-upstream-changes"},next:{title:"Git Submodule",permalink:"/docs/programming/tools/git-submodule"}},a={},c=[{value:"Turn on the credential helper so that Git will save your password",id:"turn-on-the-credential-helper-so-that-git-will-save-your-password",level:3},{value:"Common Error",id:"common-error",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This will save up a lot of your time trying to fix SSL Error, certification problem"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Go to your dir to check if key exist C:\\Users\\username.ssh"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd %userprofile%\\.ssh`\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Use putty to gen a key and convert openssh"}),"\n",(0,r.jsx)(t.li,{children:"Open putty key generator, under key menu select generate key pair"}),"\n",(0,r.jsx)(t.li,{children:"Move your mouse to generate randomness"}),"\n",(0,r.jsx)(t.li,{children:"Put in your password, save your private key and public key"}),"\n",(0,r.jsx)(t.li,{children:"Copy pub key to Bitbucket / GitHub personal acc"}),"\n",(0,r.jsx)(t.li,{children:"Go to your profile > ssh keys"}),"\n",(0,r.jsx)(t.li,{children:"Copy from putty and paste there"}),"\n",(0,r.jsx)(t.li,{children:"Open git bash, right click on directory - select git bash) into place you wanna clone"}),"\n",(0,r.jsx)(t.li,{children:"Activate ssh agent and add your key to ssh agent, and type your ssh key password"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"eval $(ssh-agent -s)\nssh-add ~/.ssh/id_rsa\n"})}),"\n",(0,r.jsx)(t.h3,{id:"turn-on-the-credential-helper-so-that-git-will-save-your-password",children:"Turn on the credential helper so that Git will save your password"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"By default, Git will cache your password for 15 minutes."}),"\n",(0,r.jsx)(t.li,{children:"In Terminal, enter the following:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# Set git to use the credential memory cache\ngit config --global credential.helper cache\n"})}),"\n",(0,r.jsx)(t.h2,{id:"common-error",children:"Common Error"}),"\n",(0,r.jsx)(t.p,{children:"FATAL ERROR: No supported authentication methods available (server sent: publickey)"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open Pageant add private key"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);