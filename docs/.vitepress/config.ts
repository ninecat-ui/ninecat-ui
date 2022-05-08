import { sidebar } from './config/sidebars'
import { mdPlugin } from './plugins'
import type { UserConfig } from 'vitepress'

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

export const config: UserConfig = {
    title: 'ninecat-ui',
    description:'A Vue.js 3.0 Web UI Toolkit.',
    lastUpdated: true,
    themeConfig:{
      docsDir: 'docs',
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

  export default config