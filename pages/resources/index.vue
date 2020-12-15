<template>
  <v-container fluid>
    <v-row dense class="d-inline-flex">
      <v-col
        v-for="resource in resources"
        :key="resource.src"
        :cols="resource.flex"
      >
        <v-card elevation="0" max-width="500" class="mx-auto">
          <v-card-title primary-title> </v-card-title>
          <v-row>
            <v-col cols="10" class="mx-auto">
              <v-col class="d-flex justify-center">
                <v-carousel width="100" height="200" hide-delimiters>
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
              <v-card-text>
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Location</td>
                      <td>{{ resource.location }}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{{ resource.description }}</td>
                    </tr>
                    <tr>
                      <td>Capacity</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Rate</td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-simple-table>

                <v-col class="d-flex justify-end pt-10 pr-0">
                  <v-btn color="success" class="mr-2" to="/resources/booking">
                    Reserve Now
                    <v-icon>mdi-book-clock</v-icon>
                  </v-btn>
                  <v-btn color="secondary" class="mr-5" to="/club">
                    BACK
                    <v-icon>mdi-backspace</v-icon>
                  </v-btn>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      resources: [
        {
          location: 'Tennis Court 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam dapibus pellentesque. Nam a orci non tortor lacinia luctus ut non odio.',
          capacity: '4',
          hourlyRates: '$5',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 6,
        },
        {
          location: 'Tennis Court 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam dapibus pellentesque. Nam a orci non tortor lacinia luctus ut non odio.',
          capacity: '4',
          hourlyRates: '$5',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 6,
        },
        {
          location: 'BasketBall Court',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam dapibus pellentesque. Nam a orci non tortor lacinia luctus ut non odio.',
          capacity: '10',
          hourlyRates: '$30',
          flex: 6,
        },
      ],
    }
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
  padding-top: none;
}
</style>
