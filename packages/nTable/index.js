import nTable from './src/index.vue';

nTable.install = function (Vue) {
  Vue.component(nTable.name, nTable);
};

export default nTable;
