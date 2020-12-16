<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>
        <nuxt-link to="/" class="text-decoration-none black--text">IFYRD</nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <theme-button />
      <span :key="getRoutePath()">
        <v-btn color="primary" v-if="isInEnrollProcess()">
          <nuxt-link to="/enroll/" class="text-decoration-none white--text">Get Started</nuxt-link>
        </v-btn>
      </span>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>IFYRD&nbsp;</span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import ThemeButton from '@/components/ThemeButton'
export default {
  name: 'landing-page',
  components: {
    ThemeButton,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-account-supervisor',
          title: 'Tenants',
          to: '/tenant',
        },
        {
          icon: 'mdi-domain',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-card-account-phone',
          title: 'Contact Us',
          to: '/contact-us',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Webshop',
    }
  },
  methods: {
    isInEnrollProcess() {
      return this.getRoutePath() !== '/enroll/process'
    },
    getRoutePath() {
      return this.$router.history.current['path']
    },
  },
}
</script>

<style scoped>
.page-logo {
  height: 50px;
}
.border {
  border: 1px dashed #000;
  box-sizing: border-box;
}
</style>