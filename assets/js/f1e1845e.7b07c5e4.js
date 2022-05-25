"use strict";(self.webpackChunkgo_kitx_webside=self.webpackChunkgo_kitx_webside||[]).push([[2839],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(t),m=c,f=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6821:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p}});var r=t(7462),c=t(3366),l=(t(7294),t(3905)),o=["components"],a={slug:"etcd-introduction",title:"Etcd\u5165\u95e8 & go\u64cd\u4f5c",authors:["sado"],tags:["etcd","golang"],date:"2022-05-23T20:35"},i=void 0,d={permalink:"/blog/etcd-introduction",source:"@site/blog/etcd/2022-05-23-etcd-introduction.md",title:"Etcd\u5165\u95e8 & go\u64cd\u4f5c",description:"\u4e00\u3001etcd",date:"2022-05-23T20:35:00.000Z",formattedDate:"May 23, 2022",tags:[{label:"etcd",permalink:"/blog/tags/etcd"},{label:"golang",permalink:"/blog/tags/golang"}],readingTime:4.345,truncated:!1,authors:[{name:"sado",title:"Developer",url:"https://github.com/sado0823",imageURL:"/img/avatar.jpeg",key:"sado"}],frontMatter:{slug:"etcd-introduction",title:"Etcd\u5165\u95e8 & go\u64cd\u4f5c",authors:["sado"],tags:["etcd","golang"],date:"2022-05-23T20:35"},prevItem:{title:"Rpc And Opentrace",permalink:"/blog/rpc-opentrace"},nextItem:{title:"Redis - \u6982\u5ff5",permalink:"/blog/redis-notion"}},u={authorsImageUrls:[void 0]},p=[{value:"\u4e00\u3001etcd",id:"\u4e00etcd",level:2},{value:"1\u3001\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:3},{value:"2\u3001\u7279\u70b9",id:"2\u7279\u70b9",level:3},{value:"3\u3001\u5e94\u7528\u573a\u666f",id:"3\u5e94\u7528\u573a\u666f",level:3},{value:"4\u3001etcd\u96c6\u7fa4",id:"4etcd\u96c6\u7fa4",level:3},{value:"5\u3001go \u64cd\u4f5c etcd",id:"5go-\u64cd\u4f5c-etcd",level:3},{value:"<code>PUT GET</code>",id:"put-get",level:5},{value:"<code>WATCH</code>",id:"watch",level:5},{value:"<code>LEASE</code>",id:"lease",level:5},{value:"6\u3001\u5206\u5e03\u5f0f\u9501",id:"6\u5206\u5e03\u5f0f\u9501",level:3}],s={toc:p};function m(e){var n=e.components,t=(0,c.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00etcd"},"\u4e00\u3001etcd"),(0,l.kt)("h3",{id:"1\u7b80\u4ecb"},"1\u3001\u7b80\u4ecb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"etcd\u662f\u4f7f\u7528Go\u8bed\u8a00\u5f00\u53d1\u7684\u4e00\u4e2a\u5f00\u6e90\u7684\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0fkey-value\u5b58\u50a8\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u914d\u7f6e\u5171\u4eab\u548c\u670d\u52a1\u7684\u6ce8\u518c\u548c\u53d1\u73b0\u3002\n\n\u7c7b\u4f3c\u9879\u76ee\u6709`zookeeper`\u548c`consul`\u3002\n")),(0,l.kt)("h3",{id:"2\u7279\u70b9"},"2\u3001\u7279\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"`\u5b8c\u5168\u590d\u5236`\uff1a\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b8c\u6574\u7684\u5b58\u6863\n`\u9ad8\u53ef\u7528\u6027`\uff1aEtcd\u53ef\u7528\u4e8e\u907f\u514d\u786c\u4ef6\u7684\u5355\u70b9\u6545\u969c\u6216\u7f51\u7edc\u95ee\u9898\n`\u4e00\u81f4\u6027`\uff1a\u6bcf\u6b21\u8bfb\u53d6\u90fd\u4f1a\u8fd4\u56de\u8de8\u591a\u4e3b\u673a\u7684\u6700\u65b0\u5199\u5165\n`\u7b80\u5355`\uff1a\u5305\u62ec\u4e00\u4e2a\u5b9a\u4e49\u826f\u597d\u3001\u9762\u5411\u7528\u6237\u7684API\uff08gRPC\uff09\n`\u5b89\u5168`\uff1a\u5b9e\u73b0\u4e86\u5e26\u6709\u53ef\u9009\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u8eab\u4efd\u9a8c\u8bc1\u7684\u81ea\u52a8\u5316TLS\n`\u5feb\u901f`\uff1a\u6bcf\u79d210000\u6b21\u5199\u5165\u7684\u57fa\u51c6\u901f\u5ea6\n`\u53ef\u9760`\uff1a\u4f7f\u7528Raft\u7b97\u6cd5\u5b9e\u73b0\u4e86`\u5f3a\u4e00\u81f4`\u3001\u9ad8\u53ef\u7528\u7684\u670d\u52a1\u5b58\u50a8\u76ee\u5f55\n")),(0,l.kt)("h3",{id:"3\u5e94\u7528\u573a\u666f"},"3\u3001\u5e94\u7528\u573a\u666f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u670d\u52a1\u53d1\u73b0\n\u914d\u7f6e\u4e2d\u5fc3\n\u5206\u5e03\u5f0f\u9501 - 1.\u4fdd\u6301\u72ec\u5360 2.\u63a7\u5236\u65f6\u5e8f\n")),(0,l.kt)("p",null,"\u6ce8:  ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5947\u6570\u8282\u70b9\u539f\u5219")),(0,l.kt)("h3",{id:"4etcd\u96c6\u7fa4"},"4\u3001etcd\u96c6\u7fa4"),(0,l.kt)("p",null,"..."),(0,l.kt)("h3",{id:"5go-\u64cd\u4f5c-etcd"},"5\u3001go \u64cd\u4f5c etcd"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go get go.etcd.io/etcd/clientv3")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://godoc.org/go.etcd.io/etcd/clientv3"},"\u5b98\u65b9\u6587\u6863"),"  "),(0,l.kt)("h5",{id:"put-get"},(0,l.kt)("inlineCode",{parentName:"h5"},"PUT GET")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n\n    "go.etcd.io/etcd/clientv3"\n)\n\nfunc main() {\n    cli, err := clientv3.New(clientv3.Config{\n        Endpoints:   []string{"127.0.0.1:2379"},\n        DialTimeout: 5 * time.Second,\n    })\n    if err != nil {\n        // handle error!\n        fmt.Printf("connect to etcd failed, err:%v\\n", err)\n        return\n    }\n    fmt.Println("connect to etcd success")\n    defer cli.Close()\n    // put\n    ctx, cancel := context.WithTimeout(context.Background(), time.Second)\n    _, err = cli.Put(ctx, "kk", "123")\n    cancel()\n    if err != nil {\n        fmt.Printf("put to etcd failed, err:%v\\n", err)\n        return\n    }\n    // get\n    ctx, cancel = context.WithTimeout(context.Background(), time.Second)\n    resp, err := cli.Get(ctx, "kk")\n    cancel()\n    if err != nil {\n        fmt.Printf("get from etcd failed, err:%v\\n", err)\n        return\n    }\n    for _, ev := range resp.Kvs {\n        fmt.Printf("%s:%s\\n", ev.Key, ev.Value)\n    }\n}\n')),(0,l.kt)("h5",{id:"watch"},(0,l.kt)("inlineCode",{parentName:"h5"},"WATCH")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "time"\n\n    "go.etcd.io/etcd/clientv3"\n)\n\nfunc main() {\n    cli, err := clientv3.New(clientv3.Config{\n        Endpoints:   []string{"127.0.0.1:2379"},\n        DialTimeout: 5 * time.Second,\n    })\n    if err != nil {\n        fmt.Printf("connect to etcd failed, err:%v\\n", err)\n        return\n    }\n    fmt.Println("connect to etcd success")\n    defer cli.Close()\n    // watch key:kk change\n    rch := cli.Watch(context.Background(), "kk") // <-chan WatchResponse\n    for wresp := range rch {\n        for _, ev := range wresp.Events {\n            fmt.Printf("Type: %s Key:%s Value:%s\\n", ev.Type, ev.Kv.Key, ev.Kv.Value)\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u64cd\u4f5c\u66f4\u6539\u952e\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-linux"},'etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put kk "123"\nOK\n\netcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 del kk\n1\n\netcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put kk "321"\nOK\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u901a\u77e5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"watch> ./watch\nconnect to etcd success\nType: PUT Key:kk Value:123\nType: DELETE Key:kk Value:\nType: PUT Key:kk Value:321\n")),(0,l.kt)("h5",{id:"lease"},(0,l.kt)("inlineCode",{parentName:"h5"},"LEASE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\n// etcd lease\n\nimport (\n    "context"\n    "log"\n\n    "go.etcd.io/etcd/clientv3"\n)\n\nfunc main() {\n    cli, err := clientv3.New(clientv3.Config{\n        Endpoints:   []string{"127.0.0.1:2379"},\n        DialTimeout: time.Second * 5,\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("connect to etcd success.")\n    defer cli.Close()\n\n    // \u521b\u5efa\u4e00\u4e2a5\u79d2\u7684\u79df\u7ea6\n    resp, err := cli.Grant(context.TODO(), 5)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // 5\u79d2\u949f\u4e4b\u540e, /nazha/ \u8fd9\u4e2akey\u5c31\u4f1a\u88ab\u79fb\u9664\n    _, err = cli.Put(context.TODO(), "/kk/", "123", clientv3.WithLease(resp.ID))\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KEEPALIVE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "time"\n\n    "go.etcd.io/etcd/clientv3"\n)\n\n// etcd keepAlive\n\nfunc main() {\n    cli, err := clientv3.New(clientv3.Config{\n        Endpoints:   []string{"127.0.0.1:2379"},\n        DialTimeout: time.Second * 5,\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("connect to etcd success.")\n    defer cli.Close()\n\n    resp, err := cli.Grant(context.TODO(), 5)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    _, err = cli.Put(context.TODO(), "/kk/", "123", clientv3.WithLease(resp.ID))\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // the key \'foo\' will be kept forever\n    ch, kaerr := cli.KeepAlive(context.TODO(), resp.ID)\n    if kaerr != nil {\n        log.Fatal(kaerr)\n    }\n    for {\n        ka := <-ch\n        fmt.Println("ttl:", ka.TTL)\n    }\n}\n')),(0,l.kt)("h3",{id:"6\u5206\u5e03\u5f0f\u9501"},"6\u3001\u5206\u5e03\u5f0f\u9501"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'cli, err := clientv3.New(clientv3.Config{Endpoints: endpoints})\nif err != nil {\n    log.Fatal(err)\n}\ndefer cli.Close()\n\n// \u521b\u5efa\u4e24\u4e2a\u5355\u72ec\u7684\u4f1a\u8bdd\u7528\u6765\u6f14\u793a\u9501\u7ade\u4e89\ns1, err := concurrency.NewSession(cli)\nif err != nil {\n    log.Fatal(err)\n}\ndefer s1.Close()\nm1 := concurrency.NewMutex(s1, "/my-lock/")\n\ns2, err := concurrency.NewSession(cli)\nif err != nil {\n    log.Fatal(err)\n}\ndefer s2.Close()\nm2 := concurrency.NewMutex(s2, "/my-lock/")\n\n// \u4f1a\u8bdds1\u83b7\u53d6\u9501\nif err := m1.Lock(context.TODO()); err != nil {\n    log.Fatal(err)\n}\nfmt.Println("acquired lock for s1")\n\nm2Locked := make(chan struct{})\ngo func() {\n    defer close(m2Locked)\n    // \u7b49\u5f85\u76f4\u5230\u4f1a\u8bdds1\u91ca\u653e\u4e86/my-lock/\u7684\u9501\n    if err := m2.Lock(context.TODO()); err != nil {\n        log.Fatal(err)\n    }\n}()\n\nif err := m1.Unlock(context.TODO()); err != nil {\n    log.Fatal(err)\n}\nfmt.Println("released lock for s1")\n\n<-m2Locked\nfmt.Println("acquired lock for s2")\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u8f93\u51fa")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-linux"},"acquired lock for s1\nreleased lock for s1\nacquired lock for s2\n")))}m.isMDXComponent=!0}}]);