import { App } from 'vue';
import './assets/font/iconfont.scss';

import NTag from '../packages/n-tag';
import NAlert from '../packages/n-alert';
import NLoader from '../packages/n-loader'

const components = [
  NTag,
  NAlert,
  NLoader
]

const install = function (app: App) {
    components.forEach(component => {
      app.use(component as unknown as { install: () => any });
    });
    return app;
  };

export {
  NTag,
  NAlert
}

export default {
    install
}