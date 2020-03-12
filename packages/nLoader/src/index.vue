<!--
  loader component
  author:Terence
-->
<template>
  <div
    v-show="show"
    class="loadding"
  >
    <div :style="sizeStyleObject" />
    <span
      :class="[loaddingTextClass,textSizeClass]"
    >
      {{ loaddingText }}
    </span>
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
      default: 'Loading...'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data: function () {
    return {
      sizeStyleObject: this.getSize(this.size),
      loaddingTextClass: 'loadding-text',
      textSizeClass: this.size ? `${this.size}-text` : 'md-text'
    }
  },
  methods: {
    getSize (size) {
      switch (size) {
        case 'xs':
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
    display: inline-block;
    z-index: 999;
    text-align: center;
    div{
      display: inline-block;
      border-radius: 50%;
      border: 3px solid rgba(247,247,250,0.80);
      border-top-color:  #A6A6A6;
      animation: spinner2 1000ms linear infinite
    }
    @keyframes spinner2 {to {transform: rotate(360deg);}}
    .loadding-text{
      display: block;
      font-family: PingFangSC-Regular;
      color: #575757;
      line-height: 20px;
    }
    .xs-text{
      left: 26px;
      top: 2px;
      font-size: 12px;
    }
    .sm-text{
      left: 30px;
      top: 2px;
      font-size: 14px;
    }
    .md-text{
      margin-top:12px;
      font-size: 14px;
    }
    .lg-text{
      margin-top:12px;
      font-size: 16px;
    }
  }
</style>
