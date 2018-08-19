<template>
  <div class="bus_img_div">
    <Stepper/>
    <!--<img src="/static/1/bus.png"/>-->
  </div>
</template>

<script>
import Stepper from '../Signup/Stepper'
export default {
  name: 'MainpageRight',
  components: {Stepper}
}
</script>

<style scoped>
  .bus_img_div {
    position: absolute;
    width: 675px;
    bottom: 0;
    right: 0;
  }
  .bus_img_div img {
    max-width: 100%;
  }
</style>
