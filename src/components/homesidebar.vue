<template>
  <!--lg md顯示-->
    <div class="row menuouter ">
      <div  class="sidebarMenu d-md-block  collapse">
        <div class="position-sticky pt-5">
          <ul  class="nav flex-column border" >
            <li class="nav-item text-center"
              id="productsmenu">
              <a href="#" class="d-block text-center pt-2"
              style="width:100px; height:50px; font-size:20px;"
              :class="{ 'nowproductsmenu' : menu.all }"
              @click.prevent="search('all');menu.all=true; menu.cake=false;
              menu.pudding=false; menu.drink=false; ">
              全部商品
              </a>
            </li>
            <li class="nav-item text-center border-top " id="productsmenu">
              <a href="#" class="d-block text-center pt-2 "
              style="width:100px; height:50px; font-size:20px;"
              :class="{ 'nowproductsmenu' : menu.cake }"
               @click.prevent="search('蛋糕'); menu.all=false;
               menu.cake=true;menu.pudding=false; menu.drink=false; ">
              蛋糕
              </a>
            </li>
            <li class="nav-item text-center border-top " id="productsmenu">
              <a href="#" class="d-block text-center pt-2"
              style="width:100px; height:50px; font-size:20px;"
              :class="{ 'nowproductsmenu' : menu.pudding }"
              @click.prevent="search('布丁');menu.all=false; menu.cake=false;
            menu.pudding=true; menu.drink=false;">
              布丁
              </a>
            </li>
            <li class="nav-item text-center border-top " id="productsmenu">
              <a href="#" class="d-block text-center pt-2"
              style="width:100px; height:50px; font-size:20px;"
              :class="{ 'nowproductsmenu' : menu.drink }"
             @click.prevent="search('飲品');menu.all=false; menu.cake=false;
            menu.pudding=false; menu.drink=true;">
              飲品
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--只在sm顯示-->
      <div  class="col-md-1 col-lg-1 d-lg-none d-md-none  ">
        <div class="position-sticky pt-5">
          <ul  class="nav justify-content-center ">
            <li class="nav-item text-center h5 "
              id="productsmenu">
              <a href="#" class="px-sm-4 py-2"
              :class="{ 'nowproductsmenu' : menu.all }"
              @click.prevent="search('all');menu.all=true; menu.cake=false;
              menu.pudding=false; menu.drink=false; ">
              全部商品
              </a>
            </li>
            <li class="nav-item text-center  h5" id="productsmenu">
              <a href="#" class="px-sm-5 py-2" :class="{ 'nowproductsmenu' : menu.cake }"
            @click.prevent="search('蛋糕'); menu.all=false; menu.cake=true;
            menu.pudding=false; menu.drink=false; ">
              蛋糕
              </a>
            </li>
            <li class="nav-item text-center  h5" id="productsmenu">
              <a href="#" class="px-sm-5 py-2" :class="{ 'nowproductsmenu' : menu.pudding }"
              @click.prevent="search('布丁');menu.all=false; menu.cake=false;
            menu.pudding=true; menu.drink=false;">
              布丁
              </a>
            </li>
            <li class="nav-item text-center  h5 " id="productsmenu">
              <a href="#" class="px-sm-5 py-2" :class="{ 'nowproductsmenu' : menu.drink }"
            @click.prevent="search('飲品');menu.all=false; menu.cake=false;
            menu.pudding=false; menu.drink=true;">
              飲品
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
// emitsearch 搜尋事件
export default {
  data() {
    return {
      menu: {
        // menu選單css
        all: true,
        pudding: false,
        cake: false,
        drink: false,
      },
    };
  },
  methods: {
    search(searchcategory) {
      this.$emit('emitsearch', searchcategory);
    },
  },
};
</script>

<style scoped>
a {
    text-decoration:none;
    color:black;
}
#productsmenu :hover{
  color:white;
  background-color: #b7b7a4;
}
.nowproductsmenu {
  background-color: #cb997e;
  color:white;
}
.menuouter{
  position: relative;
}
.sidebarMenu{
  position: fixed;
  left:40px;
}

</style>
