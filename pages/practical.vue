<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/" heading="Zurück zur Startseite" nextText="Das war's!"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue'
import text01 from '~/content/5_1_praxis.md'
import nextPage from '~/components/obj/nextPage.vue'
import { setColorsForPage } from '~/content/pages.js'

export default {
  computed: {
    text01() {
      return text01
    },
  },
  components: {
    HtmlParser, nextPage
  },
  beforeMount() {
    setColorsForPage(0)
  },
  head() {
    return {
      title: 'Praktische Gestaltung von Microinteractions',
    }
  },
}
</script>
