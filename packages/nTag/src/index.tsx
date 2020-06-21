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
    }
  },
  setup(props:any) {
    return () => (
      <div class="n-tag">
        <div class={props.type} style={getStyle(props.color)}>
          <span>tag</span>
        </div>
      </div>
    )
  }
})
