<template>
  <div class="sidebar-header">
    <nuxt-link to="/">
      <img src="~assets/logo-80x80-2.png" />
    </nuxt-link>
    <div class="columns is-mobile">
      <div class="column">
        <nuxt-link to="/docs">Docs</nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/try">Try Fae</nuxt-link>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <a target="_blank" href="https://deno.land/x/fae">
          <img class="logos" src="~assets/images/deno.png" alt="logo"
        /></a>
      </div>
      <div class="column">
        <a target="_blank" href="https://github.com/Jozty/fae">
          <img class="logos" src="~assets/images/github.png" alt="logo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/styles/buefy';
.sidebar-header {
  background-color: $primary-50 !important;
  border-bottom: 2px solid $primary-200;
  padding-bottom: 16px;
  .column {
    text-align: center;
  }
  a {
    img.logos {
      width: 28px;
      height: 28px;
    }
  }
}
</style>
