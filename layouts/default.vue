<template>
  <v-app>

    <navdrawer></navdrawer>

    <v-content>
      <v-container>
        <noscript> Please enable Javascript in your browser. </noscript>
        <nuxt v-lazy-container="{ selector: 'img' }" />
        <div class="footer">
          Simon Hermann / microinteractions.design
        </div>
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
  transform: translate3d(0, -1em, 0);
  backface-visibility: hidden;
  -webkit-perspective: 1000; // causes content to be blurry in Safari?
  html.app-mounted & {
    transform: translate3d(0, 0, 0);
  }
}
.footer {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 38rem;
  margin-top: 3rem;
  text-align: center;
  font-size: var(--font-size-small);
  color: var(--grey-light);
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
      const el_html = document.getElementsByTagName('html')[0]
      el_html.classList.add('app-mounted')
      const el_app = document.getElementById('app')
      el_app.classList.remove('theme--light') // vuetify hack XXXX
    })
  },
}
</script>
