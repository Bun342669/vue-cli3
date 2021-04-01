<template>
  <div>
    <header class="bg-logogray d-flex justify-content-between align-items-center"
    :class="{'menu_show':show_menu }">
        <router-link class="" to="/">
        <img  src="https://upload.cc/i1/2021/03/22/4EMCwa.jpg" height="100" alt="">
        </router-link>
        <ul class="menu">
          <li class="h3"><router-link class="text-black"
          to="/">首頁</router-link></li>
          <li class="h3"><router-link class="text-black"
          to="/customerorders">商品列表</router-link></li>
          <li class="h3"><router-link class="text-black"
          to="/login">後台登入</router-link></li>
        </ul>
        <a class="showmenu" @click="show_menu = !show_menu" href="#">
        <img width="50"  src="https://upload.cc/i1/2021/03/29/0fDUvP.png" alt="">
        </a>
    </header>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show_menu: false,
    };
  },
};
</script>

<style scoped>
.ul ,li {
  list-style:none;
}
.header {
  position: relative;
}
.menu {
  display:flex;
}
.menu li {
  margin-right:30px
}
.showmenu {
  display:none;
}
@media (max-width: 767px ) {
  .menu {
    display:none;
    padding:0;
  }
  .showmenu{
    display:block;
  }
  .menu_show .menu {
    display:block;
    position: absolute;
    right:0;
    left:0;
    top:100px;
    z-index:100;
    background-color:#f3f3f3;
    text-align:center;
  }
  .menu li {
    border-bottom: 1px dashed black;
    margin-right:0;
  }
}
</style>
