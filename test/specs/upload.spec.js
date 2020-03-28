import { createVue, destroyVm } from '../utils/util';

describe('nUpload', () => {
  let vm;
  afterEach(() => {
    destroyVm(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <n-upload :fileList="fileList">
          <n-button>
            Click Upload
          </n-button>
        </n-upload>
      `,
      data () {
        return {
          fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }]
        };
      }
    }, true);
    expect(vm.$el).toBeTruthy();
  });
});
