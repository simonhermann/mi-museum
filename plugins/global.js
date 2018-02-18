import Vue from 'vue'

// disable "development mode" warning (not working, seems to late)
Vue.config.productionTip = false

/*
 * Global Vue components
 */

// makes a elements scroll, but always stay in viewport [UNUSED]
import VueAffix from 'vue-affix'
Vue.use(VueAffix)

// highlights subnav links and make links in subnav scroll smooth to respective anchor
import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive)

// various scroll-related tools
// import ScrollView from 'vue-scrollview'
// Vue.use(ScrollView)

/**
 * initialize DOM-dependent plugins after page change
 */
const initAfterMount = () => {
  mediumZoom('img')
  initSmoothScroll(scrollLinkHandler)
}

Vue.mixin({
  mounted: function() {
    // this will be called when any component is mounted!
    initAfterMount()
  },
})
