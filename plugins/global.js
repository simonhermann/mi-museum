import Vue from 'vue'

// disable "development mode" warning
Vue.config.productionTip = false

// register all Vue components that should be available globally here:

import VueAffix from 'vue-affix'
// var VueAffix = require('vue-affix')
Vue.use(VueAffix)

import VueScrollactive from 'vue-scrollactive'
// var VueScrollactive = require('vue-scrollactive')
Vue.use(VueScrollactive)

// import myComp from '~/components/sections/myComp'
// Vue.component('myComp', myComp)
