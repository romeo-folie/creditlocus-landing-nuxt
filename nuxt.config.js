export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'credit-locus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/js/index.js', body: true }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/app.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/VueFragment.js', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components/',
    },
    {
      path: '~/components/home/',
    },
    {
      path: '~/components/about/',
    },
    {
      path: '~/components/blog/',
    }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],  

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/firebase','@nuxt/http','@nuxtjs/proxy'],
  firebase: {
    config: {
      apiKey: "AIzaSyDCeV_PocowDRqfX0C5qxYUKJik8CBLnKU",
      authDomain: "credit-locus-landing.firebaseapp.com",
      projectId: "credit-locus-landing",
      storageBucket: "credit-locus-landing.appspot.com",
      messagingSenderId: "751930680145",
      appId: "1:751930680145:web:353987cba9e44d24ef6970",
      measurementId: "G-DPE0CTE5RH"
    },
    services: {
      firestore: {
        memoryOnly: true,
      },
    }
  },
  http: {
    proxy: true, // Can be also an object with default options
    retry: true,
  },
  proxy: {
    '/api/': {
      target: 'https://credit-locus-blog.herokuapp.com',
      pathRewrite: { '^/api/': '' }
    }
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
