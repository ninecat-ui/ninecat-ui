import { defineComponent } from '@vue/composition-api';
import './index.scss';


function getStyle(color:any) {
  return {
    background: color,
    color:color ? '#ffffff' : ''
  }
}

export default defineComponent({
  name: 'NTag',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      defalut: 'blue'
    },
    closable: {
      type: [String,Boolean],
    }
  },
  setup(props:any, { slots }) {
    console.log(props)
    return () => (
      <div class="n-tag">
        <div class={props.type} style={getStyle(props.color)}>
          {slots.default && slots.default()}
          {props.closable !== false && <i class='iconfont icon-times' />}
        </div>
      </div>
    )
  }
})
