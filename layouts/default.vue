<template>
  <div class="site">
    <noscript>
      Please enable Javascript in your browser.
    </noscript>
    
    <Navigation/>
    <div class="page-wrapper">
      <nuxt/>
    </div>

  </div>
</template>

<style lang="scss">
@import '../assets/styles/vars.scss';
@import '../assets/styles/fonts.scss';
@import '../assets/styles/mixins.scss';
@import '../assets/styles/base.scss';
@import '../assets/styles/util.scss';
@import '../assets/styles/layout.scss';
@import '../assets/styles/transitions.scss';
@import '../assets/styles/objects/buttons.scss';

/*
** page transitions
*/
.page-leave-active {
  transition: all 0.5s ease-out;
}
.page-enter-active {
  transition: all 0.5s ease-out;
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
  background-color: rgb(182, 70, 70);
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
  mounted: function () {
    // this.$nextTick(function () { // nextTick = wait until dom is fully updated
    //   window.addEventListener('resize', this.handleResize)
    //   window.addEventListener('scroll', this.handleScroll)
    // })
  },
  methods: {
    handleResize: function () {
      console.log('window resized')
    },
    handleScroll: function () {
      console.log('window scrolled')
    }
  }
}
</script>
