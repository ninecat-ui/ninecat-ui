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
import NAvatar from '../packages/n-avatar'
import NBadge from '../packages/n-badge'
import NCard from '../packages/n-card'
import NRow from '../packages/n-row'
import NCol from '../packages/n-col'
import NCollapse from '../packages/n-collapse'
import NCollapseItem from '../packages/n-collapse-item'

const components = [
  NTag,
  NCheckTag,
  NAlert,
  NLoader,
  NInput,
  NBoutton,
  NButtonGroup,
  NTooltip,
  NIcon,
  NAvatar,
  NBadge,
  NCard,
  NRow,
  NCol,
  NCollapse,
  NCollapseItem
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
  NIcon,
  NAvatar,
  NBadge,
  NCard
}

export default {
    install
}