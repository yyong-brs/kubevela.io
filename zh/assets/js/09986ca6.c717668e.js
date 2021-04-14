(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{307:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,l(l({ref:n},p),{},{components:t})):o.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(307)),i={title:"Deploy Application"},l={unversionedId:"application",id:"version-v1.0/application",isDocsHomePage:!1,title:"Deploy Application",description:"This documentation will walk through a full application deployment workflow on KubeVela platform.",source:"@site/versioned_docs/version-v1.0/application.md",slug:"/application",permalink:"/zh/docs/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/application.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"How it Works",permalink:"/zh/docs/concepts"},next:{title:"Progressive Rollout",permalink:"/zh/docs/rollout/rollout"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 1: Check Capabilities in the Platform",id:"step-1-check-capabilities-in-the-platform",children:[]},{value:"Step 2: Design and Deploy Application",id:"step-2-design-and-deploy-application",children:[{value:"Deploy the Application",id:"deploy-the-application",children:[]},{value:"Verify the Deployment",id:"verify-the-deployment",children:[]}]}],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This documentation will walk through a full application deployment workflow on KubeVela platform."),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"KubeVela is a fully self-service platform. All capabilities an application deployment needs are maintained as building block modules in this platform. Specifically:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Components - deployable/provisionable entities that composed your application deployment",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. a Kubernetes workload, a MySQL database, or a AWS OSS bucket"))),Object(r.b)("li",{parentName:"ul"},"Traits - attachable operational features per your needs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. autoscaling rules, rollout strategies, ingress rules, sidecars, security policies etc")))),Object(r.b)("h2",{id:"step-1-check-capabilities-in-the-platform"},"Step 1: Check Capabilities in the Platform"),Object(r.b)("p",null,"As user of this platform, you could check available components you can deploy, and available traits you can attach."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"kubectl get componentdefinitions -n vela-system\nNAME         WORKLOAD-KIND   DESCRIPTION                                                                                                                                                AGE\ntask         Job             Describes jobs that run code or a script to completion.                                                                                                    5h52m\nwebservice   Deployment      Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers.           5h52m\nworker       Deployment      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic.   5h52m\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},'kubectl get traitdefinitions -n vela-system\nNAME      APPLIES-TO                DESCRIPTION                                                                                                                           AGE\ningress   ["webservice","worker"]   Configures K8s ingress and service to enable web traffic for your service. Please use route trait in cap center for advanced usage.   6h8m\nscaler    ["webservice","worker"]   Configures replicas for your service.                                                                                                 6h8m\n')),Object(r.b)("p",null,"To show the specification for given capability, you could use ",Object(r.b)("inlineCode",{parentName:"p"},"vela")," CLI. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"vela show webservice")," will return full schema of ",Object(r.b)("em",{parentName:"p"},"Web Service")," component and ",Object(r.b)("inlineCode",{parentName:"p"},"vela show webservice --web")," will open its capability reference documentation in your browser."),Object(r.b)("h2",{id:"step-2-design-and-deploy-application"},"Step 2: Design and Deploy Application"),Object(r.b)("p",null,"In KubeVela, ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," is the main API to define your application deployment based on available capabilities. Every ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," could contain multiple components, each of them can be attached with a number of traits per needs. "),Object(r.b)("p",null,"Now let's define an application composed by ",Object(r.b)("em",{parentName:"p"},"Web Service")," and ",Object(r.b)("em",{parentName:"p"},"Worker")," components."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: autoscaler\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),Object(r.b)("p",null,"In this sample, we also attached ",Object(r.b)("inlineCode",{parentName:"p"},"sidecar")," and ",Object(r.b)("inlineCode",{parentName:"p"},"autoscaler")," traits to the ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," component. So after deployed, the ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," component instance (a Kubernetes Deployment workload) will be automatically injected with a ",Object(r.b)("inlineCode",{parentName:"p"},"fluentd")," sidecar and automatically scale from 1-100 replicas based on CPU usage."),Object(r.b)("h3",{id:"deploy-the-application"},"Deploy the Application"),Object(r.b)("p",null,"Apply application YAML to Kubernetes, you'll get the application becomes ",Object(r.b)("inlineCode",{parentName:"p"},"running"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n name: website\n....\nstatus:\n  components:\n  - apiVersion: core.oam.dev/v1alpha2\n    kind: Component\n    name: backend\n  - apiVersion: core.oam.dev/v1alpha2\n    kind: Component\n    name: frontend\n....\n  status: running\n\n")),Object(r.b)("h3",{id:"verify-the-deployment"},"Verify the Deployment"),Object(r.b)("p",null,"You could see a Deployment named ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," is running, with port exposed, and with a container ",Object(r.b)("inlineCode",{parentName:"p"},"fluentd")," injected."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy frontend\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   1/1     1            1           100m\n")),Object(r.b)("p",null,"Another Deployment is also running named ",Object(r.b)("inlineCode",{parentName:"p"},"backend"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy backend\nNAME      READY   UP-TO-DATE   AVAILABLE   AGE\nbackend   1/1     1            1           100m\n")),Object(r.b)("p",null,"An HPA was also created by the ",Object(r.b)("inlineCode",{parentName:"p"},"autoscaler")," trait. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get HorizontalPodAutoscaler frontend\nNAME       REFERENCE             TARGETS         MINPODS   MAXPODS   REPLICAS   AGE\nfrontend   Deployment/frontend   <unknown>/50%   1         10        1          101m\n")))}s.isMDXComponent=!0}}]);