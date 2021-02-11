export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Credit Locus | Expanding access to small business loans across West Africa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a growing technology-as-a-service platform for SME financing across Africa.' },
      { name: 'keywords', content: 'credit, loan, SMEs, MSMEs, finance, data, big data, business, ghana loan, online loan, fast loan'},
      { name: "msapplication-TileColor", content:"#603cba" },
      { name: "msapplication-TileImage", content:"/favicon/mstile-150x150.png" },
      { name: "theme-color", content:"#ffffff" }
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon/favicon.ico' 
      }, 
      {
        rel: "mask-icon", 
        href: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: "apple-touch-icon", 
        sizes: "152x152", 
        href: "/favicon/apple-touch-icon.png"
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/DMSans/DMSans-Regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/Matter/Matter-Bold.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/Matter/Matter-Heavy.woff2',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://annular-system-303211.uc.r.appspot.com',
        crossorigin: true,
      },
    ],
    script: [{ src: '/js/index.js', body: true },],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/app.css',
    'aos/dist/aos.css',
    '~/assets/css/tinyslider.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/aos.js', ssr: false },
    { src: '~/plugins/VueFragment.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
  ],
  generate: {
    fallback: '404.html'
  },
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
    '@aceforth/nuxt-optimized-images',
  ],  

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/http','@nuxtjs/proxy','@nuxtjs/markdownit'],
  markdownit: {
    injected: true,
    html: false,
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
  },
  http: {
    proxy: true, 
    retry: true,
  },
  proxy: {
    '/api/': {
      target: 'https://annular-system-303211.uc.r.appspot.com',
      pathRewrite: { '^/api/': '' }
    }
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
