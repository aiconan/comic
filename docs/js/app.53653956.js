(function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],d=0,h=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(h.length)h.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"8f01cdc9","chunk-5a13ed4e":"0a96bf7a","chunk-5ce92eee":"2094917f","chunk-1136517e":"9f148a62","chunk-e927440e":"f32161c2","chunk-22838a6b":"eb6462ae","chunk-6f04d7e6":"a740cedf","chunk-cef3217e":"cd95e892","chunk-e8edb07c":"5e4cc0ae","chunk-7308767a":"41a67760","chunk-6eea4dd0":"d731d01c"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5a13ed4e":1,"chunk-5ce92eee":1,"chunk-1136517e":1,"chunk-e927440e":1,"chunk-22838a6b":1,"chunk-6f04d7e6":1,"chunk-cef3217e":1,"chunk-e8edb07c":1,"chunk-7308767a":1,"chunk-6eea4dd0":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-5a13ed4e":"0f373c1d","chunk-5ce92eee":"0670aa22","chunk-1136517e":"62e75269","chunk-e927440e":"956008e5","chunk-22838a6b":"9ffaf88d","chunk-6f04d7e6":"c5bfb0c8","chunk-cef3217e":"54135c64","chunk-e8edb07c":"a40f2e36","chunk-7308767a":"3b447050","chunk-6eea4dd0":"69e028c2"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],d=l.getAttribute("data-href");if(d===r||d===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],s.parentNode.removeChild(s),t(c)},s.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var h=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,t[1](h)}o[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},cd49:function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),a=(t("d3b7"),t("e6cf"),t("bc3a")),o=t.n(a),c={},u=o.a.create(c);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,n){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["a"].use(Plugin);Plugin;var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-content",[t("transition",{attrs:{name:e.transitionName}},[t("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)],1)],1)},l=[],d=r["a"].extend({name:"App",components:{},data:function(){return{transitionName:"fade-transition"}},mounted:function(){window.localStorage.like||(window.localStorage.like=window.JSON.stringify([])),window.localStorage.history||(window.localStorage.history=window.JSON.stringify([]))}}),h=d,s=t("2877"),f=t("6544"),p=t.n(f),m=t("7496"),k=t("a75b"),b=Object(s["a"])(h,i,l,!1,null,null,null),v=b.exports;p()(b,{VApp:m["a"],VContent:k["a"]});var g=t("8c4f");r["a"].use(g["a"]);var w=" | AiComic",y=[{path:"/home",name:"home",meta:{title:"首页"+w},component:function(){return Promise.all([t.e("chunk-5a13ed4e"),t.e("chunk-5ce92eee"),t.e("chunk-1136517e")]).then(t.bind(null,"bb51"))}},{path:"/search/:query?",name:"search",meta:{title:"搜索"+w},component:function(){return Promise.all([t.e("chunk-5a13ed4e"),t.e("chunk-e927440e"),t.e("chunk-22838a6b"),t.e("chunk-cef3217e")]).then(t.bind(null,"2d3b"))}},{path:"/fond",name:"fond",meta:{title:"收藏"+w},component:function(){return Promise.all([t.e("chunk-5a13ed4e"),t.e("chunk-e927440e"),t.e("chunk-e8edb07c"),t.e("chunk-6eea4dd0")]).then(t.bind(null,"aeed"))}},{path:"/detail/:id?",name:"detail",meta:{title:"详情"+w},component:function(){return Promise.all([t.e("chunk-5a13ed4e"),t.e("chunk-e927440e"),t.e("chunk-22838a6b"),t.e("chunk-e8edb07c"),t.e("chunk-7308767a")]).then(t.bind(null,"c84b"))}},{path:"/view/:comic_id?/:chapter_index?",name:"view",meta:{title:"阅读"+w},component:function(){return Promise.all([t.e("chunk-5a13ed4e"),t.e("chunk-e927440e"),t.e("chunk-22838a6b"),t.e("chunk-5ce92eee"),t.e("chunk-6f04d7e6")]).then(t.bind(null,"0dfe"))}},{path:"/about",name:"about",meta:{title:"关于"+w},component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/",redirect:"/home"}],P=new g["a"]({base:"",routes:y}),O=P,S=t("2f62");r["a"].use(S["a"]);var j=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=(t("d1e78"),t("f309"));r["a"].use(x["a"]);var _=new x["a"]({iconfont:"md"});r["a"].config.productionTip=!1,r["a"].use(t("7876")),new r["a"]({router:O,store:j,vuetify:_,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.53653956.js.map