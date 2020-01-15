<template>
  <header class="common-header">
    <span class="common-header-left">
      <n-button
        v-if="title !== '首页'"
        icon="icon-angle-left"
        @click="$router.push('/')"
      >
        返回首页
      </n-button>
    </span>
    <span class="common-header-center">{{ title }}</span>
    <span class="common-header-right" />
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      title: '首页'
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.title = to.meta.name
      next()
    })
  }
}
</script>

<style lang="scss" scoped>
.common-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .common-header-left{
    flex: 1;
  }
  .common-header-center{
    flex: 1;
    text-align: center;
  }
  .common-header-right{
    flex: 1;
  }
}
</style>
