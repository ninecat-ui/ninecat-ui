import nSubSidenav from '../../packages/nSubSidenav';
import { mount } from '@vue/test-utils';

describe('nSubSidenav', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nSubSidenav);
    expect(wrapper.classes()).toContain('default');
  });
});
