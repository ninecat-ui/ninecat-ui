import NAlter from '../../packages/n-alert';
import { mount } from '@vue/test-utils';

describe('NAlter', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true}/>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders correctly type', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} type="info"/>;
      }
    });
    expect(wrapper.classes()).toContain('info');
  });
  it('renders correctly message', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} message={'test'}/>;
      }
    });
    expect(wrapper.text()).toBe('test');
  });
});
