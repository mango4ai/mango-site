---
title: 学AI
---

# 学AI

系统学 AI 的主阵地：从基础概念到动手实践，边学边留档。

**零基础从第一页开始顺着读就行**，八篇是一个完整的小入门，每篇末尾都有上一页 / 下一页的链接。

## 学习路线

### 第一步 · 打底子

1. [一、基础概念](/ai/basics) —— 人工智能、机器学习、深度学习到底是什么关系，训练 / 推理 / 参数 / Token 各是什么意思
2. [二、AI 的简要发展历程](/ai/history) —— 七十年、两次寒冬、三次范式转变，看懂今天这波热潮为什么不一样

### 第二步 · 认识现在的主力

3. [三、大模型 LLM](/ai/llm) —— 本质就是"预测下一个词"，以及提示词、上下文窗口、温度、幻觉怎么用和怎么防
4. [四、Agent](/ai/agent) —— 给大模型装上"手和脚"：自己决定调什么工具、按什么顺序做
5. [五、Harness](/ai/harness) —— 模型是发动机，Harness 是车架：把工具、上下文、权限、循环装配起来的那一层
6. [六、MCP](/ai/mcp) —— 模型连外部工具的统一插口，AI 世界的 USB-C
7. [七、Skills](/ai/skills) —— 把"这类事该怎么做"写成可复用的作业指导书，需要时才加载

### 第三步 · 往外发散

8. [八、发散](/ai/beyond) —— RAG、多模态、多 Agent、本地模型、成本与评测、提示注入，以及一份动手清单

## 内容怎么分

除了上面这条主线，日常笔记用 frontmatter 的 `tags` 做分类，不强制建子目录，这样一篇文章可以同时属于多个主题。建议的标签：

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
order: 9
tags: [基础, 提示词]
summary: 一句话摘要，会显示在列表里
---
```

- `order` 决定它在侧边栏里的位置（数字小的在前）；不写就按标题排序。
- 保存后这篇文章会自动出现在上面的列表中，侧边栏也会自动带上。
