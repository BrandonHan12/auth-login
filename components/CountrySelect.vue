<template>
  <validation-provider v-slot="{ errors }" name="Country" rules="required">
    <v-select
      name="Country"
      :items="countrySelect"
      item-text="name"
      label="Country"
      :error-messages="errors"
      @change="handleChange"
      :value="value"
      clearable
      required
    ></v-select>
  </validation-provider>
</template>

<script>
import Vue from 'vue'
import { ValidationProvider } from 'vee-validate'
import { getCountries } from '@/assets/flatFile'

export default Vue.extend({
  name: 'country-select',
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    countrySelect: [],
  }),
  methods: {
    handleChange(event) {
      this.$emit('input', event ?? '')
    },
  },
  async mounted() {
    const countrySelect = await getCountries()
    this.countrySelect = countrySelect
  },
})
</script>