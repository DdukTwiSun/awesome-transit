<template>
  <div class="nav_div">
    <input class="login_btn" type="button"/>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .nav_div {
    width: 100%;
    height: 20px;
  }
  .login_btn {
    float: right;
    background: url("/static/1/Login.png") no-repeat;
    background-size: contain;
    width: 100px;
    height: 50px;
    padding-right: 180px;
    border: 0;
  }
</style>
