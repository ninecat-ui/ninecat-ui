import { getRenderedVm } from '../utils/util';
import { mount } from '@vue/test-utils';
import nAlert from '../../packages/nAlert';

describe('nAlert', () => {
  it('render nothing when the show is false', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: false
    });
    expect(nAlertVm.message).toEqual('');
  });
  it('render something text when message is something', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      message: 'something'
    });
    expect(nAlertVm.message).toEqual('something');
  });
  it('when click the close icon,this component close', () => {
    const wrapper = mount(nAlert);
    const closeIcon = wrapper.find('#alertCloseIcon');
    closeIcon.trigger('click');
    expect(wrapper.text()).toEqual('');
  });
  it('render info style defalut', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true
    });
    expect(nAlertVm.$el._prevClass.includes('info')).toBeTruthy();
  });
  it('render info style when the type is info', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      type: 'info'
    });
    expect(nAlertVm.$el._prevClass.includes('info')).toBeTruthy();
  });
  it('render success style when the type is success', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      type: 'success'
    });
    expect(nAlertVm.$el._prevClass.includes('success')).toBeTruthy();
  });
  it('render warning style when the type is warning', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      type: 'warning'
    });
    expect(nAlertVm.$el._prevClass.includes('warning')).toBeTruthy();
  });
  it('render error style when the type is error', () => {
    let nAlertVm = getRenderedVm(nAlert, {
      show: true,
      type: 'error'
    });
    expect(nAlertVm.$el._prevClass.includes('error')).toBeTruthy();
  });
});
