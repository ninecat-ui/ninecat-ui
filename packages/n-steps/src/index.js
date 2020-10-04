import { filterEmpty, getPropsData } from '@/utils/props';
import { cloneElement } from '@/utils/vnode';
import './index.scss';

export default {
  name: 'NSteps',
  props: {
    vertical: {
      type: [Boolean, String]
    },
    active: {
      type: [Number]
    }
  },
  methods: {
    renderChild (child, index, filteredChildren) {
      const childProps = getPropsData(child);
      let setpProps = {
        props: {
          ...childProps,
          active: index === this.active - 1,
          index,
          isLatest: index === filteredChildren.length - 1
        }
      };
      return cloneElement(child, setpProps);
    }
  },
  render () {
    const { vertical, $slots } = this;
    const filteredChildren = filterEmpty($slots.default);
    return (
      <div class={['n-steps', vertical ? 'vertical' : 'horizontal']}>
        {filteredChildren.map((child, index) => {
          return this.renderChild(child, index, filteredChildren);
        })}
      </div>
    );
  }
};
