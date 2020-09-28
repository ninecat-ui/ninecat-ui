import nSubSidenav from '../../packages/n-sub-sidenav';
import { mount } from '@vue/test-utils';

// test

describe('nSubSidenav', () => {
  it('name should return nSubSidenav', () => {
    const wrapper = mount(nSubSidenav);
    expect(wrapper.name()).toBe('NSubSidenav');
  });
});
