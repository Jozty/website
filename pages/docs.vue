<template>
  <div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('all', params.slug).fetch()

    return { article }
  },
}
</script>
