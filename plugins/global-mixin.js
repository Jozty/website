import Vue from 'vue'
import { updateIcons, updateTryPlaygroundLink } from '../utilities/noDep'
import { globalData } from './global-data'

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
    updateIcons,
    updateTryPlaygroundLink,
  },
})
