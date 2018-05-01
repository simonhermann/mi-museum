<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/signature-moments" heading="Signature Moments"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue';
import text01 from '~/content/schleifen-und-modi.md'
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
      title: "Schleifen und Modi von Microinteractions",
    }
  },
}
</script>
