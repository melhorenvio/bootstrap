<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    msg () {
      return `Hello ${this.name}!`
    },
    name () {
      const name = this.$route.params.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
