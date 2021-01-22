import { defineComponent,App,HTMLAttributes,SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';



const initDefaultProps = {
  data:[],
  size: 'md',
  bordered: false,
  hover: false
}

export interface ListProps extends HTMLAttributes {
  data?: Array<any>;
  size?: string;
  bordered?: boolean;
  hover?: boolean;
}

const NList = defineComponent({
  name: 'NList',
  setup(_:ListProps, {attrs}: SetupContext) {
    const props = attrs as ListProps;
    const {data,size,bordered,hover} = {...initDefaultProps,...props};

    const ulClass = () => {
      const ulClassList = ['n-list',bordered ? 'bordered' : '']
      return classNames(ulClassList)
    }

    const listClass = () => {
      let classList = [];
      if (size && typeof size === 'string') {
        classList.push(size)
      }
      if (bordered) {
        classList.push('bordered')
      }
      if (hover) {
        classList.push('hover')
      }
      return classNames(classList);
    }

    const renderLi = () => {
      let res = data.map(dataItem => {
        return <li class={listClass()}>{dataItem}</li>
      })
      return (<>{res}</>)
    }

    return () => (
      <ul class={ulClass()}>
        {renderLi()}
      </ul>
    )
  }
})

NList.install = function (app: App) {
  app.component(NList.name, NList);
  return app;
};

export default NList;
