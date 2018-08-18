<template>
  <div class="main">
    <div class="Left_page">
      <LeftMainpage></LeftMainpage>
    </div>
    <div class="Right_page">
    </div>
  </div>
</template>

<script>
import LeftMainpage from '../LeftMainpage/LeftMainpage'
export default {
  name: 'Mainpage',
  components: {LeftMainpage},
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
  }
  .Left_page {
    width: 50%;
  }
  .Right_page {
  }
</style>
