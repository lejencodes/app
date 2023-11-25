"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4846],{1336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(85893),o=n(11151);const r={id:"get-device-udid",title:"Get Device Unique Id",tags:["altserver"]},c=void 0,s={id:"altserver/get-device-udid",title:"Get Device Unique Id",description:"To obtain the UDID of your device, you can follow these steps:",source:"@site/docs/altserver/get-device-udid.md",sourceDirName:"altserver",slug:"/altserver/get-device-udid",permalink:"/docs/altserver/get-device-udid",draft:!1,unlisted:!1,tags:[{label:"altserver",permalink:"/docs/tags/altserver"}],version:"current",frontMatter:{id:"get-device-udid",title:"Get Device Unique Id",tags:["altserver"]},sidebar:"docsSidebar",previous:{title:"AltServer",permalink:"/docs/category/altserver"},next:{title:"Install App Altserver Daemon",permalink:"/docs/altserver/install-app-altserver-daemon"}},d={},l=[];function a(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"To obtain the UDID of your device, you can follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Connect your device to your computer using a USB cable."}),"\n",(0,i.jsx)(t.li,{children:"Open your terminal or command prompt."}),"\n",(0,i.jsxs)(t.li,{children:["Run the command ",(0,i.jsx)(t.code,{children:"idevice_id -l"})," to obtain the ID of the connected device. This command will list the connected\ndevice's ID."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the command ",(0,i.jsx)(t.code,{children:"ideviceinfo -u [device ID obtained in step 3]"}),". Replace ",(0,i.jsx)(t.code,{children:"[device ID obtained in step 3]"})," with the\nactual device ID."]}),"\n",(0,i.jsxs)(t.li,{children:["Look for the ",(0,i.jsx)(t.code,{children:"UniqueDeviceID:"})," field in the output. The UDID will be displayed next to it."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Alternatively, you can use the following one-line command to achieve the same result:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"ideviceinfo -u $(idevice_id -l) | awk '/UniqueDeviceID:/ {print $2}'\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command combines the previous steps into a single command, making it more convenient to obtain the UDID of your\ndevice."}),"\n",(0,i.jsx)(t.p,{children:"Using either method, you will be able to retrieve the UDID of your device for further use or reference."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(67294);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);