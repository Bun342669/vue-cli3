<template>
  <div class="row mx-0 ">
    <!--購物車圖式-->
    <div class="shoppingcar bg-black p-3" v-if="shoppingcart_length > 0">
    <router-link to="/shoppingcar" >
    <img  width="40" src="https://upload.cc/i1/2021/03/28/xHQI2b.png"  alt="">
    <span class="car_length text-white text-center bg-danger rounded-circle" >
    {{shoppingcart_length}}
    </span>
    </router-link>
    </div>
    <!--商品資訊-->
    <main class="col-md-10 ml-sm-auto mr-lg-auto col-lg-9 px-md-4">
    <homesidebar  @emitsearch="search"></homesidebar>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row mt-4 "  >
      <div class="col-lg-4 col-md-6 mb-4" v-for="(item, key) in products" :key="key" >
        <div class="card border-0 shadow-sm"  >
            <div  style="height: 300px;background-size: cover; background-position: center"
             :style="{backgroundImage:`url(${item.imageUrl})`}">
            </div>
            <div class="row justify-content-between">
              <div class="col-6 border-right border-dark text-center py-lg-2">
              <h5>{{item.title}}</h5>
              </div>
              <div class="col-6 text-center py-lg-2"><h5>NT$ {{item.price}} 元</h5></div>
            </div>
            <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
            @click="getproduct(item.id)" >
                <i class="fas fa-spinner fa-spin" v-if="status === item.id"></i>
                查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
            @click="addtoCart(item.id)">
                <i class="fas fa-spinner fa-spin" v-if="status === item.id"></i>
                加到購物車
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
    <pagination :pages="pagination" @emitPages="getproducts"></pagination>
    </main>
</div>
</template>

<script>

import $ from 'jquery';
import pagination from '../pagination.vue';
import homesidebar from '../homesidebar.vue';

export default {
  data() {
    return {
      searchcategorycheck: {}, // 搜尋的產品類別
      allproducts: [], // 搜尋用 取得全部資料
      pagination: {},
      products: [],
      isLoading: false,
      shoppingcart_length: '',
      coupon_code: '',
      status: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getproducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        // console.log('getproducts', response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    getproduct(id) { // 查看更多 顯示單筆資料
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.status = id;
      // console.log('我是vm.status', vm.status);
      this.$http.get(api).then((response) => {
        // console.log('我是response的id', response.data.product.id);
        vm.status = '';
        vm.$router.push(`customerorder/${response.data.product.id}`);
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      vm.status = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          // console.log('addtoCart', response);
          vm.status = '';
          vm.getCart();
          $('#productModal').modal('hide');
        }
      });
    },
    getCart() { // 取得購物車有幾個物件
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.shoppingcart_length = response.data.data.carts.length;
        // console.log('vm.shoppingcart_length', vm.shoppingcart_length);
        vm.isLoading = false;
      });
    },
    search(searchcategory) { // 搜尋事件
      this.getallproducts();
      this.products = [];
      const vm = this;
      vm.isLoading = true;
      vm.allproducts.forEach((searchitem) => {
        if (searchcategory === searchitem.category) {
          vm.products.push(searchitem);
          vm.pagination.total_pages = 1;
        }
      });
      if (searchcategory === 'all') {
        vm.getproducts();
      }
      vm.isLoading = false;
    },
    getallproducts() { // 取得全部資料
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.allproducts = response.data.products;
      });
      vm.isLoading = false;
    },
  },
  created() {
    this.getproducts();
    this.getallproducts();
    this.getCart();
  },
  components: {
    pagination,
    homesidebar,
  },
};
</script>

<style scoped>
.shoppingcar {
  position: fixed;
  right: 10px;
  bottom: 100px;
  z-index:100;
}
.car_length {
  position: fixed;
  right: 13px;
  bottom:140px;
  height:20px;
  width:20px;
}
@media (max-width: 992px) {
  .car_length {
    right:revert;
    left:130px;
  }
  .shoppingcar{
    right:revert;
    left:80px;
  }
}
@media (max-width: 768px) {
  .car_length {
    bottom:170px;
    left:revert;
    right:5px;
  }
  .shoppingcar{
    bottom:130px;
    left:revert;
    right:0;
  }
}
</style>
