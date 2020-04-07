import nRate from '../../packages/nRate';
import { mount } from '@vue/test-utils';

describe('nRate', () => {
  it('name should return nRate', () => {
    const wrapper = mount(nRate);
    expect(wrapper.name()).toBe('NRate');
  });
});
