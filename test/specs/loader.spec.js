import { getRenderedVm } from '../utils/util'
import nLoader from '../../packages/nLoader'

describe('nLoader', () => {
  it('render Loading... text default', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true
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
  it('render md size default', () => {
    let nLoaderVm = getRenderedVm(nLoader, {
      show: true,
      size: ''
    })
    expect(nLoaderVm.$el.querySelector('.loadding-text.md-text')).toBeTruthy()
  })
})
