import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { popoverCode } from "./code/popoverCode";
import { popoverCss } from "./code/popoverCss";
import { MenuPopover, ProfileCardPopover, SimpleBottomPopover, SimpleLeftPopover, SimpleRightPopover, SimpleTopPopover } from "./components";
import { menuPopoverCode, profileCardPopoverCode, simpleBottomPopoverCode, simpleLeftPopoverCode, simpleRightPopoverCode, simpleTopPopoverCode } from "./code/componentCodes";

export const popoverData: ComponentCategory = {
  cols: 4,
  title: "Popover",
  subtitle: "A collection of Popovers for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-popover"
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
          code: popoverCss
        },
      ]
    },
    {
      type: "source",
      name: "Popover.tsx",
      path: "@/components/ui/Popover.tsx",
      language: "tsx",
      code: popoverCode
    }
  ],
  components: [
    {
      title: "Simple Popover (Bottom)",
      component: SimpleBottomPopover,
      code: simpleBottomPopoverCode
    },
    {
      title: "Profile Card Popover",
      component: ProfileCardPopover,
      code: profileCardPopoverCode
    },
    {
      title: "Menu Popover",
      component: MenuPopover,
      code: menuPopoverCode
    },
    {
      title: "Simple Popover (Top)",
      component: SimpleTopPopover,
      code: simpleTopPopoverCode
    },
    {
      title: "Simple Popover (Left)",
      component: SimpleLeftPopover,
      code: simpleLeftPopoverCode
    },
    {
      title: "Simple Popover (Right)",
      component: SimpleRightPopover,
      code: simpleRightPopoverCode
    },
  ],
};