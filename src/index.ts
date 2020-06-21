// import './assets/font/iconfont.css';
// AsyncComponent
// import nAlert from 'packages/nAlert';
// import nButton from 'packages/nButton';
// import nCard from 'packages/nCard';
// import nBadge from 'packages/nBadge';
// import nLoader from 'packages/nLoader';
// import nIcon from 'packages/nIcon';
// import nMessage from 'packages/nMessage';
// import nButtonGroup from 'packages/nButtonGroup';
// import nInput from 'packages/nInput';
// import nCol from 'packages/nCol';
// import nRow from 'packages/nRow';
// import nToast from 'packages/nToast';
// import nTable from 'packages/nTable';
// import nPagination from 'packages/nPagination';
// import nModal from 'packages/nModal';
// import nProgress from 'packages/nProgress';
// import nDrawer from 'packages/nDrawer';
// import nAvatar from 'packages/nAvatar';
// import nUpload from 'packages/nUpload';
// import nList from 'packages/nList';
// import nToggle from 'packages/nToggle';
// import nRate from 'packages/nRate';
// import nTooltip from 'packages/nTooltip';
// import nTree from 'packages/nTree';
// import nTag from 'packages/nTag';
// import locale from './locale/index';
// import VueCompositionApi from '@vue/composition-api';

// const components = {
//   nAlert,
//   nButton,
//   nBadge,
//   nLoader,
//   nIcon,
//   nButtonGroup,
//   nInput,
//   nCol,
//   nRow,
//   nToast,
//   nTable,
//   nPagination,
//   nModal,
//   nProgress,
//   nDrawer,
//   nAvatar,
//   nUpload,
//   nList,
//   nCard,
//   nToggle,
//   nRate,
//   nTree,
//   nTooltip,
//   nTag
// };

// const install = function (Vue, opts = {}) {
//   Vue.use(VueCompositionApi);
//   locale.use(opts.locale);
//   locale.i18n(opts.i18n);
//   Object.values(components).forEach(component => {
//     if (typeof component === 'function') {
//       Vue.use(component);
//     } else {
//       Vue.component(component.name, component);
//     }
//   });
//   Vue.prototype.$nMessage = nMessage;
// };

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

// export default {
//   locale: locale.use,
//   i18n: locale.i18n,
//   install,
//   ...components
// };

import VueCompositionApi from '@vue/composition-api';
import nAlert from 'packages/nAlert/src/index.vue';
import nButton from 'packages/nButton/src/index.vue';
import nCard from 'packages/nCard/src/index.vue';
import nBadge from 'packages/nBadge/src/index.vue';
import nLoader from 'packages/nLoader/src/index.vue';
import nIcon from 'packages/nIcon/src/index.vue';
import nMessage from 'packages/nMessage/src/index.vue';
import nButtonGroup from 'packages/nButtonGroup/src/index.vue';
import nInput from 'packages/nInput/src/index.vue';
import nCol from 'packages/nCol/src/index.vue';
import nRow from 'packages/nRow/src/index.vue';
import nToast from 'packages/nToast/src/index.vue';
import nTable from 'packages/nTable/src/index.vue';
import nPagination from 'packages/nPagination/src/index.vue';
import nModal from 'packages/nModal/src/index.vue';
import nProgress from 'packages/nProgress/src/index.vue';
import nDrawer from 'packages/nDrawer/src/index.vue';
import nAvatar from 'packages/nAvatar/src/index.vue';
import nUpload from 'packages/nUpload/src/index.vue';
import nList from 'packages/nList/src/index.vue';
import nToggle from 'packages/nToggle/src/index.vue';
import nRate from 'packages/nRate/src/index.vue';
import nTooltip from 'packages/nTooltip/src/index.vue';
import nTree from 'packages/nTree/src/index.vue';


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
  nToast,
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
  nTree,
  nTooltip,
};


export default {
  ...components
};
