<template>
  <div class="register_menu">
    <table>
      <tr>
        <td><img class="camera" v-on:click="camera_click" src="/static/1-1/icon1.png"/></td>
        <td><img src="/static/1-1/Shoot your face.png"></td>
        <td><img src="/static/1-2/Ok.png"/></td>
      </tr>
      <tr>
        <td colspan="3" style="border: 1px solid gray; opacity: 0.4;"></td>
      </tr>
      <tr>
        <td><img class="information" v-on:click="dialog2 = true" src="/static/1-1/icon2.png"/></td>
        <td><img src="/static/1-1/Enter your info.png"></td>
        <td><img src="/static/1-2/Ok.png"/></td>
      </tr>
    </table>
    <div>
        <v-dialog class="dialog" v-model="dialog2" max-width="800px">
          <v-card style="background-color:white;">
            <stepper></stepper>
            <v-card-actions>
              <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
  </div>
</template>

<script>
import Stepper from '../Signup/Stepper.vue'

export default {
  name: 'optSelect',
  data () {
    return {
      dialog2: false
    }
  },
  components: {
    Stepper
  },
  mounted () {
    global.globalBus.$on('account-submit', this.submit_click)
  },
  beforeDestroy () {
    global.globalBus.$off('account-submit', this.submit_click)
  },
  methods: {
    camera_click () {
      global.globalBus.$emit('camera-click')
    },
    info_click () {
      alert('information clicked!!')
    },
    submit_click () {
      this.dialog2 = false
    }
  }
}
</script>

<style scoped>
  .dialog {
    background-color: white;
  }
  table{
    background-color: white;
    margin-top: 300px;
    margin-left: auto;
    margin-right: 150px;
    border-collapse:separate;
    border-radius:6px;
    box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 50px;
    -moz-border-radius:6px;
  }
  tr:nth-child(1), tr:nth-child(3) {
    height: 45px;
  }
  td > img {
    margin-left: 20px;
    margin-right: 20px;
  }
  tr:nth-child(1) > td:nth-child(1) > img {
    margin-left: 50px;
    height: 35px;
  }
  tr:nth-child(3) > td:nth-child(1) > img {
    margin-left: 50px;
    height: 30px;
  }
  td:nth-child(2) > img {
    height: 20px;
  }
  td:nth-child(3) > img {
    margin-right: 50px;
    height: 20px;
  }
</style>
