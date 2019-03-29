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
    getListData (page) {
      if (page < 1) page = 100
      if (page > 100) page = 1
      const size = 10
      let promise = localStorage.getItem(page) ? Promise.resolve(JSON.parse(localStorage.getItem(page))) : getList(size, page).then((res) => {
        localStorage.setItem(page, JSON.stringify(res.data.data))
        return res.data.data
      })
      promise.then((res) => {
        this.list = res
        this.$nextTick(() => {
          if (this.swiper) {
            this.swiper.$('.swiper-slide-duplicate').eq(0).html(this.swiper.$('.swiper-slide').eq(size).html())
            this.swiper.$('.swiper-slide-duplicate').eq(1).html(this.swiper.$('.swiper-slide').eq(1).html())
          }
          if (!this.swiper) this.swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            observer: true,
            observeParents: false,
            on: {
              reachBeginning: () => {
                this.getListData(--this.page)
              },
              reachEnd: () => {
                this.getListData(++this.page)
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
