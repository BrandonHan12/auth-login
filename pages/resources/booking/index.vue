<template>
  <div>
    <v-btn @click="check"
      ><nuxt-link to="'/resources/booking/'+this.res"></nuxt-link> submit
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params,
    }
  },
  methods: {
    async check(params, query, req, res, redirect, error) {
      res = 'asdf'
      await this.$axios.post('/resources/booking/', res)
      console.log('posted')
    },
  },
}
</script>

<style lang="scss" scoped></style>
