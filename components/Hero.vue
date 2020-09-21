<template>
  <div class="hero">
    <div class="typ-h1">Fae</div>
    <div class="typ-h3">A Functional Programming Library for Deno</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
@import 'assets/styles/buefy';
.hero {
  background-color: $primary-50;
  border-bottom: 2px solid $primary-200;
  padding: 64px 32px;
  text-align: center;
}
</style>
