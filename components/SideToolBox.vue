<template>
  <div
    class="side-bar is-primary-50"
    :class="{ sticky: isSticky }"
    :style="{ height }"
  >
    <div ref="searchBox" class="search-box">
      <b-field label="Search" type="is-secondary">
        <b-input v-model="searchQuery"></b-input>
      </b-field>

      <b-field type="is-secondary">
        <b-select placeholder="version" expanded>
          <option value="v0.6.2" selected>v0.6.2</option>
        </b-select>
      </b-field>
    </div>

    <ul class="functions-list" :style="{ height: listHeight }">
      <div class="typ-h2">Functions</div>
      <li v-for="(func, i) in functions" :key="i">
        <nuxt-link :to="{ path: '/docs', hash: func.toLowerCase() }">{{
          func
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isSticky: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      windowHeight: null,
      posY: null,
      functions: [],
      fetchedFunctions: [],
      searchQuery: '',
      listHeight: 'calc(100% - 116px)',
      height: '100%',
    }
  },

  watch: {
    searchQuery() {
      this.onQueryChange()
    },
  },

  async mounted() {
    if (process) {
      this.windowHeight = 0
      this.posY = 0
    } else {
      this.onResize()
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
        window.addEventListener('scroll', this.onScroll)
      })
      // @ts-ignore
      this.listHeight = `calc(100% - ${this.$refs.searchBox.scrollHeight}px)`
    }

    await this.getFunctions('')
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    async getFunctions(searchQuery) {
      // @ts-ignore
      const entitiesData = await this.$content('entitiesList').fetch()
      this.fetchedFunctions = entitiesData.functions
      this.onQueryChange()
    },

    onQueryChange() {
      this.searchQuery = this.searchQuery.trim().toLowerCase()

      if (!this.searchQuery) {
        this.functions = [...this.fetchedFunctions]
      } else {
        this.functions = this.fetchedFunctions.filter((f) =>
          f.toLowerCase().includes(this.searchQuery)
        )
      }
    },

    onResize() {
      this.windowHeight = window && window.innerHeight
      this.posY =
        document.querySelector('.side-bar')?.getBoundingClientRect().y || 0
      this.height = this.windowHeight - this.posY + 'px'
    },

    onScroll() {
      this.onResize()
    },
  },
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
.search-box {
  margin-bottom: 16px;
}
.functions-list {
  height: calc(100% - 72px);
  overflow-y: scroll;
  border-top: 2px solid $primary-200;
  margin: 8px -16px 16px;
  padding: 12px 0 12px 16px;
  li {
    padding-left: 8px;
  }
  a {
    color: $text;
    &:hover {
      color: lighten($text, 10);
    }
  }
}
</style>
<style lang="scss">
@import 'assets/styles/buefy';
.b-sidebar {
  .side-bar {
    width: unset !important;
    height: unset !important;
    position: unset !important;
    top: unset !important;
  }
  .sidebar-content {
    background-color: $primary-50;
  }
}
</style>
