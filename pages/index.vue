<template>
  <div>
    <hero />
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero,
  },

  transition() {
    return 'home'
  },

  async asyncData({ $content, params }) {
    const article = await $content('index', params.slug).fetch()

    return { article }
  },

  mounted() {
    this.updateIcons()

    this.$gtm.push({
      event: 'page',
      route: `/`,
    })
  },
}
</script>

<style lang="scss">
@import 'assets/styles/buefy';
</style>
