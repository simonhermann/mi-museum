<template>
<div class="page page-scrapyard">
  <header class="page-header">
    <h1 class="index-title">Museum of Microinteractions</h1>
  </header>
  
      <div :class="[titleVisible ? blurClass : '', blurElClass]">
        <h3>Blurme</h3>
      </div>
      <button @click="titleVisible = !titleVisible">toggle</button>
      <transition name="fade">
        <h2 v-if="titleVisible">HOLLA!</h2>
      </transition>
      <!-- <transition name="animate">
        <h2 v-if="titleVisible">WOW?</h2>
      </transition> -->
      <button @click="changeColor">color change</button>



      <div v-html="hello"></div>

      <figure class="align-full">
        <img src="/images/home/torch-patent.png" alt="">
      <figcaption class="caption">
        Patentzeichnung Taschenlampe <br>
        <a href="https://en.wikipedia.org/wiki/File:Patent_617,592.png" target="_blank" rel="noopener">Bildquelle</a>
      </figcaption>
    </figure>

  
</div>
</template>

<style lang="scss">
.animate-enter-active {
  animation: bounceIn 2s;
}

.animate-leave-active {
  animation: bounceIn 2s reverse;
}
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.blur-el {
  transition: all 0.5s ease-out;
}
.blur {
  filter: blur(2px);
}
</style>

<script>
import hello from '~/content/scrap.md'

export default {
  data() {
    return {
      titleVisible: 'false',
      blurElClass: 'blur-el',
      blurClass: 'blur',
    }
  },
  methods: {
    changeColor() {
      console.log('color changed')
      document.documentElement.style.setProperty('--color-highlight', '#aaff00');
    },
  },
  computed: {
    hello() {
      return hello
    },
  },
}
</script>
