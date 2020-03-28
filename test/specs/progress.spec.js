import { createVue, destroyVm } from '../utils/util';

describe('nProgress', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `<n-progress />`
    }, true);
    expect(vm.$el).toBeTruthy();
  });
});
