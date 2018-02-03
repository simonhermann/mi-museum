<template>
<main class="page page-home" role="main">
  <header class="page__header">
    <h1 class="page__title">Museum of Microinteractions</h1>
  </header>


      <!-- intro text -->
      <!-- cards with teaser to chapters / MIs -->
      <div v-html="hello"></div>


</main>
</template>

<style lang="scss">
.page-home {
  .page__title {
    font-size: 50px;
  }
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
