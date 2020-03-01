<template>
  <div
    class="grid"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      ref="meta"
      class="demo-box"
    >
      <div
        v-if="$slots.default"
        class="description"
      >
        <slot />
      </div>
      <div class="source">
        <slot name="source" />
      </div>
      <div
        v-show="metaShow"
        class="highlight"
      >
        <slot name="highlight" />
      </div>
      <div
        class="demo-block-control"
        @click="showMeta"
      >
        <n-icon
          :name="iconName"
        />
        <span v-show="hovering">{{ hoveringText }}</span>
        <!-- Todo -->
        <!-- <span
          v-show="hovering"
          class="demo-button"
        >
          <n-button
            type="link"
            size="sm"
          >
            在线运行
          </n-button>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data: function () {
    return {
      metaShow: false,
      hovering: false
    }
  },
  computed: {
    iconName () {
      if (this.metaShow) {
        return 'icon-sort-up'
      } else {
        return 'icon-sort-down'
      }
    },
    hoveringText () {
      if (this.metaShow) {
        return 'Hide'
      } else {
        return 'Expand'
      }
    }
  },
  methods: {
    showMeta () {
      this.metaShow = !this.metaShow
    }
  }
}
</script>

<style lang="scss" scoped>
.grid{
  padding-top: 10px;
  width: 90%;
  display:flex;
  .demo-box{
    height: auto;
    margin: 10px;
    border: 1px solid #eaeefb;
    border-radius: 3px;
    transition: .2s;
    flex: 1;
    .source{
      padding: 10px 20px 10px 20px;
    }
    .meta{
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      height: auto;
      transition: height .2s;
      .p{
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px;
        background-color: #fff;
      }
    }
    .demo-block-control{
      padding-top: 10px;
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      &:focus,&:hover{
        color:#34C3FF;
      };
      .demo-button{
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>
