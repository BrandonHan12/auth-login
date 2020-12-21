<template>
  <div>
    <h1>hello</h1>
    {{ this.$route.params.id }}

    <v-btn color="warning" to="/resources/booking"
      >back to bookings list <v-icon>mdi-backspace</v-icon></v-btn
    >
    <v-btn color="error" to="/resources"
      >back to bookings list <v-icon>mdi-backspace</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
