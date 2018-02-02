import Vue from 'vue'

// disable "development mode" warning
Vue.config.productionTip = false


/*
** Global Vue components
*/

import VueAffix from 'vue-affix'
Vue.use(VueAffix)

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive)

// import myComp from '~/components/sections/myComp'
// Vue.component('myComp', myComp)
