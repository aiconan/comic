(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77b75413"],{"0467":function(t,e,i){},"1d3b":function(t,e,i){"use strict";var n=i("ec47"),a=i.n(n);a.a},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"57f8":function(t,e,i){},"8ce9":function(t,e,i){},"99b8":function(t,e,i){"use strict";var n=i("57f8"),a=i.n(n);a.a},c84b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"detail"},[i("transition",{attrs:{name:"fade-transition"}},[!0===t.loading?i("v-row",{staticClass:"fill-height ma-0",staticStyle:{height:"100vh"},attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"light-blue darken-1"}})],1):t._e(),!1===t.loading?i("div",{staticClass:"success"},[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.push({path:"/search"})}}},[i("v-icon",[t._v("search")])],1),i("v-toolbar-title",[i("div",{domProps:{textContent:t._s(t.data.comic_name)}}),i("span",{domProps:{textContent:t._s(t.data.comic_author)}})]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.like()}}},[i("v-icon",[t._v(t._s(t.fond?"favorite":"favorite_border"))])],1)],1),i("v-card",{staticClass:"mx-auto",attrs:{elevation:"0"}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-2"},[t._v("详情")]),i("v-list-item-subtitle",[t._v(" 漫画名称："+t._s(t.data.comic_name)+" "),i("br"),t._v(" 作者："+t._s(t.data.comic_author)+" "),i("br"),t._v(" 出版："+t._s(t.data.comic_media)+" "),i("br"),t._v(" 简介："+t._s(t.data.comic_desc)+" ")])],1),i("v-img",{staticClass:"mt-2 mb-2 ml-2",attrs:{src:t.data.cover_list[0].replace("http://","https://"),"max-width":"120","min-height":"160"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"light-blue darken-1"}})],1)]},proxy:!0}],null,!1,4027106081)})],1)],1),i("v-divider"),i("v-banner",{attrs:{id:"contents","single-line":""},scopedSlots:t._u([{key:"actions",fn:function(){return[i("v-btn",{staticClass:"mr-2",attrs:{text:"",color:"light-blue darken-1"},on:{click:function(e){t.data.comic_chapter=t.data.comic_chapter.reverse()}}},[t._v("倒序")])]},proxy:!0}],null,!1,3210650527)},[t._v(" 目录 ")]),i("v-list",{staticStyle:{"margin-top":"-2px"}},[t._l(t.data.comic_chapter,(function(e){return i("v-list-item",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"blue--text"},expression:"{ class: `blue--text` }"}],key:e.chapter_newid,on:{click:function(i){return t.$router.push({name:"view",params:{comic_id:t.id,chapter_index:e.nowindex,data:t.data}})}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.chapter_name)}})],1)],1)}))],2)],1):t._e()],1)],1):t._e()},a=[],s=(i("4160"),i("a434"),i("159b"),{name:"Detail",data:function(){return{api:"https://m.kanman.com/api/getcomicinfo_body",loading:!0,show:!1,id:!1,data:!1,fond:!1}},mounted:function(){var t=this;setTimeout((function(){t.show=!0}),400),this.id=this.$route.params.id||!1,this.data=this.$route.params.data||!1;var e=window.JSON.parse(window.localStorage.like),i=this.id,n=!1;e.forEach((function(t,e,a){n=t.id==i})),this.fond=n,this.data?this.load(this.data):this.detail(this.id)},methods:{detail:function(t){var e=this;t||this.$router.go(-1),this.$axios.get(this.api,{params:{comic_id:t}}).then((function(t){e.load(t.data.data)}))},load:function(t){this.data=t,this.$router.push({path:"/detail/".concat(this.id)});var e=0;for(e=0;e<this.data.comic_chapter.length;e++)this.data.comic_chapter[e].nowindex=e;this.loading=!1},like:function(){var t=window.JSON.parse(window.localStorage.like),e={id:this.id,name:this.data.comic_name,author:this.data.comic_author,media:this.data.comic_media};if(!0===this.fond){var i=this.id;t.forEach((function(e,n,a){e.id==i&&t.splice(n,1)})),this.fond=!1}else!1===this.fond&&(t.push(e),this.fond=!0);window.localStorage.like=window.JSON.stringify(t)}}}),r=s,o=(i("99b8"),i("1d3b"),i("2877")),c=i("6544"),l=i.n(c),d=i("40dc"),h=(i("a4d3"),i("4de4"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("ade3")),u=(i("0467"),i("10d2")),p=i("713a"),v=i("9d26"),f=i("0789"),m=i("f2e7"),b=i("58df"),g=i("80d2");function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w=Object(b["a"])(u["a"],m["a"]).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,mobileBreakPoint:{type:[Number,String],default:960},singleLine:Boolean,sticky:Boolean,tile:{type:Boolean,default:!0},value:{type:Boolean,default:!0}},computed:{classes:function(){return y({},u["a"].options.computed.classes.call(this),{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isMobile:function(){return this.$vuetify.breakpoint.width<Number(this.mobileBreakPoint)},isSticky:function(){return this.sticky||this.app},styles:function(){var t=y({},u["a"].options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;t.top=Object(g["d"])(e),t.position="sticky",t.zIndex=1}return t}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(t){this.$emit("click:icon",t)},genIcon:function(){var t;if(this.hasIcon)return t=this.icon?this.$createElement(v["a"],{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(p["a"],{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[t])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var t=this,e=Object(g["h"])(this,"actions",{dismiss:function(){return t.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(t){return t(f["a"],[t("div",{staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]},[this.genWrapper()])])}}),O=i("8336"),k=i("b0af"),j=(i("8ce9"),i("7560"));function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var $=j["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:C({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:C({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),P=i("132d"),S=i("adda"),V=i("8860"),B=i("da13"),E=i("5d23"),I=i("490a"),D=i("0fd9"),A=i("2fa4"),L=i("2a7f"),N=i("269a"),T=i.n(N),J=i("5607"),z=Object(o["a"])(r,n,a,!1,null,"6b1df3f2",null);e["default"]=z.exports;l()(z,{VAppBar:d["a"],VBanner:w,VBtn:O["a"],VCard:k["a"],VDivider:$,VIcon:P["a"],VImg:S["a"],VList:V["a"],VListItem:B["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VProgressCircular:I["a"],VRow:D["a"],VSpacer:A["a"],VToolbarTitle:L["a"]}),T()(z,{Ripple:J["a"]})},ec47:function(t,e,i){}}]);
//# sourceMappingURL=chunk-77b75413.85ef530b.js.map