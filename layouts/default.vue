<template>
  <div class="site" id="zoom-container">
    <noscript>
      Please enable Javascript in your browser.
    </noscript>
    
    <Navigation></Navigation>
    <div class="page-wrapper">
      <nuxt/>
    </div>

  </div>
</template>



<style lang="scss">
@import '../assets/styles/fonts.scss';
@import '../assets/styles/base.scss';
@import '../assets/styles/mixins.scss';
@import '../assets/styles/util.scss';
@import '../assets/styles/layout.scss';
@import '../assets/styles/transitions.scss';
@import '../assets/styles/objects/buttons.scss';

/*
** page transitions
*/
.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  //transform: translate(0, 10%);
  // transform: scale(0.95);
  //transform-origin: 50% 50%;
}

noscript {
  margin: 0 auto 1rem;
  display: block;
  width: 100%;
  text-align: center;
  background-color: darkred;
  color: white;
  font-weight: bold;
  font-size: 0.7em;
}

.medium-zoom--open .medium-zoom-overlay {
  z-index: 100;
  opacity: 0.9;
}
.medium-zoom--open .medium-zoom-image--open {
  z-index: 101;
}
</style>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  head() {
    return {
      htmlAttrs: {
        // set html lang tag
        // lang: this.$store.state.locale,
        lang: 'de',
      },
    }
  },
  routeChanged() {
    // initialize image zoom
    // docs: https://github.com/francoischalifour/medium-zoom
    // TODO: needs to refresh on page change...
    // mediumZoom('img')
    // console.log("routeChanged") // not working
  },
}
</script>
