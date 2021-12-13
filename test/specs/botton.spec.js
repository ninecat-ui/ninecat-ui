import nButton from '../../packages/n-button';
import { mount } from '@vue/test-utils';

describe('nButton', () => {
  it('render default style when not define type', () => {
    const wrapper = mount(nButton);
    expect(wrapper.classes()).toContain('nbutton-type-default');
  });
  it('create primary button', () => {
    const wrapper = mount({
      render () {
        return <nButton type="primary">Primary</nButton>;
      }
    });
    expect(wrapper.find('.nbutton-type-primary').exists()).toBe(true);
  });
  it('render size corrctly', () => {
    const wrapper = mount({
      render () {
        return <nButton size="lg">lg</nButton>;
      }
    });
    expect(wrapper.find('.nbutton-size-lg').exists()).toBe(true);
  });
  it('should support loading', () => {
    const wrapper = mount({
      render () {
        return <nButton loading={true}>loading</nButton>;
      }
    });
    expect(wrapper.find('.loadding').exists()).toBe(true);
  });
  it('should support icon', () => {
    const wrapper = mount({
      render () {
        return <nButton icon="icon-home" />;
      }
    });
    expect(wrapper.find('.icon-home').exists()).toBe(true);
  });
  it('should support disable', () => {
    const wrapper = mount({
      render () {
        return <nButton disabled={true} />;
      }
    });
    expect(wrapper.find('.nbutton-disabled').exists()).toBe(true);
  });
});
