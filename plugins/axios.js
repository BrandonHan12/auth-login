import { Auth } from 'aws-amplify'

export default function ({ $axios, redirect }) {
  $axios.onRequest(async (config) => {
    console.log({ axiosConfig: config })

    const session = await Auth.currentSession()

    const idToken = session.getIdToken().getJwtToken()

    $axios.setHeader('Authorization', `Bearer ${idToken}`)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
