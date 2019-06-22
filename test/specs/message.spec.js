import { getRenderedVm } from '../utils/util'
import nMessage from '../../packages/nMessage'

describe('nMessage', () => {
  it('render nothing when the show is false', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: false
    })
    expect(nMessageVm.message).toEqual('')
  })
  it('render something text when message is something', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true,
      message: 'something'
    })
    expect(nMessageVm.message).toEqual('something')
  })
  it('render info style defalut', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true
    })
    expect(nMessageVm.$el.querySelector('.info')).toBeTruthy()
  })
  it('render info style when the type is info', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true,
      type: 'info'
    })
    expect(nMessageVm.$el.querySelector('.info')).toBeTruthy()
  })
  it('render success style when the type is success', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true,
      type: 'success'
    })
    expect(nMessageVm.$el.querySelector('.success')).toBeTruthy()
  })
  it('render warning style when the type is warning', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true,
      type: 'warning'
    })
    expect(nMessageVm.$el.querySelector('.warning')).toBeTruthy()
  })
  it('render error style when the type is error', () => {
    let nMessageVm = getRenderedVm(nMessage, {
      show: true,
      type: 'error'
    })
    expect(nMessageVm.$el.querySelector('.error')).toBeTruthy()
  })
})
