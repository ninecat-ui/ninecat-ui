import { defineComponent, App, SetupContext } from 'vue';
import './index.scss';

const ToggleProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
};

const NToggle = defineComponent({
  name: 'NToggle',
  props: ToggleProps,
  setup (props, { emit }: SetupContext) {
    const handleChange = () => {
      emit('updateModel', props.checked);
    };

    return () => (
      <div class="n-toggle">
        <label>
          <input
            id="toggle"
            checked={props.checked}
            type="checkbox"
            style="display: none;"
            disabled={props.disabled}
            onChange={handleChange}
          />
          <span
            class="n-toggle-body"
          />
        </label>
      </div>
    );
  }
});

NToggle.install = function (app: App) {
  app.component(NToggle.name, NToggle);
};

export default NToggle;
