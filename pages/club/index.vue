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
          <tr v-for="item in clubList" :key="item.name">
            <td>{{ item.name }}</td>
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
export default {
  async fetch() {
    this.clubList = await this.$axios.get('club')
  },
  middleware: 'auth',
  data() {
    return {
      formData: {
        name: '',
      },
      clubList: [],
    }
  },

  methods: {
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
