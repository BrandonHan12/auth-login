<template>
  <div>
    <p>hi {club}</p>
  </div>
</template>

<script>
export default {
  async fetch() {
    const club = await this.$axios.$get(
      'https://xg4tq1q1a0.execute-api.ap-southeast-1.amazonaws.com/dev/club'
    )

    return { club }
  },
  data: () => ({}),
  methods: {},
}
</script>

<style scoped></style>
