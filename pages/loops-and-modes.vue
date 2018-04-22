<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/history" heading="Historie"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/2_4_loopsmodes.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue';
import { setHighlightColor } from '~/content/pages.js'

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
    setHighlightColor(0)
  },
  head() {
    return {
      title: "Schleifen und Modi von Microinteractions",
    }
  },
}
</script>
