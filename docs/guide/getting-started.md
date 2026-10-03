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

## 写一篇新页面

1. 在 `docs/guide/` 下新建 `my-page.md`，写入标题和内容。
2. 在 `docs/.vitepress/config.mts` 的 `sidebar['/guide/']` 里加一行：

   ```ts
   { text: '我的页面', link: '/guide/my-page' }
   ```

3. 保存后侧边栏即出现该条目。

## 构建与本地预览

```bash
npm run build
npm run preview
```

`npm run build` 的产物位于 `docs/.vitepress/dist`，可以直接上传到任意静态托管平台。
