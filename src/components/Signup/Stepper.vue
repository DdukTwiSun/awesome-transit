<template>
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

            <v-btn color="blue" @click.native="step = 2">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">

            <v-text-field label="Name" v-model="registration.name" :rules="nameRules" required></v-text-field>
            <v-text-field label="Street" v-model="registration.street" required></v-text-field>
            <v-text-field label="City" v-model="registration.city" required></v-text-field>
            <v-text-field label="State" v-model="registration.state" required></v-text-field>

            <v-btn flat @click.native="step = 1">Previous</v-btn>
            <v-btn color="blue" @click.native="step = 3">Continue</v-btn>

          </v-stepper-content>
          <v-stepper-content step="3">

            <v-flex>
              <v-text-field label="Phone Number" type="phone"
                          v-model="registration.phoneNumber" required></v-text-field>
              <v-btn color="cyan lighten-3" @click="checkAccount">REGISTER ACCOUNT</v-btn>
            </v-flex>
            <v-btn flat @click.native="step = 2">Previous</v-btn>
            <v-btn color="blue" @click.prevent="submit">Save</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-content>
  </div>
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
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        street: null,
        city: null,
        state: null,
        phoneNumber: null,
        card: 'Visa'
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {
    checkAccount () {
      alert('Account register complete!!')
    },
    submit () {
      global.globalBus.$emit('account-submit', {
        email: this.registration.email,
        password: this.registration.password
      })
    }
  }
}
</script>

<style scoped>
  .registration {
    border: 0;
  }
</style>
