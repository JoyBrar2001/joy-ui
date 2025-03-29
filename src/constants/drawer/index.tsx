import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { draggableDrawerCode, drawerWithBackdropBlurCode, drawerWithBackdropCode, simpleDrawerCode, snappableDrawerCode } from "./code/componentCodes";
import { drawerCode } from "./code/drawerCode";
import { DraggableDrawer, DrawerWithBackdrop, DrawerWithBackdropBlur, SimpleDrawer, SnappableDrawer } from "./components";

export const drawerData: ComponentCategory = {
  cols: 4,
  title: "Drawer",
  subtitle: "A collection of Drawers for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "react-modal-sheet"
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
      name: "Drawer.tsx",
      path: "@/components/ui/Drawer.tsx",
      language: "tsx",
      code: drawerCode,
    }
  ],
  components: [
    {
      title: "Simple Drawer",
      component: SimpleDrawer,
      code: simpleDrawerCode
    },
    {
      title: "Drawer with Backdrop",
      component: DrawerWithBackdrop,
      code: drawerWithBackdropCode
    },
    {
      title: "Drawer with Backdrop Blur",
      component: DrawerWithBackdropBlur,
      code: drawerWithBackdropBlurCode
    },
    {
      title: "Draggable Drawer",
      component: DraggableDrawer,
      code: draggableDrawerCode
    },
    {
      title: "Snappable Drawer",
      component: SnappableDrawer,
      code: snappableDrawerCode
    },
  ]
}