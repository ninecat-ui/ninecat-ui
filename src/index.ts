import { App } from 'vue';
import './assets/font/iconfont.scss';

import NTag from '../packages/n-tag';
import NCheckTag from '../packages/n-tag/CheckTag';
import NAlert from '../packages/n-alert';
import NLoader from '../packages/n-loader';
import NInput from '../packages/n-input';
import NBoutton from '../packages/n-button';
import NTooltip from '../packages/n-tooltip'

const components = [
  NTag,
  NCheckTag,
  NAlert,
  NLoader,
  NInput,
  NBoutton,
  NTooltip
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
  NBoutton
}

export default {
    install
}