import NButton from './src/index.vue';

NButton.install = function (Vue) {
  Vue.component(NButton.name, NButton);
};

export default NButton;
