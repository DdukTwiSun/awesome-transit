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
    width: 240px;
    height: 91px;
    top: 250px;
    left: 50px;
    border: 0;
  }
</style>
