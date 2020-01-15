export default {
  headerConfig: {
    logo: {
      herf: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
      image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
      title: 'Ninecat'
    },
    lang: 'zh-CN',
    versions: ['1.0.0', '1.1.0'],
    githubLink: 'https://github.com/ninecat-ui/ninecat-ui',
    simulators: []
  },
  navConfig: [{
    name: '开发指南',
    groups: [
      {
        list: [
          {
            path: '/',
            title: '介绍'
          }
        ]
      }
    ]
  }, {
    name: '组件',
    groups: [
      {
        groupName: '布局',
        list: [
          {
            path: '/nGrid',
            title: 'Grid'
          }
        ]
      },
      {
        groupName: '基础组件',
        list: [
          {
            path: '/nButton',
            title: 'Button'
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
            path: '/nMessage',
            name: 'Message'
          },
          {
            path: '/nAlert',
            name: 'Alert'
          },
          {
            path: '/nModal',
            name: 'Modal'
          },
          {
            path: '/nProgress',
            name: 'Progress'
          }
        ]
      },
      {
        groupName: '数据',
        list: [{
          path: '/nTable',
          name: 'Table'
        }, {
          path: '/nPagination',
          name: 'Pagination'
        }]
      }
    ]
  }]
}
