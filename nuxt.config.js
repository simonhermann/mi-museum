const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  head: {
    title: 'Microinteractions',
    meta: [
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
      { name: 'theme-color', content: '#424242' },
      { name: 'msapplication-TileColor', content: '#3AA150' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Microinteractions sind die Grundlage der Interfaces zwischen Mensch und Maschine. Sie sind die kritischen Details, die den Unterschied jeder Benutzerschnittstelle ausmachen.',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3AA162' },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      { src: '/js/medium-zoom.min.js', body: true },
      { src: '/js/smoothscroll.js', body: true },
      { src: '/js/ga-optout.js', body: true },
    ],
  },
  css: [
    'assets/styles/vuetify-custom/vuetify-custom.styl',
    'assets/styles/alegreya.css',
  ],
  loading: '~/components/nuxtLoading.vue',
  /*
  ** Build configuration
  */
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
    //beforeEnter(el) {
    //console.log('route change imminent')
    //},
  },
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
  ],
  loaders: [
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
      options: { sourceMap: false },
    },
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/global.js',
    '~/plugins/vue-lazyload.js',
  ],
  vendor: ['vuetify'],
  /*
  ** build, generate, render
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
    babel: {
      plugins: [
        [
          'transform-imports',
          {
            vuetify: {
              transform: 'vuetify/es5/components/${member}',
              preventFullImport: true,
            },
          },
        ],
      ],
    },
    extractCSS: false,
    extend(config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //   })
      // }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/],
          }),
        ]
      }
    },
  },
  generate: {
    routes: ['/', '/about'], // ?
    minifiy: {
      removeComments: true,
    },
  },
  render: {
    resourceHints: true, //if enabled, routes are prefetched+preloaded
    http2: { push: true },
  },
  env: {},
  /*
  ** Extension options
  */
  markdownit: {
    preset: 'default',
    breaks: true, // Convert '\n' in paragraphs into <br>
    use: [
      //'markdown-it-include',
      'markdown-it-container',
      'markdown-it-attrs',
      ['markdown-it-implicit-figures', { figcaption: true }],
      'markdown-it-footnote',
      'markdown-it-mark',
      'markdown-it-smartarrows',
      ['markdown-it-container', 'md-container-standout'], // makes container .standout available
      ['markdown-it-container', 'md-container-more'], // makes container .more available
      'markdown-it-named-headers',
      //['markdown-it-hashmention', { href: 'http://twitter.com' }],
      //'markdown-it-hashmention',
    ],
    linkify: false, // Autoconvert URL-like text to links
    html: true,
    typographer: true,
    // quotes: '“”‘’',
    // quotes: '„“‚‘',
    quotes: '»«›‹',
  },
  manifest: {
    name: 'Microinteractions',
    short_name: 'Microinteractions',
    lang: 'de',
    display: 'standalone',
    orientation: 'portrait-primary',
    start_url: '/',
    background_color: '#fafafa',
    theme_color: '#424242',
    ogDescription:
      'Microinteractions sind die Grundlage der Interfaces zwischen Mensch und Maschine. Sie sind die kritischen Details, die den Unterschied jeder Benutzerschnittstelle ausmachen.',
  },
  sitemap: {
    hostname: 'https://www.microinteractions.design',
    exclude: ['/scrapyard'],
    generate: true,
  },
  'google-analytics': {
    id: 'UA-116314873-1',
    // debug: {
    //   sendHitTask: false, // disable in ga in development mode - not working: conflict with generate command? XXXX
    // },
  },
}
