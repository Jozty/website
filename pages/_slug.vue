<template>
  <div>
    <nuxt-content :document="func" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const func = await $content(`functions/${params.slug || 'error'}`).fetch()
      return { func }
    } catch (e) {
      const func = await $content(`error`).fetch()
      return { func }
    }
  },
}
</script>

<style scoped></style>
