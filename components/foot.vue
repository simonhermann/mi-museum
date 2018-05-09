<template>
  <div class="footer">
    <share></share>
    <p>Simon Hermann / microinteractions.design</p>
  </div>
</template>

<script>
import share from '~/components/obj/share.vue'

export default {
  components: {
    share
  }
}
</script>

<style scoped lang="scss">
.footer {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 38rem;
  margin-top: 3rem;
  text-align: center;
  p {
    font-size: var(--font-size-small);
    color: var(--grey-light);
  }
}
</style>