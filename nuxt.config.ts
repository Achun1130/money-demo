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
          href: '/favicon.png',
        },
      ],
    },
  },
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  elementPlus: {
    /** Options */
    importStyle: 'scss',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/abstracts/_element-plus.scss";',
        },
      },
    },
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
});