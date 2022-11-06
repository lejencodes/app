"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[4431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={permalink:"/blog/2022/04/11/index",source:"@site/blog/2022-04-11/index.md",title:"index",description:"Trying to understand what is refactoring, follow the guide from Real Python. https://realpython.com/python-refactoring",date:"2022-04-11T00:00:00.000Z",formattedDate:"April 11, 2022",tags:[],readingTime:3.655,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"index",permalink:"/blog/2022/04/12/index"},nextItem:{title:"index",permalink:"/blog/2022/04/10/index"}},s={authorsImageUrls:[]},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Trying to understand what is refactoring, follow the guide from Real Python. ",(0,r.kt)("a",{parentName:"p",href:"https://realpython.com/python-refactoring"},"https://realpython.com/python-refactoring")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Functions That Should Be Objects")),(0,r.kt)("p",null,"Without reading the code, you will not know if it will modify the original image or create a new image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title=imagelib.py"',title:'imagelib.py"'},'def load_image(path):\n    with open(path, "rb") as file:\n        fb = file.load()\n    image = img_lib.parse(fb)\n    return image\n\ndef crop_image(image, width, height):\n    ...\n    return image\n\ndef get_image_thumbnail(image, resolution=100):\n    ...\n    return image\n')),(0,r.kt)("p",null,"To call the codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from imagelib import load_image, crop_image, get_image_thumbnail\n\nimage = load_image('~/face.jpg')\nimage = crop_image(image, 400, 500)\nthumb = get_image_thumbnail(image)\n")),(0,r.kt)("p",null,"Symptoms of code using functions that could be refactored into classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Similar arguments across functions\nHigher number of Halstead h2 unique operands (All the variables and constants are considered operands)\nMix of mutable and immutable functions\nFunctions spread across multiple Python files\n")),(0,r.kt)("p",null,"Here is a refactored version of those 3 functions, where the following happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".__init__() replaces load_image().\ncrop() becomes a class method.\nget_image_thumbnail() becomes a property.\n")),(0,r.kt)("p",null,"The thumbnail resolution has become a class property, so it can be changed globally or on that particular instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="imagelib-refactored.py"',title:'"imagelib-refactored.py"'},"class Image(object):\n    thumbnail_resolution = 100\n    def __init__(self, path):\n        ...\n\n    def crop(self, width, height):\n        ...\n\n    @property\n    def thumbnail(self):\n        ...\n        return thumb\n\n")),(0,r.kt)("p",null,"This is how the refactored example would look:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"from imagelib import Image\n\nimage = Image('~/face.jpg')\nimage.crop(400, 500)\nthumb = image.thumbnail\n")),(0,r.kt)("p",null,"In the resulting code, we have solved the original problems:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"It is clear that thumbnail returns a thumbnail since it is a property, and that it doesn\u2019t modify the instance.\nThe code no longer requires creating new variables for the crop operation.\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Objects That Should Be Functions")),(0,r.kt)("p",null,"Here are some tell-tale signs of incorrect use of classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Classes with 1 method (other than .__init__())\nClasses that contain only static methods\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="authentication class"',title:'"authentication','class"':!0},"class Authenticator(object):\ndef **init**(self, username, password):\nself.username = username\nself.password = password\n\n    def authenticate(self):\n        ...\n        return result\n")),(0,r.kt)("p",null,"It would make more sense to just have a simple function named authenticate() that takes username and password as arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="authenticate.py"',title:'"authenticate.py"'},"def authenticate(username, password):\n...\nreturn result\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Converting \u201cTriangular\u201d Code to Flat Code")),(0,r.kt)("p",null,"These are the symptoms of highly nested code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A high cyclomatic complexity because of the number of code branches\nA low Maintainability Index because of the high cyclomatic complexity relative to the number of lines of code\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def contains_errors(data):\n    if isinstance(data, list):\n        for item in data:\n            if isinstance(item, str):\n                if item == "error":\n                    return True\n    return False\n')),(0,r.kt)("p",null,"Refactor this function by \u201creturning early\u201d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def contains_errors(data):\n    if not isinstance(data, list):\n        return False\n    return data.count("error") > 0\n')),(0,r.kt)("p",null,"Another technique to reduce nesting by list comprehension"),(0,r.kt)("p",null,"Common practise to create list, loop through and check for criteria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"results = []\nfor item in iterable:\nif item == match:\nresults.append(item)\n")),(0,r.kt)("p",null,"Replace with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"results = [item for item in iterable if item == match]\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Handling Complex Dictionaries With Query Tools")),(0,r.kt)("p",null,"It does have one major side-effect: when dictionaries are highly nested, the code that queries them becomes nested too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'data = {\n "network": {\n  "lines": [\n    {\n     "name.en": "Ginza",\n     "name.jp": "\u9280\u5ea7\u7dda",\n     "color": "orange",\n     "number": 3,\n     "sign": "G"\n    },\n    {\n     "name.en": "Marunouchi",\n     "name.jp": "\u4e38\u30ce\u5185\u7dda",\n     "color": "red",\n     "number": 4,\n     "sign": "M"\n    }\n  ]\n }\n}\n')),(0,r.kt)("p",null,"If you wanted to get the line that matched a certain number, this could be achieved in a small function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def find_line_by_number(data, number):\n    matches = [line for line in data if line['number'] == number]\n    if len(matches) > 0:\n        return matches[0]\n    else:\n        raise ValueError(f\"Line {number} does not exist.\")\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'find_line_by_number(data["network"]["lines"], 3)\n')),(0,r.kt)("p",null,"There are third party tools for querying dictionaries in Python. Some of the most popular are JMESPath, glom, asq, and flupy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"\nimport jmespath\n\njmespath.search(\"network.lines\", data)\n[{'name.en': 'Ginza', 'name.jp': '\u9280\u5ea7\u7dda',\n'color': 'orange', 'number': 3, 'sign': 'G'},\n{'name.en': 'Marunouchi', 'name.jp': '\u4e38\u30ce\u5185\u7dda',\n'color': 'red', 'number': 4, 'sign': 'M'}]\n")),(0,r.kt)("p",null,"If you wanted to get the line number for every line, you could do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> > > jmespath.search("network.lines[*].number", data)\n> > > [3, 4]\n')),(0,r.kt)("p",null,"You can provide more complex queries, like a == or <. The syntax is a little unusual for Python developers, so keep the documentation handy for reference."),(0,r.kt)("p",null,"Find the line with the number 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> > > jmespath.search(\"network.lines[?number==`3`]\", data)\n> > > [{'name.en': 'Ginza', 'name.jp': '\u9280\u5ea7\u7dda', 'color': 'orange', 'number': 3, 'sign': 'G'}]\n")))}m.isMDXComponent=!0}}]);