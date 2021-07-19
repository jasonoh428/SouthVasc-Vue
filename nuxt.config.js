export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SouthernVascular',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sanity/imageUrl.js',
    '~/plugins/vue/youtube.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity/module',
    '@nuxtjs/color-mode'
  ],

  sanity: {
    projectId: 'br1xwv5s',
    token:process.env.SANITY_TOKEN
  },

  styleResources: {
    scss: ['~/assets/vars.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['Raleway:400,700,800', 'Open-sans:400'] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
