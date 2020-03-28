import enLang from './lang/en-US';
import zhLang from './lang/zh-CN';
import { getLang } from './util/lang';

const localLang = getLang();

let lang = localLang === 'en-US' ? enLang : zhLang;

export default {
  headerConfig: {
    logo: {
      href: 'https://ninecat-ui.github.io',
      image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
      title: 'Ninecat-ui'
    },
    lang: 'zh-CN',
    versions: ['1.0.0', '1.1.0'],
    githubLink: 'https://github.com/ninecat-ui/ninecat-ui',
    simulators: []
  },
  navConfig: [
    {
      name: lang.developmentGuide,
      groups: [
        {
          list: [
            {
              path: '/about',
              title: lang.about
            }
          ]
        }
      ]
    },
    {
      name: lang.components,
      groups: [
        {
          groupName: lang.layout,
          list: [
            {
              path: '/nGrid',
              title: 'Grid'
            }
          ]
        },
        {
          groupName: lang.baseComponents,
          list: [
            {
              path: '/nButton',
              title: 'Button'
            },
            {
              path: '/nBadge',
              title: 'Badge'
            },
            {
              path: '/nInput',
              name: 'Input'
            },
            {
              path: '/nLoader',
              title: 'Loader'
            },
            {
              path: '/nAlert',
              name: 'Alert'
            },
            {
              path: '/nMessage',
              name: 'Message'
            },
            {
              path: '/nModal',
              name: 'Modal'
            },
            {
              path: '/nDrawer',
              name: 'Drawer'
            },
            {
              path: '/nProgress',
              name: 'Progress'
            },
            {
              path: '/nToggle',
              name: 'Toggle'
            }
          ]
        },
        {
          groupName: lang.data,
          list: [
            {
              path: '/nAvatar',
              name: 'Avatar'
            },
            {
              path: '/nTable',
              name: 'Table'
            },
            {
              path: '/nList',
              name: 'List'
            },
            {
              path: '/nPagination',
              name: 'Pagination'
            }]
        },
        {
          groupName: lang.dataEntry,
          list: [
            {
              path: '/nUpload',
              name: 'Upload'
            }]
        }
      ]
    }]
};
