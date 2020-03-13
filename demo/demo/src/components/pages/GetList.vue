<template>
  <div>
    <div>
      <input type="text" v-model="title">
      <button type="button" @click="submit">提交</button>
      <button type="button" @click="getProjects">获取</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: ''
    }
  },
  // 挂载的时候获取新闻列表
  mounted () {
    axios.get('/mock/news').then(res => { // url即在mock.js中定义的
      console.log(res.data) // 打印一下响应数据
    })
  }
}

</script>

<style scoped>

</style>
