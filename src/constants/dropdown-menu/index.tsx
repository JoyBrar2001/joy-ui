import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { dropdownMenuCode } from "./code/dropdownMenuCode";
import { actionsDropdownMenuCode, checkboxDropdownMenuCode, nestedDropdownMenuCode, simpleDropdownMenuCode } from "./code/componentCodes";
import { ActionsDropdownMenu, CheckboxDropdownMenu, NestedDropdownMenu, SimpleDropdownMenu } from "./components";

export const dropdownMenuData: ComponentCategory = {
  cols: 4,
  title: "Dropdown Menu",
  subtitle: "A collection of accessible action menus for contextual commands",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge", "@radix-ui/react-dropdown-menu", "lucide-react"],
    },
    {
      type: "utilities",
      files: [
        { name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile },
      ],
    },
    {
      type: "source",
      name: "DropdownMenu.tsx",
      path: "@/components/ui/DropdownMenu.tsx",
      language: "tsx",
      code: dropdownMenuCode,
    },
  ],
  components: [
    { title: "Simple Dropdown Menu", component: SimpleDropdownMenu, code: simpleDropdownMenuCode },
    { title: "Actions Dropdown Menu", component: ActionsDropdownMenu, code: actionsDropdownMenuCode },
    { title: "Checkbox Dropdown Menu", component: CheckboxDropdownMenu, code: checkboxDropdownMenuCode },
    { title: "Nested Dropdown Menu", component: NestedDropdownMenu, code: nestedDropdownMenuCode },
  ],
};
