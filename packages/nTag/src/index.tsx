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
    color: {
      type: String,
    }
  }
})

function getStyle(color: String) {
  return {
    background: color,
    color:color ? '#ffffff' : ''
  }
}

@Component
export default class nTag extends nTagProps {
  render(h: CreateElement) {
    return (
     <div class="n-tag">
       <div class={this.type} style={getStyle(this.color)}>
        <span>tag</span>
      </div>
     </div>
    )
  }
}

