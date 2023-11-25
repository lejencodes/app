"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3226],{35530:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>h,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(85893),s=t(11151);const r={slug:"ghost-error-500-hosting-on-heroku",title:"Ghost Error 500 Hosting on Heroku",authors:["koficodes"],tags:["ghost","error-500","heroku"]},i=void 0,l={permalink:"/app/blog/ghost-error-500-hosting-on-heroku",source:"@site/blog/2022-03-03-ghost-error-500-hosting-on-heroku/index.md",title:"Ghost Error 500 Hosting on Heroku",description:"Ghost Error 500 - The currently active theme is missing.",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"ghost",permalink:"/app/blog/tags/ghost"},{label:"error-500",permalink:"/app/blog/tags/error-500"},{label:"heroku",permalink:"/app/blog/tags/heroku"}],readingTime:1.245,hasTruncateMarker:!1,authors:[{name:"koficodes",title:"Just a person",url:"https://koficodes.xyz",imageURL:"https://github.com/lejencodes.png",key:"koficodes"}],frontMatter:{slug:"ghost-error-500-hosting-on-heroku",title:"Ghost Error 500 Hosting on Heroku",authors:["koficodes"],tags:["ghost","error-500","heroku"]},unlisted:!1,prevItem:{title:"Using ssh-agent with Visual Studio Code on Windows 10",permalink:"/app/blog/using-ssh-agent-with-visual-studio-code-on-windows-10"},nextItem:{title:"Changing the Most Recent Commit",permalink:"/app/blog/changing-the-most-recent-commit"}},h={authorsImageUrls:[void 0]},a=[{value:"Ghost Error 500 - The currently active theme is missing.",id:"ghost-error-500---the-currently-active-theme-is-missing",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"ghost-error-500---the-currently-active-theme-is-missing",children:"Ghost Error 500 - The currently active theme is missing."}),"\n",(0,n.jsx)(o.p,{children:"Bump into this error when I am trying to setup custom theme for Ghost Blog. I am using Heroku to host this site. Just\ngot to know that Heroku site do not have storage to store the custom theme uploaded via Ghost admin panel."}),"\n",(0,n.jsx)(o.p,{children:"Did couple of search online, a lot suggested that you can clone heroku by git clone command"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:" heroku git:clone -a myappname\n"})}),"\n",(0,n.jsx)(o.p,{children:"But I get the error message about cloning an empty repository which I think it doesn't make any sense when the site is\nlive at the moment"}),"\n",(0,n.jsx)(o.p,{children:"Continued my search and finally came into something useful which is using heroku slug to download source code"}),"\n",(0,n.jsx)(o.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Before that, proceed to install Heroku CLI following guide at their official\nsite ",(0,n.jsx)(o.a,{href:"https://devcenter.heroku.com/articles/heroku-cli",children:"Heroku Dev Center"})]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Follow this site to get it ",(0,n.jsx)(o.a,{href:"https://github.com/heroku/heroku-slugs",children:"heroku-slugs"})," installed"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Login to Heroku account"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"heroku login\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Heroku slug command to download your source code"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"heroku slugs:download -a APP_NAME\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"You will be getting the following folders:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Command Line",src:t(75120).Z+"",width:"273",height:"114"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"- app\n- slug.tar.gz\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Make a new repository in GitHub and upload app folder to your repository"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Proceed to your heroku app dashboard, under Deploy Tab, Deployment method select GitHub and search for your newly\ncreated repository. You will end up something like below."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Heroku",src:t(9970).Z+"",width:"1218",height:"306"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Done!"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"You may also setup automatic deploys for every push to master branch"}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75120:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,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"},9970:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/heroku-5f62d93bd183bed4270317a2a2b1db51.png"},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>i});var n=t(67294);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);