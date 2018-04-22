<template>
<div class="page page-about">


  <html-parser :content=text01></html-parser>

</div>
</template>

<script>
import text01 from '~/content/about.md'
import HtmlParser from '~/components/HtmlParser.vue'
import { setHighlightColor } from '~/content/pages.js'

export default {
  components: {
    HtmlParser
  },
  computed: {
    text01() {
      return text01
    },
  },
  beforeMount() {
    setHighlightColor(0)
  },
  head() {
    return {
      title: 'Über Microinteractions.design',
    }
  },
}
</script>

<style lang="scss">
</style>
