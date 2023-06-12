"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[1308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(g,p(p({ref:t},d),{},{components:n})):a.createElement(g,p({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={slug:"python-pip-command",title:"Python pip command",authors:["lejencodes"],tags:["python","pip"]},p=void 0,i={permalink:"/app/blog/python-pip-command",source:"@site/blog/2022-03-01-python-pip-command.md",title:"Python pip command",description:"Find package",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"python",permalink:"/app/blog/tags/python"},{label:"pip",permalink:"/app/blog/tags/pip"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"python-pip-command",title:"Python pip command",authors:["lejencodes"],tags:["python","pip"]},prevItem:{title:"Changing the Most Recent Commit",permalink:"/app/blog/changing-the-most-recent-commit"},nextItem:{title:"Starting With Ghost Blogging",permalink:"/app/blog/starting-with-ghost-blogging"}},l={authorsImageUrls:[void 0]},s=[{value:"Find package",id:"find-package",level:2},{value:"Upgrade Pip",id:"upgrade-pip",level:2},{value:"Install Pip",id:"install-pip",level:2},{value:"Pip Install command",id:"pip-install-command",level:2},{value:"some notes on new setup",id:"some-notes-on-new-setup",level:2},{value:"install from whl",id:"install-from-whl",level:2},{value:"Add to path",id:"add-to-path",level:2},{value:"Use this to install from local drive",id:"use-this-to-install-from-local-drive",level:2},{value:"Install requirement",id:"install-requirement",level:2},{value:"When upgrading, reinstall all packages even if they are already up-to-date.",id:"when-upgrading-reinstall-all-packages-even-if-they-are-already-up-to-date",level:2},{value:"Once in a while, a Python package gets corrupted on your machine and you need to force pip to reinstall it. As of pip 10.0, you can run the following:",id:"once-in-a-while-a-python-package-gets-corrupted-on-your-machine-and-you-need-to-force-pip-to-reinstall-it-as-of-pip-100-you-can-run-the-following",level:2},{value:"This will force pip to re-install <code>corrupted package</code> and all its dependencies.",id:"this-will-force-pip-to-re-install-corrupted-package-and-all-its-dependencies",level:2},{value:"If you want to re-download the packages instead of using the files from your pip cache, add the --no-cache-dir flag:",id:"if-you-want-to-re-download-the-packages-instead-of-using-the-files-from-your-pip-cache-add-the---no-cache-dir-flag",level:2},{value:"If you want to upgrade the package, you can run this instead:",id:"if-you-want-to-upgrade-the-package-you-can-run-this-instead",level:2},{value:"The --upgrade flag will not mess with the dependencies of <code>corrupted package</code> unless you add the --force-reinstall flag.",id:"the---upgrade-flag-will-not-mess-with-the-dependencies-of-corrupted-package-unless-you-add-the---force-reinstall-flag",level:2},{value:"If, for some reason, you want to re-install <code>corrupted package</code> and all its dependencies without first removing the current versions, you can run:",id:"if-for-some-reason-you-want-to-re-install-corrupted-package-and-all-its-dependencies-without-first-removing-the-current-versions-you-can-run",level:2},{value:"By the way, if you\u2019re using a pip version that is less than 10.0, it\u2019s time to update pip:",id:"by-the-way-if-youre-using-a-pip-version-that-is-less-than-100-its-time-to-update-pip",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"find-package"},"Find package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"py -m pip freeze | findstr py\n")),(0,o.kt)("h2",{id:"upgrade-pip"},"Upgrade Pip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\npy -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\nC:\\Users\\xxx\\AppData\\Local\\Programs\\Python\\Python38\\python.exe -m pip install --upgrade pip --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h2",{id:"install-pip"},"Install Pip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"py get-pip.py --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h2",{id:"pip-install-command"},"Pip Install command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\npy -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\n")),(0,o.kt)("h2",{id:"some-notes-on-new-setup"},"some notes on new setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package> --user\n")),(0,o.kt)("h2",{id:"install-from-whl"},"install from whl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install some-package.whl\n")),(0,o.kt)("h2",{id:"add-to-path"},"Add to path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Users\\xxx\\AppData\\Roaming\\Python\\Python37\\Scripts\n")),(0,o.kt)("h2",{id:"use-this-to-install-from-local-drive"},"Use this to install from local drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install ./downloads/PythonSetup3.8/flake8-3.8.3.tar.gz  --trusted-host pypi.org --trusted-host files.pythonhosted.org\npy -m pip install ./downloads/PythonSetup3.8/dateformat-0.9.7.tar.gz --trusted-host pypi.org --trusted-host files.pythonhosted.org --user\n")),(0,o.kt)("h2",{id:"install-requirement"},"Install requirement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org\npython -m pip install -r requirements.txt --trusted-host pypi.org --trusted-host files.pythonhosted.org\n")),(0,o.kt)("h2",{id:"when-upgrading-reinstall-all-packages-even-if-they-are-already-up-to-date"},"When upgrading, reinstall all packages even if they are already up-to-date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade --force-reinstall <package> --trusted-host pypi.org --trusted-host files.pythonhosted.org\npip install --upgrade --force-reinstall --trusted-host pypi.org --trusted-host files.pythonhosted.org <package>\n\npip install -I <package>\npip install --ignore-installed <package>\n")),(0,o.kt)("h2",{id:"once-in-a-while-a-python-package-gets-corrupted-on-your-machine-and-you-need-to-force-pip-to-reinstall-it-as-of-pip-100-you-can-run-the-following"},"Once in a while, a Python package gets corrupted on your machine and you need to force pip to reinstall it. As of pip 10.0, you can run the following:"),(0,o.kt)("h2",{id:"this-will-force-pip-to-re-install-corrupted-package-and-all-its-dependencies"},"This will force pip to re-install ",(0,o.kt)("inlineCode",{parentName:"h2"},"corrupted package")," and all its dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --force-reinstall <corrupted package>\n")),(0,o.kt)("h2",{id:"if-you-want-to-re-download-the-packages-instead-of-using-the-files-from-your-pip-cache-add-the---no-cache-dir-flag"},"If you want to re-download the packages instead of using the files from your pip cache, add the --no-cache-dir flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --force-reinstall --no-cache-dir <corrupted package>\n")),(0,o.kt)("h2",{id:"if-you-want-to-upgrade-the-package-you-can-run-this-instead"},"If you want to upgrade the package, you can run this instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade <corrupted package>\n")),(0,o.kt)("h2",{id:"the---upgrade-flag-will-not-mess-with-the-dependencies-of-corrupted-package-unless-you-add-the---force-reinstall-flag"},"The --upgrade flag will not mess with the dependencies of ",(0,o.kt)("inlineCode",{parentName:"h2"},"corrupted package")," unless you add the --force-reinstall flag."),(0,o.kt)("h2",{id:"if-for-some-reason-you-want-to-re-install-corrupted-package-and-all-its-dependencies-without-first-removing-the-current-versions-you-can-run"},"If, for some reason, you want to re-install ",(0,o.kt)("inlineCode",{parentName:"h2"},"corrupted package")," and all its dependencies without first removing the current versions, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --ignore-installed <corrupted package>\n")),(0,o.kt)("h2",{id:"by-the-way-if-youre-using-a-pip-version-that-is-less-than-100-its-time-to-update-pip"},"By the way, if you\u2019re using a pip version that is less than 10.0, it\u2019s time to update pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade pip\n")))}u.isMDXComponent=!0}}]);