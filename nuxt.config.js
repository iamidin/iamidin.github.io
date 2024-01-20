// const LANG = 'id_ID';
// const TYPE = 'website';
// const URL = 'https://iamidin.github.io';
// const SITE_NAME = 'iamidin.github.io';

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
    'nuxt-icons',
  ],

  buildModules: [
    '@nuxtjs/pwa',
  ],

  gtag: {
    id: 'GTM-MNWF6DWS',
  },

  target: 'static',

  srcDir: './src',

  runtimeConfig: {
    public: {
      yourEnv: process.env.YOUR_ENV,
    },
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],

  app: {
    baseURL: '',
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'HandheldFriendly',
          content: 'True',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://iamidin.github.io',
          // href: `https://iamidin.github.io/articles/${this.$route.params.slug}`,
        },
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  headlessui: {
    prefix: 'Headless',
  },

  css: [
    '~/assets/css/main.scss',
  ],

  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },

  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  devtools: {
    enabled: false,
  },

  devServer: {
    port: process.env.PORT,
  },
});
