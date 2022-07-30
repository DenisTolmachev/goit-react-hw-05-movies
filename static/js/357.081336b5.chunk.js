"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{1357:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,s,c,a,u,p,d,l,f,h,x,m,g=t(8152),v=t(6871),Z=t(168),j=t(6031),b=t(3504),w=j.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  justify-content: start;\n  padding: 20px 0;\n  gap: 5px;\n"]))),y=(0,j.ZP)(b.OL)(i||(i=(0,Z.Z)(["\n  display: flex;\n  color: ",";\n  text-decoration: none;\n  font-size: ",";\n  padding: 5px;\n  border-radius: 5px;\n  text-transform: uppercase;\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n    box-shadow: 0 0 0 1px ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary})),P=t(2791),z=t(5861),_=t(7757),S=t.n(_),k=t(8927),C=function(){var n=(0,z.Z)(S().mark((function n(e){var t,r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.h.get("/movie/".concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),O=j.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n"]))),U=j.ZP.img(s||(s=(0,Z.Z)(["\n  width: 300px;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),W=j.ZP.h2(c||(c=(0,Z.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes.ml1})),F=j.ZP.p(a||(a=(0,Z.Z)(["\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-size: ",";\n  border-bottom: 1px solid ",";\n  & span {\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold})),L=j.ZP.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.primary})),R=j.ZP.p(p||(p=(0,Z.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold})),E=j.ZP.p(d||(d=(0,Z.Z)(["\n  font-size: ",";\n  margin-top: 10px;\n"])),(function(n){return n.theme.fontSizes.m})),G=j.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px;\n"]))),I=j.ZP.div(f||(f=(0,Z.Z)(["\n  margin-top: 15px;\n"]))),q=j.ZP.p(h||(h=(0,Z.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold})),A=j.ZP.ul(x||(x=(0,Z.Z)(["\nlist-style-type: circle;\nmargin: 10px 20px;\npadding: 0;\n"]))),B=j.ZP.li(m||(m=(0,Z.Z)(["\nmargin-top: 5px;\n"]))),D=t(184),H=function(n){var e=n.genres;return(0,D.jsxs)(I,{children:[(0,D.jsx)(q,{children:"Genres:"}),(0,D.jsx)(A,{children:e.map((function(n){return(0,D.jsx)(B,{children:n.name},n.id)}))})]})},J=function(n){var e=n.movie;return(0,D.jsxs)(O,{children:[(0,D.jsx)(U,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),(0,D.jsxs)(G,{children:[(0,D.jsxs)(W,{children:[e.title,"(",e.release_date,")"]}),(0,D.jsxs)(F,{children:[(0,D.jsx)("span",{children:"User Score: "}),e.vote_average]}),(0,D.jsxs)(L,{children:[(0,D.jsx)(R,{children:"Overview: "}),(0,D.jsx)(E,{children:e.overview})]}),(0,D.jsx)(H,{genres:e.genres})]})]})},K=t(4329),M=function(){var n=(0,P.useState)(null),e=(0,g.Z)(n,2),t=e[0],r=e[1],i=(0,v.UO)().moviesId;return(0,P.useEffect)((function(){C(i).then((function(n){r(n)}))}),[i]),(0,D.jsx)(D.Fragment,{children:t&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(J,{movie:t}),(0,D.jsxs)(w,{children:[(0,D.jsx)(y,{to:"cast",children:"Cast"}),(0,D.jsx)(y,{to:"reviews",children:"Reviews"})]}),(0,D.jsx)(P.Suspense,{fallback:(0,D.jsx)(K.c,{}),children:(0,D.jsx)(v.j3,{})})]})})}},8927:function(n,e,t){t.d(e,{h:function(){return i}});var r=t(4569),i=t.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28d5cd374d4ca5faf90ef748b7c7ae26"}})}}]);
//# sourceMappingURL=357.081336b5.chunk.js.map