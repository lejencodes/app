"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),f=n,h=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"bash-alias-setup",title:"Bash Alias Setup",tags:["bash","command","config"]},s="Bash Alias Setup",o={unversionedId:"programming/tools/bash-alias-setup",id:"programming/tools/bash-alias-setup",title:"Bash Alias Setup",description:"Do you often find yourself searching for previously typed long commands in your bash history? If so, you'll appreciate",source:"@site/docs/programming/tools/bash-alias-setup.md",sourceDirName:"programming/tools",slug:"/programming/tools/bash-alias-setup",permalink:"/app/docs/programming/tools/bash-alias-setup",draft:!1,tags:[{label:"bash",permalink:"/app/docs/tags/bash"},{label:"command",permalink:"/app/docs/tags/command"},{label:"config",permalink:"/app/docs/tags/config"}],version:"current",frontMatter:{id:"bash-alias-setup",title:"Bash Alias Setup",tags:["bash","command","config"]},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/app/docs/category/tools"},next:{title:"Git Multiple Repositories",permalink:"/app/docs/programming/tools/git-multiple-repo"}},i={},c=[{value:"File Locations for Bash Profile",id:"file-locations-for-bash-profile",level:2},{value:"Refreshing After Making Changes",id:"refreshing-after-making-changes",level:2},{value:"Useful Bash Aliases",id:"useful-bash-aliases",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bash-alias-setup"},"Bash Alias Setup"),(0,n.kt)("p",null,"Do you often find yourself searching for previously typed long commands in your bash history? If so, you'll appreciate\nbash aliases. Bash aliases allow you to create short-term shortcut commands for longer, more complex commands, making\nthem easier to remember and use. They can significantly reduce the amount of typing required when working in the command\nline."),(0,n.kt)("h2",{id:"file-locations-for-bash-profile"},"File Locations for Bash Profile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On macOS, the bash profile is typically located in ",(0,n.kt)("inlineCode",{parentName:"li"},".bash_profile"),"."),(0,n.kt)("li",{parentName:"ul"},"If you use Oh-my-zsh, you can find it in ",(0,n.kt)("inlineCode",{parentName:"li"},".zshrc"),".")),(0,n.kt)("h2",{id:"refreshing-after-making-changes"},"Refreshing After Making Changes"),(0,n.kt)("p",null,"After making changes to your bash aliases, remember to refresh the configuration using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n")),(0,n.kt)("h2",{id:"useful-bash-aliases"},"Useful Bash Aliases"),(0,n.kt)("p",null,"Here are some useful bash aliases to simplify common tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To display files in the current directory with line numbers:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"alias ll=\"grep -n '^' *\"\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To find files containing a specific string (case-insensitive) in the current directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias findstr="grep -i"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To count the number of occurrences of a string in files in the current directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias countstr="grep -c"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To list files in the current directory sorted by size (largest first):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias lss="ls -lhS"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To quickly navigate to your home directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias home="cd ~"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To exit the current shell session:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'alias bye="exit"\n')),(0,n.kt)("p",null,"Feel free to customize and create aliases that match your workflow and make your command-line experience more efficient."))}u.isMDXComponent=!0}}]);