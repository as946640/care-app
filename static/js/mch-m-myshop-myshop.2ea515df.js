(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mch-m-myshop-myshop"],{"40f0":function(i,t,n){"use strict";var a=n("bc8e"),e=n.n(a);e.a},"67f9":function(i,t,n){"use strict";var a,e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"shop-info"},[n("v-uni-view",{staticClass:"money-title"},[i._v("今日付款金额（元）")]),n("v-uni-view",{staticClass:"money"},[i._v(i._s(i.shop_info.data1))]),n("v-uni-view",{staticClass:"info-list"},[n("v-uni-view",{staticClass:"info-item"},[n("v-uni-view",[i._v("浏览人数")]),n("v-uni-view",[i._v(i._s(i.shop_info.data2))])],1),n("v-uni-view",{staticClass:"info-item"},[n("v-uni-view",[i._v("付款订单数")]),n("v-uni-view",[i._v(i._s(i.shop_info.data3))])],1),n("v-uni-view",{staticClass:"info-item"},[n("v-uni-view",[i._v("付款件数")]),n("v-uni-view",[i._v(i._s(i.shop_info.data4))])],1)],1)],1),n("v-uni-view",{staticClass:"manage-list"},i._l(i.manage_list,(function(t,a){return n("v-uni-view",{staticClass:"manage-item",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.toPage(t.url)}}},[n("v-uni-view",{staticClass:"manage-img"},[n("v-uni-image",{attrs:{src:t.img}})],1),n("v-uni-view",{staticClass:"manage-name"},[i._v(i._s(t.name))])],1)})),1),n("v-uni-view",{staticClass:"pc"},[n("v-uni-text",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toCpoyPc.apply(void 0,arguments)}}},[i._v("PC端管理网址")])],1),i.copyShow?n("v-uni-view",{staticClass:"pcUrl"},[n("v-uni-view",[i._v(i._s(i.shop_info.pc_url))]),n("v-uni-view",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.copyPc.apply(void 0,arguments)}}},[i._v("复制链接")])],1):i._e(),i.shadeShow?n("v-uni-view",{staticClass:"shade",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)}}}):i._e()],1)},o=[];n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))},9172:function(i,t,n){"use strict";n.r(t);var a=n("67f9"),e=n("98f3");for(var o in e)"default"!==o&&function(i){n.d(t,i,(function(){return e[i]}))}(o);n("40f0");var c,s=n("f0c5"),d=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"664fd2dc",null,!1,a["a"],c);t["default"]=d.exports},"98f3":function(i,t,n){"use strict";n.r(t);var a=n("a882"),e=n.n(a);for(var o in a)"default"!==o&&function(i){n.d(t,i,(function(){return a[i]}))}(o);t["default"]=e.a},a882:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{manage_list:[{name:"店铺管理",img:"/static/img/mch/menu-1.png",url:"/mch/m/setting/setting"},{name:"商品管理",img:"/static/img/mch/menu-2.png",url:"/mch/m/goods/goods"},{name:"订单管理",img:"/static/img/mch/menu-3.png",url:"/mch/m/order/order"},{name:"资产",img:"/static/img/mch/menu-5.png",url:"/mch/m/account/account"}],shop_info:{},copyShow:!1,shadeShow:!1}},onLoad:function(){this.getShopInfo()},methods:{toCpoyPc:function(){this.copyShow=!0,this.shadeShow=!0},close:function(){this.copyShow=!1,this.shadeShow=!1},copyPc:function(){uni.setClipboardData({data:this.shop_info.pc_url,success:function(){}}),this.close()},getShopInfo:function(){var i=this;uni.showLoading({title:"加载中"}),this.$request({url:this.$api.mch.user.myshop}).then((function(t){uni.hideLoading(),0==t.code&&(0===t.data.mch.is_open&&uni.showModal({title:"提示",content:"店铺已被关闭！请联系管理员",showCancel:!1,success:function(i){i.confirm&&uni.navigateBack()}}),i.pc_url=t.data.pc_url,i.shop_info=t.data),1==t.code&&uni.redirectTo({url:"/mch/apply/apply"})}))},toPage:function(i){uni.navigateTo({url:i})}}};t.default=a},bc8e:function(i,t,n){var a=n("be7b");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("00d07062",a,!0,{sourceMap:!1,shadowMode:!1})},be7b:function(i,t,n){var a=n("24fb");t=a(!1),t.push([i.i,".shop-info[data-v-664fd2dc]{width:100%;background-image:-webkit-linear-gradient(top,#f09495,#f06c7a);background-image:linear-gradient(180deg,#f09495,#f06c7a);padding:%?40?% 0 %?20?% 0;box-sizing:border-box}.money-title[data-v-664fd2dc]{text-align:center;color:#fff;font-size:%?34?%}.money[data-v-664fd2dc]{font-size:%?60?%;font-weight:700;color:#fff;text-align:center;padding:%?40?% 0}.info-list[data-v-664fd2dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%}.info-list>uni-view[data-v-664fd2dc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#fff}.info-list>uni-view[data-v-664fd2dc]:not(:last-child){border-right:1px solid hsla(0,0%,100%,.5)}.info-item>uni-view[data-v-664fd2dc]:nth-of-type(2){padding-top:%?8?%}.manage-list[data-v-664fd2dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;padding:%?40?% 0}.manage-list>uni-view[data-v-664fd2dc]{text-align:center;width:33%;padding:%?40?% 0}.manage-img[data-v-664fd2dc]{width:%?80?%;height:%?80?%;margin:0 auto}.manage-name[data-v-664fd2dc]{padding-top:%?10?%}.manage-img>uni-image[data-v-664fd2dc]{width:100%;height:100%}.pc[data-v-664fd2dc]{color:#888;text-align:center;line-height:%?100?%}.pcUrl[data-v-664fd2dc]{width:%?500?%;word-break:break-all;background-color:#fff;border-radius:%?16?%;position:fixed;top:%?300?%;left:calc(50% - %?250?%);z-index:9;padding:%?30?%;box-sizing:border-box}.pcUrl>uni-view[data-v-664fd2dc]:nth-of-type(2){margin-top:%?20?%;text-align:center}.shade[data-v-664fd2dc]{width:100vw;height:100vh;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0}",""]),i.exports=t}}]);