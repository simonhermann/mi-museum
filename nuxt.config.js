module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Microinteractions',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Microinteractions',
      },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: 'zFfzzzExdtmkb2XdhzZizsw40H-_tzzYgA0VTGZTqf8',
      },
    ],
    link: [
      // { rel: 'alternate', hreflang: 'de', href: 'https://www.my-url.com/' },
      // { rel: 'alternate', hreflang: 'en', href: 'https://www.my-url.com/en' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'href="https://fonts.googleapis.com/',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'href="https://fonts.gstatic.com/',
        crossorigin: 'anonymous',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Alegreya:500,500i,900',
        rel: 'stylesheet',
      },
    ],
    script: [
      { src: '/js/medium-zoom.min.js', defer: true },
      { src: '/js/smoothscroll.js', defer: true },
    ],
  },
  css: [
    'assets/styles/vuetify-custom/main.styl',
    //'assets/styles/main.scss'
  ],
  loading: '~/components/nuxtLoading.vue',
  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-custom-properties')({
        preserve: true,
      }),
      // require('autoprefixer')({
      //   browsers: ['> 5%'],
      // }),
    ],
    /*
    ** Run ESLint on save
    */
    // extend(config, ctx)
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       // loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     })
    //   }
    // },
    vendor: ['vuetify'],
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      // delay scrolling to top after page change to match fade-out time
      return new Promise((resolve, reject) => {
        if (window.location.hash) {
          // do nothing if the link is a page-internal anchor
        } else {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 250)
        }
      })
    },
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      //console.log('route change imminent')
    },
  },
  modules: [
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-12301-2',
        debug: {
          // disable in ga in development
          sendHitTask: process.env.NODE_ENV === 'production',
        },
      },
    ],
  ],
  loaders: [
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
      options: { sourceMap: true },
    },
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/global.js',
    //{ src: '~/plugins/medium-zoom.min.js', ssr: false },
  ],
  generate: {
    routes: ['/', '/about'], // these routes will be pre-rendered on "build"
  },
  env: {},
  /*
  ** Markdown-it
  */
  markdownit: {
    preset: 'default',
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
    html: true,
    use: [
      //'markdown-it-include',
      'markdown-it-container',
      'markdown-it-attrs',
      ['markdown-it-implicit-figures', { figcaption: true }],
      'markdown-it-footnote',
      'markdown-it-mark',
      'markdown-it-smartarrows',
      ['markdown-it-container', 'standout'], // makes container .standout available
      //['markdown-it-hashmention', { href: 'http://twitter.com' }],
      //'markdown-it-hashmention',
    ],
  },
}
