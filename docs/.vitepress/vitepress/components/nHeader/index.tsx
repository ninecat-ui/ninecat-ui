import { defineComponent, PropType } from 'vue';
import './index.scss'
import logo from '../../img/logo.svg'

const NHeader = defineComponent({
  name:'NHeader',
  setup() {
    return () => <div class="n-header">
      <a class="title">
        <img class="logo" src={logo} />
        <span class="text">NINECAT UI</span>
      </a>
    </div>
  }
})

export default NHeader