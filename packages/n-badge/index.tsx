import { defineComponent,App,HTMLAttributes,SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';


export interface BadgeProps extends HTMLAttributes {
  content?: string | number
}

const NBadge = defineComponent({
  name: 'NBadge',
  setup(_:BadgeProps,{ slots, attrs }: SetupContext) {
    const props = attrs as BadgeProps;
    const {content} = props
    const classString = classNames([
      'n-badge-common',
      content === '' ? 'n-badge-default' : 'n-badge-content'
    ])

    return () => (
      <div class="n-badge">
        {slots.default && slots.default()}
        <span class={classString}>
          { content }
        </span>
      </div>
    )
  }
})

NBadge.install = function(app: App) {
  app.component(NBadge.name, NBadge);
  return app;
};


export default NBadge;
