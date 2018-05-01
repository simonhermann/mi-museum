import Vue from 'vue'

// vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //loading: '/images/loading.svg',
  listenEvents: ['scroll', 'wheel', 'mousewheel'],
})
