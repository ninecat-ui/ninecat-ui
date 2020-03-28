import { createVue, destroyVm } from '../utils/util';

describe('nAvatar', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: '<n-avatar />'
    }, true);
    expect(vm.$el).toBeTruthy();
  });
});
