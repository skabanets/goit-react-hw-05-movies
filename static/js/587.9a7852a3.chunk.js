"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[587],{4082:function(n,t,e){e.d(t,{O:function(){return m}});var r,a,i,u,c=e(7689),o=e(1087),s=e(168),p=e(7924),f=p.ZP.li(r||(r=(0,s.Z)(["\n  max-width: 224px;\n"]))),d=p.ZP.img(a||(a=(0,s.Z)(["\n  height: 336px;\n  margin-bottom: 5px;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),l=p.ZP.h3(i||(i=(0,s.Z)(["\n  color: #333031;\n  font-size: 18px;\n  text-align: center;\n"]))),h=e(184),x=function(n){var t=n.movieInfo,e=t.id,r=t.poster_path,a=t.name,i=t.title,u=(0,c.TH)(),s=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg";return(0,h.jsx)(f,{children:(0,h.jsxs)(o.rU,{state:{from:u},to:"/movies/".concat(e),children:[(0,h.jsx)(d,{src:s,alt:a||i}),(0,h.jsx)(l,{children:a||i})]})})},v=p.ZP.ul(u||(u=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: (100%-60px)/4;\n"]))),m=function(n){var t=n.movies;return(0,h.jsx)(v,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,h.jsx)(x,{movieInfo:n},n.id)}))})}},9677:function(n,t,e){e.d(t,{$:function(){return f}});var r,a,i=e(1149),u=e(168),c=e(7924),o=c.ZP.div(r||(r=(0,u.Z)(["\n  padding: 20px 0;\n"]))),s=c.ZP.h2(a||(a=(0,u.Z)(["\n  margin-bottom: 20px;\n  font-size: 28px;\n  line-height: 1.11;\n  text-align: left;\n  letter-spacing: 0.02em;\n  font-weight: 700;\n  color: #333031;\n"]))),p=e(184),f=function(n){var t=n.title,e=n.children;return(0,p.jsx)(o,{children:(0,p.jsxs)(i.W,{children:[t&&(0,p.jsx)(s,{children:t}),e]})})}},2587:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,i,u=e(9439),c=e(2791),o=e(168),s=e(7924),p=s.ZP.form(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),f=s.ZP.input(a||(a=(0,o.Z)(["\n  padding: 5px 10px;\n  width: 400px;\n"]))),d=s.ZP.button(i||(i=(0,o.Z)(["\n  color: white;\n  padding: 6px 12px;\n  background-color: darkgreen;\n  border-radius: 5px;\n"]))),l=e(184),h=function(n){var t=n.onSubmit,e=(0,c.useState)(""),r=(0,u.Z)(e,2),a=r[0],i=r[1];return(0,l.jsxs)(p,{onSubmit:function(n){n.preventDefault(),t(a.trim().toLowerCase()),i("")},children:[(0,l.jsx)(f,{type:"text",name:"name",value:a,onChange:function(n){var t=n.target.value;i(t)},required:!0}),(0,l.jsx)(d,{type:"submit",children:"Search"})]})},x=e(9677),v=e(4082),m=e(4390),g=e(6143),w=e(7689),Z=e(2094),b=function(){var n=(0,c.useState)(""),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(null),i=(0,u.Z)(a,2),o=i[0],s=i[1],p=(0,c.useState)(!1),f=(0,u.Z)(p,2),d=f[0],b=f[1],j=(0,w.TH)();(0,c.useEffect)((function(){j.search&&r(j.search.slice(7)),e&&(0,m.IR)(e).then(s).catch((function(n){return b(n.message)}))}),[e,j]);return d?(Z.Am.error("The request failed! Reload the page or try again later."),(0,l.jsx)(w.Fg,{to:"/"})):e&&!o?(0,l.jsx)(g.a,{}):(0,l.jsx)("div",{children:(0,l.jsxs)(x.$,{title:"Movies",children:[(0,l.jsx)(h,{onSubmit:function(n){r(n),j.search="?query=".concat(n)}}),o&&(0,l.jsx)(v.O,{movies:o}),e&&!o.length&&(0,l.jsx)("h2",{children:"No films found for this request."})]})})}},4390:function(n,t,e){e.d(t,{E6:function(){return c},IR:function(){return o},M1:function(){return p},Pg:function(){return s},tx:function(){return f}});var r=e(5861),a=e(7757),i=e.n(a),u=e(5294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"cda8f90653439e85d58cd639fc9f9823",language:"en-US"}}),c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=587.9a7852a3.chunk.js.map