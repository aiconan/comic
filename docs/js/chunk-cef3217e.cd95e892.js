(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cef3217e"],{"129f":function(t,i){t.exports=Object.is||function(t,i){return t===i?0!==t||1/t===1/i:t!=t&&i!=i}},"206b":function(t,i,e){},"20f6":function(t,i,e){},"269a":function(t,i){t.exports=function(t,i){var e="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var o in"function"===typeof t.exports&&(e.directives=t.exports.options.directives),e.directives=e.directives||{},i)e.directives[o]=e.directives[o]||i[o]}},"2d3b":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"search"},[e("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[e("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$router.push({path:"/home"})}}},[e("v-icon",[t._v("home")])],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",attrs:{maxlength:"44",placeholder:"搜索，其实很简单"},domProps:{value:t.query},on:{input:[function(i){i.target.composing||(t.query=i.target.value)},function(i){return t.search(t.query)}]}}),e("v-spacer")],1),e("transition-group",{attrs:{name:"fade-transition"}},[!1===t.loading&&!1!==t.data?e("v-list",{key:"result",attrs:{"two-line":""}},[t._l(t.data,(function(i){return e("v-list-item",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"blue--text"},expression:"{ class: `blue--text` }"}],key:i.comic_id},[e("v-list-item-avatar",{on:{click:function(e){return t.look(i.comic_id,i.comic_name,i.cartoon_author_list_name)}}},[e("v-icon",[t._v(" "+t._s(t.history_now?"history":"open_in_new")+" ")])],1),e("v-list-item-content",{on:{click:function(e){return t.look(i.comic_id,i.comic_name,i.cartoon_author_list_name)}}},[e("v-list-item-title",{domProps:{textContent:t._s(i.comic_name)}}),e("v-list-item-subtitle",[e("span",{domProps:{textContent:t._s(i.cartoon_author_list_name)}})])],1),t.history_now?e("v-list-item-action",[e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.del_history(i.comic_id)}}},[e("v-icon",[t._v("delete")])],1)],1):t._e()],1)}))],2):t._e()],1)],1)},n=[],a=(e("4160"),e("a434"),e("ac1f"),e("841c"),e("159b"),{name:"Search",data:function(){return{api:"https://m.kanman.com/api/serachcomic/",loading:!1,query:!1,data:!1,history:!1,history_now:!0}},mounted:function(){this.query=this.$route.params.query||null,this.history=window.JSON.parse(window.localStorage.history),this.search(this.query)},methods:{search:function(t){var i=this;if(this.loading=!0,!t)return this.data=this.history,this.history_now=!0,this.$router.push({path:"/search/"}),setTimeout((function(){i.loading=!1}),100),!1;this.data=!1,this.$axios.get(this.api,{params:{serachKey:t}}).then((function(t){i.data=t.data.data,i.$router.push({path:"/search/".concat(i.query)}),i.history_now=!1,setTimeout((function(){i.loading=!1}),100)}))},look:function(t,i,e){var o=window.JSON.parse(window.localStorage.history),n={comic_id:t,comic_name:i,cartoon_author_list_name:e};o.forEach((function(t,i,e){t.comic_id==n.comic_id&&o.splice(i,1)})),o.push(n),window.localStorage.history=window.JSON.stringify(o),this.$router.push({path:"/detail/".concat(t)})},del_history:function(t){var i=window.JSON.parse(window.localStorage.history);i.forEach((function(e,o,n){e.comic_id==t&&i.splice(o,1)})),window.localStorage.history=window.JSON.stringify(i),this.history=window.JSON.parse(window.localStorage.history),this.data=this.history}}}),r=a,s=(e("a3e9"),e("2877")),c=e("6544"),u=e.n(c),l=e("40dc"),d=e("8336"),h=e("132d"),p=e("8860"),m=e("da13"),f=e("1800"),v=e("8270"),_=e("5d23"),w=e("2fa4"),y=e("269a"),g=e.n(y),x=e("5607"),b=Object(s["a"])(r,o,n,!1,null,"3950b5c6",null);i["default"]=b.exports;u()(b,{VAppBar:l["a"],VBtn:d["a"],VIcon:h["a"],VList:p["a"],VListItem:m["a"],VListItemAction:f["a"],VListItemAvatar:v["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:w["a"]}),g()(b,{Ripple:x["a"]})},"2fa4":function(t,i,e){"use strict";e("20f6");var o=e("80d2");i["a"]=Object(o["e"])("spacer","div","v-spacer")},"841c":function(t,i,e){"use strict";var o=e("d784"),n=e("825a"),a=e("1d80"),r=e("129f"),s=e("14c3");o("search",1,(function(t,i,e){return[function(i){var e=a(this),o=void 0==i?void 0:i[t];return void 0!==o?o.call(i,e):new RegExp(i)[t](String(e))},function(t){var o=e(i,t,this);if(o.done)return o.value;var a=n(t),c=String(this),u=a.lastIndex;r(u,0)||(a.lastIndex=0);var l=s(a,c);return r(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},a3e9:function(t,i,e){"use strict";var o=e("206b"),n=e.n(o);n.a}}]);
//# sourceMappingURL=chunk-cef3217e.cd95e892.js.map