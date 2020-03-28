import { createVue, destroyVm } from '../utils/util';

describe('nTable', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <n-table
          :columns="columns"
          :data="data"
        />`,
      data () {
        return {
          columns: [{
            title: 'name',
            dataIndex: 'name',
            align: 'center',
            width: 100
          }],
          data: [
            { name: 'name', age: '11', sex: 'male', address: 'shanghai' }
          ]
        };
      }
    }, true);
    expect(vm.$el).toBeTruthy();
  });
});
