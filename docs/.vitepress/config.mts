import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点级配置：部署到子路径时改这里，例如 '/docs-site/'
  base: '/',
  lang: 'zh-CN',
  title: '我的文档站',
  description: '使用 VitePress 搭建的可发布静态站点',
  cleanUrls: true,
  lastUpdated: true,

  // Windows 下从盘符大小写不一致的路径（如 Git Bash 的 /d/...）构建时，
  // VitePress 会因 realpath 与模块 id 不匹配而报 "Cannot read properties of undefined"，
  // 关闭 symlink 还原即可规避。
  vite: {
    resolve: { preserveSymlinks: true }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '参考', link: '/reference/', activeMatch: '/reference/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: 'Markdown 用法', link: '/guide/markdown' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '站点配置', link: '/reference/' },
            { text: '部署', link: '/reference/deploy' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
