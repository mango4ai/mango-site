---
title: 学AI
---

# 学AI

系统学 AI 的主阵地：从基础概念到动手实践，边学边留档。

## 内容怎么分

用 frontmatter 的 `tags` 做分类，不强制建子目录，这样一篇文章可以同时属于多个主题。建议的标签：

| 标签 | 放什么 |
| --- | --- |
| `基础` | 概念、原理、名词解释（Transformer、注意力、微调等） |
| `提示词` | prompt 写法、技巧与对比实验 |
| `工程` | 调 API、搭应用、Agent / RAG 等落地实践 |
| `工具` | 模型、平台、CLI、编辑器的使用记录 |
| `论文` | 论文与资讯速递，附自己的一句话结论 |

## 最新内容

<script setup>
import { data } from '../.vitepress/theme/posts.data'
const posts = data.filter((p) => p.url.startsWith('/ai/'))
</script>

<ul class="post-list">
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span class="post-date" v-if="post.date">{{ post.date }}</span>
    <span class="post-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    <p class="post-summary" v-if="post.summary">{{ post.summary }}</p>
  </li>
</ul>

<p v-if="!posts.length">还没有内容，复制一篇示例笔记开始写吧。</p>

## 怎么加新文章

在 `docs/ai/` 下新建 `.md`，头部写：

```yaml
---
title: 文章标题
date: 2026-10-03
tags: [基础, 提示词]
summary: 一句话摘要，会显示在列表里
---
```

保存后这篇文章会自动出现在上面的列表中，侧边栏也会自动带上。
