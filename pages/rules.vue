<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/feedback" heading="Rückmeldung"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/2_2_rules.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue';
import { setPageHighlightColor } from '~/content/pages.js'

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
    setPageHighlightColor(0)
  },
  head() {
    return {
      title: "Regeln von Microinteractions",
    }
  },
}
</script>
