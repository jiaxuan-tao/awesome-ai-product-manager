# PromptInfuser｜把 Prompt 和 UI 原型放进同一个工作流 🎨

- Source｜来源：PromptInfuser: How Tightly Coupling AI and UI Design Impacts Designers' Workflows
- Type｜类型：AI 原型设计工作流 / Prompt + UI Design / Figma Prototype
- Link｜链接：https://research.google/pubs/promptinfuser-how-tightly-coupling-ai-and-ui-design-impacts-designers-workflows/

### What It Is｜它是什么

PromptInfuser 是一个围绕 AI 原型设计工作流展开的研究项目。
它关注的问题是：在设计 AI 产品时，Prompt 设计和 UI 原型设计不应该被完全割裂。

传统 AI 产品原型往往会把两件事分开做：

- 一边写 Prompt，测试 AI 能不能生成预期结果
- 一边画 UI，展示用户会如何操作产品界面

但这会带来一个问题：
Prompt 输出和界面体验经常是脱节的。设计稿看起来合理，但实际 AI 输出可能不稳定；Prompt 单独测试看起来可用，但放进真实界面后可能不适配用户流程。

PromptInfuser 的价值就在于，它尝试把 Prompt 输入、AI 输出和 UI 原型连接起来，让设计者可以在原型阶段同时观察界面和 AI 能力之间的关系。

---

### Why It Matters｜为什么值得关注 🔍

AI 产品和传统产品有一个明显区别：
传统产品的功能结果相对确定，而 AI 产品的输出往往是不稳定、动态和上下文相关的。

这意味着，AI 产品设计不能只关注页面结构，也不能只关注 Prompt 效果。
真正重要的是：用户输入、Prompt 设计、AI 输出、界面状态和交互反馈是否能一起工作。

如果只画 UI，容易忽略 AI 输出的不确定性。
如果只调 Prompt，又容易忽略用户真正是在什么界面和流程中使用 AI。

这就是 PromptInfuser 值得关注的地方：
它把 AI 产品设计从“静态页面设计”推进到“动态能力验证”。

---

### Product Insight｜产品观察 💡

这个项目最有启发的地方，是它提醒我们：AI 产品的原型不应该只是低保真界面，也不应该只是单独的 Prompt 测试。

对 AI 产品来说，真正需要验证的是一个完整闭环：

- 用户在什么场景下输入信息
- Prompt 如何接收和组织这些信息
- AI 输出会以什么形式返回
- 输出结果如何展示在界面里
- 用户如何判断、修改、继续操作
- 当 AI 输出不稳定时，界面如何兜底

这说明 AI 产品工作流的关键，不是先写 Prompt 再做 UI，也不是先做 UI 再补 AI 能力，而是让 Prompt、界面和用户任务一起迭代。

从产品视角看，这类工作流对 AI UX 很重要。
因为 AI 产品的体验质量，不只由模型决定，也由界面如何承接 AI 输出、如何暴露不确定性、如何让用户继续控制流程决定。

---

### Reusable Value｜可复用价值 🛠️

PromptInfuser 这个方向可以被复用在很多 AI 产品设计场景中：

- AI 对话产品原型
- AI 写作工具原型
- AI 情绪记录产品原型
- AI 知识库问答原型
- AI Agent 工作台原型
- Vibe Coding 项目前期验证
- Prompt 与界面联动测试

对 AI 产品实践来说，它提供了一个很重要的方法参考：
不要只问“这个 Prompt 能不能跑”，也不要只问“这个界面好不好看”，而要问“Prompt 输出和界面流程能不能一起支撑用户完成任务”。

---

### Possible Productization｜可能的产品化方向 🚀

如果把 PromptInfuser 背后的思路产品化，可以发展成一个面向 AI 产品设计者的原型工作台。

可能的方向包括：

1. **Prompt + UI 联动原型工具**
   设计者在画界面的同时，可以把按钮、输入框、文本区域和 Prompt 输入输出绑定起来。

2. **AI 输出状态模拟器**
   用来模拟 AI 输出成功、失败、模糊、不完整、幻觉等不同状态，帮助提前发现交互问题。

3. **AI 产品可用性测试工具**
   在原型阶段让用户体验接近真实 AI 产品的流程，而不是只看静态页面。

4. **Vibe Coding 前置验证工具**
   在正式生成代码前，先验证 Prompt、用户流程和页面结构是否匹配，降低后期返工成本。

这个项目说明，AI 产品工作流的重点不是把 Prompt 当成附属文案，而是把它当成产品体验的一部分来设计。

当 Prompt、UI 和用户任务被放进同一个工作流里，AI 产品原型才更接近真实可用的产品形态。
