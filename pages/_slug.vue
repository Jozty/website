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
  async asyncData({ $content, params }) {
    try {
      console.log(params.slug)
      const func = await $content(`functions/${params.slug}`).fetch()
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
  },
}
</script>

<style lang="scss" scoped>
.main-card {
  margin: 32px auto;
  max-width: 780px;
  border: none;
  border-radius: 16px;
  @media (max-width: 980px) {
    max-width: unset;
    margin: 32px;
  }
}
</style>
