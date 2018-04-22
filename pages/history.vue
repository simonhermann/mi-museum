<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/skeuomorphism" heading="Skeumorphismus"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/3_1_history.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue';
import { setHighlightColor } from '~/content/pages.js'

export default {
  computed: {
    text01() {
      return text01
    },
  },
  beforeMount() {
    setHighlightColor(0)
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
