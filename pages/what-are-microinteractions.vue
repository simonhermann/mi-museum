<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/feedback" heading="Rückmeldung"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/2_0_intro.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue';
export default {
  computed: {
    text01() {
      return text01
    },
  },
  components: {
    HtmlParser, nextPage
  },
  head() {
    return {
      title: "Was sind Microinteractions?",
    }
  },
}
</script>
