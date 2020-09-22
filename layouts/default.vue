<template>
  <div>
    <b-navbar
      type="is-primary-50"
      class="is-fullhd"
      wrapper-class="container is-widescreen"
      :class="{ 'border-bottom': !hasHero }"
    >
      <template slot="brand">
        <nuxt-link to="/">
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
  public hasHero = false
  @Watch('$route')
  updateClass() {
    this.hasHero = this.$route.path === '/'
  }

  mounted() {
    this.hasHero = this.$route.path === '/'
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/buefy';
.border-bottom {
  border-bottom: 2px solid $primary-200;
}
</style>
