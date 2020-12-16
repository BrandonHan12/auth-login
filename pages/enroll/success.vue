<template>
  <v-container class="px-10">
    <v-row justify="center" align="center">
      <v-col>
        <h2>Congratulations! You are now one step closer to eCommerce success!</h2>
        <br />
        <blockquote>
          We're now under the process of creating your WebShop.
          <br />
          <br />
          Please be on the look out for our
          <b>email</b>
          once the creation process has concluded.
          <br />
          <br />
          If you have any questions or inquiries, don't hesitate to contact us at
          <a class="text-decoration-none" href="mailto:hello@syion.com">hello@syion.com</a>
          or
          <a class="text-decoration-none" href="tel:+6588888888">+65 8888 8888</a>
        </blockquote>
      </v-col>
      <v-col>
        <div class="d-flex justify-center">
          <img :src="devMale" v-bind:style="{ margin: '0 auto', width: '20vw' }" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'landing-page',
  data: () => ({
    devMale: require('@/assets/svg/svg-dev-male.svg'),
  }),
}
</script>