import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { collapsibleCode } from "./code/collapsibleCode";
import { AnimatedCollapsible, ProfileSelector, ProfileSelectorControlled, SelectableCollapsible, SimpleCollapsible, SimpleCollapsibleOutlined, SimpleCollapsibleSecondary, StatusSelector } from "./components";
import { collapsibleCss } from "./code/collapsibleCss";
import { animatedCollapsibleCode, profileSelectorCode, profileSelectorControlledCode, selectableCollapsibleCode, simpleCollapsibleCode, simpleCollapsibleOutlinedCode, simpleCollapsibleSecondaryCode, statusSelectorCode } from "./code/componentCodes";

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
        },
        {
          name: "globals.css",
          path: "@/globals.css",
          language: "css",
          code: collapsibleCss
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
      code: simpleCollapsibleCode
    },
    {
      title: "Animated Collapsible",
      component: AnimatedCollapsible,
      code: animatedCollapsibleCode
    },
    {
      title: "Simple Collapsible (Secondary)",
      component: SimpleCollapsibleSecondary,
      code: simpleCollapsibleSecondaryCode
    },
    {
      title: "Simple Collapsible (Outlined)",
      component: SimpleCollapsibleOutlined,
      code: simpleCollapsibleOutlinedCode
    },
    {
      title: "Selectable Collapsible (Controlled)",
      component: SelectableCollapsible,
      code: selectableCollapsibleCode
    },
    {
      title: "Status Selector (Controlled)",
      component: StatusSelector,
      code: statusSelectorCode
    },
    {
      title: "Profile Selector",
      component: ProfileSelector,
      code: profileSelectorCode
    },
    {
      title: "Profile Selector (Controlled)",
      component: ProfileSelectorControlled,
      code: profileSelectorControlledCode
    },
  ]
};