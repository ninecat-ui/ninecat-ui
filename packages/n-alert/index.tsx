import { defineComponent,ref,App, HTMLAttributes, SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';
import NIcon from '../n-icon'

const initDefaultProps = {
  show: false,
  type: 'info',
  message: '',
}

export interface AlterProps extends HTMLAttributes {
  show?: boolean;
  type?: string;
  message?: string;
}

const NAlert = defineComponent({
  name: 'NAlert',
  setup(_: AlterProps, { attrs }: SetupContext) {
    const props = attrs as AlterProps;
    const { show, type, message } = { ...initDefaultProps, ...props };
    const showAlert = ref(show)
    const alertClass = () => {
      return classNames(['base-alert', type])
    }
    const iconClass = classNames([`icon-${type}`])
    const closeAlert = () => {
      showAlert.value = false
    }
    return () => (
      showAlert.value ? <div class={alertClass()}>
        <div class="alert-content">
          <NIcon name={`icon-${type}`}/>
          <span class="message-text">{ message }</span>
          <NIcon
            id="alertCloseIcon"
            name="icon-times"
            class={iconClass}
            onClick={closeAlert}
          />
        </div>
      </div> : null
    )
  }
})

NAlert.install = function (app: App) {
  app.component(NAlert.name, NAlert);
  return app;
};

export default NAlert;
