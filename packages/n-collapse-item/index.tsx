import { defineComponent, App, PropType, SetupContext,ref } from "vue";
import classNames from "../../src/utils/className";
import './index.scss'
import {useInjectCollapse} from '../context/collapse'
import NIcon from '../n-icon'

const NCollapseItemProps = {
  title:String,
  name:{
    type: [String,Number],
    default:''
  }
}

const NCollapseItem = defineComponent({
  name:'NCollapseItem',
  props:NCollapseItemProps,
  setup(props, {slots}:SetupContext) {
    const {activeNames,handleItemClick} = useInjectCollapse()


    const headClick = (name:string|number) => {
      handleItemClick(name)
    }

    
    return () => (
      <div class="n-collapse-item">
        <div class="n-collapse-item-head" onClick={() => headClick(props.name)}>
          <span class="n-collapse-item-head-action">{
            activeNames.value?.includes(props.name) ? <i style={{fontSize:'12px'}} class='iconfont icon-angle-down' /> : <i style={{fontSize:'12px'}} class='iconfont icon-angle-right' />
          } </span>
          {props.title}
        </div>
        {
          activeNames.value?.includes(props.name) && <div class="n-collapse-item-content">
          <div class="n-collapse-item-content-box">
            {slots.default && slots.default()}
          </div>
        </div>
        }
      </div>
    )
  }
})

NCollapseItem.install = function (app: App) {
  app.component(NCollapseItem.name, NCollapseItem);
  return app;
};

export default NCollapseItem