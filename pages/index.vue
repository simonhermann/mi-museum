<template>
<div class="page page-home">
  <header class="page-home__header content-normal">
    <p style="font-style: italic; color:darkred; width:100%; text-align:center; font-size:.9em; margin-bottom: -10vh; margin-top: -6em;">&mdash;&nbsp;Work in progress, please come back later&nbsp;&mdash;</p>
    <h1 class="page-home__title">Micro&shy;interactions</h1>
    <p class="page-home__subtitle">Gestaltung von Konversation zwischen Mensch und Maschine</p>
  </header>

  <homegrid></homegrid>

  <div class="spacer2"></div>

  <!-- cards with teaser to chapters -->
  <!-- <v-container style="padding: 0;" grid-list-md>
    <v-layout row wrap>
      <tile link="preface" topline="" heading="Vorwort" text=""></tile>
      <tile link="what-are-microinteractions" topline="" heading="Was sind Microinteractions?" text=""></tile>

      <tile link="triggers" topline="" heading="Auslöser" text="Wie kommt die Interaktion zu Stande?"></tile>
      <tile link="rules" topline="" heading="Regeln" text="Wie funktioniert die Interaktion?"></tile>
      <tile link="feedback" topline="" heading="Rückmeldung" text=""></tile>
      <tile link="loops-and-modes" topline="" heading="Schleifen & Modi" text=""></tile>

      <tile link="history" topline="" heading="Historie" text="Eine kurze Geschichte der Mensch-Maschine-Interaktion"></tile>
      <v-flex align-start class="o-tile" xs12 sm6></v-flex>

      <tile link="skeuomorphism" topline="" heading="Skeuomorphismus" text="Der Einfluss der physischen Welt auf digitale Interfaces"></tile>
      <tile link="animation" topline="" heading="Animation und Geschwindigkeit" text=""></tile>
    </v-layout>
  </v-container>

  <div class="spacer4"></div>

  <v-container style="padding: 0;" grid-list-md>
    <h2>Beispiele für grundlegende Microinteractions</h2>

     <v-layout row wrap>
      <tile link="mi/buttons" topline="" heading="Buttons" text=""></tile>
    </v-layout> 

  </v-container> -->

  <div class="spacer8"></div>

  <!-- footer? -->

</div>
</template>

<style lang="scss">
@import './assets/styles/mixins.scss';

.page-home {
  margin-top: 16vh;
  &__title {
    font-size: 3em;
    margin-bottom: 0.1em;

    @include mq-md {
      font-size: 4em;
    }
  }
  &__subtitle {
    margin: 0 0 8vh 0;
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
  }
}
</style>

<script>
import tile from '~/components/obj/tile.vue'
import HtmlParser from '~/components/HtmlParser.vue'
import homegrid from '~/components/homegrid.vue'
import { theoryPages, practicePages, setHighlightColor } from '~/content/pages.js'

export default {
  data() {
    return {}
  },
  components: {
    tile: tile,
    HtmlParser,
    homegrid,
  },
  computed: {
    theoryPages() {
      return theoryPages
    },
    practicePages() {
      return practicePages
    },
  },

  // html meta data for page
  head() {
    return {
      title: 'Microinteractions.design',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Gestaltung von Konversation zwischen Mensch und Maschine',
        },
      ],
    }
  },
  beforeMount() {
    setHighlightColor(0)
  },
}
</script>
