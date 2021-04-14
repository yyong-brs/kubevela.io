(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(307)),l={title:"Overview"},i={unversionedId:"quick-start-appfile",id:"quick-start-appfile",isDocsHomePage:!1,title:"Overview",description:"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-start-appfile.md",slug:"/quick-start-appfile",permalink:"/zh/docs/next/quick-start-appfile",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/quick-start-appfile.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Defining KEDA as Autoscaling Trait",permalink:"/zh/docs/next/platform-engineers/keda"},next:{title:"Learning Appfile",permalink:"/zh/docs/next/developers/learn-appfile"}},p=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool."),Object(o.b)("p",null,"As an proof-of-concept of building developer experience with KubeVela, we developed a client-side tool named ",Object(o.b)("inlineCode",{parentName:"p"},"Appfile")," as well. This tool enables developers to deploy any application with a single file and a single command: ",Object(o.b)("inlineCode",{parentName:"p"},"vela up"),"."),Object(o.b)("p",null,"Now let's walk through its experience."),Object(o.b)("h2",{id:"step-1-install"},"Step 1: Install"),Object(o.b)("p",null,"Make sure you have finished and verified the installation following ",Object(o.b)("a",{parentName:"p",href:"./install"},"this guide"),"."),Object(o.b)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela.yaml\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward first-vela-app\n             SSH: vela exec first-vela-app\n         Logging: vela logs first-vela-app\n      App status: vela status first-vela-app\n  Service status: vela status first-vela-app --svc testsvc\n")),Object(o.b)("p",null,"Check the status until we see ",Object(o.b)("inlineCode",{parentName:"p"},"Routes")," are ready:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status first-vela-app\nAbout:\n\n  Name:       first-vela-app\n  Namespace:  default\n  Created at: ...\n  Updated at: ...\n\nServices:\n\n  - Name: testsvc\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: ...\n      Updated at: ...\n    Traits:\n      - \u2705 ingress: Visiting URL: testsvc.example.com, IP: <your IP address>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In ",Object(o.b)("a",{parentName:"strong",href:"./install#kind"},"kind cluster setup")),", you can visit the service via localhost. In other setups, replace localhost with ingress address accordingly."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://localhost/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Voila!")," You are all set to go."),Object(o.b)("h2",{id:"whats-next"},"What's Next"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learn details about ",Object(o.b)("a",{parentName:"li",href:"./developers/learn-appfile"},Object(o.b)("inlineCode",{parentName:"a"},"Appfile"))," and know how it works.")))}c.isMDXComponent=!0}}]);