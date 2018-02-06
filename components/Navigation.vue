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
        <scrollactive class="subnav" activeClass="is-scroll-active" :offset="500">
          <ul>
            <li><a class="scrollactive-item" href="#markup-1">eins</a></li>
            <li><a class="scrollactive-item" href="#markup-2">zwei</a></li>
            <li><a class="scrollactive-item" href="#markup-3">drei</a></li>
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
@import '../assets/styles/vars.scss';

/*
** Main Nav
*/
.navigation {
  // positioning is defined in layout.scss
  // background-color: rgba(0, 0, 0, 0.2);
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
  color: var(--color-highlight);
}
.nuxt-link-exact-active {
  background-color: var(--color-highlight);
  color: #fff;
}



/*
** Subnav / scrollactive
*/

.subnav {
  display: none;
  @include mq-md {
    display: block;
  }
}

.scrollactive-item.is-scroll-active {
  // background-color: var(--color-highlight);
  // color: #fff;
  text-decoration: underline;
}

</style>

<script>
export default {
}
</script>
