<template>
  <div v-html="content">
  </div>
</template>

<script>
// this component makes site-internal links in markdown work with nuxt-router
// https://github.com/nuxt/nuxtjs.org/blob/master/components/HtmlParser.vue
export default {
  props: ['content'],
  // beforeMount() {
  //   this.content = this.content.replace(/<img src=/g, '<img v-lazy=')
  //   console.log(this.content)
  // },
  mounted() {
    this.addListeners()
  },
  beforeDestroy() {
    this.removeListeners()
  },
  watch: {
    content: 'contentUpdated',
  },
  methods: {
    navigate(event) {
      const href = event.target.getAttribute('href')
      if (href && href[0] === '/') {
        event.preventDefault()
        // open link via nuxt router:
        this.$router.push(href)
      } else if (href.indexOf('#fn') == -1) {
        // TODO: improve this XXXX
        // I actually just check if the link contains "#fn", since this is my indicator for footnote links
        // needs changes if other page-internal links are used in future
        // fails for external links that contain the string "#fn"
        event.preventDefault()
        // open all external links in new tab:
        return window.open(href, '_blank')
      }
    },
    addListeners() {
      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners() {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false)
      }
      this._links = []
    },
  },
}
</script>
