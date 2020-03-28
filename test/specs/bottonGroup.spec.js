import nButtonGroup from '../../packages/nButtonGroup';
import { mount } from '@vue/test-utils';

describe('nButtonGroup', () => {
  it('name should return NButtonGroup', () => {
    const wrapper = mount(nButtonGroup);
    expect(wrapper.name()).toBe('NButtonGroup');
  });
});
