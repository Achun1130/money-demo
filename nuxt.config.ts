// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '有錢能使鬼推 Code',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `${process.env.NODE_ENV === 'production' ? '/money-demo/' : '/'}favicon.png`,
        },
        // material-icons from google icon
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        // material-icons-outlined from google icon
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
        },
      ],
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/money-demo/' : '/',
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  elementPlus: {
    /** Options */
    importStyle: 'scss',
  },
  typescript: {
    typeCheck: true,
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'zh-tw',
        file: 'zh-tw.json',
      },
    ],
    defaultLocale: 'zh-tw',
    strategy: 'no_prefix',
  },
  runtimeConfig: {
    public: {
      apiServer: process.env.NUXT_PUBLIC_API_SERVER,
      useFakeData: process.env.NUXT_PUBLIC_USE_FAKE_DATA,
      imgur: {
        clientId: process.env.NUXT_PUBLIC_IMGUR_CLIENT_ID,
      },
    },
  },
  plugins: ['~/plugins/http'],
});
