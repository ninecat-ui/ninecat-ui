import Vue from 'vue'
import '../assets/font/iconfont.css'
import nAlert from '../packages/nAlert'
import nButton from '../packages/nButton'
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
const components = {
  nAlert: nAlert,
  nButton: nButton,
  nLoader: nLoader,
  NIcon: nIcon,
  nMessage: nMessage,
  nButtonGroup: nButtonGroup,
  nInput: nInput,
  nCol: nCol,
  nRow: nRow,
  nToast: nToast,
  nTable: nTable,
  nPagination: nPagination,
  nModal: nModal
}

Object.values(components).forEach(component => {
  Vue.use(component)
})
