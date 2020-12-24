<template>
  <div>
    <h1>Club Approval List</h1>
    <p v-if="$fetchState.pending">Fetching clubs..</p>
    <p v-else-if="$fetchState.error">An error occurred</p>
    <v-simple-table v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Club Name</th>
            <th class="text-left">Representative</th>
            <th class="text-left">Application Status</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in clubList" :key="item.name">
            <td>{{ item.clubName }}</td>
            <td>{{ item.name }}</td>
            <td>
              <v-chip class="ma-2" v-if="item.status == 0">Pending</v-chip>
              <v-chip class="ma-2" v-else-if="item.status == 1" color="success">Approved</v-chip>
              <v-chip class="ma-2" v-else-if="item.status == 2" color="danger">Rejected</v-chip>
            </td>
            <td>
              <v-btn color="primary" @click="loadClub(item)">See details</v-btn>
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
    const { data } = await this.$axios.get('/club')
    this.clubList = data
  },
  head() {
    return {
      title: 'IFYRD - Club List',
    }
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
