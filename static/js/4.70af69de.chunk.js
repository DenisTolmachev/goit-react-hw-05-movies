"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[4],{3004:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,i,c,s,o=e(885),p=e(168),u=e(6031),f=u.ZP.ul(r||(r=(0,p.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),d=u.ZP.li(a||(a=(0,p.Z)(["\n  margin: 10px;\n  margin-bottom: 20px;\n  width: 150px;\n\n"]))),h=u.ZP.img(i||(i=(0,p.Z)(["\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),l=u.ZP.p(c||(c=(0,p.Z)(["\nmargin-top: 5px;\nfont-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),m=u.ZP.p(s||(s=(0,p.Z)(["\nmargin-top: 5px;\n& span {\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold})),x=e(184),g=function(n){var t=n.credits;return(0,x.jsx)(f,{children:t.map((function(n){return(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://dummyimage.com/150x225/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!",alt:"",width:"150"}),(0,x.jsx)(l,{children:n.name}),(0,x.jsxs)(m,{children:[(0,x.jsx)("span",{children:"Character: "}),n.character]})]},n.credit_id)}))})},w=e(2791),v=e(6871),D=e(5861),Z=e(7757),_=e.n(Z),b=e(8927),j=function(){var n=(0,D.Z)(_().mark((function n(t){var e,r;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.h.get("/movie/".concat(t,"/credits"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,w.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,v.UO)().moviesId;return(0,w.useEffect)((function(){j(a).then((function(n){r(n.cast)}))}),[a]),(0,x.jsx)(x.Fragment,{children:e&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(g,{credits:e})})})}},8927:function(n,t,e){e.d(t,{h:function(){return a}});var r=e(4569),a=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28d5cd374d4ca5faf90ef748b7c7ae26"}})}}]);
//# sourceMappingURL=4.70af69de.chunk.js.map