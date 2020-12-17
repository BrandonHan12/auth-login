<template>
  <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark">
    <!-- NOTE: fix to be dependent on state, when toggleTheme is already working -->
    <!-- {{ $vuetify.theme.dark ? <v-icon>mdi-weather-sunny</v-icon> :
        <v-icon>mdi-weather-night</v-icon> }} Theme -->
    <span v-if="$vuetify.theme.dark">
      <v-icon>mdi-weather-sunny</v-icon>
    </span>
    <span v-else>
      <v-icon>mdi-weather-night</v-icon>
    </span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'theme-button',
})
</script>