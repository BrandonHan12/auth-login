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
          name: 'Syion Test Club',
          ClubId: '186a7d0a3ab811eba0b8d16301237726',
          app_status: 'pending',
        },
        {
          name: 'Shohoku',
          ClubId: '76deb0873aa511eb9baa177712c929d6',
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

<style scoped>
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:last-child,
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:last-child {
  border: none;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border: none;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  border: none;
}
</style>
