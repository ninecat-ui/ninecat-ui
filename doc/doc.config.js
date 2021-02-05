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
              path: '/nAbout',
              title: aboutString,
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nAbout/en-US/index.md');
                } else {
                  return import('./markdown/nAbout/zh-CN/index.md');
                }
              }
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
              title: 'Grid',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nGrid/en-US/index.md');
                } else {
                  return import('./markdown/nGrid/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: baseComponentsString,
          list: [
            {
              path: '/nButton',
              title: 'Button',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nButton/en-US/index.md');
                } else {
                  return import('./markdown/nButton/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nBadge',
              title: 'Badge',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nBadge/en-US/index.md');
                } else {
                  return import('./markdown/nBadge/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nLoader',
              title: 'Loader',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nLoader/en-US/index.md');
                } else {
                  return import('./markdown/nLoader/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nAlert',
              name: 'Alert',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nAlert/en-US/index.md');
                } else {
                  return import('./markdown/nAlert/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nMessage',
              name: 'Message',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nMessage/en-US/index.md');
                } else {
                  return import('./markdown/nMessage/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nModal',
              name: 'Modal',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nModal/en-US/index.md');
                } else {
                  return import('./markdown/nModal/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nDrawer',
              name: 'Drawer',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nDrawer/en-US/index.md');
                } else {
                  return import('./markdown/nDrawer/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nProgress',
              name: 'Progress',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nProgress/en-US/index.md');
                } else {
                  return import('./markdown/nProgress/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nCard',
              name: 'Card',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nCard/en-US/index.md');
                } else {
                  return import('./markdown/nCard/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nTooltip',
              name: 'Tooltip',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nTooltip/en-US/index.md');
                } else {
                  return import('./markdown/nTooltip/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nTag',
              name: 'Tag',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nTag/en-US/index.md');
                } else {
                  return import('./markdown/nTag/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nSidenav',
              name: 'Sidenav',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nSidenav/en-US/index.md');
                } else {
                  return import('./markdown/nSidenav/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: dataString,
          list: [
            {
              path: '/nAvatar',
              name: 'Avatar',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nAvatar/en-US/index.md');
                } else {
                  return import('./markdown/nAvatar/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nTable',
              name: 'Table',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nTable/en-US/index.md');
                } else {
                  return import('./markdown/nTable/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nList',
              name: 'List',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nList/en-US/index.md');
                } else {
                  return import('./markdown/nList/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nPagination',
              name: 'Pagination',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nPagination/en-US/index.md');
                } else {
                  return import('./markdown/nPagination/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nTree',
              name: 'Tree'
            },
            {
              path: '/nSteps',
              name: 'Steps',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nSteps/en-US/index.md');
                } else {
                  return import('./markdown/nSteps/zh-CN/index.md');
                }
              }
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
              path: '/nCheckbox',
              name: 'Checkbox',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nCheckbox/en-US/index.md');
                } else {
                  return import('./markdown/nCheckbox/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nUpload',
              name: 'Upload'
            },
            {
              path: '/nToggle',
              name: 'Toggle',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nToggle/en-US/index.md');
                } else {
                  return import('./markdown/nToggle/zh-CN/index.md');
                }
              }
            },
            {
              path: '/nRate',
              name: 'Rate',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/nRate/en-US/index.md');
                } else {
                  return import('./markdown/nRate/zh-CN/index.md');
                }
              }
            }
          ]
        }
      ]
    }]
};
