import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { codeblockCode } from "./code/codeBlockCode";

import {
  CodeblockWithLineHighlights,
  CodeblockWithMultipleFiles,
  CodeblockWithoutLineNumbers,
  CodeblockWithPath,
  SimpleOneFileCodeblock
} from "./components";
import {
  codeblockWithLineHighlightsCode,
  codeblockWithMultipleFilesCode,
  codeblockWithoutLineNumbersCode,
  codeblockWithPathCode,
  simpleOneFileCodeblockCode,
} from "./code/componentCodes";

export const codeblockData: ComponentCategory = {
  cols: 6,
  title: "Code Block",
  subtitle: "A collection of Codeblocks for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "react-syntax-highlighter"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "CodeBlock.tsx",
      path: "@/components/ui/CodeBlock.tsx",
      language: "tsx",
      code: codeblockCode
    }
  ],
  components: [
    {
      title: "Simple One file CodeBlock",
      component: SimpleOneFileCodeblock,
      code: simpleOneFileCodeblockCode
    },
    {
      title: "CodeBlock without Line Numbers",
      component: CodeblockWithoutLineNumbers,
      code: codeblockWithoutLineNumbersCode
    },
    {
      title: "CodeBlock with line Highlights",
      component: CodeblockWithLineHighlights,
      code: codeblockWithLineHighlightsCode
    },
    {
      title: "CodeBlock with Path",
      component: CodeblockWithPath,
      code: codeblockWithPathCode
    },
    {
      title: "CodeBlock with Multiple Files",
      component: CodeblockWithMultipleFiles,
      code: codeblockWithMultipleFilesCode
    },
  ]
};