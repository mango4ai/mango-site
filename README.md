# VitePress 静态站点

用 VitePress 搭建的文档站点，构建产物是纯静态 HTML，可直接部署到任意静态托管平台。

## 命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:5173
npm run build      # 构建到 docs/.vitepress/dist
npm run preview    # 本地预览构建产物
```

## 目录结构

```text
docs/                    # 站点源码（VitePress srcDir）
├── .vitepress/
│   └── config.mts       # 站点配置：导航、侧边栏、搜索、页脚
├── guide/               # 指南页面
├── reference/           # 参考页面
├── public/              # 静态资源，原样复制到产物根目录
└── index.md             # 首页（hero 布局）
```

新增页面：在 `docs/` 下新建 `.md` 文件，然后在 `docs/.vitepress/config.mts` 的 `sidebar` 中登记。

## 部署

子路径部署（如 GitHub Pages 的 `/<repo>/`）需把 `docs/.vitepress/config.mts` 里的 `base` 改成对应路径。详见 [部署说明](docs/reference/deploy.md)。
