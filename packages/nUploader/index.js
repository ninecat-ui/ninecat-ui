import nUploader from './src/index.vue'

nUploader.install = function (Vue) {
  Vue.component(nUploader.name, nUploader)
}

export default nUploader
