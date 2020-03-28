import nUpload from './src/index.vue';

nUpload.install = function (Vue) {
  Vue.component(nUpload.name, nUpload);
};

export default nUpload;
