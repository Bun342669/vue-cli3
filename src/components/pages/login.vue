<template>
  <div>
  <alert></alert>
    <main class="form-signin">
        <form @submit.prevent="singin">
        <h1 class="h3 mb-3 fw-normal">請登入</h1>
        <label for="inputEmail" class="visually-hidden">請輸入帳號</label>
        <input type="email" id="inputEmail" v-model="user.username" class="form-control"
        placeholder="Email address" required autofocus>
        <label for="inputPassword" class="visually-hidden">請輸入密碼</label>
        <input type="password" id="inputPassword" v-model="user.password" class="form-control"
        placeholder="Password" required>
        <div class="checkbox mb-3">
        <label>
        <input type="checkbox" value="remember-me"> 記住登入資訊
        </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">登入</button>
    </form>
</main>
  </div>
</template>

<script>
import alert from '../AlertMessage.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    singin() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `mytoken= ${token}; expires= ${new Date(expired)}`;
          vm.$router.push('/Dashboard/products');
        } else {
          this.$bus.$emit('message:push', '帳號密碼錯誤', 'danger');
        }
      });
    },
  },
  components: {
    alert,
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
