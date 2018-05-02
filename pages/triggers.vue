<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/rules" heading="Regeln"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/ausloeser.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue';
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
      title: "Auslöser von Microinteractions",
    }
  },
}
</script>
