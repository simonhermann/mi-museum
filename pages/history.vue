<template>
  <div class="page">
    <div v-html=history01></div>
  </div>
</template>

<script>
import history_md from '~/content/3_1_history.md'
export default {
  computed: {
    history01() {
      return history_md
    },
  },
  head() {
    return {
      title: "Historie von Microinteractions",
    }
  },
}
</script>
