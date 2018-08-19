<template>
  <div>
    <div class="stp">
      <Stepper/>
    </div>
    <div class="opt">
      <optSelect/>
    </div>
    <!--<img src="/static/1/bus.png"/>-->
  </div>
</template>

<script>
import Stepper from '../Signup/Stepper'
import optSelect from './optSelect'
export default {
  name: 'MainpageRight',
  components: {Stepper, optSelect}
}
</script>

<style scoped>
  .bus_img_div {
    position: absolute;
    width: 675px;
    bottom: 0;
    right: 0;
  }
  .stp{
    display: none;
  }
</style>
