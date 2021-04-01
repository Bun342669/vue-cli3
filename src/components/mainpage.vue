<template>
  <div >
    <homeNavbar></homeNavbar>
      <div class="row flex-column mx-0">
      <router-view ></router-view>
      <customerfooter ></customerfooter>
      </div>
  </div>
</template>

<script>

import homeNavbar from './homeNavbar.vue';
import customerfooter from './customerfooter.vue';

export default {
  props: {
    msg: String,
  },
  components: {
    homeNavbar,
    customerfooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
