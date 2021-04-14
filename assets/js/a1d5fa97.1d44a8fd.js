(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return p}));var t=a(3),l=a(7),r=(a(0),a(307)),i={title:"Learning CUE"},c={unversionedId:"cue/basic",id:"version-v1.0/cue/basic",isDocsHomePage:!1,title:"Learning CUE",description:"This document will explain more about how to use CUE to encapsulate and abstract a given capability in Kubernetes in detail.",source:"@site/versioned_docs/version-v1.0/cue/basic.md",slug:"/cue/basic",permalink:"/docs/cue/basic",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cue/basic.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"How-to",permalink:"/docs/cue/component"},next:{title:"How-to",permalink:"/docs/helm/component"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"CUE CLI Basic",id:"cue-cli-basic",children:[]},{value:"CUE Language Basic",id:"cue-language-basic",children:[]},{value:"CUE Templating and References",id:"cue-templating-and-references",children:[]},{value:"Advanced CUE Schematic",id:"advanced-cue-schematic",children:[]},{value:"Import CUE Internal Packages",id:"import-cue-internal-packages",children:[]},{value:"Import Kube Package",id:"import-kube-package",children:[]}],b={toc:o};function p(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document will explain more about how to use CUE to encapsulate and abstract a given capability in Kubernetes in detail."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please make sure you have already learned about ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," custom resource before reading the following guide. ")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The reasons for KubeVela supports CUE as a first-class solution to design abstraction can be concluded as below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CUE is designed for large scale configuration.")," CUE has the ability to understand a\nconfiguration worked on by engineers across a whole company and to safely change a value that modifies thousands of objects in a configuration. This aligns very well with KubeVela's original goal to define and ship production level applications at web scale."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CUE supports first-class code generation and automation.")," CUE can integrate with existing tools and workflows naturally while other tools would have to build complex custom solutions. For example, generate OpenAPI schemas wigh Go code. This is how KubeVela build developer tools and GUI interfaces based on the CUE templates."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CUE integrates very well with Go."),"\nKubeVela is built with GO just like most projects in Kubernetes system. CUE is also implemented in and exposes a rich API in Go. KubeVela integrates with CUE as its core library and works as a Kubernetes controller. With the help of CUE, KubeVela can easily handle data constraint problems.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Pleas also check ",Object(r.b)("a",{parentName:"p",href:"https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/"},"The Configuration Complexity Curse")," and ",Object(r.b)("a",{parentName:"p",href:"https://cuelang.org/docs/concepts/logic/"},"The Logic of CUE")," for more details.")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Please make sure below CLIs are present in your environment:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://cuelang.org/docs/install/"},Object(r.b)("inlineCode",{parentName:"a"},"cue")," >=v0.2.2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../install#4-optional-get-kubevela-cli"},Object(r.b)("inlineCode",{parentName:"a"},"vela")," (>v1.0.0)"))),Object(r.b)("h2",{id:"cue-cli-basic"},"CUE CLI Basic"),Object(r.b)("p",null,"Below is the basic CUE data, you can define both schema and value in the same file with the almost same format:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'a: 1.5\na: float\nb: 1\nb: int\nd: [1, 2, 3]\ng: {\n    h: "abc"\n}\ne: string\n')),Object(r.b)("p",null,"CUE is a superset of JSON, we can use it like json with following convenience:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C style comments,"),Object(r.b)("li",{parentName:"ul"},"quotes may be omitted from field names without special characters,"),Object(r.b)("li",{parentName:"ul"},"commas at the end of fields are optional,"),Object(r.b)("li",{parentName:"ul"},"comma after last element in list is allowed,"),Object(r.b)("li",{parentName:"ul"},"outer curly braces are optional.")),Object(r.b)("p",null,"CUE has powerful CLI commands. Let's keep the data in a file named ",Object(r.b)("inlineCode",{parentName:"p"},"first.cue")," and try. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Format the CUE file. If you're using Goland or similar JetBrains IDE,\nyou can ",Object(r.b)("a",{parentName:"p",href:"https://wonderflow.info/posts/2020-11-02-goland-cuelang-format/"},"configure save on format")," instead.\nThis command will not only format the CUE, but also point out the wrong schema. That's very useful."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cue fmt first.cue\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Schema Check, besides ",Object(r.b)("inlineCode",{parentName:"p"},"cue fmt"),", you can also use ",Object(r.b)("inlineCode",{parentName:"p"},"vue vet")," to check schema."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cue vet first.cue\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Calculate/Render the result. ",Object(r.b)("inlineCode",{parentName:"p"},"cue eval")," will calculate the CUE file and render out the result.\nYou can see the results don't contain ",Object(r.b)("inlineCode",{parentName:"p"},"a: float")," and ",Object(r.b)("inlineCode",{parentName:"p"},"b: int"),", because these two variables are calculated.\nWhile the ",Object(r.b)("inlineCode",{parentName:"p"},"e: string")," doesn't have definitive results, so it keeps as it is."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cue eval first.cue\na: 1.5\nb: 1\nd: [1, 2, 3]\ng: {\nh: "abc"\n}\ne: string\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Render for specified result. For example, we want only know the result of ",Object(r.b)("inlineCode",{parentName:"p"},"b")," in the file, then we can specify the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"-e"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cue eval -e b first.cue\n1\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Export the result. ",Object(r.b)("inlineCode",{parentName:"p"},"cue export")," will export the result with final value. It will report an error if some variables are not definitive."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cue export first.cue\ne: cannot convert incomplete value "string" to JSON:\n    ./first.cue:9:4\n')),Object(r.b)("p",{parentName:"li"},"We can complete the value by giving a value to ",Object(r.b)("inlineCode",{parentName:"p"},"e"),", for example:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'echo "e: \\"abc\\"" >> first.cue\n')),Object(r.b)("p",{parentName:"li"},"Then, the command will work. By default, the result will be rendered in json format."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cue export first.cue\n{\n    "a": 1.5,\n    "b": 1,\n    "d": [\n        1,\n        2,\n        3\n    ],\n    "g": {\n        "h": "abc"\n    },\n    "e": "abc"\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Export the result in YAML format."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cue export first.cue --out yaml\na: 1.5\nb: 1\nd:\n- 1\n- 2\n- 3\ng:\n  h: abc\ne: abc\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Export the result for specified variable."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cue export -e g first.cue\n{\n    "h": "abc"\n}\n')))),Object(r.b)("p",null,"For now, you have learned all useful CUE cli operations."),Object(r.b)("h2",{id:"cue-language-basic"},"CUE Language Basic"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Data structure: Below is the basic data structure of CUE.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'// float\na: 1.5\n\n// int\nb: 1\n\n// string\nc: "blahblahblah"\n\n// array\nd: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n\n// bool\ne: true\n\n// struct\nf: {\n    a: 1.5\n    b: 1\n    d: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n    g: {\n        h: "abc"\n    }\n}\n\n// null\nj: null\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define a custom CUE type. You can use a ",Object(r.b)("inlineCode",{parentName:"li"},"#")," symbol to specify some variable represents a CUE type.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"#abc: string\n")),Object(r.b)("p",null,"Let's name it ",Object(r.b)("inlineCode",{parentName:"p"},"second.cue"),". Then the ",Object(r.b)("inlineCode",{parentName:"p"},"cue export")," won't complain as the ",Object(r.b)("inlineCode",{parentName:"p"},"#abc")," is a type not incomplete value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cue export second.cue\n{}\n")),Object(r.b)("p",null,"You can also define a more complex custom struct, such as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"#abc: {\n  x: int\n  y: string\n  z: {\n    a: float\n    b: bool\n  }\n}\n")),Object(r.b)("p",null,"It's widely used in KubeVela to define templates and do validation."),Object(r.b)("h2",{id:"cue-templating-and-references"},"CUE Templating and References"),Object(r.b)("p",null,"Let's try to define a CUE template with the knowledge just learned."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Define a struct variable ",Object(r.b)("inlineCode",{parentName:"li"},"parameter"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"parameter: {\n    name: string\n    image: string\n}\n")),Object(r.b)("p",null,"Let's save it in a file called ",Object(r.b)("inlineCode",{parentName:"p"},"deployment.cue"),"."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Define a more complex struct variable ",Object(r.b)("inlineCode",{parentName:"li"},"template")," and reference the variable ",Object(r.b)("inlineCode",{parentName:"li"},"parameter"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'template: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n        selector: matchLabels: {\n            "app.oam.dev/component": parameter.name\n        }\n        template: {\n            metadata: labels: {\n                "app.oam.dev/component": parameter.name\n            }\n            spec: {\n                containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }}}\n}\n')),Object(r.b)("p",null,"People who are familiar with Kubernetes may have understood that is a template of K8s Deployment. The ",Object(r.b)("inlineCode",{parentName:"p"},"parameter")," part\nis the parameters of the template."),Object(r.b)("p",null,"Add it into the ",Object(r.b)("inlineCode",{parentName:"p"},"deployment.cue"),"."),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Then, let's add the value by adding following code block:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'parameter:{\n   name: "mytest"\n   image: "nginx:v1"\n}\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Finally, let's export it in yaml:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cue export deployment.cue -e template --out yaml\napiVersion: apps/v1\nkind: Deployment\nspec:\n  template:\n    spec:\n      containers:\n      - name: mytest\n        image: nginx:v1\n    metadata:\n      labels:\n        app.oam.dev/component: mytest\n  selector:\n    matchLabels:\n      app.oam.dev/component: mytest\n")),Object(r.b)("h2",{id:"advanced-cue-schematic"},"Advanced CUE Schematic"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open struct and list. Using ",Object(r.b)("inlineCode",{parentName:"p"},"...")," in a list or struct means the object is open."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A list like ",Object(r.b)("inlineCode",{parentName:"li"},"[...string]")," means it can hold multiple string elements.\nIf we don't add ",Object(r.b)("inlineCode",{parentName:"li"},"..."),", then ",Object(r.b)("inlineCode",{parentName:"li"},"[string]")," means the list can only have one ",Object(r.b)("inlineCode",{parentName:"li"},"string")," element in it."),Object(r.b)("li",{parentName:"ul"},"A struct like below means the struct can contain unknown fields. ",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"{\n  abc: string   \n  ...\n}\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Operator  ",Object(r.b)("inlineCode",{parentName:"p"},"|"),", it represents a value could be both case. Below is an example that the variable ",Object(r.b)("inlineCode",{parentName:"p"},"a")," could be in string or int type."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"a: string | int\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default Value, we can use ",Object(r.b)("inlineCode",{parentName:"li"},"*")," symbol to represent a default value for variable. That's usually used with ",Object(r.b)("inlineCode",{parentName:"li"},"|"),",\nwhich represents a default value for some type. Below is an example that variable ",Object(r.b)("inlineCode",{parentName:"li"},"a")," is ",Object(r.b)("inlineCode",{parentName:"li"},"int")," and it's default value is ",Object(r.b)("inlineCode",{parentName:"li"},"1"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Optional Variable. In some cases, a variable could not be used, they're optional variables, we can use ",Object(r.b)("inlineCode",{parentName:"li"},"?:")," to define it.\nIn the below example, ",Object(r.b)("inlineCode",{parentName:"li"},"a")," is an optional variable, ",Object(r.b)("inlineCode",{parentName:"li"},"x")," and ",Object(r.b)("inlineCode",{parentName:"li"},"z")," in ",Object(r.b)("inlineCode",{parentName:"li"},"#my")," is optional while ",Object(r.b)("inlineCode",{parentName:"li"},"y")," is a required variable.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"a ?: int\n\n#my: {\nx ?: string\ny : int\nz ?:float\n}\n")),Object(r.b)("p",null,"Optional variables can be skipped, that usually works together with conditional logic.\nSpecifically, if some field does not exit, the CUE grammar is ",Object(r.b)("inlineCode",{parentName:"p"},"if _variable_ != _|_"),", the example is like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"parameter: {\n    name: string\n    image: string\n    config?: [...#Config]\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.config != _|_ {\n                config: parameter.config\n            }\n        }]\n    }\n    ...\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Operator  ",Object(r.b)("inlineCode",{parentName:"li"},"&"),", it used to calculate two variables.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\nb: 3\nc: a & b\n")),Object(r.b)("p",null,"Saving it in ",Object(r.b)("inlineCode",{parentName:"p"},"third.cue")," file."),Object(r.b)("p",null,"You can evaluate the result by using ",Object(r.b)("inlineCode",{parentName:"p"},"cue eval"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cue eval third.cue\na: 1\nb: 3\nc: 3\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Conditional statement, it's really useful when you have some cascade operations that different value affects different results.\nSo you can do ",Object(r.b)("inlineCode",{parentName:"li"},"if..else")," logic in the template.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'price: number\nfeel: *"good" | string\n// Feel bad if price is too high\nif price > 100 {\n    feel: "bad"\n}\nprice: 200\n')),Object(r.b)("p",null,"Saving it in ",Object(r.b)("inlineCode",{parentName:"p"},"fourth.cue")," file."),Object(r.b)("p",null,"You can evaluate the result by using ",Object(r.b)("inlineCode",{parentName:"p"},"cue eval"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cue eval fourth.cue\nprice: 200\nfeel:  "bad"\n')),Object(r.b)("p",null,"Another example is to use bool type as prameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'parameter: {\n    name:   string\n    image:  string\n    useENV: bool\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.useENV == true {\n                env: [{name: "my-env", value: "my-value"}]\n            }\n        }]\n    }\n    ...\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For Loop: if you want to avoid duplicate, you may want to use for loop.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Loop for Map"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [string]: string\n}\noutput: {\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for k, v in parameter.env {\n                    name:  k\n                    value: v\n                },\n            ]\n        }]\n    }\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Loop for type"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},'#a: {\n    "hello": "Barcelona"\n    "nihao": "Shanghai"\n}\n\nfor k, v in #a {\n    "\\(k)": {\n        nameLen: len(v)\n        value:   v\n    }\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Loop for Slice"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [...{name:string,value:string}]\n}\noutput: {\n  ...\n     spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for _, v in parameter.env {\n                    name:  v.name\n                    value: v.value\n                },\n            ]\n        }]\n    }\n}\n")))))),Object(r.b)("p",null,"Note that we use ",Object(r.b)("inlineCode",{parentName:"p"},'"\\( _my-statement_ )"')," for inner calculation in string."),Object(r.b)("h2",{id:"import-cue-internal-packages"},"Import CUE Internal Packages"),Object(r.b)("p",null,"CUE has many ",Object(r.b)("a",{parentName:"p",href:"https://pkg.go.dev/cuelang.org/go@v0.2.2/pkg"},"internal packages")," which also can be used in KubeVela."),Object(r.b)("p",null,"Below is an example that use ",Object(r.b)("inlineCode",{parentName:"p"},"strings.Join")," to ",Object(r.b)("inlineCode",{parentName:"p"},"concat")," string list to one string. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},'import ("strings")\n\nparameter: {\n    outputs: [{ip: "1.1.1.1", hostname: "xxx.com"}, {ip: "2.2.2.2", hostname: "yyy.com"}]\n}\noutput: {\n    spec: {\n        if len(parameter.outputs) > 0 {\n            _x: [ for _, v in parameter.outputs {\n                "\\(v.ip) \\(v.hostname)"\n            }]\n            message: "Visiting URL: " + strings.Join(_x, "")\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"import-kube-package"},"Import Kube Package"),Object(r.b)("p",null,"KubeVela automatically generates all K8s resources as internal packages by reading K8s openapi from the\ninstalled K8s cluster."),Object(r.b)("p",null,"You can use these packages with the format ",Object(r.b)("inlineCode",{parentName:"p"},"kube/<apiVersion>")," in CUE Template of KubeVela just like the same way\nwith the CUE internal packages."),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"Deployment")," can be used as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "kube/apps/v1"\n)\n\nparameter: {\n    name:  string\n}\n\noutput: apps.#Deployment\noutput: {\n    metadata: name: parameter.name\n}\n')),Object(r.b)("p",null,"Service can be used as (import package with an alias is not necessary):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},'import ("kube/v1")\n\noutput: v1.#Service\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n    spec: type: "ClusterIP",\n}\n\nparameter: {\n    name:  "myapp"\n}\n')),Object(r.b)("p",null,"Even the installed CRD works:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'import (\n  oam  "kube/core.oam.dev/v1alpha2"\n)\n\noutput: oam.#Application\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n}\n\nparameter: {\n    name:  "myapp"\n}\n')))}p.isMDXComponent=!0},307:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return d}));var t=a(0),l=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),p=function(e){var n=l.a.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=p(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=t,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return a?l.a.createElement(d,c(c({ref:n},b),{},{components:a})):l.a.createElement(d,c({ref:n},b))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var b=2;b<r;b++)i[b]=a[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);