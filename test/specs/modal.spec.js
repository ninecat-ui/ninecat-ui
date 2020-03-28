import { createVue, destroyVm } from '../utils/util';

describe('nModal', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `<n-modal title='modal title' :show='show'/>`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    expect(vm.$el).toBeTruthy();
  });

  it('open and close', () => {
    vm = createVue({
      template: `<n-modal title='modal title' :show='show' ref='modal'/>`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    vm.$children[0].$el.querySelector('.nbutton-content').click();
  });

  it('confirm and cancel', () => {
    vm = createVue({
      template: `<n-modal title='modal title' :show='show' ref='modal'/>`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    vm.$children[0].$el.querySelector('.default').click();
  });
});
