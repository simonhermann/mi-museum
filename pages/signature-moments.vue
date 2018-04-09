<template>
  <div class="page">
    <html-parser :content=text01></html-parser>

    <!-- <figure v-lazy-container="{ selector: 'img' }">
        <img data-src="images/signature-moments/pull-to-refresh-planet.gif" class="content-skinny">
        <figcaption>XXXX</figcaption>
    </figure> -->
    <!-- <figure v-lazy-container="{ selector: 'img' }">
        <img :data-src="require('~/static/images/signature-moments/pull-to-refresh-planet.gif')" class="content-skinny">
        <figcaption>XXXX</figcaption>
    </figure> -->
    <!-- <figure>
        <img v-lazy="require('~/static/images/signature-moments/pull-to-refresh-planet.gif')" class="content-skinny">
        <figcaption>XXXX</figcaption>
    </figure> -->

    <nextPage link="/animation" heading="Animation"></nextPage>
  </div>
</template>

<script>
import text01 from '~/content/4_2_signature-moments.md'
import nextPage from '~/components/obj/nextPage.vue'
import HtmlParser from '~/components/HtmlParser.vue'
export default {
  computed: {
    text01() {
      return text01
    },
  },
  components: {
    HtmlParser,
    nextPage,
  },
  head() {
    return {
      title: 'Signature Moments durch Microinteractions',
    }
  },
}
</script>
