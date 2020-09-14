<template>
  <div>
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  async asyncData({ $content, params }) {
    const article = await $content('index', params.slug).fetch()

    return { article }
  },
  mounted() {
    document.querySelectorAll('.icon').forEach((e) => {
      e.className = e.className.replace(/icon/g, 'fa')
    })
  },
}
</script>

<style lang="scss">
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
