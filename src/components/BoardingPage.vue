<template>
  <v-layout>
    <div class="bg"></div>
    <img class="logo" src="/static/2-1(Driver)/head_logo.png"/>
    <v-flex sm6 class="card-flex card-flex-left">
      <v-card class="card">
        <div class="card-header card-header-enter">
        </div>
        <v-card-media
           class="card-face"
          :src="enterPhotoUrl"
          height="300">
        </v-card-media>
        <v-card-title class="card-content">
          <h1 style="width:100%"> ENTER </h1>
          <ul style="text-align:left;">
            <li><b>User</b> {{ enterEmail }}</li>
            <li><b>Payment</b> {{ enterPayment }}</li>
            <li><b>Date</b> {{ enterTimestamp }}</li>
          </ul>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 class="card-flex card-flex-right">
      <v-card class="card">
        <div class="card-header card-header-leave">
        </div>
        <v-card-media
           class="card-face"
          :src="leavePhotoUrl"
          height="300">
        </v-card-media>
        <v-card-title class="card-content">
          <h1 style="width:100%"> EXIT </h1>
          <ul style="text-align:left;">
            <li><b>User</b> {{ leaveEmail}}</li>
            <li><b>Extra Charge</b> {{ leavePayment }}</li>
            <li><b>Arrivial</b> Rugao</li>
            <li><b>Date</b> {{ leaveTimestamp }}</li>
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

.bg {
  background: url('/static/2/tablet_bg.png');
  background-repeat: none;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.card {
  box-shadow: -5px 15px 50px rgba(0, 0, 0, 0.5);
}

.card-flex {
  margin-top: 70px;
}

.card-flex-left {
  padding-left: 100px;
  padding-right: 10px;

}
.card-flex-right {
  padding-right: 100px;
  padding-left: 10px;
}

.card-header {
  height: 30px;
}

.card-header-enter {
  background: linear-gradient(to right, rgb(232,129,60), rgb(255,106,70));
}

.card-header-leave {
  background: linear-gradient(to right, rgb(182,72,103), rgb(129,31,175));
}

.card-face {
  background: rgb(176, 176, 176);
  box-shadow: inset 0px -5px 20px rgb(150, 150, 150);
}

.card-content {
  background: rgb(249, 249, 249);
}

h1 {
  font-size: 35px;
  font-weight: 820;
  transform: scaleX(0.95);
}

.card-flex-left h1 {
  color: rgb(236, 127, 59);
}

.card-flex-right h1 {
  color: rgb(131, 31, 183);
}

ul {
  list-style-type: none;
}

.card-content {
  min-height: 200px;
}

.logo {
  position: absolute;
  width: 280px;
  left: 100px;
}

</style>
