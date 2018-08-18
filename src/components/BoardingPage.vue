<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="photo_url"
          height="300">
        </v-card-media>
        <v-card-title>
          <h1 style="width:100%"> {{ state }} </h1>
          <ul style="text-align:left;">
            <li><b>User</b>: {{ email }}</li>
            <li><b>Payment</b>: {{ payment }}</li>
            <li><b>Date</b>: {{ timestamp }}</li>
          </ul>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
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
      balance: 0,
      email: null
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
    },
    timestamp () {
      return (new Date(this.noti.timestamp * 1000)).toString()
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
            this.photo_url = val.photo_url
            this.balance = val.balance
            this.email = val.email
          })
      }
    }
  }
}

</script>

<style>
</style>
