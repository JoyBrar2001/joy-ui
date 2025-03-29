import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { hoverCardWithArrowCode, profileHoverCardCode, simpleHoverCardCode, simpleHoverCardLeftCode, simpleHoverCardRightCode, simpleHoverCardTopCode } from "./code/componentCodes";
import { hoverCardCode } from "./code/hoverCardCode";
import { HoverCardWithArrow, ProfileHoverCard, SimpleHoverCard, SimpleHoverCardLeft, SimpleHoverCardRight, SimpleHoverCardTop } from "./components";

export const hoverCardData: ComponentCategory = {
  cols: 4,
  title: "Hover Card",
  subtitle: "A collection of Hover Cards for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-hover-card"
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
      name: "HoverCard.tsx",
      path: "@/components/ui/HoverCard.tsx",
      language: "tsx",
      code: hoverCardCode
    }
  ],
  components: [
    {
      title: "Simple Hover Card",
      component: SimpleHoverCard,
      code: simpleHoverCardCode
    },
    {
      title: "Hover Card with Arrow",
      component: HoverCardWithArrow,
      code: hoverCardWithArrowCode
    },
    {
      title: "Profile Hover Card",
      component: ProfileHoverCard,
      code: profileHoverCardCode
    },
    {
      title: "Simple Hover Card (Left)",
      component: SimpleHoverCardLeft,
      code: simpleHoverCardLeftCode
    },
    {
      title: "Simple Hover Card (Right)",
      component: SimpleHoverCardRight,
      code: simpleHoverCardRightCode
    },
    {
      title: "Simple Hover Card (Top)",
      component: SimpleHoverCardTop,
      code: simpleHoverCardTopCode
    },
  ]
}