import { defineComponent, PropType } from 'vue';
import Example from './example.vue';
import Code from './code.vue'
import { decode } from 'punycode';

const NDemoProps = {
  path: {
    type: String as PropType<''>
  },
  demos: {
    type: Object as PropType<{}>
  },
  source: {
    type: String as PropType<''>
  }
}


const NDemo = defineComponent({
  name: 'NDemo',
  props: NDemoProps,
  setup(props) {
    // console.log(props.source)
    const getFormatPathDemos = () => {
      const demos = {}
      Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../../examples/', '').replace('.vue', '')] =
          props.demos[key].default
      })
      return demos
    }

    const a = decodeURIComponent(props.source)
    console.log(a)

    const formatPathDemos = getFormatPathDemos()
    return () => <div>
      <Example file={props.path} demo={formatPathDemos[props.path]} />
      <Code source={props.source} />
    </div>
  }
})

export default NDemo;