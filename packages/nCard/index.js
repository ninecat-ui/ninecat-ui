import nCard from './src/index.vue';

nCard.install = function (Vue) {
  Vue.component(nCard.name, nCard);
};

export default nCard;
