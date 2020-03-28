import nAlert from './src/index.vue';

nAlert.install = function (Vue) {
  Vue.component(nAlert.name, nAlert);
};

export default nAlert;
