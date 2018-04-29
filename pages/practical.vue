<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
  </div>
</template>

<script>
import text01 from '~/content/5_1_praxis.md'
import HtmlParser from '~/components/HtmlParser.vue';
import { setColorsForPage } from '~/content/pages.js'

export default {
  computed: {
    text01() {
      return text01
    },
  },
  components: {
    HtmlParser
  },
  beforeMount() {
    setColorsForPage(0)
  },
  head() {
    return {
      title: "Praktische Gestaltung von Microinteractions",
    }
  },
}
</script>
