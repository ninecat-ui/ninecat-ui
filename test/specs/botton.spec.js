import nButton from '../../packages/n-button';
import { mount } from '@vue/test-utils';

describe('nButton', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nButton);
    expect(wrapper.classes()).toContain('default');
  });
  it('create primary button', () => {
    const wrapper = mount({
      render () {
        return <nButton type="primary">Primary</nButton>;
      }
    });
    expect(wrapper.find('.primary').exists()).toBe(true);
  });
});
