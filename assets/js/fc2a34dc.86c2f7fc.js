"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[8716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"git-worktree",title:"Git Worktree",tags:["git","worktree"]},i=void 0,c={unversionedId:"tools/git-worktree",id:"tools/git-worktree",title:"Git Worktree",description:"Create feature-x directory and branch with the same name.",source:"@site/docs/tools/git-worktree.md",sourceDirName:"tools",slug:"/tools/git-worktree",permalink:"/docs/tools/git-worktree",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"},{label:"worktree",permalink:"/docs/tags/worktree"}],version:"current",frontMatter:{id:"git-worktree",title:"Git Worktree",tags:["git","worktree"]},sidebar:"tutorialSidebar",previous:{title:"Git Multiple Repo",permalink:"/docs/tools/git-multiple-repo"},next:{title:"Rider Multi Cursor For Mac",permalink:"/docs/tools/rider-multi-cursor-for-mac"}},l={},p=[{value:"Create feature-x directory and branch with the same name.",id:"create-feature-x-directory-and-branch-with-the-same-name",level:2},{value:"Named Branch (optional)",id:"named-branch-optional",level:2},{value:"Track remote branch (optional)",id:"track-remote-branch-optional",level:2},{value:"For existing branch",id:"for-existing-branch",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git worktree add <PATH>\n")),(0,a.kt)("h2",{id:"create-feature-x-directory-and-branch-with-the-same-name"},"Create feature-x directory and branch with the same name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git worktree add ../feature-x\n")),(0,a.kt)("h2",{id:"named-branch-optional"},"Named Branch (optional)"),(0,a.kt)("p",null,"If you want to give you branch a unique name then you can use the -b flag with the add command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git worktree add -b feature-xyz ../feature-xyz\n")),(0,a.kt)("h2",{id:"track-remote-branch-optional"},"Track remote branch (optional)"),(0,a.kt)("p",null,"Let\u2019s say you want to switch to a new branch that is tracking the branch at remote, where you want to push changes to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git worktree add -b <branch-name> <PATH> <remote>/<branch-name>\n\ngit worktree add -b feature-zzz ../feature-x origin/feature-zzz\n\ngit worktree add --track -b <branch> <path> <remote>/<branch>\n\nusage: git worktree add [<options>] <path> [<commit-ish>]\n\nor: git worktree list [<options>]\n\nor: git worktree lock [<options>] <path>\n\nor: git worktree move <worktree> <new-path>\n\nor: git worktree prune [<options>]\n\nor: git worktree remove [<options>] <worktree>\n\nor: git worktree unlock <path>\n")),(0,a.kt)("h3",{id:"for-existing-branch"},"For existing branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git worktree add --track -b <branch> <path> <remote>/<branch>\ngit worktree add --track -b branchname ../folder origin/branchname\n")))}u.isMDXComponent=!0}}]);