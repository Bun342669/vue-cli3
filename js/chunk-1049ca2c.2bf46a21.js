(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1049ca2c"],{8418:function(t,r,e){"use strict";var s=e("c04e"),a=e("9bf2"),o=e("5c6c");t.exports=function(t,r,e){var i=s(r);i in t?a.f(t,i,o(0,e)):t[i]=e}},"99af":function(t,r,e){"use strict";var s=e("23e7"),a=e("d039"),o=e("e8b5"),i=e("861d"),n=e("7b0b"),c=e("50c4"),d=e("8418"),u=e("65f0"),l=e("1dde"),h=e("b622"),_=e("2d00"),f=h("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=_>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=l("concat"),m=function(t){if(!i(t))return!1;var r=t[f];return void 0!==r?!!r:o(t)},C=!g||!b;s({target:"Array",proto:!0,forced:C},{concat:function(t){var r,e,s,a,o,i=n(this),l=u(i,0),h=0;for(r=-1,s=arguments.length;r<s;r++)if(o=-1===r?i:arguments[r],m(o)){if(a=c(o.length),h+a>v)throw TypeError(p);for(e=0;e<a;e++,h++)e in o&&d(l,h,o[e])}else{if(h>=v)throw TypeError(p);d(l,h++,o)}return l.length=h,l}})},c8cb:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"my-5 row justify-content-center"},[e("form",{staticClass:"col-md-6",on:{submit:function(r){return r.preventDefault(),t.payorder(r)}}},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.order.products,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"align-middle"},[t._v(t._s(r.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(r.qty)+"/"+t._s(r.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(r.final_total))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",{staticClass:"text-right"},[t._v("單價")])])}],o=(e("99af"),{data:function(){return{orderId:"",order:{user:{}}}},methods:{getorder:function(){var t=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("dessert342669","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(r).then((function(r){t.order=r.data.order,t.isLoading=!1}))},payorder:function(){var t=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("dessert342669","/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(r).then((function(r){r.data.success&&t.getorder(),t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getorder()}}),i=o,n=e("2877"),c=Object(n["a"])(i,s,a,!1,null,null,null);r["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1049ca2c.2bf46a21.js.map