import nSidenav from '../../packages/nSidenav';
import { mount } from '@vue/test-utils';

describe('nSidenav', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nSidenav);
    expect(wrapper.classes()).toContain('default');
  });
});