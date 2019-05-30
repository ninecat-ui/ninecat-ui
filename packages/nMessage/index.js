import nMessage from './src/index.vue'

nMessage.install = function (Vue) {
  Vue.component(nMessage.name, nMessage)
}

export default nMessage
