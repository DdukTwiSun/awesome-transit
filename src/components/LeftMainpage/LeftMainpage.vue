<template>
  <div class="left_main">
    <div class="logo_div">
      <div class="logo">
        <img src="/static/1/logo.png"/>
      </div>
    </div>
    <div class="proj_name_div">
      <div class="proj_name">
        <img src="/static/1/AWESOME TRANSIT_head.png"/>
      </div>
      <MainStartBtn/>
    </div>
  </div>
</template>

<script>
import MainStartBtn from '../MainStartBtn/MainStartBtn'
export default {
  name: 'LeftMainpage',
  components: {MainStartBtn},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .left_main {
    width: 100%;
  }
  /*logo*/
  .logo_div {
    position: absolute;
  }
  .logo_div .logo {
    position: absolute;
    top: 2px;
    left: 76px;
  }
  .logo img {
    height: 400px;
  }

  /*proj_name*/
  .proj_name_div {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .proj_name_div .proj_name {
    position: relative;
    top: 180px;
    left: 180px;
  }
  .proj_name img {
    height: 200px;
  }
</style>
