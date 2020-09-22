<template>
  <div>
    <b-navbar
      type="is-primary-50"
      class="is-fullhd"
      wrapper-class="container is-widescreen"
      :transparent="true"
      :class="{ 'border-bottom': !hasHero }"
    >
      <template slot="brand">
        <!--        <b-icon-->
        <!--          v-if="isMoreIconVisible"-->
        <!--          class="more"-->
        <!--          icon="dots-vertical"-->
        <!--          @click.native="toggleSideToolBox"-->
        <!--        />-->
        <nuxt-link to="/" class="logo">
          <img src="~assets/logo-80x80-2.png" alt="logo" />
        </nuxt-link>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" to="/"> Home </b-navbar-item>
        <b-navbar-item tag="router-link" to="/docs"> Docs </b-navbar-item>
        <b-navbar-item tag="a" target="_blank" href="https://deno.land/x/fae">
          <img src="~assets/images/deno.png" alt="logo" />
        </b-navbar-item>
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://github.com/Jozty/fae"
        >
          <img src="~assets/images/github.png" alt="logo" />
        </b-navbar-item>
      </template>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  isSideToolBoxOpen = false
  hasHero = false
  isMoreIconVisible = false

  @Watch('$route')
  updateClass() {
    this.hasHero = this.$route.path === '/'
    this.isMoreIconVisible =
      // @ts-ignore
      !this.$device.isDesktop && this.$route.path === '/docs'
  }

  mounted() {
    this.updateClass()
  }

  toggleSideToolBox() {
    this.isSideToolBoxOpen = !this.isSideToolBoxOpen
    this.$nuxt.$emit('toggleSideToolBox', this.isSideToolBoxOpen)
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/buefy';
.border-bottom {
  border-bottom: 2px solid $primary-200;
}
</style>
<style lang="scss">
.navbar {
  align-items: center;
  a {
    align-self: center;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-left: 8px;
    @media (min-width: 1024px) {
      margin-left: 16px;
    }
  }
  &-brand {
    align-items: center !important;
    .more {
      display: flex;
      align-items: center;
      margin-left: 16px;
      cursor: pointer;
    }
  }
  &-menu {
    box-shadow: none !important;
    background: transparent !important;
    a.navbar-item {
      text-align: center;
    }
  }
}
</style>
