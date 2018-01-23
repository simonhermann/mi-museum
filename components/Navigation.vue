<template>
<nav class="navigation" role="navigation">
  <ul class="nav-ul">
    <li class="nav-li">
      <nuxt-link class="nav-link" to="/" exact>
        Home
      </nuxt-link>
    </li>
    <li>
      <nuxt-link class="nav-link" to="/article" exact>
        Artikel
      </nuxt-link>
    </li>
    <li>
      <nuxt-link class="nav-link" to="/about" exact>
        Über
      </nuxt-link>
    </li>
  </ul>
</nav>
</template>

<style lang="scss">
@import '../assets/styles/mixins.scss';

.navigation {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: lightgray;
  font-weight: bold;
  @include grid {
    @include mq-md {
      position: initial;
      bottom: initial;
      left: initial;
    }
  }
}
.nav-ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0 2em;

  @include grid {
    @include mq-md {
      display: initial;
    }
  }
}
.nav-li {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  components: {},
  methods: {
    // return localized path for links
    // path(url) {
    //   return this.$i18n.locale === 'de' ? url : '/' + this.$i18n.locale + url
    // },
  },
}
</script>
