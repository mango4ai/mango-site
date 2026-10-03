# 站点配置

配置集中在 `docs/.vitepress/config.mts`，由 `defineConfig` 导出。

## 常用顶层字段

| 字段 | 作用 |
| --- | --- |
| `base` | 部署基础路径。放到 `https://example.com/docs/` 时改为 `/docs/` |
| `title` / `description` | 站点标题与描述，用于浏览器标签和 SEO meta |
| `lang` | HTML `lang` 属性，中文站点用 `zh-CN` |
| `cleanUrls` | 生成无 `.html` 后缀的链接 |
| `lastUpdated` | 显示最后更新时间（读取 Git 提交时间） |
| `outDir` | 产物目录，默认 `docs/.vitepress/dist` |

## 主题字段

导航、侧边栏、搜索、页脚等都在 `themeConfig` 下：

```ts
themeConfig: {
  nav: [{ text: '指南', link: '/guide/' }],
  sidebar: { '/guide/': [{ text: '开始', items: [{ text: '介绍', link: '/guide/' }] }] },
  search: { provider: 'local' }
}
```

## 自定义样式

新建 `docs/.vitepress/theme/index.ts`：

```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

更多字段见官方配置文档：https://vitepress.dev/reference/site-config
