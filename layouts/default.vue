<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app floating :touchless="$vuetify.breakpoint.mdAndUp" width="300" mobile-break-point="1264">
      <ul>
        <li :key="i" v-for="(item, i) in items">
          <nuxt-link :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-toolbar fixed scroll-off-screen app dense flat scroll-threshold="50" :floating="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title v-show="$vuetify.breakpoint.mdAndDown">Microinteractions</v-toolbar-title>
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

.navigation-drawer{
  .nuxt-link-exact-active {
    text-decoration: underline;
  }
} 
</style>


<script>
/*
Menu- und Seitenstruktur:
- Über Microinteractions
  - Vorwort / Intro zu Saffer
  - Auslöser
  - Regeln
  - Rückmeldung
  - Schleifen und Modi
  - Historie
  - Animationen


- Anwendung im Designprozess
  - Intro Anwendung
  - Allgemeine MIs (+Erklärung was gemeint ist)
    - Button
    - ..

  - Spezielle MIs (+Erklärung was gemeint ist)
    - ..

- Quellen
- Über

*/

export default {
  data() {
    return {
      drawer: undefined,
      items: [
        { title: '_Home', to: '/' },
        { title: 'Was sind Microinteractions?', to: '/intro' },
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
    return {}
  },
}
</script>
