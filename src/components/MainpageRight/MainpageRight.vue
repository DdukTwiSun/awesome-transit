<template>
  <div class="bus_img_div">
    <img src="/static/1/bus.png"/>
  </div>
</template>

<script>
export default {
  name: 'MainpageRight'
}
</script>

<style scoped>
  .bus_img_div {
    position: absolute;
    width: 500px;
    bottom: 0;
    right: 0;
  }
  .bus_img_div img {
    max-width: 100%;
  }
</style>
