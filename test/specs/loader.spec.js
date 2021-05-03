import NLoader from '../../packages/n-loader';
import { mount } from '@vue/test-utils';

describe('NLoader', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <NLoader show={true}/>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('render size correctly', () => {
    const wrapper = mount({
      render () {
        return <NLoader size="lg" show={true}/>;
      }
    });
    expect(wrapper.find('.lg-text').exists()).toBe(true);
  });
  it('render chinese characters correctly', () => {
    const wrapper = mount({
      render () {
        return <NLoader show={true} loaddingText="加载中"/>;
      }
    });
    expect(wrapper.text()).toBe('加载中');
  });
});
