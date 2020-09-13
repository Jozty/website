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
  async asyncData({ $content, params }) {
    const article = await $content('all', params.slug).fetch()

    return { article }
  },
}
</script>

<style lang="scss">
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
h3 {
  display: flex;
  span {
    margin-left: auto;
    font-weight: bold;
    font-size: 12px;
    a {
      display: unset;
      color: #007bff;
      font-weight: 600;
    }
    .full-docs {
      margin-right: 16px;
    }
  }
}
pre.language-typescript {
  border-radius: 4px;
  font-size: 12px;
  margin: 8px 0;
}
p {
  font-size: 16px;
}
code {
  border-radius: 2px;
}
</style>
