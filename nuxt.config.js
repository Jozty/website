const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

export default {
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Fae | A functional Library for Deno',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/_buefy.scss', '~assets/styles/_global.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/monaco-editor', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/device',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    extendParser: {
      '.d.ts': (f) => {
        console.log(f)
        return f
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['typescript'],
        features: ['!gotoSymbol'],
      }),
    ],
  },
}
