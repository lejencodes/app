"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9540],{21176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(85893),a=t(11151);const o={slug:"python-refactoring",title:"Python Refactoring",authors:["koficodes"],tags:["python","refactoring"]},r=void 0,s={permalink:"/blog/python-refactoring",source:"@site/blog/2022-04-11-python-refactoring.md",title:"Python Refactoring",description:"Trying to understand what is refactoring, follow the guide from Real Python. https://realpython.com/python-refactoring",date:"2022-04-11T00:00:00.000Z",formattedDate:"April 11, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"refactoring",permalink:"/blog/tags/refactoring"}],readingTime:3.7,hasTruncateMarker:!1,authors:[{name:"koficodes",title:"Just a person",url:"https://koficodes.xyz",imageURL:"https://github.com/lejencodes.png",key:"koficodes"}],frontMatter:{slug:"python-refactoring",title:"Python Refactoring",authors:["koficodes"],tags:["python","refactoring"]},unlisted:!1,prevItem:{title:"Top 10 Design Principles",permalink:"/blog/top-10-design-principles"},nextItem:{title:"Using ssh-agent with Visual Studio Code on Windows 10",permalink:"/blog/using-ssh-agent-with-visual-studio-code-on-windows-10"}},l={authorsImageUrls:[void 0]},c=[{value:"1. Functions That Should Be Objects",id:"1-functions-that-should-be-objects",level:2},{value:"2. Objects That Should Be Functions",id:"2-objects-that-should-be-functions",level:2},{value:"3. Converting \u201cTriangular\u201d Code to Flat Code",id:"3-converting-triangular-code-to-flat-code",level:2},{value:"4. Handling Complex Dictionaries With Query Tools",id:"4-handling-complex-dictionaries-with-query-tools",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Trying to understand what is refactoring, follow the guide from Real Python. ",(0,i.jsx)(n.a,{href:"https://realpython.com/python-refactoring",children:"https://realpython.com/python-refactoring"})]}),"\n",(0,i.jsx)(n.h2,{id:"1-functions-that-should-be-objects",children:"1. Functions That Should Be Objects"}),"\n",(0,i.jsx)(n.p,{children:"Without reading the code, you will not know if it will modify the original image or create a new image."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:'title="imagelib.py"',children:'def load_image(path):\n    with open(path, "rb") as file:\n        fb = file.load()\n    image = img_lib.parse(fb)\n    return image\n\n\ndef crop_image(image, width, height):\n    ...\n    return image\n\n\ndef get_image_thumbnail(image, resolution=100):\n    ...\n    return image\n'})}),"\n",(0,i.jsx)(n.p,{children:"To call the codes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from imagelib import load_image, crop_image, get_image_thumbnail\n\nimage = load_image('~/face.jpg')\nimage = crop_image(image, 400, 500)\nthumb = get_image_thumbnail(image)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Symptoms of code using functions that could be refactored into classes:"}),"\n",(0,i.jsx)(n.p,{children:"Similar arguments across functions\nHigher number of Halstead h2 unique operands (All the variables and constants are considered operands)\nMix of mutable and immutable functions\nFunctions spread across multiple Python files"}),"\n",(0,i.jsx)(n.p,{children:"Here is a refactored version of those 3 functions, where the following happens:"}),"\n",(0,i.jsxs)(n.p,{children:[".",(0,i.jsx)(n.strong,{children:"init"}),"() replaces load_image().\ncrop() becomes a class method.\nget_image_thumbnail() becomes a property."]}),"\n",(0,i.jsx)(n.p,{children:"The thumbnail resolution has become a class property, so it can be changed globally or on that particular instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:'title="imagelib-refactored.py"',children:"class Image(object):\n    thumbnail_resolution = 100\n\n    def __init__(self, path):\n        ...\n\n    def crop(self, width, height):\n        ...\n\n    @property\n    def thumbnail(self):\n        ...\n        return thumb\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is how the refactored example would look:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from imagelib import Image\n\nimage = Image('~/face.jpg')\nimage.crop(400, 500)\nthumb = image.thumbnail\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the resulting code, we have solved the original problems:"}),"\n",(0,i.jsx)(n.p,{children:"It is clear that thumbnail returns a thumbnail since it is a property, and that it doesn\u2019t modify the instance.\nThe code no longer requires creating new variables for the crop operation."}),"\n",(0,i.jsx)(n.h2,{id:"2-objects-that-should-be-functions",children:"2. Objects That Should Be Functions"}),"\n",(0,i.jsx)(n.p,{children:"Here are some tell-tale signs of incorrect use of classes:"}),"\n",(0,i.jsxs)(n.p,{children:["Classes with 1 method (other than .",(0,i.jsx)(n.strong,{children:"init"}),"())\nClasses that contain only static methods"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:'title="authentication class"',children:"class Authenticator(object):\n    def __init__(self, username, password):\n        self.username = username\n        self.password = password\n\n\ndef authenticate(self):\n    # Do something\n    return result\n"})}),"\n",(0,i.jsx)(n.p,{children:"It would make more sense to just have a simple function named authenticate() that takes username and password as\narguments:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:'title="authenticate.py"',children:"def authenticate(username, password):\n    # Do something\n    return result\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-converting-triangular-code-to-flat-code",children:"3. Converting \u201cTriangular\u201d Code to Flat Code"}),"\n",(0,i.jsx)(n.p,{children:"These are the symptoms of highly nested code:"}),"\n",(0,i.jsx)(n.p,{children:"A high cyclomatic complexity because of the number of code branches\nA low Maintainability Index because of the high cyclomatic complexity relative to the number of lines of code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'def contains_errors(data):\n    if isinstance(data, list):\n        for item in data:\n            if isinstance(item, str):\n                if item == "error":\n                    return True\n    return False\n'})}),"\n",(0,i.jsx)(n.p,{children:"Refactor this function by \u201creturning early\u201d"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'def contains_errors(data):\n    if not isinstance(data, list):\n        return False\n    return data.count("error") > 0\n'})}),"\n",(0,i.jsx)(n.p,{children:"Another technique to reduce nesting by list comprehension"}),"\n",(0,i.jsx)(n.p,{children:"Common practise to create list, loop through and check for criteria."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"results = []\nfor item in iterable:\n    if item == match:\n        results.append(item)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Replace with:"}),"\n",(0,i.jsx)(n.p,{children:"results = [item for item in iterable if item == match]"}),"\n",(0,i.jsx)(n.h2,{id:"4-handling-complex-dictionaries-with-query-tools",children:"4. Handling Complex Dictionaries With Query Tools"}),"\n",(0,i.jsx)(n.p,{children:"It does have one major side-effect: when dictionaries are highly nested, the code that queries them becomes nested too."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'data = {\n  "network": {\n    "lines": [\n      {\n        "name.en": "Ginza",\n        "name.jp": "\u9280\u5ea7\u7dda",\n        "color": "orange",\n        "number": 3,\n        "sign": "G"\n      },\n      {\n        "name.en": "Marunouchi",\n        "name.jp": "\u4e38\u30ce\u5185\u7dda",\n        "color": "red",\n        "number": 4,\n        "sign": "M"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you wanted to get the line that matched a certain number, this could be achieved in a small function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"def find_line_by_number(data, number):\n    matches = [line for line in data if line['number'] == number]\n    if len(matches) > 0:\n        return matches[0]\n    else:\n        raise ValueError(f\"Line {number} does not exist.\")\n"})}),"\n",(0,i.jsx)(n.p,{children:'find_line_by_number(data["network"]["lines"], 3)'}),"\n",(0,i.jsx)(n.p,{children:"There are third party tools for querying dictionaries in Python. Some of the most popular are JMESPath, glom, asq, and\nflupy."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"\nimport jmespath\n\njmespath.search(\"network.lines\", data)\n[{'name.en': 'Ginza', 'name.jp': '\u9280\u5ea7\u7dda',\n  'color': 'orange', 'number': 3, 'sign': 'G'},\n {'name.en': 'Marunouchi', 'name.jp': '\u4e38\u30ce\u5185\u7dda',\n  'color': 'red', 'number': 4, 'sign': 'M'}]\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you wanted to get the line number for every line, you could do this:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'jmespath.search("network.lines[*].number", data)\n[3, 4]'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can provide more complex queries, like a ",(0,i.jsx)(n.code,{children:"=="}),"or ",(0,i.jsx)(n.code,{children:"<"}),". The syntax is a little unusual for Python developers, so keep\nthe\ndocumentation handy for reference."]}),"\n",(0,i.jsx)(n.p,{children:"Find the line with the number 3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"    > > > jmespath.search(\"network.lines[?number==`3`]\", data)\n    > > > [{'name.en': 'Ginza', 'name.jp': '\u9280\u5ea7\u7dda', 'color': 'orange', 'number': 3, 'sign': 'G'}]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);