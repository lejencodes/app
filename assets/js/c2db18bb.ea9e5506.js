"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6146],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,c=s["".concat(p,".").concat(d)]||s[d]||g[d]||l;return n?r.createElement(c,o(o({ref:e},m),{},{components:n})):r.createElement(c,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4724:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={slug:"python-logging-output",title:"Python Logging Output",authors:["lejencodes"],tags:["python"]},o=void 0,i={permalink:"/blog/python-logging-output",source:"@site/blog/2022-04-27-python-logging-output.md",title:"Python Logging Output",description:"Complete table showing the various information that the logging system can output:",date:"2022-04-27T00:00:00.000Z",formattedDate:"April 27, 2022",tags:[{label:"python",permalink:"/blog/tags/python"}],readingTime:1.075,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"python-logging-output",title:"Python Logging Output",authors:["lejencodes"],tags:["python"]},prevItem:{title:"Reduce Energy Consumption in Raspberry pi",permalink:"/blog/reduce-energy-consumption-in-raspberry-pi"},nextItem:{title:"Coffee Grounds",permalink:"/blog/coffee-grounds"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Complete table showing the various information that the logging system can output:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"%(name)s"),(0,a.kt)("th",{parentName:"tr",align:null},"Logger's name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(levelno)s"),(0,a.kt)("td",{parentName:"tr",align:null},"Log level in digital form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(levelname)s"),(0,a.kt)("td",{parentName:"tr",align:null},"Log level in text form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(pathname)s"),(0,a.kt)("td",{parentName:"tr",align:null},"The full path name of the module that called the log output function, may not have")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(filename)s"),(0,a.kt)("td",{parentName:"tr",align:null},"The file name of the module that called the log output function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(module)s"),(0,a.kt)("td",{parentName:"tr",align:null},"Call the module name of the log output function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(funcName)s"),(0,a.kt)("td",{parentName:"tr",align:null},"Call the function name of the log output function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(lineno)d"),(0,a.kt)("td",{parentName:"tr",align:null},"The line of code where the statement that called the log output function is located")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(created)f"),(0,a.kt)("td",{parentName:"tr",align:null},"Current time, expressed in floating point numbers representing the time of the UNIX standard")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(relativeCreated)d"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of milliseconds since the Logger was created when the log information was output.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(asctime)s"),(0,a.kt)("td",{parentName:"tr",align:null},'The current time in the form of a string. The default format is "2003-07-08 16:49:45,896". Behind the comma is the millisecond')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(thread)d"),(0,a.kt)("td",{parentName:"tr",align:null},"Thread ID. Maybe not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(threadName)s"),(0,a.kt)("td",{parentName:"tr",align:null},"Thread name. Maybe not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(process)d"),(0,a.kt)("td",{parentName:"tr",align:null},"Process ID. Maybe not")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%(message)s"),(0,a.kt)("td",{parentName:"tr",align:null},"User output message")))))}g.isMDXComponent=!0}}]);