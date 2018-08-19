<template>
  <div class="main">
    <div class="Left_page">
      <MainpageLeft/>
    </div>
    <div class="Right_page">
      <MainpageRight/>
    </div>
    <v-dialog class="webcam-dialog" v-model="webcamDialog" max-width="670">
      <v-card v-if="webcamDialog" class="wecam-card" style="background-color:white;">
        <web-cam ref="webcam" :deviceId="deviceId" @cameras="onCameras"></web-cam>
        <v-btn color="red" @click="onCapture">Capture</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MainpageLeft from '../MainpageLeft/MainpageLeft'
import MainpageRight from '../MainpageRight/MainpageRight'
import { WebCam } from 'vue-web-cam'

export default {
  name: 'Mainpage',
  components: {MainpageRight, MainpageLeft, WebCam},
  data () {
    return {
      webcamDialog: false,
      captured: false,
      deviceId: null
    }
  },
  mounted () {
    global.globalBus.$on('camera-click', this.onCameraClick)
  },
  beforeDestroy () {
    global.globalBus.$off('camera-click', this.onCameraClick)
  },
  methods: {
    onCameraClick () {
      this.webcamDialog = true
    },
    onCameras (cameras) {
      console.log(cameras)
      this.deviceId = cameras[0].deviceId
    },
    onCapture () {
      this.captured = true
      global.globalBus.$emit('capture-complete')
      const webcam = this.$refs.webcam
      const img = webcam.capture()
      global.globalBus.$emit('photo-capture', img)
      webcam.stop()
      this.webcamDialog = false
    }
  }
}
</script>

<style>
  .main {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .Left_page {
    width: 50%;
    float: left;
  }
  .Right_page {
    width: 50%;
    left: 0;
  }
</style>
