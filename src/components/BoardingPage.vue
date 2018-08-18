<template>
  <v-layout>
    <v-flex xs12 sm6 class="card-flex">
      <v-card>
        <v-card-media
          :src="enterPhotoUrl"
          height="300">
        </v-card-media>
        <v-card-title>
          <h1 style="width:100%"> Enter </h1>
          <ul style="text-align:left;">
            <li><b>User</b>: {{ enterEmail }}</li>
            <li><b>Payment</b>: {{ enterPayment }}</li>
            <li><b>Date</b>: {{ enterTimestamp }}</li>
          </ul>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 class="card-flex">
      <v-card>
        <v-card-media
          :src="leavePhotoUrl"
          height="300">
        </v-card-media>
        <v-card-title>
          <h1 style="width:100%"> Leave </h1>
          <ul style="text-align:left;">
            <li><b>User</b>: {{ leaveEmail}}</li>
            <li><b>Payment</b>: {{ leavePayment }}</li>
            <li><b>Date</b>: {{ leaveTimestamp }}</li>
          </ul>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { notiEnterRef, notiLeaveRef, userRef } from '../firebase'

export default {
  name: 'BoardingPage',
  firebase: {
    notiEnter: {
      source: notiEnterRef,
      asObject: true
    },
    notiLeave: {
      source: notiLeaveRef,
      asObject: true
    }

  },
  data () {
    return {
      enterPhotoUrl: null,
      enterBalance: 0,
      enterEmail: null,
      leavePhotoUrl: null,
      leaveBalance: 0,
      leaveEmail: null
    }
  },
  computed: {
    enterUserId () {
      return this.notiEnter.user_id
    },
    enterPayment () {
      return this.notiEnter.payment
    },
    enterTimestamp () {
      return (new Date(this.notiEnter.timestamp * 1000)).toString()
    },
    leaveUserId () {
      return this.notiLeave.user_id
    },
    leavePayment () {
      return this.notiLeave.payment
    },
    leaveTimestamp () {
      return (new Date(this.notiLeave.timestamp * 1000)).toString()
    }
  },
  mounted () {
    notiEnterRef.on('value', () => this.loadEnterUserInfo())
    notiLeaveRef.on('value', () => this.loadLeaveUserInfo())
  },
  methods: {
    loadEnterUserInfo () {
      if (this.enterUserId) {
        userRef.child(this.enterUserId).once('value',
          (snapshot) => {
            const val = snapshot.val()
            this.enterPhotoUrl = val.photo_url
            this.enterBalance = val.balance
            this.enterEmail = val.email
          })
      }
    },
    loadLeaveUserInfo () {
      if (this.leaveUserId) {
        userRef.child(this.leaveUserId).once('value',
          (snapshot) => {
            const val = snapshot.val()
            this.leavePhotoUrl = val.photo_url
            this.leaveBalance = val.balance
            this.leaveEmail = val.email
          })
      }
    }
  }
}

</script>

<style>
.card-flex {
  padding: 20px;
}
</style>
