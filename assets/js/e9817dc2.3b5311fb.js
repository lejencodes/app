"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9306],{13476:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const l={id:"bash-alias-setup",title:"Bash Alias Setup",tags:["bash","command","config"]},r="Bash Alias Setup",o={id:"programming/tools/bash-alias-setup",title:"Bash Alias Setup",description:"Do you often find yourself searching for previously typed long commands in your bash history? If so, you'll appreciate",source:"@site/docs/programming/tools/bash-alias-setup.md",sourceDirName:"programming/tools",slug:"/programming/tools/bash-alias-setup",permalink:"/app/docs/programming/tools/bash-alias-setup",draft:!1,unlisted:!1,tags:[{label:"bash",permalink:"/app/docs/tags/bash"},{label:"command",permalink:"/app/docs/tags/command"},{label:"config",permalink:"/app/docs/tags/config"}],version:"current",frontMatter:{id:"bash-alias-setup",title:"Bash Alias Setup",tags:["bash","command","config"]},sidebar:"docsSidebar",previous:{title:"Tools",permalink:"/app/docs/category/tools"},next:{title:"Make another branch as master",permalink:"/app/docs/programming/tools/make-another-branch-as-master"}},t={},c=[{value:"File Locations for Bash Profile",id:"file-locations-for-bash-profile",level:2},{value:"Refreshing After Making Changes",id:"refreshing-after-making-changes",level:2},{value:"Useful Bash Aliases",id:"useful-bash-aliases",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"bash-alias-setup",children:"Bash Alias Setup"}),"\n",(0,a.jsx)(s.p,{children:"Do you often find yourself searching for previously typed long commands in your bash history? If so, you'll appreciate\nbash aliases. Bash aliases allow you to create short-term shortcut commands for longer, more complex commands, making\nthem easier to remember and use. They can significantly reduce the amount of typing required when working in the command\nline."}),"\n",(0,a.jsx)(s.h2,{id:"file-locations-for-bash-profile",children:"File Locations for Bash Profile"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["On macOS, the bash profile is typically located in ",(0,a.jsx)(s.code,{children:".bash_profile"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["If you use Oh-my-zsh, you can find it in ",(0,a.jsx)(s.code,{children:".zshrc"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"refreshing-after-making-changes",children:"Refreshing After Making Changes"}),"\n",(0,a.jsx)(s.p,{children:"After making changes to your bash aliases, remember to refresh the configuration using:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"source ~/.bash_profile\n"})}),"\n",(0,a.jsx)(s.h2,{id:"useful-bash-aliases",children:"Useful Bash Aliases"}),"\n",(0,a.jsx)(s.p,{children:"Here are some useful bash aliases to simplify common tasks:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To display files in the current directory with line numbers:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"alias ll=\"grep -n '^' *\"\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To find files containing a specific string (case-insensitive) in the current directory:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'alias findstr="grep -i"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To count the number of occurrences of a string in files in the current directory:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'alias countstr="grep -c"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To list files in the current directory sorted by size (largest first):"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'alias lss="ls -lhS"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To quickly navigate to your home directory:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'alias home="cd ~"\n'})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"To exit the current shell session:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'alias bye="exit"\n'})}),"\n",(0,a.jsx)(s.p,{children:"Feel free to customize and create aliases that match your workflow and make your command-line experience more efficient."})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var a=n(67294);const i={},l=a.createContext(i);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);