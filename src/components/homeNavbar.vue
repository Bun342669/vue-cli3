<template>
  <div>
    <header class="d-flex justify-content-between align-items-center "
    :class="{'menu_show':show_menu }" style="background-color:#ffb4a2">
        <router-link class="" to="/">
        <img  src="https://upload.cc/i1/2021/04/01/wHCIhK.png" height="100" alt="">
        </router-link>
        <ul class="menu">
          <li class="h3" @click="show_menu = !show_menu">
          <router-link class="text-white px-4 py-md-2 navbarli d-block"
          to="/">首頁</router-link></li>
          <li class="h3" @click="show_menu = !show_menu">
          <router-link class="text-white px-4 py-md-2 navbarli d-block"
          to="/customerorders">商品列表</router-link></li>
          <li class="h3" >
          <router-link class="text-white px-4 py-md-2 navbarli d-block"
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
a {
  text-decoration:none;
}
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
@media (min-width:768px) {
  .navbarli:hover {
  background-color:#e5989b;
  }
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
    background-color:#ffb4a2;
    text-align:center;
  }
  .menu li {
    border-bottom: 1px dashed black;
    margin-right:0;
    margin-bottom:0;
  }
  .menu li:hover{
    background-color:#e5989b;
  }
}
</style>
