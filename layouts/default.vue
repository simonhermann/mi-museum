<template>
  <v-app>

    <navdrawer></navdrawer>

    <v-content>
      <v-container>
        <noscript> Please enable Javascript in your browser. </noscript>
        <nuxt />
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
  html.app-mounted & {
    opacity: 1;
  }
}
.container {
  transition: all 500ms var(--transition-curve1);
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
      const el = document.getElementsByTagName('html')[0]
      el.classList.add('app-mounted')
    })
  },
}
</script>
