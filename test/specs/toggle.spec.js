import nToggle from '../../packages/nToggle';
import { mount } from '@vue/test-utils';

describe('nToggle', () => {
  it('name should return NToggle', () => {
    const wrapper = mount(nToggle);
    expect(wrapper.name()).toBe('NToggle');
  });
});
