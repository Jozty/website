<template>
  <div>
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="func" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition() {
    return 'home'
  },

  async asyncData({ $content, params }) {
    try {
      const func = await $content(
        `${params.elementType}/${params.elementName}`
      ).fetch()
      return { func }
    } catch (e) {
      console.error(e)
      const func = await $content(`error`).fetch()
      return { func }
    }
  },

  mounted() {
    document.querySelectorAll('.icon').forEach((e) => {
      e.className = e.className.replace(/icon/g, 'fa')
    })

    const { elementType, elementName } = this.$route.params

    this.$gtm.push({
      event: 'page',
      route: `${elementType}/${elementName}`,
    })
  },
}
</script>

<style lang="scss" scoped></style>
