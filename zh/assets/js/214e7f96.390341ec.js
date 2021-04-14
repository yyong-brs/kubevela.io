(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(307)),i={title:"Extend CRD Operator as Component Type"},l={unversionedId:"platform-engineers/cloneset",id:"version-v1.0/platform-engineers/cloneset",isDocsHomePage:!1,title:"Extend CRD Operator as Component Type",description:"Let's use OpenKruise as example of extend CRD as KubeVela Component.",source:"@site/versioned_docs/version-v1.0/platform-engineers/cloneset.md",slug:"/platform-engineers/cloneset",permalink:"/zh/docs/platform-engineers/cloneset",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cloneset.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021"},p=[{value:"Step 1: Install the CRD controller",id:"step-1-install-the-crd-controller",children:[]},{value:"Step 2: Create Component Definition",id:"step-2-create-component-definition",children:[]},{value:"Step 3: Register New Component Type to KubeVela",id:"step-3-register-new-component-type-to-kubevela",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"OpenKruise")," as example of extend CRD as KubeVela Component.\n",Object(a.b)("strong",{parentName:"p"},"The mechanism works for all CRD Operators"),"."),Object(a.b)("h3",{id:"step-1-install-the-crd-controller"},"Step 1: Install the CRD controller"),Object(a.b)("p",null,"You need to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openkruise/kruise#quick-start"},"install the CRD controller")," into your K8s system."),Object(a.b)("h3",{id:"step-2-create-component-definition"},"Step 2: Create Component Definition"),Object(a.b)("p",null,"To register Cloneset(one of the OpenKruise workloads) as a new workload type in KubeVela, the only thing needed is to create an ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," object for it.\nA full example can be found in this ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/registry/cloneset.yaml"},"cloneset.yaml"),".\nSeveral highlights are list below."),Object(a.b)("h4",{id:"1-describe-the-workload-type"},"1. Describe The Workload Type"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'...\n  annotations:\n    definition.oam.dev/description: "OpenKruise cloneset"\n...\n')),Object(a.b)("p",null,"A one line description of this component type. It will be shown in helper commands such as ",Object(a.b)("inlineCode",{parentName:"p"},"$ vela components"),"."),Object(a.b)("h4",{id:"2-register-its-underlying-crd"},"2. Register it's underlying CRD"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"...\nworkload:\n  definition:\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n...\n")),Object(a.b)("p",null,"This is how you register OpenKruise Cloneset's API resource (",Object(a.b)("inlineCode",{parentName:"p"},"fapps.kruise.io/v1alpha1.CloneSet"),") as the workload type.\nKubeVela uses Kubernetes API resource discovery mechanism to manage all registered capabilities."),Object(a.b)("h4",{id:"4-define-template"},"4. Define Template"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'...\nschematic:\n  cue:\n    template: |\n      output: {\n          apiVersion: "apps.kruise.io/v1alpha1"\n          kind:       "CloneSet"\n          metadata: labels: {\n            "app.oam.dev/component": context.name\n          }\n          spec: {\n              replicas: parameter.replicas\n              selector: matchLabels: {\n                  "app.oam.dev/component": context.name\n              }\n              template: {\n                  metadata: labels: {\n                    "app.oam.dev/component": context.name\n                  }\n                  spec: {\n                      containers: [{\n                        name:  context.name\n                        image: parameter.image\n                    }]\n                  }\n              }\n          }\n      }\n      parameter: {\n          // +usage=Which image would you like to use for your service\n          // +short=i\n          image: string\n\n          // +usage=Number of pods in the cloneset\n          replicas: *5 | int\n      }\n')),Object(a.b)("h3",{id:"step-3-register-new-component-type-to-kubevela"},"Step 3: Register New Component Type to KubeVela"),Object(a.b)("p",null,"As long as the definition file is ready, you just need to apply it to Kubernetes."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/catalog/master/registry/cloneset.yaml\n")),Object(a.b)("p",null,"And the new component type will immediately become available for developers to use in KubeVela."))}c.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);