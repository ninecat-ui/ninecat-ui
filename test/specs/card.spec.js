import nCard from '../../packages/n-card';
import { mount } from '@vue/test-utils';

describe('nCard', () => {
  it('name should return NCol', () => {
    const wrapper = mount(nCard);
    expect(wrapper.exists()).toBe(true);
  });
});
