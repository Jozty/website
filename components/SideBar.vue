<template>
  <div
    class="side-bar is-primary-50"
    :class="{ sticky: isSticky }"
    :style="{ height }"
  >
    <input v-model="searchQuery" />
    <div class="typ-h3">Functions</div>
    <div v-for="(func, i) in functions" :key="i">
      {{ func }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'

@Component
export default class SideBar extends Vue {
  @Prop({ default: true }) readonly isSticky = true

  public windowHeight: number
  public posY: number
  public functions: string[] = []
  public searchQuery = ''

  constructor() {
    super()
    if (!process.client) {
      this.windowHeight = 0
      this.posY = 0
    } else {
      this.windowHeight = window && window.innerHeight
      this.posY =
        document.querySelector('.side-bar')?.getBoundingClientRect().y || 0
    }
  }

  @Watch('searchQuery')
  onSearch() {
    this.getFunctions(this.searchQuery)
  }

  get height() {
    if (process.client) {
      return this.windowHeight - this.posY + 'px'
    }
    return '100%'
  }

  async mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('scroll', this.onScroll)
    })

    await this.getFunctions('')
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
  }

  async getFunctions(searchQuery: string) {
    const functionsData = await this.$content('functions').fetch()
    const functions: string[] = functionsData.map((f: any) => f.slug)
    if (!searchQuery) {
      this.functions = functions
    } else {
      this.functions = functions.filter((f) => f.includes(searchQuery))
    }
  }

  onResize() {
    this.windowHeight = window && window.innerHeight
  }

  onScroll() {
    this.posY =
      document.querySelector('.side-bar')?.getBoundingClientRect().y || 0
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/buefy';
.side-bar {
  background-color: $primary-50;
  color: #111111;
  border-right: 2px solid $primary-200;
  padding: 16px;
  &.sticky {
    position: sticky;
    top: 0;
  }
}
</style>
