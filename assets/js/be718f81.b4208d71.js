"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4125],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["Gitlab","Runner"]},i=void 0,c={unversionedId:"ci/setup-gitlab-runner",id:"ci/setup-gitlab-runner",title:"Setup Gitlab Runner",description:"",source:"@site/docs/ci/setup-gitlab-runner.md",sourceDirName:"ci",slug:"/ci/setup-gitlab-runner",permalink:"/docs/ci/setup-gitlab-runner",draft:!1,tags:[{label:"Gitlab",permalink:"/docs/tags/gitlab"},{label:"Runner",permalink:"/docs/tags/runner"}],version:"current",frontMatter:{id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["Gitlab","Runner"]},sidebar:"tutorialSidebar",previous:{title:"Install Microk8S On Linux",permalink:"/docs/ci/install-microk8s-on-linux"},next:{title:"Android",permalink:"/docs/category/android"}},l={},u=[],s={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -it --entrypoint /bin/bash gitlab/gitlab-runner:latest\n    \ndocker: Not healthy: "docker version --format {{.Server.Os}}-{{.Server.Version}}" exit status 1: Got permission denied\nwhile trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http:\n//%2Fvar%2Frun%2Fdocker.sock/v1.24/version": dial unix /var/run/docker.sock: connect: permission denied\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chmod 666 /var/run/docker.sock\n")))}p.isMDXComponent=!0}}]);