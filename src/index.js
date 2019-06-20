import Vue from 'vue'
import '../assets/font/iconfont.css'
import nAlert from '../packages/nAlert'
import nButton from '../packages/nButton'
import nLoader from '../packages/nLoader'
import NIcon from '../packages/nIcon'
import nMessage from '../packages/nMessage'
import nButtonGroup from '../packages/nButtonGroup'

const components = {
  nAlert: nAlert,
  nButton: nButton,
  nLoader: nLoader,
  NIcon: NIcon,
  nMessage: nMessage,
  nButtonGroup: nButtonGroup
}

Object.values(components).forEach(component => {
  Vue.use(component)
})
