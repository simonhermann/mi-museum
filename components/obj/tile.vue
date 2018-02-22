<template>

  <v-card>
    <nuxt-link class="o-tile" :to="link" exact>
    <span class="o-tile__topline"> {{ topline }} </span>
    <h3 class="o-tile__heading"> {{ heading }} </h3>
    <p class="o-tile__text"> {{ text }} </p>
    </nuxt-link>
  </v-card>

</template>

<style lang="scss" scoped>
// .o-tile {
//   padding: 1em;
//   box-sizing: border-box;
//   float: left;
//   background: rgba(0, 0, 0, 0.06);
//   box-shadow: inset 0 0 1px #aaa; // remove
//   height: 22em;
//   transition: all 0.2s ease-out;
// }
</style>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    topline: {
      type: String,
      required: false,
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
