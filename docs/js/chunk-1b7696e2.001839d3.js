(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7696e2"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"20f6":function(t,e,i){},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"2d3b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("arrow_back")])],1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",attrs:{maxlength:"44",placeholder:"搜索，其实很简单"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},function(e){return t.search(t.query)}]}}),i("v-spacer")],1),i("transition",{attrs:{name:"slide-y-reverse-transition"}},[!1===t.loading&&!1!==t.data?i("v-list",{key:"result",attrs:{"two-line":""}},[t._l(t.data,(function(e){return i("v-list-item",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"blue--text"},expression:"{ class: `blue--text` }"}],key:e.comic_id,on:{click:function(i){return t.$router.push({path:"/detail/"+e.comic_id})}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.comic_name)}}),i("v-list-item-subtitle",[i("span",{domProps:{textContent:t._s(e.cartoon_author_list_name)}})])],1)],1)}))],2):t._e()],1)],1)},r=[],a=(i("ac1f"),i("841c"),{name:"Search",data:function(){return{api:"https://m.kanman.com/api/serachcomic/",loading:!1,query:"",data:!1}},watch:{$route:function(t,e){this.query=t.params.query||"",this.query?this.search(this.query):this.data=!1}},mounted:function(){this.query=this.$route.params.query||"",this.search(this.query)},methods:{search:function(t){var e=this;if(!t)return this.data=!1,this.$router.push({path:"/search/"}),!1;this.loading=!0,this.$axios.get(this.api,{params:{serachKey:t}}).then((function(t){e.data=t.data.data,e.$router.push({path:"/search/".concat(e.query)}),e.loading=!1}))}}}),s=a,o=(i("30e1"),i("2877")),c=i("6544"),u=i.n(c),p=i("40dc"),d=i("8336"),l=i("132d"),h=i("8860"),v=i("da13"),f=i("5d23"),m=(i("20f6"),i("80d2")),x=Object(m["e"])("spacer","div","v-spacer"),y=i("269a"),b=i.n(y),q=i("5607"),_=Object(o["a"])(s,n,r,!1,null,"140636fc",null);e["default"]=_.exports;u()(_,{VAppBar:p["a"],VBtn:d["a"],VIcon:l["a"],VList:h["a"],VListItem:v["a"],VListItemContent:f["a"],VListItemSubtitle:f["b"],VListItemTitle:f["c"],VSpacer:x}),b()(_,{Ripple:q["a"]})},"30e1":function(t,e,i){"use strict";var n=i("7a98"),r=i.n(n);r.a},"7a98":function(t,e,i){},"841c":function(t,e,i){"use strict";var n=i("d784"),r=i("825a"),a=i("1d80"),s=i("129f"),o=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var a=r(t),c=String(this),u=a.lastIndex;s(u,0)||(a.lastIndex=0);var p=o(a,c);return s(a.lastIndex,u)||(a.lastIndex=u),null===p?-1:p.index}]}))}}]);
//# sourceMappingURL=chunk-1b7696e2.001839d3.js.map