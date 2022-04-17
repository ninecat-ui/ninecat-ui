import { sidebar } from './config/sidebars'
import { mdPlugin } from './plugins'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

module.exports = {
    title: 'ninecat-ui',
    description:'A Vue.js 3.0 Web UI Toolkit.',
    themeConfig:{
      sidebar
    },
    markdown: {
      config: (md) => {
        mdPlugin(md)
      },
    },
    vue: {
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: buildTransformers(),
        },
      },
    },
  }