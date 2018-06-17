<template>
  <v-app>

    <navdrawer></navdrawer>

    <v-content>
      <v-container class="myContainer">
        <noscript class="notification"> Bitte aktiviere JavaScript </noscript>
        <div class="notification offline-hint"> Keine Netzwerkverbindung...<br> Zeige Offline-Version </div>
        <nuxt v-lazy-container="{ selector: 'img' }" />
        <foot></foot>
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
@import './assets/styles/images';
@import './assets/styles/elements';

#app {
  z-index: 3;
  opacity: 0;
  transition: opacity 100ms var(--transition-curve1);
  background-color: var(--white-bg);
  border-radius: 1rem;
  html.application-mounted & {
    opacity: 1;
  }
}
.container.myContainer {
  transition: all 800ms var(--transition-curve1);
  transform: translate3d(0, -1em, 0);
  backface-visibility: hidden;
  -webkit-perspective: 1000; // causes content to be blurry in Safari?
  html.application-mounted & {
    transform: translate3d(0, 0, 0);
  }
  padding: 6px;
  @media (min-width: 361px) {
    padding: 10px;
  }
  @media (min-width: 321px) {
    padding: 16px;
  }
}
</style>


<script>
import navdrawer from '~/components/navdrawer.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    navdrawer, foot
  },
  mounted: function() {
    this.$nextTick(function() {
      const el_html = document.getElementsByTagName('html')[0]
      const el_app = document.getElementById('app')

      // add application-mounted class
      el_html.classList.add('application-mounted')

      // remove theme--light - vuetify hack XXXX
      el_app.classList.remove('theme--light')

      // add offline class to body when app is offline
      // service worker seems to break this, app is still detected as online on refresh... TODO
      window.addEventListener('load', () => {
        function handleNetworkChange(event) {
          if (navigator.onLine) {
            el_html.classList.remove('application-offline')
          } else {
            el_html.classList.add('application-offline')
          }
        }
        window.addEventListener('online', handleNetworkChange)
        window.addEventListener('offline', handleNetworkChange)
      })
    })
  },
}
</script>



