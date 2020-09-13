import nSubSidenav from '../../packages/nSubSidenav';
import { mount } from '@vue/test-utils';

describe('nSubSidenav', () => {
  it('name should return nSubSidenav', () => {
    const wrapper = mount(nSubSidenav);
    expect(wrapper.name()).toBe('NSubSidenav');
  });
});
