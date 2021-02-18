import nCol from '../../packages/n-col';
import { mount } from '@vue/test-utils';

describe('nCol', () => {
  it('name should return NCol', () => {
    const wrapper = mount(nCol);
    expect(wrapper.exists()).toBe(true);
  });
});
