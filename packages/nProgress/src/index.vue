<template>
  <div class="n-progress">
    <div class="n-progress-line">
      <div
        class="n-progress-line-outer"
        :style="{height: `${width}px`}"
      >
        <div
          class="n-progress-line-inner"
        >
          <div
            class="n-progress-line-bg"
            :style="{background:color,width:progressWidth}"
          />
        </div>
      </div>
      <div class="n-progress-info">
        {{ progressWidth }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NProgress',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#e5e5ea'
    },
    width: {
      type: Number,
      default: 10
    }
  },
  computed: {
    progressWidth () {
      return `${this.percent}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .n-progress{
    .n-progress-line{
      width: 100%;
      padding: 8px 12px;
      height: auto;
      align-items:center;
      display:flex;
      .n-progress-line-outer{
        width: 95%;

        background: #e5e5ea;
        border-radius: 5px;
        .n-progress-line-inner{
          height: 100%;
          width: 100%;
          .n-progress-line-bg{
            position: relative;
            border-radius: 5px;
            height: 100%;
          }

        }

      }
      .n-progress-info{
        padding-left: 10px;
        width: 5%;
        color:#575757
      }
    }
  }
</style>
