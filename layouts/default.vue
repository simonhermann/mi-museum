<template>
  <v-app>

    <navdrawer></navdrawer>

    <v-content>
      <v-container>
        <noscript> Please enable Javascript in your browser. </noscript>
        <nuxt v-lazy-container="{ selector: 'img' }"/>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<style lang="scss">
@import './assets/styles/vars.scss';
@import './assets/styles/hacks';
@import './assets/styles/fonts';
@import './assets/styles/mixins';
@import './assets/styles/base';
@import './assets/styles/markdownit';
@import './assets/styles/util';
@import './assets/styles/layout';
@import './assets/styles/transitions';
@import './assets/styles/objects/buttons';
#app {
  z-index: 3;
  opacity: 0; 
  transition: opacity 100ms var(--transition-curve1);
  background-color: var(--white-bg);
  border-radius: 1rem;
  html.app-mounted & {
    opacity: 1;
  }
}
.container {
  transition: all 800ms var(--transition-curve1);
  transform: translate(0, -1em);
  html.app-mounted & {
    transform: translate(0, 0);
  }
}
</style>


<script>
import navdrawer from '~/components/navdrawer.vue'

export default {
  components: {
    navdrawer,
  },
  mounted: function() {
    this.$nextTick(function() {
      const el1 = document.getElementsByTagName('html')[0]
      el1.classList.add('app-mounted')
      const el2 = document.getElementById('app')
      el2.classList.remove('theme--light') // vuetify hack XXXX
    })
  },
}
</script>
