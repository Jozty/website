<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary-300"
      role="navigation"
      aria-label="main navigation"
    >
      <img src="~assets/logo-80x80-2.png" />
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>
