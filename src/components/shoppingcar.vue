<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!--購物車 -->
     <div class="my-5 row justify-content-center" style="display: flex; margin:0 auto; ">
        <div class="my-5 row justify-content-center" style="width:80%">
            <table class="table mt-4 " >
                <thead>
                    <tr>
                    <th></th>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th>
                    </tr>
                </thead>
                <tbody>
               <tr v-for="(itemcart) in shoppingcart.carts"  :key="itemcart.id" >
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-danger btn-sm"
                        @click="removeCartItem(itemcart.id)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>{{itemcart.product.title}}
                      <div class="text-success" v-if="itemcart.coupon">
                      已套用優惠券
                      </div>
                    </td>
                    <td>
                      <span class="px-3">{{itemcart.qty}}</span>
                    </td>
                    <td>{{itemcart.final_total}}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td ></td>
                  <td>總計</td>
                  <td ></td>
                  <td >{{shoppingcart.total}}</td>
                </tr>
                <tr v-if="shoppingcart.final_total !== shoppingcart.total">
                    <td ></td>
                    <td class="text-success">折扣價</td>
                    <td ></td>
                    <td class="text-success">{{shoppingcart.final_total}}</td>
                </tr>
                </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                  套用優惠碼
                  </button>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5 row justify-content-center">
      <validation-observer v-slot="{ invalid }" class="col-md-6">
          <form  @submit.prevent="createorder">
            <validation-provider  rules="required|email" v-slot="{ errors , classes}">
            <div class="form-group">
                <!-- 輸入框 -->
                <label for="email">Email</label>
                <input id="email" type="email" name="email"
                v-model="form.user.email" class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
            </validation-provider>
            <validation-provider  rules="required" v-slot="{ errors , classes}">
            <div class="form-group">
                <!-- 輸入框 -->
                <label for="username">收件人姓名</label>
                <input id="username" type="text" name="收件人姓名"
                v-model="form.user.name" class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
            </validation-provider>
            <validation-provider  rules="required" v-slot="{ errors , classes}">
            <div class="form-group">
                <!-- 輸入框 -->
                <label for="usertel">收件人電話</label>
                <input id="usertel" type="tel" name="收件人電話"
                v-model="form.user.tel" class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
            </validation-provider>
            <validation-provider  rules="required" v-slot="{ errors , classes}">
            <div class="form-group">
                <!-- 輸入框 -->
                <label for="useraddress">收件人地址</label>
                <input id="useraddress" type="text" name="收件人地址"
                v-model="form.user.address" class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
            </validation-provider>
             <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control"
            cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
            <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
            </div>
          </form>
        </validation-observer>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      shoppingcart: [],
      coupon_code: '',
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
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },
    createorder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        console.log('訂單已建立', response);
        if (response.data.success) {
          // console.log('response.data.orderId', response.data.orderId);
          vm.$router.push(`customercheckout/${response.data.orderId}`);
        }
        vm.isLoading = false;
      });
    },
    getCart() { // 取得購物車
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.shoppingcart = response.data.data;
        console.log('vm.shoppingcart', vm.shoppingcart);
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          // console.log(response);
          vm.getCart();
          vm.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
