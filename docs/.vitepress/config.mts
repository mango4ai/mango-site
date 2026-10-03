import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import wikiSidebar from './wiki-sidebar.mts'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// 按目录自动收集文章生成侧边栏：新增 .md 无需再改配置
function sectionItems(section: string) {
  const base = join(docsDir, section)
  try {
    return readdirSync(base)
      .filter((f) => f.endsWith('.md') && f !== 'index.md')
      .map((f) => {
        const raw = readFileSync(join(base, f), 'utf-8')
        const title = raw
          .match(/^title:\s*(.+)$/m)?.[1]
          .trim()
          .replace(/^['"]|['"]$/g, '')
        const slug = f.replace(/\.md$/, '')
        return { text: title || slug, link: `/${section}/${slug}` }
      })
      .sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))
  } catch {
    return []
  }
}

export default defineConfig({
  // 站点级配置：部署到子路径时改这里，例如 '/docs-site/'
  base: '/',
  lang: 'zh-CN',
  title: 'Mango 的个人门户',
  description: '学 AI、读书笔记与个人知识沉淀',
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
      { text: '学AI', link: '/ai/', activeMatch: '/ai/' },
      { text: '读书笔记', link: '/reading/', activeMatch: '/reading/' },
      { text: '猫大刚笔记', link: '/wiki/', activeMatch: '/wiki/' },
      { text: '站点说明', link: '/guide/', activeMatch: '/(guide|reference)/' }
    ],

    sidebar: {
      '/ai/': [
        {
          text: '学AI',
          items: [{ text: '板块首页', link: '/ai/' }, ...sectionItems('ai')]
        }
      ],
      '/reading/': [
        {
          text: '读书笔记',
          items: [{ text: '板块首页', link: '/reading/' }, ...sectionItems('reading')]
        }
      ],
      '/wiki/': wikiSidebar,
      '/guide/': [
        {
          text: '站点说明',
          items: [
            { text: '站点介绍', link: '/guide/' },
            { text: '写新文章', link: '/guide/getting-started' },
            { text: 'Markdown 用法', link: '/guide/markdown' },
            { text: '站点配置', link: '/reference/' },
            { text: '部署', link: '/reference/deploy' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '站点说明',
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
