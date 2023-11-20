"use strict";(self.webpackChunkapp_src=self.webpackChunkapp_src||[]).push([[2088],{77937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(85893),s=t(11151);const r={id:"generate-self-signing-cert",title:"Generate Self Signing Cert",description:"Generate Self Signing Cert",tags:["cert","bitwarden","vaultwarden"]},a=void 0,i={id:"homelab/generate-self-signing-cert",title:"Generate Self Signing Cert",description:"Generate Self Signing Cert",source:"@site/docs/homelab/generate-self-signing-cert.md",sourceDirName:"homelab",slug:"/homelab/generate-self-signing-cert",permalink:"/app/docs/homelab/generate-self-signing-cert",draft:!1,unlisted:!1,tags:[{label:"cert",permalink:"/app/docs/tags/cert"},{label:"bitwarden",permalink:"/app/docs/tags/bitwarden"},{label:"vaultwarden",permalink:"/app/docs/tags/vaultwarden"}],version:"current",frontMatter:{id:"generate-self-signing-cert",title:"Generate Self Signing Cert",description:"Generate Self Signing Cert",tags:["cert","bitwarden","vaultwarden"]},sidebar:"docsSidebar",previous:{title:"Ansible Playbook",permalink:"/app/docs/homelab/ansible-playbook"},next:{title:"idea-machine",permalink:"/app/docs/idea-machine"}},d={},c=[{value:"1. Check Logs",id:"1-check-logs",level:3},{value:"2. Restart Nginx",id:"2-restart-nginx",level:3},{value:"3. Check Port Listening",id:"3-check-port-listening",level:3},{value:"4. Modify <code>vaultwarden.env</code>",id:"4-modify-vaultwardenenv",level:3},{value:"5. Install Prerequisites",id:"5-install-prerequisites",level:3},{value:"6. Install GPG key",id:"6-install-gpg-key",level:3},{value:"7. Install Repository",id:"7-install-repository",level:3},{value:"8. Install Docker",id:"8-install-docker",level:3},{value:"9. Enable at boot and start Docker daemon",id:"9-enable-at-boot-and-start-docker-daemon",level:3},{value:"10. Docker Compose",id:"10-docker-compose",level:3},{value:"11. Add SSL Certificate",id:"11-add-ssl-certificate",level:3},{value:"12. Edit lighttpd.conf",id:"12-edit-lighttpdconf",level:3},{value:"13. Pihole /admin/ Fix",id:"13-pihole-admin-fix",level:3},{value:"14. Custom MOTD",id:"14-custom-motd",level:3},{value:"15. Renew Let&#39;s Encrypt",id:"15-renew-lets-encrypt",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'version: "3.9"\nservices:\n  vaultwarden:\n    image: vaultwarden/server:latest\n    restart: unless-stopped\n    volumes:\n      - /mnt/dietpi_userdata/vaultwarden/data:/data\n    ports:\n      - "8060:80"\n      - "3012:3012"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"1-check-logs",children:"1. Check Logs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"journalctl -u vaultwarden.service\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2-restart-nginx",children:"2. Restart Nginx"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl restart nginx.service\n"})}),"\n",(0,l.jsx)(n.h3,{id:"3-check-port-listening",children:"3. Check Port Listening"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ss -tulpn | grep LISTEN\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"4-modify-vaultwardenenv",children:["4. Modify ",(0,l.jsx)(n.code,{children:"vaultwarden.env"})]}),"\n",(0,l.jsxs)(n.p,{children:["On RPi 2, open the ",(0,l.jsx)(n.code,{children:"vaultwarden.env"})," file using the nano editor:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"nano /mnt/dietpi_userdata/vaultwarden/vaultwarden.env\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Disable TLS by commenting out the ",(0,l.jsx)(n.code,{children:"ROCKET_TLS"})," line:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'#ROCKET_TLS={certs="./cert.pem",key="./privkey.pem"}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Enable websocket notifications by adding the following lines:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"WEBSOCKET_ENABLED=true\nWEBSOCKET_ADDRESS=0.0.0.0\nWEBSOCKET_PORT=3012\n"})}),"\n",(0,l.jsx)(n.p,{children:"Save the file."}),"\n",(0,l.jsxs)(n.p,{children:["Restart the ",(0,l.jsx)(n.code,{children:"vaultwarden"})," service:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl restart vaultwarden.service\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"vaultwarden"})," is now reachable on HTTP. ROCKET_PORT and ROCKET_TLS are the parameters used to specify HTTP/S port + SSL\ncertificate used by vaultwarden to enable SSL access. If you have any questions about these parameters, you might need\nto reach out to the vaultwarden developer for a deeper explanation."]}),"\n",(0,l.jsx)(n.h3,{id:"5-install-prerequisites",children:"5. Install Prerequisites"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo apt -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common\n"})}),"\n",(0,l.jsx)(n.h3,{id:"6-install-gpg-key",children:"6. Install GPG key"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo mkdir -p /etc/apt/keyrings && curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n"})}),"\n",(0,l.jsx)(n.h3,{id:"7-install-repository",children:"7. Install Repository"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n'})}),"\n",(0,l.jsx)(n.h3,{id:"8-install-docker",children:"8. Install Docker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n"})}),"\n",(0,l.jsx)(n.h3,{id:"9-enable-at-boot-and-start-docker-daemon",children:"9. Enable at boot and start Docker daemon"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo systemctl enable docker\nsudo systemctl start docker\n"})}),"\n",(0,l.jsx)(n.h3,{id:"10-docker-compose",children:"10. Docker Compose"}),"\n",(0,l.jsxs)(n.p,{children:["Create a ",(0,l.jsx)(n.code,{children:"docker-compose.yml"})," file with the following content:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  nginx-proxy-manager:\n  image: jc21/nginx-proxy-manager:latest\n  container_name: nginx-proxy-manager\n  ports:\n    - 80:80\n    - 81:81\n    - 443:443\n  volumes:\n    - ./nginx/data:/data\n    - ./nginx/letsencrypt:/etc/letsencrypt\n  restart: unless-stopped\n  jellyfin:\n  image: lscr.io/linuxserver/jellyfin:latest\n  container_name: jellyfin\n  environment:\n    - PUID=1000\n    - PGID=1000\n    - TZ=Asia/Singapore\n  volumes:\n    - ./jellyfin/config:/config\n    - ./jellyfin/cache:/cache\n    - ./jellyfin/media:/media\n  restart: unless-stopped\n'})}),"\n",(0,l.jsx)(n.p,{children:"Run Docker Compose:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,l.jsx)(n.h3,{id:"11-add-ssl-certificate",children:"11. Add SSL Certificate"}),"\n",(0,l.jsx)(n.p,{children:"Input domain names:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"homelab.duckdns.org *.homelab.duckdns.org\n"})}),"\n",(0,l.jsx)(n.p,{children:"Increase seconds to 120 if you get an error on Propagation."}),"\n",(0,l.jsx)(n.h3,{id:"12-edit-lighttpdconf",children:"12. Edit lighttpd.conf"}),"\n",(0,l.jsxs)(n.p,{children:["Edit ",(0,l.jsx)(n.code,{children:"/etc/lighttpd/lighttpd.conf"})," and change the line that says ",(0,l.jsx)(n.code,{children:"server.port = 80"})," to use some other port number such\nas ",(0,l.jsx)(n.code,{children:"8080"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo systemctl restart lighttpd\n"})}),"\n",(0,l.jsx)(n.h3,{id:"13-pihole-admin-fix",children:"13. Pihole /admin/ Fix"}),"\n",(0,l.jsxs)(n.p,{children:["Add the following configuration to fix the Pihole ",(0,l.jsx)(n.code,{children:"/admin/"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'location / {\nproxy_pass http://{{pi-ip}}:{{port}}/admin/;\nproxy_set_header Host $host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_hide_header X-Frame-Options;\nproxy_set_header X-Frame-Options "SAMEORIGIN";\nproxy_read_timeout 90;\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"14-custom-motd",children:"14. Custom MOTD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'sudo su\ntoilet --termwidth --filter border --gay --font future -k "Diet Pi" > /etc/motd\ncat /proc/device-tree/model >> /etc/motd\nprintf "\\n" >> /etc/motd\nexit\n'})}),"\n",(0,l.jsx)(n.h3,{id:"15-renew-lets-encrypt",children:"15. Renew Let's Encrypt"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var l=t(67294);const s={},r=l.createContext(s);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);