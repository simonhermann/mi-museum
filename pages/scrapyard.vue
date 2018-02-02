<template>
<main class="page page-scrapyard" role="main">
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



      <!-- intro text -->
      <!-- cards with teaser to chapters / MIs -->

      <figure class="align-full">
        <img src="https://source.unsplash.com/i9FLJwYhVQs/2600x800" alt="">
      <figcaption class="caption">Lake. Photo by Andreas Rønningen</figcaption>
    </figure>

  
</main>
</template>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

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
  transition: all .5s ease-out;
}
.blur {
  filter: blur(2px);
}
</style>

<script>
export default {
  data() {
    return {
      titleVisible: 'false',
      blurElClass: 'blur-el',
      blurClass: 'blur'
    }
  },

  // html meta data for page
  head() {
    return {
      title: 'Museum of Microinteractions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Geschichte und Zukunft der kleinsten Bausteine im Interactiondesign',
        },
      ],
    }
  },
}
</script>
