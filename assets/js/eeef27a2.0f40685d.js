"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[5417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,s(s({ref:t},i),{},{components:r})):a.createElement(m,s({ref:t},i))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={tags:["CI","ArgoCD"]},s="ArgoCD",l={unversionedId:"Dev Notes/CI/ArgoCD",id:"Dev Notes/CI/ArgoCD",title:"ArgoCD",description:"https://github.com/arthurk/argocd-example-install/",source:"@site/docs/Dev Notes/CI/ArgoCD.md",sourceDirName:"Dev Notes/CI",slug:"/Dev Notes/CI/ArgoCD",permalink:"/docs/Dev Notes/CI/ArgoCD",draft:!1,tags:[{label:"CI",permalink:"/docs/tags/ci"},{label:"ArgoCD",permalink:"/docs/tags/argo-cd"}],version:"current",frontMatter:{tags:["CI","ArgoCD"]},sidebar:"tutorialSidebar",previous:{title:"Dev Notes",permalink:"/docs/category/dev-notes"},next:{title:"Install-MicroK8s-on-Linux",permalink:"/docs/Dev Notes/CI/Install-MicroK8s-on-Linux"}},p={},c=[{value:"Accessing the Web UI",id:"accessing-the-web-ui",level:2},{value:"Get pass",id:"get-pass",level:2},{value:"Reset pass",id:"reset-pass",level:2},{value:"Add app",id:"add-app",level:2},{value:"Delete all",id:"delete-all",level:2}],i={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"argocd"},"ArgoCD"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"minikube start\n\nminikube dashboard\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# To delete all and start fresh\n\nkubectl delete deployment --all\n\nor\n\nminikube delete\n\nminikube start\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/arthurk/argocd-example-install/"},"https://github.com/arthurk/argocd-example-install/")),(0,n.kt)("h2",{id:"accessing-the-web-ui"},"Accessing the Web UI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install argo-cd charts/argo-cd/\n")),(0,n.kt)("p",null,"The Helm chart doesn\u2019t install an Ingress by default, to access the Web UI we have to port-forward to the argocd-server\nservice:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl port-forward svc/argo-cd-argocd-server 8080:443\n")),(0,n.kt)("h2",{id:"get-pass"},"Get pass"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n')),(0,n.kt)("h2",{id:"reset-pass"},"Reset pass"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.browserling.com/tools/bcrypt"},"https://www.browserling.com/tools/bcrypt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'generated with autotest\n\n<default> is namespace\n\nkubectl -n default patch secret argocd-secret \\\n\n-p \'{"stringData": {"admin.password": "$2a$10$xxx","admin.passwordMtime": "\'$(date +%FT%T%Z)\'"}}\'\n\nargocd repo add git@bitbucket.org:xxx/abc-autotest.git --ssh-private-key-path ~/.ssh/id_rsa_argo\n\nhttps://github.com/redhat-developer-demos/openshift-gitops-examples.git\n')),(0,n.kt)("h2",{id:"add-app"},"Add app"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace default\n\nargocd app get guestbook\n\nargocd app sync guestbook\n\nkubectl port-forward svc/helm-guestbook 9090:80\n\nkubectl port-forward svc/guestbook-ui 9090:80\n\nforce patch revision target\n\nargocd app patch root --patch \'[{"op": "replace", "path": "/spec/source/targetRevision", "value": "test/bb-pipeline"}]\'\n\nhelm template apps/ | kubectl apply -f -\n')),(0,n.kt)("h2",{id:"delete-all"},"Delete all"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl delete all --all --all-namespaces\n")))}d.isMDXComponent=!0}}]);