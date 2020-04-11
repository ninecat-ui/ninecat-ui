import nTooltip from '../../packages/nTooltip';
import { mount } from '@vue/test-utils';

describe('nTooltip', () => {
  it('name should return NTooltip', () => {
    const wrapper = mount(nTooltip);
    expect(wrapper.name()).toBe('NTooltip');
  });
});
