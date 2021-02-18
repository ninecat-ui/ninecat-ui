import Rate from '../../packages/n-rate';
import { mount } from '@vue/test-utils';

describe('nRate', () => {
  it('name should return nRate', () => {
    const wrapper = mount(Rate);
    expect(wrapper.exists()).toBe(true);
  });
  it('create primary button', () => {
    const wrapper = mount({
      render () {
        return (<Rate value="3" />);
      }
    });
    expect(wrapper.find('.icon-collection-fill').exists()).toBe(true);
  });
});
