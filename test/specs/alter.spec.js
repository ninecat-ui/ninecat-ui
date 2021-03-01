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
  it('render closeicon when the closable', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} message={'test'} closable/>;
      }
    });
    expect(wrapper.find('.icon-times').exists()).toBe(true);
  });
  it('render closeText when the closeText is close', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} message={'test'} closable closeText="close"/>;
      }
    });
    expect(wrapper.find('.close-text').exists()).toBe(true);
  });
  it('render description when has description', () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} description="description" message={'test'} closable closeText="close"/>;
      }
    });
    expect(wrapper.find('.description').exists()).toBe(true);
  });
  it('when click close icon, close this alter', async () => {
    const wrapper = mount({
      render () {
        return <NAlter show={true} message={'test'} closable/>;
      }
    });
    await wrapper.find('.icon-times').trigger('click');
    expect(wrapper.find('.base-alter').exists()).toBe(false);
  });
});
