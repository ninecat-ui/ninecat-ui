import { defineComponent, App, HTMLAttributes, SetupContext } from 'vue';
import './index.scss';
export interface ButtonGroupProps extends HTMLAttributes {}

const NButtonGroup = defineComponent({
  name: 'NButtonGroup',
  setup (_:ButtonGroupProps, { slots }: SetupContext) {
    return () => (
      <div class="n-button-group">
        {slots.default && slots.default()}
      </div>
    );
  }
});

NButtonGroup.install = function (app: App) {
  app.component(NButtonGroup.name, NButtonGroup);
  return app;
};

export default NButtonGroup;
