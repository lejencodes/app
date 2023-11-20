"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[7809],{15748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const o={slug:"using-ssh-agent-with-visual-studio-code-on-windows-10",title:"Using ssh-agent with Visual Studio Code on Windows 10",authors:["lejencodes"],tags:["ssh-agent","ssh","ssh-key","vscode","windows"]},a=void 0,r={permalink:"/app/blog/using-ssh-agent-with-visual-studio-code-on-windows-10",source:"@site/blog/2022-04-10-using-ssh-agent-with-visual-studio-code-on-windows-10.md",title:"Using ssh-agent with Visual Studio Code on Windows 10",description:"Enable the ssh-agent service",date:"2022-04-10T00:00:00.000Z",formattedDate:"April 10, 2022",tags:[{label:"ssh-agent",permalink:"/app/blog/tags/ssh-agent"},{label:"ssh",permalink:"/app/blog/tags/ssh"},{label:"ssh-key",permalink:"/app/blog/tags/ssh-key"},{label:"vscode",permalink:"/app/blog/tags/vscode"},{label:"windows",permalink:"/app/blog/tags/windows"}],readingTime:7.745,hasTruncateMarker:!1,authors:[{name:"Lejen",title:"Just a person",url:"https://lejencodes.com",imageURL:"https://github.com/lejencodes.png",key:"lejencodes"}],frontMatter:{slug:"using-ssh-agent-with-visual-studio-code-on-windows-10",title:"Using ssh-agent with Visual Studio Code on Windows 10",authors:["lejencodes"],tags:["ssh-agent","ssh","ssh-key","vscode","windows"]},unlisted:!1,prevItem:{title:"Python Refactoring",permalink:"/app/blog/python-refactoring"},nextItem:{title:"Make another branch as master",permalink:"/app/blog/make-another-branch-as-master"}},l={authorsImageUrls:[void 0]},d=[{value:"Enable the ssh-agent service",id:"enable-the-ssh-agent-service",level:3},{value:"Adding ssh keys",id:"adding-ssh-keys",level:3},{value:"Add a ssh key",id:"add-a-ssh-key",level:3},{value:"Step 0. Install Required Software",id:"step-0-install-required-software",level:2},{value:"Step 1. Setup Private Keys",id:"step-1-setup-private-keys",level:2},{value:"Step 2. Set up SSH Agent",id:"step-2-set-up-ssh-agent",level:2},{value:"Step 3. Add SSH Server Fingerprints",id:"step-3-add-ssh-server-fingerprints",level:2},{value:"Step 4. Configure Environment Variables",id:"step-4-configure-environment-variables",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"enable-the-ssh-agent-service",children:"Enable the ssh-agent service"}),"\n",(0,t.jsx)(n.p,{children:"To enable SSH Agent automatically on Windows, start PowerShell as an Administrator and run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Make sure you're running as an Administrator\nSet-Service ssh-agent -StartupType Automatic\nStart-Service ssh-agent\nGet-Service ssh-agent\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adding-ssh-keys",children:"Adding ssh keys"}),"\n",(0,t.jsx)(n.p,{children:"Run these commands in a terminal window within Visual Studio Code."}),"\n",(0,t.jsx)(n.p,{children:"Show keys managed by the ssh-agent"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh-add -l\n"})}),"\n",(0,t.jsx)(n.h3,{id:"add-a-ssh-key",children:"Add a ssh key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh-add\n"})}),"\n",(0,t.jsx)(n.p,{children:"For git, add a system environment variable or use a temporary setting in a PowerShell terminal of VSCode."}),"\n",(0,t.jsxs)(n.p,{children:["$env",":GIT_SSH",'="C:\\Windows\\System32\\OpenSSH\\ssh.exe"']}),"\n",(0,t.jsxs)(n.p,{children:["If you add the line ",(0,t.jsx)(n.code,{children:'$env:GIT_SSH="C:\\Windows\\System32\\OpenSSH\\ssh.exe"'})," to your Powershell profile the environment\nvariable will always be used."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cgranade.com/blog/2016/06/06/ssh-keys-in-vscode.html",children:"https://www.cgranade.com/blog/2016/06/06/ssh-keys-in-vscode.html"})}),"\n",(0,t.jsx)(n.h1,{id:"using-ssh-keys-in-visual-studio-code-on-windows",children:"Using SSH Keys in Visual Studio Code on Windows"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," is\nMicrosoft\u2019s ",(0,t.jsx)(n.a,{href:"https://github.com/Microsoft/vscode/blob/master/LICENSE.txt",children:"open-source"})," code editor for Windows, OS X and\nLinux. Nicely, VS Code has built-in support for Git and support for Python\nthrough ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=donjayamanne.python",children:"an extension"}),", making it a useful for\nscientific development. Using VS Code on Windows is somewhat frustrated, however, if you want to work with a Git\nrepository that was cloned using SSH. Thankfully, I found a workable solution using PuTTY and Git for Windows, such that\nVS Code transparently works with password-protected SSH keys. Below, I detailed how I got it working in as complete a\ndetail as reasonable, but you may have already done some or even many of these steps. If so, the procedure is actually\nfairly simple, and consists of pointing Git (and hence VS Code) to use PuTTY and Pageant instead of the SSH version that\nships with Git for Windows."]}),"\n",(0,t.jsx)(n.p,{children:"First, though, a disclaimer. These steps worked on my Windows 10 installation, but may not work on yours. If you find\nthat this is the case, let me know, and I\u2019ll try and update accordingly."}),"\n",(0,t.jsx)(n.h2,{id:"step-0-install-required-software",children:"Step 0. Install Required Software"}),"\n",(0,t.jsx)(n.p,{children:"Before we get into things, we\u2019ll need a bit of software. In particular, we\u2019ll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/",children:"PuTTY"})," as a native-Windows SSH client and agent,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://git-scm.com/download/win",children:"Git for Windows"})," to use Git from PowerShell and VS Code, and"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/PowerShell/Win32-OpenSSH",children:"OpenSSH for Windows"})," to generate SSH keys in the first place."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Do not install PuTTY from its official homepage, as this will download PuTTY over an insecure\nconnection. This guide will cover how to download PuTTY securely."}),(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["For much of this, we can use the ",(0,t.jsx)(n.a,{href:"https://chocolatey.org/",children:"Chocolatey package manager"})," for Windows to save some grief,\nso\nlet\u2019s start by installing that. If you already have Chocolatey, please skip this step. (If you aren\u2019t sure, try\nrunning ",(0,t.jsx)(n.code,{children:"choco"})," from PowerShell.) Run PowerShell as administrator, then run the following command to download and\ninstall\nChocolatey:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"PS> Set-ExecutionPolicy -Scope Process RemoteSigned\nPS> iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex\n"})}),(0,t.jsxs)(n.p,{children:["Once this is done, close and reopen PowerShell (again as administrator). This will make ",(0,t.jsx)(n.code,{children:"choco"})," available as a command.\nNow we can use it to install Git and OpenSSH (as above, we will ",(0,t.jsx)(n.em,{children:"not"})," install PuTTY using Chocolatey, as it will\ndownload\nPuTTY from its official homepage using an insecure connection). Run the following PowerShell commands to install Git and\nOpenSSH:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"PS> choco install git\nPS> choco install win32-openssh\n"})}),(0,t.jsxs)(n.p,{children:["We\u2019ll finish up by downloading the version of PuTTY that ships with ",(0,t.jsx)(n.a,{href:"https://winscp.net/",children:"WinSCP"}),", since that version is\ndelivered via HTTPS and not insecure HTTP. In particular,\nuse ",(0,t.jsx)(n.a,{href:"https://winscp.net/download/putty-0.67-installer.exe",children:"this link"})," to download PuTTY, then run the installer once\nyou\u2019ve downloaded it."]}),(0,t.jsx)(n.h2,{id:"step-1-setup-private-keys",children:"Step 1. Setup Private Keys"}),(0,t.jsx)(n.p,{children:"Once everything is installed, we now need to make sure that you have an SSH private key and that this key is registered\nwith your Git hosting service (for instance, GitHub or Bitbucket). If you already have keys and have registered them\nwith your hosting provider, please skip on ahead."}),(0,t.jsx)(n.p,{children:"In any case, to generate keys, we\u2019ll again use PowerShell:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-keygen\n"})}),(0,t.jsxs)(n.p,{children:["Simply follow the prompts to make yourself a new public/private key pair, making sure to choose a long (~40 character)\npassphrase. This passphrase provides much of the entropy for your key, such that it should be much longer than a typical\npassword. ",(0,t.jsx)(n.strong,{children:"Never"})," type your passphrase into a remote password prompt\u2014 the passphrase is used to unlock your key\nlocally\non your machine, and should ",(0,t.jsx)(n.strong,{children:"never"})," be sent over the network. If a website asks you for your SSH passphrase, you are\nprobably being scammed."]}),(0,t.jsxs)(n.p,{children:["By default, the new keys will be located in ",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\.ssh\\id_rsa"}),"and",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\.ssh\\id_rsa.pub"}),".\nAs\nthe names suggest, the first of these is the",(0,t.jsx)(n.em,{children:"private"}),"key and should not be shared with anyone. The other is the public\nkey, and serves to identify yourself to others. Follow the instructions\nfor ",(0,t.jsx)(n.a,{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",children:"GitHub"}),"\nor ",(0,t.jsx)(n.a,{href:"https://confluence.atlassian.com/bitbucket/add-an-ssh-key-to-an-account-302811853.html",children:"Bitbucket"})," (for Bitbucket,\nmake sure to follow the Linux and OS X instructions, even from Windows) to upload your",(0,t.jsx)(n.em,{children:"public"}),"key to your hosting\nprovider."]}),(0,t.jsx)(n.h2,{id:"step-2-set-up-ssh-agent",children:"Step 2. Set up SSH Agent"}),(0,t.jsx)(n.p,{children:"Next, we\u2019ll make sure that your private key is setup in an SSH agent. This will securely remember your passphrase within\na given session, so that you don\u2019t have to type it in every time you use it. In particular, we\u2019ll configure Pageant,\nsince this is installed with PuTTY, and works well with a variety of command-line and GUI tools for Windows\u2014 most\nnotably, with VS Code."}),(0,t.jsxs)(n.p,{children:["Pageant must be run at startup in order to be useful, so we\u2019ll begin by adding it to the startup folder now. In Windows\nExplorer (Windows 8.1 and earlier) or in File Explorer (Windows 10 and later), go to the\nfolder ",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"}),". Right-click inside this\nfolder and select ",(0,t.jsx)(n.code,{children:"New \u2192 Shortcut"}),". From there, browse to ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\PuTTY"})," and select ",(0,t.jsx)(n.code,{children:"pageant.exe"}),"."]}),(0,t.jsx)(n.p,{children:"Next, we need to import your new key into PuTTY/Pageant."}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run PuTTYgen from the Start Menu and select ",(0,t.jsx)(n.code,{children:"File \u2192 Load Key..."}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["From there, navigate to ",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\.ssh\\"})," and select ",(0,t.jsx)(n.code,{children:"id_rsa"})," (the private key). You may have to drop down\nthe\nfile types selector in the dialog box to see this, as PuTTYgen defaults to filtering out everything but files ending\nin ",(0,t.jsx)(n.code,{children:"*.ppk"}),". Once selected, you\u2019ll be prompted by PuTTY to unlock your key by typing in your passphrase. Do so, and\nPuTTYgen will show the corresponding public key."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"File \u2192 Save private key"})," to export your private key in PuTTY, rather than OpenSSH, format. I suggest saving\nit\nas ",(0,t.jsx)(n.code,{children:"id_rsa.ppk"})," in the same folder as ",(0,t.jsx)(n.code,{children:"id_rsa"}),", but this is up to you. Just be sure that to save it in a folder that\nonly you can read, and that is not synchronized using Dropbox, OneDrive, Google Drive or similar."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Finally, run Pageant from the Start Menu (in the future, this will be handled automatically by the shortcut we created\nabove). This will add a new icon to your system tray. It may be hidden by the arrow; if so, click the arrow to make all\nfo the system tray icons visible. Right-click on Pageant and select ",(0,t.jsx)(n.code,{children:"Add Key"}),". Browse to where you saved ",(0,t.jsx)(n.code,{children:"id_rsa.ppk"}),"\nand\nselect it. You\u2019ll be prompted to unlock your key. Upon doing so, your unlocked key will then be made available in\nPageant until you log out or quit Pageant."]}),(0,t.jsx)(n.h2,{id:"step-3-add-ssh-server-fingerprints",children:"Step 3. Add SSH Server Fingerprints"}),(0,t.jsx)(n.p,{children:"Despite the name, this is a short step. Whenever you log into an SSH server, PuTTY will check that the server\u2019s *\nfingerprint* is correct. This is a short cryptographic string identifying that server, such that checking the\nfingerprint\nhelps against man-in-the-middle attacks. If you haven\u2019t logged into a server with PuTTY before, however, it has no idea\nhow to check the fingerprint, and will fail to login. Since VS Code ignores these errors, Git support will silently fail\nunless you first attempt to log into the SSH server offered by your Git host. To do so, we\u2019ll use PowerShell one last\ntime. Run one of the following commands below, depending on which hosting provider you use."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PS > & 'C:\\Program Files (x86)\\PuTTY\\plink.exe' git@github.com\nPS > & 'C:\\Program Files (x86)\\PuTTY\\plink.exe' git@bitbucket.org\n"})}),(0,t.jsxs)(n.p,{children:["In either case, you\u2019ll be prompted to add the server\u2019s fingerprint to the registry. If you are confident that your\ntraffic is not being intercepted, select",(0,t.jsx)(n.code,{children:"y"}),"at this prompt. Neither GitHub nor Bitbucket actually allows logins via SSH,\nso you\u2019ll get an error, but this is OK: you\u2019ve gotten far enough to see the server\u2019s fingerprint, and that\u2019s all we\nneeded. To check, you can run the commands above again, and note that you are no longer prompted to add the fingerprint,\nbut instead fail immediately."]}),(0,t.jsx)(n.h2,{id:"step-4-configure-environment-variables",children:"Step 4. Configure Environment Variables"}),(0,t.jsx)(n.p,{children:"We\u2019re almost done. All that\u2019s left is to point Git for Windows at PuTTY and Pageant, rather than its own built-in SSH\nclient. Since VS Code uses Git for Windows, this will ensure that VS Code does what we want."}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Right-click on ",(0,t.jsx)(n.code,{children:"My Computer"})," or ",(0,t.jsx)(n.code,{children:"This PC"})," in Windows/File Explorer, and select ",(0,t.jsx)(n.code,{children:"Properties"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["From there, click ",(0,t.jsx)(n.code,{children:"Advanced system settings"})," in the sidebar to the left. On the ",(0,t.jsx)(n.code,{children:"Advanced"})," tab, press\nthe ",(0,t.jsx)(n.code,{children:"Environment Variables..."})," button at the bottom."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, click ",(0,t.jsx)(n.code,{children:"New..."})," on the user variables pane (top), and add a new variable named ",(0,t.jsx)(n.code,{children:"GIT_SSH"})," with\nvalue ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\PuTTY\\plink.exe"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You may want to use ",(0,t.jsx)(n.code,{children:"Browse File..."})," in this dialog box to make sure you get the path correct."]}),"\n",(0,t.jsxs)(n.li,{children:["Once done, press ",(0,t.jsx)(n.code,{children:"OK"})," to add the variable,",(0,t.jsx)(n.code,{children:"OK"})," again to close the Environment Variables dialog, then ",(0,t.jsx)(n.code,{children:"OK"})," a third\ntime to\nclose System Properties."]}),"\n",(0,t.jsx)(n.li,{children:"Finally, close the System window."}),"\n"]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(67294);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);