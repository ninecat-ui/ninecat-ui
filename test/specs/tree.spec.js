import nTree from '../../packages/nTree';
import { mount } from '@vue/test-utils';

describe('nTree', () => {
  it('name should return NTree', () => {
    const wrapper = mount(nTree);
    expect(wrapper.name()).toBe('NTree');
  });
});
