// import NPagination from './src/index.vue';
import { defineComponent, App, PropType, toRefs } from 'vue';
import './index.scss';

const PaginationProps = {
  total: {
    type: Number as PropType<number>,
    default: 0
  },
  current: {
    type: Number as PropType<number>,
    default: 1
  },
  pageSize: {
    type: Number as PropType<number>,
    default: 10
  },
  size: {
    type: String as PropType<string>,
    default: 'sm'
  },
  onChangePgae: {
    type: Function as PropType<() => void>,
    default: function () { }
  }
};

const NPagination = defineComponent({
  name: 'NPagination',
  props: PaginationProps,
  setup (props) {
    const { total, current, pageSize, size } = toRefs(props);

    const getPageKeyMap = (total, pageSize) => {
      const pageKeyMap = [];
      const page = Math.ceil(total / pageSize);
      for (let i = 1; i <= page; i += 1) {
        pageKeyMap.push({
          key: i,
          value: i
        });
      }
      return pageKeyMap;
    };

    const nPageKeyMap = getPageKeyMap(total.value, pageSize.value);

    return () => (
      <div>
        <ul>
          <li><a>&laquo;</a></li>
          <li><a>&lsaquo;</a></li>
          {nPageKeyMap.map(dataItem => {
            const aClass = dataItem.value === current.value ? 'active' : '';
            return <li class={size.value}> <a class={aClass}>{dataItem.value}</a> </li>;
          })}
          <li><a>&rsaquo;</a></li>
          <li><a>&raquo;</a></li>
        </ul >
      </div >
    );
  }
});

NPagination.install = function (app: App) {
  app.component(NPagination.name, NPagination);
};

export default NPagination;
