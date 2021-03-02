import NAvatar from '../../packages/n-avatar';
import { mount } from '@vue/test-utils';

describe('NAvatar', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <NAvatar>Follow</NAvatar>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('render img when has src', () => {
    const wrapper = mount({
      render () {
        return <NAvatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />;
      }
    });
    expect(wrapper.find('.navatar-img').exists()).toBe(true);
  });
  it('render shape correctly', () => {
    const wrapper = mount({
      render () {
        return <NAvatar shape="circle" />;
      }
    });
    expect(wrapper.find('.navatar-circle').exists()).toBe(true);
  });
  it('render size correctly', () => {
    const wrapper = mount({
      render () {
        return <NAvatar size="lg" />;
      }
    });
    expect(wrapper.find('.navatar-lg').exists()).toBe(true);
  });
});
