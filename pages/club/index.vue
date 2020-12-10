<template>
  <div>
    <h1>Club Approval List</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Application Status</th>
            <th class="text-left">View More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getclublist" :key="item.name">
            <td v-model="formData.name">{{ item.name }}</td>
            <td>{{ item.app_status }}</td>
            <td>
              <v-btn color="primary" @click="loadClub(item)">
                view more details
                <v-icon>mdi-view-list</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        name: '',
      },
      getclublist: [
        {
          name: 'chess club',
          ClubId: '0443f93e390e11eb89f0277f6f2ce07e',
          app_status: true,
        },
        {
          name: 'tennis club',
          ClubId: '0451f93e390e11eb89f0277f6f2ce07e',
          app_status: 'pending',
        },
        {
          name: 'swimming club',
          ClubId: '0467f93e390e11eb89f0277f6f2ce07e',
          app_status: 'pending',
        },
      ],
    }
  },

  methods: {
    formdetails(formData) {
      console.log(formData.name)
      console.log(formData.app_status)
    },
    //approval/rejection function
    async loadClub(formData) {
      this.$router.push('/club/' + formData.ClubId)
      console.log(formData.name)
    },
  },
}
</script>

<style scoped></style>
