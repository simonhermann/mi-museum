<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/practical" heading="Anwendung in der Praxis" nextText="Letztes Kapitel:"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue';
import text01 from '~/content/historie.md'
import nextPage from '~/components/obj/nextPage.vue'
import { setColorsForPage } from '~/content/pages.js'

export default {
  computed: {
    text01() {
      return text01
    },
  },
  beforeMount() {
    setColorsForPage()
  },
  components: {
    HtmlParser, nextPage
  },
  head() {
    return {
      title: "Historie von Microinteractions",
    }
  },
}
</script>
