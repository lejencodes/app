"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5259],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const l={},a=void 0,o={unversionedId:"SeleniumProject/XPath-Selenium",id:"SeleniumProject/XPath-Selenium",title:"XPath-Selenium",description:"[[Selenium]]",source:"@site/docs/SeleniumProject/XPath-Selenium.md",sourceDirName:"SeleniumProject",slug:"/SeleniumProject/XPath-Selenium",permalink:"/docs/SeleniumProject/XPath-Selenium",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Selenium Project",permalink:"/docs/category/selenium-project"},next:{title:"XPath Axis Family Tree Analogy",permalink:"/docs/SeleniumProject/XPath"}},s={},c=[{value:"case insensitive",id:"case-insensitive",level:2},{value:"dropdown selection",id:"dropdown-selection",level:2},{value:"dropdown selection",id:"dropdown-selection-1",level:2},{value:"get parent parent div and following input",id:"get-parent-parent-div-and-following-input",level:2},{value:"siblings",id:"siblings",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"[","[Selenium]","]"),(0,i.kt)("h1",{id:"xpath-selenium"},"XPath Selenium"),(0,i.kt)("h2",{id:"case-insensitive"},"case insensitive"),(0,i.kt)("p",null,'private By BY_checkbox(string rowValue) => By.XPath($"//',"*","[translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='{rowValue}']","//ancestor::tr//div","[contains(@class,'ck-checkbox')]",'//div");'),(0,i.kt)("h2",{id:"dropdown-selection"},"dropdown selection"),(0,i.kt)("p",null,"//div","[@class='visible menu transition']","//span","[text()='Inactive']"),(0,i.kt)("h2",{id:"dropdown-selection-1"},"dropdown selection"),(0,i.kt)("p",null,"//span","[contains(.,'Status')]","/../..//descendant::div","[@class='ui selection dropdown']"),(0,i.kt)("h2",{id:"get-parent-parent-div-and-following-input"},"get parent parent div and following input"),(0,i.kt)("p",null,"//span","[contains(.,'Domains')]","/../..//descendant::input"),(0,i.kt)("h2",{id:"siblings"},"siblings"),(0,i.kt)("p",null,"//span","[@class='label' and text()='First Name']","/../following-sibling::div/div/input"),(0,i.kt)("p",null,"//div","[contains(@class,'cd tree')]","//span","[text()='Newsletters']","/../preceding-sibling::span"),(0,i.kt)("p",null,"var callerWindowHandle = WebDriver.CurrentWindowHandle;"),(0,i.kt)("p",null,"var elems = ","_","appMenuParentElem.FindElements(BY_appMenu_link);"),(0,i.kt)("p",null,"var elem = elems.Single(x => x.Text.Trim() == app.GetDescription());"),(0,i.kt)("p",null,"var calleeWindowHandle = new PopupWindowFinder(WebDriver).Click(elem);"),(0,i.kt)("p",null,"//span","[contains(@class, 'myclass') and text() = 'qwerty']"))}u.isMDXComponent=!0}}]);