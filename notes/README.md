# Notes｜AI 产品笔记 📝

这里用于整理 AI 产品、Prompt、Skills、Agents、MCP、Tools、AI 工作流和产品化思考相关内容。

这个文件夹按分类子目录整理具体笔记文章。
所有具体笔记文章会通过本页进行分类索引，方便后续持续扩展和维护。

---

## Prompt Templates｜Prompt 模板

- [Product Manager Prompts for Generative AI｜产品经理生成式 AI Prompt 工作流](./prompts/product-manager-prompts.md)
  - 关键词：Prompt、AI 工作流、产品经理工具箱、任务入口设计
- [Prompt Versioning｜把 Prompt 从一次性文本变成可迭代的产品配置](./prompts/prompt-versioning-product-configuration.md)
  - 关键词：Prompt Management、Prompt Versioning、版本管理、Prompt 评估、发布控制、AI Workflow
- [Prompt Caching｜把重复上下文变成可管理的成本与延迟策略](./prompts/prompt-caching-cost-latency-strategy.md)
  - 关键词：Prompt Caching、上下文复用、成本优化、响应延迟、缓存命中、AI 应用运行

---

## Skills｜能力模块

- [Product Manager Skills｜产品经理 AI Skills 工作流](./skills/product-manager-skills.md)
  - 关键词：Skills、AI Agent、产品经理工作流、能力模块设计
- [Agent Skills｜把专业能力封装成可发现、可组合的 AI 能力单元](./skills/agent-skills-reusable-capabilities.md)
  - 关键词：Agent Skills、能力封装、渐进披露、Skill Discovery、可复用能力

---

## Agents｜智能体

- [OpenAI Agents SDK｜从 Prompt 到 Agent 工作流](./agents/openai-agents-sdk.md)
  - 关键词：Agent、Multi-agent Workflow、工具调用、任务编排、Agent 产品设计
- [LangGraph｜Stateful Agent 编排框架的产品观察](./agents/langgraph-stateful-agent-orchestration.md)
  - 关键词：LangGraph、Stateful Agent、Agent Orchestration、Workflow、状态管理、可恢复执行
- [A2A Protocol｜从单个 Agent 到跨系统协作](./agents/a2a-agent-interoperability-protocol.md)
  - 关键词：A2A、Agent Interoperability、Agent Card、任务委派、多智能体协作、Agent 协议

---

## Workflows｜AI 工作流

- [PromptInfuser｜把 Prompt 和 UI 原型放进同一个工作流](./workflows/promptinfuser-ai-ui-workflow.md)
  - 关键词：AI Workflow、Prompt、UI 原型、AI UX、Vibe Coding、产品验证
- [Human-in-the-loop｜Agent 工作流中的人类介入机制](./workflows/human-in-the-loop-agent-workflow.md)
  - 关键词：Human-in-the-loop、Agent Workflow、人工确认、风险控制、AI UX
- [n8n AI Workflow｜从自动化流程到 Agentic Workflow](./workflows/n8n-ai-agentic-workflow.md)
  - 关键词：n8n、AI Workflow、Agentic Workflow、Workflow Automation、工具连接、业务流程
- [Generative UI｜让 AI 输出从文本回答变成可操作界面](./workflows/generative-ui-ai-native-interface.md)
  - 关键词：Generative UI、AI-native Interface、Tool Calling、动态组件、交互状态、AI Workflow
- [AG-UI Protocol｜让 Agent 状态进入用户界面](./workflows/ag-ui-agent-user-interaction-protocol.md)
  - 关键词：AG-UI、Agent-User Interaction、事件流、共享状态、流式界面、Agent UX

---

## MCP｜模型上下文协议

- [MCP Servers｜让 AI 连接外部工具和数据源](./mcp/model-context-protocol-servers.md)
  - 关键词：MCP、工具连接、外部数据源、Agent 工具调用、上下文协议
- [MCP Authorization｜AI 工具连接中的授权与信任边界](./mcp/mcp-authorization-and-trust-boundaries.md)
  - 关键词：MCP Authorization、OAuth、权限边界、最小权限、授权撤销、Agent 治理
- [MCP Elicitation｜让 AI 在工具调用中向用户补充信息](./mcp/mcp-elicitation-user-input.md)
  - 关键词：MCP Elicitation、结构化输入、Form Mode、URL Mode、用户决策、任务恢复

---

## Tools｜工具调用

- [Playwright MCP｜让 AI 操作浏览器的工具调用案例](./tools/playwright-mcp-browser-tool.md)
  - 关键词：Tools、MCP、浏览器自动化、Playwright、AI 工具调用、任务执行
- [Tool Calling UX｜AI 工具调用体验观察](./tools/tool-calling-ux-for-ai-products.md)
  - 关键词：Tool Calling、MCP、Agent UX、工具调用、权限控制、执行反馈
- [Computer Use｜让 Agent 从浏览器操作走向图形界面任务执行](./tools/computer-use-agent-interface.md)
  - 关键词：Computer Use、GUI Agent、图形界面、任务执行、Agent Safety、人机协作
- [Tool Search｜让 Agent 按需发现和加载工具](./tools/tool-search-dynamic-tool-discovery.md)
  - 关键词：Tool Search、Dynamic Tool Discovery、工具目录、按需加载、Agent Tooling、上下文管理

---

## Methods & Notes｜方法与观察

- [AI Product Evaluation｜AI 产品评估方法](./methods/ai-product-evaluation-framework.md)
  - 关键词：AI 产品评估、AI UX、任务完成度、输出质量、信任感、异常兜底
- [Context Engineering｜从 Prompt 到上下文工程](./methods/context-engineering-for-ai-products.md)
  - 关键词：Context Engineering、上下文工程、Agent、RAG、Workflow、AI 产品方法
- [LangChain｜LLM 应用开发基础框架](./methods/langchain-llm-application-framework.md)
  - 关键词：LangChain、LLM Application Framework、RAG、Agent、AI 产品架构
- [Structured Outputs｜把模型回答变成可验证的产品数据](./methods/structured-outputs-product-data-contract.md)
  - 关键词：Structured Outputs、JSON Schema、输出契约、数据校验、AI Workflow、产品稳定性
- [Prompt Injection｜AI 产品中的指令与数据边界](./methods/prompt-injection-instruction-data-boundary.md)
  - 关键词：Prompt Injection、指令与数据边界、不可信输入、RAG Security、Agent Safety

---

## Rule｜整理规则

- 每篇笔记单独保存为一个 Markdown 文件
- 本页只保留分类、链接和关键词
- 按分类子目录存放具体笔记文章
- 后续内容增加时，优先通过本页分类索引维护
