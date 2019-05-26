import Vue from 'vue'
import nButton from '../packages/nButton'

const components = {
  nButton: nButton
}

Object.values(components).forEach(component => {
  component.install(Vue)
})
