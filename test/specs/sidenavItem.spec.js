import nSidenavItem from '../../packages/nSidenavItem';
import { mount } from '@vue/test-utils';

describe('nSidenavItem', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nSidenavItem);
    expect(wrapper.classes()).toContain('default');
  });
});