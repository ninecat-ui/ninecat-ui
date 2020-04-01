<template>
  <div
    class="n-badge"
  >
    <slot />
    <span
      class="n-badge-common"
      :class="[content === '' ? 'n-badge-default' : 'n-badge-content']"
    >
      {{ content }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'NBadge',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.n-badge {
  position: relative;
  display: inline-block;
  .n-badge-common{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    -webkit-transform: translate(50%,-50%);
    transform: translate(50%,-50%);
  }
  .n-badge-default{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #f44336;
    padding: 0;
  }
  .n-badge-content{
    background-color: #f44336;
    border-radius: 8px;
    font-size: 12px;
    line-height: 16px;
    padding: 0 5px;
    color: #fff;
  }
}

.new-title{
  margin-left: -3.5px;
}
.small{
  width: 4px;
    height: 7px;
    border-radius: 50%;
    margin: 0;
    padding: 0px 3.5px;
}
</style>
