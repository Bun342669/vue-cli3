import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      name: '首頁', // 元件呈現的名稱
      path: '/', // 對應的虛擬路徑;
      component: () => import('../components/mainpage.vue'), // 對應的元件;
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('../components/pages/home.vue'),
        },
        {
          name: 'customerorders',
          path: 'customerorders',
          component: () => import('../components/pages/customerorders.vue'),
        },
        {
          name: 'customerorder',
          path: 'customerorder/:id',
          component: () => import('../components/pages/customerorder.vue'),
        },
        {
          name: 'shoppingcar',
          path: 'shoppingcar',
          component: () => import('../components/shoppingcar.vue'),
        },
        {
          name: 'customercheckout',
          path: 'customercheckout/:orderId',
          component: () => import('../components/pages/customercheckout.vue'),
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../components/pages/login.vue'),
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('../components/Dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          name: 'products',
          path: 'products',
          component: () => import('../components/pages/products.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'coupons',
          path: 'coupons',
          component: () => import('../components/pages/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'orders',
          path: 'orders',
          component: () => import('../components/pages/Orders.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
