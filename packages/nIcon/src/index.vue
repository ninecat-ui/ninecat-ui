<template>
  <i :class="'iconfont ' + name" />
</template>

<script>
export default {
  name: 'NIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
<style>
@import '//at.alicdn.com/t/font_1213701_e5sqb0h5yj5.css'
</style>
