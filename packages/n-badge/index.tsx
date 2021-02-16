import { defineComponent, App, SetupContext, PropType, toRef } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const BadgeProps = {
  content: {
    type: String as PropType<''>,
    default: ''
  }
};

const NBadge = defineComponent({
  name: 'NBadge',
  props: BadgeProps,
  setup (props, { slots }: SetupContext) {
    const content = toRef(props, 'content');
    const classString = classNames([
      'n-badge-common',
      content.value === '' ? 'n-badge-default' : 'n-badge-content'
    ]);

    return () => (
      <div class="n-badge">
        {slots.default && slots.default()}
        <span class={classString}>
          { content.value }
        </span>
      </div>
    );
  }
});

NBadge.install = function (app: App) {
  app.component(NBadge.name, NBadge);
  return app;
};

export default NBadge;
