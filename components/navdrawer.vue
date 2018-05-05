<template>
  <div>
    <!-- toolbar -->
    <v-toolbar fixed :scroll-off-screen="!$vuetify.breakpoint.mdAndUp" app dense :scroll-threshold="50" :floating="$vuetify.breakpoint.mdAndUp">

      <a class="toolbar__side-icon btn btn--icon btn-openmenu" :class="{ transparent : drawer }" @click="drawer = !drawer" aria-label="Menu" aria-controls="navigation-drawer" role="button" :aria-expanded="drawer" tabindex="0">
        <div class="btn__content">
          <i class="btn-openmenu__icon">
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </i>
          <span class="btn-openmenu__label">Menü</span>
        </div>
      </a>

      <a class="toplink" v-on:click="scrollToTop" aria-label="scroll to top"></a>

      <!-- <v-toolbar-title class="right">
        <nuxt-link to="/">Microinteractions</nuxt-link>
      </v-toolbar-title> -->

    </v-toolbar>

    <!-- drawer -->
    <v-navigation-drawer id="navigation-drawer" v-model="drawer" fixed app floating :touchless="$vuetify.breakpoint.mdAndUp" width="300" mobile-break-point="1264">

      <a class="btn btn--icon btn-closemenu" @click="drawer = !drawer" aria-label="Close" tabindex="0">
        <div class="btn__content">
          <i aria-hidden="true" class="btn-closemenu__icon">‹</i>
        </div>
      </a>

      <header>
        <nuxt-link class="nav-homelink" to="/">
          Microinteractions
        </nuxt-link>
      </header>

      <ul class="nav-ul">
        <li class="nav-li" :key="i" v-for="(theoryPage, i) in theoryPages">
          <nuxt-link class="nav-link" :to="theoryPage.to">
            {{ theoryPage.title }}
          </nuxt-link>
        </li>
      </ul>

      <!-- <p><b>Grundlegende Beispiele</b></p>
      <ul class="nav-ul">
        <li class="nav-li" :key="i" v-for="(practicePage, i) in practicePages">
          <nuxt-link class="nav-link" :to="practicePage.to">
            {{ practicePage.title }}
          </nuxt-link>
        </li>
      </ul> -->

      <div class="secondary-links">
        <nuxt-link class="nav-link" to="/about">Über & Impressum</nuxt-link>
      </div>

      <div class="spacer8"></div>

    </v-navigation-drawer>

  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';
@import '../assets/styles/extends.scss';

