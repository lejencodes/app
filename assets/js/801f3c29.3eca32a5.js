"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[2502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||p;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const p={slug:"python-pip-command",title:"Python pip command",authors:["lejencodes"],tags:["python","pip"]},a="Find package",i={permalink:"/blog/python-pip-command",source:"@site/blog/2022-03-01/index.md",title:"Python pip command",description:"py -m pip freeze | findstr py",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"pip",permalink:"/blog/tags/pip"}],readingTime:1.745,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"python-pip-command",title:"Python pip command",authors:["lejencodes"],tags:["python","pip"]},prevItem:{title:"Changing the Most Recent Commit",permalink:"/blog/changing-the-most-recent-commit"},nextItem:{title:"Starting With Ghost Blogging",permalink:"/blog/starting-with-ghost-blogging"}},s={authorsImageUrls:[void 0]},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"py -m pip freeze | findstr py"),(0,o.kt)("h1",{id:"upgrade-pip"},"Upgrade Pip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\npy -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\nC:\\Users\\xxx\\AppData\\Local\\Programs\\Python\\Python38\\python.exe -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h1",{id:"install-pip"},"Install Pip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"py get-pip.py --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h1",{id:"pip-install-command"},"Pip Install command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\npy -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\n")),(0,o.kt)("h1",{id:"some-notes-on-new-setup"},"some notes on new setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\n")),(0,o.kt)("h1",{id:"install-from-whl"},"install from whl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install some-package.whl\n")),(0,o.kt)("h1",{id:"add-to-path"},"Add to path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Users\\xxx\\AppData\\Roaming\\Python\\Python37\\Scripts\n")),(0,o.kt)("h1",{id:"use-this-to-install-from-local-drive"},"Use this to install from local drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install ./downloads/PythonSetup3.8/flake8-3.8.3.tar.gz  --trusted-host pypi.org --trusted-host files.pythonhosted.org\npy -m pip install ./downloads/PythonSetup3.8/dateformat-0.9.7.tar.gz --trusted-host pypi.org --trusted-host files.pythonhosted.org --user\n")),(0,o.kt)("h1",{id:"install-requirement"},"Install requirement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org\npython -m pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h1",{id:"when-upgrading-reinstall-all-packages-even-if-they-are-already-up-to-date"},"When upgrading, reinstall all packages even if they are already up-to-date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade --force-reinstall <package> --trusted-host pypi.org --trusted-host files.pythonhosted.org\npip install --upgrade --force-reinstall --trusted-host pypi.org --trusted-host files.pythonhosted.org <package>\n\npip install -I <package>\npip install --ignore-installed <package>\n")),(0,o.kt)("h1",{id:"once-in-a-while-a-python-package-gets-corrupted-on-your-machine-and-you-need-to-force-pip-to-reinstall-it-as-of-pip-100-you-can-run-the-following"},"Once in a while, a Python package gets corrupted on your machine and you need to force pip to reinstall it. As of pip 10.0, you can run the following:"),(0,o.kt)("h1",{id:"this-will-force-pip-to-re-install-corrupted-package-and-all-its-dependencies"},"This will force pip to re-install ",(0,o.kt)("inlineCode",{parentName:"h1"},"corrupted package")," and all its dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --force-reinstall <corrupted package>\n")),(0,o.kt)("h1",{id:"if-you-want-to-re-download-the-packages-instead-of-using-the-files-from-your-pip-cache-add-the---no-cache-dir-flag"},"If you want to re-download the packages instead of using the files from your pip cache, add the --no-cache-dir flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --force-reinstall --no-cache-dir <corrupted package>\n")),(0,o.kt)("h1",{id:"if-you-want-to-upgrade-the-package-you-can-run-this-instead"},"If you want to upgrade the package, you can run this instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade <corrupted package>\n")),(0,o.kt)("h1",{id:"the---upgrade-flag-will-not-mess-with-the-dependencies-of-corrupted-package-unless-you-add-the---force-reinstall-flag"},"The --upgrade flag will not mess with the dependencies of ",(0,o.kt)("inlineCode",{parentName:"h1"},"corrupted package")," unless you add the --force-reinstall flag."),(0,o.kt)("h1",{id:"if-for-some-reason-you-want-to-re-install-corrupted-package-and-all-its-dependencies-without-first-removing-the-current-versions-you-can-run"},"If, for some reason, you want to re-install ",(0,o.kt)("inlineCode",{parentName:"h1"},"corrupted package")," and all its dependencies without first removing the current versions, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --ignore-installed <corrupted package>\n")),(0,o.kt)("h1",{id:"by-the-way-if-youre-using-a-pip-version-that-is-less-than-100-its-time-to-update-pip"},"By the way, if you\u2019re using a pip version that is less than 10.0, it\u2019s time to update pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade pip\n")))}c.isMDXComponent=!0}}]);