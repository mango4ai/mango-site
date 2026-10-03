---
title: 学AI
---

# 学AI

系统学 AI 的主阵地：从基础概念到动手实践，边学边留档。定位是「入门基础」——先把概念讲清楚，技术细节留到后面单独展开。

## 入门路线（按 1 → 6 顺序读）

第一次来，照这个顺序走一遍，就能搭起完整的架子：

| 顺序 | 页面 | 解决什么 |
| --- | --- | --- |
| 1 | [AI 入门概念地图](/ai/01-concepts) | AI / 机器学习 / 深度学习到底是什么关系，训练、推理、参数这些高频词一次说清 |
| 2 | [AI 发展简史](/ai/02-history) | 它们从哪来，为什么是现在才火 |
| 3 | [大模型 LLM 到底在做什么](/ai/03-llm) | token、预训练、上下文窗口、幻觉，以及提示词 / RAG / 微调怎么选 |
| 4 | [Agent 与 Harness](/ai/04-agent-harness) | 模型怎么从"会说"到"会做"，Harness 又是什么 |
| 5 | [MCP 与 Skills](/ai/05-mcp-skills) | 工具怎么接进来、经验怎么复用 |
| 6 | [发散：学习路线、误区与名词速查](/ai/06-more) | 能力边界在哪，接下来往哪走 |

一句话串起来：**人工智能 ⊃ 机器学习 ⊃ 深度学习 ⊃ 大模型 LLM；LLM 加上工具与循环就成了 Agent，套上 Harness 才能干真活，靠 MCP 接工具、靠 Skills 复用经验。**

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
