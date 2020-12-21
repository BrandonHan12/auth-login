<template>
  <div>
    <h1>Members</h1>
    <v-data-table
      :headers="headers"
      :items="members"
      :items-per-page="5"
      class="elevation-0"
    >
      <template v-slot:item.avatar="{ item }">
        <td>
          <v-list-item-avatar>
            <img :src="item.avatar" style="width: 50px; height: 50px" />
          </v-list-item-avatar>
        </td>
      </template>
      <template v-slot:item.subStatus="{ item }">
        <td>
          <v-chip
            v-if="item.subStatus == 'Active'"
            class="ml-1"
            color="green"
            outlined
          >
            {{ item.subStatus }}
          </v-chip>
          <v-chip v-else class="" outlined color="red">
            {{ item.subStatus }}
          </v-chip>
        </td>
      </template>
      <template v-slot:item.details="{ item }">
        <td>
          <v-btn color="primary" rounded @click="loadMemberDetails(item)">
            Member details
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  //   async fetch() {
  //     const { data } = await this.$axios.get('/members')
  //     this.members = data
  //   },
  head() {
    return {
      title: 'IFYRD - Members List',
    }
  },
  data() {
    return {
      page: 1,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'avatar',
        },

        { text: 'Name', value: 'name' },
        { text: 'email', value: 'email' },
        { text: 'contact Number', value: 'contact' },
        { text: 'gender', value: 'gender' },
        { text: 'member type', value: 'membershipType' },
        { text: 'sub status', value: 'subStatus' },
        { text: '', value: 'details' },
      ],
      members: [
        {
          memberId: '1',
          name: 'Jennifer Lee',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          email: 'jen@gmail.com',
          contact: '12345678',
          birthday: '12/12/80',
          gender: 'F',
          membershipType: '1',
          dateJoined: '12/12/12',
          subStatus: 'Active',
        },
        {
          memberId: '2',
          name: 'Sakuragi',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          email: 'Sakurai@hotmail.com',
          contact: '12345678',
          birthday: '12/12/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '08/10/15',
          subStatus: 'Active',
        },
        {
          memberId: '3',
          name: 'Tan Ah Kow',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          email: 'Itadori@yahoo.com',
          contact: '12345678',
          birthday: '12/12/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '30/06/17',
          subStatus: 'Inactive',
        },
        {
          memberId: '4',
          name: 'Johnson Lim',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          email: 'Jon.lim@yahoo.com',
          contact: '12345678',
          birthday: '10/02/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '10/05/10',
          subStatus: 'Inactive',
        },
        {
          memberId: '5',
          name: 'Denzel Khoo',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          email: 'Jon.lim@yahoo.com',
          contact: '12345678',
          birthday: '10/02/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '10/05/10',
          subStatus: 'Inactive',
        },
        {
          memberId: '6',
          name: 'Jeremy Lim',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          email: 'Jon.lim@yahoo.com',
          contact: '12345678',
          birthday: '10/02/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '10/05/10',
          subStatus: 'Inactive',
        },
        {
          memberId: '7',
          name: 'Kevin Lee',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          email: 'Jon.lim@yahoo.com',
          contact: '12345678',
          birthday: '10/02/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '10/05/10',
          subStatus: 'Inactive',
        },
        {
          memberId: '8',
          name: 'Olivia Chan',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          email: 'Jon.lim@yahoo.com',
          contact: '12345678',
          birthday: '10/02/80',
          gender: 'M',
          membershipType: '1',
          dateJoined: '10/05/10',
          subStatus: 'Active',
        },
      ],
    }
  },
  methods: {
    async loadMemberDetails(item) {
      this.$router.push('/members/' + item.memberId)
    },
  },
}
</script>

<style scoped></style>
