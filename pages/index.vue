<template>
<main class="page page-home" role="main">
  <header class="page__header">
      <h1 class="page__title">Museum of Microinteractions</h1>
  </header>

  <!-- intro text -->
  
  <!-- cards with teaser to chapters -->
  <tile link="triggers" topline="Trigger" heading="Auslöser" text="Wie kommt die Interaktion zu Stande?"></tile>

  <!-- cards with teaser to MIs -->
  <tile link="#" topline="topline" heading="Buttons" text="the basic"></tile>

</main>
</template>

<style lang="scss">
.page-home {
  .page__title {
    font-size: 3em;
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
      title: 'Museum of Microinteractions',
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
