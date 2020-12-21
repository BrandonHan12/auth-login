<template>
  <v-container>
    <confirm-dialog ref="confirm" />
    <div
      v-for="club in clubs"
      v-if="$route.params.id == club.ClubId"
      :key="club.ClubId"
    >
      <v-card max-width="100%" elevation="0" justify-between class="mx-0 my-2">
        <v-row>
          <v-col cols="12">
            <!-- <v-col class="d-flex justify-center">
              <span>Club Banner</span>
              <v-img max-width="50%" :src="club.banner" />
            </v-col> -->
            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <td>Banner</td>
                    <td>
                      <v-img max-width="20%" class="my-6" :src="club.banner" />
                    </td>
                  </tr>
                  <tr>
                    <td>Icon</td>
                    <td>
                      <v-img
                        :src="club.icon"
                        class="my-6"
                        height="50"
                        width="50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Club Name</td>
                    <td>
                      {{ club.clubName }}
                    </td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>
                      {{ club.phone }}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      {{ club.email }}
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
                  <tr>
                    <td>Status</td>
                    <td>
                      <v-chip class="ma-2" v-if="club.status == 0">
                        Pending
                      </v-chip>
                      <v-chip
                        class="ma-2"
                        v-else-if="club.status == 1"
                        color="success"
                      >
                        Approved
                      </v-chip>
                      <v-chip
                        class="ma-2"
                        v-else-if="club.status == 2"
                        color="danger"
                      >
                        Rejected
                      </v-chip>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <v-col
                col="12"
                class="d-flex justify-end pt-10 pr-0"
                v-if="club.status == 0"
              >
                <v-btn
                  color="success"
                  class="mr-2"
                  type="post"
                  @click="approveClub(club)"
                >
                  <v-icon>mdi-check</v-icon>&nbsp;Approve
                </v-btn>
                <v-btn
                  color="error"
                  class="mr-5"
                  type="post"
                  @click="rejectClub(club)"
                >
                  <v-icon>mdi-close</v-icon>
                  &nbsp; Reject
                </v-btn>
              </v-col>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import ConfirmDialog from '@/components/ConfirmDialog'
export default {
  components: {
    ConfirmDialog,
  },
  data() {
    return {
      clubs: [],
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('/club')
    this.clubs = data
  },
  methods: {
    async approveClub(club) {
      if (
        await this.$refs.confirm.open(
          'Confirm',
          "Are you sure you want to approve this club's application?"
        )
      ) {
        const approve = await this.$axios.$post('/club/approval', {
          ClubId: club.ClubId,
          status: '1',
        })

        this.$notifier.showMessage({
          content:
            'Succesfully approved the club registration for ' + club.clubName,
          color: 'success',
        })
      }
    },
    async rejectClub(club) {
      if (
        await this.$refs.confirm.open(
          'Confirm',
          "Are you sure you want to reject this club's application?"
        )
      ) {
        const approve = await this.$axios.post('/club/approval', {
          ClubId: club.ClubId,
          status: '2',
        })
        this.$notifier.showMessage({
          content:
            'Succesfully rejected the club registration for ' + club.clubName,
          color: 'success',
        })
      }
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

.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding-left: 0;
  padding-right: 0;
  padding-top: 30px;
}
</style>
