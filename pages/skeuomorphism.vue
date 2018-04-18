<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/signature-moments" heading="Signature Moments"></nextPage>
    <!-- <img data-src="/images/skeuomorphismus/recyclebin.jpg"> -->
  </div>
</template>

<script>
import text01 from '~/content/4_1_skeuomorphismus.md'
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
      title: "Signature Moments durch Microinteractions",
    }
  },
}
</script>
