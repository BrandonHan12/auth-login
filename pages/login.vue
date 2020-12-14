<template>
  <div>
    <!-- <div v-if="authState !== 'signedin'">You are signed out.</div> !-->
    <amplify-authenticator username-alias="email">
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{ user.username }}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'
export default {
  name: 'AuthStateApp',
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData

      Auth.currentSession().then((res) => {
        let accessToken = res.getAccessToken().getJwtToken()
        let idToken = res.getIdToken().getJwtToken()
        const auth = { accessToken, idToken }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      })
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
    }
  },

  methods: {
    storeToken(token) {
      console.log(storeToken)
      if (process.browser) {
        localStorage.setItem('authToken', token)
      }
    },
  },
}
</script>
