<template>
  <div class="nuxt-progress" :style="{
    'height': percent+'%',
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }"></div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'nuxt-loading',
  data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: '.5s',
      height: '0%',
      width: '100vw',
      color: 'rgba(192, 192, 192, 0.5)',
      failedColor: 'darkred',
    }
  },
  methods: {
    start() {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set(num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get() {
      return Math.floor(this.percent)
    },
    increase(num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease(num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish() {
      this.percent = 100
      this.hide()
      return this
    },
    pause() {
      clearInterval(this._timer)
      return this
    },
    hide() {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail() {
      this.canSuccess = false
      return this
    },
  },
}
</script>

<style>
.nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 0%;
  /* height: calc(var(--body-border-width, 4px) + 0.3vw) !important; */
  width: 100vw;
  transition: height 1s, opacity 0.4s;
  opacity: 1;
  background-color: rgba(192, 192, 192, 0.5);
  /* background-color: red; */
  z-index: -1;
}
</style>
