import Vue from 'vue/dist/vue.js';
import Ninecat from '../../src/index.js';

Vue.use(Ninecat);

let id = 0;

const createElm = function () {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

/**
 * Recycle vm
 * @param {Object} vm
 */
function destroyVm (vm) {
  vm.$destroy && vm.$destroy();
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
}

/**
 * Create a Vue instance object
 * @param {Object} component
 * @param {Boolean=false} mounted
 * @return {Object} vm
 */
function createVue (component, mounted = false) {
  if (Object.prototype.toString.call(component) === '[object String]') {
    component = { template: component };
  }
  return new Vue(component).$mount(mounted === false ? null : createElm());
}

/**
 * Get the generated vm
 *
 * @param {Object} component component
 * @param {Object} propsData props data
 * @return {Object} Vue instance
 */
function getRenderedVm (component, propsData) {
  const Ctor = Vue.extend(component);
  const vm = new Ctor({ propsData }).$mount();
  return vm;
}

export { destroyVm, createVue, getRenderedVm };
