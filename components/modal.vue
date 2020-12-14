<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Modal View
        </v-btn>
      </template>
      <div v-for="(club, i) in clubs" v-if="$route.params.id == club.ClubId">
        <v-card
          max-width="80%"
          elevation="0"
          justify-between
          class="mx-auto my-12"
        >
          <v-card-title primary-title> </v-card-title>
          <v-row>
            <v-col cols="10" class="mx-auto">
              <v-col class="d-flex justify-center">
                <v-img max-width="80%" :src="club.banner" />
              </v-col>
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
                    @click="approveTest(club)"
                  >
                    Approve
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                  <v-btn color="error" type="post" @click="rejectClub(club)">
                    Reject
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      clubs: [
        {
          officeEmail: 'me@shohoku.com',
          subdomain: 'shohoku',
          icon:
            'https://ifyrd-registration-stack-cms-bucket.s3-ap-southeast-1.amazonaws.com/uploads/images/76deb0873aa511eb9baa177712c929d6/icon/icon.png',
          banner:
            'https://ifyrd-registration-stack-cms-bucket.s3-ap-southeast-1.amazonaws.com/uploads/images/76deb0873aa511eb9baa177712c929d6/banner/banner.png',
          status: '0',
          officePhone: '88881010',
          addressRoad: 'Kanagawa ',
          country: 'Afghanistan',
          addressUnit: '01-01',
          primaryColor: '#ed0707',
          interest: 'Sports',
          ClubId: '76deb0873aa511eb9baa177712c929d6',
          clubDescription: "Kanagawa's #1",
          organizationName: 'Shohoku',
          bannerText: 'Shohoku',
          secondaryColor: '#242323',
          postalCode: '0000',
          addressBlock: '1',
        },
        {
          officeEmail: 'sec@syion.com',
          subdomain: 'syion',
          icon:
            'https://ifyrd-registration-stack-cms-bucket.s3-ap-southeast-1.amazonaws.com/uploads/images/186a7d0a3ab811eba0b8d16301237726/icon/icon.png',
          banner:
            'https://ifyrd-registration-stack-cms-bucket.s3-ap-southeast-1.amazonaws.com/uploads/images/186a7d0a3ab811eba0b8d16301237726/banner/banner.png',
          status: '0',
          officePhone: '69627955',
          addressRoad: 'KENG CHEOW STREET, THE RIVERSIDE PIAZZA',
          country: 'Singapore',
          addressUnit: '02-10',
          primaryColor: '#df0707',
          interest: 'Wealth',
          ClubId: '186a7d0a3ab811eba0b8d16301237726',
          clubDescription: 'Lorem ipsum',
          organizationName: 'Syion Test Club',
          bannerText: 'Syion',
          secondaryColor: '#ffffff',
          postalCode: '059608',
          addressBlock: '11',
        },
        {
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
      ],
    }
  },
}
</script>
<style scoped></style>
