/*! For license information please see 591.1ab89fab.js.LICENSE.txt */
(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[591],{91262:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});n(67294);var r=n(72389),o=n(85893);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?(0,o.jsx)(o.Fragment,{children:t?.()}):n??null}},59047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(67294),o=n(85893);function i(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:i.length>0?(0,o.jsx)(o.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}var s=n(86010),a=n(95999),c=n(35281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){let{type:t,className:n,children:r}=e;return(0,o.jsx)("div",{className:(0,s.Z)(c.k.common.admonition,c.k.common.admonitionType(t),l.admonition,n),children:r})}function d(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function f(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){const{type:t,icon:n,title:r,children:i,className:s}=e;return(0,o.jsxs)(u,{type:t,className:s,children:[(0,o.jsx)(d,{title:r,icon:n}),(0,o.jsx)(f,{children:i})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const h={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,o.jsx)(m,{...h,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(b,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,o.jsx)(m,{...v,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const x={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,o.jsx)(m,{...x,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function w(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const E={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:g,tip:y,info:k,warning:function(e){return(0,o.jsx)(m,{..._,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(m,{...N,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(g,{title:"secondary",...e}),important:e=>(0,o.jsx)(k,{title:"important",...e}),success:e=>(0,o.jsx)(y,{title:"success",...e}),caution:function(e){return(0,o.jsx)(m,{...E,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};function B(e){const t=i(e),n=(r=t.type,L[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),L.info));var r;return(0,o.jsx)(n,{...t})}},9286:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var r=n(67294),o=n(72389),i=n(86010),s=n(92949),a=n(86668);function c(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var l=n(35281),u=n(87594),d=n.n(u);const f=/title=(?<quote>["'])(?<title>.*?)\1/,m=/\{(?<range>[\d,-]+)\}/,p={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function h(e,t){const n=e.map((e=>{const{start:n,end:r}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:i}=t;if(i&&m.test(i)){const e=i.match(m).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return h(["tex"],t);case"lua":case"haskell":case"sql":return h(["lua"],t);case"wasm":return h(["wasm"],t);default:return h(Object.keys(p).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,o),a=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),f=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(s);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${d},`:u[t]?c[u[t]].start=d:f[t]&&(c[f[t]].range+=`${c[f[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const g={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};var v=n(85893);function y(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const i=t[r];i&&"string"==typeof o&&(n[i]=o)})),n}(c());return(0,v.jsx)(t,{...n,style:r,className:(0,i.Z)(n.className,b.codeBlockContainer,l.k.common.codeBlock)})}const j={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){let{children:t,className:n}=e;return(0,v.jsx)(y,{as:"pre",tabIndex:0,className:(0,i.Z)(j.codeBlockStandalone,"thin-scrollbar",n),children:(0,v.jsx)("code",{className:j.codeBlockLines,children:t})})}var k=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,o]=(0,r.useState)(),i=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=w);const o=(0,k.zX)(t),i=(0,k.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,i),()=>t.disconnect()}),[e,o,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var C=n(42573);const N={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:o,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,i.Z)(n,r&&N.codeLine)}),c=t.map(((e,t)=>(0,v.jsx)("span",{...s({token:e,key:t})},t)));return(0,v.jsxs)("span",{...a,children:[r?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:N.codeLineNumber}),(0,v.jsx)("span",{className:N.codeLineContent,children:c})]}):c,(0,v.jsx)("br",{})]})}var L=n(95999);function B(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function O(e){let{code:t,className:n}=e;const[o,s]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),c=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const i=document.getSelection(),s=i.rangeCount>0&&i.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}r.remove(),s&&(i.removeAllRanges(),i.addRange(s)),o&&o.focus()}(t),s(!0),a.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,v.jsx)("button",{type:"button","aria-label":o?(0,L.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,L.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,L.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,R.copyButton,o&&R.copyButtonCopied),onClick:c,children:(0,v.jsxs)("span",{className:R.copyButtonIcons,"aria-hidden":"true",children:[(0,v.jsx)(B,{className:R.copyButtonIcon}),(0,v.jsx)(S,{className:R.copyButtonSuccessIcon})]})})}function T(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function M(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,L.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,v.jsx)("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,r&&$.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,v.jsx)(T,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){let{children:t,className:n="",metastring:o,title:s,showLineNumbers:l,language:u}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,a.L)(),p=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),h=c(),b=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),i=(0,r.useRef)(null),s=(0,r.useCallback)((()=>{const n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[i,e]),a=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=i.current,n=e>t||i.current.querySelector("code").hasAttribute("style");o(n)}),[i]);return _(i,a),(0,r.useEffect)((()=>{a()}),[e,a]),(0,r.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:s}}(),x=function(e){return e?.match(f)?.groups.title??""}(o)||s,{lineClassNames:k,code:w}=g(t,{metastring:o,language:p,magicComments:m}),N=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,v.jsxs)(y,{as:"div",className:(0,i.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[x&&(0,v.jsx)("div",{className:j.codeBlockTitle,children:x}),(0,v.jsxs)("div",{className:j.codeBlockContent,children:[(0,v.jsx)(C.y$,{theme:h,code:w,language:p??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:o,getTokenProps:s}=e;return(0,v.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,i.Z)(t,j.codeBlock,"thin-scrollbar"),style:n,children:(0,v.jsx)("code",{className:(0,i.Z)(j.codeBlockLines,N&&j.codeBlockLinesWithNumbering),children:r.map(((e,t)=>(0,v.jsx)(E,{line:e,getLineProps:o,getTokenProps:s,classNames:k[t],showLineNumbers:N},t)))})})}}),(0,v.jsxs)("div",{className:j.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,v.jsx)(M,{className:j.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,v.jsx)(O,{className:j.codeButton,code:w})]})]})]})}function z(e){let{children:t,...n}=e;const i=(0,o.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof s?P:x;return(0,v.jsx)(a,{...n,children:s},String(i))}},40591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r=n(67294),o=n(11151),i=n(35742),s=n(78809),a=n.n(s),c=n(85893);var l=n(39960);var u=n(86010),d=n(72389),f=n(86043);const m={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function g(e){let{summary:t,children:n,...o}=e;const i=(0,d.Z)(),s=(0,r.useRef)(null),{collapsed:a,setCollapsed:l}=(0,f.u)({initialState:!o.open}),[g,b]=(0,r.useState)(o.open),v=r.isValidElement(t)?t:(0,c.jsx)("summary",{children:t??"Details"});return(0,c.jsxs)("details",{...o,ref:s,open:g,"data-collapsed":a,className:(0,u.Z)(m.details,i&&m.isBrowser,o.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&h(t,s.current)&&(e.preventDefault(),a?(l(!1),b(!0)):l(!0))},children:[v,(0,c.jsx)(f.z,{lazy:!1,collapsed:a,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),b(!e)},children:(0,c.jsx)("div",{className:m.collapsibleContent,children:n})})]})}const b={details:"details_b_Ee"},v="alert alert--info";function y(e){let{...t}=e;return(0,c.jsx)(g,{...t,className:(0,u.Z)(v,b.details,t.className)})}function j(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.type)),o=(0,c.jsx)(c.Fragment,{children:t.filter((e=>e!==n))});return(0,c.jsx)(y,{...e,summary:n,children:o})}var x=n(92503);function k(e){return(0,c.jsx)(x.Z,{...e})}const w={containsTaskList:"containsTaskList_mC6p"};function _(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&w.containsTaskList)}const C={img:"img_ev3q"};var N=n(59047);const E={Head:i.Z,details:j,Details:j,code:function(e){return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,c.jsx)("code",{...e}):(0,c.jsx)(a(),{...e})},a:function(e){return(0,c.jsx)(l.Z,{...e})},pre:function(e){return(0,c.jsx)(c.Fragment,{children:e.children})},ul:function(e){return(0,c.jsx)("ul",{...e,className:_(e.className)})},img:function(e){return(0,c.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,C.img))});var t},h1:e=>(0,c.jsx)(k,{as:"h1",...e}),h2:e=>(0,c.jsx)(k,{as:"h2",...e}),h3:e=>(0,c.jsx)(k,{as:"h3",...e}),h4:e=>(0,c.jsx)(k,{as:"h4",...e}),h5:e=>(0,c.jsx)(k,{as:"h5",...e}),h6:e=>(0,c.jsx)(k,{as:"h6",...e}),admonition:N.Z,mermaid:()=>null};function L(e){let{children:t}=e;return(0,c.jsx)(o.Z,{components:E,children:t})}},97732:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCodeblockThemeConfig=void 0;var r=n(5028);Object.defineProperty(t,"useCodeblockThemeConfig",{enumerable:!0,get:function(){return r.useCodeblockThemeConfig}})},5028:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useCodeblockThemeConfig=void 0;const o=r(n(52263)),i={showGithubLink:!0,githubLinkLabel:"View on GitHub",showRunmeLink:!1,runmeLinkLabel:"Checkout via Runme"};t.useCodeblockThemeConfig=function(){const{siteConfig:{themeConfig:e}}=(0,o.default)();return Object.assign(i,e.codeblock||{})}},78809:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(32353)),i=r(n(3767)),s=r(n(9286));e.exports=(s.default,e=>e.reference?o.default.createElement(i.default,{...e}):o.default.createElement(s.default,{...e}))},88222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRunmeLink=t.RunmeLink=void 0;const o=r(n(32353)),i=r(n(91262)),s=n(97732),a=n(37311),c=n(53417),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function d(e){let{reference:t,metastring:n}=e;const r=navigator.userAgent||navigator.vendor||window.opera,i=(0,s.useCodeblockThemeConfig)(),a=!function(e){return l.test(e)||u.test(e.substr(0,4))}(r)&&i.showRunmeLink&&n;return a?o.default.createElement("a",{href:`vscode://stateful.runme?${f(t,n)}`,className:"runmeLink",target:"_blank",style:c.buttonStyles},i.runmeLinkLabel):null}function f(e,t){var n,r;const o=new URLSearchParams({command:"setup"}),i=t.match(/runmeRepository="(?<repository>[^"]*)"/),s=t.match(/runmeFileToOpen="(?<fileToOpen>[^"]*)"/),c=t.match(/useHTTPS|useHTTPS=(false|true)/);if(e.endsWith(".md"))return o.set("fileToOpen",(0,a.parseReference)(e).url),o.toString();if(null===(n=null==s?void 0:s.groups)||void 0===n?void 0:n.fileToOpen)return o.set("fileToOpen",s.groups.fileToOpen),(null===(r=null==i?void 0:i.groups)||void 0===r?void 0:r.repository)&&o.set("repository",i.groups.repository),o.toString();const{org:l,repo:u,title:d}=(0,a.parseReference)(e),f=c&&c.input&&(c.input.includes("useHTTPS=true")||c.input.includes(" useHTTPS ")||c.input.endsWith("useHTTPS"))?"https://github.com/":"git@github.com:";return o.set("repository",`${f}${l}/${u}.git`),o.set("fileToOpen",d.split("/").slice(0,-1).join("/")+"/README.md"),o.toString()}t.RunmeLink=function(e){return o.default.createElement(i.default,null,(()=>o.default.createElement(d,{...e})))},t.getRunmeLink=f},53417:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buttonStyles=t.initialFetchResultState=void 0,t.initialFetchResultState={code:"loading...",error:null,loading:null},t.buttonStyles={margin:"0 10px"}},3767:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n(32353)),c=s(n(9286)),l=n(97732),u=n(88222),d=n(37311),f=n(53417),m={fontSize:".9em",fontWeight:600,color:"#0E75DD",textAlign:"right",paddingBottom:"13px",textDecoration:"underline"};t.default=function(e){var t,n,r;const[o,i]=(0,a.useReducer)(d.codeReducer,f.initialFetchResultState),s=(0,d.parseReference)(e.children);!1!==o.loading&&(0,d.fetchCode)(s,i);const p=null===(t=e.metastring)||void 0===t?void 0:t.match(/title="(?<title>[^"]*)"/),h={...e,metastring:(null===(n=null==p?void 0:p.groups)||void 0===n?void 0:n.title)?` title="${null===(r=null==p?void 0:p.groups)||void 0===r?void 0:r.title}"`:` title="${s.title}"`,children:f.initialFetchResultState.code},g=(0,l.useCodeblockThemeConfig)(),b=g.showGithubLink||g.showRunmeLink;return a.default.createElement("div",{className:"docusaurus-theme-github-codeblock"},a.default.createElement(c.default,{...h},o.code),b&&a.default.createElement("div",{style:m},a.default.createElement(u.RunmeLink,{reference:e.children,metastring:e.metastring}),g.showGithubLink&&a.default.createElement("a",{href:e.children,className:"githubLink",style:f.buttonStyles,target:"_blank"},g.githubLinkLabel)))}},37311:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.codeReducer=t.fetchCode=t.parseReference=void 0;const r=n(53417);t.parseReference=function(e){const t=e.slice(e.indexOf("https")),[r,o]=t.split("#"),[i,s,a,c,...l]=new n.g.URL(r).pathname.split("/").slice(1),[u,d]=o?o.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${i}/${s}/${c}/${l.join("/")}`,fromLine:u,toLine:d,title:l.join("/"),org:i,repo:s}},t.fetchCode=async function(e,t){let n,{url:r,fromLine:o,toLine:i}=e;try{n=await fetch(r)}catch(c){return t({type:"error",value:c})}if(200!==n.status){return t({type:"error",value:await n.text()})}const s=(await n.text()).split("\n").slice(o,(i||o)+1),a=s.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);return t({type:"loaded",value:s.map((e=>e.slice(a))).join("\n")})},t.codeReducer=function(e,t){let{type:n,value:o}=t;switch(n){case"reset":return r.initialFetchResultState;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:o,loading:!1};case"error":return{...e,error:o,loading:!1};default:return e}}},55770:(e,t,n)=>{"use strict";var r=n(27418),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var y=v.prototype=new b;y.constructor=v,r(y,g.prototype),y.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+N(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+N(a=e[l],l);c+=E(a,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=E(a=a.value,t,n,u=r+N(a,l++),s);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function L(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function R(){var e=S.current;if(null===e)throw Error(m(321));return e}var O={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(m(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var i=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},32353:(e,t,n)=>{"use strict";e.exports=n(55770)},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(a[l]=i[l]);if(t){s=t(i);for(var u=0;u<s.length;u++)r.call(i,s[u])&&(a[s[u]]=i[s[u]])}}return a}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,i]=t;if(r&&i){r=parseInt(r),i=parseInt(i);const e=r<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=e);for(let t=r;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);