<template>
  <validation-provider v-slot="{ errors }" name="Industry" rules="required">
    <v-select
      name="Industry"
      :items="industrySelect"
      label="Industry"
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
import { getIndustries } from '@/assets/flatFile'

export default Vue.extend({
  name: 'industry-select',
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
    industrySelect: [],
  }),
  methods: {
    handleChange(event) {
      this.$emit('input', event)
    },
  },
  async mounted() {
    const industrySelect = await getIndustries()
    this.industrySelect = industrySelect
  },
})
</script>