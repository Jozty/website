<template>
  <div>
    <b-navbar
      type="is-primary-50"
      class="is-fullhd"
      wrapper-class="container is-widescreen"
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
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {}
</script>
