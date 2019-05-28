import Vue from 'vue'
import nButton from '../packages/nButton'
import nLoader from '../packages/nLoader'

const components = {
  nButton: nButton,
  nLoader: nLoader
}

Object.values(components).forEach(component => {
  component.install(Vue)
})
