(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mch-m-order-detail-order-detail"],{"0a0a":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,".model[data-v-5c062868]{width:100vw;height:100vh;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;top:0;left:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:999}.box[data-v-5c062868]{background-color:#fff;border-radius:%?20?%;width:75vw}.title[data-v-5c062868]{text-align:center;font-size:%?34?%;padding:%?30?%}.mode[data-v-5c062868]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?40?%;margin-top:%?10?%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.mode>uni-view[data-v-5c062868]{padding:%?20?% %?40?%;border:1px solid #e2e2e2;border-radius:%?15?%\n\t/* margin: 0 5vw; */}.mode-active[data-v-5c062868]{color:#fff;background-color:#ff4544;border:1px solid #ff4544}.btn[data-v-5c062868]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;border-top:1px solid #eee;padding:%?25?% 0}.btn>uni-view[data-v-5c062868]:nth-of-type(2){color:#ff4544}",""]),e.exports=i},"1fc2":function(e,i,t){"use strict";var n=t("7941"),a=t.n(n);a.a},"28df":function(e,i,t){"use strict";var n=t("9197"),a=t.n(n);a.a},"3f9f":function(e,i,t){"use strict";t.r(i);var n=t("d72b"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a},"5a39":function(e,i,t){"use strict";var n,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"body"},[t("v-uni-view",{staticClass:"order-detail"},[t("v-uni-view",{staticClass:"detail-top"},[t("v-uni-view",[e._v("订单详情")]),t("v-uni-view",[e._v("状态："+e._s(e.order_detail.status_text))])],1),t("v-uni-view",{staticClass:"order-info"},[t("v-uni-view",[e._v("订单编号："+e._s(e.order_detail.order_no))]),t("v-uni-view",[e._v("下单时间："+e._s(e.order_detail.addtime))])],1),t("v-uni-view",{staticClass:"order-goods-list"},e._l(e.order_detail.goods_list,(function(i,n){return t("v-uni-view",{key:n,staticClass:"order-goods-item"},[t("v-uni-view",{staticClass:"goods-img"},[t("v-uni-image",{attrs:{src:i.cover_pic}})],1),t("v-uni-view",{staticClass:"goods-info"},[t("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(i.name))]),t("v-uni-view",{staticClass:"goods-scale"},e._l(i.attr,(function(i,n){return t("v-uni-text",[e._v(e._s(i.attr_group_name)+":"+e._s(i.attr_name))])})),1),t("v-uni-view",{staticClass:"goods-price"},[t("v-uni-view",[e._v("x"+e._s(i.num))]),t("v-uni-view",[e._v("￥"+e._s(i.total_price))])],1)],1)],1)})),1),t("v-uni-view",{staticClass:"order-freight"},[t("v-uni-view",[e._v("运费")]),t("v-uni-view",[e._v("+￥"+e._s(e.order_detail.express_price))])],1),t("v-uni-view",{staticClass:"order-total"},[t("v-uni-view",[e._v("实际付款")]),t("v-uni-view",[e._v("￥"+e._s(e.order_detail.pay_price))])],1),0==e.order_detail.is_pay?t("v-uni-view",{staticClass:"change-price"},[t("v-uni-view"),t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openChangePrice.apply(void 0,arguments)}}},[e._v("改价")])],1):e._e()],1),t("v-uni-view",{staticClass:"receiving-info"},[t("v-uni-view",{staticClass:"receiving-top"},[t("v-uni-view",[e._v("收货信息")]),t("v-uni-view",[e._v(e._s(e.order_detail.express_type))])],1),t("v-uni-view",{staticClass:"addr-info"},[t("v-uni-view",{staticClass:"people-name"},[t("v-uni-view",[e._v("收货人：")]),t("v-uni-view",[e._v(e._s(e.order_detail.name))])],1),t("v-uni-view",{staticClass:"people-phone"},[t("v-uni-view",[e._v("联系电话：")]),t("v-uni-view",[e._v(e._s(e.order_detail.mobile))])],1),t("v-uni-view",{staticClass:"people-addr"},[t("v-uni-view",[e._v("收货地址：")]),t("v-uni-view",[e._v(e._s(e.order_detail.address))])],1)],1),1==e.order_detail.is_pay?[0==e.order_detail.is_send?[t("v-uni-view",{staticClass:"deliver"},[t("v-uni-view",[e._v("买家已付款，请及时发货")]),t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openModel.apply(void 0,arguments)}}},[e._v("发货")])],1)]:[t("v-uni-view",{staticClass:"logistics"},[0==e.order_detail.is_confirm?t("v-uni-view",{staticClass:"change"},[t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openModel.apply(void 0,arguments)}}},[e._v("修改物流信息")])],1):e._e(),1==e.order_detail.is_express?t("v-uni-view",{staticClass:"logistics-cont"},[t("v-uni-view",{staticClass:"logistics-num"},[t("v-uni-view",[e._v("物流单号：")]),t("v-uni-view",[e._v(e._s(e.order_detail.express_no))])],1),t("v-uni-view",{staticClass:"logistics-company"},[t("v-uni-view",[e._v("快递公司：")]),t("v-uni-view",[e._v(e._s(e.order_detail.express))])],1),t("v-uni-view",{staticClass:"logistics-info"},[t("v-uni-view",[e._v("物流信息：")]),t("v-uni-view",{staticClass:"logistics-info-list"},e._l(e.order_detail.express_data.data.list,(function(i,n){return t("v-uni-view",{staticClass:"logistics-info-item"},[t("v-uni-view",{staticClass:"info-item-circular"}),t("v-uni-view",{staticClass:"info-item-cont"},[t("v-uni-view",[e._v(e._s(i.detail))]),t("v-uni-view",[e._v(e._s(i.datetime))])],1)],1)})),1)],1)],1):e._e()],1)]]:e._e()],2),t("model",{attrs:{show:e.model_show,order_id:e.order_id},on:{closeModel:function(i){arguments[0]=i=e.$handleEvent(i),e.closeModel.apply(void 0,arguments)}}}),e.change_price_show?t("v-uni-view",{staticClass:"change-price-model"},[t("v-uni-view",{staticClass:"change-price-box"},[t("v-uni-view",{staticClass:"change-price-tab"},[t("v-uni-view",{class:"sub"==e.type?"change-price-tab-active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changePriceTab("sub")}}},[e._v("优惠")]),t("v-uni-view",{class:"add"==e.type?"change-price-tab-active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changePriceTab("add")}}},[e._v("加价")])],1),t("v-uni-view",{staticClass:"change-price-money"},["sub"==e.type?t("v-uni-input",{attrs:{type:"number",placeholder:"请输入优惠金额(元)"},model:{value:e.sub_price,callback:function(i){e.sub_price=i},expression:"sub_price"}}):e._e(),"add"==e.type?t("v-uni-input",{attrs:{type:"number",placeholder:"请输入加价金额(元)"},model:{value:e.add_price,callback:function(i){e.add_price=i},expression:"add_price"}}):e._e()],1),t("v-uni-view",{staticClass:"change-price-rule"},["sub"==e.type?t("v-uni-view",[e._v("最多还可优惠"+e._s(e.order_detail.max_sub_price)+"元")]):e._e(),"add"==e.type?t("v-uni-view",[e._v("加价金额无限制")]):e._e()],1),t("v-uni-view",{staticClass:"change-price-btn"},[t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.closeChangePrice.apply(void 0,arguments)}}},[e._v("取消")]),t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.subChangePrice.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1):e._e()],1)},o=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}))},7941:function(e,i,t){var n=t("fe6c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("6093ec30",n,!0,{sourceMap:!1,shadowMode:!1})},9197:function(e,i,t){var n=t("0a0a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("58410857",n,!0,{sourceMap:!1,shadowMode:!1})},aa2a:function(e,i,t){"use strict";t.r(i);var n=t("5a39"),a=t("3f9f");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("1fc2");var d,s=t("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"32272b88",null,!1,n["a"],d);i["default"]=r.exports},afd9:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{show:{type:Boolean,default:!1},order_id:0},data:function(){return{index:1}},methods:{changeMode:function(e){this.index=e},closeModel:function(){this.$emit("closeModel"),this.index=1},toSend:function(){var e=this;console.log(this.order_id),1!=this.index?2==this.index&&uni.showModal({title:"提示",content:"无需物流方式订单将直接标记成已发货，请确认操作。",success:function(i){i.confirm?e.$request({url:e.$api.mch.order.send,method:"POST",data:{send_type:"none",order_id:e.order_id}}).then((function(e){console.log(e),0==e.code&&(uni.showToast({title:e.msg,icon:"none"}),setTimeout((function(){uni.redirectTo({url:"/mch/m/order/order?status=3"})}),500)),1==e.code&&uni.showToast({title:e.msg,icon:"none"})})):i.cancel&&console.log("用户点击取消")}}):uni.navigateTo({url:"/mch/m/order-send/order-send?order_id="+this.order_id})}}};i.default=n},bd87:function(e,i,t){"use strict";t.r(i);var n=t("f549"),a=t("cf3a");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("28df");var d,s=t("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5c062868",null,!1,n["a"],d);i["default"]=r.exports},cf3a:function(e,i,t){"use strict";t.r(i);var n=t("afd9"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a},d72b:function(e,i,t){"use strict";var n=t("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("bd87")),o={components:{model:a.default},data:function(){return{order_id:0,order_detail:{},model_show:!1,change_price_show:!1,type:"sub",sub_price:"",add_price:""}},onLoad:function(e){console.log(e),this.order_id=e.order_id,this.getDetail()},methods:{getDetail:function(){var e=this;uni.showLoading({title:"正在加载"}),this.$request({url:this.$api.mch.order.detail,data:{id:this.order_id}}).then((function(i){uni.hideLoading(),0==i.code&&(e.order_detail=i.data.order),1==i.code&&uni.showToast({title:i.msg,icon:"none"}),console.log(i)}))},openModel:function(e){this.model_show=!0},closeModel:function(){this.model_show=!1},closeChangePrice:function(){this.change_price_show=!1},openChangePrice:function(){this.change_price_show=!0},changePriceTab:function(e){this.type=e},subChangePrice:function(){var e=this;uni.showLoading({title:"正在提交改价"}),this.$request({url:this.$api.mch.order.edit_price,method:"POST",data:{order_id:this.order_id,type:this.type,price:"sub"==this.type?this.sub_price:this.add_price}}).then((function(i){uni.hideLoading(),0==i.code&&uni.showModal({title:"提示",content:"修改成功",showCancel:!1,success:function(i){i.confirm&&uni.redirectTo({url:"/mch/m/order-detail/order-detail?order_id="+e.order_id})}}),1==i.code&&uni.showToast({title:i.msg,icon:"none"})}))}}};i.default=o},f549:function(e,i,t){"use strict";var n,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"body"},[e.show?t("v-uni-view",{staticClass:"model"},[t("v-uni-view",{staticClass:"box"},[t("v-uni-view",{staticClass:"title"},[e._v("选择发货方式")]),t("v-uni-view",{staticClass:"mode"},[t("v-uni-view",{class:1==e.index?"mode-active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeMode(1)}}},[e._v("快递配送")]),t("v-uni-view",{class:2==e.index?"mode-active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeMode(2)}}},[e._v("无需物流")])],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.closeModel.apply(void 0,arguments)}}},[e._v("取消")]),t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toSend.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1):e._e()],1)},o=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}))},fe6c:function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,".order-detail[data-v-32272b88]{background-color:#fff;padding:0 %?20?%;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;margin-bottom:%?20?%}.detail-top[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0;border-bottom:1px solid #f0f0f0;font-size:%?34?%}.detail-top>uni-view[data-v-32272b88]:nth-of-type(1){color:#25b6ed}.detail-top>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto}.order-info[data-v-32272b88]{padding:%?20?% 0}.order-info>uni-view[data-v-32272b88]{padding:%?5?% 0}.order-goods-item[data-v-32272b88]{padding:%?10?% 0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex}.goods-img[data-v-32272b88]{width:%?190?%;height:%?190?%}.goods-img>uni-image[data-v-32272b88]{width:100%;height:100%}.goods-info[data-v-32272b88]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-name[data-v-32272b88]{font-size:%?34?%;height:%?88?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.goods-scale[data-v-32272b88]{padding:%?10?% 0;color:#888}.goods-price[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%}.goods-price>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto;color:#ff4544}.order-freight[data-v-32272b88]{padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f0f0f0}.order-freight>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto}.order-total[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0;font-size:%?34?%}.order-total>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto}.change-price[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;font-size:%?30?%}.change-price>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto;border:1px solid #ccc;border-radius:%?10?%;padding:%?10?% %?25?%}.receiving-info[data-v-32272b88]{background-color:#fff;border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;padding:0 %?20?%;margin-bottom:%?80?%}.receiving-top[data-v-32272b88]{padding:%?20?% 0;font-size:%?34?%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f0f0f0}.receiving-top>uni-view[data-v-32272b88]:nth-of-type(1){color:#25b6ed}.receiving-top>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto}.addr-info[data-v-32272b88]{padding:%?20?% 0}.addr-info>uni-view[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?15?%;font-size:%?34?%}.addr-info>uni-view>uni-view[data-v-32272b88]:nth-of-type(1),.logistics-cont>uni-view>uni-view[data-v-32272b88]:nth-of-type(1){width:%?180?%;text-align:justify;text-align-last:justify}.addr-info>uni-view>uni-view[data-v-32272b88]:nth-of-type(2),.logistics-cont>uni-view>uni-view[data-v-32272b88]:nth-of-type(2){-webkit-box-flex:1;-webkit-flex:1;flex:1}.logistics[data-v-32272b88]{border-top:1px solid #f0f0f0;padding:%?20?% 0}.logistics-cont[data-v-32272b88]{padding:%?20?% 0}.logistics-cont>uni-view[data-v-32272b88]{padding-bottom:%?15?%}.order-tips[data-v-32272b88]{border-top:1px solid #f0f0f0}.deliver[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?34?%;border-top:1px solid #f0f0f0}.deliver>uni-view[data-v-32272b88]:nth-of-type(2){margin-left:auto;padding:%?10?% %?30?%;border:1px solid #ccc;font-size:%?32?%;border-radius:%?10?%}.change[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex}.change>uni-view[data-v-32272b88]{margin-left:auto;padding:%?10?% %?30?%;border:1px solid #ccc;border-radius:%?10?%}.logistics-cont>uni-view[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?34?%}.logistics-info-item[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?15?%}.info-item-circular[data-v-32272b88]{width:%?32?%;height:%?32?%;border-radius:50%;background-color:#888;border:2px solid #ccc}.logistics-info-item:nth-of-type(1)>.info-item-circular[data-v-32272b88]{width:%?32?%;height:%?32?%;border-radius:50%;background-color:#25ae5f;border:2px solid #b7e8bd}.info-item-cont[data-v-32272b88]{margin-left:%?10?%}.logistics-info-item:nth-of-type(1)>.info-item-cont>uni-view[data-v-32272b88]:nth-of-type(1){color:#25ae5f}.info-item-cont>uni-view[data-v-32272b88]:nth-of-type(2){color:#888}.change-price-model[data-v-32272b88]{width:100vw;height:100vh;position:fixed;z-index:999;background-color:rgba(0,0,0,.5);top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.change-price-box[data-v-32272b88]{background-color:#fff;border-radius:%?20?%;width:75vw;overflow:hidden}.change-price-tab[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?34?%;border-bottom:1px solid #f0f0f0}.change-price-tab>uni-view[data-v-32272b88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;padding:%?25?% 0}.change-price-tab-active[data-v-32272b88]{background-color:#ff4544;color:#fff}.change-price-money[data-v-32272b88]{margin-top:%?40?%;padding:0 %?40?%}.change-price-money>uni-input[data-v-32272b88]{border-bottom:1px solid #e8e8e8;padding-bottom:%?20?%;font-size:%?32?%;color:#8e8e8e}.change-price-rule[data-v-32272b88]{padding:%?20?% %?40?%;font-size:%?32?%;color:#8e8e8e}.change-price-btn[data-v-32272b88]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?% 0;font-size:%?34?%}.change-price-btn>uni-view[data-v-32272b88]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.change-price-btn>uni-view[data-v-32272b88]:nth-of-type(2){color:#ff4544}",""]),e.exports=i}}]);