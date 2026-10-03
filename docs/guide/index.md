# 介绍

这是一个由 [VitePress](https://vitepress.dev) 驱动的文档站点。内容即 Markdown 文件：一个文件对应一个页面，目录结构就是 URL 结构。

## 目录结构

```text
.
├── docs/                  # 站点源码目录（srcDir）
│   ├── .vitepress/
│   │   ├── config.mts     # 站点配置（导航、侧边栏、搜索等）
│   │   └── theme/         # 可选：自定义主题与样式
│   ├── ai/                # 内容板块：学AI
│   ├── reading/           # 内容板块：读书笔记
│   ├── guide/             # 站点说明页面目录
│   ├── reference/         # 参考页面目录
│   ├── public/            # 静态资源，原样复制到产物根目录
│   └── index.md           # 首页
└── package.json
```

站点内容全部放在 `docs/` 下：VitePress 只扫描该目录内的 Markdown，仓库根目录的其他文件不会参与构建。

## 常用命令

```bash
npm run dev      # 本地开发，默认 http://localhost:5173
npm run build    # 构建到 docs/.vitepress/dist
npm run preview  # 本地预览构建产物
```

## 路由规则

文件路径与访问地址一一对应：

| 文件 | URL |
| --- | --- |
| `index.md` | `/` |
| `guide/index.md` | `/guide/` |
| `guide/getting-started.md` | `/guide/getting-started` |

新增页面只需新建 `.md` 文件，并在 `.vitepress/config.mts` 的 `sidebar` 中登记即可。
