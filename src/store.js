export let photo = null
export let email = null
export let password = null

export function init () {
  global.globalBus.$on('account-submit', (payload) => {
    email = payload.email
    password = payload.password
  })

  global.globalBus.$on('photo-capture', (payload) => {
    photo = payload
  })
}
