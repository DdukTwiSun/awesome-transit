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
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar card dark color="primary">
              <v-btn icon dark @click.native="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark flat @click.native="dialog = false">Save</v-btn>
              </v-toolbar-items>
              <v-menu bottom right offset-y>
                <v-btn slot="activator" dark icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-toolbar>
            <v-card-text>
              <v-btn color="primary" dark @click.stop="dialog2 = !dialog2">Open Dialog 2</v-btn>
              <v-tooltip right>
                <v-btn slot="activator">Tool Tip Activator</v-btn>
                Tool Tip
              </v-tooltip>
              <v-list three-line subheader>
                <v-subheader>User Controls</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Content filtering</v-list-tile-title>
                    <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Password</v-list-tile-title>
                    <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list three-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Notifications</v-list-tile-title>
                    <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Sound</v-list-tile-title>
                    <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="widgets"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                    <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
          </v-card>
        </v-dialog>
        <v-dialog class="dialog" v-model="dialog2" max-width="800px">
          <v-card style="background-color:white;">
            <stepper></stepper>
<!--            <v-card-title>
              Dialog 2
            </v-card-title>
            <v-card-text>
              <v-btn color="primary" dark @click.stop="dialog3 = !dialog3">Open Dialog 3</v-btn>
              <v-select
                :items="select"
                label="A Select List"
                item-value="text"
              ></v-select>
            </v-card-text> -->
            <v-card-actions>
              <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog3" max-width="500px">
          <v-card>
            <v-card-title>
              <span>Dialog 3</span>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <v-btn slot="activator" icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-actions>s
              <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
  </div>
</template>

<script>
import Stepper from "../Signup/Stepper.vue"

export default {
  name: 'optSelect',
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false
    }
  },
  components: {
    Stepper
  },
  methods: {
    camera_click () {
      alert('camera clicked!!')
    },
    info_click () {
      alert('information clicked!!')
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
