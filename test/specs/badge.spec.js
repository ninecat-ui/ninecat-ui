import NBadge from '../../packages/n-badge';
import { mount } from '@vue/test-utils';

describe('NBadge', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <NBadge>Follow</NBadge>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('render default style when not define type', () => {
    const wrapper = mount(NBadge);
    expect(wrapper.classes()).toContain('n-badge');
  });
  it('render chinese characters correctly', () => {
    const wrapper = mount({
      render () {
        return <NBadge>测试</NBadge>;
      }
    });
    expect(wrapper.text()).toBe('测试');
  });
  it('render correctly content', () => {
    const wrapper = mount({
      render () {
        return <NBadge content="99" />;
      }
    });
    expect(wrapper.text()).toBe('99');
  });
});
