(function(e){function t(t){for(var r,a,c=t[0],i=t[1],d=t[2],l=0,s=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02814c97":"7c385631","chunk-1b7696e2":"001839d3","chunk-6ddd04d6":"8cecc72d","chunk-a9dba002":"6fe4bd38","chunk-2d21a3d2":"f7a0aa04","chunk-2d22d746":"c57c841f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02814c97":1,"chunk-1b7696e2":1,"chunk-6ddd04d6":1,"chunk-a9dba002":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-02814c97":"ff5b2433","chunk-1b7696e2":"edf7f4d4","chunk-6ddd04d6":"de907b24","chunk-a9dba002":"2ae7d2d3","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],l=d.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),u={},c=o.a.create(u);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},r["a"].use(Plugin);Plugin;var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("transition",{attrs:{name:e.transitionName}},[n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)],1)],1)},d=[],l=r["a"].extend({name:"App",components:{},data:function(){return{transitionName:"fade-transition"}}}),s=l,f=n("2877"),p=n("6544"),h=n.n(p),m=n("7496"),b=n("a75b"),v=Object(f["a"])(s,i,d,!1,null,null,null),g=v.exports;h()(v,{VApp:m["a"],VContent:b["a"]});var k=n("8c4f");r["a"].use(k["a"]);var y=" | AiComic",w=[{path:"/home",name:"home",meta:{title:"首页"+y},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/search/:query?",name:"search",meta:{title:"搜索"+y},component:function(){return Promise.all([n.e("chunk-02814c97"),n.e("chunk-1b7696e2")]).then(n.bind(null,"2d3b"))}},{path:"/detail/:id?",name:"detail",meta:{title:"详情"+y},component:function(){return Promise.all([n.e("chunk-02814c97"),n.e("chunk-6ddd04d6")]).then(n.bind(null,"c84b"))}},{path:"/view/:comic_id?/:chapter_index?",name:"view",meta:{title:"阅读"+y},component:function(){return Promise.all([n.e("chunk-02814c97"),n.e("chunk-a9dba002")]).then(n.bind(null,"0dfe"))}},{path:"/about",name:"about",meta:{title:"关于"+y},component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/",redirect:"/search"}],P=new k["a"]({base:"/",routes:w}),j=P,x=n("2f62");r["a"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=(n("d1e78"),n("f309"));r["a"].use(_["a"]);var E=new _["a"]({iconfont:"md"});r["a"].config.productionTip=!1,r["a"].use(n("7876")),new r["a"]({router:j,store:O,vuetify:E,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.f1f91583.js.map