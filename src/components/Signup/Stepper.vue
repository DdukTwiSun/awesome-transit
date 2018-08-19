<template>
  <v-app>
  <div class="registration">
  <v-content>
    <v-container>
      <v-stepper v-model="step" align-center justify-center fill-height vertical>
        <v-stepper-header>
          <v-stepper-step step="1" :complete="step > 1">Your Account</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="step > 2">Your Information</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Payment Info</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">

            <v-text-field label="Email" type="e-mail" v-model="registration.email" required></v-text-field>
            <v-text-field label="Password" type="password" v-model="registration.password" :rules="[(v) => !!v || 'Password is required']" required></v-text-field>

            <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">

            <v-text-field label="Name" v-model="registration.name" :rules="nameRules" required></v-text-field>
            <v-text-field label="Street" v-model="registration.street" required></v-text-field>
            <v-text-field label="City" v-model="registration.city" required></v-text-field>
            <v-text-field label="State" v-model="registration.state" required></v-text-field>

            <v-btn flat @click.native="step = 1">Previous</v-btn>
            <v-btn color="primary" @click.native="step = 3">Continue</v-btn>

          </v-stepper-content>
          <v-stepper-content step="3">

            <v-text-field label="Phone Number" type="phone"
                          v-model="registration.phoneNumber" required></v-text-field>
            <v-select label="Card" v-model="registration.card" :items="cards" @keyup.enter="addValue" required></v-select>
            <v-text-field label="Card Number" type="credit-card"
                          v-model="registration.cardNumber" required></v-text-field>

            <v-btn flat @click.native="step = 2">Previous</v-btn>
            <v-btn color="primary" @click.prevent="submit">Save</v-btn>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-content>
  </div>
  </v-app>
</template>

<script>
export default {
  name: 'Stepper',
  data () {
    return {
      step: 1,
      registration: {
        email: null,
        password: null,
        name: null,
        street: null,
        city: null,
        state: null,
        phoneNumber: null,
        card: 'Visa'
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      cards: ['Visa', 'Mastercard', 'American Express']
    }
  },
  methods: {
    submit () {
      alert('registration done!!')
    }
  }
}
</script>

<style scoped>
  .registration {
    border: 0;
  }
</style>
