<template>
  <div class="homegrid">
    <nuxt-link class="homegrid__item" :key="i" v-for="(theoryPage, i) in theoryPages" :to="theoryPage.to" :style="getItemStyles(i)">
      <div class="item__inner" :style="getInnerStyles(i)">
        <h2 class="item__head">{{ theoryPage.title }}</h2>
        <p class="item__desc" v-if="theoryPage.desc">{{ theoryPage.desc }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { theoryPages, practicePages, colors } from '~/content/pages.js'
export default {
  methods: {
    getItemStyles(i) {
      var itemArea = 'grid-area: g' + i + ';'
      var itemTransitionDelay = 'transition-delay: ' + i * 90 + 'ms;'
      var itemStyles = itemArea + itemTransitionDelay
      return itemStyles
    },
    getInnerStyles(i) {
      //var itemColor = 'background-color:' + colors[i + 1] + ';'
      var itemColor = 'background-image: linear-gradient(135deg,' + colors[i + 1] + '0%,' + colors[i + 2] + '100%;'
      var innerStyles = itemColor
      return innerStyles
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
      'g8 g8 g9'
      'g10 g10 g9';
  }
  @include mq-md {
    grid-template-areas:
      'g0 g0 g1 g1 g1 g2 g2 g2'
      'g3 g3 g3 g3 g3 g2 g2 g2'
      'g4 g4 g4 g5 g5 g5 g5 g5'
      'g4 g4 g4 g6 g6 g7 g7 g7'
      'g8 g8 g8 g6 g6 g9 g9 g9'
      'g10 g10 g10 g10 g10 g10 g10 g10';
  }

  &__item {
    display: inherit;
    grid-area: g0;
    text-decoration: none;
    opacity: 0;
    transition: opacity 600ms ease-out;
    .app-mounted & {
      opacity: 1;
    }

    &:hover,
    &:focus {
      .item__inner {
        border-radius: 1rem;
        transform: scale(0.96);
      }
    }
    &:hover,
    &:active,
    &:focus {
      .item__head {
        text-decoration: underline;
      }
    }

    .item__inner {
      background-color: var(--the-color);
      color: #fff;
      text-decoration-color: #fff;
      border-radius: 0;
      padding: 1rem 1.25rem;
      transition: transform 150ms ease-out, border-radius 300ms ease-out;
      //background-image: url("https://www.transparenttextures.com/patterns/bedge-grunge.png");
      //background-image: url("https://www.transparenttextures.com/patterns/brilliant.png");
      //background-image: url('https://www.transparenttextures.com/patterns/dark-dotted-2.png');
      background-repeat: repeat;
    }

    .item__head {
      margin: 0 0 0.5rem 0;
      font-size: 1.75em;
      text-decoration: none;
      &:only-child {
        margin: 0;
      }
      // :hover &, :active & {
      //   text-decoration: underline;
      // }
    }
    .item__desc {
      text-decoration: none;
      margin: 0;
      font-style: italic;
    }
  }
}
</style>