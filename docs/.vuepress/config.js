module.exports = {
  title: '李浩前端进阶',
  description: '种一棵树最好的时间是十年前,其次就是现在',
  themeConfig: {
    base: '/duishazhu/',
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
            link: '/blog/javaScript/1.1'
          },
          {
            text: '面试题',
            link: '/question/1.1'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/duishazhu'
          }
        ]
      }
    },
    sidebar: {
      '/blog/': [
        {
          title: '第一章 Javascript： 日常tips',
          collapsable: true,
          children: [
            ['/blog/JavaScript/1.1', 'if...else...多重条件判断优化']
          ]
        },
        {
          title: '第二章 你好 TypeScript： 进入类型的世界',
          collapsable: true,
          children: [
            ['/blog/TypeScript/2.1', '安装 Typescript'],
            ['/blog/TypeScript/2.2', '原始数据类型'],
            ['/blog/TypeScript/2.3', 'Array 和 Tuple'],
            ['/blog/TypeScript/2.4', 'interface 接口'],
            ['/blog/TypeScript/2.5', '函数'],
            ['/blog/TypeScript/2.6', '类型推论，联合类型 和 类型断言'],
            ['/blog/TypeScript/2.7', 'Class 类'],
            ['/blog/TypeScript/2.8', '类与接口'],
            ['/blog/TypeScript/2.9', '枚举 Enums'],
            ['/blog/TypeScript/2.10', '泛型 Generics'],
            ['/blog/TypeScript/2.11', '内置对象']
          ]
        },
        {
          title: '正在努力写作中...',
          collapsable: true,
          children: []
        }
      ],
      '/question/': [
        {
          title: '每日一题',
          collapsable: true,
          children: [
            ['/question/1.1', '1、==操作符']
          ]
        }
      ]
    },
    plugins: ['@vuepress/back-to-top']
  }
}
