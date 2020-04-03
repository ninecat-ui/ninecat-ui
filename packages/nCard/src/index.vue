<template>
  <div class="cardClass">
    <img
      class="card-img"
      :src="src"
    >
    <span class="card-title">{{ title }}</span>
    <div>
      <span class="card-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    src: {
      type: String,
      default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585736912147&di=b569099e49bb8d6216841e4819d98222&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg'
    },
    message: {
      type: String,
      default: '这里是一段描述语句今天的天气真高你回家很常见的划分参考价森岛帆高会尽快了解和规范'
    }
  }
}
</script>

<style lang="scss" scoped>
 .cardClass {
  margin: 0.4rem;
    background: #fff;
    overflow: hidden;
    border-radius: 0.3rem;
    padding: 0.4rem;
    box-shadow: 0 0 0.2rem #ccc;
    border-bottom: 0.1rem solid #ccc;
    height: 300px;
    width: 260px;
    display: inline-block
}
 .cardmesage {
  font-weight: bolder;
  font-size: 20px;
}
.card-img{
  position: relative;
  width: 260px;
  height: 170px;
}
.card-title{
  margin: 5px;
  padding: 5px;
  font-size: 25px;
}
.card-message{
  font-size: 13px;
  display: block;
  width: 92%;
  overflow: hidden;
  padding: 10px;
}
</style>
