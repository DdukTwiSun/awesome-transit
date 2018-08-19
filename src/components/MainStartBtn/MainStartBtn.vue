<template>
  <div class="start_btn_div">
    <input class="start_btn" type="button" v-on:click="regStart" v-if="!isSendMode"/>
    <input class="send_btn" type="button" v-on:click="regSend" v-else/>
  </div>
</template>

<script>
export default {
  name: 'MainStartBtn',
  data () {
    return {
      isSendMode: false
    }
  },
  methods: {
    regStart () {
      this.isSendMode = true
      global.globalBus.$emit('main-start-click')
    },
    regSend () {
      alert('Registration complete!!')
      this.isSendMode = !(this.isSendMode)
      global.globalBus.$emit('main-send-click')
    }
  }
}
</script>

<style scoped>
  .start_btn_div .start_btn {
    position: relative;
    background: url("/static/1/Get_started_button.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 70px;
    top: 230px;
    left: 23px;
    border: 0;
  }
  .start_btn_div .send_btn {
    position: relative;
    background: url("/static/1-1/Send_button.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 70px;
    top: 230px;
    left: 23px;
    border: 0;
  }
</style>
