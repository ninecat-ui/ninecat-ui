import { createVue, destroyVm } from '../utils/util'

describe('nModal', () => {
  let vm
  afterEach(() => {
    destroyVm(vm)
  })

  it('create', () => {
    vm = createVue({
      template: `<n-modal title='modal title' :show='show'/>`,
      data () {
        return {
          show: true
        }
      }
    }, true)
    expect(vm.$el).toBeTruthy()
  })
})
