import { getLang } from './util/lang'

const localLang = getLang()

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
      name: localLang === 'en-US' ? 'Development Guide' : '开发指南',
      groups: [
        {
          list: [
            {
              path: '/about',
              title: localLang === 'en-US' ? 'About' : '介绍'
            }
          ]
        }
      ]
    },
    {
      name: localLang === 'en-US' ? 'Components' : '组件',
      groups: [
        {
          groupName: localLang === 'en-US' ? 'Layout' : '布局',
          list: [
            {
              path: '/nGrid',
              title: 'Grid'
            }
          ]
        },
        {
          groupName: localLang === 'en-US' ? 'Base Components' : '基础组件',
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
            }
          ]
        },
        {
          groupName: localLang === 'en-US' ? 'Data' : '数据',
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
              path: '/nPagination',
              name: 'Pagination'
            }]
        },
        {
          groupName: localLang === 'en-US' ? 'Data Entry' : '数据录入',
          list: [
            {
              path: '/nUpload',
              name: 'Upload'
            }]
        }
      ]
    }]
}
