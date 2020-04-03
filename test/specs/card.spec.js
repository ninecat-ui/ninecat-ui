import nCard from '../../packages/nCard'
import { mount } from '@vue/test-utils'

describe('nCard', () => {
  it('name should return NCol', () => {
    const wrapper = mount(nCard)
    expect(wrapper.name()).toBe('NCard')
  })
})
