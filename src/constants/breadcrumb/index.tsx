import type { ComponentCategory } from "../data";
import { breadcrumbCode } from "./code/breadcrumbCode";
import {
  customSeparatorCode,
  dropdownCode,
  iconCode,
  longCode,
  moreOptionsCode,
  moreOptionsHoverCode,
  threeNestedCode,
  twoNestedCode,
} from "./code/componentCodes";
import {
  CustomSeparatorBreadcrumb,
  DropdownBreadcrumb,
  IconBreadcrumb,
  LongBreadcrumb,
  MoreOptionsBreadcrumb,
  MoreOptionsHoverBreadcrumb,
  ThreeNestedBreadcrumb,
  TwoNestedBreadcrumb,
} from "./components";

export const breadcrumbData: ComponentCategory = {
  cols: 6,
  title: "Breadcrumb",
  subtitle:
    "Composable navigation trails with editable entries, separators, dropdowns, and collapsed paths.",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge", "lucide-react"],
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: `export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }`,
        },
      ],
    },
    {
      type: "source",
      name: "Breadcrumb.tsx",
      path: "@/components/ui/Breadcrumb.tsx",
      language: "tsx",
      code: breadcrumbCode,
    },
  ],
  components: [
    {
      title: "Two Nested Levels",
      component: TwoNestedBreadcrumb,
      code: twoNestedCode,
    },
    {
      title: "Three Nested Levels",
      component: ThreeNestedBreadcrumb,
      code: threeNestedCode,
    },
    {
      title: "Custom Separator",
      component: CustomSeparatorBreadcrumb,
      code: customSeparatorCode,
    },
    {
      title: "Breadcrumb with Dropdown",
      component: DropdownBreadcrumb,
      code: dropdownCode,
    },
    {
      title: "Breadcrumb with More Options",
      component: MoreOptionsBreadcrumb,
      code: moreOptionsCode,
    },
    {
      title: "More Options on Hover",
      component: MoreOptionsHoverBreadcrumb,
      code: moreOptionsHoverCode,
    },
    {
      title: "Breadcrumb with Icons",
      component: IconBreadcrumb,
      code: iconCode,
    },
    { title: "Long Breadcrumb", component: LongBreadcrumb, code: longCode },
  ],
};
