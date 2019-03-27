<template>
  <div>

    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item>
        <router-link tag="a" to="/change">
          <img src="../img/155229694356_1125x450_80.jpg">
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link tag="a" to="/change">
          <img src="../img/155168506423_1125x450_80.jpg">
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link tag="a" to="/change">
          <img src="../img/155229725173_1125x450_80.jpg">
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link tag="a" to="/change">
          <img src="../img/155229737270_1125x450_80.jpg">
        </router-link>
      </mt-swipe-item>
    </mt-swipe> -->
<mt-swipe :auto="4000">
  <mt-swipe-item v-for='banner in banners' :key='banner.id'>
<router-link to='./change'  tag="a"   >
          <img :src="banner.imageUrl">
</router-link>
  </mt-swipe-item>

</mt-swipe>
    <!-- <div class="bxnav">
      <ul class="hot">
        <li>
          <img src="../img/1.png" alt>
          <p>热销产品</p>
        </li>
        <li>
          <img src="../img/2.png" alt>
          <p>面膜</p>
        </li>
        <li>
          <img src="../img/3.png" alt>
          <p>保湿水乳</p>
        </li>
        <li>
          <img src="../img/4.png" alt>
          <p>眼霜</p>
        </li>
        <li>
          <img src="../img/5.png" alt>
          <p>母婴护肤</p>
        </li>
        <li>
          <img src="../img/6.png" alt>
          <p>洁面卸妆</p>
        </li>
        <li>
          <img src="../img/7.png" alt>
          <p>口红</p>
        </li>
        <li>
          <img src="../img/8.png" alt>
          <p>底妆</p>
        </li>
        <li>
          <img src="../img/9.png" alt>
          <p>洗发护发</p>
        </li>
        <li>
          <img src="../img/10.png" alt>
          <p>身体护理</p>
        </li>
      </ul>
    </div> -->
    <div>
        <ul  class="bxnav">
        <router-link  to='/'  class="hot">
         <li v-for="img in bxchange" :key='img.id'>
        <img :src="img.imageUrl">
         <p>{{img.title}}</p>
        </li>
        </router-link>
        </ul>

    </div>

    <div class="dayupdate">

      <img src="../img/update1.jpg">
      <img src="../img/update2.jpg">
      <img src="../img/update3.jpg">
      <img src="../img/update4.jpg">
      <img src="../img/update5.jpg">
      <img src="../img/update6.jpg">
      <img src="../img/update7.jpg">
      <img src="../img/update8.jpg">

    </div>

    <!-- <div class="nav_center">
