import './../assets/font/iconfont.css';
import nAlert from '../packages/n-alert';
import nAvatar from '../packages/n-avatar';
import nButton from '../packages/n-button';
import nButtonGroup from '../packages/n-button-group';
import nBadge from '../packages/n-badge';
import nSidenav from '../packages/n-sidenav';
import nSidenavItem from '../packages/n-sidenav-item';
import nSubSidenav from '../packages/n-sub-sidenav';
import nSteps from '../packages/n-steps';
import nStep from '../packages/n-step/index.tsx';
import nCard from '../packages/nCard';
import nLoader from '../packages/nLoader';
import nIcon from '../packages/nIcon';
import nMessage from '../packages/nMessage';
import nInput from '../packages/nInput';
import nCol from '../packages/nCol';
import nRow from '../packages/nRow';
// import nToast from '../packages/nToast';
import nTable from '../packages/nTable';
import nPagination from '../packages/nPagination';
import nModal from '../packages/nModal';
import nProgress from '../packages/nProgress';
import nDrawer from '../packages/nDrawer';
import nUpload from '../packages/nUpload';
import nList from '../packages/nList';
import nToggle from '../packages/nToggle';
import nRate from '../packages/nRate';
import nTooltip from '../packages/nTooltip';
// import nTree from '../packages/nTree';
import nTag from '../packages/nTag/index.tsx';
import nCheckbox from '../packages/n-checkbox';
import locale from './locale/index';

const components = {
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
};

const install = function (app) {
  Object.values(components).forEach(component => {
    app.use(component);
  });

  app.config.globalProperties.$nMessage = nMessage;
  return app;
};

// const install = function (Vue, opts = {}) {
//   Vue.use(VueCompositionApi);
//   locale.use(opts.locale);
//   locale.i18n(opts.i18n);
//   Object.values(components).forEach(component => {
//     Vue.component(component.name, component);
//   });
//   Vue.prototype.$nMessage = nMessage;
// };

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  locale: locale.use,
  i18n: locale.i18n,
  install,
  ...components
};