.navigation-drawer {
  padding: 1em 0.5em 2em 2em;
  background-color: transparent !important; //waiting for vuetify to allow theme disableling
  color: var(--color-text-light);

  @extend .ext-nice-scrollbar;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &:not(&--is-mobile) {
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &--is-mobile {
    background-color: #fff !important;
  }
  &:not(.navigation-drawer--is-mobile) {
    .nav-homelink.nuxt-link-exact-active {
      visibility: hidden;
    }
  }
  .btn-closemenu {
    margin-left: -1em;
  }
  .btn-closemenu__icon {
    color: inherit;
    font-size: 3em;
    line-height: 1em;
    display: block;
    margin-top: -0.23em;
    margin-left: -0.01em;
  }
  .nav-homelink {
    text-decoration: none;
    display: inline-block;
    margin-top: 4vh;
    font-weight: 900;
    letter-spacing: 0.05em;
    font-size: 1.25em;
    color: var(--color-text-light);
    &:hover {
      color: var(--the-color);
    }
  }

  // actual page nav
  .nav-link {
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0);
    // hack for Safari:
    @include underline-color-fallback;
    transition: all 300ms var(--transition-curve1);
    color: inherit; // vuetify hack XXXX
    &.nuxt-link-active {
      color: var(--the-color);
      //text-decoration-color: currentColor;
      &::before {
        color: inherit;
      }
    }
    position: relative;
    &::before {
      content: '›';
      color: transparent;
      transition: transform 200ms var(--transition-curve1);
      text-decoration: none !important;
      position: absolute;
      font-size: 1.5em;
      top: 50%;
      transform: translate(0, -50%);
      margin-left: -0.75em;
      // margin-top: -0.1em;
    }
    &:hover {
      color: var(--the-color);
      &::before {
        color: inherit;
        transform: translate(-0.125rem, -50%);
      }
    }
  }

  .nav-ul {
    list-style: none;
    line-height: 2.4;
    padding-left: 1rem;
  }
  .secondary-links {
    line-height: 2.3rem;
    margin-top: 4rem;
  }
}
/*
 * Toolbar
*/
.toolbar {
  background-color: transparent !important; //vuetify hack
  padding-top: 0.5rem !important; //vuetify hack
  box-shadow: none !important;
  @include mq-md {
    padding-top: 1rem !important; //vuetify hack
  }
  // hack to hide toolbar completely when scrolled offscreen
  &.elevation-0 {
    opacity: 0;
  }
  @media print {
    display: none;
  }
  /*&::before {
    content: '';
    position: absolute;
    top: var(--body-border-width);
    left: var(--body-border-width);
    right: var(--body-border-width);
    bottom: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: var(--white-bg);
  }*/
  &__content {
    position: relative;
    background-color: inherit;
    justify-content: space-between;

    .btn-openmenu {
      margin-left: 1rem !important; //vuetify hack
      position: relative;
      transition: opacity 150ms ease-out;
      &.transparent {
        opacity: 0;
      }
      .btn__content::after {
        content: '';
        z-index: -1;
        background-color: var(--white-bg);
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        left: -0.3rem;
        width: 5.3rem;
        border-radius: 0.5rem;
        /*without label:
        margin-left: -0.1rem;
        margin-top: -0.0325rem;
        border-radius: 1.1rem;*/
      }
      &__icon {
        color: inherit;
        height: 2em;
        width: 2em;
        margin-top: 0.2em;
        fill: var(--color-text);
      }
      &__label {
        color: var(--color-text);
        font-style: italic;
        font-size: 1rem;
        position: absolute;
        left: 0;
        margin-left: 2em;
        text-transform: none;
        transition: transform 150ms var(--transition-curve1);
        display: inline-block;
      }
      &:hover {
        .btn-openmenu__icon {
          fill: var(--the-color);
        }
        .btn-openmenu__label {
          transform: translateX(0.2rem);
        }
      }
    }
  }
  /*&__title {
    color: inherit; // vuetify hack XXXX
    margin-right: 1.75rem !important; // vuetify hack XXXX
    overflow: visible;
    a {
      font-weight: bold;
      text-decoration: none;
      color: inherit; // vuetify hack XXXX
      &.nuxt-link-exact-active {
        //visibility: hidden;
      }
    }
    @include mq-md {
      //display: none;
    }
  }*/
  .toplink {
    flex-grow: 1;
    height: 2rem;
    margin-left: 3rem;
    border-radius: 0.5rem;
    display: block;
    position: relative;
    text-decoration: none;
    &:active,
    &:hover {
      background: var(--the-color-trans);
      &::after {
        content: '⤒';
        color: var(--the-color);
        font-size: 1.3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    @include mq-md {
      display: none;
    }
  }
  .btn__content:before {
    margin-left: -0.1rem;
    margin-top: -0.0325rem;
  }
}
.btn:active {
  //outline-style: none;
  // &__content {
  //   outline: inherit;
  //   outline-style: dotted;
  // }
}
.btn__content {
  &::before {
    color: var(--the-color);
  }
}
</style>

<script>
import { theoryPages, practicePages } from '~/content/pages.js'
export default {
  data() {
    return {
      drawer: false, // undefined = open on bigger screens
    }
  },
  methods: {
    scrollToTop() {
      smoothScroll(0)
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
