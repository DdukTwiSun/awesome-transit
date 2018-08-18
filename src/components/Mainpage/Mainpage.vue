<template>
  <div class="main">
    <div class="Left_page">
      <MainpageLeft/>
    </div>
    <div class="Right_page">
    </div>
  </div>
</template>

<script>
import MainpageLeft from '../MainpageLeft/MainpageLeft'
export default {
  name: 'Mainpage',
  components: {MainpageLeft},
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
