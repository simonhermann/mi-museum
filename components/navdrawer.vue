<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app floating :touchless="$vuetify.breakpoint.mdAndUp" width="300" mobile-break-point="1264">
      <ul>
        <li :key="i" v-for="(item, i) in items">
          <nuxt-link :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-toolbar fixed scroll-off-screen app dense flat :scroll-threshold="50" :floating="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title v-show="$vuetify.breakpoint.mdAndDown">
        <nuxt-link to="/">
          microinteraction.design
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

  </div>
</template>

<style lang="scss">
.navigation-drawer {
  .nuxt-link-exact-active {
    text-decoration: underline;
  }
}
</style>

<script>
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
        { title: 'Historie', to: '/history' },
        { title: '_article', to: '/article' },
        { title: '_scrap', to: '/scrapyard' },
        //{ title: 'about', to: '/about' },
      ],
    }
  },
}
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
</script>

