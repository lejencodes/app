"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4829],{67121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),o=t(11151);const i={id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["gitlab","runner","ci","docker"]},s=void 0,a={id:"programming/ci/setup-gitlab-runner",title:"Setup Gitlab Runner",description:"Step 1: Run the GitLab Runner Container",source:"@site/docs/programming/ci/setup-gitlab-runner.md",sourceDirName:"programming/ci",slug:"/programming/ci/setup-gitlab-runner",permalink:"/app/docs/programming/ci/setup-gitlab-runner",draft:!1,unlisted:!1,tags:[{label:"gitlab",permalink:"/app/docs/tags/gitlab"},{label:"runner",permalink:"/app/docs/tags/runner"},{label:"ci",permalink:"/app/docs/tags/ci"},{label:"docker",permalink:"/app/docs/tags/docker"}],version:"current",frontMatter:{id:"setup-gitlab-runner",title:"Setup Gitlab Runner",tags:["gitlab","runner","ci","docker"]},sidebar:"docsSidebar",previous:{title:"Install MicroK8s On Linux",permalink:"/app/docs/programming/ci/install-microk8s-on-linux"},next:{title:"Automation",permalink:"/app/docs/category/automation"}},c={},l=[{value:"Step 1: Run the GitLab Runner Container",id:"step-1-run-the-gitlab-runner-container",level:3},{value:"Step 2: Adjust Docker Socket Permissions",id:"step-2-adjust-docker-socket-permissions",level:3}];function u(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"step-1-run-the-gitlab-runner-container",children:"Step 1: Run the GitLab Runner Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -it --entrypoint /bin/bash gitlab/gitlab-runner:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:'If you encounter a "Not healthy" error related to Docker permissions while trying to connect to the Docker daemon socket\nat unix:///var/run/docker.sock, follow the next step.'}),"\n",(0,r.jsx)(n.h3,{id:"step-2-adjust-docker-socket-permissions",children:"Step 2: Adjust Docker Socket Permissions"}),"\n",(0,r.jsx)(n.p,{children:"To resolve the permission issue, execute the following command to grant appropriate permissions to the Docker socket:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'docker: Not healthy: "docker version --format {{.Server.Os}}-{{.Server.Version}}" exit status 1: Got permission denied\nwhile trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http:\n//%2Fvar%2Frun%2Fdocker.sock/v1.24/version": dial unix /var/run/docker.sock: connect: permission denied\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo chmod 666 /var/run/docker.sock\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);