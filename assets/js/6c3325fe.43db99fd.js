"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4744],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return o?r.createElement(b,i(i({ref:t},p),{},{components:o})):r.createElement(b,i({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},84899:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={slug:"what-is-the-robot-framework-and-how-does-it-function",title:"What Is The Robot Framework, And How Does It Function?",authors:["lejencodes"],tags:["robotframework","rf","automation","robot"]},i=void 0,s={permalink:"/app/blog/what-is-the-robot-framework-and-how-does-it-function",source:"@site/blog/2023-01-07-what-is-robot-framework-and-how-does-it-function.md",title:"What Is The Robot Framework, And How Does It Function?",description:"What is Robot Framework?",date:"2023-01-07T00:00:00.000Z",formattedDate:"January 7, 2023",tags:[{label:"robotframework",permalink:"/app/blog/tags/robotframework"},{label:"rf",permalink:"/app/blog/tags/rf"},{label:"automation",permalink:"/app/blog/tags/automation"},{label:"robot",permalink:"/app/blog/tags/robot"}],readingTime:1.285,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"what-is-the-robot-framework-and-how-does-it-function",title:"What Is The Robot Framework, And How Does It Function?",authors:["lejencodes"],tags:["robotframework","rf","automation","robot"]},nextItem:{title:"Git Submodule Command",permalink:"/app/blog/git-submodule-command"}},l={authorsImageUrls:[void 0]},c=[{value:"What is Robot Framework?",id:"what-is-robot-framework",level:2},{value:"How does RobotFramework Function?",id:"how-does-robotframework-function",level:2},{value:"How to write scripts for automated tests in RobotFramework",id:"how-to-write-scripts-for-automated-tests-in-robotframework",level:2},{value:"Notes on RobotFramework Setup and Basics",id:"notes-on-robotframework-setup-and-basics",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-robot-framework"},"What is Robot Framework?"),(0,a.kt)("p",null,"Robot Framework is a generic open-source automation framework for acceptance testing, acceptance test-driven\ndevelopment (ATDD), and robotic process automation (RPA). Robot Framework allows testers to easily write automated test\nscripts using a keyword-driven testing approach."),(0,a.kt)("h2",{id:"how-does-robotframework-function"},"How does RobotFramework Function?"),(0,a.kt)("p",null,"To test both Android and iOS apps, Robot Framework is incredibly simple to set up, use, and change."),(0,a.kt)("p",null,"Its test syntax is built around keywords, which are simple to alter and further configure to match the application being\ntested."),(0,a.kt)("p",null,"Additionally, the test libraries that may be implemented in Python, Java, and even some additional languages are\nsupported, allowing for easy extension of a testing capabilities offered by Robot Framework."),(0,a.kt)("p",null,"The way those aforementioned keywords function is one of Robot Framework's coolest features."),(0,a.kt)("p",null,"Users can quickly build new keywords by starting from scratch or by using the existing sample ones."),(0,a.kt)("p",null,"If you look for more generic information about Robot Framework, there are plenty of great examples and online\ndocumentation on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robotframework/robotframework"},"GitHub"),"."),(0,a.kt)("h2",{id:"how-to-write-scripts-for-automated-tests-in-robotframework"},"How to write scripts for automated tests in RobotFramework"),(0,a.kt)("p",null,"Robot Framework makes it simple to create automated test scripts. In addition to being utilized to carry out activities,\nkeywords also serve as assertion methods. They may experience arguments in an effort to shape their conduct."),(0,a.kt)("p",null,'The examples "Open Browser" and "Title Should Be" up top are two good ones. Since many test libraries include the\nnecessary automation components as keywords, you don\'t necessarily need to write Python or Java code.'),(0,a.kt)("h2",{id:"notes-on-robotframework-setup-and-basics"},"Notes on RobotFramework Setup and Basics"),(0,a.kt)("p",null,"Visit documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://lejencodes.com/docs/automation/robotframework/robot-framework-setup-and-basics"},"link")))}u.isMDXComponent=!0}}]);