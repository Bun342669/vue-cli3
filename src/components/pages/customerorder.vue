<template>
  <div class="wrap" >
  <!--購物車圖式-->
    <div class="shoppingcar p-3" >
    <router-link to="/shoppingcar">
    <span class="car_length text-white text-center bg-danger rounded-circle"
    v-if="shoppingcart_length > 0" >
    {{shoppingcart_length}}
    </span>
    <img  width="40" src="https://upload.cc/i1/2021/03/28/xHQI2b.png"  alt="">
    </router-link>
    </div>
  <loading :active.sync="isLoading"></loading>
  <div class="d-lg-flex justify-content-center mt-5">
    <div class="text-center mx-3 img-fluid">
      <img :src="product.imageUrl" class=" w-100" style="max-width:700px; " alt="">
    </div>

    <div class="mx-3" >
      <div >
        <h2 class="text-center ">{{product.title}}</h2>
        <p class="h5 text-center">{{product.description}}</p>
        <div class="contentp mx-auto">
          <p >{{product.content}}</p>
          <br>
          <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Animi porro ad laborum. Libero recusandae officia rerum eum! Voluptatibus aperiam amet
          officiis cupiditate voluptas est cum. Incidunt aspernatur aliquam modi laboriosam。</p>
        </div>
      </div>
      <div class="h5 mt-3" v-if="product.price">NT$ {{product.price}}元
      </div>
      <select  class="form-control mt-3" v-model="product.num">
      <option :value="num" v-for="num in 15" :key="num">
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
        <a href="#" @click="getRelatedproduct(products[2].id)">
        <div  style="height: 300px;background-size: cover; background-position: center;
        backgroundImage:url(https://upload.cc/i1/2021/03/26/QwClYx.jpg)">
        </div>
        <h3 class="pt-2">焦糖布丁</h3>
        </a>
      </div>
      <div class="col-lg-4 text-center ">
        <a href="#" @click="getRelatedproduct(products[1].id)">
        <div  style="height: 300px;background-size: cover; background-position: center;
        backgroundImage:url(https://upload.cc/i1/2021/03/26/KrGovX.jpg)">
        </div>
        <h3 class="pt-2">千層蛋糕</h3>
        </a>
      </div>
      <div class="col-lg-4 text-center ">
        <a href="#" @click="getRelatedproduct(products[4].id)">
        <div  style="height: 300px;background-size: cover; background-position: center;
        backgroundImage:url(https://upload.cc/i1/2021/03/26/jSMnwX.jpg)">
        </div>
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
        // console.log('vm.products', vm.products);
      });
    },
    getproduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.status}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          // console.log(, response.data);
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
      console.log(id, qty);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.get(api).then((response) => {
        response.data.data.carts.forEach((item) => {
          if (item.product.id === id) {
            cart.qty = item.qty + cart.qty;
            const delapi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`;
            this.$http.delete(delapi).then(() => {
            });
          }
        });
        this.$http.post(api, { data: cart }).then((responsee) => {
          if (responsee.data.success) {
            vm.getCart();
          }
        });
        vm.isLoading = false;
        this.$bus.$emit('message:push', '已成功加入購物車', 'success');
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
a {
    text-decoration:none;
}
h3:hover {
  background-color:#e5989b;
  color:white;
}
.wrap {
  max-width:1063px;
  margin:  auto;
}
.box {
  height: 350px;
}
.contentp {
  max-width:400px;
}
.shoppingcar {
  position: fixed;
  right: 10px;
  bottom: 100px;
  z-index:100;
  background-color:#ffb4a2;
}
.car_length {
  position: fixed;
  right: 18px;
  bottom:140px;
  height:20px;
  width:20px;
}
@media (max-width: 768px) {
  .car_length {
    position: absolute;
    top:10px;
    left:revert;
    right:5px;
  }
  .shoppingcar{
    position: absolute;
    bottom:revert;
    left:revert;
    right:60px;
    top:20px;
    background-color:transparent;
  }
}
</style>
