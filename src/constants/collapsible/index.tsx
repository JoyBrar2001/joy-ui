import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { collapsibleCode } from "./code/collapsibleCode";
import { AnimatedCollapsible, ProfileSelector, ProfileSelectorControlled, SelectableCollapsible, SimpleCollapsible, SimpleCollapsibleOutlined, SimpleCollapsibleSecondary, StatusSelector } from "./components";

export const collapsibleData: ComponentCategory = {
  cols: 4,
  title: "Collapsible",
  subtitle: "A collection of Collapsibles for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-collapsible"
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
      name: "Collapsible.tsx",
      path: "@/components/ui/Collapsible.tsx",
      language: "tsx",
      code: collapsibleCode
    }
  ],
  components: [
    {
      title: "Simple Collapsible",
      component: SimpleCollapsible,
      code: ""
    },
    {
      title: "Animated Collapsible",
      component: AnimatedCollapsible,
      code: ""
    },
    {
      title: "Simple Collapsible (Secondary)",
      component: SimpleCollapsibleSecondary,
      code: ""
    },
    {
      title: "Simple Collapsible (Outlined)",
      component: SimpleCollapsibleOutlined,
      code: ""
    },
    {
      title: "Simple Collapsible (Outlined)",
      component: SimpleCollapsibleOutlined,
      code: ""
    },
    {
      title: "Selectable Collapsible (Controlled)",
      component: SelectableCollapsible,
      code: ""
    },
    {
      title: "Status Selector (Controlled)",
      component: StatusSelector,
      code: ""
    },
    {
      title: "Profile Selector",
      component: ProfileSelector,
      code: ""
    },
    {
      title: "Profile Selector (Controlled)",
      component: ProfileSelectorControlled,
      code: ""
    },
  ]
};