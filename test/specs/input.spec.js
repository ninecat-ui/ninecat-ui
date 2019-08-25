import nInput from '../../packages/nInput'
import { mount } from '@vue/test-utils'

describe('nInput', () => {
  it('name should return NInput', () => {
    const wrapper = mount(nInput)
    expect(wrapper.name()).toBe('NInput')
  })
})
