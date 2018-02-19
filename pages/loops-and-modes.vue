<template>
  <main class="page">
    <div v-html=loopsmodes01></div>
  </main>
</template>

<script>
import loopsmodes_md from '~/content/2_4_loopsmodes.md'
export default {
  computed: {
    loopsmodes01() {
      return loopsmodes_md
    },
  },
  head() {
    return {
      title: "Schleifen und Modi von Microinteractions",
    }
  },
}
</script>
