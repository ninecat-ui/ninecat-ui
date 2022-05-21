import { defineComponent, PropType, reactive } from "vue";
import Example from "./example.vue";
import Code from "./code.vue";
import CodeSvg from "../../img/code.svg";
import GithubSvg from "../../img/github.svg";
import CopySvg from "../../img/copy.svg";
import "./index.scss";
import "./demo.scss"
import NTooltip from "../../../../../packages/n-tooltip";

const NDemoProps = {
  path: {
    type: String as PropType<"">,
  },
  demos: {
    type: Object as PropType<{}>,
  },
  source: {
    type: String as PropType<"">,
  },
};

const NDemo = defineComponent({
  name: "NDemo",
  props: NDemoProps,
  setup(props: any) {

    const state = reactive({
      showCode:false
    })

    const getFormatPathDemos = () => {
      const demos = {};
      Object.keys(props.demos).forEach((key) => {
        demos[key.replace("../../examples/", "").replace(".vue", "")] =
          props.demos[key].default;
      });
      return demos;
    };

    const showCodeHandle = () => {
      state.showCode = !state.showCode
    }

    const formatPathDemos = getFormatPathDemos();
    return () => (
      <div class="n-demo-code">
        <Example file={props.path} demo={formatPathDemos[props.path]} />
        <div class="tool-btn-area">
          
          <img src={CopySvg} />
          <img src={GithubSvg} />
          <NTooltip placement="bottom" content="View Source">
            <img onClick={showCodeHandle} src={CodeSvg} />
          </NTooltip>
        </div>
        {/* <Transition name="slide-fade"> */}
        {
          state.showCode && <Code source={props.source} />
        }
        {/* </Transition> */}
      </div>
    );
  },
});

export default NDemo;
