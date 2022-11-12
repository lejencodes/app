"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[6905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={tags:["Docker"]},i="Docker",l={unversionedId:"Dev Notes/Tools/Docker",id:"Dev Notes/Tools/Docker",title:"Docker",description:"Purging All Unused or Dangling Images, Containers, Volumes, and Networks",source:"@site/docs/Dev Notes/Tools/Docker.md",sourceDirName:"Dev Notes/Tools",slug:"/Dev Notes/Tools/Docker",permalink:"/docs/Dev Notes/Tools/Docker",draft:!1,tags:[{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"Bash Alias",permalink:"/docs/Dev Notes/Tools/Bash-Alias"},next:{title:"Git Multiple Repo",permalink:"/docs/Dev Notes/Tools/Git-Multiple-Repo"}},m={},s=[{value:"Purging All Unused or Dangling Images, Containers, Volumes, and Networks",id:"purging-all-unused-or-dangling-images-containers-volumes-and-networks",level:2},{value:"Removing Docker Images",id:"removing-docker-images",level:2},{value:"Remove one or more specific images",id:"remove-one-or-more-specific-images",level:3},{value:"Remove dangling images",id:"remove-dangling-images",level:3},{value:"Removing images according to a pattern",id:"removing-images-according-to-a-pattern",level:3},{value:"Remove all images",id:"remove-all-images",level:3},{value:"Removing Containers",id:"removing-containers",level:2},{value:"Remove one or more specific containers",id:"remove-one-or-more-specific-containers",level:3},{value:"Remove a container upon exiting",id:"remove-a-container-upon-exiting",level:3},{value:"Remove all exited containers",id:"remove-all-exited-containers",level:3},{value:"Remove containers using more than one filter",id:"remove-containers-using-more-than-one-filter",level:3},{value:"Remove containers according to a pattern",id:"remove-containers-according-to-a-pattern",level:3},{value:"Stop and remove all containers",id:"stop-and-remove-all-containers",level:3},{value:"Removing Volumes",id:"removing-volumes",level:2},{value:"Remove one or more specific volumes - Docker 1.9 and later",id:"remove-one-or-more-specific-volumes---docker-19-and-later",level:3},{value:"Remove dangling volumes - Docker 1.9 and later",id:"remove-dangling-volumes---docker-19-and-later",level:3},{value:"Remove a container and its volume",id:"remove-a-container-and-its-volume",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h2",{id:"purging-all-unused-or-dangling-images-containers-volumes-and-networks"},"Purging All Unused or Dangling Images, Containers, Volumes, and Networks"),(0,o.kt)("p",null,"Docker provides a single command that will clean up any resources \u2014 images, containers, volumes, and networks \u2014 that\nare ",(0,o.kt)("em",{parentName:"p"},"dangling")," (not tagged or associated with a container):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune\n")),(0,o.kt)("p",null,"To additionally remove any stopped containers and all unused images (not just dangling images), add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," flag to the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune -a\n")),(0,o.kt)("h2",{id:"removing-docker-images"},"Removing Docker Images"),(0,o.kt)("h3",{id:"remove-one-or-more-specific-images"},"Remove one or more specific images"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker images")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," flag to locate the ID of the images you want to remove. This will show you\nevery image, including intermediate image layers. When you\u2019ve located the images you want to delete, you can pass their\nID or tag to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rmi"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images -a\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rmi Image Image\n")),(0,o.kt)("h3",{id:"remove-dangling-images"},"Remove dangling images"),(0,o.kt)("p",null,"Docker images consist of multiple layers. Dangling images are layers that have no relationship to any tagged images.\nThey no longer serve a purpose and consume disk space. They can be located by adding the filter flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," with a value\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"dangling=true")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker images")," command. When you\u2019re sure you want to delete them, you can use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"docker image prune")," command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you build an image without tagging it, the image will appear on the list of dangling images because it has\nno association with a tagged image. You can avoid this situation\nby ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/build/#/tag-image--t"},"providing a tag")," when you build, and you\ncan retroactively tag an image with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/tag/"},(0,o.kt)("inlineCode",{parentName:"a"},"docker tag")),"\ncommand."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images -f dangling=true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image prune\n")),(0,o.kt)("h3",{id:"removing-images-according-to-a-pattern"},"Removing images according to a pattern"),(0,o.kt)("p",null,"You can find all the images that match a pattern using a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker images"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/using-grep-regular-expressions-to-search-for-text-patterns-in-linux"},(0,o.kt)("inlineCode",{parentName:"a"},"grep")),"\n. Once you\u2019re satisfied, you can delete them by\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-the-awk-language-to-manipulate-text-in-linux"},(0,o.kt)("inlineCode",{parentName:"a"},"awk")),"\nto pass the IDs to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rmi"),". Note that these utilities are not supplied by Docker and are not necessarily available\non all systems:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker images -a |  grep "pattern"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images -a | grep \"pattern\" | awk '{print $3}' | xargs docker rmi\n")),(0,o.kt)("h3",{id:"remove-all-images"},"Remove all images"),(0,o.kt)("p",null,"All the Docker images on a system can be listed by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker images")," command. Once you\u2019re sure you want\nto delete them all, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-q")," flag to pass the image ID to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rmi"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker images -a\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rmi $(docker images -a -q)\n")),(0,o.kt)("h2",{id:"removing-containers"},"Removing Containers"),(0,o.kt)("h3",{id:"remove-one-or-more-specific-containers"},"Remove one or more specific containers"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," flag to locate the name or ID of the containers you want to remove:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm ID_or_Name ID_or_Name\n")),(0,o.kt)("h3",{id:"remove-a-container-upon-exiting"},"Remove a container upon exiting"),(0,o.kt)("p",null,"If you know when you\u2019re creating a container that you won\u2019t want to keep it around once you\u2019re done, you can\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run --rm")," to automatically delete it when it exits:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run and Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm image_name\n")),(0,o.kt)("h3",{id:"remove-all-exited-containers"},"Remove all exited containers"),(0,o.kt)("p",null,"You can locate containers using ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a")," and filter them by their status: ",(0,o.kt)("inlineCode",{parentName:"p"},"created"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"restarting"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),"\n, ",(0,o.kt)("inlineCode",{parentName:"p"},"paused"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"exited"),". To review the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"exited")," containers, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag to filter based on status. When\nyou\u2019ve verified you want to remove those containers, use ",(0,o.kt)("inlineCode",{parentName:"p"},"-q")," to pass the IDs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rm")," command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a -f status=exited\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm $(docker ps -a -f status=exited -q)\n")),(0,o.kt)("h3",{id:"remove-containers-using-more-than-one-filter"},"Remove containers using more than one filter"),(0,o.kt)("p",null,"Docker filters can be combined by repeating the filter flag with an additional value. This results in a list of\ncontainers that meet either condition. For example, if you want to delete all containers marked as either ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," (a\nstate which can result when you run a container with an invalid command) or ",(0,o.kt)("inlineCode",{parentName:"p"},"exited"),", you can use two filters:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a -f status=exited -f status=created\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm $(docker ps -a -f status=exited -f status=created -q)\n")),(0,o.kt)("h3",{id:"remove-containers-according-to-a-pattern"},"Remove containers according to a pattern"),(0,o.kt)("p",null,"You can find all the containers that match a pattern using a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/using-grep-regular-expressions-to-search-for-text-patterns-in-linux"},(0,o.kt)("inlineCode",{parentName:"a"},"grep")),"\n. When you\u2019re satisfied that you have the list you want to delete, you can\nuse ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-the-awk-language-to-manipulate-text-in-linux"},(0,o.kt)("inlineCode",{parentName:"a"},"awk")),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"xargs")," to supply the ID to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rm"),". Note that these utilities are not supplied by Docker and are not\nnecessarily available on all systems:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker ps -a |  grep "pattern\u201d\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a | grep \"pattern\" | awk '{print $1}' | xargs docker rm\n")),(0,o.kt)("h3",{id:"stop-and-remove-all-containers"},"Stop and remove all containers"),(0,o.kt)("p",null,"You can review the containers on your system with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". Adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"-a")," flag will show all containers. When\nyou\u2019re sure you want to delete them, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-q")," flag to supply the IDs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker rm"),"\ncommands:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps -a\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop $(docker ps -a -q)\ndocker rm $(docker ps -a -q)\n")),(0,o.kt)("h2",{id:"removing-volumes"},"Removing Volumes"),(0,o.kt)("h3",{id:"remove-one-or-more-specific-volumes---docker-19-and-later"},"Remove one or more specific volumes - Docker 1.9 and later"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume ls")," command to locate the volume name or names you wish to delete. Then you can remove one or\nmore volumes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume rm")," command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume ls\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume rm volume_name volume_name\n")),(0,o.kt)("h3",{id:"remove-dangling-volumes---docker-19-and-later"},"Remove dangling volumes - Docker 1.9 and later"),(0,o.kt)("p",null,"Since the point of volumes is to exist independent from containers, when a container is removed, a volume is not\nautomatically removed at the same time. When a volume exists and is no longer connected to any containers, it\u2019s called\na ",(0,o.kt)("em",{parentName:"p"},"dangling volume"),". To locate them to confirm you want to remove them, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume ls")," command with\na filter to limit the results to dangling volumes. When you\u2019re satisfied with the list, you can remove them all\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume prune"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume ls -f dangling=true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume prune\n")),(0,o.kt)("h3",{id:"remove-a-container-and-its-volume"},"Remove a container and its volume"),(0,o.kt)("p",null,"If you created an unnamed volume, it can be deleted at the same time as the container with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag. Note that this\nonly works with ",(0,o.kt)("em",{parentName:"p"},"unnamed")," volumes. When the container is successfully removed, its ID is displayed. Note that no\nreference is made to the removal of the volume. If it is unnamed, it is silently removed from the system. If it is\nnamed, it silently stays present."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remove:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker rm -v container_name\n")))}c.isMDXComponent=!0}}]);