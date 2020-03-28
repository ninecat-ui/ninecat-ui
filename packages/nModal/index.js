import nModal from './src/index.vue';

nModal.install = function (Vue) {
  Vue.component(nModal.name, nModal);
};

export default nModal;
