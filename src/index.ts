import './../assets/font/iconfont.scss';
import { App } from 'vue';
import nIcon from '../packages/n-icon';
import nTag from '../packages/n-tag';
import nAlert from '../packages/n-alert';
import nAvatar from '../packages/n-avatar/index';
import nButton from '../packages/n-button/index';
import nButtonGroup from '../packages/n-button-group';
import nBadge from '../packages/n-badge';
import nSteps from '../packages/n-steps';
import nStep from '../packages/n-step';
import nCard from '../packages/n-card';
import nLoader from '../packages/n-loader';
import nCol from '../packages/n-col';
import nRow from '../packages/n-row';
import nList from '../packages/n-list';
import nRate from '../packages/n-rate';
import nCheckbox from '../packages/n-checkbox';
import nSidenav from '../packages/n-sidenav';
import nMessage from '../packages/n-message';
import nDrawer from '../packages/n-drawer';
import nPagination from '../packages/n-pagination';
import nProgress from '../packages/n-progress';
import nToggle from '../packages/n-toggle';
import nTable from '../packages/n-table';
import nUpload from '../packages/n-upload';
import nTooltip from '../packages/n-tooltip';
import nInput from '../packages/n-input';
import nModal from '../packages/n-modal';

import nSidenavItem from '../packages/n-sidenav-item';
import nSubSidenav from '../packages/n-sub-sidenav';

// import nToast from '../packages/nToast';
// import nTree from '../packages/nTree';
// import locale from './locale/index';

const components = [
  nIcon,
  nAlert,
  nButton,
  nBadge,
  nLoader,
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
  nUpload,
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
  app.config.globalProperties.$nMessage = nMessage;
  return app;
};

export {
  nIcon,
  nTag,
  nAlert,
  nButton,
  nBadge,
  nLoader,
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
  nUpload,
  nList,
  nCard,
  nToggle,
  nRate,
  // nTree,
  nTooltip,
  nSidenav,
  nSidenavItem,
  nSubSidenav,
  nSteps
  // nStep,
  // nCheckbox
};

export default {
  install
};
