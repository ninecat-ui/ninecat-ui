import './../assets/font/iconfont.scss';
import { App } from 'vue';
import { default as nTag } from '../packages/nTag';
import { default as nAlert} from '../packages/n-alert';
import { default as nAvatar } from '../packages/n-avatar/index';
import { default as nButton } from '../packages/n-button/index';
import { default as nButtonGroup } from '../packages/n-button-group';
import { default as nBadge } from '../packages/n-badge';
import { default as nSteps } from '../packages/n-steps';
import { default as nStep } from '../packages/n-step';
import { default as nCard } from '../packages/n-card';
import { default as nLoader } from '../packages/n-loader';
import { default as nIcon } from '../packages/n-icon';
import { default as nCol } from '../packages/n-col';
import { default as nRow } from '../packages/n-row';
import { default as nList } from '../packages/n-list';
import { default as nRate} from '../packages/n-rate';
import { default as nCheckbox } from '../packages/n-checkbox';
import { default as nSidenav } from '../packages/n-sidenav';
import { default as nMessage } from '../packages/n-message';
import { default as nDrawer }  from '../packages/n-drawer';
import { default as nPagination } from '../packages/n-pagination';
import { default as nProgress } from '../packages/n-progress';


import nSidenavItem from '../packages/n-sidenav-item';
import nSubSidenav from '../packages/n-sub-sidenav';


import nInput from '../packages/nInput';

// import nToast from '../packages/nToast';
import nTable from '../packages/nTable';
import nModal from '../packages/n-modal';


// import nUpload from '../packages/nUpload';
import nToggle from '../packages/nToggle';

import nTooltip from '../packages/nTooltip';
// import nTree from '../packages/nTree';

// import locale from './locale/index';

const components = [
  nAlert,
  nButton,
  nBadge,
  nLoader,
  nIcon,
  nButtonGroup,
  nInput,
  nCol,
  nRow,
  // nToast,
  nTable,
  nPagination,
  nModal,
  nProgress,
  nDrawer,
  nAvatar,
  // nUpload,
  nList,
  nCard,
  nToggle,
  nRate,
  // nTree,
  nTooltip,
  nTag,
  nSidenav,
  nSidenavItem,
  nSubSidenav,
  nSteps,
  nStep,
  nCheckbox
];

const install = function (app: App) {
  components.forEach(component => {
    app.use(component as unknown as { install: () => any });
  });
  app.config.globalProperties.$nMessage = nMessage
  return app;
};

export {
  nTag,
  nAlert,
  nButton,
  nBadge,
  nLoader,
  nIcon,
  nButtonGroup,
  nInput,
  nCol,
  nRow,
  // nToast,
  nTable,
  nPagination,
  nModal,
  nProgress,
  nDrawer,
  nAvatar,
  // nUpload,
  nList,
  nCard,
  nToggle,
  nRate,
  // nTree,
  nTooltip,
  nSidenav,
  nSidenavItem,
  nSubSidenav,
  nSteps,
  // nStep,
  // nCheckbox
}

export default {
  install
};
