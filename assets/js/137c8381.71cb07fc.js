"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[9443],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(o),h=i,y=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return o?n.createElement(y,s(s({ref:t},p),{},{components:o})):n.createElement(y,s({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,s=new Array(a);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3631:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const a={slug:"a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing",title:"A Step By Step Guide To Setting Up Your Own Pi Hole And Enjoying Ad Free Browsing",authors:["lejencodes"],tags:["raspberry-pi","pi-hole","installation","adblock","vpn"]},s=void 0,r={permalink:"/app/blog/a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing",source:"@site/blog/2022-12-14-a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing.md",title:"A Step By Step Guide To Setting Up Your Own Pi Hole And Enjoying Ad Free Browsing",description:"Intro",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"raspberry-pi",permalink:"/app/blog/tags/raspberry-pi"},{label:"pi-hole",permalink:"/app/blog/tags/pi-hole"},{label:"installation",permalink:"/app/blog/tags/installation"},{label:"adblock",permalink:"/app/blog/tags/adblock"},{label:"vpn",permalink:"/app/blog/tags/vpn"}],readingTime:6.92,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"a-step-by-step-guide-to-setting-up-your-own-pi-hole-and-enjoying-ad-free-browsing",title:"A Step By Step Guide To Setting Up Your Own Pi Hole And Enjoying Ad Free Browsing",authors:["lejencodes"],tags:["raspberry-pi","pi-hole","installation","adblock","vpn"]},prevItem:{title:"Git Submodule Command",permalink:"/app/blog/git-submodule-command"},nextItem:{title:"Attempt To Fix 404 Error Google Search Console",permalink:"/app/blog/attempt-to-fix-404-error-google-search-console"}},l={authorsImageUrls:[void 0]},u=[{value:"Intro",id:"intro",level:2},{value:"What is a Pi-Hole?",id:"what-is-a-pi-hole",level:2},{value:"Benefits of Setting Up a Pi-Hole",id:"benefits-of-setting-up-a-pi-hole",level:2},{value:"Hardware Requirements for Setting Up a Pi-Hole",id:"hardware-requirements-for-setting-up-a-pi-hole",level:2},{value:"Step-by-Step Guide to Setting Up a Pi-Hole",id:"step-by-step-guide-to-setting-up-a-pi-hole",level:2},{value:"Troubleshooting Common Issues with Pi-Hole Setup",id:"troubleshooting-common-issues-with-pi-hole-setup",level:2},{value:"Optimizing Your Pi-Hole for Maximum Performance",id:"optimizing-your-pi-hole-for-maximum-performance",level:2},{value:"Pi-Hole Alternatives",id:"pi-hole-alternatives",level:2},{value:"NoScript",id:"noscript",level:4},{value:"AdBlock Plus",id:"adblock-plus",level:4},{value:"iProxy",id:"iproxy",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Updating the Software",id:"updating-the-software",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Tired of pesky ads cluttering your web-surfing experience? Rest assured, there's a simple remedy: installing Pi-Hole.\nThis powerful tool can effectively banish those bothersome popups and ensure that you enjoy the smoothest browsing\npossible! In this guide, we'll discuss what exactly Pi Hole is - as well as its many advantages. We'll also look at all\nhardware requirements for setup before moving on to an easy step-by-step tutorial for installation. Plus, should any\nissues arise during the process, don't worry; we've got troubleshooting tips covered too! Finally, are some handy\noptimization tricks so that you get maximum results from using Pi Hole. And if it doesn\u2019t turn out to be quite your cup\nof tea after all\u2026 no worries \u2013 alternative solutions exist as well."),(0,i.kt)("h2",{id:"what-is-a-pi-hole"},"What is a Pi-Hole?"),(0,i.kt)("p",null,"A Pi-Hole is a Linux-based network-level advertisement and Internet tracker blocking application. It runs on a\nnetwork-attached computer and acts as a DNS sinkhole that filters out unwanted content. It can block ads, trackers, and\nmalicious websites from loading on all the devices connected to the network. The Pi-Hole is most commonly used on\nRaspberry Pi devices, but can also be installed on any Linux operating system."),(0,i.kt)("p",null,"The Pi-Hole works by intercepting DNS requests from the devices connected to the network and blocking them if they match\na list of known ad, tracker, and malicious websites. This means that when you browse the web, any requests sent to these\nblocked websites are automatically blocked, resulting in an ad-free browsing experience."),(0,i.kt)("h2",{id:"benefits-of-setting-up-a-pi-hole"},"Benefits of Setting Up a Pi-Hole"),(0,i.kt)("p",null,"Setting up a Pi-Hole offers several advantages. The most obvious one is that it can keep ads from appearing on any\ndevices connected to your network, allowing you to have an ad-free browsing experience without having to install and run\nany blocking plugins or extensions in your browser."),(0,i.kt)("p",null,"Moreover, this also enhances privacy protection by halting trackers and malicious websites, thereby decreasing the\namount of data accumulated about you online for greater security while surfing the web."),(0,i.kt)("p",null,"Besides these benefits,\ninstalling a Pi-Hole increases internet speed due to its capability of eliminating unnecessary information sent through\nnetworks, thus resulting in faster connections!"),(0,i.kt)("h2",{id:"hardware-requirements-for-setting-up-a-pi-hole"},"Hardware Requirements for Setting Up a Pi-Hole"),(0,i.kt)("p",null,"Before you can set up a Pi-Hole, you'll need to make sure that you have the right hardware. The most common hardware\nused for a Pi-Hole is a Raspberry Pi. However, you can also use any Linux-based operating system on a computer or\nserver."),(0,i.kt)("p",null,"If you're using a Raspberry Pi, you'll need to make sure that it has an Ethernet port, which is needed for the Pi-Hole\ninstallation. You'll also need to make sure that you have a power adapter and a microSD card with at least 8GB of\nstorage."),(0,i.kt)("h2",{id:"step-by-step-guide-to-setting-up-a-pi-hole"},"Step-by-Step Guide to Setting Up a Pi-Hole"),(0,i.kt)("p",null,"Once you have the hardware ready, you can start the process of setting up a Pi-Hole. The first step is to download the\nPi-Hole software. You can download it from the official website (",(0,i.kt)("a",{parentName:"p",href:"https://pi-hole.net/"},"https://pi-hole.net/"),")."),(0,i.kt)("p",null,"After that, you'll need to install the software on your Raspberry Pi or Linux-based computer. The installation process\nis relatively simple and can be done using the command-line interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo curl -sSL https://install.pi-hole.net | bash\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O basic-install.sh https://install.pi-hole.net\nsudo bash basic-install.sh\n")),(0,i.kt)("p",null,"Once the installation is complete, you'll need to configure the Pi-Hole to block ads, trackers, and malicious websites.\nYou can do this by adding the relevant domains to the blocklist. You can find the blocklist on the Pi-Hole website."),(0,i.kt)("p",null,"Once the blocklist is configured, you'll need to configure your network settings to use the Pi-Hole as the DNS server.\nThis can be done by changing the DNS server address in your network settings."),(0,i.kt)("p",null,"Once the DNS server address is changed, you'll need to restart your router to apply the changes. Once the router is\nrestarted, all the devices connected to the network will start using the Pi-Hole as their DNS server."),(0,i.kt)("h2",{id:"troubleshooting-common-issues-with-pi-hole-setup"},"Troubleshooting Common Issues with Pi-Hole Setup"),(0,i.kt)("p",null,"Sometimes, you might encounter some issues while setting up a Pi-Hole. One of the most common issues is that the Pi-Hole\ndoesn't seem to be blocking any ads or trackers. This is usually because the blocklist is not configured correctly. To\nfix this, make sure that the correct domains are added to the blocklist."),(0,i.kt)("p",null,"Another common issue is that the Pi-Hole seems to be blocking all websites. This is usually because the DNS server\naddress is not configured correctly. To fix this, make sure that the correct DNS server address is set in the network\nsettings."),(0,i.kt)("h2",{id:"optimizing-your-pi-hole-for-maximum-performance"},"Optimizing Your Pi-Hole for Maximum Performance"),(0,i.kt)("p",null,"Once you've set up your Pi-Hole, you can optimize it for maximum performance. One way to do this is to enable the\nPi-Hole's built-in caching. This will help to reduce the amount of data being sent over the network, resulting in faster\nspeeds."),(0,i.kt)("p",null,"You can also reduce the size of the blocklist to improve performance. The blocklist can get quite large over time, so\nit's a good idea to keep an eye on it and remove any unnecessary domains."),(0,i.kt)("p",null,"Finally, you can also configure the Pi-Hole to only block the domains that you don't want to see. This will help to\nreduce the amount of data being sent over the network, resulting in faster speeds."),(0,i.kt)("h2",{id:"pi-hole-alternatives"},"Pi-Hole Alternatives"),(0,i.kt)("p",null,"If you don't want to set up a Pi-Hole, there are other alternatives available. One option is to use a browser extension\nor plugin to block ads. These extensions and plugins can be installed on your browser and will block ads from all the\nwebsites you visit."),(0,i.kt)("p",null,"Another option is to use a VPN. VPNs are a great way to protect your privacy and can also help to block ads. The\ndownside is that they can be a bit slow, so you might want to try a different solution if speed is of the utmost\nimportance."),(0,i.kt)("p",null,"Finally, you can also use a DNS-level blocker, such as OpenDNS. Unlike a Pi-Hole, these DNS-level blockers are hosted on\na remote server, so you don't need to set up any hardware. They're also easy to configure and can be used to block ads,\ntrackers, and malicious websites."),(0,i.kt)("h4",{id:"noscript"},"NoScript"),(0,i.kt)("p",null,"NoScript \u2013 NoScript is an extension for Firefox and Chrome that allows you to block requests for scripts or plug-ins\nfrom third party websites by default. This can help you avoid some ads and trackers on websites, which may cause\nproblems with high quality video streaming sites like YouTube or Netflix."),(0,i.kt)("h4",{id:"adblock-plus"},"AdBlock Plus"),(0,i.kt)("p",null,"AdBlock Plus \u2013 AdBlock Plus is a popular ad blocker that can be used on Android devices as well as desktop computers and\nMacs. It has many filtering options and can also block ads in third party apps such as Facebook Messenger or Slack when\nthey're opened in incognito mode (private browsing)."),(0,i.kt)("h4",{id:"iproxy"},"iProxy"),(0,i.kt)("p",null,"iProxy - iProxy is a free DNS proxy that can be used on its own or combined with Pi-Hole. It allows you to specify your\nown DNS servers and customizes the Internet experience for you by blocking ads and trackers."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Setting up a Pi-Hole is a great way to enjoy an ad-free browsing experience. It can also help to protect your privacy\nand speed up your internet connection. In this article, we've taken a look at the hardware requirements for setting up a\nPi-Hole, followed by a step-by-step guide to setting up a Pi-Hole. We've also discussed some common issues you might\nface while setting up a Pi-Hole and how to troubleshoot them. We've also discussed some optimization tips to get the\nmost out of your Pi-Hole. Finally, we've taken a look at some Pi-Hole alternatives available."),(0,i.kt)("p",null,"So, if you're fed up with seeing ads pop up when you're browsing the web, setting up a Pi-Hole is the perfect solution.\nIt's easy to set up, and once it's running, you can enjoy an ad-free browsing experience. So, what are you waiting for?\nGo set up your Pi-Hole now and start enjoying an ad-free internet!"),(0,i.kt)("h2",{id:"updating-the-software"},"Updating the Software"),(0,i.kt)("p",null,"The other thing you need to update is the software.\nPi-Hole is releasing updates and fixes regularly, so you need to update it."),(0,i.kt)("p",null,"To do this, the procedure is simple:"),(0,i.kt)("p",null,"Connect to your Raspberry Pi via SSH.\nType this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo pihole -up\n")))}c.isMDXComponent=!0}}]);