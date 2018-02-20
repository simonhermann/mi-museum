<template>

  <nuxt-link class="o-next-page" :to="link" exact>
    <p class="o-next-page__nexttext">{{ nextText }}</p>
    <h3 class="o-next-page__heading"> {{ heading }} </h3>
    <p v-if="text" class="o-next-page__text"> {{ text }} </p>
  </nuxt-link>

</template>

<style lang="scss" scoped>
.o-next-page {
  width: 100%;
  height: 5em;
  box-sizing: border-box;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-out;
  color: var(--text-color);

  &__nexttext {
    margin: 0;
  }
  &__heading {
    margin: 0;
  }
}
.o-next-page:hover {
}
</style>

<script>
export default {
  props: {
    nextText: {
      type: String,
      required: false,
      default: 'Nächstes Kapitel:'
    },
    link: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
}
</script>
