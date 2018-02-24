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
#app {
  z-index: 3;
  // border: calc(var(--body-border-width, 4px) + .3vw) solid transparent;
  // border-bottom-width: 2rem;
}

</style>


<script>
import navdrawer from '~/components/navdrawer.vue'

export default {
  components: {
    navdrawer,
  },
}
</script>
