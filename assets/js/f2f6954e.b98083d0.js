(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(307)),r={title:"Managing Capabilities"},c={unversionedId:"developers/cap-center",id:"version-v1.0/developers/cap-center",isDocsHomePage:!1,title:"Managing Capabilities",description:"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as Capability Centers.",source:"@site/versioned_docs/version-v1.0/developers/cap-center.md",slug:"/developers/cap-center",permalink:"/docs/developers/cap-center",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/cap-center.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"Execute Commands in Container",permalink:"/docs/developers/exec-cmd"},next:{title:"Configuring data/env in Application",permalink:"/docs/developers/config-app"}},s=[{value:"Add a capability center",id:"add-a-capability-center",children:[]},{value:"List capability centers",id:"list-capability-centers",children:[]},{value:"Optional Remove a capability center",id:"optional-remove-a-capability-center",children:[]},{value:"List all available capabilities in capability center",id:"list-all-available-capabilities-in-capability-center",children:[]},{value:"Install a capability from capability center",id:"install-a-capability-from-capability-center",children:[]},{value:"Use the newly installed capability",id:"use-the-newly-installed-capability",children:[]},{value:"Uninstall a capability",id:"uninstall-a-capability",children:[]}],o={toc:s};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In KubeVela, developers can install more capabilities (i.e. new component types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as ",Object(i.b)("em",{parentName:"p"},"Capability Centers"),". "),Object(i.b)("p",null,"KubeVela is able to discover OAM definition files in this repo automatically and sync them to your own KubeVela platform."),Object(i.b)("h2",{id:"add-a-capability-center"},"Add a capability center"),Object(i.b)("p",null,"Add and sync a capability center in KubeVela:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\nsuccessfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n\n$ vela cap center sync my-center\nsuccessfully sync 1/1 from my-center remote center\nsync finished\n")),Object(i.b)("p",null,"Now, this capability center ",Object(i.b)("inlineCode",{parentName:"p"},"my-center")," is ready to use."),Object(i.b)("h2",{id:"list-capability-centers"},"List capability centers"),Object(i.b)("p",null,"You are allowed to add more capability centers and list them."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center ls\nNAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),Object(i.b)("h2",{id:"optional-remove-a-capability-center"},"[Optional]"," Remove a capability center"),Object(i.b)("p",null,"Or, remove one."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center remove my-center\n")),Object(i.b)("h2",{id:"list-all-available-capabilities-in-capability-center"},"List all available capabilities in capability center"),Object(i.b)("p",null,"Or, list all available capabilities in certain center."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap ls my-center\nNAME                CENTER      TYPE                DEFINITION                      STATUS      APPLIES-TO\nclonesetservice     my-center   componentDefinition clonesets.apps.kruise.io        uninstalled []\n")),Object(i.b)("h2",{id:"install-a-capability-from-capability-center"},"Install a capability from capability center"),Object(i.b)("p",null,"Now let's try to install the new component named ",Object(i.b)("inlineCode",{parentName:"p"},"clonesetservice")," from ",Object(i.b)("inlineCode",{parentName:"p"},"my-center")," to your own KubeVela platform."),Object(i.b)("p",null,"You need to install OpenKruise first."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"helm install kruise https://github.com/openkruise/kruise/releases/download/v0.7.0/kruise-chart.tgz\n")),Object(i.b)("p",null,"Install ",Object(i.b)("inlineCode",{parentName:"p"},"clonesetservice")," component from ",Object(i.b)("inlineCode",{parentName:"p"},"my-center"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap install my-center/clonesetservice\nInstalling component capability clonesetservice\nSuccessfully installed capability clonesetservice from my-center\n")),Object(i.b)("h2",{id:"use-the-newly-installed-capability"},"Use the newly installed capability"),Object(i.b)("p",null,"Let's check the ",Object(i.b)("inlineCode",{parentName:"p"},"clonesetservice")," appears in your platform firstly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela components\nNAME            NAMESPACE   WORKLOAD                    DESCRIPTION\nclonesetservice vela-system clonesets.apps.kruise.io    Describes long-running, scalable, containerized services\n                                                        that have a stable network endpoint to receive external\n                                                        network traffic from customers. If workload type is skipped\n                                                        for any service defined in Appfile, it will be defaulted to\n                                                        `webservice` type.\n")),Object(i.b)("p",null,"Great! Now let's deploy an app via Appfile."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: clonesetservice\n    image: crccheck/hello-world\n    port: 8000\nEOF\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela appfile ...\nLoad Template ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying application ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\nUpdating:  core.oam.dev/v1alpha2, Kind=HealthScope in default\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc testsvc\n")),Object(i.b)("p",null,"then you can Get a cloneset in your environment."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get clonesets.apps.kruise.io\nNAME      DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ntestsvc   1         1         1               1       1       46s\n")),Object(i.b)("h2",{id:"uninstall-a-capability"},"Uninstall a capability"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: make sure no apps are using the capability before uninstalling.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap uninstall my-center/clonesetservice\nSuccessfully uninstalled capability clonesetservice\n")))}p.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?l.a.createElement(m,c(c({ref:t},o),{},{components:n})):l.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var o=2;o<i;o++)r[o]=n[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);