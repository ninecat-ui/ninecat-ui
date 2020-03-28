import nToast from './src/index.vue';

nToast.install = function (Vue) {
  Vue.prototype.$toast = function (message) {
    const Constructor = Vue.extend(nToast);
    const toast = new Constructor();
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
  };
};

export default nToast;
