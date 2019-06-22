import { getRenderedVm } from '../utils/util'
import nAlert from '../../packages/nAlert'

describe('nAlert', () => {
  it('render nothing when the show is false', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: false
    })
    expect(nAlertVm.message).toEqual('')
  })
  it('render something text when message is something', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      message: 'something'
    })
    expect(nAlertVm.message).toEqual('something')
  })
})
