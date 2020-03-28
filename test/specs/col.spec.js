import nCol from '../../packages/nCol';
import { mount } from '@vue/test-utils';

describe('nCol', () => {
  it('name should return NCol', () => {
    const wrapper = mount(nCol);
    expect(wrapper.name()).toBe('NCol');
  });
});
