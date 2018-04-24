<template>
  <div class="homegrid">
    <nuxt-link class="homegrid-item" :key="i" v-for="(theoryPage, i) in theoryPages" :to="theoryPage.to" :style="getItemStyles(i)">
      <h3 class="item-head">{{ theoryPage.title }}</h3>
      <p class="item-desc" v-if="theoryPage.desc">{{ theoryPage.desc }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import { theoryPages, practicePages, colors } from '~/content/pages.js'
export default {
  methods: {
    getItemStyles(i) {
      var itemArea = 'grid-area: g' + i + ';'
      var itemColor = 'background-color:' + colors[i + 1] + ';'
      var itemStyles = itemArea + itemColor
      return itemStyles
    },
  },
  computed: {
    theoryPages() {
      return theoryPages
    },
    practicePages() {
      return practicePages
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/styles/mixins.scss';

.homegrid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap: 0.2em;
  grid-row-gap: 0.215em;
  border-radius: 1rem;
  overflow: hidden;
  grid-template-areas: 'g0' 'g1' 'g2' 'g3' 'g4' 'g5' 'g6' 'g7' 'g8' 'g9' 'g10';
  @include mq-sm {
    grid-template-areas:
      'g0 g1 g1'
      'g2 g2 g3'
      'g4 g4 g3'
      'g5 g6 g7'
      'g8 g8 g10'
      'g9 g9 g10';
  }
  @include mq-md {
    rid-template-rows: 7em 6em 9em 9em 11em;
    grid-template-areas:
      'g0 g0 g1 g1 g1 g2 g2 g2'
      'g3 g3 g3 g3 g3 g2 g2 g2'
      'g4 g4 g4 g5 g5 g5 g5 g5'
      'g4 g4 g4 g6 g6 g7 g7 g7'
      'g8 g8 g8 g6 g6 g9 g9 g9'
      'g10 g10 g10 g10 g10 g10 g10 g10';
  }

  &-item {
    display: block;
    grid-area: g0;
    background-color: #444;
    border-radius: 0;
    padding: 1rem;
    text-decoration: none;
    color: #fff;
    .item-head {
      margin: 0 0 0.5rem 0;
      &:only-child {
        margin: 0;
      }
      text-decoration: underline;
      text-decoration-color: transparent;
      font-size: 1.75em;
    }
    &:hover,
    &:active {
      .item-head {
        text-decoration-color: #fff;
      }
      border-radius: 1rem;
      transform: scale(0.95);
    }
    .item-desc {
      margin: 0;
      font-style: italic;
    }
  }
}
</style>