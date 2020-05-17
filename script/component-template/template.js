import nComponentName from './src/index.vue';

nComponentName.install = function (Vue) {
  Vue.component(nComponentName.name, nComponentName);
};

export default nComponentName;
