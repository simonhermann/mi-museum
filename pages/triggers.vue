<template>
  <main class="page">
    <div v-html=triggers01></div>
  </main>
</template>

<script>
import triggers_md from '~/content/2_1_triggers.md'

export default {
  computed: {
    triggers01() {
      return triggers_md
    },
  },
  head() {
    return {
      title: "Auslöser von Microinteractions",
    }
  },
}
</script>
