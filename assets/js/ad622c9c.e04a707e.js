"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9528],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(i),c=r,g=s["".concat(l,".").concat(c)]||s[c]||u[c]||a;return i?n.createElement(g,o(o({ref:t},d),{},{components:i})):n.createElement(g,o({ref:t},d))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<a;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},6536:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=i(7462),r=(i(7294),i(3905));const a={},o="Git Multiple Repo",p={unversionedId:"mind-garden/Dev Notes/Tools/Git-Multiple-Repo",id:"mind-garden/Dev Notes/Tools/Git-Multiple-Repo",title:"Git Multiple Repo",description:"Pre-requisites:",source:"@site/docs/mind-garden/Dev Notes/Tools/Git-Multiple-Repo.md",sourceDirName:"mind-garden/Dev Notes/Tools",slug:"/mind-garden/Dev Notes/Tools/Git-Multiple-Repo",permalink:"/app/docs/mind-garden/Dev Notes/Tools/Git-Multiple-Repo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/app/docs/mind-garden/Dev Notes/Tools/Docker"},next:{title:"Git Worktree",permalink:"/app/docs/mind-garden/Dev Notes/Tools/Git Worktree"}},l={},m=[],d={toc:m};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-multiple-repo"},"Git Multiple Repo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-requisites"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Public SSH keys (",(0,r.kt)("inlineCode",{parentName:"p"},"id_ecdsa.pub")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"id_ed25519.pub")," , etc.) are present in your GitHub and GitLab profiles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Private SSH keys (",(0,r.kt)("inlineCode",{parentName:"p"},"id_ecdsa")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"id_ed25519")," , etc.) are added and persisted in your OS's keychain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH config file has keys specified for GitHub and GitLab:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Host github.com\n  Hostname github.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ecdsa\n\nHost gitlab.com\n  Hostname gitlab.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_rsa\n")))),(0,r.kt)("p",null,"Or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host github.com-user\n    HostName github.com\n    User git\n    IdentityFile /home/user/.ssh/id_ed25519\nHost gitlab.com\n    PreferredAuthentications publickey\n    IdentityFile /home/user/.ssh/id_ed25519_2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initialize git in a directory:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git init"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect git to one remote repository (located in GitHub)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git remote add origin git@github.com:your-username/your-repo.git"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rename ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," to something like ",(0,r.kt)("inlineCode",{parentName:"p"},".github")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mv .git .github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initialize git again"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git init"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect git to the other remote repository (located in GitLab)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git remote add origin git@gitlab.com:your-username/your-repo.git"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rename ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," to something like ",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mv .git .gitlab"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify that current directory is connected to two different remote repositories"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git --git-dir=.github remote -v")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git --git-dir=.gitlab remote -v"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pull remote (GitHub and GitLab) repositories"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git --git-dir=.github pull origin main\ngit --git-dir=.gitlab pull origin main\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a file to both repositories"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git --git-dir=.github add README.md\ngit --git-dir=.gitlab add README.md\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Write commit message"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'git --git-dir=.github commit -m "operational overview"\ngit --git-dir=.gitlab commit -m "operational overview"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Push to remote"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git --git-dir=.github push -u origin main\ngit --git-dir=.gitlab push -u origin main\n")))),(0,r.kt)("p",null,"The only additional thing we're doing here is using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--git-dir")," flag."),(0,r.kt)("p",null,"If you plan on doing this frequently you could add an alias in your shell config file (like ",(0,r.kt)("inlineCode",{parentName:"p"},".zprofile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bashrc"),", etc.):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export github="git --git-dir=.github"\nexport gitlab="git --git-dir=.gitlab"\n')),(0,r.kt)("p",null,"Future operations like ",(0,r.kt)("inlineCode",{parentName:"p"},"pull"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," can be performed like - ",(0,r.kt)("inlineCode",{parentName:"p"},"github pull origin main"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab pull origin main"),", etc."))}u.isMDXComponent=!0}}]);