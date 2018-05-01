<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/animation-and-pace" heading="Animation & Geschwindigkeit"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue';
import text01 from '~/content/rueckmeldung.md'
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
      title: "Rückmeldung von Microinteractions",
    }
  },
}
</script>
