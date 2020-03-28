import { createVue, destroyVm } from '../utils/util';

describe('nInput', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });
  it('default to empty', () => {
    vm = createVue({
      template: '<n-input />'
    }, true);
    let inputElm = vm.$el.querySelector('input');
    expect(inputElm.value).toEqual('');
  });
});
