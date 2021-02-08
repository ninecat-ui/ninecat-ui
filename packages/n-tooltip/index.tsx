import { defineComponent, App, SetupContext, nextTick, toRefs,reactive, watch } from 'vue'
import './index.scss';
import EventListener from '../../src/utils/eventlistener'
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

interface stateData {
  show: boolean,
  triggerEl: Element,
  popoverEl: Element,
  position:object
}

const NTooltip = defineComponent({
  name: 'NTooltip',
  props: TooltipProps,
  setup(props,{slots}:SetupContext) {
    // const triggerRef = ref(null)
    const state = reactive({show: false,triggerEl:{},popoverEl:{},position:{top:0,left:0}})

    const {trigger,placement,content} = toRefs(props)

    const toggle  = () => {
      state.show = !state.show;
    }

    watch(() => state.show, (oldVlaue, newValue) => {
      if (oldVlaue !== newValue) {

      }
    })

    const toolTipClass = () => {
      return classNames(['tooltip-container',`${placement.value}`,state.show ? 'visible' : 'not-visible'])
    }

    const arrowClass = () => {
      return classNames(['arrow',placement.value])
    }


    const popoverRef = (el) => {
      nextTick(() => {
        switch (placement.value) {}
      })
    }



    const triggerRef = (el) => {
      nextTick(() => {
        state.triggerEl = el.children[0];
        if (state.triggerEl) {
          if (trigger.value === 'hover') {
            EventListener.listen(state.triggerEl, 'mouseenter', () => {
              state.show = true;
            });
            EventListener.listen(state.triggerEl, 'mouseleave', () => {
              state.show = false;
            });
          } else if (trigger.value=== 'focus') {
            EventListener.listen(state.triggerEl, 'focus', () => {
              state.show = true;
            });
            EventListener.listen(state.triggerEl, 'blur', () => {
              state.show = false;
            });
          } else {
            EventListener.listen(state.triggerEl, 'click', () => {
              toggle()
            });
          }
        }
      })
    }

    const renderTopOrLeft = () => {
      return (placement.value.includes('top') || placement.value.includes('left')) ? <div class="content">{content.value}</div> : null
    }

    const renderBootomOrRight = () => {
      return (placement.value.includes('bottom') || placement.value.includes('right')) ? <div class="content">{content.value}</div> : null
    }

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
    )
  }
})



NTooltip.install = function (app: App) {
  app.component(NTooltip.name, NTooltip);
};

export default NTooltip;
