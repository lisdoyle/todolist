(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newitem"],{"0d4b":function(t,e,i){"use strict";var n=i("ec5c"),s=i.n(n);s.a},1146:function(t,e,i){},"1a7f":function(t,e,i){},"2fcb":function(t,e,i){},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),o=i("c31d"),a=i("ad06"),l=i("d282"),r=i("a142"),c={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},u=i("ba31"),h=i("48f4"),d=Object(l["a"])("cell"),f=d[0],b=d[1];function m(t,e,i,n){var o=e.icon,l=e.size,c=e.title,d=e.label,f=e.value,m=e.isLink,v=e.arrowDirection,p=i.title||Object(r["b"])(c),g=i.default||Object(r["b"])(f),y=i.label||Object(r["b"])(d),C=y&&t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():d]),k=p&&t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),C]),O=g&&t("div",{class:[b("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[f])]),$=i.icon?i.icon():o&&t(a["a"],{class:b("left-icon"),attrs:{name:o}}),w=i["right-icon"],x=w?w():m&&t(a["a"],{class:b("right-icon"),attrs:{name:v?"arrow-"+v:"arrow"}});function B(t){Object(u["a"])(n,"click",t),Object(h["a"])(n)}var S={center:e.center,required:e.required,borderless:!e.border,clickable:m||e.clickable};return l&&(S[l]=l),t("div",s()([{class:b(S),on:{click:B}},Object(u["b"])(n)]),[$,k,O,x,i.extra&&i.extra()])}m.props=Object(o["a"])({},c,{},h["b"]);var v=f(m),p=i("1325");function g(){return!r["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var y=i("a8c1"),C=g();function k(){C&&Object(y["c"])(Object(y["a"])())}var O=i("ea8e"),$=Object(l["a"])("field"),w=$[0],x=$[1];e["a"]=w({inheritAttrs:!1,props:Object(o["a"])({},c,{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(r["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(o["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(O["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(r["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),k()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(p["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(p["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(r["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:x("control",this.inputAlign)},[e]);var i={ref:"input",class:x("control",this.inputAlign),domProps:{value:this.value},attrs:Object(o["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:x("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:x("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(a["a"],{attrs:{name:this.rightIcon}})])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(v,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[x("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:x((t={error:this.error,disabled:this.$attrs.disabled},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:x("body")},[this.renderInput(),this.showClear&&e(a["a"],{attrs:{name:"clear"},class:x("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&e("div",{class:x("button")},[i("button")])]),this.errorMessage&&e("div",{class:x("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},6932:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newitem"},[i("div",{staticClass:"item"},[i("div",[i("van-field",{staticClass:"title",attrs:{type:"textarea",placeholder:"标题",rows:"1",autosize:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("hr"),i("van-field",{staticClass:"content",attrs:{type:"textarea",placeholder:"记事",rows:"10",autosize:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("div",{staticClass:"btn"},[i("van-button",{staticClass:"vbtn",attrs:{disabled:t.disabled,type:"primary",size:"large"},on:{click:t.save}},[t._v("保存")])],1)])},s=[],o=(i("be7f"),i("565f")),a=i("2b0e");a["a"].use(o["a"]);var l={data:function(){return{title:"",content:"",disabled:!0}},methods:{save:function(){var t=(new Date).getTime();this.$store.commit("saveitem",{title:this.title,content:this.content,ctime:t,listuid:t}),this.$router.push("/")},cancel:function(){console.log("btn")}},watch:{title:function(){var t=this.title.trim(),e=this.content.trim();null!=t&&t.length>0?this.disabled=!1:null!=e&&e.length>0?this.disabled=!1:this.disabled=!0},content:function(){var t=this.title.trim(),e=this.content.trim();null!=t&&t.length>0?this.disabled=!1:null!=e&&e.length>0?this.disabled=!1:this.disabled=!0}}},r=l,c=(i("c805"),i("2877")),u=Object(c["a"])(r,n,s,!1,null,"6a5ff2a8",null);e["default"]=u.exports},be7f:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146")},c805:function(t,e,i){"use strict";var n=i("1a7f"),s=i.n(n);s.a},dbc2:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newitem"},[i("div",{staticClass:"item"},[i("div",[i("van-field",{staticClass:"title",attrs:{type:"textarea",placeholder:"标题",rows:"1",autosize:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("hr"),i("van-field",{staticClass:"content",attrs:{type:"textarea",placeholder:"记事",rows:"5",autosize:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("div",{staticClass:"btn"},[i("van-button",{staticClass:"vbtn",attrs:{disabled:t.disabled,type:"primary"},on:{click:t.save}},[t._v("保存")]),i("van-button",{staticClass:"vbtn",attrs:{type:"danger"},on:{click:t.deleteit}},[t._v("删除")])],1)])},s=[],o=(i("68ef"),i("4d75"),i("09fe"),i("2fcb"),i("c31d")),a=i("2b0e"),l=i("d282"),r=i("6605"),c=i("1325");function u(t){function e(){this.binded||(t.call(this,c["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,c["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}var h,d=a["a"].extend({mixins:[u(function(t,e){this.handlePopstate(e&&this.closeOnPopstate)})],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?c["b"]:c["a"];e(window,"popstate",this.close)}}}}),f=i("b650"),b=Object(l["a"])("dialog"),m=b[0],v=b[1],p=b[2],g=m({mixins:[r["a"],d],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(i){!1!==i&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(){var t,e=this,i=arguments[0];if(this.shouldRender){var n=this.message,s=this.messageAlign,o=this.slots(),a=this.slots("title")||this.title,l=a&&i("div",{class:v("header",{isolated:!n&&!o})},[a]),r=(o||n)&&i("div",{class:v("content")},[o||i("div",{domProps:{innerHTML:n},class:v("message",(t={"has-title":a},t[s]=s,t))})]),c=this.showCancelButton&&this.showConfirmButton,u=i("div",{class:["van-hairline--top",v("footer",{buttons:c})]},[this.showCancelButton&&i(f["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||p("cancel")},class:v("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&i(f["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||p("confirm")},class:[v("confirm"),{"van-hairline--left":c}],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})]);return i("transition",{attrs:{name:"van-dialog-bounce"}},[i("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[v(),this.className]},[l,r,u])])}}}),y=i("a142");function C(t){return document.body.contains(t)}function k(){h&&h.$destroy(),h=new(a["a"].extend(g))({el:document.createElement("div"),propsData:{lazyRender:!1}}),h.$on("input",function(t){h.value=t})}function O(t){return y["d"]?Promise.resolve():new Promise(function(e,i){h&&C(h.$el)||k(),Object(o["a"])(h,O.currentOptions,t,{resolve:e,reject:i})})}O.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){h["confirm"===t?"resolve":"reject"](t)}},O.alert=O,O.confirm=function(t){return O(Object(o["a"])({showCancelButton:!0},t))},O.close=function(){h&&(h.value=!1)},O.setDefaultOptions=function(t){Object(o["a"])(O.currentOptions,t)},O.resetDefaultOptions=function(){O.currentOptions=Object(o["a"])({},O.defaultOptions)},O.resetDefaultOptions(),O.install=function(){a["a"].use(g)},O.Component=g,a["a"].prototype.$dialog=O;var $=O,w=(i("e7e5"),i("d399")),x=(i("be7f"),i("565f"));a["a"].use(x["a"]),a["a"].use(w["a"]);var B={mounted:function(){console.log(this.storeitem),console.log(this.storeindex),0==this.$store.state.modify.canmodify&&(Object(w["a"])("erro:不正常进入modify.vue"),this.$router.push("/"))},beforeDestroy:function(){this.$store.commit("canmodify",!1)},data:function(){return{storeitem:this.$store.state.modify.item,storeindex:this.$store.state.modify.index,title:this.$store.state.modify.item.title,content:this.$store.state.modify.item.content,listuid:this.$store.state.modify.item.listuid,disabled:!0}},methods:{save:function(){var t=(new Date).getTime();this.$store.commit("modifyitem",{title:this.title,content:this.content,ctime:t,listuid:this.listuid})},deleteit:function(){var t=this;$.confirm({title:"确定删除？",message:"删除后内容不能恢复"}).then(function(){console.log("ok"),t.$store.commit("deleteit"),t.$router.push("/")}).catch(function(){return!1})}},watch:{title:function(){var t=this.title.trim(),e=this.content.trim();null!=t&&t.length>0?this.disabled=!1:null!=e&&e.length>0?this.disabled=!1:this.disabled=!0},content:function(){var t=this.title.trim(),e=this.content.trim();null!=t&&t.length>0?this.disabled=!1:null!=e&&e.length>0?this.disabled=!1:this.disabled=!0}}},S=B,j=(i("0d4b"),i("2877")),z=Object(j["a"])(S,n,s,!1,null,"25421534",null);e["default"]=z.exports},ec5c:function(t,e,i){}}]);
//# sourceMappingURL=newitem.4dba7d03.js.map