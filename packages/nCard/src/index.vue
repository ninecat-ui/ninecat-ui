<template>
  <div class="card">
    <img
      class="card-img"
      :src="src"
    >
    <span class="card-title">{{ title }}</span>
    <p class="card-message">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
 .card {
  margin: 0.4rem;
    background: #fff;
    overflow: hidden;
    border-radius: 0.3rem;
    padding: 0.4rem;
    box-shadow: 0 0 0.2rem #ccc;
    border-bottom: 0.1rem solid #ccc;
    height: 300px;
    width: 260px;
    display: inline-block;
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
    p{
      font-size: 12px !important;
      margin:0 !important;
      overflow: hidden;
      display: block;
      width: 100%;
      overflow: hidden;
      padding: 10px;
    }
}
</style>
