import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { tabsCode } from "./code";
import { simpleTabsCode, tabsListWithBgCode, tabsTriggerRoundedCode, tabsTriggerWithBgCode, tabsWithIconsAndTextCode, tabsWithIconsCode, verticalTabsCode, verticalTabsWithBgCode, verticalTabsWithCommonBgCode, verticalTabsWithIconsAndTextCode, verticalTabsWithIconsCode } from "./code/componentCodes";
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
      component: SimpleTabs,
      code: simpleTabsCode
    },
    {
      title: "Tabs Trigger with Background",
      component: TabsTriggerWithBg,
      code: tabsTriggerWithBgCode
    },
    {
      title: "Tabs Rounded Trigger",
      component: TabsTriggerRounded,
      code: tabsTriggerRoundedCode
    },
    {
      title: "Tabs List with Common Background",
      component: TabsListWithBg,
      code: tabsListWithBgCode
    },
    {
      title: "Tabs with Icons",
      component: TabsWithIcons,
      code: tabsWithIconsCode
    },
    {
      title: "Tabs with Icons and Text",
      component: TabsWithIconsAndText,
      code: tabsWithIconsAndTextCode
    },
    {
      title: "Vertical Tabs",
      component: VerticalTabs,
      code: verticalTabsCode
    },
    {
      title: "Vertical Tabs with Icons and Text",
      component: VerticalTabsWithIconsAndText,
      code: verticalTabsWithIconsAndTextCode
    },
    {
      title: "Vertical Tabs with Background",
      component: VerticalTabsWithBg,
      code: verticalTabsWithBgCode
    },
    {
      title: "Vertical Tabs with Common Background",
      component: VerticalTabsWithCommonBg,
      code: verticalTabsWithCommonBgCode
    },
    {
      title: "Vertical Tabs with Icons",
      component: VerticalTabsWithIcons,
      code: verticalTabsWithIconsCode
    },
  ],
};