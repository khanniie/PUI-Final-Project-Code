(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{rgsX:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("9eSz"),n("6cYQ")),i=(n("rl5w"),n("pbrb"));e.a=function(t){var e=t.title,n=t.date,r=(t.path,t.coverImage,t.coverVideo,t.author,t.excerpt,t.tags,t.html),l=(t.links,t.previousPost),c=t.nextPost,s=l&&l.frontmatter.path,m=l&&l.frontmatter.title,p=c&&c.frontmatter.path,u=c&&c.frontmatter.title;return a.a.createElement(i.c,{className:"post-container",width:"100%"},a.a.createElement(i.b,{fontFamily:"Domaine",fontSize:"40px"},e),a.a.createElement(i.b,{fontFamily:"EB Garamond",fontSize:"24px",marginBottom:"24px"},n),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),a.a.createElement(o.a,{previousPath:s,previousLabel:m,nextPath:p,nextLabel:u}))}},sweJ:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("vrFN"),i=n("Bl7J"),l=n("rgsX"),c=(n("qhky"),n("5FQF"));n("pbrb");e.default=function(t){var e=t.data,n=t.pageContext,s=e.markdownRemark,m=s.frontmatter,p=m.title,u=m.date,d=m.path,f=m.author,v=m.coverImage,h=m.coverVideo,x=m.links,E=m.excerpt,g=m.tags,w=s.excerpt,b=s.id,k=s.html,I=n.next,P=n.previous,y=Object(r.useState)(!1),F=y[0],L=y[1],S=function(){document.scrollingElement.scrollTop>70?L(!0):L(!1)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[]),a.a.createElement(i.a,null,a.a.createElement(o.a,{title:p,description:E||w}),F?a.a.createElement(c.a,{text:"Return to top ↑",internal:!0,passInProps:{position:"fixed",zIndex:"1",left:"5%",top:"5%",className:"return-button",props:{onClick:function(){document.scrollingElement.scrollTop=0}}}}):"",a.a.createElement(l.a,{key:b,title:p,date:u,path:d,author:f,coverImage:v,coverVideo:h,links:x,html:k,tags:g,previousPost:P,nextPost:I}))};var s="2994161705"}}]);
//# sourceMappingURL=component---src-templates-page-js-d2fdbeab3d711dffce06.js.map