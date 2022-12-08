"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["Gitlab","Runner"]},i=void 0,c={unversionedId:"ci/setup-gitlab-runner",id:"ci/setup-gitlab-runner",title:"Setup Gitlab Runner",description:"[[Gitlab]] [[Tools/Command]]",source:"@site/docs/ci/setup-gitlab-runner.md",sourceDirName:"ci",slug:"/ci/setup-gitlab-runner",permalink:"/docs/ci/setup-gitlab-runner",draft:!1,tags:[{label:"Gitlab",permalink:"/docs/tags/gitlab"},{label:"Runner",permalink:"/docs/tags/runner"}],version:"current",frontMatter:{id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["Gitlab","Runner"]},sidebar:"tutorialSidebar",previous:{title:"Install Microk8S On Linux",permalink:"/docs/ci/install-microk8s-on-linux"},next:{title:"Programming",permalink:"/docs/category/programming"}},l={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[","[Gitlab]","] [","[Tools/Command]","]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -it --entrypoint /bin/bash gitlab/gitlab-runner:latest\n\ndocker: Not healthy: "docker version --format {{.Server.Os}}-{{.Server.Version}}" exit status 1: Got permission denied\nwhile trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http:\n//%2Fvar%2Frun%2Fdocker.sock/v1.24/version": dial unix /var/run/docker.sock: connect: permission denied\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chmod 666 /var/run/docker.sock\n")))}s.isMDXComponent=!0}}]);