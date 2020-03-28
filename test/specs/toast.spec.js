import nToast from '../../packages/nToast';
import { mount } from '@vue/test-utils';

describe('nToast', () => {
  it('name should return NToast', () => {
    const wrapper = mount(nToast);
    expect(wrapper.name()).toBe('NToast');
  });
});
