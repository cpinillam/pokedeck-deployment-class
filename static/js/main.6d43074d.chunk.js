(this["webpackJsonppokedek-react"]=this["webpackJsonppokedek-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=n.p+"static/media/poke-logo.aa997b93.png",o=n(0);function j(){return Object(o.jsx)(c.Fragment,{children:Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("div",{className:"header-bg"}),Object(o.jsx)("img",{className:"header-logo",src:i,alt:"pokemon-logo"}),Object(o.jsxs)("nav",{className:"header-search_bar",children:[Object(o.jsx)("input",{type:"text",name:"search",placeholder:"Search"}),Object(o.jsx)("button",{type:"submit",children:"GO"})]})]})})}var u=n(2),l=n(4),p=n.n(l),m=n(6),b="https://pokeapi.co/api/v2/pokemon";function h(e){return d.apply(this,arguments)}function d(){return(d=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(b,"/").concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.data,n=Object(c.useState)({name:"",sprites:"",types:[]}),r=Object(u.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){h(t.name).then((function(e){return i(e)}))}),[]),Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("article",{className:"list-pokemons-item",children:Object(o.jsxs)("div",{className:"list-pokemons-item-content",children:[Object(o.jsx)("img",{src:s.sprites.front_default,alt:"pokemon-1"}),Object(o.jsxs)("h3",{children:[s.name,Object(o.jsx)("span",{children:"grass"})]})]})})})}function f(){var e=Object(c.useState)([{name:"charmeleon",type:"fire",color:"green"}]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){h("?limit=10").then((function(e){return r(e.results)}))}),[]),Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("main",{className:"list-pokemons",children:n.map((function(e){return Object(o.jsx)(O,{data:e},e.name)}))})})}function x(){return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(f,{})]})}n(13);s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6d43074d.chunk.js.map