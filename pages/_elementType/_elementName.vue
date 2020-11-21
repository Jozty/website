<template>
  <div>
    <div class="main-card card">
      <div class="card-content">
        <nuxt-content :document="func" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition() {
    return 'home'
  },

  async asyncData({ $content, params }) {
    try {
      const func = await $content(
        `${params.elementType}/${params.elementName}`
      ).fetch()
      return { func }
    } catch (e) {
      console.error(e)
      const func = await $content(`error`).fetch()
      return { func }
    }
  },

  data() {
    return {
      title: 'Fae | A functional Library for Deno',
      description: '',
      keywords: 'Fae, Deno, Ramda, Javascript'
    }
  },

  mounted() {
    document.querySelectorAll('.icon').forEach((e) => {
      e.className = e.className.replace(/icon/g, 'fa')
    })

    const { elementType, elementName } = this.$route.params

    this.$gtm.push({
      event: 'page',
      route: `${elementType}/${elementName}`,
    })
  },

  head() {
    const title = this.func?.title ? `Fae | ${this.func?.title}` : this.title
    const description = this.func?.description || this.description
    let keywords = this.keywords
    if (this.func?.keywords)
      keywords = this.func?.keywords +','+ keywords
     
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keywords,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
