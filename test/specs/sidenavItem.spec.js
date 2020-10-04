import nSidenavItem from '../../packages/n-sidenav-item';
import { mount } from '@vue/test-utils';

describe('nSidenavItem', () => {
  it('name should return nSubSidenav', () => {
    const wrapper = mount(nSidenavItem);
    expect(wrapper.name()).toBe('NSidenavItem');
  });
});
