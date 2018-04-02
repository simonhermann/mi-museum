// Vuetify framework
import Vue from 'vue'
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)
// Vue.use(Vuetify, {
//   theme: false,
// })

import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  // transitions,
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    // transitions,
  },
  theme: false,
  // theme: {
  //   primary: '#9c27b0',
  //   accent: '#ce93d8',
  //   secondary: '#424242',
  //   info: '#0D47A1',
  //   warning: '#ffb300',
  //   error: '#B71C1C',
  //   success: '#2E7D32',
  // },
})
