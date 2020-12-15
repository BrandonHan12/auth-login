import { Auth } from 'aws-amplify'

export default function ({ $axios, $store, redirect }) {
  $axios.onRequest(async (config) => {
    const session = await Auth.currentSession()
    const idToken = session.getIdToken().getJwtToken()

    $axios.setHeader('Authorization', `Bearer ${idToken}`)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // can try to commit something to the store
      redirect('/400')
    }
    // Unauthorized
    if (code === 401) {
      this.$store.commit('setAuth', null)
      Cookie.set('auth', null)
      redirect('/login')
    }
  })
}
