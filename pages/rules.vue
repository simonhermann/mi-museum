<template>
  <main class="page">
    <div v-html=rules01></div>
    <nextPage link="#" heading="Buttons"></nextPage>
  </main>
</template>

<script>
import rules_md from '~/content/2_2_rules.md'
import nextPage from '~/components/obj/nextPage.vue'

export default {
  components: {
    nextPage
  },
  computed: {
    rules01() {
      return rules_md
    },
  },
  head() {
    return {
      title: "Regeln von Microinteractions",
    }
  },
}
</script>
