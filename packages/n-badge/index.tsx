import { defineComponent, App, SetupContext, PropType, toRef } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const BadgeProps = {
  type:{
    type: String as PropType<''>,
    default: 'danger'
  },
  color:{
    type: String as PropType<''>,
  },
  content: {
    type: [String,Number],
  },
  max: {
    type: Number,
  }
};

const NBadge = defineComponent({
  name: 'NBadge',
  props: BadgeProps,
  setup (props, { slots }: SetupContext) {

    const content = toRef(props, 'content');

    const classString = classNames([
      'n-badge-common',
      (content.value === '' || content.value === undefined) ? 'n-badge-default' : 'n-badge-content',
      props.type
    ]);


    return () => (
    <div class="n-badge">
        {slots.default && slots.default()}
        <sup class={classString} style={{background:props.color}}>
          { props.max && typeof content.value === 'number' && !isNaN(content.value) && content.value > props.max ? `${props.max}+` : content.value }
        </sup>
      </div>
    );
  }
});

NBadge.install = function (app: App) {
  app.component(NBadge.name, NBadge);
  return app;
};

export default NBadge;
