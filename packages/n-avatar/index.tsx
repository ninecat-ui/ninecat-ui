import { defineComponent,App,HTMLAttributes,SetupContext } from 'vue';
import classNames from '../../src/utils/className';
import './index.scss';

const initDefaultProps = {
  size: 'md',
  shape: 'square',
  src: '',
  alt: '',
  icons: ''
}

export interface AvatarProps extends HTMLAttributes {
  size?: string;
  shape?: boolean;
  src?: string;
  alt?: string;
  icon?: string;
}

const NAvatar = defineComponent({
  name: 'NAvatar',
  setup(_:AvatarProps, { slots, attrs }: SetupContext) {
    const props = attrs as AvatarProps;
    const {size,shape,src,alt,icon} = {...initDefaultProps,...props}
    const avatarClass = () => {
      let classList = ['navatar'];
      if (size && typeof size === 'string') {
        classList.push(`navatar-${size}`);
      }
      if (icon) {
        classList.push('navatar-icon');
      }
      if (shape) {
        classList.push(`navatar-${shape}`);
      }
      return classNames(classList);
    }
    const sizeStyle  = () => {
      return typeof size === 'number' ? {
        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${size}px`
      } : {};
    }
    const bgStyle = () => {
      if (src) {
        return {};
      } else {
        return {
          background: '#CCCCCC'
        };
      }
    }
    const renderSolt = () => (
      <div>
        {slots.default && slots.default()}
      </div>
    )

    const renderImg = () => (
      <img class="navatar-img" src={src} alt={alt}/>
    )

    const rederContent = () => {
      if (src) {
        return renderImg()
      }
      return renderSolt()
    }
    return () => (
      <div class={avatarClass()} style={{...sizeStyle(),...bgStyle()}}>
        {rederContent()}
      </div>
    )
  }
})



// const NAvatar = defineComponent({
//   name: 'NAvatar',
//   steup(_:AvatarProps, { slots, attrs }: SetupContext) {
//     const props = attrs as AvatarProps;
//     const {size,shape,src,alt,icon} = {...initDefaultProps,...props}
//     const avatarClass = () => {
//       let classList = ['navatar'];
//       if (size && typeof size === 'string') {
//         classList.push(`navatar-${size}`);
//       }
//       if (icon) {
//         classList.push('navatar-icon');
//       }
//       if (shape) {
//         classList.push(`navatar-${shape}`);
//       }
//       return classNames(classList);
//     }
//     const imgClass = `${avatarClass},navatar-img`
//     const sizeStyle  = () => {
//       return typeof size === 'number' ? {
//         height: `${size}px`,
//         width: `${size}px`,
//         lineHeight: `${size}px`
//       } : {};
//     }
//     const bgStyle = () => {
//       if (src) {
//         return {};
//       } else {
//         return {
//           background: '#CCCCCC'
//         };
//       }
//     }
//     const renderSolt = () => (
//       <div>
//         {slots.defaul && slots.default()}
//       </div>
//     )

//     const renderImg = () => (
//       <img class={imgClass} src={src} alt={alt}/>
//     )

//     return () => (
//       <div class={avatarClass} style={{...sizeStyle,...bgStyle}}>
//         {src ?  renderImg() : renderSolt()}
//       </div>
//     )
//   }
// })

NAvatar.install = function(app: App) {
  app.component(NAvatar.name, NAvatar);
  return app;
};


export default NAvatar;

