# awesome-ai-product-manager Guidance

## Purpose and Voice

This repository is a long-term Chinese learning record about AI product
practice and open-source AI projects. It organizes public materials and adds
product observations for personal review and for readers with similar
interests. Do not present it as a service platform, an expert authority, or an
employment-oriented showcase.

Write primarily in Chinese with established Chinese-English headings. Keep the
tone clear, natural, and restrained. Avoid the terms "interview", "job
seeking", "packaging", and "interviewer".

## Repository Structure

- `README.md`: repository home and navigation. Do not change it for ordinary
  article publishing.
- `notes/README.md`: notes index. Keep only category, link, and keywords.
- `notes/prompts/`: Prompt templates and Prompt workflows.
- `notes/skills/`: Skills and reusable capability modules.
- `notes/agents/`: Agents, multi-agent systems, and agent workflows.
- `notes/mcp/`: MCP, MCP servers, and Model Context Protocol.
- `notes/tools/`: tool calling, browser automation, and external-tool access.
- `notes/workflows/`: AI product workflows, Prompt + UI, and design workflows.
- `notes/methods/`: methods, evaluation frameworks, and product observations.
- `projects/README.md`: open-source project index. Keep only project links and
  keywords.
- `projects/`: individual open-source AI project product analyses.

Inspect the actual structure before changing files. Do not move or rewrite
unrelated content.

## Topic Selection

Before recommending a topic, decide whether it genuinely belongs here and
whether it can support product observation rather than simple material
collection. Prioritize Agent, MCP, tools, workflows, RAG, AI product platforms,
Vibe Coding, AI UX, and LLM application platforms when their sources and
product relevance are strong.

Before that judgment, build a current view of the repository: read both index
pages, list the published article titles and categories, and read the articles
whose subject, workflow, or product insight may overlap. Treat the repository
itself as the source of truth rather than relying on prior chat context. A
proposed topic must state which existing articles are adjacent to it, what they
already cover, and the distinct gap this article will fill. Reject or reshape a
topic whose main observation would substantially repeat an existing article.
Check Git status as part of this review. Treat uncommitted drafts and edits as
planning constraints too: distinguish them from published content, but do not
propose a competing topic while they are in progress.

For every proposed topic, provide:

1. A substantive recommendation rationale tied to AI product practice.
2. The repository gap or collection value it fills.
3. An explicit `发布位置` field that names the top-level entry, exact category,
   and target directory. Use `Notes｜Prompt Templates（notes/prompts/）`,
   `Notes｜Skills（notes/skills/）`, `Notes｜Agents（notes/agents/）`,
   `Notes｜MCP（notes/mcp/）`, `Notes｜Tools（notes/tools/）`,
   `Notes｜Workflows（notes/workflows/）`, `Notes｜Methods & Notes
   （notes/methods/）`, or `Projects｜开源项目分析（projects/）`.
4. The product angles that can be developed, such as user scenario, workflow,
   tool use, product boundary, platform trend, reuse value, or productization.
5. Its relationship to recent articles and whether it can join a continuing
   theme.
6. A concise risk assessment: insufficient source material, excess technical
   detail, weak product perspective, duplication, or risk of becoming a
   summary.

Prefer one well-judged topic by default. Do not draft until the user confirms
the choice. When a topic is already confirmed or a finished article is
provided, proceed directly with publication work.

## Article Requirements

Every note and project article starts with exactly this metadata shape:

```markdown
# Title｜中文标题 emoji

- Source｜来源：...
- Type｜类型：...
- Link｜链接：...
```

- A project article's Link should normally be the GitHub repository.
- A note's Link should be the most important source, not necessarily GitHub.
- State the source type precisely, for example official docs, official blog,
  official website, or GitHub repository.
- Do not append a `## Source｜来源` section at the end unless the user
  explicitly requests it.
- Do not start a file with a standalone `---`.

Use a product-observation structure, adapting it to the topic rather than
forcing identical headings. Articles must explain what the subject is, why it
matters for AI product practice, and what can be learned or reused from a
product perspective.

For projects, useful sections include What It Is, Core Capability, Use Case,
Product Insight, Reusable Value, Productization Direction, and Product
Observation. For prompts, skills, and methods, emphasize Why It Matters, How
It Works, Product Insight, Reusable Value, and Practical Use. For Agents, MCP,
tools, and workflows, cover the task/workflow implication and productization
direction when relevant.

Target medium-length, information-dense writing: usually 2,500–3,500 Chinese
characters for notes and 3,000–4,000 for project analyses unless the user asks
otherwise. Prefer full paragraphs for explanations, causal reasoning, product
judgment, and trends. Use lists only for genuine classification, comparison,
risk, steps, or necessary enumeration; do not turn complete ideas into short
keyword lists or a feature checklist.

Use one emoji in the title. Core H2 headings may use restrained emojis, H3
headings must not. Aim for roughly 6–8 emojis in the article, while honoring a
newer explicit user request if it conflicts.

## Continuity and Indexes

Before drafting, check the full relevant collection rather than only recently
published articles. Avoid repeating established discussion of tool permissions,
human takeover, context engineering, RAG, MCP, or workflow design unless the
new article has a distinct observation. For every recommendation, name the
adjacent existing articles, say what will only be referenced briefly, and state
the new article's independent gap and focus.

Place full text only in its own Markdown file. Update only the appropriate
index with title, relative link, and concise keywords. Keep `notes/README.md`
and `projects/README.md` free of long body text. Use relative links that work
from the index file's directory.

## Delivery Checklist

1. Inspect the working tree, target folders, and relevant index before edits.
2. Preserve unrelated changes and edit only the approved scope.
3. Verify Markdown formatting, required metadata, heading rules, and local
   Markdown links after the change.
4. When a commit is required, stage only task files, use the user-provided
   message when available, and push only the intended commit.
