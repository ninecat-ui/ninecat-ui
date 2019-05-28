import NLoader from './src/index.vue'

NLoader.install = function (Vue) {
  Vue.component(NLoader.name, NLoader)
}

export default NLoader
