"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3368],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(o),h=r,d=g["".concat(s,".").concat(h)]||g[h]||p[h]||a;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9509:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={slug:"starting-with-ghost-blogging",title:"Starting With Ghost Blogging",authors:["lejencodes"],tags:["ghost","blog","comparison"]},i="Intro",l={permalink:"/app/blog/starting-with-ghost-blogging",source:"@site/blog/2022-01-02-starting-with-ghost-blogging.md",title:"Starting With Ghost Blogging",description:"Here's my thoughts",date:"2022-01-02T00:00:00.000Z",formattedDate:"January 2, 2022",tags:[{label:"ghost",permalink:"/app/blog/tags/ghost"},{label:"blog",permalink:"/app/blog/tags/blog"},{label:"comparison",permalink:"/app/blog/tags/comparison"}],readingTime:1.59,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"starting-with-ghost-blogging",title:"Starting With Ghost Blogging",authors:["lejencodes"],tags:["ghost","blog","comparison"]},prevItem:{title:"Python pip command",permalink:"/app/blog/python-pip-command"}},s={authorsImageUrls:[void 0]},u=[{value:"Hugo + Netlify + Github",id:"hugo--netlify--github",level:2},{value:"Medium, Wordpress",id:"medium-wordpress",level:2},{value:"Ghost",id:"ghost",level:2},{value:"I am back to Github pages",id:"i-am-back-to-github-pages",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here's my thoughts"),(0,r.kt)("p",null,"Always wanted to create personal site. Started with Github pages, uses automated workflow and get stuff compiled into a\nstatic site (Jekyll). Didn't like it much about having to write stuff in editor and then later you have to perform\ncommits and pushes. So I moved on and wanted to find something with a user interface that I could interact with.\nSomething which is free without need to spend extra $$$."),(0,r.kt)("h2",{id:"hugo--netlify--github"},"Hugo + Netlify + Github"),(0,r.kt)("p",null,"The next try on Hugo."),(0,r.kt)("p",null,"Hugo is a static website engine written in Golang. Best thing about this is on the theming system, plenty of choices and\neverything is free. Did some search on Google, landed on some one click deployment. Messing with it for couple of days\non the HTML, CSS and JS. Personal didn't like it due to lack of content management so went for another search on\nalternatives."),(0,r.kt)("h2",{id:"medium-wordpress"},"Medium, Wordpress"),(0,r.kt)("p",null,"Recently seeing quite a bit of content creator from Medium and Wordpress, could be possibly everyone is so free during\nthe world pandemic, including myself. These platform don't really work well without spending some $$$. Content creator\nusually have their articles behind some pay-wall, good for people who wanted to monetize their content. I wish I could\nwrite as like the others, but too bad I don't."),(0,r.kt)("h2",{id:"ghost"},"Ghost"),(0,r.kt)("p",null,"Finally settled down with hosting Ghost with Heroku with a domain name setup with Cloudflare."),(0,r.kt)("p",null,"Starting to like it due to the ease of use and user-friendly interface. Best thing about it is open source, you can\ncustomise your theme, and you have full control on how your site should look like. The default theme of Ghost (Casper),\nlooks good enough to keep your site look clean and steady."),(0,r.kt)("h2",{id:"i-am-back-to-github-pages"},"I am back to Github pages"),(0,r.kt)("p",null,"After the recent announcement on heroku no longer offer free dyno hours. I am moving back to github pages."))}p.isMDXComponent=!0}}]);