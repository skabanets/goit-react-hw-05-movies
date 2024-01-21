"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{4082:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,u,c,i=e(7689),o=e(1087),s=e(168),p=e(7924),f=p.ZP.li(r||(r=(0,s.Z)(["\n  max-width: 224px;\n"]))),d=p.ZP.img(a||(a=(0,s.Z)(["\n  height: 336px;\n  margin-bottom: 5px;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),l=p.ZP.h3(u||(u=(0,s.Z)(["\n  color: #333031;\n  font-size: 18px;\n  text-align: center;\n"]))),h=e(184),x=function(n){var t=n.movieInfo,e=t.id,r=t.poster_path,a=t.name,u=t.title,c=(0,i.TH)(),s=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://www.thetechedvocate.org/wp-content/uploads/2023/11/30-5.jpg";return(0,h.jsx)(f,{children:(0,h.jsxs)(o.rU,{state:{from:c},to:"/movies/".concat(e),children:[(0,h.jsx)(d,{src:s,alt:a||u}),(0,h.jsx)(l,{children:a||u})]})})},v=p.ZP.ul(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: (100%-60px)/4;\n"]))),g=function(n){var t=n.movies;return(0,h.jsx)(v,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,h.jsx)(x,{movieInfo:n},n.id)}))})}},9677:function(n,t,e){e.d(t,{$:function(){return f}});var r,a,u=e(1149),c=e(168),i=e(7924),o=i.ZP.div(r||(r=(0,c.Z)(["\n  padding: 20px 0;\n"]))),s=i.ZP.h2(a||(a=(0,c.Z)(["\n  margin-bottom: 20px;\n  font-size: 28px;\n  line-height: 1.11;\n  text-align: left;\n  letter-spacing: 0.02em;\n  font-weight: 700;\n  color: #333031;\n"]))),p=e(184),f=function(n){var t=n.title,e=n.children;return(0,p.jsx)(o,{children:(0,p.jsxs)(u.W,{children:[t&&(0,p.jsx)(s,{children:t}),e]})})}},7216:function(n,t,e){e.d(t,{u:function(){return u}});var r=e(9439),a=e(2791),u=function(n,t){var e=(0,a.useState)(null),u=(0,r.Z)(e,2),c=u[0],i=u[1],o=(0,a.useState)(null),s=(0,r.Z)(o,2),p=s[0],f=s[1];return(0,a.useEffect)((function(){n(t).then(i).catch(f)}),[n,t]),[c,i,p]}},9544:function(n,t,e){e.r(t);var r=e(9439),a=e(9677),u=e(4082),c=e(7216),i=e(4390),o=e(6143),s=e(2094),p=e(184);t.default=function(){var n=(0,c.u)(i.E6),t=(0,r.Z)(n,3),e=t[0];return t[2]?(s.Am.error("The request failed! Reload the page or try again later."),(0,p.jsx)(o.a,{})):e?(0,p.jsx)("div",{children:(0,p.jsx)(a.$,{title:"Trending today",children:(0,p.jsx)(u.O,{movies:e})})}):(0,p.jsx)(o.a,{})}},4390:function(n,t,e){e.d(t,{E6:function(){return i},IR:function(){return o},M1:function(){return p},Pg:function(){return s},tx:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(5294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"cda8f90653439e85d58cd639fc9f9823",language:"en-US"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.99c5418a.chunk.js.map