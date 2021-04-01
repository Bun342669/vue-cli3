<template>
  <div>
    <Navbar></Navbar>
    <alert></alert>
<div class="container-fluid">
  <div class="row">
    <sidebar></sidebar>
    <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <router-view></router-view>
    </main>
  </div>
</div>

  </div>
</template>

<script>

import Navbar from './Navbar.vue';
import sidebar from './sidebar.vue';
import alert from './AlertMessage.vue';

export default {
  components: {
    Navbar,
    sidebar,
    alert,
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>
