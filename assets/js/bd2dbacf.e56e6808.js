"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[7426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},i),{},{components:n})):r.createElement(h,l({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"method-of-rpa-bots-deployment",title:"Method of RPA Bots Deployment",authors:["lejencodes"],tags:["rpa","deployment"]},l=void 0,p={permalink:"/blog/method-of-rpa-bots-deployment",source:"@site/blog/2022-04-13-method-of-rpa-bots-deployment.md",title:"Method of RPA Bots Deployment",description:"Not long ago, I have been introduced with Python.",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"rpa",permalink:"/blog/tags/rpa"},{label:"deployment",permalink:"/blog/tags/deployment"}],readingTime:.7,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"method-of-rpa-bots-deployment",title:"Method of RPA Bots Deployment",authors:["lejencodes"],tags:["rpa","deployment"]},prevItem:{title:"Bake a cheesecake?",permalink:"/blog/bake-a-cheesecake"},nextItem:{title:"Top 10 Design Principles",permalink:"/blog/top-10-design-principles"}},s={authorsImageUrls:[void 0]},c=[],i={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Not long ago, I have been introduced with Python."),(0,o.kt)("p",null,"Python language was not hard to understand but is kinda hard to write good codes with Python especially for a person like me who do not have good IT knowledge."),(0,o.kt)("p",null,"But thanks to the Internet, there are plenty of resources online that helped me in better understand the programming language."),(0,o.kt)("p",null,"As my job are more towards on process automation, what we need was a scheduler that enable us to make a schedule / trigger that's calls out routine to complete business task."),(0,o.kt)("p",null,"I am using Flask to fire up a python server, once the server is ready in local-host to receive request. Then, request can be submitted through REST method which can direct our flask app.route to call out python method and function that has been coded to do the job."))}u.isMDXComponent=!0}}]);