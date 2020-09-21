<template>
  <div>
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="func" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Slug extends Vue {
  transition() {
    return 'home'
  }

  async asyncData({ $content, params }: any) {
    try {
      const func = await $content(`functions/${params.slug}`).fetch()
      return { func }
    } catch (e) {
      console.error(e)
      const func = await $content(`error`).fetch()
      return { func }
    }
  }

  mounted() {
    document.querySelectorAll('.icon').forEach((e) => {
      e.className = e.className.replace(/icon/g, 'fa')
    })
  }
}
</script>

<style lang="scss" scoped></style>
