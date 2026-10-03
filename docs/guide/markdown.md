# Markdown 用法

VitePress 支持标准 Markdown，并在此之上做了扩展。

## 代码块高亮

```ts
export interface User {
  id: number
  name: string
}
```

## 自定义容器

::: tip 提示
这是 tip 容器。
:::

::: warning 注意
这是 warning 容器。
:::

::: danger 危险
这是 danger 容器。
:::

## 表格

| 能力 | 是否默认开启 |
| --- | --- |
| 深色模式 | 是 |
| 本地全文搜索 | 是（本站点已配置） |
| 自动生成目录 | 是 |

## 在 Markdown 中使用 Vue

可以直接写组件和插值，例如当前主题变量：

```md
{{ 1 + 1 }}
```

需要复杂交互时，在 `docs/.vitepress/theme/index.ts` 里注册全局组件即可。
