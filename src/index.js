import './../assets/font/iconfont.css'
import nAlert from '../packages/nAlert'
import nButton from '../packages/nButton'
import nBadge from '../packages/nBadge'
import nLoader from '../packages/nLoader'
import nIcon from '../packages/nIcon'
import nMessage from '../packages/nMessage'
import nButtonGroup from '../packages/nButtonGroup'
import nInput from '../packages/nInput'
import nCol from '../packages/nCol'
import nRow from '../packages/nRow'
import nToast from '../packages/nToast'
import nTable from '../packages/nTable'
import nPagination from '../packages/nPagination'
import nModal from '../packages/nModal'
import nProgress from '../packages/nProgress'
import nDrawer from '../packages/nDrawer'
import nAvatar from '../packages/nAvatar'
import nUpload from '../packages/nUpload'
import locale from './locale/index'

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
  nUpload
}

const install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$nMessage = nMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  locale: locale.use,
  i18n: locale.i18n,
  install,
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
  nAvatar
}
