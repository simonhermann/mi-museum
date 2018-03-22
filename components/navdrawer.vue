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

      <button type="button" class="toolbar__side-icon btn btn--icon" @click="drawer = !drawer" v-if="!drawer" style="position: relative;">
        <div class="btn__content">
          <i aria-hidden="true" class="icon material-icons">menu</i>
        </div>
      </button>

    </v-toolbar>

  </div>
</template>

<style lang="scss">
@import '../assets/styles/vars.scss';

.navigation-drawer {
  padding: 1em 0.5em 2em 2em;
  background-color: transparent;
  color: var(--color-text-light);

  //overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &--is-mobile {
    background-color: #fff;
  }

  .nav-homelink {
    text-decoration: none;
    display: inline-block;
    margin-top: 10vh;
    font-weight: 900;
    letter-spacing: 0.05em;
    font-size: 1.25em;
    color: var(--color-text-light);
    &:hover {
      color: var(--color-highlight);
    }
    &.nuxt-link-exact-active {
      color: transparent;
    }
  }

  .nav-link {
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0);
    // hack for Edge:
    @supports (-ms-ime-align: auto) {
      text-decoration: none;
    }
    transition: all 300ms var(--transition-curve1);
    color: inherit;
    &::before {
      content: '›';
      color: transparent;
      transition: margin 200ms var(--transition-curve1);
      text-decoration: none !important;
      position: absolute;
      font-size: 1.5em;
      margin-left: -0.75em;
      margin-top: -0.1em;
    }
    &:hover {
      color: var(--color-highlight);
      text-decoration: underline;
      &::before {
        color: inherit;
        margin-left: -0.85em;
      }
    }
  }
  .nuxt-link-exact-active {
  }

  .nav-ul {
    list-style: none;
    line-height: 2em;
    .nuxt-link-exact-active {
      color: var(--color-highlight);
      //text-decoration-color: currentColor;
      &::before {
        color: inherit;
      }
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
      drawer: false, // set to false in production, undefined=open on bigger screens
      theoryPages: [
        { title: 'Vorwort', to: '/preface' },
        {
          title: 'Was sind Microinteractions?',
          to: '/what-are-microinteractions',
        },
        { title: 'Auslöser', to: '/triggers' },
        { title: 'Regeln', to: '/rules' },
        { title: 'Rückmeldung', to: '/feedback' },
        { title: 'Schleifen und Modi', to: '/loops-and-modes' },
        { title: 'Historie', to: '/history' },
        { title: 'Skeuomorphismus', to: '/skeuomorphism' },
        { title: 'Signature Moments', to: '/signature-moments' },
        { title: 'Animation', to: '/animation' },
        //{ title: '_article', to: '/article' },
        { title: '_scrap', to: '/scrapyard' },
        //{ title: 'about', to: '/about' },
      ],
      practicePages: [
        { title: 'buttons', to: '/mi/buttons' },
        { title: 'Pull-to-refresh', to: '/mi/' },
        { title: 'Fenster', to: '/mi/' },
        { title: 'Copy & Paste', to: '/mi/' },
        { title: 'Drag & Drop', to: '/mi/' },
        { title: 'Rückgängig (undo) & Wiederholen (redo)', to: '/mi/' },
        { title: 'Switch (Kipp-Schalter)', to: '/mi/' },
        { title: 'Radiobutton', to: '/mi/' },
        { title: 'Checkbox', to: '/mi/' },
        { title: 'Hover', to: '/mi/' },
        { title: 'Zoom', to: '/mi/' },
        { title: 'Handlebars', to: '/mi/' },
        { title: 'xyz', to: '/mi/' },
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
