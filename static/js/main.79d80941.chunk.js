(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),s=n(5),a=n(2),i=n(1),r=(n(12),n(0)),l=function(t){var e=t.goods,n=t.lengthForDisplay;return Object(r.jsx)(r.Fragment,{children:e.map((function(t){return Object(r.jsx)("li",{className:"GoodsList-item",hidden:t.length>=n,children:t},t)}))})},u=(n(14),function(t){var e=t.values;return Object(r.jsx)(r.Fragment,{children:e.map((function(t){return Object(r.jsxs)("option",{className:"GoodNameLength",value:t,children:["Max length is"," ".concat(t)]},t)}))})}),j=(n(15),[1,2,3,4,5,6,7,8,9,10]),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(){var t=Object(i.useState)(b),e=Object(a.a)(t,1)[0],n=Object(i.useState)(b),c=Object(a.a)(n,2),o=c[0],d=c[1],h=Object(i.useState)(!0),O=Object(a.a)(h,2),g=O[0],m=O[1],p=Object(i.useState)(!1),f=Object(a.a)(p,2),x=f[0],v=f[1],S=Object(i.useState)(!1),y=Object(a.a)(S,2),N=y[0],k=y[1],B=Object(i.useState)(10),C=Object(a.a)(B,2),A=C[0],F=C[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("button",{type:"button",className:"StartButton",hidden:x,onClick:function(){m(!1),v(!0),k(!0)},children:"Start"}),Object(r.jsx)("h1",{children:"Goods"}),Object(r.jsxs)("h2",{children:["Total amouns of goods is:"," ".concat(b.length)]}),Object(r.jsx)("select",{className:"SelectList",onChange:function(t){F(t.target.value)},value:A,children:Object(r.jsx)(u,{values:j})}),Object(r.jsx)("button",{type:"button",hidden:!N,className:"Actions ReverseButton",onClick:function(){d(Object(s.a)(o).reverse())},children:"Reverse"}),Object(r.jsx)("button",{type:"button",hidden:!N,className:"Actions SortButton",onClick:function(){d(Object(s.a)(e).sort((function(t,e){return t.localeCompare(e)})))},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",hidden:!N,className:"Actions ResetButton",onClick:function(){d(e),F(10)},children:"Reset"}),Object(r.jsx)("button",{type:"button",hidden:!N,className:"Actions SortByLengthButton",onClick:function(){d(Object(s.a)(e).sort((function(t,e){return t.length-e.length})))},children:"Sort by length"}),Object(r.jsx)("ul",{className:"GoodsList",hidden:g,children:Object(r.jsx)(l,{goods:o,lengthForDisplay:A})})]})};o.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.79d80941.chunk.js.map