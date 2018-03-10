<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
  </div>
</template>

<script>
import text01 from '~/content/2_1_triggers.md'
import HtmlParser from '~/components/HtmlParser.vue';
export default {
  computed: {
    text01() {
      return text01
    },
  },
  components: {
    HtmlParser
  },
  head() {
    return {
      title: "Auslöser von Microinteractions",
    }
  },
}
</script>
