"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[315],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),g=n,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||s;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const s={slug:"attempt-to-fix-404-error-google-search-console",title:"Attempt To Fix 404 Error Google Search Console",authors:["lejencodes"],tags:["search-console","google","seo"]},a=void 0,i={permalink:"/app/blog/attempt-to-fix-404-error-google-search-console",source:"@site/blog/2022-12-13-attempt-to-fix-404-error-google-search-console.md",title:"Attempt To Fix 404 Error Google Search Console",description:"Based on Research Done",date:"2022-12-13T00:00:00.000Z",formattedDate:"December 13, 2022",tags:[{label:"search-console",permalink:"/app/blog/tags/search-console"},{label:"google",permalink:"/app/blog/tags/google"},{label:"seo",permalink:"/app/blog/tags/seo"}],readingTime:1.94,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"attempt-to-fix-404-error-google-search-console",title:"Attempt To Fix 404 Error Google Search Console",authors:["lejencodes"],tags:["search-console","google","seo"]},prevItem:{title:"A Step By Step Guide To Setting Up Your Own Pi Hole And Enjoying Ad Free Browsing",permalink:"/app/blog/a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing"},nextItem:{title:"Python SEO Analyzer",permalink:"/app/blog/python-seo-analyzer"}},l={authorsImageUrls:[void 0]},p=[{value:"Based on Research Done",id:"based-on-research-done",level:2},{value:"Downside?",id:"downside",level:3},{value:"Waste of Crawl Budget",id:"waste-of-crawl-budget",level:3},{value:"Possible Solution?",id:"possible-solution",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"based-on-research-done"},"Based on Research Done"),(0,n.kt)("h3",{id:"downside"},"Downside?"),(0,n.kt)("p",null,"A 404 is not necessarily an error. If you removed the pages and you didn\u2019t set up different URLs to which the server\nshould redirect requests for those pages, then a 404 response is correct."),(0,n.kt)("p",null,"No penalty as such but indirect impact on your website is evident, when you have so much of web pages 404. 404 says the\npage is not found but it doesn't say the page is deleted or permanently deleted and the visitor is not going to find it\nagain."),(0,n.kt)("p",null,"Google understands that. They\u2019re reporting 404 responses, not errors. You\u2019re not being hurt because your server responds\nwith a 404 when Googlebot requests pages that you\u2019ve removed. You are potentially passing up on a benefit, however. If\nthose pages had a decent amount of link equity, that equity would be passed on to pages to which you redirected requests\nfor the old pages. This would also make for a better user experience. Of course, all of this is based on the assumption\nthat you\u2019d be redirecting to pages that served to provide people looking for the old pages with the information they\nseek."),(0,n.kt)("h3",{id:"waste-of-crawl-budget"},"Waste of Crawl Budget"),(0,n.kt)("p",null,"With 404, Google waits for 2 to 3 months to ensure the page is removed. With 404, the Other impact would be that you\nwaste your crawl budget. The crawler spends time in crawling the periods which are not present on your website. This\nlead to trouble in discovering new pages on your website."),(0,n.kt)("p",null,"With more pages failing, Google reduces your crawl budget over time. This will reduce the timely indexing of new pages\non your website."),(0,n.kt)("h3",{id:"possible-solution"},"Possible Solution?"),(0,n.kt)("p",null,"It is better to issue 410 since it instructs that the page is permanently deleted. This helps Google to remove the URL\nfrom its index quickly. The next time Googlebot visits the page and sees the 410 status code, Google will then remove\nthe page from it\u2019s index within 24 hours. Google will never check again to see if the page has come back."),(0,n.kt)("p",null,"Here are some different types of HTTP status codes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"100s: Informational requests\n200s: Successful requests\n300s: Redirects\n400s: Client-side errors\n500s: Server-side errors\n")),(0,n.kt)("p",null,"Depending on your browser, the 410 error can appear in a few different ways:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"410 Gone\nGone\nError 410\nHTTP Status 410\n")))}u.isMDXComponent=!0}}]);