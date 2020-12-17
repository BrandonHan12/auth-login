export default function ({ store, $notifier, redirect }) {
  // If the user is not authenticated
  if (store.state.auth === null) {
    $notifier.showMessage({
      content: 'Please sign in to view this content',
      color: 'warning',
    })

    return redirect('/login')
  }
}
