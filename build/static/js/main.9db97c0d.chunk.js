(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{11:function(e,n,t){},26:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=t(5),s=t(8),a=t(13),u=t(14),h=(t(26),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))}),d=(t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=t(3),f=t(4),j=t(7),g=t(6),p=t(1);var v=function(e){var n=e.name,t=e.email,r=e.id;return Object(p.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{alt:"Bret",src:"https://robohash.org/".concat(r,"?200x200")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:t})]})]})};var O=function(e){var n=e.robots;return Object(p.jsx)("div",{children:n.map((function(e,t){return Object(p.jsx)(v,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},w=function(e){e.searchfield;var n=e.searchChange;return Object(p.jsx)("div",{className:"ps2",children:Object(p.jsx)("input",{className:"tc bg-light-green dib br3 pa3 ma2  v grow bw2 shadow-5",type:"search",placeholder:"search robots",onChange:n})})},m=(t(11),function(e){return Object(p.jsx)("div",{className:"style1",children:e.children})}),y=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(e){var r;return Object(b.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("h1",{children:"Ooops Something is wrong"}):this.props.children}}]),t}(r.Component),x="CHANGE_SEARCH_FIELD",R="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",E="REQUEST_ROBOTS_FAILD",S=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,o=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?Object(p.jsx)("h2",{children:"Loading!!!"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(p.jsx)(w,{searchChange:t}),Object(p.jsx)(m,{children:Object(p.jsx)(y,{children:Object(p.jsx)(O,{robots:i})})})]})}}]),t}(r.Component),k=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:x,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:R}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:C,payload:n})})).catch((function(n){return e({type:E,payload:n})}))}))}}}))(S),F={searchField:""},L={isPending:!1,robots:[],error:""},N=Object(a.createLogger)(),P=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===x?Object.assign({},e,{searchField:n.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case R:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{robots:n.payload,isPending:!1});case E:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.c)(P,Object(s.a)(u.a,N));i.a.render(Object(p.jsx)(c.a,{store:T,children:Object(p.jsx)(k,{})}),document.getElementById("root")),h(),function(){if("serviceWorker"in navigator){if(new URL("/robofriend",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriend","/service-worker.js");d?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):l(e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.9db97c0d.chunk.js.map