import { App,defineComponent, PropType, SetupContext, ref } from "vue";
import './index.scss'
import useProvideCollapse from '../context/collapse';
import {ensureArray} from '../../src/utils/util'


export type CollapseActiveName = string | number

const NCollapseProps = {
  accordion: Boolean,
  modelValue: {
    type: [Array, String, Number],
    default: () => [],
  },
}

const NCollapse = defineComponent({
  name:'NCollapse',
  props:NCollapseProps,
  setup(props, {slots}:SetupContext) {
    const activeNames = ref(ensureArray(props.modelValue))

    const setActiveNames = (_activeNames: CollapseActiveName[]) => {
      activeNames.value = _activeNames
      // const value = props.accordion ? activeNames.value[0] : activeNames.value
      // emit(UPDATE_MODEL_EVENT, value)
      // emit(CHANGE_EVENT, value)
    }

    const handleItemClick = (name: CollapseActiveName) => {
      if (props.accordion) {
        setActiveNames([
          (activeNames.value[0] || activeNames.value[0] === 0) &&
          activeNames.value[0] === name
            ? ''
            : name,
        ])
      } else {
        const _activeNames = [...activeNames.value]
        const index = _activeNames.indexOf(name)
    
        if (index > -1) {
          _activeNames.splice(index, 1)
        } else {
          _activeNames.push(name)
        }
        setActiveNames(_activeNames)
      }
    }

    useProvideCollapse ({
      activeNames,
      handleItemClick
    })
    return () => {
      return  <div class="n-collapse">
       {slots.default && slots.default()}
      </div>
    }
  }
})

NCollapse.install = function (app: App) {
  app.component(NCollapse.name, NCollapse);
  return app;
};

export default NCollapse