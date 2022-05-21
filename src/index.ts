import { App } from 'vue';
import './assets/font/iconfont.scss';

import NTag from '../packages/n-tag';
import NCheckTag from '../packages/n-tag/CheckTag';
import NAlert from '../packages/n-alert';
import NLoader from '../packages/n-loader';
import NInput from '../packages/n-input';
import NBoutton from '../packages/n-button';
import NButtonGroup from '../packages/n-button-group';
import NTooltip from '../packages/n-tooltip'
import NIcon from '../packages/n-icon'

const components = [
  NTag,
  NCheckTag,
  NAlert,
  NLoader,
  NInput,
  NBoutton,
  NButtonGroup,
  NTooltip,
  NIcon
]

const install = function (app: App) {
    components.forEach(component => {
      app.use(component as unknown as { install: () => any });
    });
    return app;
  };

export {
  NTag,
  NCheckTag,
  NAlert,
  NLoader,
  NInput,
  NBoutton,
  NButtonGroup,
  NIcon
}

export default {
    install
}