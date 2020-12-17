<template>
  <div>
    <amplify-authenticator username-alias="email"> </amplify-authenticator>
  </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'noAuth',
  name: 'AuthStateApp',
  created() {
    onAuthUIStateChange((authState, authData) => {
      Auth.currentSession().then((res) => {
        let accessToken = res.getAccessToken().getJwtToken()
        let idToken = res.getIdToken().getJwtToken()
        const auth = { accessToken, idToken, authState, authData }

        this.$store.commit('setAuth', auth)
        Cookie.set('auth', auth)
        this.$router.push('/club')
      })
    })

    if (this.$store.state.auth?.signedIn === true) this.$router.push('/club')
  },
}
</script>
