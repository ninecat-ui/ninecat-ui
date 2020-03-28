import NPagination from './src/index.vue';

NPagination.install = function (Vue) {
  Vue.component(NPagination.name, NPagination);
};

export default NPagination;
