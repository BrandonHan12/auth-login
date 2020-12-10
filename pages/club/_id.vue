<template>
  <v-container fluid>
    <h1>id:{{ $route.params.id }}</h1>
    <v-card max-width="80%" justify-between class="mx-auto my-12">
      <v-card-title primary-title> </v-card-title>
      <v-row>
        <v-col cols="10" class="mx-auto">
          <v-img :src="club.banner" />
          <v-card-text>
            <v-simple-table>
              <tbody>
                <tr>
                  <td>Icon</td>
                  <td>
                    <v-img :src="club.icon" height="50" width="50" />
                  </td>
                </tr>
                <tr>
                  <td>Club Name</td>
                  <td>
                    {{ club.organizationName }}
                  </td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>
                    {{ club.officePhone }}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    {{ club.officeEmail }}
                  </td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>
                    {{ club.subdomain }}.<span style="color: red"
                      ><i>ifyrd.com</i></span
                    >
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    {{ club.addressBlock }} {{ club.addressRoad }}<br />
                    {{ club.addressUnit }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-col col="12" class="d-flex justify-end pt-10 pr-0">
              <v-btn
                color="success"
                class="mr-2"
                type="post"
                @click="clubDetails(club)"
              >
                Approve
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn color="error" type="post">
                Reject
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="secondary" to="/club">
          back
          <v-icon>mdi-backspace-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      club: {
        organizationName: 'cuervo golf club',
        clubDescription: '321',
        officeEmail: 'hello@razorbros.com',
        officePhone: '88888888',
        country: 'Afghanistan',
        subdomain: 'cuervogc',
        icon: 'https://via.placeholder.com/45',
        banner: 'https://via.placeholder.com/468x90?text=468x90+Full+Banner',
        addressRoad: 'TELOK BLANGAH CRESCENT, MOUNT FABER VIEW',
        addressUnit: '#02-36',
        addressBlock: '24',
        postalCode: '159949',
        // primaryColor: 'fb9000',
        interest: 'Sports',
        ClubId: '0443f93e390e11eb89f0277f6f2ce07e',
        // bannerText: '123',
        // secondaryColor: '009000',
      },
    }
  },
  methods: {
    clubDetails(club) {
      console.log(club)
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
  border-bottom: none;
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
  border-bottom: none;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding-left: 0;
  padding-right: 0;
  padding-top: 50px;
}
</style>
