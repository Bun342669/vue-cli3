(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3b77f5"],{6023:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.sortOrder,(function(e,s){return a("tr",{key:s,class:{"text-secondary":!e.is_paid}},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[e.user?a("span",{domProps:{textContent:t._s(e.user.email)}}):t._e()]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e.product.title)+" 數量："+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])})),0)]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("strong",{staticClass:"text-success"},[t._v("已付款")]):a("span",{staticClass:"text-muted"},[t._v("尚未起用")])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("購買時間")]),a("th",[t._v("Email")]),a("th",[t._v("購買款項")]),a("th",[t._v("應付金額")]),a("th",[t._v("是否付款")])])])}],r=(a("99af"),a("6407")),i={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1}},components:{Pagination:r["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("dessert342669","/admin/orders?page=").concat(t);e.isLoading=!0,this.$http.get(a,e.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1}))}},computed:{sortOrder:function(){var t=this,e=[];return t.orders.length&&(e=t.orders.sort((function(t,e){var a=t.is_paid?1:0,s=e.is_paid?1:0;return s-a}))),e}},created:function(){this.getOrders()}},o=i,c=a("2877"),u=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=u.exports},6407:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])},n=[],r={name:"Layout",props:["pages"],data:function(){return{msg:"Welcome to Your Vue.js App",uid:""}},methods:{updatePage:function(t){this.$emit("emitPages",t)}}},i=r,o=a("2877"),c=Object(o["a"])(i,s,n,!1,null,null,null);e["a"]=c.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),n=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var i=s(e);i in t?n.f(t,i,r(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var s=a("23e7"),n=a("d039"),r=a("e8b5"),i=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),d=a("1dde"),p=a("b622"),g=a("2d00"),f=p("isConcatSpreadable"),_=9007199254740991,v="Maximum allowed index exceeded",h=g>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},x=!h||!m;s({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,s,n,r,i=o(this),d=l(i,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?i:arguments[e],b(r)){if(n=c(r.length),p+n>_)throw TypeError(v);for(a=0;a<n;a++,p++)a in r&&u(d,p,r[a])}else{if(p>=_)throw TypeError(v);u(d,p++,r)}return d.length=p,d}})}}]);
//# sourceMappingURL=chunk-5d3b77f5.a25f7735.js.map