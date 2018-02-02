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
      <no-ssr>
        <scrollactive activeClass="is-scroll-active" :offset="100">
          <ul>
            <li><a class="scrollactive-item" href="#markup-1">1</a></li>
            <li><a class="scrollactive-item" href="#markup-2">2</a></li>
            <li><a class="scrollactive-item" href="#markup-3">3</a></li>
          </ul>
        </scrollactive>
      </no-ssr>
    </li>
    <li>
      <nuxt-link class="nav-link" to="/about" exact>
        Über
      </nuxt-link>
    </li>
    <li>
      <nuxt-link class="nav-link" to="/scrapyard" exact>
        scrapyard
      </nuxt-link>
    </li>
  </ul>
</nav>

</template>

<style lang="scss">
@import '../assets/styles/mixins.scss';

.navigation {
  // positioning is defined in layout.scss
  background-color: rgba(0, 0, 0, 0.2);
  font-weight: bold;
}
.nav-ul {
  margin: 2em;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;

  @include grid {
    @include mq-md {
      display: block;
    }
  }
}
.nav-li {
  margin: 0;
  padding: 0;
}

.scrollactive-item.is-scroll-active {
  background: green;
}

.nuxt-link-exact-active,
.nuxt-link-active {
  border-bottom: 3px solid red;
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
