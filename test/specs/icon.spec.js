import nIcon from '../../packages/n-icon';
import { mount } from '@vue/test-utils';

describe('nIcon', () => {
  it('name should return NToggle', () => {
    const wrapper = mount(nIcon);
    expect(wrapper.exists()).toBe(true);
  });
});
