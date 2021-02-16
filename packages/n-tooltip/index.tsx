import { defineComponent, App, SetupContext, nextTick, toRefs, reactive } from 'vue';
import './index.scss';
import EventListener from '../../src/utils/eventlistener';
import classNames from '../../src/utils/className';

const TooltipProps = {
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
};

const NTooltip = defineComponent({
  name: 'NTooltip',
  props: TooltipProps,
  setup (props, { slots }:SetupContext) {
    // const triggerRef = ref(null)
    const state = reactive({
      show: false,
      triggerEl: {},
      triggerElPosition: {
        offsetLeft: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        offsetTop: 0
      },
      popoverEl: {},
      position: { top: 0, left: 0 }
    });

    const { trigger, placement, content } = toRefs(props);

    const toolTipClass = () => {
      return classNames(['tooltip-container', `${placement.value}`, state.show ? 'visible' : 'not-visible']);
    };

    const arrowClass = () => {
      return classNames(['arrow', placement.value]);
    };

    const popoverRef = (el) => {
      if (!el) { return false; }
      nextTick(() => {
        switch (placement.value) {
          case 'top' :
            state.position.left = state.triggerElPosition.offsetLeft - el.offsetWidth / 2 + state.triggerElPosition.offsetWidth / 2;
            state.position.top = 0 - state.triggerElPosition.offsetHeight;
            break;
          case 'top-start' :
            state.position.left = state.triggerElPosition.offsetLeft - el.offsetWidth / 2 + state.triggerElPosition.offsetWidth / 2;
            state.position.top = 0 - state.triggerElPosition.offsetHeight;
            break;
          case 'top-end' :
            state.position.left = state.triggerElPosition.offsetLeft - el.offsetWidth / 2 + state.triggerElPosition.offsetWidth / 2;
            state.position.top = 0 - state.triggerElPosition.offsetHeight;
            break;
          case 'left':
            state.position.left = 0 - state.triggerElPosition.offsetLeft - 2 * el.offsetWidth - 10;
            state.position.top = el.offsetHeight / 4;
            break;
          case 'right':
            state.position.left = state.triggerElPosition.offsetLeft + state.triggerElPosition.offsetWidth;
            state.position.top = state.triggerElPosition.offsetTop + state.triggerElPosition.offsetHeight / 2 - el.offsetHeight / 2;
            break;
          case 'bottom':
            state.position.left = state.triggerElPosition.offsetLeft - el.offsetWidth / 2 + state.triggerElPosition.offsetWidth / 2;
            state.position.top = state.triggerElPosition.offsetTop + state.triggerElPosition.offsetHeight;
            break;
          default:
            break;
        }
        el.style.top = state.position.top + 'px';
        el.style.left = state.position.left + 'px';
      });
    };

    const triggerRef = (el) => {
      if (!el) { return false; }
      nextTick(() => {
        state.triggerEl = el;
        state.triggerElPosition = {
          offsetLeft: el.offsetLeft,
          offsetWidth: el.offsetWidth,
          offsetHeight: el.offsetHeight,
          offsetTop: el.offsetTop
        };
        if (trigger.value === 'hover') {
          EventListener.listen(el, 'mouseenter', () => {
            state.show = true;
          });
          EventListener.listen(el, 'mouseleave', () => {
            state.show = false;
          });
        } else if (trigger.value === 'focus') {
          EventListener.listen(el, 'focus', () => {
            state.show = true;
          });
          EventListener.listen(el, 'blur', () => {
            state.show = false;
          });
        } else {
          el.addEventListener('click', () => {
            state.show = !state.show;
          }, { once: true });
        }
      });
    };

    const renderTopOrLeft = () => {
      return (placement.value.includes('top') || placement.value.includes('left')) ? <div class="content">{content.value}</div> : null;
    };

    const renderBootomOrRight = () => {
      return (placement.value.includes('bottom') || placement.value.includes('right')) ? <div class="content">{content.value}</div> : null;
    };

    return () => (
      <div class="n-tooltip">
        <div ref={popoverRef} class={toolTipClass()} role="tooltip">
          {renderTopOrLeft()}
          <div class={arrowClass()} />
          {renderBootomOrRight()}
        </div>
        <span
          ref={triggerRef}
        >
          {slots.default && slots.default()}
    </span>
      </div>
    );
  }
});

NTooltip.install = function (app: App) {
  app.component(NTooltip.name, NTooltip);
};

export default NTooltip;
