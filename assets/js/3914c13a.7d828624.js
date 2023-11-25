"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5187],{50555:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),t=n(11151);const r={id:"git-multiple-repo",title:"Git Multiple Repositories",tags:["git","repo"]},l="Managing Multiple Git Repositories",o={id:"programming/tools/git-multiple-repo",title:"Git Multiple Repositories",description:"When your codebase becomes too large to maintain in a single Git repository, you should consider using multiple",source:"@site/docs/programming/tools/git-multiple-repo.md",sourceDirName:"programming/tools",slug:"/programming/tools/git-multiple-repo",permalink:"/app/docs/programming/tools/git-multiple-repo",draft:!1,unlisted:!1,tags:[{label:"git",permalink:"/app/docs/tags/git"},{label:"repo",permalink:"/app/docs/tags/repo"}],version:"current",frontMatter:{id:"git-multiple-repo",title:"Git Multiple Repositories",tags:["git","repo"]},sidebar:"docsSidebar",previous:{title:"Make another branch as master",permalink:"/app/docs/programming/tools/make-another-branch-as-master"},next:{title:"Git Pull Upstream Changes",permalink:"/app/docs/programming/tools/git-pull-upstream-changes"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Multiple Repositories",id:"setting-up-multiple-repositories",level:2},{value:"Working with Multiple Repositories",id:"working-with-multiple-repositories",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"managing-multiple-git-repositories",children:"Managing Multiple Git Repositories"}),"\n",(0,s.jsx)(i.p,{children:"When your codebase becomes too large to maintain in a single Git repository, you should consider using multiple\nrepositories. This guide explains how to manage multiple Git repositories effectively."}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.p,{children:"Before you start managing multiple repositories, ensure the following prerequisites are met:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Your public SSH keys (",(0,s.jsx)(i.code,{children:"id_ecdsa.pub"})," / ",(0,s.jsx)(i.code,{children:"id_rsa.pub"})," / ",(0,s.jsx)(i.code,{children:"id_ed25519.pub"}),", etc.) are added to your GitHub and GitLab\nprofiles."]}),"\n",(0,s.jsxs)(i.li,{children:["Your private SSH keys (",(0,s.jsx)(i.code,{children:"id_ecdsa"})," / ",(0,s.jsx)(i.code,{children:"id_rsa"})," / ",(0,s.jsx)(i.code,{children:"id_ed25519"}),", etc.) are added and persisted in your operating system's\nkeychain."]}),"\n",(0,s.jsxs)(i.li,{children:["Your SSH config file (",(0,s.jsx)(i.code,{children:"~/.ssh/config"}),") is properly configured with keys for GitHub and GitLab."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Example SSH config:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".ssh/config"',children:"Host github.com\nHostname github.com\nAddKeysToAgent yes\nUseKeychain yes\nIdentityFile ~/.ssh/id_ecdsa\n\nHost gitlab.com\nHostname gitlab.com\nAddKeysToAgent yes\nUseKeychain yes\nIdentityFile ~/.ssh/id_rsa\n"})}),"\n",(0,s.jsx)(i.p,{children:"Or, for multiple users:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".ssh/config"',children:"Host github.com-user\nHostName github.com\nUser git\nIdentityFile /home/user/.ssh/id_ed25519\n\nHost gitlab.com\nPreferredAuthentications publickey\nIdentityFile /home/user/.ssh/id_ed25519_2\n"})}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-multiple-repositories",children:"Setting Up Multiple Repositories"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Initialize Git in a directory:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git init\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsx)(i.li,{children:"Connect Git to one remote repository (located on GitHub):"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git remote add origin git@github.com:your-username/your-repo.git\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:["Rename the ",(0,s.jsx)(i.code,{children:".git"})," directory to something like ",(0,s.jsx)(i.code,{children:".github"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"mv .git .github\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"4",children:["\n",(0,s.jsx)(i.li,{children:"Initialize Git again:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git init\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsx)(i.li,{children:"Connect Git to the other remote repository (located on GitLab):"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git remote add origin git@gitlab.com:your-username/your-repo.git\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsxs)(i.li,{children:["Rename the ",(0,s.jsx)(i.code,{children:".git"})," directory to something like ",(0,s.jsx)(i.code,{children:".gitlab"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"mv .git .gitlab\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"7",children:["\n",(0,s.jsx)(i.li,{children:"Verify that the current directory is connected to two different remote repositories:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git --git-dir=.github remote -v\n"})}),"\n",(0,s.jsx)(i.h2,{id:"working-with-multiple-repositories",children:"Working with Multiple Repositories"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Pull changes from remote repositories (GitHub and GitLab):"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git --git-dir=.github pull origin main\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Add a file to both repositories:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git --git-dir=.github add README.md\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Commit changes:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:'git --git-dir=.github commit -m "Operational overview"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Push changes to the remote repositories:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"git --git-dir=.gitlab push -u origin main\n"})}),"\n",(0,s.jsxs)(i.p,{children:["For frequent use, consider adding an alias in your shell configuration file (e.g., ",(0,s.jsx)(i.code,{children:".zprofile"}),", ",(0,s.jsx)(i.code,{children:".bashrc"}),", etc.):"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:'export github="git --git-dir=.github"\n'})}),"\n",(0,s.jsx)(i.p,{children:"This allows you to perform future operations, such as pulling, pushing, adding, and committing, more conveniently, like\nso:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"github pull origin main\n"})}),"\n",(0,s.jsx)(i.p,{children:"You can create similar aliases for other repositories as needed."})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>l});var s=n(67294);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);