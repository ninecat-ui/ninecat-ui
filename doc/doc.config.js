import { getLang } from './util/lang';

const localLang = getLang();
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const dataEntryString = localLang === 'en-US' ? 'Data Entry' : '数据录入';

export default {
  headerConfig: {
    logo: {
      href: 'https://ninecat-ui.github.io',
      image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
      title: 'Ninecat'
    },
    lang: 'zh-CN',
    versions: ['1.0.0', '1.1.0'],
    githubLink: 'https://github.com/ninecat-ui/ninecat-ui',
    simulators: []
  },
  navConfig: [
    {
      name: developmentGuideString,
      groups: [
        {
          list: [
            {
              path: '/about',
              title: aboutString
            }
          ]
        }
      ]
    },
    {
      name: componentsString,
      groups: [
        {
          groupName: layoutString,
          list: [
            {
              path: '/nGrid',
              title: 'Grid'
            }
          ]
        },
        {
          groupName: baseComponentsString,
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
              path: '/nCard',
              name: 'Card'
            },
            {
              path: '/nTooltip',
              name: 'Tooltip'
            }
          ]
        },
        {
          groupName: dataString,
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
            },
            {
              path: '/nTree',
              name: 'Tree'
            }
          ]
        },
        {
          groupName: dataEntryString,
          list: [
            {
              path: '/nInput',
              name: 'Input'
            },
            {
              path: '/nUpload',
              name: 'Upload'
            },
            {
              path: '/nToggle',
              name: 'Toggle'
            },
            {
              path: '/nRate',
              name: 'Rate'
            }
          ]
        }
      ]
    }]
};
