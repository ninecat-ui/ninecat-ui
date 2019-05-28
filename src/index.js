import Vue from 'vue'
import '../assets/font/iconfont.css'
import nButton from '../packages/nButton'
import nLoader from '../packages/nLoader'
import NIcon from '../packages/nIcon'

const components = {
  nButton: nButton,
  nLoader: nLoader,
  NIcon: NIcon
}

Object.values(components).forEach(component => {
  component.install(Vue)
})
