import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { tabsCode } from "./code";
import { SimpleTabs, TabsListWithBg, TabsTriggerRounded, TabsTriggerWithBg, TabsWithIcons, TabsWithIconsAndText, VerticalTabs, VerticalTabsWithBg, VerticalTabsWithCommonBg, VerticalTabsWithIcons, VerticalTabsWithIconsAndText } from "./components";

export const tabsData: ComponentCategory = {
  cols: 6,
  title: "Tabs",
  subtitle: "A collection of Tabs for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "lucide-react",
        "@radix-ui/react-tabs"
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
      name: "Tabs.tsx",
      path: "@/components/ui/Tabs.tsx",
      language: "tsx",
      code: tabsCode
    }
  ],
  components: [
    {
      title: "Simple Tabs",
      component: SimpleTabs
    },
    {
      title: "Tabs Trigger with Background",
      component: TabsTriggerWithBg
    },
    {
      title: "Tabs Rounded Trigger",
      component: TabsTriggerRounded
    },
    {
      title: "Tabs List with Common Background",
      component: TabsListWithBg
    },
    {
      title: "Tabs with Icons",
      component: TabsWithIcons
    },
    {
      title: "Tabs with Icons and Text",
      component: TabsWithIconsAndText
    },
    {
      title: "Vertical Tabs",
      component: VerticalTabs
    },
    {
      title: "Vertical Tabs with Icons and Text",
      component: VerticalTabsWithIconsAndText
    },
    {
      title: "Vertical Tabs with Background",
      component: VerticalTabsWithBg
    },
    {
      title: "Vertical Tabs with Common Background",
      component: VerticalTabsWithCommonBg
    },
    {
      title: "Vertical Tabs with Icons",
      component: VerticalTabsWithIcons
    },
  ],
};