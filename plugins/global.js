import Vue from 'vue'

// disable "development mode" warning (not working)
Vue.config.productionTip = false

/*
 * Global Vue components
 */

// makes a elements scroll, but always stay in viewport [UNUSED]
// import VueAffix from 'vue-affix'
// Vue.use(VueAffix)

// highlights subnav links and make links in subnav scroll smooth to respective anchor [UNUSED]
// import VueScrollactive from 'vue-scrollactive'
// Vue.use(VueScrollactive)

// various scroll-related tools
// import ScrollView from 'vue-scrollview'
// Vue.use(ScrollView)

// vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/images/loading.svg',
})

// Quickly hacking foldable footnotes for test
// const toggleFootnotes = (el) => {
//   el[0].classList.toggle('footnotes--hidden')
// }
// const initFoldableFootnotes = () => {
//   var el = document.getElementsByClassName('footnotes')
//   el[0].classList.add('footnotes--hidden')
//   el[0].addEventListener('click', toggleFootnotes(el))
// }

/**
 * (re-)initialize DOM-dependent plugins after page change
 */
const initAfterMount = () => {
  mediumZoom('.page img:not(.medium-zoom-image)')
  initSmoothScroll(scrollLinkHandler)
}

Vue.mixin({
  mounted: function() {
    // this will be called when any component is mounted!
    initAfterMount()
  },
})
