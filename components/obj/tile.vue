<template>

  <v-flex align-start class="o-tile" xs12 sm6>
    <v-card class="o-tile__link" :to="link" nuxt hover>
      <span class="o-tile__topline"> {{ topline }} </span>
      <h3 class="o-tile__heading"> {{ heading }} </h3>
      <p class="o-tile__text"> {{ text }} </p>
    </v-card>
  </v-flex>

</template>

<style lang="scss">
.o-tile {
  position: relative;
  &__link {
    background-color: white;
    // z-index: 2;
    // &:before {
    //   box-sizing: border-box;
    //   z-index: 1;
    //   content: ' ';
    //   display: block;
    //   position: absolute;
    //   top: 6px;
    //   left: 6px;
    //   height: 100%;
    //   width: 100%;
    //   background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><pattern id="Pattern2" patternUnits="userSpaceOnUse" width="5" height="5"><path d="M 0,5 l 5,-5 M -1,1 l 2.5,-2.5 M 4,6 l 2.5,-2.5" stroke-width="1" shape-rendering="auto" stroke="#788080" stroke-linecap="square"></path></pattern></defs><rect fill="url(#Pattern2)" x="0" y="0" width="100" height="100"/></svg>');
    // }
  }
  &__link {
    padding: 1em;
  }
}
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
