import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { selectCode } from "./code/selectCode";
import { SelectDisabled, SelectStatus, SelectWithAvatar, SelectWithCustomIcon, SelectWithDefaultValue, SelectWithDisabledOptions, SelectWithGroups, SelectWithIcons, SelectWithScroll, SelectWithScrollIcons, SelectWithSearch, SelectWithSeparator, SimpleSelect, SimpleSelectAnimated } from "./components";
import { selectCss } from "./code/selectCss";
import { selectDisabledCode, selectStatusCode, selectWithAvatarCode, selectWithCustomIconCode, selectWithDefaultValueCode, selectWithDisabledOptionsCode, selectWithGroupsCode, selectWithIconsCode, selectWithScrollCode, selectWithScrollIconsCode, selectWithSearchCode, selectWithSeparatorCode, simpleSelectAnimatedCode, simpleSelectCode } from "./code/componentCodes";

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
        },
        {
          name: "globals.css",
          path: "@/globals.css",
          language: "css",
          code: selectCss
        },
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
      code: simpleSelectCode
    },
    {
      title: "Disabled Select",
      component: SelectDisabled,
      code: selectDisabledCode
    },
    {
      title: "Simple Select (Animated)",
      component: SimpleSelectAnimated,
      code: simpleSelectAnimatedCode
    },
    {
      title: "Select with default value",
      component: SelectWithDefaultValue,
      code: selectWithDefaultValueCode
    },
    {
      title: "Select with Icons",
      component: SelectWithIcons,
      code: selectWithIconsCode
    },
    {
      title: "Select Status",
      component: SelectStatus,
      code: selectStatusCode
    },
    {
      title: "Select With Avatar",
      component: SelectWithAvatar,
      code: selectWithAvatarCode
    },
    {
      title: "Select with custom icon",
      component: SelectWithCustomIcon,
      code: selectWithCustomIconCode
    },
    {
      title: "Select with disabled options",
      component: SelectWithDisabledOptions,
      code: selectWithDisabledOptionsCode
    },
    {
      title: "Select with groups",
      component: SelectWithGroups,
      code: selectWithGroupsCode
    },
    {
      title: "Select with Separators",
      component: SelectWithSeparator,
      code: selectWithSeparatorCode
    },
    {
      title: "Select with Search",
      component: SelectWithSearch,
      code: selectWithSearchCode
    },
    {
      title: "Select with Scroll",
      component: SelectWithScroll,
      code: selectWithScrollCode
    },
    {
      title: "Select with Scroll Icons",
      component: SelectWithScrollIcons,
      code: selectWithScrollIconsCode
    },

  ],
};