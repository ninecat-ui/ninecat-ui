import nTooltip from '../../packages/n-tooltip';
import { mount } from '@vue/test-utils';

describe('nTooltip', () => {
  it('should return NTooltip', () => {
    const wrapper = mount({
      render () {
        return <nTooltip />;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
