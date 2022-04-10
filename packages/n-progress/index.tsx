import { defineComponent, App } from 'vue';
import './index.scss';

const PropgressProps = {
  type: {
    type: String,
    default: 'line'
  },
  percent: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: '#e5e5ea'
  },
  backgroundColor: {
    type: String,
    default: '#e5e5ea'
  },
  isAnimation: {
    type: Boolean,
    default: true
  },
  isRound: {
    type: Boolean,
    default: true
  },
  id: {
    type: [String, Number],
    default: 1
  },
  duration: {
    type: [String, Number],
    default: 1000
  },
  delay: {
    type: [String, Number],
    default: 200
  },
  timeFunction: {
    type: String,
    default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
  },
  width: {
    type: Number,
    default: 10
  },
  strokeWidth: {
    type: Number,
    default: 10
  }
};

const NProgress = defineComponent({
  name: 'NProgress',
  props: PropgressProps,
  setup (props) {
    const renderLine = () => {
      return <div
        class="n-progress-line"
      >
        <div
          class="n-progress-line-outer"
          style={{ height: `${props.width}px` }}
        >
          <div
            class="n-progress-line-inner"
          >
            <div
              class="n-progress-line-bg"
              style={{ background: props.color, width: `${props.percent}%` }}
            />
          </div>
        </div>
        <div class="n-progress-info">
          {props.percent + '%'}
        </div>
      </div>;
    };

    const renderCircle = () => {
      return <div
        class="n-progress-circle"
        style={{ width: `${props.width}px` }}
      >
        <svg
          style="transform: rotate(-90deg)"
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.width}
        >
          <circle
            r={(props.width - props.strokeWidth) / 2}
            cy={props.width / 2}
            cx={props.width / 2}
            stroke-width={props.strokeWidth}
            stroke={props.backgroundColor}
            fill="none"
          />
          <circle
            ref="$bar"
            r={(props.width - props.strokeWidth) / 2}
            cy={props.width / 2}
            cx={props.width / 2}
            stroke={props.color}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.isRound ? 'round' : 'square'}
            stroke-dasharray={(props.width - props.strokeWidth) * 3.14}
            stroke-dashoffset={(props.width - props.strokeWidth) * 3.14 * (100 - props.percent) / 100}
            fill="none"
          />
        </svg>
        <span>{props.percent + '%'}</span>
      </div >;
    };

    return () => (
      <div class="n-progress">
        {props.type === 'line' ? renderLine() : renderCircle()}
      </div >
    );
  },
  data () {
    return {};
  },
  mounted () { }

});

NProgress.install = function (app: App) {
  app.component(NProgress.name, NProgress);
  return app;
};

export default NProgress;
