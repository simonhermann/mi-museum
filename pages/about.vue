<template>
  <div class="page page-about">

    <html-parser :content=text01></html-parser>
    <nextPage link="/" heading="Zurück zur Startseite" nextText="Alles gelesen?"></nextPage>

  </div>
</template>

<script>
import text01 from '~/content/about.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue'
import { setColorsForPage } from '~/content/pages.js'

export default {
  components: {
    HtmlParser, nextPage
  },
  computed: {
    text01() {
      return text01
    },
  },
  beforeMount() {
    setColorsForPage(0)
  },
  head() {
    return {
      title: 'Über Microinteractions.design',
    }
  },
}
</script>

<style lang="scss">

</style>
