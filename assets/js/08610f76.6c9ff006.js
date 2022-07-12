"use strict";(self.webpackChunkgo_kitx_webside=self.webpackChunkgo_kitx_webside||[]).push([[4179],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=r.createContext({}),m=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=m(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),f=m(t),s=i,d=f["".concat(c,".").concat(s)]||f[s]||u[s]||a;return t?r.createElement(d,o(o({ref:e},p),{},{components:t})):r.createElement(d,o({ref:e},p))}));function s(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8206:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={slug:"climb-stairs-dp",title:'\u4ece"\u722c\u697c\u68af"\u4e86\u89e3\u52a8\u6001\u89c4\u5212\u7b97\u6cd5',authors:["sado"],tags:["golang","algorithm","dp"],date:"2022-07-12T14:36"},c='\u4ece"\u722c\u697c\u68af"\u4e86\u89e3\u52a8\u6001\u89c4\u5212\u7b97\u6cd5',m={permalink:"/blog/climb-stairs-dp",source:"@site/blog/algorithm/2022-07-12-climb-stairs-dp.md",title:'\u4ece"\u722c\u697c\u68af"\u4e86\u89e3\u52a8\u6001\u89c4\u5212\u7b97\u6cd5',description:'1) "\u722c\u697c\u68af"\u95ee\u9898',date:"2022-07-12T14:36:00.000Z",formattedDate:"July 12, 2022",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"algorithm",permalink:"/blog/tags/algorithm"},{label:"dp",permalink:"/blog/tags/dp"}],readingTime:3.31,truncated:!0,authors:[{name:"sado",title:"Developer",url:"https://github.com/sado0823",imageURL:"/img/avatar.jpeg",key:"sado"}],frontMatter:{slug:"climb-stairs-dp",title:'\u4ece"\u722c\u697c\u68af"\u4e86\u89e3\u52a8\u6001\u89c4\u5212\u7b97\u6cd5',authors:["sado"],tags:["golang","algorithm","dp"],date:"2022-07-12T14:36"},prevItem:{title:"\u9501",permalink:"/blog/computer-science-lock"},nextItem:{title:"go\u9519\u8bef\u5904\u7406\u5de5\u7a0b\u5316\u5b9e\u8df5",permalink:"/blog/go-error-handle"}},p={authorsImageUrls:[void 0]},u=[{value:"1) &quot;\u722c\u697c\u68af&quot;\u95ee\u9898",id:"1-\u722c\u697c\u68af\u95ee\u9898",level:2},{value:"2) \u4e86\u89e3\u52a8\u6001\u89c4\u5212",id:"2-\u4e86\u89e3\u52a8\u6001\u89c4\u5212",level:2},{value:"1) \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:3},{value:"2) \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b",id:"2-\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b",level:3},{value:"3) \u81ea\u9876\u5411\u4e0b",id:"3-\u81ea\u9876\u5411\u4e0b",level:3},{value:"4) \u5e26\u5907\u5fd8\u7684\u81ea\u9876\u5411\u4e0b",id:"4-\u5e26\u5907\u5fd8\u7684\u81ea\u9876\u5411\u4e0b",level:3},{value:"5) \u81ea\u5e95\u5411\u4e0a",id:"5-\u81ea\u5e95\u5411\u4e0a",level:3},{value:"3) \u4f7f\u7528\u52a8\u6001\u89c4\u5212",id:"3-\u4f7f\u7528\u52a8\u6001\u89c4\u5212",level:2}],f={toc:u};function s(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u722c\u697c\u68af\u95ee\u9898"},'1) "\u722c\u697c\u68af"\u95ee\u9898'),(0,a.kt)("p",null,'"\u722c\u697c\u68af"\u5373\u4e3a',(0,a.kt)("inlineCode",{parentName:"p"},"leetcode"),"\u7b2c70\u9898, \u9898\u76ee\u539f\u6587\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u5047\u8bbe\u4f60\u6b63\u5728\u722c\u697c\u68af\u3002\u9700\u8981 n \u9636\u4f60\u624d\u80fd\u5230\u8fbe\u697c\u9876\u3002\n\u6bcf\u6b21\u4f60\u53ef\u4ee5\u722c 1 \u6216 2 \u4e2a\u53f0\u9636\u3002\u4f60\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u5462\uff1f\n\n// \u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1an = 2\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u3002\n1. 1 \u9636 + 1 \u9636\n2. 2 \u9636\n\n// \u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1an = 3\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u6709\u4e09\u79cd\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u3002\n1. 1 \u9636 + 1 \u9636 + 1 \u9636\n2. 1 \u9636 + 2 \u9636\n3. 2 \u9636 + 1 \u9636\n\n// \u63d0\u793a\uff1a\n1 <= n <= 45\n")),(0,a.kt)("h2",{id:"2-\u4e86\u89e3\u52a8\u6001\u89c4\u5212"},"2) \u4e86\u89e3\u52a8\u6001\u89c4\u5212"),(0,a.kt)("h3",{id:"1-\u7b80\u4ecb"},"1) \u7b80\u4ecb"),(0,a.kt)("p",null,"\u2002","\u2002","\u2002","\u2002"," \u52a8\u6001\u89c4\u5212(dynamic programming)\u662f\u8fd0\u7b79\u5b66\u7684\u4e00\u4e2a\u5206\u652f\uff0c\n\u662f\u6c42\u89e3\u51b3\u7b56\u8fc7\u7a0b(decision process)\u6700\u4f18\u5316\u7684\u6570\u5b66\u65b9\u6cd5\u3002\n20\u4e16\u7eaa50\u5e74\u4ee3\u521d\u7f8e\u56fd\u6570\u5b66\u5bb6R.E.Bellman\u7b49\u4eba\u5728\u7814\u7a76\u591a\u9636\u6bb5\u51b3\u7b56\u8fc7\u7a0b(multistep decision process)\u7684\u4f18\u5316\u95ee\u9898\u65f6\uff0c\n\u63d0\u51fa\u4e86\u8457\u540d\u7684\u6700\u4f18\u5316\u539f\u7406(principle of optimality)\uff0c\u628a\u591a\u9636\u6bb5\u8fc7\u7a0b\u8f6c\u5316\u4e3a\u4e00\u7cfb\u5217\u5355\u9636\u6bb5\u95ee\u9898\uff0c\u5229\u7528\u5404\u9636\u6bb5\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\n\u9010\u4e2a\u6c42\u89e3\uff0c\u521b\u7acb\u4e86\u89e3\u51b3\u8fd9\u7c7b\u8fc7\u7a0b\u4f18\u5316\u95ee\u9898\u7684\u65b0\u65b9\u6cd5\u2014\u2014\u52a8\u6001\u89c4\u5212\u3002",(0,a.kt)("a",{parentName:"p",href:"https://zh.m.wikipedia.org/zh-hans/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92"},"wiki")),(0,a.kt)("h3",{id:"2-\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"},"2) \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b"),(0,a.kt)("p",null,"todo"),(0,a.kt)("h3",{id:"3-\u81ea\u9876\u5411\u4e0b"},"3) \u81ea\u9876\u5411\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"top-down")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println(climbStairs(44))\n}\n\nfunc climbStairs(n int) int {\n  // \u52a8\u6001\u89c4\u5212\n    // f(0)=f(1)=1\n    // f(2)=f(0)+f(1)=2\n    // f(3)=f(2)+f(1)=2+1=3\n    // f(4)=f(3)+f(2)=3+2=5\n    // ...\n    // f(x) = f(x-1) + f(x-2)\n    // \u81ea\u9876\u5411\u4e0b: \u76f4\u63a5\u9012\u5f52\u7406\u8bba\u4e0a\u53ef\u884c,\u53ef\u80fd\u8d85\u65f6\n    // climbStairs(n-1) + climbStairs(n-2)\n  if n == 0 || n == 1 {\n    return 1\n  }\n  return climbStairs(n-1) + climbStairs(n-2)\n}\n')),(0,a.kt)("h3",{id:"4-\u5e26\u5907\u5fd8\u7684\u81ea\u9876\u5411\u4e0b"},"4) \u5e26\u5907\u5fd8\u7684\u81ea\u9876\u5411\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"top-down with memoization")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println(climbStairs(44))\n}\n\nfunc climbStairs(n int) int {\n    // \u52a8\u6001\u89c4\u5212\n    // f(0)=f(1)=1\n    // f(2)=f(0)+f(1)=2\n    // f(3)=f(2)+f(1)=2+1=3\n    // f(4)=f(3)+f(2)=3+2=5\n    // ...\n    // f(x) = f(x-1) + f(x-2)\n    // \u81ea\u9876\u5411\u4e0b: \u76f4\u63a5\u9012\u5f52\u7406\u8bba\u4e0a\u53ef\u884c,\u53ef\u80fd\u8d85\u65f6\n    // climbStairs(n-1) + climbStairs(n-2)\n    // \u4f18\u5316: \u5e26\u5907\u5fd8\u7684\u81ea\u9876\u5411\u4e0b\u6cd5,\u4f18\u5316\u65f6\u95f4\u590d\u6742\u5ea6 (top-down with memoization)\n    v, ok := memo[n]\n    if ok {\n        return v\n    }\n    v1, ok1 := memo[n-1]\n    v2, ok2 := memo[n-2]\n    if ok1 && ok2 {\n        return v1 + v2\n    }\n\n    if ok1 {\n        v2 := climbStairs(n - 2)\n        memo[n-2] = v2\n        return v1 + v2\n    }\n\n    if ok2 {\n        v1 := climbStairs(n - 1)\n        memo[n-1] = v1\n        return v1 + v2\n    }\n\n    v1 = climbStairs(n - 1)\n    memo[n-1] = v1\n    v2 = climbStairs(n - 2)\n    memo[n-2] = v2\n\n    return v1 + v2\n}\n')),(0,a.kt)("h3",{id:"5-\u81ea\u5e95\u5411\u4e0a"},"5) \u81ea\u5e95\u5411\u4e0a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bottom-up method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println(climbStairs(44))\n}\n\nfunc climbStairs(n int) int {\n    // \u52a8\u6001\u89c4\u5212\n    // f(0)=f(1)=1\n    // f(2)=f(0)+f(1)=2\n    // f(3)=f(2)+f(1)=2+1=3\n    // f(4)=f(3)+f(2)=3+2=5\n    // ...\n    // f(x) = f(x-1) + f(x-2)\n    // \u81ea\u5e95\u5411\u4e0a\u6cd5, \u6eda\u52a8\u6570\u7ec4(\u4ece\u5c0f\u5230\u5927): bottom-up method\n    left, right, count := 0, 0, 1\n    for i := 1; i <= n; i++ {\n        left = right\n        right = count\n        count = left + right\n    }\n    return count\n}\n')),(0,a.kt)("h2",{id:"3-\u4f7f\u7528\u52a8\u6001\u89c4\u5212"},"3) \u4f7f\u7528\u52a8\u6001\u89c4\u5212"),(0,a.kt)("p",null,"..."))}s.isMDXComponent=!0}}]);