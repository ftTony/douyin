<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item,index) in list"
           :key="index">{{item.text}}</div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      list: [
        {
          'text': 'slider1'
        },
        {
          'text': 'slider2'
        },
        {
          'text': 'slider3'
        },
        {
          'text': 'slider4'
        },
        {
          'text': 'slider5'
        }
      ]
    }
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      paginationClickable: true,
      direction: 'vertical'
    })
  }
}
</script>
<style scoped>
@import "~@/swiper.min.css";
</style>
