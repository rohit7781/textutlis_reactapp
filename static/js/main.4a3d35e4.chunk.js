(this.webpackJsonptextutlis=this.webpackJsonptextutlis||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(4),r=a.n(l),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," "),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(s.jsx)("div",{className:"spinner-border mx-3 text-".concat("light"===e.mode?"dark":"light"),role:"status",children:Object(s.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggledarkmode,role:"switch",id:"flexSwitchCheckDefault"}),Object(s.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," mode"]})]})]})]})})}function d(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsxs)("div",{className:"mx-7 my-2  ",children:[Object(s.jsx)("h2",{children:e.heading}),Object(s.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){l(e.target.value)},id:"myBox",rows:"6",placeholder:"Entre yoUR Text here.",style:{backgroundColor:"light"===e.mode?"white":"#737373",color:"light"===e.mode?"black":"white"}})]}),Object(s.jsxs)("div",{className:"container my-3",children:[Object(s.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=c.toUpperCase();l(e)},children:"Click to make UPPERCASE"}),Object(s.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=c.toLowerCase();l(e)},children:"Click to make lowercase"}),Object(s.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)},children:"Copy your Text"}),Object(s.jsx)("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){document.getElementById("myBox").value=" "},children:"Clear"})]}),Object(s.jsx)("h3",{children:"Your text Summary"}),Object(s.jsxs)("p",{children:["Your text has ",c.split(" ").filter((function(e){return 0!==e.length})).length," words and ",c.length," character."]}),Object(s.jsxs)("p",{children:["Your text takes ",.008*c.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read."]}),Object(s.jsx)("h3",{children:"Preview"}),Object(s.jsx)("p",{children:c})]})})}var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"Text utils",mode:a,toggledarkmode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#4a4a4a "):(c("light"),document.body.style.backgroundColor="white")}}),Object(s.jsx)(d,{heading:"Welcome to Text Utils",mode:a})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.4a3d35e4.chunk.js.map