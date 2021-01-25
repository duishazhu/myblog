module.exports = {
  title: '李浩前端进阶',
  description: '种一棵树最好的时间是十年前,其次就是现在',
  themeConfig: {
    repoLabel: 'github',
    docsDir: 'docs',
    lastUpdated: true, // 最后更新时间
    displayAllHeaders: true, // 默认值：false
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Blog',
            link: '/blog/javaScript/one'
          },
          {
            text: 'Space',
            link: '/space/poetryAndDistance/one'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/HUYIJUNCODING'
          }
        ]
      }
    },
    sidebar: {
      '/blog/': [
        {
          title: '前端daily',
          collapsable: true,
          children: [
            ['/blog/javaScript/one', 'one'],
            ['/blog/javaScript/two', 'two']
          ]
        },
        {
          title: '框架相关',
          collapsable: true,
          children: [['/blog/framework/vuepressBlog', 'vue']]
        },
        {
          title: '工具收藏',
          collapsable: true,
          children: [
            ['/blog/tools/one', 'one'],
            ['/blog/tools/two', 'two']
          ]
        }
      ],
      '/space/': [
        {
          title: '诗和远方',
          collapsable: true,
          children: [['/space/poetryAndDistance/one', 'one']]
        },
        {
          title: '谝闲传',
          collapsable: true,
          children: [['/space/talk/one', 'one']]
        }
      ]
    },
    plugins: ['@vuepress/back-to-top']
  }
}
