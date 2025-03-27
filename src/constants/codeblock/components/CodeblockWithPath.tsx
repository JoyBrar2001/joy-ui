import { CodeBlock } from "@/components/ui/CodeBlock";

export function CodeblockWithPath() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
        language: "javascript",
        path: "@/lib/greet.js",
        highlightLines: [1, 3],
      },
    ]}
    showLineNumbers
    wrapLines
  />
}