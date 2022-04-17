import Theme from 'vitepress/dist/client/theme-default'
import {globals} from '../vitepress/index'
import ninecat from '../../../src/index';
// import DocApp from '../vitepress/index'
export default {
 ...Theme,
//  Layout: DocApp,
 enhanceApp: ({ app }) => {
    app.use(ninecat)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}