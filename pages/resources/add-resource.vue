<template>
  <v-container grid-list-xs>
    <v-form>
      <v-row class="d-flex flex-column justify-space-between mx-auto">
        <v-col cols="8">
          <v-img v-model="formData.imageUrl" :src="this.formData.imageUrl" />
          <v-text-field
            validate-on-blur
            v-model="formData.imageUrl"
            name="imageUrl"
            label="imageUrl"
            outlined
            dense
            class="mt-2"
          ></v-text-field>
          <v-text-field
            validate-on-blur
            v-model="formData.locationName"
            name="locationName"
            label="locationName"
            :rules="locationNameRules"
            :counter="20"
            outlined
            dense
            class="mt-2"
          >
            Location
          </v-text-field>
          <v-file-input
            chips
            outlined
            dense
            show-size
            small-chips
            disabled
            truncate-length="40"
            label="locationImage"
          >
          </v-file-input>
          <v-textarea
            v-model="formData.description"
            name="Description"
            label="Description"
            outlined
            dense
            hide-details
          >
            Description
          </v-textarea>
          <v-text-field
            v-model="formData.capacity"
            name="maxCapacity"
            label="maxCapacity"
            outlined
            dense
            class="mt-3"
          >
            Max Capacity/Pax
          </v-text-field>
          <v-text-field
            v-model="formData.hourlyRates"
            name="Hourly"
            label="hourlyRate"
            outlined
            dense
            outlinedclass="mt-2"
          >
            Hourly Rate
          </v-text-field>
          <v-btn color="error" method="post" @click="onSubmit()"> text </v-btn>
          {{ this.formData }}
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    formData: {
      locationName: '',
      description: '',
      capacity: '',
      hourlyRates: '',
      imageUrl: '',
    },
    locationNameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
  }),
  methods: {
    onSubmit(formData) {
      console.log(this.formData)
    },
    imageUploadToS3() {
      //axios post to s3
      //then catch response
      //response to imageurl
    },
  },
}
</script>

<style scoped></style>
