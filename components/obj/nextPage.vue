<template>

  <div class="o-next-page">
    <nuxt-link class="o-next-page__link" :to="link" exact>
      <p class="o-next-page__nexttext">{{ nextText }}</p>
      <h3 class="o-next-page__heading">{{ heading }} </h3>
      <p v-if="text" class="o-next-page__text"> {{ text }} </p>
    </nuxt-link>
  </div>

</template>

<style lang="scss">
.o-next-page {
  display: inline-block;
  width: 100%;
  height: 5em;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.2s ease-out;
  margin-top: 4em;
  &:nth-of-type(-n + 1) {
    // styles for first element of its type
  }

  &__link {
    text-decoration: none;
    display: inline-block;
  }

  &__nexttext {
    margin: 0;
    color: var(--color-text);
  }
  &__heading {
    margin: 0;
    text-decoration: underline;
    &::before {
      content: '›\00a0';
      text-decoration: none;
      display: inline-block;
      position: absolute;
      font-size: 1.5em;
      margin-left: -0.5em;
      margin-top: -0.3em;
      transition: margin 150ms var(--transition-curve1);
      color: transparent;
    }
  }
  &:hover &__heading::before {
    margin-left: -0.6em;
    color: inherit;
  }
}
.o-next-page:hover {
  &__heading {
    color: var(--next-color);
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
