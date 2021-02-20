import { createRouter, createWebHashHistory } from 'vue-router';
import { nextTick } from 'vue';
import hljs from 'highlight.js';
import docConfig from '../doc.config';
import { getLang } from '../util/lang';

const localLang = getLang();

export const commonRoutes = [
  {
    path: '/',
    name: 'about',
    meta: {
      name: 'HomePage'
    },
    component: () => {
      if (localLang === 'en-US') {
        return import('../markdown/nAbout/en-US/index.md');
      } else {
        return import('../markdown/nAbout/zh-CN/index.md');
      }
    }
  }
];

const componentRoutes = [];

const { navConfig } = docConfig;

navConfig.forEach(navItem => {
  navItem.groups.forEach(groupItem => {
    groupItem.list.forEach(item => {
      if (item.path !== '/') {
        componentRoutes.push({
          path: item.path,
          name: item.path.slice(1),
          meta: {
            name: item.path.slice(1)
          },
          component: item.component
        });
      }
    });
  });
});

const routes = componentRoutes.concat(commonRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

router.afterEach(route => {
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router;
