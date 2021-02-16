<template>
  <div class="n-progress">
    <div
      v-if="type === 'line'"
      class="n-progress-line"
    >
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
    <div
      v-else
      class="n-progress-circle"
      :style="{width: `${width}px`}"
    >
      <svg
        style="transform: rotate(-90deg)"
        :width="width"
        :height="width"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          :r="(width-strokeWidth)/2"
          :cy="width/2"
          :cx="width/2"
          :stroke-width="strokeWidth"
          :stroke="backgroundColor"
          fill="none"
        />
        <circle
          ref="$bar"
          :r="(width-strokeWidth)/2"
          :cy="width/2"
          :cx="width/2"
          :stroke="color"
          :stroke-width="strokeWidth"
          :stroke-linecap="isRound ? 'round' : 'square'"
          :stroke-dasharray="(width-strokeWidth)*3.14"
          :stroke-dashoffset="(width - strokeWidth) * 3.14 * (100 - percent) / 100"
          fill="none"
        />
      </svg>
      <span>{{ percent + `%` }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NProgress',
  props: {
    type: {
      type: String,
      default: 'line'
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#e5e5ea'
    },
    backgroundColor: {
      type: String,
      default: '#e5e5ea'
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    isRound: {
      type: Boolean,
      default: true
    },
    id: {
      type: [String, Number],
      default: 1
    },
    duration: {
      type: [String, Number],
      default: 1000
    },
    delay: {
      type: [String, Number],
      default: 200
    },
    timeFunction: {
      type: String,
      default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
    },
    width: {
      type: [Number, String],
      default: 10
    },
    strokeWidth: {
      type: [Number, String],
      default: 10
    }

  },
  data () {
    return {
      idStr: `circle_progress_keyframes_${Date.parse(new Date())}`
    };
  },
  computed: {
    progressWidth () {
      return `${this.percent}%`;
    }
  },
  mounted () {
    if (this.type === 'circle' && this.isAnimation) {
      if (document.getElementById(this.idStr)) {
        console.warn('vue-circle-progress should not have same id style');
        document.getElementById(this.idStr).remove();
      }

      const style = document.createElement('style');
      style.id = this.idStr;
      style.type = 'text/css';
      style.innerHTML = `
      @keyframes circle_progress_keyframes_name_${this.idStr} {
      from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
      to {stroke-dashoffset: ${(this.width - this.radius) * 3.14 * (100 - this.progress) / 100}px;}}
      .circle_progress_bar${this.idStr} {animation: circle_progress_keyframes_name_${this.idStr} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;}
      `;
      document.getElementsByTagName('head')[0].appendChild(style);
      this.$refs.$bar.classList.add(`circle_progress_bar${this.idStr}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
