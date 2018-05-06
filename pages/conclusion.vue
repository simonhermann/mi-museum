<template>
  <div class="page">
    <html-parser :content=text01></html-parser>
    <nextPage link="/about" heading="Hallo sagen" nextText="Das war's! Lass mir doch dein Feedback da:"></nextPage>
    <nextPage link="/" heading="zurück zur Startseite" nextText="oder"></nextPage>
  </div>
</template>

<script>
import HtmlParser from '~/components/HtmlParser.vue'
import text01 from '~/content/conclusion.md'
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
    setColorsForPage()
  },
  head() {
    return {
      title: 'Microinteractions in der Praxis',
    }
  },
}
</script>
