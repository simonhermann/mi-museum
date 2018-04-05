<template>
<div class="page page-home">
  <header class="page-home__header content-narrow">
    <h1 class="page-home__title">Micro&shy;interactions</h1>
    <p class="page-home__subtitle">Geniale Subhead, die Microinteractions zusammenfasst</p>
  </header>

  <!-- intro text -->
  <html-parser :content=text01></html-parser>

  <div class="spacer2"></div>

  <!-- cards with teaser to chapters -->
  <v-container style="padding: 0;" grid-list-md>
    <v-layout row wrap>
      <tile link="preface" topline="" heading="Vorwort" text=""></tile>
      <tile link="what-are-microinteractions" topline="" heading="Was sind Microinteractions?" text=""></tile>

      <tile link="triggers" topline="" heading="Auslöser" text="Wie kommt die Interaktion zu Stande?"></tile>
      <tile link="rules" topline="" heading="Regeln" text="Wie funktioniert die Interaktion?"></tile>
      <tile link="feedback" topline="" heading="Rückmeldung" text=""></tile>
      <tile link="loops-and-modes" topline="" heading="Schleifen & Modi" text=""></tile>

      <tile link="history" topline="" heading="Historie" text="Eine kurze Geschichte der Mensch-Maschine-Interaktion"></tile>
      <v-flex align-start class="o-tile" xs12 sm6></v-flex>
    </v-layout>

    <div class="spacer2"></div>
    <h2>Beispiele für grundlegende Microinteractions</h2>

    <v-layout row wrap>
      <tile link="skeuomorphism" topline="" heading="Skeuomorphismus" text=""></tile>
      <tile link="animation" topline="" heading="Animation" text=""></tile>
    </v-layout>

  </v-container>
  <div class="spacer4"></div>
  <v-container style="padding: 0;" grid-list-md>
    <v-layout row wrap>
      <tile link="buttons" topline="" heading="Buttons" text=""></tile>
    </v-layout>
  </v-container>

  <div class="spacer16"></div>

  <!-- cards with teaser to MIs -->

  <!-- footer -->

</div>
</template>

<style lang="scss">
@import './assets/styles/mixins.scss';

.page-home {
  &__title {
    font-size: 3em;
    margin: 20vh 0 0.1em 0;

    @include mq-md {
      font-size: 4em;
    }
  }
  &__subtitle {
    margin: 0 0 10vh 0;
    font-size: 1.5em;
    font-style: italic;
  }
}
</style>

<script>
import tile from '~/components/obj/tile.vue'
import text01 from '~/content/1_1_homepage.md'
import HtmlParser from '~/components/HtmlParser.vue'

export default {
  data() {
    return {}
  },
  components: {
    tile: tile,
    HtmlParser,
  },
  computed: {
    text01() {
      return text01
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
            'Geschichte und Zukunft der kleinsten Bausteine im Interactiondesign',
        },
      ],
    }
  },
  mounted() {
    //console.log('frontpage mounted')
  },
}
</script>
