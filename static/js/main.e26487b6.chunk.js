(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),i=(n(13),n(2)),s=(n(14),n(0));var l=function(){return Object(s.jsx)("div",{className:"heading",children:Object(s.jsx)("h2",{children:"To-Do List"})})};var j=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1];function o(){""!==r&&(e.func(r),a(""))}return Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("input",{onChange:function(e){var t=e.target.value;a(t)},onKeyUp:function(e){13===e.keyCode&&o()},type:"text",value:r,placeholder:"Enter something"}),Object(s.jsx)("button",{onClick:o,children:"Add"})]})};var u=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:"listItem",children:[Object(s.jsx)("button",{className:"delete",onClick:function(){e.del(e.item)},children:"Delete"})," ",e.item]})})};var d=function(e){function t(t){e.del(t)}return Object(s.jsx)("div",{className:"allItems",children:e.arr.map((function(e,n){return Object(s.jsx)(u,{id:n+1,item:e,del:t},n+1)}))})};var b=function(){return Object(s.jsx)("footer",{className:"footer",children:"Created by Mamatva"})};var O=function(){var e=Object(c.useState)(Object.keys(localStorage)),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsx)(l,{}),Object(s.jsx)(j,{func:function(e){localStorage.setItem(e,!0),r(Object.keys(localStorage))}}),Object(s.jsx)(d,{arr:n,del:function(e){localStorage.removeItem(e),r(Object.keys(localStorage))}})]}),Object(s.jsx)(b,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})})),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.e26487b6.chunk.js.map