<template>
  <div class="main">
    <div class="first_line">
      <div class="main_logo">
        <img src="/static/main_smile.png"/>
      </div>
      <div class="project_name">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="second_line">
      <p>{{explain_msg}}</p>
    </div>
    <div class="third_line">
      <input type="button" class="start_btn">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mainpage',
  data () {
    return {
      msg: 'Awesome Transit',
      explain_msg: '이 프로젝트는 얼굴인식을 통한 대중교통 결제시스템을 만드는 프로젝트입니다.'

    }
  }
}
</script>

<style scoped>
  /*header*/
  header {
    padding: 5px;
  }

  /*first line*/
  .first_line {
    display: flex;
    -ms-display: flexbox;

    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .first_line .main_logo img {
    width: 100px;
  }
  .first_line .project_name p{
    padding-left: 20px;
    font-size: 3rem;
    font-weight: 600;
  }

  /*second line*/
  .second_line {
    padding: 10px;
    text-align: center;
    font-size: 10pt;
  }

  /*third line */
  .third_line{
    padding-top: 30px;
    text-align: center;
  }
  .third_line .start_btn {
    background: url(/static/start_btn.png) no-repeat;
    width: 270px;
    height: 90px;
    border: none;
  }

  footer {
    padding: 5px;
  }
</style>
