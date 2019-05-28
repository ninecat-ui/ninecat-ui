<template>
  <div
    v-show="show"
    class="loadding"
  >
    <div :style="sizeStyleObject" />
    <span class="loadding-text">{{ loaddingText }}</span>
  </div>
</template>

<script>
export default {
  name: 'NLoader',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    loaddingText: {
      type: String,
      default: '加载中...'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data: function () {
    return {
      sizeStyleObject: this.getSize(this.size)
    }
  },
  methods: {
    getSize (size) {
      debugger
      switch (size) {
        case 'XS':
          return {
            height: '16px',
            width: '16px'
          }
        case 'sm':
          return {
            height: '18px',
            width: '18px'
          }
        case 'md':
          return {
            height: '36px',
            width: '36px'
          }
        case 'lg':
          return {
            height: '64px',
            width: '64px'
          }
        default:
          return {
            height: '36px',
            width: '36px'
          }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .loadding{
    position: relative;
    z-index: 999;
    div{
      border-radius: 50%;
      border: 3px solid rgba(247,247,250,0.80);
      border-top-color:  #A6A6A6;
      animation: spinner2 1000ms linear infinite
    }
    @keyframes spinner2 {to {transform: rotate(360deg);}}
    .loadding-text{
      position: absolute;
      margin-top:12px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #575757;
      line-height: 20px;
    }
  }

</style>
