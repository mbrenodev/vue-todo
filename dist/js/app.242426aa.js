(function(){"use strict";var e={4438:function(e,t,n){var r=n(144),o=n(998),i=n(6843),a=n(5550),u=n(6312),s=n(6570),c=n(9223),f=n(4324),l=n(5495),d=n(5808),p=n(4525),v=n(8071),m=n(4611),h=n(3059),g=n(6975),b=n(8718),y=function(){var e=this,t=e._self._c;return t(o.Z,{attrs:{id:"inspire"}},[t(g.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(p.Z,[t(v.km,[t(v.V9,{staticClass:"text-h6"},[e._v(" Vue.js ")]),t(v.oZ,[e._v(" Lista de Tarefas ")])],1)],1),t(c.Z),t(d.Z,{attrs:{dense:"",nav:""}},e._l(e.items,(function(n){return t(p.Z,{key:n.title,attrs:{to:n.to,link:""}},[t(m.Z,[t(f.Z,[e._v(e._s(n.icon))])],1),t(v.km,[t(v.V9,[e._v(e._s(n.title))])],1)],1)})),1)],1),t(i.Z,{attrs:{app:"",prominent:"",color:"#fcb69f",dark:"",src:"https://picsum.photos/1920/1080?random"},scopedSlots:e._u([{key:"img",fn:function({props:n}){return[t(l.Z,e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[t(a.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(u.Z,[e._v("Title")]),t(b.Z),t(s.Z,{attrs:{icon:""}},[t(f.Z,[e._v("mdi-magnify")])],1),t(s.Z,{attrs:{icon:""}},[t(f.Z,[e._v("mdi-heart")])],1),t(s.Z,{attrs:{icon:""}},[t(f.Z,[e._v("mdi-dots-vertical")])],1)],1),t(h.Z,[t("router-view")],1)],1)},w=[],Z={data:()=>({drawer:null,items:[{title:"Tarefas",icon:"mdi-view-dashboard",to:"/"},{title:"Sobre",icon:"mdi-help-box",to:"/sobre"}]})},k=Z,_=n(1001),T=(0,_.Z)(k,y,w,!1,null,null,null),C=T.exports,P=n(5205);(0,P.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var O=n(8345);r.ZP.use(O.ZP);const j=[{path:"/",name:"Tarefas",component:()=>n.e(10).then(n.bind(n,1010))},{path:"/sobre",name:"Sobre",component:()=>n.e(169).then(n.bind(n,6169))}],S=new O.ZP({mode:"history",base:"/",routes:j});var A=S,E=(n(7658),n(629));r.ZP.use(E.ZP);var N=new E.ZP.Store({state:{tarefas:[{id:1,titulo:"Ir ao supermercado",concluido:!1},{id:2,titulo:"Corta cabelo",concluido:!1}]},getters:{},mutations:{adicionaTarefa(e,t){t&&e.tarefas.push({id:(new Date).getTime(),titulo:t,concluido:!1})},removeTarefa(e,t){e.tarefas=e.tarefas.filter((e=>e.id!==t))}},actions:{},modules:{}}),x=n(6560);r.ZP.use(x.Z);var F=new x.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:A,store:N,vuetify:F,render:e=>e(C)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{10:"fd654f1a",169:"adf8fb9d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".6f5ca56e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-todo:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={10:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4438)}));r=n.O(r)})();
//# sourceMappingURL=app.242426aa.js.map