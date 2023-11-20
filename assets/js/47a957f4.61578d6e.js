"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5353],{97196:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=o(85893),c=o(11151);const t={id:"setup-cloudflare",title:"Setup Basic Cloudflare",tags:["cloudflare","setup"]},r=void 0,l={id:"config-and-setup/site/setup-cloudflare",title:"Setup Basic Cloudflare",description:"Setup DNS for lejencodes.com GitHub page",source:"@site/docs/config-and-setup/site/setup-basic-cloudflare.md",sourceDirName:"config-and-setup/site",slug:"/config-and-setup/site/setup-cloudflare",permalink:"/app/docs/config-and-setup/site/setup-cloudflare",draft:!1,unlisted:!1,tags:[{label:"cloudflare",permalink:"/app/docs/tags/cloudflare"},{label:"setup",permalink:"/app/docs/tags/setup"}],version:"current",frontMatter:{id:"setup-cloudflare",title:"Setup Basic Cloudflare",tags:["cloudflare","setup"]},sidebar:"docsSidebar",previous:{title:"package.json-sample",permalink:"/app/docs/config-and-setup/site/package.json sample"},next:{title:"Setup Your Own Crawler and Push to Algolia Index",permalink:"/app/docs/config-and-setup/site/setup-own-crawler-and-push-to-algolia-index"}},d={},a=[{value:"Setup DNS for lejencodes.com GitHub page",id:"setup-dns-for-lejencodescom-github-page",level:2}];function i(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"setup-dns-for-lejencodescom-github-page",children:"Setup DNS for lejencodes.com GitHub page"}),"\n",(0,s.jsx)(n.p,{children:"Login to cloudflare account and under DNS management"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on add records,","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["At type select ",(0,s.jsx)(n.code,{children:"A"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["At name input ",(0,s.jsx)(n.code,{children:"@"})," or ",(0,s.jsx)(n.code,{children:"lejencodes.com"})]}),"\n",(0,s.jsx)(n.li,{children:"At IPv4 address input ips below"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Repeat above steps for ",(0,s.jsx)(n.code,{children:"AAAA"})," records"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create ",(0,s.jsx)(n.code,{children:"A"})," records, point your apex domain to the IP addresses for GitHub Pages."]}),"\n",(0,s.jsx)(n.p,{children:"185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153"}),"\n",(0,s.jsxs)(n.p,{children:["To create ",(0,s.jsx)(n.code,{children:"AAAA"})," records, point your apex domain to the IP addresses for GitHub Pages."]}),"\n",(0,s.jsx)(n.p,{children:"2606:50c0:8000::153\n2606:50c0:8001::153\n2606:50c0:8002::153\n2606:50c0:8003::153"}),"\n",(0,s.jsx)(n.p,{children:"To confirm that your DNS record configured correctly, use the dig command,"}),"\n",(0,s.jsx)(n.p,{children:"For A records."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dig lejencodes.com +noall +answer -t A\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"lejencodes.com    3600    IN A     185.199.108.153\nlejencodes.com    3600    IN A     185.199.109.153\nlejencodes.com    3600    IN A     185.199.110.153\nlejencodes.com    3600    IN A     185.199.111.153"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For AAAA records."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dig lejencodes.com +noall +answer -t AAAA\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"lejencodes.com     3600    IN AAAA     2606:50c0:8000::153\nlejencodes.com     3600    IN AAAA     2606:50c0:8001::153\nlejencodes.com     3600    IN AAAA     2606:50c0:8002::153\nlejencodes.com     3600    IN AAAA     2606:50c0:8003::153"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var s=o(67294);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);