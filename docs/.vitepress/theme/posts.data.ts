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

// 扫描 ai/ 与 reading/ 下所有文章（排除各板块首页），按日期倒序返回。
// 新增板块时把目录加进第一个参数即可。
export default createContentLoader(['ai/**/*.md', 'reading/**/*.md'], {
  exclude: ['**/index.md'],
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title || url,
        url,
        date: frontmatter.date || '',
        tags: frontmatter.tags || [],
        summary: frontmatter.summary || ''
      }))
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  }
})
