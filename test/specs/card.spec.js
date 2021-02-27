import nCard from '../../packages/n-card';
import { mount } from '@vue/test-utils';

describe('nCard', () => {
  it('should return nCard', () => {
    const wrapper = mount({
      render () {
        return <nCard />;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should render correct title', () => {
    const wrapper = mount({
      render () {
        return <nCard title="test"/>;
      }
    });
    expect(wrapper.text()).toBe('test');
  });
  it('should render correct description', () => {
    const wrapper = mount({
      render () {
        return <nCard description="description"/>;
      }
    });
    expect(wrapper.text()).toBe('description');
  });
});
