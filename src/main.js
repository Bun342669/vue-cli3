import Vue from 'vue';
import vueaxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import {
  ValidationObserver, ValidationProvider, extend, localize, configure,
} from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';

import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/extensions
import './bus.js';
// eslint-disable-next-line import/extensions
import currencyFilter from './filters/currency.js';
// eslint-disable-next-line import/extensions
import dateFilter from './filters/date.js';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
Vue.config.productionTip = false;
Vue.use(vueaxios, axios);
Vue.use(VueRouter);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

axios.defaults.withCredentials = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 有requiresAuth的話 需驗證
    // const vm = this;
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
