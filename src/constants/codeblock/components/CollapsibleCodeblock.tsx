
import { CodeBlock } from "@/components/ui/CodeBlock";

export function CollapsibleCodeblock() {
  return (
    <CodeBlock
      tabs={[
        {
          name: "TypeScript",
          code: `// If collapse is enabled, then if the code has more than 12 lines, it can be collapsed

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

console.log(getUserById(2));`,
          language: "typescript",
          path: "@/lib/users.ts",
          highlightLines: [2, 10],
        },
      ]}
      showLineNumbers
      wrapLines
      collapsible
    />
  );
}
