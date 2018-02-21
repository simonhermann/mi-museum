<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <!-- <v-button @click="drawer = !drawer">Menu</v-button> -->
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container>
        <noscript>
          Please enable Javascript in your browser.
        </noscript>
        <nuxt />
      </v-container>
    </v-content>
    
  </v-app>
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
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Welcome', to: '/' },
        { title: 'Auslöser', to: '/triggers' },
        { title: 'Regeln', to: '/rules' },
        { title: 'Rückmeldung', to: '/feedback' },
        { title: 'Schleifen und Modi', to: '/loops-and-modes' },
        { title: '_article', to: '/article' },
        { title: '_scrap', to: '/scrapyard' },
        //{ title: 'about', to: '/about' },
      ],
    }
  },
  head() {
    return {
      
    }
  },
}
</script>
