import { createVue, destroyVm } from '../utils/util';

describe('nList', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: '<n-list />'
    }, true);
    expect(vm.$el).toBeTruthy();
  });
});