<img src="../img/z1.jpg" style="height:100%;">
<img src="../img/z2.jpg">
<img src="../img/z3.jpg">
<img src="../img/z4.jpg">
<img src="../img/z5.jpg">
    </div>-->
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="nav_center">
          <router-link to="/">
            <img src="../img/z1.jpg" style="height:100%;">
          </router-link>
          <router-link to="/">
            <img src="../img/z2.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z3.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z4.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z5.jpg">
          </router-link>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="nav_center">
          <router-link to="/">
            <img src="../img/z1.jpg" style="height:100%;">
          </router-link>
          <router-link to="/">
            <img src="../img/z2.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z3.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z4.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z5.jpg">
          </router-link>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="nav_center">
          <router-link to="/">
            <img src="../img/z1.jpg" style="height:100%;">
          </router-link>
          <router-link to="/">
            <img src="../img/z2.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z3.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z4.jpg">
          </router-link>
          <router-link to="/">
            <img src="../img/z5.jpg">
          </router-link>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="brandshop">
      <p>品牌专区</p>
      <span>BRAND SHOP</span>
    </div>
    <div class="brandshop_next" >
      <div class="brandshop_next_1">
        <div class="bigImg">
         <img src="../img/binner1.jpg">
        </div>
        <div class="brandshop_next_1_bottom">
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_1.jpg"><br>
            <span>￥22</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_2.jpg"><br>
            <span>￥12</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_3.jpg"><br>
            <span>￥15</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_4.jpg"><br>
            <span>￥222</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_5.jpg"><br>
            <span>￥92</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_6.jpg"><br>
            <span>￥23</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_7.jpg"><br>
            <span>￥32</span>
          </div>

        </div>
      </div>
    </div>
        <div class="brandshop_next" >
      <div class="brandshop_next_1">
        <div class="bigImg">
         <img src="../img/binner2.jpg">
        </div>
        <div class="brandshop_next_1_bottom">
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_8.jpg"><br>
            <span>￥222</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_9.jpg"><br>
            <span>￥502</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_10.jpg"><br>
            <span>￥220</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_11.jpg"><br>
            <span>￥722</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_12.jpg"><br>
            <span>￥229</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_13.jpg"><br>
            <span>￥252</span>
          </div>

        </div>
      </div>
    </div>
      <div class="brandshop_next" >
      <div class="brandshop_next_1">
        <div class="bigImg">
         <img src="../img/binner3.jpg">
        </div>
        <div class="brandshop_next_1_bottom">
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_14.jpg"><br>
            <span>￥222</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_15.jpg"><br>
            <span>￥502</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner16.jpg"><br>
            <span>￥220</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_17.jpg"><br>
            <span>￥722</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_18.jpg"><br>
            <span>￥229</span>
          </div>
          <div class="brandshop_next_1_bottom_shop">
            <img src="../img/banner_19.jpg"><br>
            <span>￥252</span>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      banners: [],
      bxchange: [],
      bxinner: []
    }
  },
  created () {
    this.$ajax
      .bxbanner()
      .then(resp => {
        if (resp.data.code === 200) {
          this.banners = resp.data.data.banners
        }
      })
    this.$ajax.bxchange().then(resp => {
      if (resp.data.code === 200) {
        this.bxchange = resp.data.data.categories.slice(0, 10)
        console.log(resp)
      }
    })
    this.$ajax.bxchange().then(resp => {
      if (resp.data.code === 200) {
        this.bxinner = resp.data.data.items.list.slice(0, 1)
        console.log(this.bxinner)
      }
    })
  }
}
</script>

<style lang="scss">

html {
  font-size: 62.5%;
}
.mint-swipe {
  height: 15rem;
}
img {
  height: 100%;
  width: 100%;
}
.bxnav {
  height: 14rem;
  width: 100%;
  border-bottom: 1px solid #cccccc;
}
.bxnav-img {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.bxnav-img td {
  width: 5rem;
  height: 5rem;
}
.hot {
  width: 100%;
  height: 14rem;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
}
.hot li p {
  font-size: 1.5rem;
  color: dimgray;
}
.hot li {
  width: 20%;
  height: 5rem;
  text-align: center;
  padding-top: 1rem;
}
.hot li img {
  width: 4rem;
}
.dayupdate {
  width: 100%;
  padding-bottom: 3rem;
  background: #f2f2f2;
  display: flex;
  align-items: flex-start;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
  }
}
.dayupdate img {
  width: 45%;
  padding-left: 1rem;
  padding-top: 1rem;
}
.nav_center {
  width: 100%;
  height: 18rem;
  img {
    float: left;
    width: 33.3%;
  }
}
.brandshop {
  width: 100%;
  height: 5rem;
  background: #f2f2f2;
  text-align: center;
  line-height: 2rem;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  p {
    color: pink;
    padding-top: 0.5rem;
  }
  span {

    color: #cccccc;
  }
}
.brandshop_next {
  height: auto;
  width: 100%;
  margin-top: 1.5rem;
      .bigImg{
    width: 100%;
}
}
.brandshop_next_1_bottom {
  width: 100%;
  height: 13rem;
  overflow-y: hidden;
white-space: nowrap;
  .brandshop_next_1_bottom_shop {
    width: 23%;
    height: 10rem;
    text-align: center;
    display: inline-block;
    font-size: 1.5rem;
      &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
  }
    img {

      width: 70%;
      margin-top: 1rem;
    }

  }
}
</style>
