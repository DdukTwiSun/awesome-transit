<template>
  <div>

    <table>
      <tr>
        <td><img style="margin-top: 15px; margin-bottom: 10px; margin-left: 70px;" src="/static/1-1/icon1.png"/></td>
        <td><img style="margin-top: 20px;" src="/static/1-1/Enter your info.png" alt=""></td>
        <td><img src="/static/1-2/Ok.png"/></td>
      </tr>
      <tr>
        <td colspan="3" style="border-top: 2px solid gray; opacity: 0.4;"></td>
      </tr>
      <tr>
        <td><img style="margin-top:15px; margin-bottom: 20px; margin-left: 70px;" src="/static/1-1/icon2.png"/></td>
        <td><img style="margin-top: 15px;" src="/static/1-1/Shoot your face.png" alt=""></td>
        <td><img src="/static/1-2/Ok.png"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'optSelect',
  components: {}
}
</script>

<style scoped>
  table{
    background-color: white;
    margin-top: 300px;
    margin-left: auto;
    margin-right: 150px;
    border-collapse:separate;
    border-radius:6px;
    -moz-border-radius:6px;
  }
  td > img {
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
