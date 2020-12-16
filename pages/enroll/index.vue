<template>
  <div>
    <v-row>
      <v-col>
        <h1>Let's start</h1>
        <div>Lorem ipsum dolor sit amet</div>
      </v-col>
    </v-row>

    <v-row class="flex-md-row flex-sm-column-reverse">
      <v-col md="8" sm="12">
        <v-stepper v-model="stepNum" vertical>
          <v-stepper-step :complete="stepNum > 1" step="1">
            Basic Information
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="basicInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <input-validation
                    v-model="formData.clubName"
                    label="Organization Name"
                    name="Organization Name"
                    rules="required|max:50"
                  />
                  <input-validation
                    v-model="formData.interest"
                    label="Interest"
                    name="Interest"
                    rules="required|max:50"
                  />
                  <validation-provider
                    v-slot="{ errors }"
                    name="Subdomain"
                    vid="subdomain"
                    rules="required|alpha|max:50"
                  >
                    <v-text-field
                      v-model="formData.subdomain"
                      label="Subdomain"
                      name="Subdomain"
                      :success-messages="subdomainAvailableDesc"
                      :error-messages="errors"
                      :hint="`<${formData.subdomain}>.ifyrd.com`"
                      required
                    >
                      <template v-slot:append>
                        <v-progress-circular
                          v-if="loadingCheckSubdomain == true"
                          size="24"
                          color="info"
                          indeterminate
                        ></v-progress-circular>
                        <v-btn key="check-storecode-btn" v-else @click="checkAvailabilitySubdomain()" text x-small>
                          <v-icon left>mdi-check</v-icon>
                          Check Availability
                        </v-btn>
                      </template>
                    </v-text-field>
                  </validation-provider>
                  <br />
                  <v-btn type="submit" :disabled="invalid">Next</v-btn>
                  <v-btn text>
                    <nuxt-link to="/enroll" class="text-decoration-none">Cancel</nuxt-link>
                  </v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="stepNum > 2" step="2">
            Address
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="contactInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <v-row>
                    <v-col>
                      <country-select v-model="formData.country" />
                    </v-col>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Postal Code" rules="required|numeric|min:6">
                        <!-- v-model="formData.postalCode" -->
                        <v-text-field
                          @input="searchPostal"
                          label="Postal Code"
                          name="Postal Code"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <input-validation
                        v-model="formData.addressBlock"
                        label="Address Block"
                        name="Address Block"
                        rules="required|max:25"
                      />
                    </v-col>
                    <v-col>
                      <input-validation
                        v-model="formData.addressUnit"
                        label="Address Unit"
                        name="Address Unit"
                        rules="required|max:10"
                      />
                    </v-col>
                    <v-col>
                      <input-validation
                        v-model="formData.addressRoad"
                        label="Address Road"
                        name="Address Road"
                        rules="required|max:50"
                      />
                    </v-col>
                  </v-row>
                  <v-btn type="submit" :disabled="invalid">Next</v-btn>
                  <v-btn text @click="goBack()">Previous</v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="stepNum > 3" step="3">
            Contact Information
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="contactInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <input-validation v-model="formData.name" label="Name" name="Name" rules="required" />

                  <input-validation
                    v-model="formData.phone"
                    label="Phone"
                    name="Phone"
                    rules="required|max:8|min:8|numeric"
                  />
                  <input-validation v-model="formData.email" label="Email" name="Email" rules="required|email" />
                  <br />
                  <v-btn type="submit" :disabled="invalid">Next</v-btn>
                  <v-btn text @click="goBack()">Previous</v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step step="4">
            <div>
              Club Customization
              <em>(Optional)</em>
            </div>
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="webshopInfoObserver">
                <form @submit.prevent="submit">
                  <input-validation
                    v-model="formData.bannerText"
                    label="Banner Text"
                    name="Banner Text"
                    rules="required|max:50"
                  ></input-validation>
                  <input-validation
                    v-model="formData.clubDescription"
                    label="Club Description"
                    name="Club Description"
                    hint="This will be shown to all IFYRD users"
                    rules="required|max:50"
                  ></input-validation>
                  <v-row>
                    <v-col md="5">
                      <validation-provider v-slot="{ errors }" name="Primary Color" vid="Subdomain" rules="min:7|max:7">
                        <v-text-field
                          v-model="formData.primaryColor"
                          label="Primary Color"
                          name="Primary Color"
                          :error-messages="errors"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col md="1" class="d-flex align-center">
                      <input type="color" v-model="formData.primaryColor" />
                    </v-col>
                    <v-col md="5">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Secondary Color"
                        vid="secondaryColor"
                        rules="min:7|max:7"
                      >
                        <v-text-field
                          v-model="formData.secondaryColor"
                          label="Secondary Color"
                          name="Secondary Color"
                          :error-messages="errors"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col md="1" class="d-flex align-center">
                      <input type="color" v-model="formData.secondaryColor" />
                    </v-col>
                  </v-row>
                  <div class="banner-image-wrapper">
                    <label>Banner Image</label>
                    <div v-if="bannerSrc !== ''">
                      <img class="banner" :src="bannerSrc" @click="() => this.$refs.bannerRef.click()" />
                    </div>
                    <div
                      v-else
                      class="banner-placeholder image-select d-flex justify-center align-center"
                      @click="() => this.$refs.bannerRef.click()"
                    >
                      <v-icon>mdi-upload</v-icon>
                      Click here to upload
                    </div>

                    <div>
                      <input
                        type="file"
                        accept="image/jpg, image/jpeg, image/png"
                        ref="bannerRef"
                        class="d-none"
                        name="banner"
                        @change="imageSelected"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="d-flex">
                    <div class="banner-image-wrapper">
                      <label>Club Logo (50x50)</label>
                      <div v-if="iconSrc !== ''">
                        <img class="icon" :src="iconSrc" @click="() => this.$refs.iconRef.click()" />
                      </div>
                      <div
                        v-else
                        class="icon-placeholder image-select d-flex justify-center align-center"
                        @click="() => this.$refs.iconRef.click()"
                      >
                        <v-icon>mdi-upload</v-icon>
                      </div>
                      <div>
                        <input
                          type="file"
                          accept="image/jpg, image/jpeg, image/png"
                          ref="iconRef"
                          class="d-none"
                          name="icon"
                          @change="imageSelected"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <v-progress-circular
                    v-if="loadingCreateWebshop == true"
                    size="24"
                    color="info"
                    indeterminate
                  ></v-progress-circular>
                  <v-btn v-else type="submit">Create</v-btn>
                  <v-btn text @click="goBack()">Previous</v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-col>
      <v-col md="4" sm="12" class="d-flex justify-center align-center">
        <img :src="basicInfoSvg" class="svg" v-if="stepNum === 1" />
        <img :src="contactInfoSvg" class="svg" v-else-if="stepNum === 2" />
        <img :src="primaryContactSvg" class="svg" v-else-if="stepNum === 3" />
        <img :src="webshopInfoSvg" class="svg" v-else-if="stepNum === 4" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import CountrySelect from '@/components/CountrySelect'
