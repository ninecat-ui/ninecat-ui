import Vue from 'vue'
import '../assets/font/iconfont.css'
import nButton from '../packages/nButton'
import nLoader from '../packages/nLoader'
import NIcon from '../packages/nIcon'
import nMessage from '../packages/nMessage'

const components = {
  nButton: nButton,
  nLoader: nLoader,
  NIcon: NIcon,
  nMessage: nMessage
}

Object.values(components).forEach(component => {
  Vue.use(component)
})
