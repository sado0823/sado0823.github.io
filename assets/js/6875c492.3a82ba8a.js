"use strict";(self.webpackChunkgo_kitx_webside=self.webpackChunkgo_kitx_webside||[]).push([[8610],{9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(7294),r=a(9960),n=a(4118),l=a(995),o=a(5999),i=a(8824),c=a(833),u=a(5281),g=a(6299),m=a(4739),d=a(6010);function p(e){var t,a=e.tag,p=e.items,h=e.sidebar,f=e.listMetadata,b=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(a.count),tagName:a.label});return s.createElement(c.FG,{className:(0,d.Z)(u.k.wrapper.blogPages,u.k.page.blogTagPostListPage)},s.createElement(c.d,{title:E}),s.createElement(m.Z,{tag:"blog_tags_posts"}),s.createElement(n.Z,{sidebar:h},s.createElement("header",{className:"margin-bottom--xl"},s.createElement("h1",null,E),s.createElement(r.Z,{href:a.allTagsPath},s.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return s.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},s.createElement(t,null))})),s.createElement(g.Z,{metadata:f})))}},995:function(e,t,a){var s=a(7294),r=a(6244),n=a(2949);t.Z=function(e){var t="dark"===(0,n.I)().colorMode?"github-dark":"github-light",a=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(e.isBlogPostPage){var s,r,n=a.current.querySelector("iframe.utterances-frame");n?(r={type:"set-theme",theme:t},n.contentWindow.postMessage(r,"https://utteranc.es")):((s=document.createElement("script")).src="https://utteranc.es/client.js",s.setAttribute("repo","sado0823/sado0823.github.io"),s.setAttribute("issue-term","pathname"),s.setAttribute("label","comment"),s.setAttribute("theme",t),s.crossOrigin="anonymous",s.async=!0,a.current.appendChild(s))}}),[t]),s.createElement(s.Fragment,null,s.createElement(r.Z,e),e.isBlogPostPage&&s.createElement("div",{ref:a}))}}}]);