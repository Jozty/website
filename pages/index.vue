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
import Hero from '@/components/Hero'
export default {
  name: 'HomePage',
  components: { Hero },
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
@import 'assets/styles/buefy';
</style>
