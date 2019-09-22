import Vue from 'vue'
import '../assets/font/iconfont.css'
import nAlert from '../packages/nAlert'
import nButton from '../packages/nButton'
import nLoader from '../packages/nLoader'
import NIcon from '../packages/nIcon'
import nMessage from '../packages/nMessage'
import nButtonGroup from '../packages/nButtonGroup'
import nInput from '../packages/nInput'
import nCol from '../packages/nCol'
import nRow from '../packages/nRow'
import nToast from '../packages/nToast'
import nTable from '../packages/nTable'
const components = {
  nAlert: nAlert,
  nButton: nButton,
  nLoader: nLoader,
  NIcon: NIcon,
  nMessage: nMessage,
  nButtonGroup: nButtonGroup,
  nInput: nInput,
  nCol: nCol,
  nRow: nRow,
  nToast: nToast,
  nTable: nTable
}

Object.values(components).forEach(component => {
  Vue.use(component)
})
