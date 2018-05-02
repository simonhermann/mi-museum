<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/" heading="Zurück zur Startseite" nextText="Vielen Dank, das war's!"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue'
import text01 from '~/content/praxis.md'
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
    setColorsForPage()
  },
  head() {
    return {
      title: 'Microinteractions in der Praxis',
    }
  },
}
</script>
