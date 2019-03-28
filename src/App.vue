<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item,index) in list"
           :key="index">{{item.content}}</div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { getList } from '@/api/index'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    getList(20, 1).then((res) => {
      this.list = res.data.data
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          direction: 'vertical'
        })
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
