webpackJsonp([12],{KTy7:function(t,e){},V0Ba:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),c=a.n(n),r=a("exGp"),s=a.n(r),i=a("Edwb"),o=a("3zMY"),u={data:function(){return{codeNumber:null,captchaCodeImg:null}},methods:{getCaptchaCode:function(){var t=this;return s()(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:a=e.sent,t.captchaCodeImg=a.code;case 4:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getCaptchaCode()},components:{headTop:i.a}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forget_container"},[a("head-top",{attrs:{"go-back":"true","head-title":"重置密码"}}),t._v(" "),a("form",{staticClass:"forget_form",attrs:{action:""}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("section",{staticClass:"input_container captcha_code_container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.codeNumber,expression:"codeNumber"}],attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:t.codeNumber},on:{input:function(e){e.target.composing||(t.codeNumber=e.target.value)}}}),t._v(" "),a("div",{staticClass:"img_change"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.captchaCodeImg,expression:"captchaCodeImg"}],attrs:{src:t.captchaCodeImg}}),t._v(" "),a("div",{staticClass:"change_image"},[a("p",[t._v("看不清")]),t._v(" "),a("p",{staticClass:"Another_one",on:{click:t.getCaptchaCode}},[t._v("换一张")])])])])]),t._v(" "),a("div",{staticClass:"Confirm_change"},[t._v("确认修改")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"input_container phone_number"},[e("input",{attrs:{type:"text",placeholder:"账号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"input_container"},[e("input",{attrs:{type:"text",placeholder:"旧密码"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"input_container"},[e("input",{attrs:{type:"text",placeholder:"请输入新密码"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"input_container"},[e("input",{attrs:{type:"text",placeholder:"请确认密码"}})])}]};var p=a("VU/8")(u,l,!1,function(t){a("KTy7")},"data-v-3b450648",null);e.default=p.exports}});
//# sourceMappingURL=12.da4a8dd52724b3f0aaf4.js.map