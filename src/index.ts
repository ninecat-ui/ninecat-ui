import { App } from 'vue';
import './assets/font/iconfont.scss';

import NTag from '../packages/n-tag';
import NAlert from '../packages/n-alert';

const components = [
  NTag,
  NAlert
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