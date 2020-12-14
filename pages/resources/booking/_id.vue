<template>
  <div>
    <h1>hello</h1>
    {{ this.$router.params }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$router.id,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
