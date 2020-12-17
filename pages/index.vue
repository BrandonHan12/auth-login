<template>
  <div>
    <v-row>
      <v-carousel
        v-model="model"
        height="80vh"
        :show-arrows="false"
        :cycle="true"
        :dark="$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
      >
        <v-carousel-item v-for="item in items" :key="item.id">
          <div class="d-flex carousel-slide justify-center align-center">
            <div>
              <h1 class="">{{ item.title }}</h1>
              <br />
              <v-btn elevation="2" color="primary">
                <nuxt-link to="/enroll/" class="text-decoration-none white--text font-weight-bold">
                  <h2>Apply Now</h2>
                </nuxt-link>
              </v-btn>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row>
      <!-- TODO: Use appropriate vue elements to center -->
      <v-col class="text-center" align-self="center" sm="12" lg="8" v-bind:style="{ margin: '0 auto' }">
        <v-row>
          <v-col>
            <v-card elevation="6" shaped tile>
              <v-card-title>Lorem ipsum dolor sit amet</v-card-title>
              <v-card-subtitle>We're with you on your journey towards infinite possibilities.</v-card-subtitle>
              <v-card-actions>
                <v-btn>
                  <nuxt-link to="enroll/process" class="text-decoration-none">Start now</nuxt-link>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="6" shaped tile>
              <v-card-title>Lorem ipsum dolor sit amet</v-card-title>
              <v-card-subtitle class="text-align-left">
                Read our FAQ page to know more about the service.
              </v-card-subtitle>
              <v-card-actions>
                <v-btn>
                  <nuxt-link to="enroll/process" class="text-decoration-none">Read now</nuxt-link>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'landing-page',
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2'],
    items: [
      {
        id: '1',
        title: 'Engage your constituents better',
      },
      {
        id: '2',
        title: 'Execute effective loyalty programs',
      },
      {
        id: '3',
        title: 'Manage your resources easily',
      },
    ],
  }),
  // mounted() {
  //   const theme = localStorage.getItem('useDarkTheme')
  //   if (theme) {
  //     if (theme == 'true') {
  //       this.$vuetify.theme.dark = true
  //     } else this.$vuetify.theme.dark = false
  //   }
  // },
}
</script>

<style scoped>
.svg {
  width: 40%;
}
.carousel-slide {
  height: 100%;
}
</style>