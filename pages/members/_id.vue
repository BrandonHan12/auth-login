<template>
  <v-container>
    <div>member id: {{ $route.params.id }}</div>
    <v-row dense>
      <v-col
        v-for="member in members"
        v-if="member.memberId == $route.params.id"
        :key="member.name"
        cols="10"
      >
        <v-card max-width="375" class="mx-auto">
          <v-img
            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            height="250px"
            dark
          >
            <v-row class="fill-height d-flex justify-center">
              <v-card-title
                class="white--text d-flex flex-column justify-center"
              >
                <v-list-item-avatar style="width: 120px; height: 120px">
                  <v-img :src="member.avatar" />
                </v-list-item-avatar>
                <div class="display-1 align-content-space-around">
                  {{ member.name }}
                </div>
              </v-card-title>
            </v-row>
          </v-img>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ member.contact }}</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon class="d-flex justify-center">
                <v-icon color="indigo"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>
                  {{ member.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-cake-variant</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Birthday</v-list-item-title>
                <v-list-item-subtitle>
                  {{ member.birthday }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-calendar-range</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Member Since</v-list-item-title>
                <v-list-item-subtitle>
                  {{ member.dateJoined }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // async fetch() {
  //   const { data } = await this.$axios.get('/members/' + '$route.params.id')
  //   console.log(data)
  //   this.members = data
  // },
  data() {
    return {
      members: [
        {
          memberId: '1',
          name: 'Jennifer Lee',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
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
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
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
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
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
          membershipType: '4',
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
          membershipType: '2',
          dateJoined: '10/05/10',
          subStatus: 'Active',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
