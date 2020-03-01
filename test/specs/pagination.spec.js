import { createVue, destroyVm } from '../utils/util'

describe('nPagination', () => {
  let vm
  afterEach(() => {
    destroyVm(vm)
  })

  it('create', () => {
    vm = createVue({
      template: `
        <n-pagination
          :total="total"
          :page-size="pageSize"
          :current="current"
        />
      `,
      data () {
        return {
          total: 100,
          pageSize: 10,
          current: 1
        }
      }
    }, true)
    expect(vm.$el).toBeTruthy()
  })
})
