(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{317:function(s,i,t){},319:function(s,i,t){"use strict";t(317)},347:function(s,i,t){"use strict";t.r(i);t(31),t(32),t(9);var e=Symbol(),a=Symbol(),n=Symbol(),o={props:["src"],data:function(){return{status:e}},computed:{isDefault:function(){return this.status===e},isLoaded:function(){return this.status===a},isFailed:function(){return this.status===n}},methods:{imgLoaded:function(){this.status=a},imgFailed:function(){this.status=n}}},r=(t(319),t(26)),c=Object(r.a)(o,(function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{staticClass:"lazy-img"},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.isDefault,expression:"isDefault"}],staticClass:"card pending"},[t("div",[s._v("Clash for Windows")])]),s._v(" "),t("img",{directives:[{name:"show",rawName:"v-show",value:s.isLoaded,expression:"isLoaded"}],staticClass:"img",attrs:{src:s.src},on:{load:s.imgLoaded,error:s.imgFailed,click:function(i){return s.$emit("click")}}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.isFailed,expression:"isFailed"}],staticClass:"card failed"},[t("div",[s._v("image 404")])])])}),[],!1,null,"9b81c2a8",null);i.default=c.exports}}]);