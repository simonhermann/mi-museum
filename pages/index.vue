<template>
<div class="page page-home">
  <header class="page-home__header">
      <h1 class="page-home__title">Micro&shy;interactions</h1>
      <p class="page-home__subtitle">Interaktives Museum, blababl und lasdunudvievnu eunvneuvn unevinevu ne </p>
  </header>

  <!-- intro text -->

  <!-- cards with teaser to chapters -->
  <v-container style="padding: 0;" grid-list-md>
    <v-layout row wrap>
      <tile link="triggers" topline="Trigger" heading="Auslöser" text="Wie kommt die Interaktion zu Stande?"></tile>
      <tile link="#" topline="topline" heading="Buttons" text="the basic"></tile>
    </v-layout>
  </v-container>

  <!-- cards with teaser to MIs -->

  <!-- footer -->

</div>
</template>

<style lang="scss">
@import './assets/styles/mixins.scss';

.page-home {
  &__title {
    font-size: 3em;
    margin: 20vh 0 .1em 0;

    @include mq-md{
      font-size: 4em;
    }
  }
  &__subtitle{
    margin: 0 0 10vh 0;
    font-size: 1.5em;
    font-style: italic;
  }
}
</style>

<script>
import tile from '~/components/obj/tile.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    'tile': tile
  },

  // html meta data for page
  head() {
    return {
      title: 'Microinteractiondesign',
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
}
</script>
