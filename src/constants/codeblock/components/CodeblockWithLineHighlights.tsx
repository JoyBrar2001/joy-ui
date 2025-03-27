import { CodeBlock } from "@/components/ui/CodeBlock"

export function CodeblockWithLineHighlights(){
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
        language: "javascript",
        highlightLines: [2, 5],
      },
    ]}
    showLineNumbers
    wrapLines
  />
}