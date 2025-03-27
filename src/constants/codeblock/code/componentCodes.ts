export const codeblockWithLineHighlightsCode = `import { CodeBlock } from "@/components/ui/CodeBlock"

export function CodeblockWithLineHighlights(){
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: \`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        language: "javascript",
        highlightLines: [2, 5],
      },
    ]}
    showLineNumbers
    wrapLines
  />
}`;

export const codeblockWithMultipleFilesCode = `import { CodeBlock } from "@/components/ui/CodeBlock";

export function CodeblockWithMultipleFiles() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: \`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        path: "/src/utils/greet.js",
        language: "javascript",
        highlightLines: [2, 5],
      },
      {
        name: "TypeScript",
        code: \`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        path: "/src/utils/greet.ts",
        language: "typescript",
      },
      {
        name: "Python",
        code: \`def greet(name):
    return f"Hello, {name}!"

print(greet("Joy"))\`,
        path: "/src/utils/greet.py",
        language: "python",
      },
      {
        name: "C++",
        code: \`#include <iostream>
#include <string>

std::string greet(std::string name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << greet("Joy") << std::endl;
    return 0;
}\`,
        path: "/src/utils/greet.cpp",
        language: "cpp",
        highlightLines: [5, 9]
      }
    ]}
    showLineNumbers
    wrapLines
  />
}`;

export const codeblockWithoutLineNumbersCode = `import { CodeBlock } from "@/components/ui/CodeBlock";

export function CodeblockWithoutLineNumbers() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: \`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        language: "javascript",
      },
    ]}
    showLineNumbers={false}
    wrapLines
  />
}`;

export const codeblockWithPathCode = `import { CodeBlock } from "@/components/ui/CodeBlock";

export function CodeblockWithPath() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: \`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        language: "javascript",
        path: "@/lib/greet.js",
        highlightLines: [1, 3],
      },
    ]}
    showLineNumbers
    wrapLines
  />
}`;

export const simpleOneFileCodeblockCode = `import { CodeBlock } from "@/components/ui/CodeBlock";

export function SimpleOneFileCodeblock() {
  return <CodeBlock
    tabs={[
      {
        name: "JavaScript",
        code: \`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));\`,
        language: "javascript",
      },
    ]}
    showLineNumbers
    wrapLines
  />
}`;