(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(307)),i={title:"Overview"},l={unversionedId:"developers/references/README",id:"developers/references/README",isDocsHomePage:!1,title:"Overview",description:"In this documentation, we will show how to check the detailed schema of a given capability (i.e. component type or trait).",source:"@site/docs/developers/references/README.md",slug:"/developers/references/README",permalink:"/docs/next/developers/references/README",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/README.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1618399121,formattedLastUpdatedAt:"4/14/2021",sidebar:"docs",previous:{title:"vela cap",permalink:"/docs/next/cli/vela_cap"},next:{title:"Webservice",permalink:"/docs/next/developers/references/component-types/webservice"}},c=[{value:"Using Browser",id:"using-browser",children:[]},{value:"Using Terminal",id:"using-terminal",children:[]},{value:"For Built-in Capabilities",id:"for-built-in-capabilities",children:[]}],s={toc:c};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this documentation, we will show how to check the detailed schema of a given capability (i.e. component type or trait). "),Object(o.b)("p",null,'This may sound challenging because every capability is a "plug-in" in KubeVela (even for the built-in ones), also, it\'s by design that KubeVela allows platform administrators to modify the capability templates at any time. In this case, do we need to manually write documentation for every newly installed capability? And how can we ensure those documentations for the system is up-to-date?'),Object(o.b)("h2",{id:"using-browser"},"Using Browser"),Object(o.b)("p",null,'Actually, as a important part of its "extensibility" design, KubeVela will always ',Object(o.b)("strong",{parentName:"p"},"automatically generate")," reference documentation for every workload type or trait registered in your Kubernetes cluster, based on the template in its definition of course. This feature works for any capability: either built-in ones or your own workload types/traits."),Object(o.b)("p",null,"Thus, as an end user, the only thing you need to do is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"$ vela show COMPONENT_TYPE or TRAIT --web\n")),Object(o.b)("p",null,"This command will automatically open the reference documentation for given component type or trait in your default browser."),Object(o.b)("p",null,"Let's take ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show webservice --web")," as example. The detailed schema documentation for ",Object(o.b)("inlineCode",{parentName:"p"},"Web Service")," component type will show up immediately as below:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(338).default})),Object(o.b)("p",null,"Note that there's in the section named ",Object(o.b)("inlineCode",{parentName:"p"},"Specification"),", it even provides you with a full sample for the usage of this workload type with a fake name ",Object(o.b)("inlineCode",{parentName:"p"},"my-service-name"),"."),Object(o.b)("p",null,"Similarly, we can also do ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show autoscale"),":"),Object(o.b)("p",null,Object(o.b)("img",{src:n(339).default})),Object(o.b)("p",null,"With these auto-generated reference documentations, we could easily complete the application description by simple copy-paste, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: helloworld\n\nservices:\n  backend: # copy-paste from the webservice ref doc above\n    image: oamdev/testapp:v1\n    cmd: ["node", "server.js"]\n    port: 8080\n    cpu: "0.1"\n\n    autoscale: # copy-paste and modify from autoscaler ref doc above\n      min: 1\n      max: 8\n      cron:\n        startAt:  "19:00"\n        duration: "2h"\n        days:     "Friday"\n        replicas: 4\n        timezone: "America/Los_Angeles"\n')),Object(o.b)("h2",{id:"using-terminal"},"Using Terminal"),Object(o.b)("p",null,"This reference doc feature also works for terminal-only case. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ vela show webservice\n# Properties\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n| NAME  |                                   DESCRIPTION                                    |     TYPE      | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n| cmd   | Commands to run in the container                                                 | []string      | false    |         |\n| env   | Define arguments by using environment variables                                  | [[]env](#env) | false    |         |\n| image | Which image would you like to use for your service                               | string        | true     |         |\n| port  | Which port do you want customer traffic sent to                                  | int           | true     |      80 |\n| cpu   | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string        | false    |         |\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod's namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod's namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n")),Object(o.b)("h2",{id:"for-built-in-capabilities"},"For Built-in Capabilities"),Object(o.b)("p",null,"Note that for all the built-in capabilities, we already published their reference docs below based on the same doc generation mechanism."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Workload Types",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"component-types/webservice"},"webservice")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"component-types/task"},"task")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"component-types/worker"},"worker")))),Object(o.b)("li",{parentName:"ul"},"Traits",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"traits/route"},"route")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"traits/autoscale"},"autoscale")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"traits/rollout"},"rollout")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"traits/metrics"},"metrics")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"traits/scaler"},"scaler"))))))}p.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vela_show_webservice-9b50b8ef8367026e470bb34dcc4f50be.jpg"},339:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vela_show_autoscale-1eefa0ae534277bc073ad1c8302f7882.jpg"}}]);