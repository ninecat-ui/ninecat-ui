import nBadge from '../../packages/n-badge';
import { mount } from '@vue/test-utils';

describe('nBadge', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <nBadge>Follow</nBadge>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('render default style when not define type', () => {
    const wrapper = mount(nBadge);
    expect(wrapper.classes()).toContain('n-badge');
  });
  it('render chinese characters correctly', () => {
    const wrapper = mount({
      render () {
        return <nBadge>测试</nBadge>;
      }
    });
    expect(wrapper.text()).toBe('测试');
  });
  it('render correctly content', () => {
    const wrapper = mount({
      render () {
        return <nBadge content={99} />;
      }
    });
    expect(wrapper.text()).toBe('99');
  });
});
