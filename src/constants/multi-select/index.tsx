import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { multiSelectCode } from "./code/multiSelectCode";
import { controlledMultiSelectCode, disabledMultiSelectCode, multiSelectWithDefaultsCode, searchableMultiSelectCode, simpleMultiSelectCode } from "./code/componentCodes";
import { ControlledMultiSelect, DisabledMultiSelect, MultiSelectWithDefaults, SearchableMultiSelect, SimpleMultiSelect } from "./components";

export const multiSelectData: ComponentCategory = {
  cols: 4,
  title: "Multi-select",
  subtitle: "Select multiple values with search and checkbox support",
  steps: [{ type: "dependencies", libraries: ["clsx", "tailwind-merge", "@radix-ui/react-popover", "@radix-ui/react-checkbox", "lucide-react"] }, { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile }] }, { type: "source", name: "MultiSelect.tsx", path: "@/components/ui/MultiSelect.tsx", language: "tsx", code: multiSelectCode }],
  components: [
    { title: "Simple Multi-select", component: SimpleMultiSelect, code: simpleMultiSelectCode },
    { title: "Multi-select with Defaults", component: MultiSelectWithDefaults, code: multiSelectWithDefaultsCode },
    { title: "Searchable Multi-select", component: SearchableMultiSelect, code: searchableMultiSelectCode },
    { title: "Disabled Multi-select Option", component: DisabledMultiSelect, code: disabledMultiSelectCode },
    { title: "Controlled Multi-select", component: ControlledMultiSelect, code: controlledMultiSelectCode },
  ],
};
