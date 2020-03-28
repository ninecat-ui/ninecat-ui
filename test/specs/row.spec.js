import nRow from '../../packages/nRow';
import { mount } from '@vue/test-utils';

describe('nRow', () => {
  it('name should return NRow', () => {
    const wrapper = mount(nRow);
    expect(wrapper.name()).toBe('NRow');
  });
});
