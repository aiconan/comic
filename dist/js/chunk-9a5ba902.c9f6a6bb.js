(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a5ba902"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"20f6":function(t,e,n){},"269a":function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.directives=t.exports.options.directives),n.directives=n.directives||{},e)n.directives[i]=n.directives[i]||e[i]}},"2d3b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("arrow_back")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",attrs:{maxlength:"44",placeholder:"搜索，其实很简单"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},function(e){return t.search(t.query)}]}}),n("v-spacer")],1),n("transition-group",{attrs:{name:"fade-transition"}},[!1===t.loading&&!1!==t.data?n("v-list",{key:"result",attrs:{"two-line":""}},[t._l(t.data,(function(e){return n("v-list-item",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"blue--text"},expression:"{ class: `blue--text` }"}],key:e.comic_id,on:{click:function(n){return t.$router.push({path:"/detail/"+e.comic_id})}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.comic_name)}}),n("v-list-item-subtitle",[n("span",{domProps:{textContent:t._s(e.cartoon_author_list_name)}})])],1)],1)}))],2):t._e()],1)],1)},a=[],r=(n("ac1f"),n("841c"),{name:"Search",data:function(){return{api:"https://m.kanman.com/api/serachcomic/",loading:!1,query:"",data:!1}},mounted:function(){this.query=this.$route.params.query||"",this.search(this.query)},methods:{search:function(t){var e=this;if(!t)return this.data=!1,this.$router.push({path:"/search/"}),!1;this.loading=!0,this.$axios.get(this.api,{params:{serachKey:t}}).then((function(t){e.data=t.data.data,e.$router.push({path:"/search/".concat(e.query)}),e.loading=!1}))}}}),s=r,o=(n("3074"),n("2877")),c=n("6544"),u=n.n(c),p=n("40dc"),d=n("8336"),l=n("132d"),v=n("8860"),f=n("da13"),h=n("5d23"),m=(n("20f6"),n("80d2")),x=Object(m["e"])("spacer","div","v-spacer"),y=n("269a"),b=n.n(y),g=n("5607"),_=Object(o["a"])(s,i,a,!1,null,"5d66956e",null);e["default"]=_.exports;u()(_,{VAppBar:p["a"],VBtn:d["a"],VIcon:l["a"],VList:v["a"],VListItem:f["a"],VListItemContent:h["a"],VListItemSubtitle:h["b"],VListItemTitle:h["c"],VSpacer:x}),b()(_,{Ripple:g["a"]})},3074:function(t,e,n){"use strict";var i=n("7e84"),a=n.n(i);a.a},"7e84":function(t,e,n){},"841c":function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),r=n("1d80"),s=n("129f"),o=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=a(t),c=String(this),u=r.lastIndex;s(u,0)||(r.lastIndex=0);var p=o(r,c);return s(r.lastIndex,u)||(r.lastIndex=u),null===p?-1:p.index}]}))}}]);
//# sourceMappingURL=chunk-9a5ba902.c9f6a6bb.js.map