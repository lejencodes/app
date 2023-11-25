"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[7759],{19041:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var n=l(85893),t=l(11151);const s={id:"git-submodule",title:"Git Submodule",tags:["git","submodule"]},u=void 0,a={id:"programming/tools/git-submodule",title:"Git Submodule",description:"Adding or Cloning a submodule",source:"@site/docs/programming/tools/git-submodule.md",sourceDirName:"programming/tools",slug:"/programming/tools/git-submodule",permalink:"/docs/programming/tools/git-submodule",draft:!1,unlisted:!1,tags:[{label:"git",permalink:"/docs/tags/git"},{label:"submodule",permalink:"/docs/tags/submodule"}],version:"current",frontMatter:{id:"git-submodule",title:"Git Submodule",tags:["git","submodule"]},sidebar:"docsSidebar",previous:{title:"Git Repo Clone With SSH",permalink:"/docs/programming/tools/git-repo-clone-with-ssh"},next:{title:"Git Worktree",permalink:"/docs/programming/tools/git-worktree"}},d={},r=[{value:"Adding or Cloning a submodule",id:"adding-or-cloning-a-submodule",level:2},{value:"Update All Submodules (no local changes)",id:"update-all-submodules-no-local-changes",level:2},{value:"Update All Submodules (with local changes)",id:"update-all-submodules-with-local-changes",level:2},{value:"Another Way to Update All Submodule",id:"another-way-to-update-all-submodule",level:2},{value:"Push Local Work to Submodule",id:"push-local-work-to-submodule",level:2},{value:"Common Error",id:"common-error",level:2},{value:"Removing a submodule",id:"removing-a-submodule",level:2}];function i(e){const o={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"adding-or-cloning-a-submodule",children:"Adding or Cloning a submodule"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"git submodule add <url>\n"})}),"\n",(0,n.jsx)(o.h2,{id:"update-all-submodules-no-local-changes",children:"Update All Submodules (no local changes)"}),"\n",(0,n.jsx)(o.p,{children:"If you do not have any local changes in your submodules, and all you want to do is consume new commits for your\nsubmodules' upstreams, you can run this command. It will go through each submodule, update remotes, and then update to\nthe latest commit."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"git submodule update --remote [--recursive]\n"})}),"\n",(0,n.jsx)(o.h2,{id:"update-all-submodules-with-local-changes",children:"Update All Submodules (with local changes)"}),"\n",(0,n.jsx)(o.p,{children:"If you have made local changes to your submodules, and want to pull new changes from the submodules' upstream, git makes\nthis really simple. Make sure to specify whether you want to rebase or merge."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"git submodule update --remote [--rebase | --merge] [--recursive]\n"})}),"\n",(0,n.jsx)(o.h2,{id:"another-way-to-update-all-submodule",children:"Another Way to Update All Submodule"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"git submodule foreach --recursive git checkout master\ngit submodule foreach --recursive git pull\n"})}),"\n",(0,n.jsx)(o.h2,{id:"push-local-work-to-submodule",children:"Push Local Work to Submodule"}),"\n",(0,n.jsx)(o.p,{children:"A submodule is nothing but a clone of a git repo within another repo with some extra metadata (gitlink tree entry,\n.gitmodules file )"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:'cd your_submodule\ngit checkout master\ngit commit -a -m "commit in submodule"\ngit push\ncd ..\ngit add your_submodule\ngit commit -m "Updated submodule"\n'})}),"\n",(0,n.jsx)(o.h2,{id:"common-error",children:"Common Error"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"fatal: Needed a single revision\nUnable to find current origin/master revision in submodule path 'xxFolder'\nFix by remove the folder and update again"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"rm -rf xxFolder\ngit submodule update\n"})}),"\n",(0,n.jsx)(o.h2,{id:"removing-a-submodule",children:"Removing a submodule"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:'git submodule deinit path/to/module \ngit rm path/to/module\ngit commit -am "Removed submodule X" \n'})})]})}function m(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},11151:(e,o,l)=>{l.d(o,{Z:()=>a,a:()=>u});var n=l(67294);const t={},s=n.createContext(t);function u(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);