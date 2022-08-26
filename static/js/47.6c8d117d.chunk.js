"use strict";(self.webpackChunkfilmoteka_react=self.webpackChunkfilmoteka_react||[]).push([[47],{3577:function(n,t,e){e.d(t,{O:function(){return v}});var r,o,i,a,s,c=e(501),u=e(6871),f=e(168),p=e(6031),l=p.ZP.ul(r||(r=(0,f.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),d=p.ZP.li(o||(o=(0,f.Z)(["\n  cursor: pointer;\n  margin: 10px;\n  margin-bottom: 20px;\n  //flex-basis: calc((100% - 10px) / 5);\n  transform: translateY(0);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: translateY(-3%);\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),h=p.ZP.p(i||(i=(0,f.Z)(["\nwidth: 309px;\ntext-decoration: none;\ncolor: black;\nfont-weight: ",";\nfont-size: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m})),m=p.ZP.img(a||(a=(0,f.Z)(["\n  width: 309px;\n  height: 449px;\n  text-decoration: none;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),g=p.ZP.div(s||(s=(0,f.Z)(["\ntext-align: center;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";;\n"])),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.primary})),x=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l,{children:0!==t.length?t.map((function(n){return(0,x.jsxs)(d,{children:[(0,x.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,x.jsx)(m,{src:n.poster_path?"https://image.tmdb.org/t/p/w500"+n.poster_path:"https://dummyimage.com/309x449/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!",alt:n.title})}),(0,x.jsx)(h,{children:n.title})]},n.id)})):(0,x.jsx)(g,{children:"Films not found, enter the correct request!"})})})}},6088:function(n,t,e){e.d(t,{V:function(){return i}});var r,o=e(168),i=e(6031).ZP.h1(r||(r=(0,o.Z)(["\ntext-align: center;\ntext-transform: uppercase;\ncolor: ",";\n"])),(function(n){return n.theme.colors.secondary}))},7047:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(885),o=e(2791),i=e(5861),a=e(7757),s=e.n(a),c=e(8927),u=e(3047),f={page:1},p=function(){var n=(0,i.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.h.get("/movie/top_rated",{params:f});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),(0,u._)();case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=e(3577),d=e(6088),h=e(184),m=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,o.useEffect)((function(){p().then((function(n){i(n.results)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.V,{children:"Top Films"}),(0,h.jsx)(l.O,{movies:e})]})}},8927:function(n,t,e){e.d(t,{h:function(){return o}});var r=e(4569),o=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28d5cd374d4ca5faf90ef748b7c7ae26"}})},3047:function(n,t,e){e.d(t,{L:function(){return o},_:function(){return i}});var r=e(6066),o=function(){r.Am.warn("Enter a movie title!",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},i=function(){r.Am.error("Service error!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}}]);
//# sourceMappingURL=47.6c8d117d.chunk.js.map