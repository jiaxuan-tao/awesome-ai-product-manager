import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function markdownLinks(content) {
  return [...content.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1].trim());
}

function contentWithoutFencedCode(content) {
  return content.replace(/```[\s\S]*?```/g, "");
}

const markdownFiles = walk(root).filter(
  (file) =>
    file.endsWith(".md") &&
    !file.includes(`${path.sep}.git${path.sep}`) &&
    !file.includes(`${path.sep}node_modules${path.sep}`),
);

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  const displayPath = relative(file);

  if (content.startsWith("---\n")) {
    errors.push(`${displayPath}: must not start with a standalone separator`);
  }

  const headings = contentWithoutFencedCode(content).match(/^# .+$/gm) ?? [];
  if (headings.length !== 1) {
    errors.push(`${displayPath}: expected exactly one H1, found ${headings.length}`);
  }

  const isArticle =
    (/^notes\/(agents|mcp|methods|prompts|skills|tools|workflows)\//.test(displayPath) ||
      /^projects\/[^/]+\.md$/.test(displayPath)) &&
    !displayPath.endsWith("/README.md");

  if (isArticle) {
    const lines = content.split(/\r?\n/);
    const expected = [
      /^# .+/,
      /^$/,
      /^- Source｜来源：.+/,
      /^- Type｜类型：.+/,
      /^- Link｜链接：https?:\/\/.+/,
      /^$/,
    ];

    expected.forEach((pattern, index) => {
      if (!pattern.test(lines[index] ?? "")) {
        errors.push(`${displayPath}:${index + 1}: invalid article metadata layout`);
      }
    });

    if (/^## Source｜来源/m.test(content)) {
      errors.push(`${displayPath}: must not end with a separate Source section`);
    }
  }

  for (const link of markdownLinks(content)) {
    if (/^(https?:|mailto:|#)/.test(link)) continue;

    const target = decodeURI(link.split("#")[0]);
    if (!target || target.includes(" ")) continue;

    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      errors.push(`${displayPath}: broken local link ${link}`);
    }
  }
}

for (const [directory, indexFile] of [
  ["notes", "notes/README.md"],
  ["projects", "projects/README.md"],
]) {
  const indexPath = path.join(root, indexFile);
  const indexContent = fs.readFileSync(indexPath, "utf8");
  const indexedFiles = new Set(
    markdownLinks(indexContent)
      .filter((link) => link.endsWith(".md"))
      .map((link) => path.normalize(path.join(path.dirname(indexPath), link))),
  );

  const articleFiles = walk(path.join(root, directory)).filter(
    (file) => file.endsWith(".md") && file !== indexPath,
  );

  for (const article of articleFiles) {
    if (!indexedFiles.has(path.normalize(article))) {
      errors.push(`${relative(article)}: missing from ${indexFile}`);
    }
  }

  for (const indexedFile of indexedFiles) {
    if (!fs.existsSync(indexedFile)) {
      errors.push(`${indexFile}: points to missing file ${relative(indexedFile)}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Content checks failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const articleCount = markdownFiles.filter((file) => {
  const displayPath = relative(file);
  return (
    /^notes\/(agents|mcp|methods|prompts|skills|tools|workflows)\//.test(displayPath) ||
    (/^projects\/[^/]+\.md$/.test(displayPath) && !displayPath.endsWith("/README.md"))
  );
}).length;

console.log(
  `Content checks passed: ${articleCount} articles, ${markdownFiles.length} Markdown files.`,
);
