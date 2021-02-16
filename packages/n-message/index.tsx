import { defineComponent, HTMLAttributes, SetupContext, Transition, reactive, createApp } from 'vue';
import './index.scss';
import classNames from '../../src/utils/className';
import NIcon from '../n-icon';

const initDefaultProps = {
  duration: 0,
  message: '',
  type: '',
  messageTitle: '',
  hasTitle: false
};

export interface MessageProps extends HTMLAttributes {
  duration?: number;
  message?: string,
  type?: string,
  messageTitle?: string,
  hasTitle?: boolean
}

const Message = defineComponent({
  name: 'Message',
  setup (_: MessageProps, { attrs }: SetupContext) {
    const props = attrs as MessageProps;
    const data = reactive({
      show: true,
      timer: null
    });
    const { type, messageTitle, hasTitle, message, duration } = { ...initDefaultProps, ...props };
    const messageClassList = classNames(['base-message', type]);
    const firstIconClassList = classNames([hasTitle ? 'icon-title' : '']);
    const secondIconClassList = classNames([`icon-${type}`]);
    const closeMessage = () => {
      data.show = false;
      data.timer = null;
    };
    const startTimer = () => {
      if (duration > 0) {
        data.timer = setTimeout(() => {
          closeMessage();
        }, duration);
      }
    };
    startTimer();
    return () => (
      data.show
        ? <Transition name="nmessage">
          <div class={messageClassList}>
            <div class="message-content">
              <div class="content-cell">
                <NIcon name={`icon-${type}`} class={firstIconClassList} />
              </div>
              <div class="content-cell u-full">
                {hasTitle && <span class="message-title">{messageTitle}</span>}
                <p>{message}</p>
                {type !== 'info' &&
                  <NIcon
                    id="messageCloseIcon"
                    name="icon-times"
                    class={secondIconClassList}
                    onClick={closeMessage} />}
              </div>
            </div>
          </div>
      </Transition>
        : null
    );
  }
});

const NMessage = function (options) {
  const defaults:any = {
    type: 'info',
    message: '一般的文字信息，默认左对齐，可以带图标。',
    duration: 3000
  };
  for (const key in options) {
    defaults[key] = options[key];
  }
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render () {
      return <Message {...defaults} />;
    }
  });
  app.mount(div);
};

export default NMessage;
