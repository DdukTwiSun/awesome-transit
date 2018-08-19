<template>
  <div class="bus_smoke">
    <img src="/static/1/green_smoke.png"/>
  </div>
</template>

<script>
export default {
  name: 'MainBusSmoke'
}
</script>

<style scoped>
  .bus_smoke {
    position: absolute;
    width: 180px;
    left: 530px;
    top: 420px;
  }
  .bus_smoke img {
    max-width: 100%;
  }
  .bus_smoke.overlay{}
</style>
