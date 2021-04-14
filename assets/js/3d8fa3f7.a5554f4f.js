(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(307)),i={title:"Quick Start"},l={unversionedId:"quick-start",id:"version-v1.0/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/versioned_docs/version-v1.0/quick-start.md",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/quick-start.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"How it Works",permalink:"/docs/concepts"}},s=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),Object(o.b)("h2",{id:"step-1-install"},"Step 1: Install"),Object(o.b)("p",null,"Make sure you have finished and verified the installation following ",Object(o.b)("a",{parentName:"p",href:"./install"},"this guide"),"."),Object(o.b)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),Object(o.b)("p",null,"Check the status until we see ",Object(o.b)("inlineCode",{parentName:"p"},"status")," is ",Object(o.b)("inlineCode",{parentName:"p"},"running")," and services are ",Object(o.b)("inlineCode",{parentName:"p"},"healthy"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$  kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  generation: 1\n  name: first-vela-app\n  ...\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\nstatus:\n  ...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: your ip address'\n      type: ingress\n  status: running\n")),Object(o.b)("p",null,"Under the neath, the K8s resources was created:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployment\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   1/1     1            1           8m\n$ kubectl get svc\nNAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nexpress-server   ClusterIP   172.21.11.152   <none>        8000/TCP   7m43s\nkubernetes       ClusterIP   172.21.0.1      <none>        443/TCP    116d\n$ kubectl get ingress\nNAME             CLASS    HOSTS                 ADDRESS          PORTS   AGE\nexpress-server   <none>   testsvc.example.com   <your ip address>   80      7m47s\n")),Object(o.b)("p",null,"If your cluster has a working ingress, you can visit the service."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Voila!")," You are all set to go."),Object(o.b)("h2",{id:"whats-next"},"What's Next"),Object(o.b)("p",null,"Here are some recommended next steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learn KubeVela starting from its ",Object(o.b)("a",{parentName:"li",href:"./concepts"},"core concepts")),Object(o.b)("li",{parentName:"ul"},"Learn more details about ",Object(o.b)("a",{parentName:"li",href:"./application"},Object(o.b)("inlineCode",{parentName:"a"},"Application"))," and understand how it works."),Object(o.b)("li",{parentName:"ul"},"Join ",Object(o.b)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",Object(o.b)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",Object(o.b)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),Object(o.b)("p",null,"Welcome onboard and sail Vela!"))}p.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);