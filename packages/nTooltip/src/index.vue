<template>
  <div
    ref="trigger"
    class="n-tooltip"
    @mouseover="hover()"
  >
    <div
      class="n-tooltip-container"
      :class="[placement,visible]"
    >
      <div class="content">
        {{ content }}
      </div>
      <div
        class="caret"
        :class="placement"
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top-start'
    }
  },
  data () {
    return {
      visible: ''
    };
  },
  methods: {
    hover () {
      this.visible = 'visible';
    }
  }
};
</script>

<style lang="scss">
  .n-tooltip{
    .n-tooltip-container{
      display:none;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 24px;
      max-width:250px;
      .content{
        display: inline-block;
        background: #272C36;
        border-radius: 4px;
        min-width:104px;
        min-height:24px;
        width:auto;
        color:#ffffff;
        padding:0 10px;
      }
      .caret{
        position: relative;
        width: 0;
        height: 0;
        border-top: 6px solid #272C36;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
      }
      .top-start{
        left:5px;
      }
    }
    .visible{
      display: block;
    }
    .top-start{
      top:0;
    }
  }
</style>
