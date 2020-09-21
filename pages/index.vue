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

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Hero from '~/components/Hero.vue'

@Component({
  components: {
    Hero,
  },
})
export default class HomePage extends Vue {
  transition() {
    return 'home'
  }

  async asyncData({ $content, params }: any) {
    const article = await $content('index', params.slug).fetch()

    return { article }
  }

  mounted() {
    document.querySelectorAll('.icon').forEach((e) => {
      e.className = e.className.replace(/icon/g, 'fa')
    })
  }
}
</script>

<style lang="scss">
@import 'assets/styles/buefy';
</style>
