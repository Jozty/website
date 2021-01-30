<template>
  <footer class="footer">
    <div class="container is-widescreen content has-text-centered">
      <strong>Fae</strong> by <a href="https://github.com/Jozty/">Jozty</a>.
      <br />
      The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>

      <div class="level links">
        <div class="level-item"><nuxt-link to="/">Home</nuxt-link></div>
        <div class="level-item"><nuxt-link to="/docs">Docs</nuxt-link></div>
        <div class="level-item">
          <nuxt-link to="/playground">Playground</nuxt-link>
        </div>
      </div>

      <div class="level badges">
        <div class="level-item">
          <img
            src="https://www.codefactor.io/repository/github/jozty/fae/badge"
            alt="code-factor"
          />
        </div>
        <div class="level-item">
          <img
            src="https://img.shields.io/github/v/release/jozty/fae"
            alt="latest-release"
          />
        </div>
        <div class="level-item">
          <img
            src="https://img.shields.io/github/workflow/status/jozty/fae/Tests?label=tests"
            alt="tests"
          />
        </div>
        <div class="level-item">
          <img
            src="https://img.shields.io/github/license/jozty/fae"
            alt="MIT"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/buefy';
.footer {
  background-color: $primary-50;
  border-top: 2px solid $primary-200;
  text-align: center;

  .links {
    max-width: 30rem;
    margin: 1rem auto auto;
  }

  .badges {
    max-width: 35rem;
    margin: 2rem auto auto;
  }
}
</style>
