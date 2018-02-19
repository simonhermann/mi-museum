<template>
  <main class="page">
    <div v-html=rules01></div>
  </main>
</template>

<script>
import rules_md from '~/content/2_2_rules.md'
export default {
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
