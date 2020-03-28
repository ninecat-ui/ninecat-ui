import nButton from '../../packages/nButton';
import { mount } from '@vue/test-utils';

describe('nButton', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nButton);
    expect(wrapper.classes()).toContain('default');
  });
});
