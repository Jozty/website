<template>
  <div>
    <div class="columns is-gapless">
      <div class="column is-narrow">
        <side-tool-box v-if="$device.isDesktop" class="side-bar" />
      </div>
      <div class="column">
        <div class="main-card card">
          <div class="card-content">
            <nuxt-content :document="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SideToolBox from '~/components/SideToolBox.vue'
@Component({
  components: { SideToolBox },
})
export default class Docs extends Vue {
  transition() {
    return 'home'
  }

  async asyncData({ $content, params }: any) {
    const article = await $content('all', params.slug).fetch()

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
h6 {
  display: flex;
  span {
    margin-left: auto;
    font-weight: bold;
    font-size: 12px;
    a {
      display: unset;
      color: #007bff;
      font-weight: 600;
    }
    .full-docs {
      margin-right: 16px;
    }
  }
}
p {
  font-size: 16px;
}
.side-bar {
  width: 280px;
}
</style>
