<template>
  <div class="site">
    <noscript>
      Please enable Javascript in your browser.
    </noscript>
    
    <Navigation></Navigation>
    <nuxt/>
    
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
      },
    }
  },
}
</script>
