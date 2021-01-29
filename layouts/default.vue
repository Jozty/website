<template>
  <div>
    <b-sidebar
      :open.sync="isSideToolBarOpen"
      :overlay="true"
      :fullheight="true"
    >
      <side-bar-header />
      <client-only>
        <side-tool-box />
      </client-only>
    </b-sidebar>
    <b-navbar
      type="is-primary-50"
      class="is-fullhd"
      wrapper-class="container is-widescreen"
      :transparent="true"
      :class="{ 'border-bottom': !hasHero }"
      :mobile-burger="false"
    >
      <template slot="brand">
        <b-icon
          v-if="isMoreIconVisible"
          class="more no-select"
          icon="menu"
          @click.native="openSideBar"
        />
        <nuxt-link to="/" class="logo">
          <img src="~assets/logo-80x80-2.png" alt="logo" />
        </nuxt-link>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" to="/"> Home </b-navbar-item>
        <b-navbar-item tag="router-link" to="/docs"> Docs </b-navbar-item>
        <b-navbar-item tag="router-link" to="/playground">
          Playground
        </b-navbar-item>
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
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/layout/AppFooter'
import SideToolBox from '~/components/SideToolBox.vue'
import SideBarHeader from '~/components/SideBarHeader.vue'

export default {
  components: { AppFooter, SideBarHeader, SideToolBox },

  data() {
    return {
      hasHero: false,
      isMoreIconVisible: false,
      isSideToolBarOpen: false,
    }
  },

  watch: {
    $route() {
      this.updateClass()
    },
  },

  mounted() {
    this.updateClass()
  },

  methods: {
    updateClass() {
      this.hasHero = this.$route.path === '/'
      this.isMoreIconVisible = !this.$device.isDesktop
    },

    openSideBar() {
      this.isSideToolBarOpen = true
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/buefy';
.border-bottom {
  border-bottom: 2px solid $primary-200;
}
</style>
<style lang="scss">
@import 'assets/styles/buefy';
.sidebar-content {
  background-color: $primary-50;
}
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
