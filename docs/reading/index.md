---
title: 读书笔记
---

# 读书笔记

读完写下来才算读完。每本书一篇，统一结构，方便以后翻。

## 每篇笔记的结构

1. **基本信息**：书名、作者、读完日期、评分（写进 frontmatter）
2. **一句话结论**：这本书到底在讲什么
3. **核心观点**：3-5 条，用自己的话
4. **摘抄**：原文里真正打动你的句子
5. **行动**：读完准备改变什么

## 最新内容

<script setup>
import { data } from '../.vitepress/theme/posts.data'
const posts = data.filter((p) => p.url.startsWith('/reading/'))
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

## 怎么加新笔记

在 `docs/reading/` 下新建 `.md`，头部写：

```yaml
---
title: 《书名》
date: 2026-10-03
tags: [读书笔记, 认知]
summary: 一句话结论
book:
  author: 作者
  rating: 4
  finished: 2026-10-01
---
```

保存后自动出现在上面的列表里。
