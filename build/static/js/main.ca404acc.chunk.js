(this["webpackJsonpreact-skeleton-screens"]=this["webpackJsonpreact-skeleton-screens"]||[]).push([[0],{48:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(19),i=n.n(s),a=(n(48),n(65)),o=n(67),l=n(66),d=n(39),j=n(64),h=n(1);var u=function(){return Object(h.jsxs)(a.a,{bg:"dark",variant:"dark",sticky:"top",children:[Object(h.jsx)(a.a.Brand,{href:"/Home",children:Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/AdyAhmadi24/Pictures/main/Penguin.png",width:"80",height:"65",className:"d-inline-block align-top",alt:"Rekayasa Web"})}),Object(h.jsxs)(o.a,{className:"mr-auto",children:[Object(h.jsx)(o.a.Link,{href:"/Home",children:"Home"}),Object(h.jsx)(o.a.Link,{href:"#features",children:"Blog"}),Object(h.jsx)(o.a.Link,{href:"/About",children:"Kontak"})]}),Object(h.jsxs)(l.a,{inline:!0,children:[Object(h.jsx)(d.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(h.jsx)(j.a,{variant:"outline-info",children:"Search"})]})]})};var b=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{}),Object(h.jsx)("body",{children:Object(h.jsxs)("div",{class:"jumbotron text-center",children:[Object(h.jsx)("img",{src:"img/59805933_2261818983909111_5166405006328332288_n.jpg",alt:"Foto",width:"180px",class:"rounded-circle img-thumbnail"}),Object(h.jsx)("h1",{class:"display-4",children:"Ady Ahmadi"}),Object(h.jsx)("p",{class:"lead",children:"Hasanuddin University's Student"}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(h.jsx)("path",{fill:"#ffffff","fill-opacity":"1",d:"M0,96L30,96C60,96,120,96,180,96C240,96,300,96,360,96C420,96,480,96,540,112C600,128,660,160,720,149.3C780,139,840,85,900,106.7C960,128,1020,224,1080,229.3C1140,235,1200,149,1260,122.7C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"})})]})})]})},x=n(20),f=n.n(x),p=n(25),m=n(27),O=function(){return Object(h.jsx)("div",{className:"shimmer-wrapper",children:Object(h.jsx)("div",{className:"shimmer"})})},v=(n(54),function(e){var t=e.type,n="skeleton ".concat(t);return Object(h.jsx)("div",{className:n})}),g=function(e){var t=e.theme||"light";return Object(h.jsxs)("div",{className:"skeleton-wrapper ".concat(t),children:[Object(h.jsxs)("div",{className:"skeleton-article",children:[Object(h.jsx)(v,{type:"title"}),Object(h.jsx)(v,{type:"text"}),Object(h.jsx)(v,{type:"text"}),Object(h.jsx)(v,{type:"text"})]}),Object(h.jsx)(O,{})]})},w=n(68),k=function(){var e=Object(c.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){setTimeout(Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://unhas.ac.id/v2/wp-json/wp/v2/posts/?_embed");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),3e3)})),Object(h.jsxs)("div",{className:"articles","padding-top":"80px",children:[Object(h.jsx)("h2",{children:"Articles"}),n&&n.map((function(e){return Object(h.jsx)("div",{className:"article",children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(w.a.Header,{children:e.title.rendered}),Object(h.jsxs)(w.a.Body,{children:[Object(h.jsx)(w.a.Text,{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),Object(h.jsx)(j.a,{variant:"primary",href:"/User"+e.id,children:"Link Artikel"},e.id)]})]})},e)})),!n&&[1,2,3,4,5].map((function(e){return Object(h.jsx)(g,{theme:"dark"},e)}))]})};var y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(k,{})})]})},C=n(7);var N=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(C.a,{exact:!0,path:"/",component:y}),Object(h.jsx)(C.a,{exact:!0,path:"/Home",component:y}),Object(h.jsx)(C.a,{exact:!0,path:"/About",component:b})]})},A=n(22),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A.a,{children:Object(h.jsx)(N,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.ca404acc.chunk.js.map