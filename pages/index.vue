<template>
  <div>
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  async asyncData({ $content, params }) {
    const article = await $content('index', params.slug).fetch()

    return { article }
  },

  data() {
    return {
      customIconPacks: {
        fas: {
          sizes: {
            default: '',
            'is-small': 'fa-xs',
            'is-medium': 'fa-lg',
            'is-large': 'fa-2x',
          },
        },
      },
    }
  },

  created() {
    this.$buefy.config.setOptions(this.customIconConfig)
  },
}
</script>

<style lang="scss">
@import 'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css';
.main-card {
  margin: 32px auto;
  max-width: 780px;
  border: none;
  border-radius: 16px;
  @media (max-width: 980px) {
    max-width: unset;
    margin: 32px;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  a {
    display: none;
  }
}
</style>
