"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||r;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={id:"install-and-setup-android-emulator-ubuntu",title:"Install And Setup Android Emulator Ubuntu",tags:["android"]},l=void 0,i={unversionedId:"config-and-setup/android/install-and-setup-android-emulator-ubuntu",id:"config-and-setup/android/install-and-setup-android-emulator-ubuntu",title:"Install And Setup Android Emulator Ubuntu",description:"Requirement",source:"@site/docs/config-and-setup/android/install-and-setup-android-emulator-ubuntu.md",sourceDirName:"config-and-setup/android",slug:"/config-and-setup/android/install-and-setup-android-emulator-ubuntu",permalink:"/app/docs/config-and-setup/android/install-and-setup-android-emulator-ubuntu",draft:!1,tags:[{label:"android",permalink:"/app/docs/tags/android"}],version:"current",frontMatter:{id:"install-and-setup-android-emulator-ubuntu",title:"Install And Setup Android Emulator Ubuntu",tags:["android"]},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/app/docs/category/android"},next:{title:"Install And Setup Android Studio Ubuntu",permalink:"/app/docs/config-and-setup/android/install-and-setup-android-studio-ubuntu"}},p={},d=[{value:"Requirement",id:"requirement",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Option 1 - Launch Emulator from Android Studio",id:"option-1---launch-emulator-from-android-studio",level:2},{value:"Option 2 - Launch Emulator from command line",id:"option-2---launch-emulator-from-command-line",level:2},{value:"Google Play Services",id:"google-play-services",level:2},{value:"Option 1 - Setup Device from Android Studio",id:"option-1---setup-device-from-android-studio",level:3},{value:"Option 2 - Install Google Play Services on Android Studio Emulator via OpenGApps",id:"option-2---install-google-play-services-on-android-studio-emulator-via-opengapps",level:3},{value:"Kill emulator",id:"kill-emulator",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Cannot open webpage correctly",id:"cannot-open-webpage-correctly",level:3}],u={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requirement"},"Requirement"),(0,o.kt)("p",null,"If you have not installed Android Studio, proceed to ",(0,o.kt)("a",{parentName:"p",href:"/app/docs/config-and-setup/android/install-and-setup-android-studio-ubuntu"},"[Setup Android Studio]")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"option-1---launch-emulator-from-android-studio"},"Option 1 - Launch Emulator from Android Studio"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch Android Studio"),(0,o.kt)("li",{parentName:"ol"},"Under Tools Menu, select Device Manager"),(0,o.kt)("li",{parentName:"ol"},"At Device Manager, you will see default device, and you can launch it")),(0,o.kt)("h2",{id:"option-2---launch-emulator-from-command-line"},"Option 2 - Launch Emulator from command line"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create one symbolic link emulator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# for mac\n$ ln -s ~/Library/Android/sdk/tools/emulator /usr/local/bin/emulator\n\n# for ubuntu\n$ ln -s ~/Android/Sdk/tools/emulator /usr/local/bin/emulator\n# for x86\n$ ln -s ~/Android/Sdk/tools/emulator-x86 /usr/local/bin/emulator-x86\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add below lines to ",(0,o.kt)("inlineCode",{parentName:"li"},".zshrc")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Android\nexport ANDROID_HOME=~/Android/Sdk\nexport ANDROID_SDK_ROOT=$ANDROID_HOME\nexport PATH=$PATH:$ANDROID_HOME/emulator\nexport PATH=$PATH:$ANDROID_HOME/tools\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Update config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Test command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -list-avds\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ Output\n$ Pixel_3a_API_31.avd\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Launch Emulator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Android/Sdk/emulator\nemulator -avd Pixel_3a_API_31 -netdelay none -netspeed full -feature -Vulkan;\n")),(0,o.kt)("h2",{id:"google-play-services"},"Google Play Services"),(0,o.kt)("h3",{id:"option-1---setup-device-from-android-studio"},"Option 1 - Setup Device from Android Studio"),(0,o.kt)("p",null,"During device setup, search for image with google play icon"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device-with-google-play",src:a(94028).Z,width:"899",height:"350"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have setup Device from Android studio, you don't need to amend config file"),(0,o.kt)("p",{parentName:"admonition"},"From Android studio just need to configure your device correctly")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new emulator, and before opening it for the first time, follow these easy steps:")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the directory where the emulator has been created."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Windows go to: ",(0,o.kt)("inlineCode",{parentName:"p"},"%userprofile%.android\\avd")," and open your virtual device folder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Ubuntu go to : ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.android/avd")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open file config.ini with a text editor")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate PlayStore.enabled key and change its value to true:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"PlayStore.enabled = true\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Locate image.sysdir.1 key and change to google_apis_playstore")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"image.sysdir.1=system-images/android-33/google_apis/x86_64/\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"image.sysdir.1=system-images/android-33/google_apis_playstore/x86_64/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Config.ini",src:a(92431).Z,width:"707",height:"832"})),(0,o.kt)("h3",{id:"option-2---install-google-play-services-on-android-studio-emulator-via-opengapps"},"Option 2 - Install Google Play Services on Android Studio Emulator via OpenGApps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download a Open GApps zip file from the site. ",(0,o.kt)("a",{parentName:"p",href:"http://opengapps.org/"},"http://opengapps.org/"),"\nAs of documenting, the downloaded zip is: ",(0,o.kt)("inlineCode",{parentName:"p"},"open_gapps-x86-11.0-pico-20220503.zip"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract packages."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip open_gapps-x86-11.0-pico-20220503.zip 'Core/*'\nrm Core/setup*\nlzip -d Core/*.lz\nfor f in $(ls Core/*.tar); do\ntar -x --strip-components 2 -f $f\ndone\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Start an emulator.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Android/Sdk/emulator\nemulator -avd Pixel_3a_API_31 -writable-system &\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install packages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ANDROID_HOME/platform-tools/adb remount\nANDROID_HOME/platform-tools/adb push etc /system\nANDROID_HOME/platform-tools/adb push framework /system\nANDROID_HOME/platform-tools/adb push app /system\nANDROID_HOME/platform-tools/adb push priv-app /system\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Restart.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ANDROID_HOME/platform-tools/adb shell stop\nANDROID_HOME/platform-tools/adb shell start\n")),(0,o.kt)("h2",{id:"kill-emulator"},"Kill emulator"),(0,o.kt)("p",null,"Print a list of your devices:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adb devices\n")),(0,o.kt)("p",null,"Kill it using emu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adb -s emulator-5432 emu kill\n")),(0,o.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,o.kt)("h3",{id:"cannot-open-webpage-correctly"},"Cannot open webpage correctly"),(0,o.kt)("p",null,"Starting with API level 30, Chrome uses the Vulkan graphics library as its rendering backend, and it could have\ncompatibility issues on certain machines. If Chrome does not render correctly for you, try to launch the emulator from\nthe command line with the flag -feature -Vulkan."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -avd avd_name [ {-option [value]} \u2026 ]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -avd Pixel_3a_API_31 -netdelay none -netspeed full -feature -Vulkan;\n")))}s.isMDXComponent=!0},92431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avd-config-ini-cb52bbbcc46cc7418cef32e76ea25fda.png"},94028:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/device-with-google-play-2700570665a22fb909e92f87c926c5d2.png"}}]);