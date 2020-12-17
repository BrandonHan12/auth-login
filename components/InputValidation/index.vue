<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
    <v-text-field
      :value="value"
      :label="label"
      :hint="hint"
      :error-messages="errors"
      @input="handleInput"
      required
    ></v-text-field>
  </validation-provider>
</template>

<script>
import Vue from 'vue'
import { ValidationProvider } from 'vee-validate'

export default Vue.extend({
  name: 'validated-input',
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: false,
    },
    rules: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event)
    },
  },
})
</script>