<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app floating :touchless="$vuetify.breakpoint.mdAndUp" width="300" mobile-break-point="1264">
     
      <button type="button" class="btn btn--icon" @click="drawer = !drawer" style="margin-left:-1em">
        <div class="btn__content">
          <i aria-hidden="true" class="icon material-icons">chevron_left</i>
        </div>
      </button>


      <header>
        <nuxt-link class="nav-homelink" to="/">
          Microinteractions
        </nuxt-link>
      </header>

      <p><b>(lesen)</b></p>
      <ul class="nav-ul">
        <li class="nav-li" :key="i" v-for="(theoryPage, i) in theoryPages">
          <nuxt-link class="nav-link" :to="theoryPage.to">
            {{ theoryPage.title }}
          </nuxt-link>
        </li>
      </ul>

      <p><b>(ausprobieren)</b></p>
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

      <button type="button" class="toolbar__side-icon btn btn--icon" @click="drawer = !drawer" v-if="!drawer" style="position: relative;">
        <div class="btn__content">
          <i aria-hidden="true" class="icon material-icons">menu</i>
        </div>
      </button>

      <v-spacer></v-spacer>
      <!-- <v-toolbar-title v-show="$vuetify.breakpoint.mdAndDown">
        <nuxt-link to="/"> Microinteractions </nuxt-link>
      </v-toolbar-title> -->
    </v-toolbar>

  </div>
</template>

<style lang="scss">
.navigation-drawer {
  padding: 1em .5em 2em 2em;
  background-color: transparent;
  color: var(--color-text-light);

  &--is-mobile{
    background-color: #fff;
  }

  .nav-homelink {
    display: inline-block;
    margin-top: 10vh;
    font-weight: 900;
    letter-spacing: .05em;
    font-size: 1.25em;
  }

  .nav-link {
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 0.5s ease-out;
    color: inherit;
  }
  .nuxt-link-exact-active {
    color: green;
    text-decoration-color: currentColor;
  }

  .nav-ul {
    list-style: none;
    line-height: 2em;
    .nuxt-link-active {
      text-decoration: underline;
    }
  }

}
.toolbar {
  margin-top: 1rem !important;
}
</style>

<script>
export default {
  data() {
    return {
      drawer: undefined, // set to false in production
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
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
        { title: 'buttons', to: '/buttons' },
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
