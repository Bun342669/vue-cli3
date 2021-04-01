<template>
  <!--lg md顯示-->
    <div class="row menuouter">
      <div  class="sidebarMenu d-md-block  collapse">
        <div class="position-sticky pt-5">
          <ul  class="nav flex-column ">
            <li class="nav-item text-center mt-md-5 mt-lg-5 h6 "
              id="productsmenu">
              <a href="#" class="d-block py-lg-3 py-md-2"
              :class="{ 'nowproductsmenu' : menu.all }"
              @click.prevent="search('all');menu.all=true; menu.cake=false;
              menu.pudding=false; menu.drink=false; ">
              全部商品
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5" id="productsmenu">
              <a href="#" class="d-block py-lg-2 py-md-2" :class="{ 'nowproductsmenu' : menu.cake }"
               @click.prevent="search('蛋糕'); menu.all=false;
               menu.cake=true;menu.pudding=false; menu.drink=false; ">
              蛋糕
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5" id="productsmenu">
              <a href="#" class="d-block py-lg-2 py-md-2"
              :class="{ 'nowproductsmenu' : menu.pudding }"
              @click.prevent="search('布丁');menu.all=false; menu.cake=false;
            menu.pudding=true; menu.drink=false;">
              布丁
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5" id="productsmenu">
              <a href="#" class="d-block py-lg-2 py-md-2"
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
            <li class="nav-item text-center mt-md-5 mt-lg-5 h6 "
              id="productsmenu">
              <a href="#" class="px-sm-4 px-3"
              :class="{ 'nowproductsmenu' : menu.all }"
              @click.prevent="search('all');menu.all=true; menu.cake=false;
              menu.pudding=false; menu.drink=false; ">
              全部商品
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5" id="productsmenu">
              <a href="#" class="px-sm-4 px-3" :class="{ 'nowproductsmenu' : menu.cake }"
            @click.prevent="search('蛋糕'); menu.all=false; menu.cake=true;
            menu.pudding=false; menu.drink=false; ">
              蛋糕
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5" id="productsmenu">
              <a href="#" class="px-sm-4 px-3" :class="{ 'nowproductsmenu' : menu.pudding }"
              @click.prevent="search('布丁');menu.all=false; menu.cake=false;
            menu.pudding=true; menu.drink=false;">
              布丁
              </a>
            </li>
            <li class="nav-item text-center mt-md-3 mt-lg-3 h5 " id="productsmenu">
              <a href="#" class="px-sm-4 px-3" :class="{ 'nowproductsmenu' : menu.drink }"
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
#productsmenu :hover{
  color:white;
  background-color: #6c757d;
}
.nowproductsmenu {
  background-color: #4d3900;
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
