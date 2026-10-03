# 快速上手

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm run dev
```

打开 `http://localhost:5173` ，编辑 Markdown 会即时热更新。

## 写一篇新文章

内容板块在 `docs/ai/`（学AI）和 `docs/reading/`（读书笔记）下，往里加 `.md` 即可：

1. 在 `docs/ai/` 下新建 `my-post.md`，头部写 frontmatter：

   ```yaml
   ---
   title: 文章标题
   date: 2026-10-03
   tags: [基础]
   summary: 一句话摘要
   ---
   ```

2. 下面正常写正文。

3. 保存后无需改配置：板块首页的列表和左侧侧边栏都会自动带上这篇（`docs/.vitepress/config.mts` 会读目录生成侧边栏）。

要新增一个板块：建目录 `docs/<新板块>/` + 里面的 `index.md`，然后在 `config.mts` 的 `nav` 和 `sidebar` 各加一段，并把目录名加进 `docs/.vitepress/theme/posts.data.ts` 的扫描范围。

## 构建与本地预览

```bash
npm run build
npm run preview
```

`npm run build` 的产物位于 `docs/.vitepress/dist`，可以直接上传到任意静态托管平台。
