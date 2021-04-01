<template>
  <main>
      <div class="row justify-content-center my-5">
        <div style="max-width:1300px" >
        <img class="img-fluid w-100"  src="https://upload.cc/i1/2021/03/26/gw3KLT.jpg" alt="">
        </div>
      </div>
  <div class="container marketing">

    <h1 class="text-center mb-3">熱門商品</h1>
    <div class="row">
      <div class="col-lg-4 ">
        <router-link to="/customerorders">
        <img class="img-fluid box" src="https://upload.cc/i1/2021/03/26/QwClYx.jpg" alt="">
        <h3 class="pt-2">焦糖布丁</h3>
        </router-link>
      </div>
      <div class="col-lg-4">
      <router-link to="/customerorders">
        <img class="img-fluid box" src="https://upload.cc/i1/2021/03/26/KrGovX.jpg" alt="">
        <h3 class="pt-2">千層蛋糕</h3>
        </router-link>
      </div>
      <div class="col-lg-4">
      <router-link to="/customerorders">
        <img class="img-fluid box"  src="https://upload.cc/i1/2021/03/26/jSMnwX.jpg" alt="">
        <h3 class="pt-2">冰淇淋蛋糕</h3>
        </router-link>
      </div>
    </div>
  </div>
</main>

</template>

<style scoped>
.homeimg {
  max-width:100%;
}

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

.carousel {
  margin-bottom: 4rem;
}

.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}

.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

.featurette-divider {
  margin: 5rem 0;
}

.featurette-heading {
  font-weight: 300;
  line-height: 1;

  letter-spacing: -.05rem;
}
.box {
  max-width:100%;
}

.box {
  height: 350px;
}
</style>
