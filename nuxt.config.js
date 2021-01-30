import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'
import { entityPaths } from './buildUtils/build'

const description = `
This module is designed in functional programming style that provides many benefits
like it never mutates user data and used to create functional pipelines.
Using this module is very simple just like using the javascript functions.
Insallation guide is given below.
Follow simple steps to use the module.
`

export default {
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Fae | A functional programming library for Deno',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css',
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
  plugins: [
    { src: '~plugins/monaco-editor', ssr: false },
    { src: '~plugins/client', ssr: false },
    '~plugins/global-mixin',
    '~plugins/buefy',
  ],
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
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/device',
    'nuxt-clipboard2',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    extendParser: {
      '.d.ts': (f) => {
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
    extractCSS: true,
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    },
  },

  serverMiddleware: [
    { path: '/api/run', handler: '~/api/run.js' },
    { path: '/api/createDl', handler: '~/api/createDL.js' },
    { path: '/api/health', handler: '~/api/health.js' },
    { path: '/api/declaration', handler: '~/api/declaration.js' },
  ],

  server: {
    port: 8080,
    host: '0.0.0.0',
    timing: true,
  },

  axios: {
    // proxyHeaders: false,
    baseURL: '/',
  },

  gtm: {
    id: 'GTM-M2SJFR5',
  },

  sitemap: {
    hostname: 'https://fae.jozty.io',
    gzip: true,
    routes() {
      return entityPaths.map((url) => ({
        url,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date(),
      }))
    },
  },
}