import IndustrySelect from '@/components/IndustrySelect'
import InputValidation from '@/components/InputValidation'

import _debounce from 'lodash/debounce'
import axios from '@nuxtjs/axios'

const ONEMAP_API = 'https://developers.onemap.sg/commonapi/search?returnGeom=Y&getAddrDetails=Y&searchVal='

export default {
  layout: 'landing-page',
  components: {
    ValidationObserver,
    ValidationProvider,
    CountrySelect,
    IndustrySelect,
    InputValidation,
  },
  data: () => ({
    stepNum: 1,
    formData: {
      clubName: 'cuervo golf club',
      interest: 'Sports',
      subdomain: 'cuervogc',

      addressBlock: '',
      addressRoad: '',
      addressUnit: '',
      country: '',
      postalCode: '',
      phone: '',
      email: '',

      primaryColor: '',
      secondaryColor: '',
      banner: '',
      icon: '',
    },
    icon: '',
    banner: '',
    bannerSrc: '',
    iconSrc: '',
    subdomainAvailableDesc: [],
    loadingCheckSubdomain: false,
    loadingCreateWebshop: false,
    basicInfoSvg: require('@/assets/svg/svg-basic-info.svg'),
    contactInfoSvg: require('@/assets/svg/svg-contact-info.svg'),
    primaryContactSvg: require('@/assets/svg/svg-primary-contact.svg'),
    webshopInfoSvg: require('@/assets/svg/svg-webshop-info.svg'),
  }),

  methods: {
    goBack() {
      this.stepNum--
    },
    goNext(test) {
      console.log({ test })
      this.stepNum++
    },

    submit() {
      this.createTenant(this.formData)
    },

    async createTenant(data) {
      const subdomain = this.checkAvailabilitySubdomain
      if (!this.checkAvailabilitySubdomain) {
        this.stepNum = 1
        return
      }
      return
      if (data.icon === '') delete data.icon
      if (data.banner === '') delete data.banner

      try {
        this.loadingCreateWebshop = true
        const response = await this.$axios.$post('/club', data)
        if (response) {
          const processPhotoFlag = await this.processPhotos(response)
          this.loadingCreateWebshop = false
          if (processPhotoFlag) {
            this.$router.push('/enroll/success')
          } else {
            alert('Photo uploading failed')
          }
        }
      } catch (e) {
        this.loadingCreateWebshop = false
        console.log({ e })
        alert('Error', e)
      }
    },

    async processPhotos(response) {
      let isSuccesfulUpload = true
      if (response.banner_presigned_url) {
        isSuccesfulUpload = await this.uploadPhoto(response.banner_presigned_url, this.banner)
      }
      if (response.icon_presigned_url) {
        isSuccesfulUpload = await this.uploadPhoto(response.icon_presigned_url, this.icon)
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

    searchPostal: _debounce(function (input) {
      if (this.formData.country === 'Singapore') this.fetchAddressByPostalCode(input)
      else this.formData.postalCode = input
    }, 1000),

    autoFillAddress(data) {
      this.formData.addressBlock = data.BLK_NO
      this.formData.addressRoad = data.ROAD_NAME + ', ' + data.BUILDING
      this.formData.country = 'Singapore'
      this.formData.postalCode = data.POSTAL
    },

    async fetchAddressByPostalCode(postalCode) {
      try {
        const data = await this.$axios.$get(ONEMAP_API + postalCode)
        console.log(data)
        if (data.found > 0) {
          this.autoFillAddress(data.results[0])
        }
      } catch (e) {
        console.log('There was an error trying to fetch the postal code address', e)
      }
    },

    async checkAvailabilitySubdomain() {
      this.loadingCheckSubdomain = true

      if (this.formData.subdomain === '') {
        this.subdomainAvailableDesc = []
        this.loadingCheckSubdomain = false
        this.$refs.basicInfoObserver.setErrors({ subdomain: ['Please provide a subdomain first'] })
        return false
      }

      try {
        const response = await this.$axios.$get('/club/subdomain/check?subdomain=' + this.formData.subdomain)
        console.log({ response })
        if (response.exists) {
          this.subdomainAvailableDesc = []
          this.loadingCheckSubdomain = false
          this.$refs.basicInfoObserver.setErrors({ subdomain: ['The subdomain has already been taken.'] })
          return false
        } else {
          this.$refs.basicInfoObserver.setErrors({ subdomain: [] })
          this.subdomainAvailableDesc = ['This subdomain is available']
          this.loadingCheckSubdomain = false
          return true
        }
      } catch (e) {
        console.log('Error on subdomain checking ->', e)
      }
    },

    imageSelected(e) {
      try {
        const { name, files } = e.target
        this.$emit('input', files[0])
        if (name === 'banner') {
          this.banner = this.$refs.bannerRef.files[0]
          this.formData.banner = this.banner.name
          this.bannerSrc = URL.createObjectURL(this.banner)
        } else if (name === 'icon') {
          this.icon = this.$refs.iconRef.files[0]
          this.formData.icon = this.icon.name
          this.iconSrc = URL.createObjectURL(this.icon)
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.svg {
  width: 80%;
  margin: 0 auto;
}
.banner {
  width: 300px;
  height: 150px;
}
.icon {
  width: 50px;
  height: 50px;
  color: #c8c8c8;
}
.image-select {
  border: 3px dashed #c8c8c8;
  border-radius: 5px;
  color: #c8c8c8;
}
.image-select:hover {
  border-color: #b1abab;
  color: #b1abab;
}
.banner-placeholder {
  height: 150px;
  width: 300px;
}
.icon-placeholder {
  height: 50px;
  width: 50px;
}
</style>