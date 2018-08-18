<template>
  <div>
  </div>
</template>

<script>
import { notiRef, userRef } from '../firebase'

export default {
  name: 'BoardingPage',
  firebase: {
    noti: {
      source: notiRef,
      asObject: true
    }
  },
  data () {
    return {
      photo_url: null,
      balance: 0
    }
  },
  computed: {
    userId () {
      return this.noti.user_id
    },
    state () {
      return this.noti.state
    },
    payment () {
      return this.noti.payment
    }
  },
  mounted () {
    notiRef.on('value', () => this.loadUserInfo())
  },
  methods: {
    loadUserInfo () {
      if (this.userId) {
        console.log('loadUserInfo')

        userRef.child(this.userId).once('value',
          (snapshot) => {
            const val = snapshot.val()
            this.profile_image = val.photo_url
            this.balance = val.balance
          })
      }
    }
  }
}

</script>

<style>
</style>
