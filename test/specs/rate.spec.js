import nRate from '../../packages/n-rate';
import { mount } from '@vue/test-utils';

describe('nRate', () => {
  it('name should return nRate', () => {
    const wrapper = mount(nRate);
    expect(wrapper.name()).toBe('NRate');
  });
  it('create primary button', () => {
    const wrapper = mount({
      render () {
        return <nRate value="3" />;
      }
    });
    expect(wrapper.find('.icon-collection-fill').exists()).toBe(true);
  });
});
