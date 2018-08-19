<template>
  <div class="start_btn_div">
    <input class="start_btn" type="button"/>
  </div>

</template>

<script>
export default {
  name: 'MainStartBtn'
}
</script>

<style scoped>
  .start_btn_div .start_btn {
    position: relative;
    background: url("/static/1/Get_started_button.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 80px;
    top: 230px;
    left: 23px;
    border: 0;
  }
</style>
