<template>
  <v-container>
    <v-form>
      <v-row class="d-flex flex-column justify-space-between mx-auto">
        <v-col cols="8">
          <div class="banner-image-wrapper">
            <label>Image</label>
            <div v-if="imageSrc !== ''">
              <v-img
                class="image"
                :src="imageSrc"
                @click="() => this.$refs.imageRef.click()"
              />
            </div>
            <div
              v-else
              class="image-placeholder image-select d-flex justify-center align-center"
              @click="() => this.$refs.imageRef.click()"
            >
              <v-icon>mdi-upload</v-icon>
              Click here to upload
            </div>

            <div>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                ref="imageRef"
                class="d-none"
                name="image"
                @change="imageSelected"
              />
            </div>
          </div>
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
            :rules="numbersRule"
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
            :rules="numbersRule"
            outlined
            dense
            outlinedclass="mt-2"
          >
            Hourly Rate
          </v-text-field>
          <v-btn color="success" method="post" @click="submit()">
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    formData: {
      pk: '',
      sk: 'club',
      locationName: '',
      description: '',
      capacity: '',
      hourlyRates: '',
      image: '',
    },
    image: '',
    imageSrc: '',

    locationNameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    numbersRule: [
      (v) => !!v || true,
      (v) =>
        (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) ||
        'Number has to be between 0 and 999',
    ],
  }),
  methods: {
    submit() {
      this.createResource(this.formData)
    },
    async createResource(data) {
      // CMS url
      // https://bhv44oqdu7.execute-api.ap-southeast-1.amazonaws.com/dev
      try {
        const response = await this.$axios.$post('/resources', data)
        if (response) {
          const processPhotoFlag = await this.processPhotos(response)
          if (processPhotoFlag) {
            this.$router.push('/resources')
          } else {
            alert('Photo uploading failed')
          }
        }
      } catch (e) {
        console.log({ e })
        alert('Error', e)
      }
    },
    imageSelected(e) {
      try {
        const { name, files } = e.target
        this.$emit('input', files[0])
        if (name === 'image') {
          this.image = this.$refs.imageRef.files[0]
          this.formData.image = this.image.name
          this.imageSrc = URL.createObjectURL(this.image)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async processPhotos(response) {
      let isSuccesfulUpload = true
      if (response.resource_presigned_url) {
        isSuccesfulUpload = await this.uploadPhoto(
          response.resource_presigned_url,
          this.image
        )
      }
      return isSuccesfulUpload
    },
    async uploadPhoto(url, file) {
      let body = new FormData()
      body.append('file', file)
      const fileName = file.name
      const response = await fetch(url, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': 'image/' + fileName.split('.').pop().toLowerCase(),
          ACL: 'Public-Read',
        },
      })
      console.log({ response })
      return response.status === 200
    },
  },
}
</script>

<style scoped>
.image-select {
  border: 3px dashed #c8c8c8;
  border-radius: 5px;
  color: #c8c8c8;
}
.image-select:hover {
  border-color: #b1abab;
  color: #b1abab;
}
.image {
  width: 100%;
  height: 300px;
}
.image-placeholder {
  width: 100%;
  height: 300px;
}
</style>
