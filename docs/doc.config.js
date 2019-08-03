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
    name: 'Development guide',
    groups: [
      {
        list: [
          {
            path: '/',
            title: 'About'
          }
        ]
      }
    ]
  }, {
    name: 'Component',
    groups: [{
      groupName: 'Basic component',
      list: [
        {
          path: '/nButton',
          title: 'Button'
        },
        {
          path: '/nLoader',
          title: 'Loader'
        },
        {
          path: '/nIcon',
          name: 'Icon'
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
          path: '/nButtonGroup',
          name: 'ButtonGroup'
        },
        {
          path: '/nInput',
          name: 'Input'
        },
        {
          path: '/nRow-nCol',
          name: 'Row-nCol'
        },
        {
          path: '/nToast',
          name: 'Toast'
        }
      ] }
    ]
  }]
}
