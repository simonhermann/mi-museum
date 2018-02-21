<template>
  <div class="site">
    <noscript>
      Javascript seems to be disabled. Please allow it for the best experience.
    </noscript>
    
    <Navigation/>
    <div class="page-wrapper">
      <nuxt/>
    </div>

  </div>
</template>

<style lang="scss">
@import '../assets/styles/vars.scss';
@import '../assets/styles/hacks.scss';
@import '../assets/styles/fonts.scss';
@import '../assets/styles/mixins.scss';
@import '../assets/styles/base.scss';
@import '../assets/styles/markdownit.scss';
@import '../assets/styles/util.scss';
@import '../assets/styles/layout.scss';
@import '../assets/styles/transitions.scss';
@import '../assets/styles/objects/buttons.scss';

</style>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  scrollToTop: false,
  components: {
    Navigation,
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'de',
      },
    }
  },
  mounted: function() {
    // this.$nextTick(function () { // nextTick = wait until dom is fully updated
    //   window.addEventListener('resize', this.handleResize)
    //   window.addEventListener('scroll', this.handleScroll)
    // })
  },
  methods: {
    handleResize: function() {
      console.log('window resized')
    },
    handleScroll: function() {
      console.log('window scrolled')
    },
  },
}
</script>
