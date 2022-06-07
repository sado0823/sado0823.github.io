"use strict";(self.webpackChunkgo_kitx_webside=self.webpackChunkgo_kitx_webside||[]).push([[9417],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6307:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"token-limit",title:"token\u4ee4\u724c\u6876\u9650\u6d41\u7b97\u6cd5",authors:["sado"],tags:["golang","docker","ratelimit"],date:"2022-06-07T16:36"},p="go-tokenlimit",m={permalink:"/blog/token-limit",source:"@site/blog/ratelimit/2022-06-07-token.md",title:"token\u4ee4\u724c\u6876\u9650\u6d41\u7b97\u6cd5",description:"one of rate limit - token bucket, written in go",date:"2022-06-07T16:36:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"docker",permalink:"/blog/tags/docker"},{label:"ratelimit",permalink:"/blog/tags/ratelimit"}],readingTime:4.45,truncated:!0,authors:[{name:"sado",title:"Developer",url:"https://github.com/sado0823",imageURL:"/img/avatar.jpeg",key:"sado"}],frontMatter:{slug:"token-limit",title:"token\u4ee4\u724c\u6876\u9650\u6d41\u7b97\u6cd5",authors:["sado"],tags:["golang","docker","ratelimit"],date:"2022-06-07T16:36"},nextItem:{title:"bbr\u81ea\u9002\u5e94\u9650\u6d41\u7b97\u6cd5",permalink:"/blog/bbr-limit"}},s={authorsImageUrls:[void 0]},u=[{value:"\u9879\u76ee\u5730\u5740:",id:"\u9879\u76ee\u5730\u5740",level:2},{value:"what?",id:"what",level:2},{value:"why?",id:"why",level:2},{value:"how?",id:"how",level:2},{value:"\u57fa\u672c\u601d\u60f3",id:"\u57fa\u672c\u601d\u60f3",level:3},{value:"\u6267\u884c\u8fc7\u7a0b",id:"\u6267\u884c\u8fc7\u7a0b",level:3},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:3},{value:"example",id:"example",level:2},{value:"references",id:"references",level:2}],c={toc:u};function k(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"one of rate limit - token bucket, written in go"),(0,l.kt)("h2",{id:"\u9879\u76ee\u5730\u5740"},"\u9879\u76ee\u5730\u5740:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sado0823/go-tokenlimit"},"https://github.com/sado0823/go-tokenlimit")),(0,l.kt)("h2",{id:"what"},"what?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u4e4b\u524d\u804abbr\u81ea\u9002\u5e94\u9650\u6d41\u7684\u65f6\u5019, \u8bf4\u5230\u4e86 `\u4ee4\u724c\u6876` \u548c `\u6f0f\u6876` \u7684\u9650\u6d41\u7b97\u6cd5, \u4eca\u5929\u7684\u4e3b\u89d2\u5c31\u662f `\u4ee4\u724c\u6876` - `token bucket`.\n\n\u53ef\u4ee5\u6982\u62ec\u5982\u4e0b:\n    - \u4ee4\u724c\u6876: \u9650\u6d41 (`Token Bucket`)\n    - \u6f0f\u6876: \u6574\u6d41 (`Leaky Bucket`)\n\n\u4ee4\u724c\u6876\u7b97\u6cd5\u7684\u539f\u7406\u662f\u7cfb\u7edf\u4f1a\u4ee5\u4e00\u4e2a\u6052\u5b9a\u7684\u901f\u5ea6\u5f80\u6876\u91cc\u653e\u5165\u4ee4\u724c\uff0c\u800c\u5982\u679c\u8bf7\u6c42\u9700\u8981\u88ab\u5904\u7406\uff0c\u5219\u9700\u8981\u5148\u4ece\u6876\u91cc\u83b7\u53d6\u4e00\u4e2a\u4ee4\u724c\uff0c\u5f53\u6876\u91cc\u6ca1\u6709\u4ee4\u724c\u53ef\u53d6\u65f6\uff0c\u5219\u62d2\u7edd\u670d\u52a1\u3002\u5982\u679c\u4ee4\u724c\u5df2\u7ecf\u6ee1\u4e86\uff0c\u5219\u4e22\u5f03\u4ee4\u724c\n")),(0,l.kt)("h2",{id:"why"},"why?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u76f8\u4fe1\u5927\u5bb6\u90fd\u5f88\u719f\u6089, \u5728web\u670d\u52a1\u4e2d, \u6709\u65f6\u624b\u52a8\u7684\u8c03\u6574\u6d41\u91cf\u9650\u901f\u7684\u9608\u503c,  \u5e76\u4e14\u5141\u8bb8\u4e00\u5b9a\u7684\u6d41\u91cf\u5cf0\u503c\u573a\u666f, \u8fd9\u79cd\u60c5\u51b5\u4e0b`\u4ee4\u724c\u6876`\u5c31\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a\u4e86\n")),(0,l.kt)("p",null,"\u9650\u6d41\u7279\u70b9\u662f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53bucket\u6ee1\u4e86\u7684\u65f6\u5019, \u5c06\u4e0d\u5728\u653e\u5165\u65b0\u7684token, \u4e0d\u80fd\u8d85\u8fc7\u6700\u5148\u9650\u5236\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7167\u4e00\u5b9a\u7684\u901f\u7387\u8fdb\u884ctoken\u7684\u589e\u52a0"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4e00\u6b21\u6027\u6d88\u8017\u5168\u90e8token, \u5373\u5141\u8bb8\u4e00\u5b9a\u7684\u6d41\u91cf\u5cf0\u503c\u5b58\u5728")),(0,l.kt)("h2",{id:"how"},"how?"),(0,l.kt)("h3",{id:"\u57fa\u672c\u601d\u60f3"},"\u57fa\u672c\u601d\u60f3"),(0,l.kt)("p",null,"\u901a\u8fc7\u7ef4\u62a4\u4e00\u4e2a\u5177\u6709\u5bb9\u91cf\u4e0a\u9650\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"token"),"\u6876, \u6709",(0,l.kt)("inlineCode",{parentName:"p"},"token"),"\u5219\u8bf7\u6c42\u901a\u8fc7, \u65e0\u5219\u5931\u8d25, \u4e0d\u65ad\u7684\u6d88\u8017\u548c\u8865\u5145\u8fd9\u4e2a\u6876, \u4ece\u800c\u8fbe\u5230\u9650\u6d41\u7684\u6548\u679c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211216000651768",src:n(9186).Z,width:"1758",height:"1014"})),(0,l.kt)("h3",{id:"\u6267\u884c\u8fc7\u7a0b"},"\u6267\u884c\u8fc7\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9996\u5148\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"\u6876"),", \u91cc\u9762\u88c5\u6ee1\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"token"),", \u5b58\u5728\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"\u5bb9\u91cf\u4e0a\u9650")),(0,l.kt)("li",{parentName:"ol"},"\u7528\u6052\u5b9a\u7684\u901f\u7387\u5f80",(0,l.kt)("inlineCode",{parentName:"li"},"\u6876"),"\u4e2d\u586b\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"token"),", \u586b\u6ee1\u5219",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e22\u5f03token")),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u8bf7\u6c42\u8fdb\u6765, \u53d6\u8d70\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"token"),", \u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"token"),", \u5219",(0,l.kt)("inlineCode",{parentName:"li"},"\u62d2\u7edd\u8bf7\u6c42"))),(0,l.kt)("h3",{id:"\u6e90\u7801\u5206\u6790"},"\u6e90\u7801\u5206\u6790"),(0,l.kt)("p",null,"\u8be5\u5b9e\u73b0\u4e3a\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"lua"),"\u811a\u672c, \u5728",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u4e2d\u7ef4\u62a4",(0,l.kt)("inlineCode",{parentName:"p"},"\u6876"),"\u7684\u8ba1\u6570, \u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u5b95\u673a\u4e86, \u5219\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"go"),"\u81ea\u5e26\u7684",(0,l.kt)("inlineCode",{parentName:"p"},'"golang.org/x/time/rate"')," \u8fdb\u884c\u515c\u5e95"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lua.lua")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local rate = tonumber(ARGV[1])\nlocal cap = tonumber(ARGV[2]) -- \u6700\u5927\u5bb9\u91cf\nlocal now = tonumber(ARGV[3]) -- \u5f53\u524d\u65f6\u95f4\u6233\nlocal requested = tonumber(ARGV[4]) -- \u9700\u8981\u53bb\u9664\u7684token\u6570\u91cf\nlocal fill_time = cap/rate\nlocal ttl = math.floor(fill_time*2) -- \u7ed9\u4e00\u5b9a\u7684\u8fc7\u671f\u65f6\u95f4, \u4f7f\u5f97token\u6062\u590d\u5e73\u6ed1\n\n-- KEYS[1]: token key \u4e0a\u6b21\u5269\u4f59\u503c\nlocal last_tokens = tonumber(redis.call("get",KEYS[1]))\nif last_tokens == nil then\n    last_tokens = cap\nend\n\n-- KEYS[2]: token refreshed timestamp \u4e0a\u4e00\u6b21\u5237\u65b0token\u7684\u65f6\u95f4\u6233\nlocal last_refreshed = tonumber(redis.call("get",KEYS[2]))\nif last_refreshed == nil then\n    last_refreshed = 0\nend\n\n-- \u8ba1\u7b97\u65f6\u95f4\u5dee\u503c\nlocal delta = math.max(0, now-last_refreshed)\n-- \u65f6\u95f4\u5dee\u503cx\u589e\u52a0\u901f\u7387 + \u4e0a\u6b21\u5269\u4f59\u503c, \u8ba1\u7b97\u51fa\u5f53\u524d\u53ef\u7528\u503c\nlocal left = math.min(cap,last_tokens+delta*rate)\nlocal new_tokens = left\n-- \u53ef\u7528\u503c > \u8bf7\u6c42\u503c, \u5219\u901a\u8fc7\nlocal allowed = left >= requested\nif allowed then\n  new_tokens = left - requested\nend\n\nredis.call("setex", KEYS[1], ttl, new_tokens)\nredis.call("setex", KEYS[2], ttl, now)\n\nreturn allowed\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tokenlimit.go")),(0,l.kt)("p",null,"\u4e3b\u51fd\u6570\u91cc\u4f7f\u7528\u7684\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"interface"),", \u4e3a\u4ee5\u540e\u6dfb\u52a0\u522b\u7684\u5b58\u50a8\u5f15\u64ce\u7559\u4e0b\u4e86\u53ef\u80fd\u6027 (\u5927\u6982\u7387\u4e5f\u4e0d\u4f1a\u7528\u522b\u7684\u5b58\u50a8\u4e86...)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"RedisI interface {\n        Eval(ctx context.Context, script string, keys []string, args ...interface{}) (interface{}, error)\n        IsErrNil(err error) bool\n        Ping() bool\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tokenlimit.go")),(0,l.kt)("p",null,"\u6700\u7ec8\u5b9e\u73b0\u9650\u6d41\u5668\u7684\u7ed3\u6784\u4f53"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"Limiter struct {\n        rate int // generate token number each second\n        cap  int // at most token to store\n\n        local *xrate.Limiter // limiter in process\n\n        remote         RedisI // for distributed situation, can use redis\n        tokenKey       string\n        tsKey          string // timestamp key, tag get token time\n        remoteMu       sync.Mutex\n        remoteAlive    uint32 // ping remote server is alive or not\n        monitorStarted bool\n}\n\n// New a Limiter\nfunc New(rate, cap int, store RedisI, key string) *Limiter {\n    return &Limiter{\n        rate:        rate,\n        cap:         cap,\n        local:       xrate.NewLimiter(xrate.Every(time.Second/time.Duration(rate)), cap),\n        remote:      store,\n        tokenKey:    fmt.Sprintf(tokenFormat, key),\n        tsKey:       fmt.Sprintf(timestampFormat, key),\n        remoteAlive: 1,\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tokenlimit.go")),(0,l.kt)("p",null,"\u65b0\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"redis"),"\u5b58\u50a8\u7684\u52a9\u624b\u51fd\u6570, \u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"p"},"dsn"),"\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func NewStore(addr string) RedisI {\n    return redisx.New(addr)\n}\n")),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func test() {\n    const (\n        total = 100\n        rate  = 5\n        burst = 10\n    )\n  \n  limiter := New(rate, total, NewStore("127.0.0.1:6379"), "test-token-limit")\n  \n  var allowed int\n  for i := 0; i < total; i++ {\n    \n    time.Sleep(time.Second / time.Duration(total))\n    \n    if limiter.Allow() {\n      allowed++\n    }\n    \n  }\n  \n    fmt.Printf("Test_Remote: allowed:%d, burst:%d, rate:%d \\n", allowed, burst, rate)\n}\n\n')),(0,l.kt)("h2",{id:"references"},"references"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tal-tech/go-zero"},"go-zero")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Token_bucket"},"wiki")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://dev.to/satrobit/rate-limiting-using-the-token-bucket-algorithm-3cjh"},"token-bucket"))))}k.isMDXComponent=!0},9186:function(e,t,n){t.Z=n.p+"assets/images/token-limit-39746932a580248d2c0b462a3104e32d.png"}}]);