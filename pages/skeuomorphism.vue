<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/feedback" heading="Rückmeldung"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/skeuomorphismus.md'
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
    setColorsForPage(0)
  },
  head() {
    return {
      title: "Skeuomorphismus in Microinteractions",
    }
  },
}
</script>
