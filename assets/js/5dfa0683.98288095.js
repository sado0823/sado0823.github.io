"use strict";(self.webpackChunkgo_kitx_webside=self.webpackChunkgo_kitx_webside||[]).push([[216],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3091:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={slug:"go-error-handle",title:"go\u9519\u8bef\u5904\u7406\u5de5\u7a0b\u5316\u5b9e\u8df5",authors:["sado"],tags:["golang"],date:"2022-06-07T21:35"},c="\u9519\u8bef\u5904\u7406\u5de5\u7a0b\u5316\u5b9e\u8df5",u={permalink:"/blog/go-error-handle",source:"@site/blog/go/2022-06-07-error-handle.md",title:"go\u9519\u8bef\u5904\u7406\u5de5\u7a0b\u5316\u5b9e\u8df5",description:"1) \u80cc\u666f",date:"2022-06-07T21:35:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"golang",permalink:"/blog/tags/golang"}],readingTime:3.435,truncated:!0,authors:[{name:"sado",title:"Developer",url:"https://github.com/sado0823",imageURL:"/img/avatar.jpeg",key:"sado"}],frontMatter:{slug:"go-error-handle",title:"go\u9519\u8bef\u5904\u7406\u5de5\u7a0b\u5316\u5b9e\u8df5",authors:["sado"],tags:["golang"],date:"2022-06-07T21:35"},nextItem:{title:"token\u4ee4\u724c\u6876\u9650\u6d41\u7b97\u6cd5",permalink:"/blog/token-limit"}},p={authorsImageUrls:[void 0]},s=[{value:"1) \u80cc\u666f",id:"1-\u80cc\u666f",level:2}],f={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u80cc\u666f"},"1) \u80cc\u666f"),(0,a.kt)("p",null,"\u2002","\u2002","\u2002","\u2002","\u4e0d\u719f\u6089\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b, \u62ff\u5230\u4e00\u4e2a\u9519\u8bef\u6392\u67e5, \u65e0\u6cd5\u4e32\u8d77\u6765\u6574\u4e2a\u4ee3\u7801\u7684\u8c03\u7528\u94fe\u8def, \u9519\u8bef\u4ea7\u751f\u5806\u6808, \u6392\u67e5\u56f0\u96be\u3001\u7f13\u6162, \u6839\u636etrace\u53ea\u80fd\u770b\u89c1\u670d\u52a1\u8c03\u7528\u94fe"))}g.isMDXComponent=!0}}]);