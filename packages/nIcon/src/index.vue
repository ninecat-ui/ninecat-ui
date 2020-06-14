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
