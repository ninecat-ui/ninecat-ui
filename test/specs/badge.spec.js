import nBadge from '../../packages/nBadge';
import { mount } from '@vue/test-utils';

describe('nBadge', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nBadge);
    expect(wrapper.classes()).toContain('n-badge');
  });
});
