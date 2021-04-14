(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(307)),o={title:"How-to"},c={unversionedId:"cue/trait",id:"cue/trait",isDocsHomePage:!1,title:"How-to",description:"In this section we will introduce how to define a trait.",source:"@site/docs/cue/trait.md",slug:"/cue/trait",permalink:"/docs/next/cue/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cue/trait.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1617860365,formattedLastUpdatedAt:"4/8/2021",sidebar:"docs",previous:{title:"Crossplane",permalink:"/docs/next/platform-engineers/cloud-services"},next:{title:"Patch Traits",permalink:"/docs/next/cue/patch-trait"}},s=[{value:"Simple Trait",id:"simple-trait",children:[]},{value:"Using CUE as Trait Schematic",id:"using-cue-as-trait-schematic",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section we will introduce how to define a trait."),Object(i.b)("h2",{id:"simple-trait"},"Simple Trait"),Object(i.b)("p",null,"A trait in KubeVela can be defined by simply reference a existing Kubernetes API resource."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),Object(i.b)("p",null,"Let's attach this trait to a component instance in ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),Object(i.b)("p",null,"Note that in this case, all fields in the referenced resource's ",Object(i.b)("inlineCode",{parentName:"p"},"spec")," will be exposed to end user and no metadata (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," etc) are allowed to be set trait properties. Hence this approach is normally used when you want to bring your own CRD and controller as a trait, and it dose not rely on ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," etc as tuning knobs."),Object(i.b)("h2",{id:"using-cue-as-trait-schematic"},"Using CUE as Trait Schematic"),Object(i.b)("p",null,"The recommended approach is defining a CUE based schematic for trait as well. In this case, it comes with abstraction and you have full flexibility to templating any resources and fields as you want. Note that KubeVela requires all traits MUST be defined in ",Object(i.b)("inlineCode",{parentName:"p"},"outputs")," section (not ",Object(i.b)("inlineCode",{parentName:"p"},"output"),") in CUE template with format as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),Object(i.b)("p",null,"Below is an example for ",Object(i.b)("inlineCode",{parentName:"p"},"ingress")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),Object(i.b)("p",null,"Let's attach this trait to a component instance in ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),Object(i.b)("p",null,"CUE based trait definitions can also enable many other advanced scenarios such as patching and data passing. They will be explained in detail in the following documentations."))}l.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);