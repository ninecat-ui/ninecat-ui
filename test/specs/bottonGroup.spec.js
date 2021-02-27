import nButtonGroup from '../../packages/n-button-group';
import nButton from '../../packages/n-button';
import { mount } from '@vue/test-utils';

describe('nButtonGroup', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <nButtonGroup>TEST</nButtonGroup>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('redner slot button correctly', () => {
    const wrapper = mount({
      render () {
        return <nButtonGroup><nButton>Primary</nButton></nButtonGroup>;
      }
    });
    expect(wrapper.text()).toBe('Primary');
  });
  it('redner slot two buttons in this nButtonGroup', () => {
    const wrapper = mount({
      render () {
        return (<nButtonGroup>
          <nButton type="primary">Primary</nButton>
          <nButton type="primary">Primary</nButton>
        </nButtonGroup>);
      }
    });
    expect(wrapper.find('.primary').exists()).toBe(true);
  });
});
