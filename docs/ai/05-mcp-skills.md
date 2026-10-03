---
title: 05 · MCP 与 Skills：给 Agent 接上手和经验
date: 2026-10-03
tags: [基础, 工程, 工具]
summary: MCP 解决"工具怎么接"的 N×M 问题，Skills 解决"经验怎么复用"的上下文问题，两者不是一回事。
---

# MCP 与 Skills

Agent 要真正干活，需要两样东西：**能操作外部世界的手**（工具），和**知道该怎么干的作业指导书**（经验）。MCP 管前者，Skills 管后者。

## MCP：工具的 USB-C 接口

MCP（Model Context Protocol）由 Anthropic 于 2024 年 11 月开源，是一套**让 Agent 连接外部工具和数据源的开放协议**。官网见 [modelcontextprotocol.io](https://modelcontextprotocol.io)。

### 它解决什么问题

没有协议时，M 个应用要接 N 个工具，得写 M×N 个适配；有了统一协议，工具方只写一次 server，应用方只实现一次 client，变成 M+N。这个道理和 USB-C、LSP（语言服务器协议）完全一样。

### 三个角色

```text
Host（宿主应用）
 └── Client（连接）
      └── Server（提供能力：数据库、浏览器、Git、内部 API……）
```

### Server 能提供的三类东西

| 概念 | 是什么 | 谁来控制 |
| --- | --- | --- |
| Tools | 可调用的函数，会产生副作用 | 模型主动调用 |
| Resources | 可读的数据，如文件、数据库记录 | 应用按需拉取后塞进上下文 |
| Prompts | 预置的提示词模板 | 用户或应用触发 |

传输层上，本地 server 通常走 stdio（一个子进程），远程走 HTTP。

### 一个概念示意

注册一个工具，本质上就是声明"名字 + 说明 + 参数结构"：

```json
{
  "name": "search_docs",
  "description": "在团队文档库中检索，返回最相关的 5 条片段及其路径",
  "inputSchema": {
    "type": "object",
    "properties": { "query": { "type": "string" } },
    "required": ["query"]
  }
}
```

注意 `description` 是写给模型看的——它决定模型什么时候用、怎么用这个工具，比参数结构还重要。

### 现实中的注意点

- MCP server 是可执行代码，**装第三方 server 等于给它本机权限**，要看清来源和权限范围。
- 工具不是越多越好。同时挂几十个工具，模型会挑花眼，上下文也被定义占满。

## Skills：把经验打包成"按需加载"

Skills（2025 年起被广泛采用的一种做法）用一句话概括：**把一套流程、规范、脚本和参考资料打包成一个目录，模型只在需要时才读取。**

典型结构：

```text
my-skill/
├── SKILL.md          # 入口：什么时候用、怎么用
├── scripts/          # 可执行脚本，确定性的活交给代码
└── references/       # 详细资料，用到时才翻
```

它的核心机制是**渐进式披露（progressive disclosure）**：

1. 平时只有 skill 的名字和一句话描述在上下文里（几十个 skill 也占不了多少）。
2. 判断相关时，才把 `SKILL.md` 正文读进来。
3. 正文里需要更细的内容，再去读 `references/`。

这样既保留了"随时可用"，又不烧上下文。

**关键点：确定性步骤要写成脚本，别让模型每次现编。** 让模型做的是判断，不是重复劳动。

## 两者的区别，以及和邻近概念的关系

| 概念 | 本质 | 回答的问题 |
| --- | --- | --- |
| Tool | 一个可调用函数 | 这一步"做什么动作" |
| MCP | 工具的标准化接法 | 工具怎么接进来、谁来提供 |
| Skills | 流程 + 规范 + 脚本包 | 这类活"按什么步骤做" |
| Sub-agent | 带独立上下文的子任务执行者 | 哪一块可以甩出去单独做 |
| RAG | 检索后塞进上下文 | 它"需要知道哪些资料" |

一句话记忆：**MCP 给 Agent 接上手，Skills 给它装上作业指导书，RAG 给它递资料，Sub-agent 帮它分身。**

## 上一篇 / 下一篇

[04 · Agent 与 Harness](/ai/04-agent-harness) ｜ [06 · 发散：学习路线、误区与名词速查](/ai/06-more)
