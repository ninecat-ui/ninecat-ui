<template>
  <div id="app">
    <div>
      <n-input v-model="showDrawer" disabled=true />
       <n-button type="primary" @click="open">
          打开Drawer手动添加
       </n-button>
       <n-button type="primary" @click="getProjects">
          自动添加用户
      </n-button>
      <!-- 以下是子组件 -->
      <ChildrenDrawer :showDrawer="showDrawer" @close="close" @addUser="addUser"/>
    </div>
    <!-- 以下是子组件 -->
    <ChildrenComponents :userList="list" />
  </div>
</template>

<script>
import axios from 'axios'
import ChildrenComponents from './childrenComponents.vue'
import ChildrenDrawer from './childrenDrawer.vue'
export default {
  components: {ChildrenComponents, ChildrenDrawer},
  data () {
    return {
      showDrawer: false,
      list: [
        { name: '张三', age: '11', sex: '男', address: '上海路' },
        { name: '李四', age: '12', sex: '男', address: '北京路' },
        { name: '李花', age: '12', sex: '女', address: '天津路' }]
    }
  },
  methods: {
    open () {
      this.showDrawer = true
    },
    close (res) {
      this.showDrawer = res
    },
    addUser (res) {
      this.list.push(res)
    },
    getProjects () {
      axios.get('/mock/news').then(res => { // url即在mock.js中定义的,没对请求失败进行处理！
        this.list.push(res.data)
        console.log('1', this.list)
      })
    }
  },
  mounted () {
    // axios.get('/mock/news').then(res => { // url即在mock.js中定义的
    //   this.data = res.data
    // })
  }
}
</script>
