import Vue from 'vue'

/**
 * Get the generated vm
 *
 * @param {Object} Component component
 * @param {Object} propsData props data
 * @return {Object} Vue instance
 */
function getRenderedVm (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

export { getRenderedVm }
