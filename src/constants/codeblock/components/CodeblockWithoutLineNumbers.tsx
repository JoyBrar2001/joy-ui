import { CodeBlock } from "@/components/ui/CodeBlock";

export function CodeblockWithoutLineNumbers() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
        language: "javascript",
      },
    ]}
    showLineNumbers={false}
    wrapLines
  />
}