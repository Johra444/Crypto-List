(this["webpackJsonpmon-app"]=this["webpackJsonpmon-app"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t(4),s=t.n(i),r=t(3),a=(t(9),t(0)),j=function(e){var c=e.nom,t=e.price,n=e.image,i=e.symbol,s=e.priceChange,r="https://www.coingecko.com/en/coins/"+c.toLowerCase();return Object(a.jsxs)("tr",{id:"test",children:[Object(a.jsxs)("td",{className:"image-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:n,alt:"crypto",className:"image"})}),Object(a.jsxs)("p",{id:"crypto",children:[c," / ",i.toUpperCase()]})]}),Object(a.jsx)("td",{children:Object(a.jsxs)("p",{children:["$",t]})}),Object(a.jsx)("td",{children:s<0?Object(a.jsxs)("p",{className:"red",children:[s.toFixed(2),"%"]}):Object(a.jsxs)("p",{className:"green",children:[s.toFixed(2),"%"]})}),Object(a.jsx)("td",{id:"details",children:Object(a.jsx)("a",{href:r,target:"_blank",children:"More details"})})]})};var d=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],i=c[1],s=Object(n.useState)(!1),d=Object(r.a)(s,2),o=d[0],l=d[1];return Object(n.useEffect)((function(){l(!0),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)})).finally((function(){l(!1)}))}),[]),o?Object(a.jsx)("p",{children:"Data is loading..."}):(console.log(t),Object(a.jsx)("div",{id:"grid",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{id:"table-header",children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Price"}),Object(a.jsx)("th",{children:"Change"}),Object(a.jsx)("th",{id:"edit1",children:Object(a.jsx)("span",{id:"edit",children:"edit"})})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(j,{image:e.image,nom:e.name,symbol:e.symbol,price:e.current_price,priceChange:e.price_change_percentage_24h})}))})]})}))};s.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.855caaf0.chunk.js.map