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
      list: [],
      swiper: null,
      page: 0
    }
  },
  created () {
    this.getListData(++this.page)
  },
  methods: {
    getListData () {
      if (this.page < 1) this.page = 100
      if (this.page > 100) this.page = 1
      const size = 10
      let promise = localStorage.getItem(this.page) ? Promise.resolve(JSON.parse(localStorage.getItem(this.page))) : getList(size, this.page).then((res) => {
        localStorage.setItem(this.page, JSON.stringify(res.data.data))
        return res.data.data
      })
      promise.then((res) => {
        this.list = res
        this.$nextTick(() => {
          if (this.swiper) {
            let $swiper_slide_duplicate = this.swiper.$('.swiper-slide-duplicate')
            let $swiper_slide = this.swiper.$('.swiper-slide')
            $swiper_slide_duplicate.eq(0).html($swiper_slide.eq(size).html())
            $swiper_slide_duplicate.eq(1).html($swiper_slide.eq(1).html())
          }
          if (!this.swiper) this.swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            observer: true,
            observeParents: false,
            on: {
              reachBeginning: () => {
                --this.page
                this.getListData()
              },
              reachEnd: () => {
                ++this.page
                this.getListData()
              }
            }
          })
        })
      })
    }
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
