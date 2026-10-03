import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  tags: string[]
  summary: string
}

declare const data: Post[]
export { data }

// YAML 的 date 会被解析成 Date 对象，直接渲染会显示成 ISO 串（2026-10-03T00:00:00.000Z），这里统一成 YYYY-MM-DD。
function toDateString(value: unknown): string {
  if (!value) return ''
  const raw = value instanceof Date ? value.toISOString().slice(0, 10) : String(value)
  return raw.match(/^\d{4}-\d{2}-\d{2}/)?.[0] ?? raw
}

// 扫描 ai/ 与 reading/ 下所有文章（排除各板块首页），按日期倒序返回。
// 新增板块时把目录加进第一个参数即可。
export default createContentLoader(['ai/**/*.md', 'reading/**/*.md'], {
  exclude: ['**/index.md'],
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || url,
        url,
        date: toDateString(frontmatter.date),
        tags: frontmatter.tags || [],
        summary: frontmatter.summary || ''
      }))
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  }
})
