<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/practical" heading="Microinteractions in der Praxis"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/4_3_animation.md'
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
      title: "Animationen und Geschwindigkeit in Microinteractions",
    }
  },
}
</script>
