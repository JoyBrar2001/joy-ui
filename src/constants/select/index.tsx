import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { selectCode } from "./code/selectCode";
import { SelectDisabled, SelectStatus, SelectWithAvatar, SelectWithCustomIcon, SelectWithDefaultValue, SelectWithDisabledOptions, SelectWithGroups, SelectWithIcons, SelectWithScroll, SelectWithScrollIcons, SelectWithSearch, SelectWithSeparator, SimpleSelect, SimpleSelectAnimated } from "./components";

export const selectData: ComponentCategory = {
  cols: 4,
  title: "Select",
  subtitle: "A collection of Selects for you to use",
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
    {
      title: "Disabled Select",
      component: SelectDisabled,
      code: ""
    },
    {
      title: "Simple Select (Animated)",
      component: SimpleSelectAnimated,
      code: ""
    },
    {
      title: "Select with default value",
      component: SelectWithDefaultValue,
      code: ""
    },
    {
      title: "Select with Icons",
      component: SelectWithIcons,
      code: ""
    },
    {
      title: "Select Status",
      component: SelectStatus,
      code: ""
    },
    {
      title: "Select With Avatar",
      component: SelectWithAvatar,
      code: ""
    },
    {
      title: "Select with custom icon",
      component: SelectWithCustomIcon,
      code: ""
    },
    {
      title: "Select with disabled options",
      component: SelectWithDisabledOptions,
      code: ""
    },
    {
      title: "Select with groups",
      component: SelectWithGroups,
      code: ""
    },
    {
      title: "Select with Separators",
      component: SelectWithSeparator,
      code: ""
    },
    {
      title: "Select with Search",
      component: SelectWithSearch,
      code: ""
    },
    {
      title: "Select with Scroll",
      component: SelectWithScroll,
      code: ""
    },
    {
      title: "Select with Scroll Icons",
      component: SelectWithScrollIcons,
      code: ""
    },

  ],
};