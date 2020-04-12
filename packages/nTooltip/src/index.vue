<template>
  <div class="n-tooltip">
    <div
      ref="popover"
      class="tooltip-container"
      role="tooltip"
      :class="[ show ? 'visible' : 'not-visible']"
    >
      <div class="content">
        {{ content }}
      </div>
      <div
        class="arrow"
        :class="placement"
      />
    </div>
    <span
      ref="trigger"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import EventListener from '../../../src/utils/eventlistener';
export default {
  name: 'NTooltip',
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: false
    };
  },
  watch: {
    show: function (val) {
      if (val) {
        const popover = this.$refs.popover;
        const trigger = this.$refs.trigger.children[0];
        switch (this.placement) {
          case 'top' :
            this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
            this.position.top = 0 - trigger.offsetHeight;
            break;
          case 'left':
            this.position.left = trigger.offsetLeft - popover.offsetWidth;
            this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
            break;
          case 'right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth;
            this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
            break;
          case 'bottom':
            this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
            this.position.top = trigger.offsetTop + trigger.offsetHeight;
            break;
        }
        this.$refs.popover.style.top = this.position.top + 'px';
        this.$refs.popover.style.left = this.position.left + 'px';
      }
    }
  },
  mounted () {
    const trigger = this.$refs.trigger.children[0];
    if (trigger) {
      if (this.trigger === 'hover') {
        this._mouseenterEvent = EventListener.listen(trigger, 'mouseenter', () => {
          this.show = true;
        });
        this._mouseleaveEvent = EventListener.listen(trigger, 'mouseleave', () => {
          this.show = false;
        });
      } else if (this.trigger === 'focus') {
        this._focusEvent = EventListener.listen(trigger, 'focus', () => {
          this.show = true;
        });
        this._blurEvent = EventListener.listen(trigger, 'blur', () => {
          this.show = false;
        });
      } else {
        this._clickEvent = EventListener.listen(trigger, 'click', this.toggle);
      }
    }
  },
  methods: {
    toggle () {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
  .n-tooltip{
    position: relative;
    .tooltip-container{
      position: absolute;
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
      .arrow{
        position: relative;
        width: 0;
        height: 0;
        border-top: 6px solid #272C36;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
      }
      .top{
        margin: 0 auto;
        text-align:center;
      }
    }
    .visible{
      visibility: visible;
    }
    .not-visible{
       visibility: hidden;
    }
  }
</style>
