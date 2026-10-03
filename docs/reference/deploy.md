# 部署

构建产物是纯静态文件（默认在 `docs/.vitepress/dist`），任何静态托管都能承载。

## 通用步骤

```bash
npm run build     # 产出 docs/.vitepress/dist
```

把该目录的内容上传即可。

## GitHub Pages

若部署到 `https://<user>.github.io/<repo>/`，需先改 `base`：

```ts
// docs/.vitepress/config.mts
export default defineConfig({
  base: '/<repo>/'
})
```

再用 GitHub Actions 自动构建发布（`.github/workflows/deploy.yml`），核心三步：`npm ci` → `npm run build` → 上传 `docs/.vitepress/dist` 为 Pages artifact。

## Vercel / Netlify / Cloudflare Pages

在平台里填写：

- Build Command：`npm run build`
- Output Directory：`docs/.vitepress/dist`

其余保持默认即可，推送分支后自动构建部署。

## 国内对象存储（COS / OSS）

```bash
npm run build
# 将 docs/.vitepress/dist 内文件同步到桶根目录，并开启静态网站托管 + CDN 加速
```

::: warning 注意
子路径部署时 `base` 必须与最终访问路径一致，否则静态资源 404。
:::
