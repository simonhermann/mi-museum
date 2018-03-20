<template>

  <nuxt-link class="o-next-page" :to="link" exact>
    <p class="o-next-page__nexttext">{{ nextText }}</p>
    <h3 class="o-next-page__heading"> {{ heading }} </h3>
    <p v-if="text" class="o-next-page__text"> {{ text }} </p>
  </nuxt-link>

</template>

<style lang="scss">
@import '../../assets/styles/vars.scss';

.o-next-page {
  display: inline-block;
  margin-top: 4em;
  width: 100%;
  height: 5em;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.2s ease-out;
  color: var(--color-text);
  text-decoration: none;

  &__nexttext {
    margin: 0;
  }
  &__heading {
    margin: 0;
    text-decoration: underline;
  }
}
.o-next-page:hover {
  color: var(--color-highlight);
  &__heading {
    text-decoration: underline;
  }
}
</style>

<script>
export default {
  props: {
    nextText: {
      type: String,
      required: false,
      default: 'Nächstes Kapitel:',
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
