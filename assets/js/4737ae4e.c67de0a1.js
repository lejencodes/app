"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"Git Worktree",title:"Git Worktree",tags:["Git"]},i=void 0,c={unversionedId:"Dev Notes/Tools/Git Worktree",id:"Dev Notes/Tools/Git Worktree",title:"Git Worktree",description:"[[Git]]",source:"@site/docs/Dev Notes/Tools/Git-Worktree.md",sourceDirName:"Dev Notes/Tools",slug:"/Dev Notes/Tools/Git Worktree",permalink:"/docs/Dev Notes/Tools/Git Worktree",draft:!1,tags:[{label:"Git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{id:"Git Worktree",title:"Git Worktree",tags:["Git"]},sidebar:"tutorialSidebar",previous:{title:"Git Multiple Repo",permalink:"/docs/Dev Notes/Tools/Git-Multiple-Repo"},next:{title:"Git",permalink:"/docs/Dev Notes/Tools/Git"}},l={},p=[{value:"1/ Create feature-x directory and branch with the same name.",id:"1-create-feature-x-directory-and-branch-with-the-same-name",level:2},{value:"2/ Named Branch (optional)",id:"2-named-branch-optional",level:2},{value:"3/ Track remote branch (optional)",id:"3-track-remote-branch-optional",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[","[Git]","]"),(0,o.kt)("h1",{id:"git-worktree"},"Git Worktree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git worktree add <PATH>\n")),(0,o.kt)("h2",{id:"1-create-feature-x-directory-and-branch-with-the-same-name"},"1/ Create feature-x directory and branch with the same name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git worktree add ../feature-x\n")),(0,o.kt)("h2",{id:"2-named-branch-optional"},"2/ Named Branch (optional)"),(0,o.kt)("p",null,"If you want to give you branch a unique name then you can use the -b flag with the add command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git worktree add -b feature-xyz ../feature-xyz\n")),(0,o.kt)("h2",{id:"3-track-remote-branch-optional"},"3/ Track remote branch (optional)"),(0,o.kt)("p",null,"Let\u2019s say you want to switch to a new branch that is tracking the branch at remote, where you want to push changes to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git worktree add -b <branch-name> <PATH> <remote>/<branch-name>\n\ngit worktree add -b feature-zzz ../feature-x origin/feature-zzz\n\ngit worktree add --track -b <branch> <path> <remote>/<branch>\n\nusage: git worktree add [<options>] <path> [<commit-ish>]\n\nor: git worktree list [<options>]\n\nor: git worktree lock [<options>] <path>\n\nor: git worktree move <worktree> <new-path>\n\nor: git worktree prune [<options>]\n\nor: git worktree remove [<options>] <worktree>\n\nor: git worktree unlock <path>\n\nfor existing branch\n\n    git worktree add --track -b <branch> <path> <remote>/<branch>\n\n    git worktree add --track -b branchname ../folder origin/branchname\n\n")))}u.isMDXComponent=!0}}]);