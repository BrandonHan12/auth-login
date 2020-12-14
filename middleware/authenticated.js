export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('store.state', store.state)
  if (store.state.auth === null) {
    return redirect('/login')
  }
}
