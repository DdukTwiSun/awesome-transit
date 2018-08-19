<template>
  <div>
    <div class="stp">
      <!--<Stepper/>-->
    </div>
    <div class="bus_img_div" v-if="!isStartClicked">
      <img src="/static/1/bus.png"/>
    </div>
    <optSelect v-else/>
  </div>
</template>

<script>
import Stepper from '../Signup/Stepper'
import optSelect from './optSelect'
export default {
  name: 'MainpageRight',
  components: {Stepper, optSelect},
  data () {
    return {
      isStartClicked: false
    }
  },
  mounted () {
    global.globalBus.$on('main-start-click', this.onStartClick)
    global.globalBus.$on('main-send-click', this.onSendClick)
  },
  beforeDestroy () {
    global.globalBus.$off('main-start-click', this.onStartClick)
    global.globalBus.$off('main-send-click', this.onSendClick)
  },
  methods: {
    onStartClick () {
      console.log('onStartClick')
      this.isStartClicked = !(this.isStartClicked)
      console.log(this.isStartClicked)
    },
    onSendClick () {
      console.log('onSendClick')
      this.isStartClicked = !(this.isStartClicked)
      console.log(this.isStartClicked)
    }
  }
}
</script>

<style scoped>
  .bus_img_div {
    position: absolute;
    width: 675px;
    bottom: 0;
    right: 0;
  }
  .bus_img_div > img {
    width: 100%;
  }
  .stp{
    display: none;
  }
</style>
