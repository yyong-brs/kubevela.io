(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(307)),i=n(336),s=n(337),o={title:"Installation"},c={unversionedId:"install",id:"version-v1.0/install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/versioned_docs/version-v1.0/install.mdx",slug:"/install",permalink:"/zh/docs/install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/install.mdx",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"Introduction",permalink:"/zh/docs/"},next:{title:"Quick Start",permalink:"/zh/docs/quick-start"}},b=[{value:"1. Choose Kubernetes Cluster",id:"1-choose-kubernetes-cluster",children:[]},{value:"2. Install KubeVela Controller",id:"2-install-kubevela-controller",children:[]},{value:"3. Get KubeVela CLI",id:"3-get-kubevela-cli",children:[]},{value:"4. Enable Helm Support",id:"4-enable-helm-support",children:[]},{value:"5. Verify",id:"5-verify",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",Object(l.b)("a",{parentName:"p",href:"./advanced-install#upgrade"},"upgrade guide"),".")),Object(l.b)("h2",{id:"1-choose-kubernetes-cluster"},"1. Choose Kubernetes Cluster"),Object(l.b)("p",null,"Requirements:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Kubernetes cluster >= v1.15.0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"kubectl")," installed and configured")),Object(l.b)("p",null,"KubeVela is a simple custom controller that can be installed on any Kubernetes cluster including managed offerings or your own clusters. The only requirement is please ensure ",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress-nginx")," is installed and enabled."),Object(l.b)("p",null,"For for local deployment and test, you could use ",Object(l.b)("inlineCode",{parentName:"p"},"minikube")," or ",Object(l.b)("inlineCode",{parentName:"p"},"kind"),"."),Object(l.b)(i.a,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"KinD",value:"kind"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"minikube",mdxType:"TabItem"},Object(l.b)("p",null,"Follow the minikube ",Object(l.b)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),Object(l.b)("p",null,"Then spins up a minikube cluster"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),Object(l.b)("p",null,"Install ingress:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),Object(l.b)(s.a,{value:"kind",mdxType:"TabItem"},Object(l.b)("p",null,"Follow ",Object(l.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),Object(l.b)("p",null,"Then spins up a kind cluster:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),Object(l.b)("p",null,"Then install ",Object(l.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),Object(l.b)("h2",{id:"2-install-kubevela-controller"},"2. Install KubeVela Controller"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add helm chart repo for KubeVela"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://kubevelacharts.oss-cn-hangzhou.aliyuncs.com/core\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Update the chart repo"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install KubeVela"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),Object(l.b)("p",{parentName:"li"},"By default, it will enable the webhook with a self-signed certificate provided by ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")))),Object(l.b)("h2",{id:"3-get-kubevela-cli"},"3. Get KubeVela CLI"),Object(l.b)("p",null,"Using KubeVela CLI gives you a simplified workflow with optimized output comparing to using ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl"),". It is not mandatory though."),Object(l.b)("p",null,"Here are three ways to get KubeVela Cli:"),Object(l.b)(i.a,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"script",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," macOS/Linux ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Windows")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),Object(l.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"macOS/Linux")),Object(l.b)("p",null,"Update your brew firstly."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),Object(l.b)("p",null,"Then install kubevela client."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),Object(l.b)(s.a,{value:"download",mdxType:"TabItem"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download the latest ",Object(l.b)("inlineCode",{parentName:"li"},"vela")," binary from the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),Object(l.b)("li",{parentName:"ul"},"Unpack the ",Object(l.b)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",Object(l.b)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Known Issue(",Object(l.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),Object(l.b)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",Object(l.b)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),Object(l.b)("h2",{id:"4-enable-helm-support"},"4. Enable Helm Support"),Object(l.b)("p",null,"KubeVela leverages Helm controller from ",Object(l.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"Flux v2")," to deploy ",Object(l.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," based components."),Object(l.b)("p",null,"You can enable this feature by installing a minimal Flux v2 chart as below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install --create-namespace -n flux-system helm-flux http://oam.dev/catalog/helm-flux2-0.1.0.tgz\n")),Object(l.b)("p",null,"Or you could install full Flux v2 following its own guide of course."),Object(l.b)("h2",{id:"5-verify"},"5. Verify"),Object(l.b)("p",null,"Checking available application components and traits by ",Object(l.b)("inlineCode",{parentName:"p"},"vela")," CLI tool:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-console"},"NAME        NAMESPACE   WORKLOAD            DESCRIPTION\ntask        vela-system jobs.batch          Describes jobs that run code or a script to completion.\nwebservice  vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that have a stable network endpoint to receive external\n                                            network traffic from customers.\nworker      vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that running at backend. They do NOT have network endpoint\n                                            to receive external network traffic.\n")),Object(l.b)("p",null,"These capabilities are built-in so they are ready to use if showed up. KubeVela is designed to be programmable and fully self-service, so the assumption is more capabilities will be added later per your own needs. "),Object(l.b)("p",null,"Also, whenever new capabilities are added in the platform, you will immediately see them in above output."))}p.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},308:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},326:function(e,t,n){"use strict";var a=n(0),r=n(327);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},327:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},336:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(326),i=n(308),s=n(61),o=n.n(s);var c=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(l.a)(),h=d.tabGroupChoices,g=d.setTabGroupChoices,O=Object(a.useState)(s),f=O[0],v=O[1],j=a.Children.toArray(e.children),y=[];if(null!=p){var k=h[p];null!=k&&k!==f&&u.some((function(e){return e.value===k}))&&v(k)}var N=function(e){var t=e.target,n=y.indexOf(t),a=j[n].props.value;v(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,l,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o.a.tabItemActive),setTimeout((function(){return t.classList.remove(o.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case b:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},337:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);