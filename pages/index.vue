<template>
<main class="page page-home" role="main">
  <header class="page-header">
    <h1 class="index-title">Museum of Microinteractions</h1>
  </header>
  <div class="page">

      <!-- intro text -->
      <!-- cards with teaser to chapters / MIs -->
      <div v-html="hello"></div>

  </div>
</main>
</template>

<style lang="scss">
h1.home-title {
  font-size: 50px;
}
</style>

<script>
import hello from '~/content/hello.md'

export default {
  data() {
    return {}
  },
  computed: {
    hello() {
      return hello
    },
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
