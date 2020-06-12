<template>
  <div class="rate">
    <span
      v-for="(item,index) in max"
      :key="index"
    >
      <i
        v-if="(index + 1) > value"
        class="iconfont icon-collection"
      />
      <i
        v-else
        class="iconfont icon-collection-fill"
      />
    </span>
  </div>
</template>

<script>

export default {
  name: 'NRate',
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 5
    }
  }
};

</script>

<style lang="scss">
@import './index.scss'
</style>
