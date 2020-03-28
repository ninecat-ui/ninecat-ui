import { createVue, destroyVm } from '../utils/util';

describe('nDrawer', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `<n-drawer title="Drawer Title" :show='show'/>`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    expect(vm.$el).toBeTruthy();
  });

  it('confirm', () => {
    vm = createVue({
      template: `<n-drawer title='Drawer Title' :show='show' />`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    vm.$children[0].$el.querySelector('.primary').click();
  });

  it('cancel', () => {
    vm = createVue({
      template: `<n-drawer title='Drawer Title' :show='show' />`,
      data () {
        return {
          show: true
        };
      }
    }, true);
    vm.$children[0].$el.querySelector('.default').click();
  });
});
