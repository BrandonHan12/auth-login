import { Auth } from 'aws-amplify'

export default function ({ $axios, redirect }) {
  $axios.onRequest(async (config) => {
    const session = await Auth.currentSession()
    const idToken = session.getIdToken().getJwtToken()

    config.headers.common['Authorization'] = `Bearer ${idToken}`
    console.log({ config })
    return config
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
