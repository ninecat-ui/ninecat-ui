// import { defineComponent,HTMLAttributes } from 'vue';
import {defineComponent, HTMLAttributes, createApp} from 'vue';
import './index.scss';


function getStyle(color:any) {
  return {
    background: color,
    color:color ? '#ffffff' : ''
  }
}

export interface TagProps extends HTMLAttributes {
  type?: string;
  color?: string;
  closable?: boolean;
}


export default defineComponent({
  name: 'NTag',
  setup(props:TagProps, { slots }) {
    console.log(props)
    return () => (
      <div>{slots.default && slots.default()}</div>
    )
    // return () => (
    //   <div class="n-tag">
    //     <div class={props.type} style={getStyle(props.color)}>
    //       {slots.default && slots.default()}
    //       {props.closable !== false && <i class='iconfont icon-times' />}
    //     </div>
    //   </div>
    // )
  }
})
