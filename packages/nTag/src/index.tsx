import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'
import './index.scss';

const nTagProps = Vue.extend({
  name:'NTag',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
  }
})

@Component
export default class nTag extends nTagProps {
  render(h: CreateElement) {
    return (
     <div class="n-tag">
       <div class={this.type}>
        <span>tag</span>
      </div>
     </div>
    )
  }
}

