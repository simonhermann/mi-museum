<template>
<div class="page page-home">
  <header class="page-home__header content-normal">
    <p style="font-style: italic; color:darkred; width:100%; text-align:center; font-size:.9em; margin-bottom: -10vh; margin-top: -6em;">&mdash;&nbsp;Work in progress, please come back later&nbsp;&mdash;</p>
    <h1 class="page-home__title">Micro&shy;interactions</h1>
    <p class="page-home__subtitle">Gestaltung von Konversation zwischen Mensch und&nbsp;Maschine</p>
  </header>

  <homegrid></homegrid>

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
//import tile from '~/components/obj/tile.vue'
import HtmlParser from '~/components/HtmlParser.vue'
import homegrid from '~/components/homegrid.vue'
import { theoryPages, practicePages, setHighlightColor } from '~/content/pages.js'

export default {
  data() {
    return {}
  },
  components: {
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
