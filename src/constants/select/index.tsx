import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { selectCode } from "./code/selectCode";
import { SimpleSelect } from "./components";

export const selectData: ComponentCategory = {
  cols: 6,
  title: "Scroll Area",
  subtitle: "A collection of Scroll Areas for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-select"
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
      name: "Select.tsx",
      path: "@/components/ui/Select.tsx",
      language: "tsx",
      code: selectCode
    }
  ],
  components: [
    {
      title: "Simple Select",
      component: SimpleSelect,
      code: ""
    },
  ],
};