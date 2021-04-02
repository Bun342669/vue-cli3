<template>
  <div class="wrap" >
  <!--購物車圖式-->
    <div class="shoppingcar p-3" style="background-color:#6d6875;">
    <router-link to="/shoppingcar">
    <span class="car_length text-white text-center bg-danger rounded-circle"
    v-if="shoppingcart_length > 0" >
    {{shoppingcart_length}}
    </span>
    <img  width="40" src="https://upload.cc/i1/2021/03/28/xHQI2b.png"  alt="">
    </router-link>
    </div>
  <loading :active.sync="isLoading"></loading>
  <div class="d-md-flex justify-content-center mt-5">
    <div class="text-center ml-3 ">
      <img :src="product.imageUrl" class="img-fluid frame"   alt="">
    </div>
    <div class="ml-3" >
      <div>
        <h3 class="text-center ">{{product.title}}</h3>
        <p class="h5">{{product.description}}</p>
        <div class="contentp">
          <span>{{product.content}}</span>
        </div>
      </div>
      <div class="h5" v-if="product.price">NT$ {{product.price}}元
      </div>
      <select name="" class="form-control mt-3" v-model="product.num">
      <option :value="num" v-for="num in 10" :key="num" >
          選購 {{num}} {{product.unit}}
      </option>
      </select>
      <div class="d-flex flex-column">
        <div class="h5 text-muted text-nowrap mr-3 text-right">
          小計 <strong>NT$ {{ product.num*product.price}}</strong>元
        </div>
        <button type="button" class="btn btn-primary "
        @click="addtoCart(product.id,product.num)">
            <i class="fas fa-spinner fa-spin"
            v-if="product.id === status.loadingItem"></i>
            加到購物車
        </button>
      </div>
    </div>
  </div>
  <div class="mt-5 ">
    <p class="text-center border-top">相關商品</p>
    <div class="row mx-0 ">
      <div class="col-lg-4 text-center ">
        <a href="#" @click="getRelatedproduct(products[1].id)">
        <img class="img-fluid box" src="https://upload.cc/i1/2021/03/26/QwClYx.jpg" alt="">
        <h3 class="pt-2">焦糖布丁</h3>
        </a>
      </div>
      <div class="col-lg-4 text-center ">
        <a href="#" @click="getRelatedproduct(products[0].id)">
        <img class="img-fluid box" src="https://upload.cc/i1/2021/03/26/KrGovX.jpg" alt="">
        <h3 class="pt-2">千層蛋糕</h3>
        </a>
      </div>
      <div class="col-lg-4 text-center ">
        <a href="#" @click="getRelatedproduct(products[3].id)">
        <img class="img-fluid box"  src="https://upload.cc/i1/2021/03/26/jSMnwX.jpg" alt="">
        <h3 class="pt-2">冰淇淋蛋糕</h3>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      status: '', // 單筆資料的ID
      product: {},
      products: [],
      isLoading: false,
      shoppingcart_length: '',
    };
  },
  methods: {
    getproducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        console.log('vm.products', vm.products);
      });
    },
    getproduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.status}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          // console.log(response.data);
          vm.product = response.data.product;
          vm.isLoading = false;
        }
      });
    },
    getRelatedproduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/customerorder/${response.data.product.id}`);
          // console.log(response.data);
          vm.product = response.data.product;
          vm.isLoading = false;
        }
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
          vm.status = '';
          vm.getCart();
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
  },
  created() {
    this.status = this.$route.params.id;
    this.getproduct();
    this.getCart();
    this.getproducts();
  },
};
</script>

<style scoped>
.wrap {
  max-width:1063px;
  margin:  auto;
}
.box {
  height: 350px;
}
.frame {
  max-width:700px;
  max-height:500px;
}
.contentp {
  max-width:400px;
}
.shoppingcar {
  position: fixed;
  right: 10px;
  bottom: 100px;
  z-index:100;
}
.car_length {
  position: fixed;
  right: 18px;
  bottom:140px;
  height:20px;
  width:20px;
}
</style>
