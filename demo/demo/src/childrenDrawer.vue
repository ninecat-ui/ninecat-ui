<template>
  <div>
    <div>
      <n-drawer
        :show.sync="showDrawer"
        :title="title"
        :confirm="confirm"
        :cancel="cancel"
       >
        <n-input v-model="user.name" placeholder="请填写你的名字" /><br/>
        <n-input v-model="user.age" placeholder="请填年龄"/><br/>
        <n-input v-model="user.sex" placeholder="请填性别"/><br/>
        <n-input v-model="user.address" placeholder="请填地址"/><br/>
      </n-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '技术胖小姐姐',
      showFlag: this.showDrawer,
      user: {
        name: '',
        age: '',
        sex: '',
        address: ''
      }
    }
  },
  props: {
    showDrawer: Boolean
  },
  computed: {
  },
  methods: {
    // 每项为必输，否则不进行添加
    confirm () {
      // if (this.user.name === '' || this.user.age === '' ||
      //     this.user.sex === '' || this.user.address === '') {
      //   this.$emit('close', false)
      // } else {
      //   this.$emit('addUser', this.user) // 添加用户
      //   this.user = {} // 清空当前用户
      //   this.$emit('close', false) // 让父组件关闭打开的抽屉
      // }
      (this.user.name === '' || this.user.age === '' ||
        this.user.sex === '' || this.user.address === '')
        ? this.$emit('close', false)
        : this.$emit('addUser', this.user)
      this.user = {}
      this.$emit('close', false)
    },
    cancel () {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
