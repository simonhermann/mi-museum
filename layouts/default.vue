<template>
  <v-app>

    <navdrawer></navdrawer>


    

    <v-content>
      <v-container grid-list-lg>
        <noscript> Please enable Javascript in your browser. </noscript>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
</template>

<style lang="scss">

</style>


<script>
import navdrawer from '~/components/navdrawer.vue'

export default {
  components: {
    navdrawer,
  },
}
</script>
