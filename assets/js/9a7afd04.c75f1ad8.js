"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={id:"xpath-for-selenium-example",title:"Xpath For Selenium Example",tags:["selenium","xpath"]},i="XPath Examples for Selenium",p={unversionedId:"programming/selenium/xpath-for-selenium-example",id:"programming/selenium/xpath-for-selenium-example",title:"Xpath For Selenium Example",description:"Case Insensitive XPath Example",source:"@site/docs/programming/selenium/xpath-for-selenium-example.md",sourceDirName:"programming/selenium",slug:"/programming/selenium/xpath-for-selenium-example",permalink:"/app/docs/programming/selenium/xpath-for-selenium-example",draft:!1,tags:[{label:"selenium",permalink:"/app/docs/tags/selenium"},{label:"xpath",permalink:"/app/docs/tags/xpath"}],version:"current",frontMatter:{id:"xpath-for-selenium-example",title:"Xpath For Selenium Example",tags:["selenium","xpath"]},sidebar:"tutorialSidebar",previous:{title:"Selenium",permalink:"/app/docs/category/selenium"},next:{title:"XPath For Selenium",permalink:"/app/docs/programming/selenium/xpath-for-selenium"}},o={},s=[{value:"Case Insensitive XPath Example",id:"case-insensitive-xpath-example",level:2},{value:"Dropdown Selection XPath Example",id:"dropdown-selection-xpath-example",level:2},{value:"Another Dropdown Selection XPath Example",id:"another-dropdown-selection-xpath-example",level:2},{value:"XPath for Getting Parent&#39;s Parent Div and Following Input",id:"xpath-for-getting-parents-parent-div-and-following-input",level:2},{value:"Sibling Elements XPath Examples",id:"sibling-elements-xpath-examples",level:2},{value:"Additional XPath Example in C#",id:"additional-xpath-example-in-c",level:2}],m={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xpath-examples-for-selenium"},"XPath Examples for Selenium"),(0,r.kt)("h2",{id:"case-insensitive-xpath-example"},"Case Insensitive XPath Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"private By BY_checkbox(string rowValue) => By.XPath($\"//*[translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='{rowValue}']//ancestor::tr//div[contains(@class,'ck-checkbox')]//div\");\n")),(0,r.kt)("h2",{id:"dropdown-selection-xpath-example"},"Dropdown Selection XPath Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xpath"},"//div[@class='visible menu transition']//span[text()='Inactive']\n")),(0,r.kt)("h2",{id:"another-dropdown-selection-xpath-example"},"Another Dropdown Selection XPath Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xpath"},"//span[contains(.,'Status')]/../..//descendant::div[@'class='ui selection dropdown']\n")),(0,r.kt)("h2",{id:"xpath-for-getting-parents-parent-div-and-following-input"},"XPath for Getting Parent's Parent Div and Following Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xpath"},"//span[contains(.,'Domains')]/../..//descendant::input\n")),(0,r.kt)("h2",{id:"sibling-elements-xpath-examples"},"Sibling Elements XPath Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xpath"},"//span[@class='label' and text()='First Name']/../following-sibling::div/div/input\n\n//div[contains(@class,'cd tree')]//span[text()='Newsletters']/../preceding-sibling::span\n")),(0,r.kt)("h2",{id:"additional-xpath-example-in-c"},"Additional XPath Example in C#"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"var callerWindowHandle = WebDriver.CurrentWindowHandle;\n\nvar elems = _appMenuParentElem.FindElements(BY_appMenu_link);\n\nvar elem = elems.Single(x => x.Text.Trim() == app.GetDescription());\n\nvar calleeWindowHandle = new PopupWindowFinder(WebDriver).Click(elem);\n\n//span[contains(@class, 'myclass') and text() = 'qwerty']\n")),(0,r.kt)("p",null,"These examples demonstrate various XPath expressions for locating elements using Selenium. You can adapt and use these\nXPath expressions in your Selenium automation scripts as needed."))}c.isMDXComponent=!0}}]);