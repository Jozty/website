import Vue from 'vue'
import {
  replaceFaeImport,
  updateIcons,
  updateTryPlaygroundLink,
} from '../utilities/noDep'

export const globalData = {
  baseUrl: 'https://fae.jozty.io',
  latestVersion: 'v0.6.2',
  versions: ['v0.6.2'],
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

  methods: {
    replaceFaeImport,
    updateIcons,
    updateTryPlaygroundLink,
  },
})
