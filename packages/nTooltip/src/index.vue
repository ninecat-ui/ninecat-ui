<template>
  <div class="n-tooltip">
    <div
      ref="popover"
      class="tooltip-container"
      role="tooltip"
      :class="[ show ? 'visible' : 'not-visible',placement]"
    >
      <div
        v-if="placement.includes('top') || placement.includes('left')"
        class="content"
      >
        {{ content }}
      </div>
      <div
        class="arrow"
        :class="[placement]"
      />
      <div
        v-if="placement.includes('bottom') || placement.includes('right')"
        class="content"
      >
        {{ content }}
      </div>
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
          case 'top-start' :
            this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
            this.position.top = 0 - trigger.offsetHeight;
            break;
          case 'top-end' :
            this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
            this.position.top = 0 - trigger.offsetHeight;
            break;
          case 'left':
            this.position.left = 0 - trigger.offsetLeft - 2 * popover.offsetWidth - 10;
            this.position.top = popover.offsetHeight / 4;
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
@import './index.scss'
</style>
