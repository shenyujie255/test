webpackJsonp([8],{RBGi:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Edwb"),n=s("3zMY"),a={data:function(){return{guessCity:"",guessCityid:"",hotcity:[],groupcity:{}}},components:{headTop:e.a},computed:{sortgroupcity:function(){for(var t={},i=65;i<=90;i++)this.groupcity[String.fromCharCode(i)]&&(t[String.fromCharCode(i)]=this.groupcity[String.fromCharCode(i)]);return t}},mounted:function(){var t=this;Object(n.b)().then(function(i){t.guessCity=i.name,t.guessCityid=i.id}),Object(n.g)().then(function(i){t.groupcity=i}),Object(n.h)().then(function(i){t.hotcity=i})},methods:{reload:function(){window.location.reload()}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home-container"},[s("head-top",{attrs:{"signin-up":"home"}},[s("span",{staticClass:"head_logo",attrs:{slot:"logo"},on:{click:t.reload},slot:"logo"},[t._v("ele.me")])]),t._v(" "),s("div",{staticClass:"city_nav"},[t._m(0),t._v(" "),s("router-link",{staticClass:"guess_city",attrs:{to:"/city/"+t.guessCityid}},[s("span",[t._v(t._s(t.guessCity))]),t._v(" "),s("svg",{staticClass:"arrow_right",attrs:{fill:"#999"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])],1),t._v(" "),s("section",{staticClass:"hot_city"},[s("h4",{staticClass:"city_title"},[t._v("热门城市")]),t._v(" "),s("ul",{staticClass:"citylist clear"},t._l(t.hotcity,function(i){return s("router-link",{key:i.id,attrs:{tag:"li",to:"/city/"+i.id}},[t._v("\n      "+t._s(i.name)+"\n      ")])}),1)]),t._v(" "),s("section",{staticClass:"group_city_container"},[s("ul",{staticClass:"letter_classify"},t._l(t.sortgroupcity,function(i,e,n){return s("li",{key:e,staticClass:"letter_classify_li"},[s("h4",{staticClass:"city_title"},[t._v(t._s(e)+"\n                    "),0==n?s("span",[t._v("（按字母排序）")]):t._e()]),t._v(" "),s("ul",{staticClass:"groupcity_name_container citylistul clear"},t._l(i,function(i){return s("router-link",{key:i.id,staticClass:"ellipsis",attrs:{tag:"li",to:"/city/"+i.id}},[t._v("\n                          "+t._s(i.name)+"\n                      ")])}),1)])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"city_tip"},[i("span",{staticClass:"tip_left"},[this._v("当前定位城市：")]),this._v(" "),i("span",{staticClass:"tip_right"},[this._v("定位不准时，请在城市列表中选择")])])}]};var c=s("VU/8")(a,r,!1,function(t){s("vJN3")},null,null);i.default=c.exports},vJN3:function(t,i){}});
//# sourceMappingURL=8.d49ab9b7f95037795168.js.map