(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{11:function(e,n,t){},26:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(2),i=t.n(r),c=t(5),s=t(8),a=t(13),l=t(14),u=(t(26),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))}),h=(t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=t(3),f=t(4),g=t(7),j=t(6),p=t(1);var v=function(e){var n=e.name,t=e.email,o=e.id;return Object(p.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{alt:"Bret",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:t})]})]})};var O=function(e){var n=e.robots;return Object(p.jsx)("div",{children:n.map((function(e,t){return Object(p.jsx)(v,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},w=function(e){e.searchfield;var n=e.searchChange;return Object(p.jsx)("div",{className:"ps2",children:Object(p.jsx)("input",{className:"tc bg-light-green dib br3 pa3 ma2  v grow bw2 shadow-5",type:"search",placeholder:"search robots",onChange:n})})},m=(t(11),function(e){return Object(p.jsx)("div",{className:"style1",children:e.children})}),y=function(e){Object(g.a)(t,e);var n=Object(j.a)(t);function t(e){var o;return Object(b.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("h1",{children:"Ooops Something is wrong"}):this.props.children}}]),t}(o.Component),x="CHANGE_SEARCH_FIELD",R="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILD",E=function(e){Object(g.a)(t,e);var n=Object(j.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,r=e.isPending,i=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r?Object(p.jsx)("h2",{children:"Loading!!!"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(p.jsx)(w,{searchChange:t}),Object(p.jsx)(m,{children:Object(p.jsx)(y,{children:Object(p.jsx)(O,{robots:i})})})]})}}]),t}(o.Component),k=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:x,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:R}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:C,payload:n})})).catch((function(n){return e({type:S,payload:n})}))}))}}}))(E),F={searchField:""},P={isPending:!1,robots:[],error:""},L=Object(a.createLogger)(),N=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===x?Object.assign({},e,{searchField:n.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case R:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{robots:n.payload,isPending:!1});case S:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.c)(N,Object(s.a)(l.a,L));i.a.render(Object(p.jsx)(c.a,{store:T,children:Object(p.jsx)(k,{})}),document.getElementById("root")),u(),function(e){if("serviceWorker"in navigator){if(new URL("/robofriend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriend","/service-worker.js");h?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.16f5f8c0.chunk.js.map