"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),g=o,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={slug:"hugo-commands",title:"Hugo Commands",authors:["lejencodes"],tags:["hugo","command"]},l="Create server",s={permalink:"/blog/hugo-commands",source:"@site/blog/2022-03-04/index.md",title:"Hugo Commands",description:"hugo server --noHTTPCache --disableFastRender",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"hugo",permalink:"/blog/tags/hugo"},{label:"command",permalink:"/blog/tags/command"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"hugo-commands",title:"Hugo Commands",authors:["lejencodes"],tags:["hugo","command"]},prevItem:{title:"Make another branch as master",permalink:"/blog/make-another-branch-as-master"},nextItem:{title:"Ghost Error 500 Hosting on Heroku",permalink:"/blog/ghost-error-500-hosting-on-heroku"}},c={authorsImageUrls:[void 0]},i=[],u={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"hugo server --noHTTPCache --disableFastRender\nhugo server --noHTTPCache --disableFastRender --ignoreCache"),(0,o.kt)("h1",{id:"create-post"},"Create Post"),(0,o.kt)("p",null,"hugo new post/create-virtual-environment-in-linux/index.md"),(0,o.kt)("h1",{id:"install-hugo"},"Install Hugo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest \\\n | grep  browser_download_url \\\n | grep Linux-64bit.deb \\\n | grep -v extended \\\n | cut -d '\"' -f 4 \\\n | wget -i -\n\n curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest \\\n | grep  browser_download_url \\\n | grep extended_0.81.0_Linux-64bit.deb \\\n | cut -d '\"' -f 4 \\\n | wget -i -\n")))}p.isMDXComponent=!0}}]);