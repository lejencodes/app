"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[3072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||h[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"Sandbox/Markdown-Cheat-Sheet",id:"Sandbox/Markdown-Cheat-Sheet",title:"Markdown-Cheat-Sheet",description:"[[Markdown]]",source:"@site/docs/Sandbox/Markdown-Cheat-Sheet.md",sourceDirName:"Sandbox",slug:"/Sandbox/Markdown-Cheat-Sheet",permalink:"/docs/Sandbox/Markdown-Cheat-Sheet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"using-sidebar",permalink:"/docs/Sandbox/test-sidebar"},next:{title:"create-a-page",permalink:"/docs/Sandbox/create-a-page"}},s={},p=[{value:"Heading",id:"heading",level:2},{value:"Emphasis",id:"emphasis",level:2},{value:"Lists",id:"lists",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code and Syntax Highlighting",id:"code-and-syntax-highlighting",level:2},{value:"Footnotes",id:"footnotes",level:2},{value:"Tables",id:"tables",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Inline HTML",id:"inline-html",level:2},{value:"Horizontal Rule",id:"horizontal-rule",level:2},{value:"Line Breaks",id:"line-breaks",level:2},{value:"YouTube Videos",id:"youtube-videos",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[","[Markdown]","]"),(0,r.kt)("h2",{id:"heading"},"Heading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n")),(0,r.kt)("h2",{id:"emphasis"},"Emphasis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Emphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n")),(0,r.kt)("p",null,"Emphasis, aka italics, with ",(0,r.kt)("em",{parentName:"p"},"asterisks")," or ",(0,r.kt)("em",{parentName:"p"},"underscores"),"."),(0,r.kt)("p",null,"Strong emphasis, aka bold, with ",(0,r.kt)("strong",{parentName:"p"},"asterisks")," or ",(0,r.kt)("strong",{parentName:"p"},"underscores"),"."),(0,r.kt)("p",null,"Combined emphasis with ",(0,r.kt)("strong",{parentName:"p"},"asterisks and ",(0,r.kt)("em",{parentName:"strong"},"underscores")),"."),(0,r.kt)("p",null,"Strike-through uses two tildes. ",(0,r.kt)("del",{parentName:"p"},"Scratch this.")),(0,r.kt)("h2",{id:"lists"},"Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. First ordered list item\n2. Another item\n\u22c5\u22c5* Unordered sub-list.\n1. Actual numbers don't matter, just that it's a number\n\u22c5\u22c51. Ordered sub-list\n4. And another item.\n\n\u22c5\u22c5\u22c5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n\u22c5\u22c5\u22c5To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n\u22c5\u22c5\u22c5Note that this line is separate, but within the same paragraph.\u22c5\u22c5\n\u22c5\u22c5\u22c5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First ordered list item"),(0,r.kt)("li",{parentName:"ol"},"Another item\n\u22c5\u22c5","*"," Unordered sub-list."),(0,r.kt)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number\n\u22c5\u22c51. Ordered sub-list"),(0,r.kt)("li",{parentName:"ol"},"And another item.")),(0,r.kt)("p",null,"\u22c5\u22c5\u22c5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at\nleast one, but we'll use three here to also align the raw Markdown)."),(0,r.kt)("p",null,"\u22c5\u22c5\u22c5To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n\u22c5\u22c5\u22c5Note that this line is separate, but within the same paragraph.\u22c5\u22c5\n\u22c5\u22c5\u22c5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unordered list can use asterisks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Or minuses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Or pluses")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.google.com"},"I'm an inline-style link")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.google.com",title:"Google's Homepage"},"I'm an inline-style link with title")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mozilla.org"},"I'm a reference-style link")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://slashdot.org"},"You can use numbers for reference-style link definitions")),(0,r.kt)("p",null,"Or leave it empty and use the ",(0,r.kt)("a",{parentName:"p",href:"http://www.reddit.com"},"link text itself"),"."),(0,r.kt)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"http://www.example.com")," or ",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"http://www.example.com")," and sometimes\nexample.com (but not on Github, for example)."),(0,r.kt)("p",null,"Some text to show that the reference links can follow later."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Here\'s our logo (hover to see the title text):\n\nInline-style:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nReference-style:\n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"\n')),(0,r.kt)("p",null,"Here's our logo (hover to see the title text):"),(0,r.kt)("p",null,"Inline-style:\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),(0,r.kt)("p",null,"Reference-style:\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),(0,r.kt)("h2",{id:"code-and-syntax-highlighting"},"Code and Syntax Highlighting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Inline `code` has `back-ticks around` it.\n")),(0,r.kt)("p",null,"Inline ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"back-ticks around")," it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n\n```python\ns = "Python syntax highlighting"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let\'s throw in a <b>tag</b>.\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var s = "JavaScript syntax highlighting";\nalert(s);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint s\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),(0,r.kt)("h2",{id:"footnotes"},"Footnotes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Here is a simple footnote[^1].\n\nA footnote can also have multiple lines[^2].\n\nYou can also use words, to fit your writing style more closely[^note].\n\n[^1]: My reference.\n[^2]: Every new line should be prefixed with 2 spaces.\n  This allows you to have a footnote with multiple lines.\n[^note]:\n    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.\n    This footnote also has been made with a different syntax using 4 spaces for new lines.\n")),(0,r.kt)("p",null,"Here is a simple footnote",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"A footnote can also have multiple lines",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,r.kt)("p",null,"You can also use words, to fit your writing style more closely",(0,r.kt)("sup",{parentName:"p",id:"fnref-note"},(0,r.kt)("a",{parentName:"sup",href:"#fn-note",className:"footnote-ref"},"note")),"."),(0,r.kt)("p",null,"Every new line should be prefixed with 2 spaces.",(0,r.kt)("br",{parentName:"p"}),"\n","This allows you to have a footnote with multiple lines."),(0,r.kt)("p",null,"Named footnotes will still render with numbers instead of the text but allow easier identification and linking.",(0,r.kt)("br",{parentName:"p"}),"\n","This footnote also has been made with a different syntax using 4 spaces for new lines."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Colons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the\nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n")),(0,r.kt)("p",null,"Colons can be used to align columns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tables"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Are"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$1600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zebra stripes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"are neat"),(0,r.kt)("td",{parentName:"tr",align:"right"},"$1")))),(0,r.kt)("p",null,"There must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the\nraw Markdown line up prettily. You can also use inline Markdown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,r.kt)("th",{parentName:"tr",align:null},"Less"),(0,r.kt)("th",{parentName:"tr",align:null},"Pretty"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Still")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"renders")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"nicely"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("h2",{id:"blockquotes"},"Blockquotes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote.")),(0,r.kt)("p",null,"Quote break."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this\nis long enough to actually wrap for everyone. Oh, you can ",(0,r.kt)("em",{parentName:"p"},"put")," ",(0,r.kt)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),(0,r.kt)("h2",{id:"inline-html"},"Inline HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>\n")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Definition list"),(0,r.kt)("dd",null,"Is something people use sometimes."),(0,r.kt)("dt",null,"Markdown in HTML"),(0,r.kt)("dd",null,"Does *not* work **very** well. Use HTML ",(0,r.kt)("em",null,"tags"),".")),(0,r.kt)("h2",{id:"horizontal-rule"},"Horizontal Rule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Three or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n")),(0,r.kt)("p",null,"Three or more..."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Hyphens"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Asterisks"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Underscores"),(0,r.kt)("h2",{id:"line-breaks"},"Line Breaks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Here's a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the *same paragraph*.\n")),(0,r.kt)("p",null,"Here's a line for us to start with."),(0,r.kt)("p",null,"This line is separated from the one above by two newlines, so it will be a ",(0,r.kt)("em",{parentName:"p"},"separate paragraph"),"."),(0,r.kt)("p",null,"This line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the ",(0,r.kt)("em",{parentName:"p"},"same paragraph"),"."),(0,r.kt)("h2",{id:"youtube-videos"},"YouTube Videos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE\n" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"\nalt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>\n')),(0,r.kt)("a",{href:"http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE\n",target:"_blank"},(0,r.kt)("img",{src:"http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg",alt:"IMAGE ALT TEXT HERE",width:"240",height:"180",border:"10"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE"},(0,r.kt)("img",{parentName:"a",src:"http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg",alt:"IMAGE ALT TEXT HERE"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"My reference.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-note"},(0,r.kt)("a",{parentName:"li",href:"#fnref-note",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);