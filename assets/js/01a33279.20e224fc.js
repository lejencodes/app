"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(m,".").concat(u)]||d[u]||p[u]||r;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={slug:"changing-the-most-recent-commit",title:"Changing the Most Recent Commit",authors:["lejencodes"],tags:["git","commit"]},i=void 0,l={permalink:"/app/blog/changing-the-most-recent-commit",source:"@site/blog/2022-03-02-changing-the-most-recent-commit.md",title:"Changing the Most Recent Commit",description:"The git commit --amend command allows you to change the most recent commit message.",date:"2022-03-02T00:00:00.000Z",formattedDate:"March 2, 2022",tags:[{label:"git",permalink:"/app/blog/tags/git"},{label:"commit",permalink:"/app/blog/tags/commit"}],readingTime:2.915,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"changing-the-most-recent-commit",title:"Changing the Most Recent Commit",authors:["lejencodes"],tags:["git","commit"]},prevItem:{title:"Ghost Error 500 Hosting on Heroku",permalink:"/app/blog/ghost-error-500-hosting-on-heroku"},nextItem:{title:"Python pip command",permalink:"/app/blog/python-pip-command"}},m={authorsImageUrls:[void 0]},c=[{value:"Not pushed commit",id:"not-pushed-commit",level:3},{value:"Pushed commit",id:"pushed-commit",level:3},{value:"Changing an Older or Multiple Commits",id:"changing-an-older-or-multiple-commits",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," command allows you to change the most recent commit message."),(0,a.kt)("h3",{id:"not-pushed-commit"},"Not pushed commit"),(0,a.kt)("p",null,"To change the message of the most recent commit that has not been pushed to the remote repository, commit it again using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"--amend")," flag."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the repository directory in your terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to amend (change) the message of the latest commit:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git commit --amend -m "New commit message."\n')),(0,a.kt)("p",null,"What the command does is overwriting the most recent commit with the new one."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," option allows you to write the new message on the command line without opening an editor session."),(0,a.kt)("p",null,"Before changing the commit message, you can also add other changes you previously forgot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,a.kt)("h3",{id:"pushed-commit"},"Pushed commit"),(0,a.kt)("p",null,"The amended (changed) commit is a new entity with a different SHA-1. The previous commit will no longer exist in the\ncurrent branch."),(0,a.kt)("p",null,"Generally, you should avoid amending a commit that is already pushed as it may cause issues to people who based their\nwork on this commit. It is a good idea to consult your fellow developers before changing a pushed commit."),(0,a.kt)("p",null,"If you changed the message of the most recently pushed commit, you would have to force push it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Amend the message of the latest pushed commit:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git commit --amend -m "New commit message."\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Force push to update the history of the remote repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push --force branch-name\n")),(0,a.kt)("h2",{id:"changing-an-older-or-multiple-commits"},"Changing an Older or Multiple Commits"),(0,a.kt)("p",null,"If you need to change the message of an older or multiple commits, you can use an interactive ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," to change one\nor more older commits."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rebase")," command rewrites the commit history, and it is strongly discouraged to rebase commits that are already\npushed to the remote Git repository."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the repository containing the commit message you want to change.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~N"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," is the number of commits to perform a rebase on. For example, if you want to\nchange the 4th and the 5th latest commits, you would type:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase -i HEAD~5\n")),(0,a.kt)("p",null,"The command will display the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," commits in your default text editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pick 43f8707f9 fix: update dependency json5 to ^2.1.1\npick cea1fb88a fix: update dependency verdaccio to ^4.3.3\npick aa540c364 fix: update dependency webpack-dev-server to ^3.8.2\npick c5e078656 chore: update dependency flow-bin to ^0.109.0\npick 11ce0ab34 fix: Fix spelling.\n\n# Rebase 7e59e8ead..11ce0ab34 onto 7e59e8ead (5 commands)\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Move to the lines of the commit message you want to change and replace ",(0,a.kt)("inlineCode",{parentName:"li"},"pick")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"reword"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"reword 43f8707f9 fix: update dependency json5 to ^2.1.1\nreword cea1fb88a fix: update dependency verdaccio to ^4.3.3\npick aa540c364 fix: update dependency webpack-dev-server to ^3.8.2\npick c5e078656 chore: update dependency flow-bin to ^0.109.0\npick 11ce0ab34 fix: Fix spelling.\n\n# Rebase 7e59e8ead..11ce0ab34 onto 7e59e8ead (5 commands)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the changes and close the editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For each chosen commit, a new text editor window will open. Change the commit message, save the file, and close the\neditor."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fix: update dependency json5 to ^2.1.1\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Force push the changes to the remote repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push --force branch-name\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"To change the most recent commit message, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend")," command. To change older or multiple commit\nmessages, use ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase -i HEAD~N"),"."),(0,a.kt)("p",null,"Don\u2019t amend pushed commits as it may potentially cause a lot of problems to your colleagues."))}p.isMDXComponent=!0}}]);