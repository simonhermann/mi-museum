<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app floating :touchless="$vuetify.breakpoint.mdAndUp" width="300" mobile-break-point="1264">
      <nuxt-link to="/">
        home
      </nuxt-link>

      <p>(lesen)</p>
      <ul class="nav-ul">
        <li class="nav-li" :key="i" v-for="(theoryPage, i) in theoryPages">
          <nuxt-link class="nav-link" :to="theoryPage.to">
            {{ theoryPage.title }}
          </nuxt-link>
        </li>
      </ul>

      <p>(ausprobieren)</p>
      <ul class="nav-ul">
        <li class="nav-li" :key="i" v-for="(practicePage, i) in practicePages">
          <nuxt-link class="nav-link" :to="practicePage.to">
            {{ practicePage.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-navigation-drawer>

    <v-toolbar fixed :scroll-off-screen="!$vuetify.breakpoint.mdAndUp" app dense flat :scroll-threshold="50" :floating="$vuetify.breakpoint.mdAndUp" color="transparent">
      <!-- <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title v-show="$vuetify.breakpoint.mdAndDown">
        <nuxt-link to="/">
          microinteraction.design
        </nuxt-link>
      </v-toolbar-title> -->
    </v-toolbar>

  </div>
</template>

<style lang="scss">
.navigation-drawer {
  .nav-ul{    
    .nuxt-link-active {
      text-decoration: underline;
    }
  }
  
  .nuxt-link-exact-active {
    color: green;
  }
}

</style>

<script>
export default {
  data() {
    return {
      drawer: undefined,
      theoryPages: [
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
      practicePages: [
        { title: 'buttons', to: '/buttons' },
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

