<template>
  <!-- 如果带属性值head，则为一级菜单，
否则为二级。
如果属性值为children，则为三级菜单，否则为二级。
 -->
  <div
    :class="[
      head ? 'n-sidenav-item' : 'n-item-child',
      children ? 'n-item-child-child':'',
      disabled ? 'disabled' : '',
    ]"
  >
    <div class="n-item-header">
      <div
        v-if="head"
        class="n-item-head"
      />
    </div>
    <div class="n-right">
      <div class="n-item-font">
        {{ name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NSidenavItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    head: {
      type: Boolean,
      default: false
    },
    children: {
      type: Boolean,
      default: false
    }
  },
  mounted () {

  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
