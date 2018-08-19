<template>
  <div class="main">
    <div class="Left_page">
      <MainpageLeft/>
    </div>
    <div class="Right_page">
      <MainpageRight/>
    </div>
  </div>
</template>

<script>
import MainpageLeft from '../MainpageLeft/MainpageLeft'
import MainpageRight from '../MainpageRight/MainpageRight'
export default {
  name: 'Mainpage',
  components: {MainpageRight, MainpageLeft},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
