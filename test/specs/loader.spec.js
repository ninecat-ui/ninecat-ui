import Vue from 'vue'
import nLoader from '../../packages/nLoader'
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

describe('nLoader', () => {
  it('render Loading... text default', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'md'
    })
    expect(nLoaderVm.loaddingText).toEqual('Loading...')
  })
  it('render Starting... text when loaddingText is Starting...', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'md',
      loaddingText: 'Starting...'
    })
    expect(nLoaderVm.loaddingText).toEqual('Starting...')
  })
  it('render xs size when size is xs', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'xs'
    })
    expect(nLoaderVm.$el.querySelector('.loadding-text.xs-text')).toBeTruthy()
  })
  it('render xs size when size is sm', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'sm'
    })
    expect(nLoaderVm.$el.querySelector('.loadding-text.sm-text')).toBeTruthy()
  })
  it('render xs size when size is md', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'md'
    })
    expect(nLoaderVm.$el.querySelector('.loadding-text.md-text')).toBeTruthy()
  })
  it('render xs size when size is lg', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: 'lg'
    })
    expect(nLoaderVm.$el.querySelector('.loadding-text.lg-text')).toBeTruthy()
  })
})
