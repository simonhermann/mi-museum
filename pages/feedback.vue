<template>
  <div class="page">
    <div v-html=feedback01></div>
  </div>
</template>

<script>
import feedback_md from '~/content/2_3_feedback.md'
export default {
  computed: {
    feedback01() {
      return feedback_md
    },
  },
  head() {
    return {
      title: "Rückmeldung von Microinteractions",
    }
  },
}
</script>
