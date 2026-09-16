import type { ComponentCategory } from "../data";
import { contextMenuCode } from "./code/contextMenuCode";
import {
  basicCode,
  checkboxCode,
  fileCode,
  nestedCode,
  selectionCode,
} from "./code/componentCodes";
import {
  BasicContextMenu,
  CheckboxContextMenu,
  FileContextMenu,
  NestedContextMenu,
  SelectionContextMenu,
} from "./components";
export const contextMenuData: ComponentCategory = {
  cols: 6,
  title: "Context Menu",
  subtitle:
    "Pointer and long-press menus for contextual actions, nested commands, and file interactions.",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge", "@radix-ui/react-context-menu"],
    },
    {
      type: "source",
      name: "ContextMenu.tsx",
      path: "@/components/ui/ContextMenu.tsx",
      language: "tsx",
      code: contextMenuCode,
    },
  ],
  components: [
    {
      title: "Basic Context Menu",
      component: BasicContextMenu,
      code: basicCode,
    },
    {
      title: "Checkbox Context Menu",
      component: CheckboxContextMenu,
      code: checkboxCode,
    },
    {
      title: "Nested Context Menu",
      component: NestedContextMenu,
      code: nestedCode,
    },
    { title: "File Context Menu", component: FileContextMenu, code: fileCode },
    {
      title: "Selection Context Menu",
      component: SelectionContextMenu,
      code: selectionCode,
    },
  ],
};
