import Vue from 'vue'

const globalData = {
  baseUrl: 'https://fae.jozty.io',
  latestVersion: 'test',
  versions: ['v0.6.2', 'test'],
}

Vue.mixin({
  data() {
    return {
      ...globalData,
    }
  },
  computed: {
    isDev() {
      return process.env.NODE_ENV === 'development'
    },
  },
})
